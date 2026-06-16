import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getAddressBalance } from "@/lib/bitcoin/mempool";

export async function GET(_: Request, { params }: { params: { orgId: string } }) {
  const { orgId } = params;
  const org = await prisma.organizations.findUnique({ where: { id: orgId } });
  if (!org) return NextResponse.json({ error: 'Organization not found' }, { status: 404 });

  const txs = await prisma.bitcoin_transactions.findMany({
    where: { organization_id: orgId },
    orderBy: { transaction_date: 'desc' },
    take: 25,
  });

  // The treasury address is held in the org's wallet field. Balance is read
  // live from the chain (mempool.space) — never asserted, never custodied.
  // Fall back to the recorded-transaction sum if the chain lookup fails.
  const treasuryAddress = org.bitcoin_wallet_xpub;
  let balance_sats = 0;
  let balance_source: 'onchain' | 'recorded' = 'recorded';
  try {
    if (treasuryAddress && /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{20,}$/.test(treasuryAddress)) {
      const bal = await getAddressBalance(treasuryAddress);
      balance_sats = bal.total_sats;
      balance_source = 'onchain';
    } else {
      throw new Error('no treasury address');
    }
  } catch {
    balance_sats = txs.reduce((sum, t) => sum + Number(t.amount_sats), 0);
  }

  return NextResponse.json({ treasury_address: treasuryAddress, balance_sats, balance_source, transactions: txs });
}

export async function PUT(req: Request, { params }: { params: { orgId: string } }) {
  const body = await req.json();
  const { txid, category } = body;
  if (!txid || !category) return NextResponse.json({ error: 'txid and category required' }, { status: 400 });
  const updated = await prisma.bitcoin_transactions.update({ where: { txid }, data: { category } });
  return NextResponse.json(updated);
}
