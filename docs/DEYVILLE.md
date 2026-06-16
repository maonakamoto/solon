# Deyville — the governance OS for towns

**Status**: Concept / pivot capture
**Captured**: 2026-06-13
**Proposed rename**: `Solon` → `Deyville`
**Domains**: `deyville.com` + `deyville.town` (both appeared AVAILABLE as of 2026-06-13 — register before building)

---

## 1. The pivot in one line

Keep everything Solon already is — **Bitcoin-native governance: transparent treasury, cryptographic voting, open procurement, auditable law** — and reposition it from "a governance tool" into **the operating system a town runs on.** Deyville is what a place uses to govern itself.

## 2. Why this is a reposition, not a rewrite

Solon's four pillars are *already* the civic backbone of a self-governing town. Nothing is wasted:

| Solon pillar (today) | = Deyville civic function |
|----------------------|----------------------------|
| Transparent Transaction System (multi-sig BTC treasury, sats as BigInt) | The town treasury — every public franc on-chain and auditable |
| Law Transparency Framework (signed Decisions + KPIs) | The town's laws and the record of how they were decided |
| Open procurement / bids / vendor scoring | How the town buys services in the open |
| Bitcoin-key voting, one-member-one-vote | How residents actually decide |

The work is **renaming + framing + a "town" as the top-level entity**, not rebuilding governance from scratch. That's the opposite of throwing Solon away.

## 3. The bigger idea: towns, not countries

The thesis behind the rename: *why countries at all?* If the world were towns and cities rather than nation-states, governance would be:
- **Small enough to be legible** — a resident can actually understand and audit their town.
- **Voluntary and competitive** — people (and ideas, capital, talent) move between towns; towns improve to attract them. Exit is a real check on power, not a once-a-lifetime emigration.
- **Composable** — towns federate for the few things that genuinely need scale (defense, standards, large infrastructure) without surrendering local sovereignty.

This isn't fringe — it's a live intellectual lineage: historical **city-states** (Venice, the Hanseatic League, Singapore today), **charter cities** (Paul Romer), the **network state** (Balaji Srinivasan), **seasteading**, and **panarchy**. Deyville's contribution is the *software substrate*: the actual OS that lets a town run its money, laws, and decisions transparently — the thing all those theories assume but none ship.

## 4. Honest grounding (where software ends and the world begins)

So the vision stays sharp rather than romantic:

- **Software can give a town legitimacy, transparency, and self-governance. It cannot by itself confer sovereignty.** "Declare independence and have countries cede territory" is a *legal-political* outcome, not a feature flag. What Deyville *can* do is make a community so well-governed, transparent, and economically real that recognition becomes negotiable — start with what's legal today (a transparent association / co-op / special economic zone / charter-city agreement with a willing host government) and earn legitimacy upward.
- **Start where you can win.** A real HOA, a co-living community, a DAO with a physical clubhouse, a village that wants transparent finances — these can adopt Deyville *now*, legally, and prove the model. "Sovereign Deyville" is the north star; a town that runs its treasury on Deyville is this quarter.
- **The "open offer to all countries to cede territory" is a manifesto, not a roadmap item.** Keep it as the rallying story; don't let it block shipping the governance OS that makes the story credible.

## 5. How Deyville fits the ecosystem

Deyville is the **governance/civic layer**; it composes with the rest:

- **OrangeCat** — the economic layer. A Deyville town's treasury, resident payments, and local economy settle through OrangeCat; **Flecoin** can be a town's unit of account / shared currency.
- **FleetCrown** — fleet/agent operations; a town's services and back-office can run as monitored agents.
- **Genesis** — culture: a town's residents generate and trade original art/music/film (the creator economy), giving the town an identity beyond administration.
- Per the ecosystem principle: **Deyville holds accounts and reputation in the others, and they in it** — each town is a first-class participant in the shared economy and trust graph.

## 6. Open questions

1. **Rename scope** — full refactor now (`package.json`, repo, all docs, domain) or keep the `solon` codebase and ship Deyville as the brand/product layer first?
2. **Top-level entity** — does the data model add `Town` above `Organization`, or is a Town just an Organization with civic features turned on?
3. **First real adopter** — which legal-today community (co-op / HOA / DAO+clubhouse / village) is the wedge? That choice shapes the v1 feature set far more than the sovereignty story.
4. **Identity** — residency/citizenship model: how does someone become a verified member of a town, and how does that interplay with OrangeCat identity?
5. **Federation** — how do towns interoperate (shared standards, mutual recognition, cross-town reputation) without recreating a central state?

---

*Captured from a product conversation on 2026-06-13. The governance engine exists (Solon); this doc is about renaming, reframing, and adding a "Town" as the top-level civic entity. Resolve §6.1 before any rename refactor.*
