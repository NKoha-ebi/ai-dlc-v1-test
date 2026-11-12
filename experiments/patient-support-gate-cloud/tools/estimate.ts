import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { estimate, type PriceItem } from './pricing.ts';
const input: unknown = JSON.parse(readFileSync(process.argv[2] ?? 'fixtures/pricing-input.json', 'utf8'));
if (!Array.isArray(input) || input.some(x => !x || typeof x !== 'object')) throw new Error('PRICING_ARRAY_REQUIRED');
const output = `${JSON.stringify(estimate(input as PriceItem[]), null, 2)}\n`;
mkdirSync('artifacts', { recursive: true });
writeFileSync('artifacts/estimate.json', output, 'utf8');
process.stdout.write(output);
