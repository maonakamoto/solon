import { prisma } from "@/lib/db";
import { verifyMessage, voteMessage, type VerifyResult } from "@/lib/bitcoin/message";

export type VoteChoice = 'yes' | 'no' | 'abstain';

export interface SubmitVoteInput {
  /** Bitcoin address of the voting member (must be a registered member). */
  address: string;
  choice: VoteChoice;
  /** Base64 Bitcoin signed-message signature over the canonical vote message. */
  signature: string;
}

export interface SubmitVoteResult {
  stored: boolean;
  verified: boolean;
  reason?: string;
  verification: VerifyResult;
  tally?: Record<VoteChoice, number>;
  voteId?: string;
}

/**
 * Cryptographic democracy: a vote counts only if its Bitcoin signature
 * verifies against the member's address. No authority is trusted — the
 * signature is the authorization. Invalid signatures are never stored.
 */
export class Democracy {
  async submitVote(sessionId: string, input: SubmitVoteInput): Promise<SubmitVoteResult> {
    const message = voteMessage({ sessionId, choice: input.choice, memberAddress: input.address });
    const verification = verifyMessage(message, input.address, input.signature);
    if (!verification.valid) {
      return { stored: false, verified: false, reason: verification.reason ?? 'signature does not match address', verification };
    }

    const session = await prisma.voting_sessions.findUnique({ where: { id: sessionId } });
    if (!session) return { stored: false, verified: true, reason: 'voting session not found', verification };
    if (session.status !== 'active') return { stored: false, verified: true, reason: `voting session is ${session.status}`, verification };

    // Only registered members of this organization may vote — resolved by the
    // address recovered from the signature, not by any claim the caller makes.
    const member = await prisma.members.findFirst({
      where: { organization_id: session.organization_id, bitcoin_address: input.address, status: 'active' },
    });
    if (!member) return { stored: false, verified: true, reason: 'address is not an active member of this organization', verification };

    const vote = await prisma.votes.upsert({
      where: { voting_session_id_member_id: { voting_session_id: sessionId, member_id: member.id } },
      create: {
        voting_session_id: sessionId,
        member_id: member.id,
        vote_choice: input.choice,
        weight: member.voting_weight,
        bitcoin_signature: input.signature,
      },
      update: { vote_choice: input.choice, bitcoin_signature: input.signature, signed_at: new Date() },
    });

    const tally = await this.tally(sessionId);
    await prisma.voting_sessions.update({
      where: { id: sessionId },
      data: { total_votes_cast: tally.yes + tally.no + tally.abstain },
    });

    return { stored: true, verified: true, verification, tally, voteId: vote.id };
  }

  /** Weighted tally over all stored (already-verified) votes in a session. */
  async tally(sessionId: string): Promise<Record<VoteChoice, number>> {
    const votes = await prisma.votes.findMany({ where: { voting_session_id: sessionId } });
    const t: Record<VoteChoice, number> = { yes: 0, no: 0, abstain: 0 };
    for (const v of votes) {
      const choice = v.vote_choice as VoteChoice;
      if (choice in t) t[choice] += Number(v.weight);
    }
    return t;
  }
}
