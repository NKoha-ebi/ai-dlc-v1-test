import { expect, it } from 'vitest';
import fc from 'fast-check';
import { requestArbitrary, commandArbitrary } from './generators';
import { Ledger } from '../src/ledger';
import { Intake } from '../src/intake';
import { BusinessStore } from '../src/business-store';
import { Clock } from '../src/clock';
import { Controller } from '../src/controller';
import { consumeLink, LINK_LIFETIME } from '../src/auth-policy';

const seed = Number(process.env.FC_SEED ?? 20261112);
const params = { numRuns: 500, seed, ...(process.env.FC_PATH ? { path: process.env.FC_PATH } : {}), verbose: true };
console.info(`fast-check seed=${seed}; failures include shrunk counterexample and replay path`);

it('PBT-02: ledger serialization roundtrip preserves Unicode, phases and topology', () => {
  fc.assert(fc.property(requestArbitrary, fc.boolean(), fc.boolean(), (r, decided, lose) => {
    const ledger = new Ledger(); ledger.prepare(r);
    if (decided) ledger.decide(r);
    if (lose) ledger.lose('tokyo');
    expect(Ledger.restore(ledger.snapshot()).snapshot()).toBe(ledger.snapshot());
  }), params);
});
it('PBT-03: retries retain deadlines and cannot downgrade Decision', () => {
  fc.assert(fc.property(requestArbitrary, fc.integer({ min: 1, max: 100000 }), (r, extra) => {
    const ledger = new Ledger(), intake = new Intake(ledger);
    intake.receive(r); ledger.decide(r); intake.retry(r);
    expect(ledger.confirmed(r.id)).toBe(true);
    expect(() => intake.retry({ ...r, deadline: r.deadline + extra })).toThrow();
    expect(ledger.read('tokyo', r.id)?.deadline).toBe(r.deadline);
  }), params);
});
it('PBT-03: confirmed decisions survive either single-region loss', () => {
  fc.assert(fc.property(requestArbitrary, fc.constantFrom('tokyo', 'osaka'), (r, lost) => {
    const ledger = new Ledger(); ledger.prepare(r); ledger.decide(r); ledger.lose(lost);
    expect(ledger.surviving()).toEqual([{ ...r, phase: 'decision' }]);
  }), params);
});
it('PBT-03: applied generations never move backwards', () => {
  fc.assert(fc.property(fc.array(fc.integer({ min: 0, max: 10000 }), { maxLength: 80 }), generations => {
    const store = new BusinessStore(); let highest = 0;
    for (const generation of generations) {
      store.stop('patient-A', generation); highest = Math.max(highest, generation);
      expect(store.generation('patient-A')).toBe(highest);
    }
  }), params);
});
it('PBT-03: arbitrary failure sequences forbid new starts after stop and commits after apply', () => {
  fc.assert(fc.property(fc.array(commandArbitrary, { minLength: 0, maxLength: 100 }), commands => {
    const clock = new Clock(), ledger = new Ledger(), store = new BusinessStore();
    const controller = new Controller(clock, ledger, store);
    // Independent oracle tracks stop intent and applied prohibition for two subjects.
    const stopped = new Set<string>(), applied = new Set<string>();
    const attempts: { id: string; target: string }[] = [];
    for (const command of commands) {
      const target = command.target;
      if (command.action === 'reserve') {
        const id = `a-${attempts.length}`;
        attempts.push({ id, target });
        controller.effects.reserve({ id, target, generation: 0, executor: 'e', kind: 'send' });
      } else if (command.action === 'start') {
        for (const a of attempts.filter(a => a.target === target)) {
          const started = controller.effects.start(a.id);
          if (stopped.has(target) || !ledger.protected) expect(started).toBe(false);
        }
      } else if (command.action === 'finish') {
        for (const a of attempts.filter(a => a.target === target)) {
          controller.effects.finish(a.id);
          if (stopped.has(target)) expect(controller.effects.canUseResult(a.id)).toBe(false);
        }
      } else if (command.action === 'stop') {
        stopped.add(target);
        controller.requestStop({ id: `stop-${target}`, target, generation: 1, receivedAt: 0, deadline: 1000000 });
      } else if (command.action === 'apply') {
        applied.add(target); store.stop(target, 1);
      } else if (command.action === 'commit') {
        const accepted = store.commit(target, 0, 'synthetic');
        expect(accepted).toBe(!applied.has(target)); // exposes, rather than erases, pre-apply gap
      } else if (command.action === 'partition') ledger.linked = false;
      else if (command.action === 'lose') ledger.lose('tokyo');
      else clock.advance(command.elapsed);
    }
  }), params);
});
it('PBT-03: consuming a current link never resurrects the link or old credentials', () => {
  fc.assert(fc.property(fc.integer({ min: 0, max: 10000 }), fc.integer({ min: 0, max: LINK_LIFETIME - 1 }), (generation, age) => {
    const initial = { generation, latestLink: 'link', issuedAt: 100, consumed: false };
    const consumed = consumeLink(initial, 'link', 100 + age)!;
    expect(consumed.generation).toBe(generation + 1);
    expect(consumeLink(consumed, 'link', 100 + age)).toBeUndefined();
    expect(initial.consumed).toBe(false);
  }), params);
});
