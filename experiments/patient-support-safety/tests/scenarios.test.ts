import { describe, expect, it } from 'vitest';
import { Clock } from '../src/clock';
import { Scheduler } from '../src/scheduler';
import { Ledger } from '../src/ledger';
import { Intake } from '../src/intake';
import { BusinessStore } from '../src/business-store';
import { Controller } from '../src/controller';
import { canReopen, recoveryReport, type RecoveryEvidence } from '../src/recovery';
import { consumeLink, credentialValid, LINK_LIFETIME } from '../src/auth-policy';
import { type Request } from '../src/contracts';

const request = (): Request => ({ id: 'op-1', target: 'patient-A', generation: 1, receivedAt: 0, deadline: 604800000 });
function fixture() {
  const clock = new Clock(), ledger = new Ledger(), store = new BusinessStore();
  return { clock, ledger, store, controller: new Controller(clock, ledger, store), intake: new Intake(ledger) };
}
const evidence = (): RecoveryEvidence => ({ independentlyProtected: true, oldExecutorsExcluded: true,
  unknownTargets: false, arrivalsReconciled: true, isolatedTargets: true, reviewerConfirmed: true,
  pendingTargets: ['patient-A'] });

describe('B model: approved boundaries and known counterexamples', () => {
  it.each(['send', 'return'] as const)('L-01 / V1: a stale %s reservation cannot start after stop', kind => {
    const { controller: c } = fixture(), scheduler = new Scheduler();
    c.effects.reserve({ id: 'attempt', target: 'patient-A', generation: 0, executor: 'old', kind });
    let started = true;
    scheduler.pause('old', () => { started = c.effects.start('attempt'); });
    c.requestStop(request());
    scheduler.resume('old');
    expect(started).toBe(false);
    expect(c.effects.events.some(e => e.kind.endsWith(':started'))).toBe(false);
  });
  it.each(['send', 'return'] as const)('L-02: only an already-started %s may finish after stop', kind => {
    const { controller: c } = fixture();
    const permit = { id: 'a', target: 'patient-A', generation: 0, executor: 'old', kind };
    c.effects.reserve(permit);
    expect(c.effects.start('a')).toBe(true);
    c.requestStop(request());
    expect(c.effects.finish('a')).toBe(true);
    expect(c.effects.canUseResult('a')).toBe(false);
    expect(c.effects.start('a')).toBe(false);
    c.effects.reserve({ ...permit, id: 'reconnect' });
    expect(c.effects.start('reconnect')).toBe(false);
  });
  it('L-03: exposes propagation gap without reporting Accepted', () => {
    const { controller: c, ledger, store } = fixture(), r = request();
    ledger.prepare(r); ledger.decide(r); c.requestStop(r);
    // Counterexample retained: a direct store call before prohibition propagates succeeds.
    expect(store.commit(r.target, 0, 'pre-apply')).toBe(true);
    expect(c.status(r, true).state).toBe('Pending');
    c.apply(r);
    expect(store.commit(r.target, 0, 'late')).toBe(false);
    expect(store.commit(r.target, 1, 'late-current')).toBe(false);
    expect(c.status(r, true).state).toBe('Accepted');
    expect(store.values(r.target)).toEqual(['pre-apply']);
  });
  it.each([1999, 2000, 2001])('L-04: target boundary at %i ms', elapsed => {
    const { controller: c, ledger, clock } = fixture(), r = request();
    c.requestStop(r); ledger.prepare(r); ledger.decide(r); c.apply(r); clock.advance(elapsed);
    expect(c.status(r, true)).toEqual({ state: 'Accepted', withinTarget: elapsed <= 2000 });
    c.healthy = false;
    expect(c.status(r, true)).toEqual({ state: 'Pending', withinTarget: false });
  });
  it('L-04: no stop request or old-executor exclusion means no acceptance', () => {
    const { controller: c, ledger } = fixture(), r = request();
    ledger.prepare(r); ledger.decide(r); c.apply(r);
    expect(c.status(r, true).state).toBe('Pending');
    c.requestStop(r);
    expect(c.status(r, false).state).toBe('Pending');
  });
  it('L-05 / V6: loss before durable receipt is explicitly outside guarantee', () => {
    const { ledger, intake } = fixture(), r = request();
    expect(intake.lookup(r.id)).toBe('unknown');
    ledger.write('tokyo', r, 'prepare');
    expect(intake.lookup(r.id)).toBe('pending');
    ledger.lose('tokyo');
    expect(intake.lookup(r.id)).toBe('unknown'); // No invented receipt from missing evidence.
  });
  it('L-05: reply loss, idempotent retry, conflict rejection, surviving receipt', () => {
    const { ledger, intake } = fixture(), r = request();
    intake.receive(r);
    expect(intake.lookup(r.id)).toBe('durable'); // Reply may now be lost.
    intake.retry(r);
    expect(ledger.surviving()).toHaveLength(2);
    expect(() => intake.retry({ ...r, deadline: r.deadline + 1 })).toThrow('conflict');
    ledger.lose('tokyo');
    expect(ledger.read('osaka', r.id)?.deadline).toBe(r.deadline);
    expect(intake.lookup(r.id)).toBe('pending'); // surviving receipt, no fresh two-region confirmation
  });
  it.each(['tokyo', 'osaka'] as const)('L-06: partial Decision survives loss of %s as unresolved intent', lost => {
    const { ledger } = fixture(), r = request();
    ledger.prepare(r); ledger.write('tokyo', r, 'decision'); ledger.lose(lost);
    expect(ledger.confirmed(r.id)).toBe(false);
    expect(ledger.surviving()).toHaveLength(1);
    expect(ledger.surviving()[0]?.id).toBe(r.id);
  });
  it.each(['tokyo', 'osaka'] as const)('L-06: confirmed record survives loss of %s', lost => {
    const { ledger } = fixture(), r = request();
    ledger.prepare(r); ledger.decide(r);
    expect(ledger.confirmed(r.id)).toBe(true);
    ledger.lose(lost);
    expect(ledger.surviving()[0]?.phase).toBe('decision');
    expect(() => ledger.decide(r)).toThrow();
  });
  it('L-07: partition and permanent loss cannot authorize partial reopening', () => {
    const { ledger, controller: c } = fixture();
    ledger.linked = false;
    expect(() => ledger.prepare(request())).toThrow();
    c.effects.reserve({ id: 'old', target: 'patient-B', generation: 0, executor: 'old', kind: 'send' });
    expect(c.effects.start('old')).toBe(false);
    ledger.lose('osaka');
    const e = { ...evidence(), independentlyProtected: ledger.protected };
    expect(canReopen('patient-B', e)).toBe(false);
    expect(recoveryReport(0, 86400001, e)).toEqual({ overdue: true, protected: false, requiresContinuedStop: true });
    expect(recoveryReport(0, 86400000, e).overdue).toBe(false);
  });
  it('L-08: only identified and isolated targets can be reopened', () => {
    const e = evidence();
    expect(canReopen('patient-A', e)).toBe(false);
    expect(canReopen('patient-B', e)).toBe(true);
    for (const flag of ['oldExecutorsExcluded', 'arrivalsReconciled', 'isolatedTargets', 'reviewerConfirmed'] as const) {
      expect(canReopen('patient-B', { ...e, [flag]: false })).toBe(false);
    }
    expect(canReopen('patient-B', { ...e, unknownTargets: true })).toBe(false);
  });
  it('L-09: latest-only, exclusive 24h boundary, one-time use and credential revocation', () => {
    const state = { latestLink: 'new', generation: 7, issuedAt: 100, consumed: false };
    expect(consumeLink(state, 'old', 101)).toBeUndefined();
    expect(consumeLink(state, 'new', 99)).toBeUndefined();
    expect(consumeLink(state, 'new', 100 + LINK_LIFETIME)).toBeUndefined();
    const next = consumeLink(state, 'new', 100 + LINK_LIFETIME - 1)!;
    expect(credentialValid(next, 7)).toBe(false);
    expect(credentialValid(next, 8)).toBe(true);
    expect(consumeLink(next, 'new', 101)).toBeUndefined();
  });
  it('L-10 / V8: an HTTP timeout does not cancel a paused executor', () => {
    const { controller: c } = fixture(), scheduler = new Scheduler();
    c.effects.reserve({ id: 'late', target: 'patient-A', generation: 0, executor: 'old', kind: 'send' });
    let result: boolean | undefined;
    scheduler.pause('http', () => { result = c.effects.start('late'); });
    // Simulated HTTP response timeout: task remains paused and can later resume.
    c.requestStop(request()); scheduler.resume('http');
    expect(result).toBe(false);
  });
  it('negative control: permission-check-only design reproduces V1', () => {
    let stopped = false;
    const cachedPermission = !stopped;
    stopped = true;
    const defectiveStarted = cachedPermission; // intentionally faulty fixture only
    const safetyViolation = stopped && defectiveStarted;
    expect(safetyViolation).toBe(true);
    const { controller: c } = fixture();
    c.effects.reserve({ id: 'safe', target: 'patient-A', generation: 0, executor: 'old', kind: 'send' });
    c.requestStop(request());
    expect(c.effects.start('safe')).toBe(false);
  });
});
