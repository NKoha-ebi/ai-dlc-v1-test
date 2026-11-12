export const categories = ['run', 'firestore', 'load-balancer', 'egress', 'inter-region', 'secret-image', 'observability', 'residual'] as const;
export interface PriceItem {
  category: typeof categories[number]; region: string; sku: string; unit: string;
  unitPrice: number | null; priceDate: string; quantity: number | null;
  lifetimeHours: number | null; currency: string; source: string;
}
export function estimate(items: PriceItem[]) {
  const missing: string[] = [];
  for (const c of categories) if (!items.some(i => i.category === c)) missing.push(`missing category:${c}`);
  let knownSubtotal = 0;
  const currencies = new Set<string>();
  for (const [n, i] of items.entries()) {
    const errors = [];
    if (!categories.includes(i.category)) errors.push('category');
    if (!i.region || !i.sku || !i.unit || !i.currency || !i.source) errors.push('region/sku/unit/currency/source');
    const parsed = Date.parse(i.priceDate);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(i.priceDate) || Number.isNaN(parsed) || new Date(parsed).toISOString().slice(0, 10) !== i.priceDate) errors.push('priceDate');
    for (const k of ['unitPrice', 'quantity', 'lifetimeHours'] as const) if (typeof i[k] !== 'number' || !Number.isFinite(i[k]) || i[k]! < 0) errors.push(k);
    if (errors.length) missing.push(`item ${n}:${errors.join(',')}`);
    else { knownSubtotal += i.unitPrice! * i.quantity!; currencies.add(i.currency); }
  }
  if (currencies.size > 1) missing.push('mixed currencies: explicit conversion required');
  if (!Number.isFinite(knownSubtotal)) missing.push('numeric overflow');
  return { status: missing.length ? 'INCOMPLETE' : 'COMPLETE', total: missing.length ? null : knownSubtotal,
    knownSubtotal, currency: currencies.size === 1 ? [...currencies][0] : null, missing,
    trials: { investigation: 22, canaryApiMinimum: 1800, canaryAiPdf: 60, realAiExecuted: false },
    note: 'Quantity is in the declared SKU unit; multiply usage by lifetime before input when billed per hour. No free tier or reserve is assumed.' };
}
