import { GoogleAuth, OAuth2Client } from 'google-auth-library';
import type { Config } from './config.ts';
import { roles, type Role } from './contracts.ts';
const auth = new GoogleAuth();
const verifier = new OAuth2Client();
export async function caller(c: Config, authorization: string | undefined): Promise<Role> {
  if (!authorization?.startsWith('Bearer ')) throw new Error('CALLER_DENIED');
  const token = authorization.slice(7);
  if (c.mode === 'local') {
    const role = roles.find(r => c.localTokens[r] === token);
    if (!role) throw new Error('CALLER_DENIED');
    return role;
  }
  const ticket = await verifier.verifyIdToken({ idToken: token, audience: c.urls[c.role] });
  const p = ticket.getPayload();
  const role = roles.find(r => c.identities?.[r] === p?.email);
  if (!role || p?.email_verified !== true) throw new Error('CALLER_DENIED');
  return role;
}
export async function headers(c: Config, destination: Role): Promise<Record<string, string>> {
  const url = c.urls[destination];
  if (!url) throw new Error('DESTINATION_REQUIRED');
  if (c.mode === 'local') return { authorization: `Bearer ${c.localTokens[c.role]}` };
  const client = await auth.getIdTokenClient(url);
  const h = await client.getRequestHeaders();
  const bearer = h.get('authorization');
  if (!bearer) throw new Error('TOKEN_REQUIRED');
  return { authorization: bearer };
}
export async function call(c: Config, destination: Role, path: string, body: unknown): Promise<unknown> {
  const base = c.urls[destination];
  if (!base || !['/commit', '/stop', '/send', '/return', '/status'].includes(path)) throw new Error('DESTINATION_DENIED');
  const response = await fetch(new URL(path, base), { method: 'POST',
    headers: { ...await headers(c, destination), 'content-type': 'application/json' },
    body: JSON.stringify(body), redirect: 'error', signal: AbortSignal.timeout(5000) });
  if (!response.ok) throw new Error('DEPENDENCY_DENIED');
  return response.json();
}
