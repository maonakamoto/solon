/**
 * Real Bitcoin signing/verification helpers, built on lib/bitcoin/message.ts.
 * Nothing here returns a hard-coded "true" — every check recovers a public key
 * from the signature and compares the derived address.
 */
import { signMessage, verifyMessage, type VerifyResult } from "@/lib/bitcoin/message";

/** Canonical text a signer commits to when approving a decision. */
export function decisionMessage(decisionId: string, signerAddress: string): string {
  return `Solon decision\ndecision:${decisionId}\nsigner:${signerAddress}`;
}

export class BitcoinSignatureAuth {
  /** Sign a governance decision with a member's private key (hex). */
  signDecision(decisionId: string, signerAddress: string, privateKeyHex: string): string {
    return signMessage(decisionMessage(decisionId, signerAddress), privateKeyHex);
  }

  /** Verify a decision signature against the signer's Bitcoin address. */
  verifyDecision(decisionId: string, signerAddress: string, signature: string): VerifyResult {
    return verifyMessage(decisionMessage(decisionId, signerAddress), signerAddress, signature);
  }
}
