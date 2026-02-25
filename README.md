# Solon

Bitcoin-native governance platform — transparent treasuries and cryptographic democracy.

## Vision

Organizations deserve financial transparency and verifiable decision-making. Solon brings both on-chain, built on Bitcoin:

1. **Transparent Treasuries** — Real-time, publicly auditable fund management via Bitcoin
2. **Cryptographic Democracy** — Tamper-proof voting with verifiable results
3. **Open Governance** — Every decision, every transaction, visible to all stakeholders

## Current State (MVP)

This MVP implements Pillar 1 (Treasury) and Pillar 4 (Voting) with the Solon brand identity. Bitcoin wallet and BTCPay integrations are stubbed for local development.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL + Prisma ORM
- **Integrations**: BTCPay Server, Bitcoin Core (stubbed in MVP)

## Getting Started

```bash
cp .env.example .env        # Configure environment
npm install
npm run prisma:generate      # Generate Prisma client
npm run prisma:push           # Push schema to database
npm run dev                   # Start dev server
```

## Project Structure

```
src/
  app/(marketing)/page.tsx                          — Landing page
  app/api/bitcoin/wallet/[orgId]/                   — Wallet balance & transactions
  app/api/voting/[sessionId]/cryptographic-vote/    — Vote submission
  components/dashboard/bitcoin-treasury.tsx          — Treasury dashboard
  components/dashboard/voting-interface.tsx           — Voting interface
prisma/schema.prisma                                 — Database schema
```

## Roadmap

- [ ] Real BTCPay Server integration
- [ ] Wallet signature verification
- [ ] Authentication (Clerk)
- [ ] Multi-organization support
- [ ] On-chain vote anchoring

## License

MIT
