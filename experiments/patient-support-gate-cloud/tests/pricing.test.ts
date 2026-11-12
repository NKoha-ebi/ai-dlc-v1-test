import { it, expect } from 'vitest';
import fc from 'fast-check';
import { estimate, categories, type PriceItem } from '../tools/pricing.ts';
const complete = (): PriceItem[] => categories.map(category => ({ category, region: 'asia-northeast1', sku: 'test-only', unit: 'hour', unitPrice: 2, priceDate: '2026-11-12', quantity: 3, lifetimeHours: 3, currency: 'USD', source: 'synthetic-fixture' }));
it('rejects impossible dates and mixed currencies', () => {
  const items = complete(); items[0]!.priceDate = '2026-02-31';
  expect(estimate(items).status).toBe('INCOMPLETE');
  items[0]!.priceDate = '2026-02-28'; items[0]!.currency = 'JPY';
  expect(estimate(items).total).toBeNull();
});
it('does not treat missing prices or categories as zero', () => {
  const items = complete(); items[0]!.unitPrice = null;
  expect(estimate(items).total).toBeNull(); expect(estimate([]).status).toBe('INCOMPLETE');
});
it('counts a genuine zero with evidence and separates trial groups', () => {
  const items = complete(); items[0]!.unitPrice = 0;
  expect(estimate(items)).toMatchObject({ status: 'COMPLETE', total: 42, trials: { investigation: 22, canaryApiMinimum: 1800, canaryAiPdf: 60 } });
});
it('PBT-03 any unknown price keeps total unknown', () => {
  fc.assert(fc.property(fc.record({ index: fc.integer({ min: 0, max: 7 }), quantity: fc.integer({ min: 0, max: 1000000 }) }), p => {
    const items = complete(); items[p.index]!.unitPrice = null; items[p.index]!.quantity = p.quantity;
    expect(estimate(items).status).toBe('INCOMPLETE'); expect(estimate(items).total).toBeNull();
  }), { seed: Number(process.env.FC_SEED ?? 20261112), numRuns: 300 });
});
