export interface RpcRequest { rpc: number; command: string; args: Record<string, unknown> }
export interface RpcReply { reply: number; value?: unknown; error?: string }
export interface ChildEvent {
  event: true;
  seq: number;
  kind: string;
  attempt: string;
  target: string;
  data: Record<string, unknown>;
}
export function isEvent(value: unknown): value is ChildEvent {
  if (!value || typeof value !== 'object') return false;
  const e = value as Partial<ChildEvent>;
  return e.event === true && Number.isInteger(e.seq) && typeof e.kind === 'string'
    && typeof e.attempt === 'string' && typeof e.target === 'string'
    && !!e.data && typeof e.data === 'object';
}
export function isReply(value: unknown): value is RpcReply {
  return !!value && typeof value === 'object' && Number.isInteger((value as RpcReply).reply);
}
