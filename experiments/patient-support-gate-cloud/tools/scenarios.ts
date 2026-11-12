import { harness, operation } from './harness.ts';
import { Writer } from '../src/roles/writer.ts';
import { Coordinator } from '../src/roles/coordinator.ts';
import { mayOpenNew, type CutoverProof, type Event } from '../src/evidence.ts';
import type { Verdict } from '../src/contracts.ts';
export const completeProof: CutoverProof = { inventoryComplete: true, oldSendDenied: true, oldReturnDenied: true,
  existingConnectionsDenied: true, unknownAttempts: 0, bothRegionsDecided: true, independentReview: true, canaryReconciled: true };
export interface Result { id: string; variant: 'normal' | 'fault'; mode: 'local'; verdict: Verdict; observed: string; limitation: string; evidence: Event[] }
export async function scenario(id: number, fault: boolean): Promise<Result> {
  let open = true;
  const h = await harness({ allowed: () => open, checkpoint: async point => { if (id === 5 && fault && point === 'after-check') open = false; } });
  const op = operation();
  let observed = '', verdict: Verdict = 'PENDING';
  try {
    if (id === 1) {
      const r = await h.request('final-send', '/send', 'business', fault ? { ...op, url: 'https://arbitrary.invalid/' } : op);
      observed = `HTTP ${r.status}`; await r.arrayBuffer();
      if (fault && r.status !== 200) verdict = 'PASS_WITHIN_SCOPE';
    } else if (id === 2 || id === 3 || id === 6 || id === 7) {
      const to = id === 3 ? 'writer' : 'final-send';
      const r = await h.request(to, id === 3 ? '/commit' : fault ? '/old-revision' : '/send', fault ? 'test-sink' : 'business', op);
      observed = `HTTP ${r.status}; local role credential only`; await r.arrayBuffer();
      if (fault && r.status === 403 && id < 4) verdict = 'PASS_WITHIN_SCOPE';
    } else if (id === 4) {
      const w = new Writer(h.repo);
      if (fault) await w.block(op.targetRef, 2);
      try { await w.commit(op); observed = 'Committed'; verdict = fault ? 'FAIL' : 'PASS_WITHIN_SCOPE'; }
      catch { observed = 'Blocked'; verdict = fault ? 'PASS_WITHIN_SCOPE' : 'FAIL'; }
    } else if (id === 5 || id === 8) {
      if (id === 8 && fault) h.config.urls['test-sink'] = 'http://127.0.0.1:1';
      const r = await h.request('final-send', '/send', 'business', op);
      const body = await r.json() as { status: string }; observed = body.status;
      if (id === 5 && fault && body.status === 'Received' && !open) { observed = 'ReceiverComplete after controlled stop between check and write'; verdict = 'FAIL'; }
    } else if (id === 9) {
      if (fault) open = false;
      const r = await h.request('entry-return', '/return', 'business', op);
      observed = `HTTP ${r.status}; bytes=${(await r.arrayBuffer()).byteLength}`;
      if (fault && r.status === 409) verdict = 'PASS_WITHIN_SCOPE';
    } else if (id === 10) {
      h.osaka.available = !fault;
      const c = new Coordinator(h.tokyo, h.osaka);
      observed = await c.stop(op, () => new Writer(h.repo).block(op.targetRef, 2));
      if (await c.reconcile(op) === observed) verdict = 'PASS_WITHIN_SCOPE';
    } else if (id === 11) {
      // Pure decision candidate only; booleans are not cloud exclusion evidence.
      const proof = { ...completeProof, oldSendDenied: !fault, oldReturnDenied: !fault };
      observed = mayOpenNew(proof) ? 'CandidateOnly; runtime cloud gate remains closed' : 'Pending; new gate closed';
    } else throw new Error('UNKNOWN_SCENARIO');
    return { id: `C-${String(id).padStart(2, '0')}`, variant: fault ? 'fault' : 'normal', mode: 'local', verdict, observed, evidence: h.evidence.flatMap(e => e.events),
      limitation: 'Synthetic loopback and memory only; no IAM/network/real Firestore/OS suspension/PDF/complete executor inventory/production Canary proof.' };
  } finally { await h.close(); }
}
