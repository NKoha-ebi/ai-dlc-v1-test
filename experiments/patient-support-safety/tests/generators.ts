import fc from 'fast-check';

export const requestArbitrary = fc.record({
  id: fc.integer({ min: 0, max: 10000 }).map(n => `op-${n}`),
  target: fc.constantFrom('patient-A', 'patient-B', '患者-不明', '回答しない'),
  generation: fc.integer({ min: 1, max: 1000 }),
  receivedAt: fc.integer({ min: 0, max: 1000000 }),
  retention: fc.integer({ min: 0, max: 604800000 }),
}).map(({ retention, ...r }) => ({ ...r, deadline: r.receivedAt + retention }));

export const commandArbitrary = fc.record({
  action: fc.constantFrom('reserve', 'start', 'stop', 'finish', 'apply', 'commit', 'partition', 'lose', 'advance'),
  target: fc.constantFrom('patient-A', 'patient-B'),
  elapsed: fc.integer({ min: 0, max: 2500 }),
});
