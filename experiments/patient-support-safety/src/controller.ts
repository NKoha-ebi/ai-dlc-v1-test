import { Clock } from './clock';
import { BusinessStore } from './business-store';
import { Ledger } from './ledger';
import { Effects, type Permit } from './effects';
import { type Event, type Request } from './contracts';

export class Controller {
  readonly events: Event[] = [];
  readonly effects: Effects;
  readonly stopped = new Map<string, number>();
  readonly revokedExecutors = new Set<string>();
  healthy = true;
  private t0 = new Map<string, number>();
  constructor(readonly clock: Clock, readonly ledger: Ledger, readonly store: BusinessStore) {
    this.effects = new Effects(clock, p => this.allowed(p));
  }
  allowed(p: Permit): boolean {
    return this.healthy && this.ledger.protected && !this.stopped.has(p.target)
      && !this.store.blocked(p.target) && this.store.generation(p.target) === p.generation
      && !this.revokedExecutors.has(p.executor);
  }
  requestStop(request: Request): void {
    if (!this.t0.has(request.id)) this.t0.set(request.id, this.clock.now);
    this.stopped.set(request.target, Math.max(this.stopped.get(request.target) ?? 0, request.generation));
    this.events.push({ at: this.clock.now, kind: 'stop-requested', target: request.target, detail: request.id });
  }
  apply(request: Request): void {
    this.store.stop(request.target, Math.max(request.generation, this.stopped.get(request.target) ?? 0));
    this.events.push({ at: this.clock.now, kind: 'stop-applied', target: request.target, detail: request.id });
  }
  status(request: Request, oldExecutorsExcluded: boolean): { state: 'Accepted' | 'Pending'; withinTarget: boolean } {
    const began = this.t0.get(request.id);
    const accepted = began !== undefined && this.healthy && this.ledger.confirmed(request.id)
      && this.stopped.has(request.target) && this.store.blocked(request.target)
      && this.store.generation(request.target) >= request.generation && oldExecutorsExcluded;
    return { state: accepted ? 'Accepted' : 'Pending', withinTarget: accepted && this.clock.now - began! <= 2000 };
  }
}
