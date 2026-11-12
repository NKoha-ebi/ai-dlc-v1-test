export type Region = 'tokyo' | 'osaka';
export const regions: readonly Region[] = ['tokyo', 'osaka'];
export interface Request {
  id: string;
  target: string;
  generation: number;
  receivedAt: number;
  deadline: number;
}
export interface Entry extends Request { phase: 'prepare' | 'decision' }
export interface Event { at: number; kind: string; target: string; detail: string }
export type IntakeState = 'unknown' | 'pending' | 'durable';
export function sameRequest(a: Request, b: Request): boolean {
  return a.id === b.id && a.target === b.target && a.generation === b.generation
    && a.receivedAt === b.receivedAt && a.deadline === b.deadline;
}
export function validateRequest(r: Request): void {
  if (!r.id || !r.target || !Number.isSafeInteger(r.generation) || r.generation < 0
    || !Number.isSafeInteger(r.receivedAt) || !Number.isSafeInteger(r.deadline)
    || r.receivedAt < 0 || r.deadline < r.receivedAt) throw new Error('invalid request');
}
