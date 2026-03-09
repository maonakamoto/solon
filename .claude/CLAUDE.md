# Solon

@~/.claude/CLAUDE.md

---

## Overview

**Solon** is a Bitcoin-native governance platform for transparent treasury management and democratic decision-making through cryptographic voting.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14.2.5 (App Router) |
| Language | TypeScript 5.5.3 |
| Styling | Tailwind CSS 3.4.9 |
| Database | PostgreSQL with Prisma |
| Testing | Playwright + Puppeteer |
| Bitcoin | BTCPay/Bitcoin Core |

---

## Project Structure

```
src/
├── app/
│   ├── (dashboard)/       # Dashboard routes
│   ├── (marketing)/       # Landing pages
│   ├── governance/        # Voting, decisions
│   └── treasury/          # Bitcoin treasury
├── components/
│   ├── ui/               # Core UI
│   ├── dashboard/        # Dashboard components
│   └── bitcoin/          # Bitcoin components
├── lib/
│   ├── solon/           # Core Solon logic
│   └── bitcoin/         # Bitcoin integration
└── i18n/                 # Internationalization
```

---

## Four Pillars

1. **Transparent Treasury** - Bitcoin wallet + transaction history
2. **Democratic Voting** - Cryptographic vote verification
3. **Decision Making** - Proposal creation and management
4. **Audit Trail** - Complete transparency

---

## Design System

| Element | Value |
|---------|-------|
| Primary | Navy `#1e293b` |
| Accent | Orange `#f97316` |
| Bitcoin | Orange `#F7931A` |

---

## Navigation Structure

### Platform
- Overview → `/`
- Features → `/features`
- Security → `/security`
- Integration → `/integration`

### Governance
- Voting System → `/governance/voting`
- Decision Making → `/governance/decisions`
- Transparency → `/governance/transparency`
- Audit Trail → `/governance/audit`

### Treasury
- Bitcoin Treasury → `/treasury/bitcoin`
- Transaction History → `/treasury/transactions`
- Budget Tracking → `/treasury/budget`
- Financial Reports → `/treasury/reports`

---

## API Structure

```typescript
// Treasury
GET /api/treasury/balance
GET /api/treasury/transactions
POST /api/treasury/proposal

// Voting
GET /api/voting/active
POST /api/voting/cast
GET /api/voting/results

// Governance
GET /api/governance/decisions
POST /api/governance/decision
GET /api/governance/audit
```

---

## Quick Start

```bash
cp .env.example .env
npm install
npm run prisma:generate
npm run prisma:push
npm run dev
```

---

## Testing

```bash
npm run test:e2e           # Playwright tests
npm run test:puppeteer     # Smoke tests
npm run test:puppeteer:mega  # Mega menu tests
```

---

## Don't

- Skip cryptographic verification for votes
- Expose private keys or wallet secrets
- Hardcode Bitcoin addresses
- Commit .env files

---

**Last Updated**: 2026-01-23
