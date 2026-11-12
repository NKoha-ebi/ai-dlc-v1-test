import { mkdirSync, writeFileSync } from 'node:fs';
import { scenario } from './scenarios.ts';
if (process.argv.includes('--cloud')) throw new Error('CLOUD_NOT_AUTHORIZED: environment, cost approval and executable cloud scenario design are required; no cloud driver is enabled');
const results = [];
for (let n = 1; n <= 11; n++) for (const fault of [false, true]) results.push(await scenario(n, fault));
const report = { mode: 'local', acceptance: 'PENDING', cloudExecuted: false, counterexamplesExpected: true, results };
mkdirSync('artifacts', { recursive: true });
writeFileSync('artifacts/investigation.json', JSON.stringify(report, null, 2));
process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
