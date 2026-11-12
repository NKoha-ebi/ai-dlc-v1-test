import { fork, type ChildProcess } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { isEvent, isReply, type ChildEvent } from './protocol';

const LIMIT = 5000;
let observationOrder = 0;
/** Per-process sequence numbers plus acknowledged IPC determine causal order. */
export class Peer {
  readonly events: ChildEvent[] = [];
  readonly child: ChildProcess;
  readonly errors: string[] = [];
  readonly ipc: { parentOrder: number; kind: string; detail: string }[] = [];
  private next = 1;
  private pending = new Map<number, { resolve: (v: unknown) => void; reject: (e: Error) => void; timer: NodeJS.Timeout }>();
  private listeners = new Set<() => void>();
  private exited = false;
  readonly exit: Promise<void>;
  constructor(name: 'receiver' | 'gateway') {
    const env: NodeJS.ProcessEnv = {};
    for (const key of ['SystemRoot', 'WINDIR', 'PATH', 'TEMP', 'TMP', 'HOME', 'USERPROFILE']) {
      if (process.env[key]) env[key] = process.env[key];
    }
    this.child = fork(fileURLToPath(new URL(`./${name}.mjs`, import.meta.url)), [], {
      env, execArgv: [], stdio: ['ignore', 'pipe', 'pipe', 'ipc'],
    });
    this.child.stderr?.on('data', b => this.errors.push(String(b)));
    this.child.stdout?.on('data', b => this.errors.push(`unexpected stdout: ${String(b)}`));
    this.child.on('message', value => {
      if (isEvent(value)) {
        this.ipc.push({ parentOrder: ++observationOrder, kind: 'event-received', detail: `${value.seq}:${value.kind}` });
        const last = this.events.at(-1)?.seq ?? 0;
        if (value.seq <= last) this.errors.push('non-monotonic event sequence');
        this.events.push(value);
        for (const listener of this.listeners) listener();
      } else if (isReply(value)) {
        this.ipc.push({ parentOrder: ++observationOrder, kind: 'reply-received', detail: String(value.reply) });
        const p = this.pending.get(value.reply);
        if (!p) return;
        clearTimeout(p.timer); this.pending.delete(value.reply);
        if (value.error) p.reject(new Error(value.error)); else p.resolve(value.value);
      } else this.errors.push('invalid IPC payload');
    });
    this.exit = new Promise(resolve => this.child.once('exit', () => {
      this.ipc.push({ parentOrder: ++observationOrder, kind: 'child-exit', detail: name });
      this.exited = true;
      for (const p of this.pending.values()) { clearTimeout(p.timer); p.reject(new Error('child exited')); }
      this.pending.clear();
      for (const listener of this.listeners) listener();
      resolve();
    }));
    this.child.on('error', error => { this.errors.push(error.message); });
  }
  rpc<T = unknown>(command: string, args: Record<string, unknown> = {}): Promise<T> {
    if (this.exited) return Promise.reject(new Error('child exited'));
    const rpc = this.next++;
    this.ipc.push({ parentOrder: ++observationOrder, kind: 'command-sent', detail: `${rpc}:${command}` });
    return new Promise<T>((resolve, reject) => {
      const timer = setTimeout(() => { this.pending.delete(rpc); reject(new Error(`RPC timeout: ${command}`)); }, LIMIT);
      this.pending.set(rpc, { resolve: v => resolve(v as T), reject, timer });
      this.child.send({ rpc, command, args }, error => {
        if (error) { clearTimeout(timer); this.pending.delete(rpc); reject(error); }
      });
    });
  }
  wait(kind: string, attempt?: string): Promise<ChildEvent> {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => { this.listeners.delete(check); reject(new Error(`event timeout: ${kind}/${attempt ?? '*'}`)); }, LIMIT);
      const check = () => {
        const e = this.events.find(e => e.kind === kind && (attempt === undefined || e.attempt === attempt));
        if (e) { clearTimeout(timer); this.listeners.delete(check); resolve(e); }
        else if (this.exited) { clearTimeout(timer); this.listeners.delete(check); reject(new Error('child exited before event')); }
      };
      this.listeners.add(check); check();
    });
  }
  async kill(): Promise<void> {
    if (!this.exited) this.child.kill();
    await this.boundedExit();
  }
  private async boundedExit(): Promise<void> {
    let timer: NodeJS.Timeout | undefined;
    try {
      await Promise.race([this.exit, new Promise<never>((_, reject) => { timer = setTimeout(() => reject(new Error('child exit timeout')), LIMIT); })]);
    } finally { if (timer) clearTimeout(timer); }
  }
  async close(): Promise<void> {
    if (this.exited) return;
    try { await this.rpc('shutdown'); } finally { await this.kill(); }
  }
}

export async function withPeers<T>(run: (gateway: Peer, receiver: Peer) => Promise<T>): Promise<T> {
  const gateway = new Peer('gateway'), receiver = new Peer('receiver');
  try { return await run(gateway, receiver); }
  finally {
    const results = await Promise.allSettled([gateway.close(), receiver.close()]);
    const failure = results.find(r => r.status === 'rejected');
    if (failure?.status === 'rejected') throw failure.reason;
    if (gateway.errors.length || receiver.errors.length) throw new Error([...gateway.errors, ...receiver.errors].join('\n'));
  }
}
