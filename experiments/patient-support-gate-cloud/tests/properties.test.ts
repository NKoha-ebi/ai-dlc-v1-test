import { it, expect } from 'vitest';
import fc from 'fast-check';
import { parseOperation, operationIdentity } from '../src/contracts.ts';
import { digestOperation } from '../src/roles/writer.ts';
import { mayOpenNew } from '../src/evidence.ts';
import { completeProof } from '../tools/scenarios.ts';
const id = fc.stringMatching(/^[a-zA-Z0-9_-]{1,32}$/);
const op = fc.record({ targetRef: id, subject: id, operationId: id, attemptId: id,
  generation: fc.integer({ min: 1, max: 100000 }), deadline: fc.integer({ min: 0, max: 4102444800000 }), purpose: fc.constant('synthetic' as const), consent: fc.constant(true as const) });
const options = { numRuns: 300, seed: Number(process.env.FC_SEED ?? 20261112) };
it('PBT-02 structured operation JSON round-trip', () => {
  fc.assert(fc.property(op, value => { expect(parseOperation(JSON.parse(JSON.stringify(value)))).toEqual(value); }), options);
});
it('PBT-03 retry identity preserves original deadline and ignores attempt identity', () => {
  fc.assert(fc.property(op, id, (value, attemptId) => {
    expect(digestOperation({ ...value, attemptId })).toBe(digestOperation(value));
    expect(operationIdentity({ ...value, deadline: value.deadline + 1 })).not.toBe(operationIdentity(value));
  }), options);
});
it('PBT-03 missing old send or old return proof always prevents opening', () => {
  fc.assert(fc.property(fc.record({ oldSendDenied: fc.boolean(), oldReturnDenied: fc.boolean(), unknownAttempts: fc.integer({ min: 0, max: 100 }) }), p => {
    const result = mayOpenNew({ ...completeProof, ...p });
    expect(result).toBe(p.oldSendDenied && p.oldReturnDenied && p.unknownAttempts === 0);
  }), options);
});
