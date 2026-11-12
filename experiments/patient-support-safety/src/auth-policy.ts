export const LINK_LIFETIME = 24 * 60 * 60 * 1000;
export interface AuthState { generation: number; latestLink: string; issuedAt: number; consumed: boolean }
export function consumeLink(state: AuthState, id: string, now: number): AuthState | undefined {
  if (state.consumed || state.latestLink !== id || now < state.issuedAt
    || now - state.issuedAt >= LINK_LIFETIME) return undefined;
  return { ...state, consumed: true, generation: state.generation + 1 };
}
export function credentialValid(state: AuthState, generation: number): boolean {
  return state.generation === generation;
}
