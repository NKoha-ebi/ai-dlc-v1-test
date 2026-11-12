import { describe, it, expect } from 'vitest';
import { operation, harness } from '../tools/harness.ts';
import { parseOperation } from '../src/contracts.ts';
import { loadConfig } from '../src/config.ts';
import { Evidence, judge, mayOpenNew } from '../src/evidence.ts';
import { completeProof, scenario } from '../tools/scenarios.ts';
describe('contracts and evidence', () => {
  it('rejects traversal and missing consent', () => {
    expect(() => parseOperation(operation({ targetRef: '../x' }))).toThrow();
    expect(() => parseOperation({ ...operation(), consent: false })).toThrow();
  });
  it('does not expose unknown input fields or promote sender-only evidence', () => {
    const e = new Evidence({ deploymentId: 'd', environmentId: 'gate-check-local', serviceRole: 'final-send', revision: 'r' });
    e.emit('SenderFinish', { ...operation(), secret: 'NEVER_LOG' } as never);
    expect(JSON.stringify(e.events)).not.toContain('NEVER_LOG'); expect(judge(e.events)).toBe('PENDING'); expect(judge([], true)).toBe('FAIL');
  });
  it('keeps every incomplete cutover proof closed', () => {
    expect(mayOpenNew(completeProof)).toBe(true);
    for (const k of Object.keys(completeProof) as (keyof typeof completeProof)[]) {
      expect(mayOpenNew({ ...completeProof, [k]: k === 'unknownAttempts' ? 1 : false })).toBe(false);
    }
  });
  it('never falls back to local DB for incomplete cloud config', async () => {
    const h = await harness();
    try { expect(() => loadConfig({ ...h.config, mode: 'cloud', faultInjection: false })).toThrow('CLOUD_CONFIG_INCOMPLETE'); }
    finally { await h.close(); }
  });
});
describe('C-01 through C-11 loopback investigation', () => {
  for (let n = 1; n <= 11; n++) for (const fault of [false, true]) it(`C-${n} ${fault ? 'fault' : 'normal'}`, async () => {
    const r = await scenario(n, fault);
    expect(r.mode).toBe('local');
    if (n === 5 && fault) { expect(r.verdict).toBe('FAIL'); expect(r.observed).toContain('ReceiverComplete'); }
    else expect(r.verdict).not.toBe('FAIL');
    if ([6, 7, 8, 11].includes(n)) expect(r.verdict).toBe('PENDING');
  });
});
