import type { Config } from '../config.ts';
import { authorizeTarget, type Operation } from '../contracts.ts';
import { call } from '../transport.ts';
export async function business(c: Config, op: Operation): Promise<unknown> {
  authorizeTarget(op);
  await call(c, 'writer', '/commit', op);
  return { status: 'Committed' }; // Business cannot return patient content or accept arbitrary URLs.
}
