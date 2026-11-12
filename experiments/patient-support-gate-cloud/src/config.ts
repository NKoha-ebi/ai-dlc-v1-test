import { roles, type Role } from './contracts.ts';
export interface Config {
  mode: 'local' | 'cloud'; role: Role; environmentId: string; deploymentId: string; revision: string;
  synthetic: true; faultInjection: boolean; port: number; projectId?: string; databaseId?: string;
  urls: Partial<Record<Role, string>>; localTokens: Partial<Record<Role, string>>;
  identities?: Partial<Record<Role, string>>; osakaDatabaseId?: string;
}
export function loadConfig(raw: unknown): Config {
  if (!raw || typeof raw !== 'object') throw new Error('CONFIG_REQUIRED');
  const c = raw as Config;
  if (!['local', 'cloud'].includes(c.mode) || !roles.includes(c.role) || c.synthetic !== true ||
      !/^[a-zA-Z0-9_-]+$/.test(c.environmentId) || !c.environmentId.startsWith('gate-check-') ||
      !c.deploymentId || !c.revision || !Number.isInteger(c.port) || c.port < 0 || c.port > 65535 ||
      !c.urls || !c.localTokens) throw new Error('INVALID_CONFIG');
  if (c.mode === 'cloud' && (!c.projectId || !c.databaseId || !c.identities || !c.urls[c.role] || c.faultInjection ||
      (c.role === 'safety-coordinator' && (!c.osakaDatabaseId || c.osakaDatabaseId === c.databaseId)))) throw new Error('CLOUD_CONFIG_INCOMPLETE');
  for (const [role, url] of Object.entries(c.urls)) {
    if (!roles.includes(role as Role)) throw new Error('UNKNOWN_DESTINATION');
    const u = new URL(url!);
    if (u.username || u.password || u.search || u.hash || u.pathname !== '/') throw new Error('INVALID_DESTINATION');
    if (c.mode === 'local' ? u.protocol !== 'http:' || u.hostname !== '127.0.0.1' : u.protocol !== 'https:' || !u.hostname.endsWith('.run.app')) throw new Error('INVALID_DESTINATION');
  }
  if (c.mode === 'local' && roles.some(r => !c.localTokens[r] || c.localTokens[r]!.length < 16)) throw new Error('LOCAL_TOKENS_REQUIRED');
  if (c.mode === 'local' && new Set(roles.map(r => c.localTokens[r])).size !== roles.length) throw new Error('DISTINCT_ROLE_TOKENS_REQUIRED');
  return c;
}
