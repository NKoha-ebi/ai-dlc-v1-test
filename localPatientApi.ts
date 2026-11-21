import { randomBytes, randomUUID, scryptSync, timingSafeEqual } from 'node:crypto'
import type { IncomingMessage, ServerResponse } from 'node:http'
import type { Plugin } from 'vite'
import { canComplete, cancerTypes, moduleIds, modules, timings, treatments } from './src/supportFlow.ts'
import type { Concern, LocalProfile, ModuleId } from './src/supportFlow.ts'

function readText(value: unknown, limit = 1000) {
  if (typeof value !== 'string' || !value.trim() || value.trim().length > limit) {
    throw new Error(`1〜${limit}文字で入力してください。`)
  }
  return value.trim()
}

function extract(text: string): { extraction: string; recommendation: ModuleId } {
  const rules: [RegExp, ModuleId][] = [
    [/診察|医師|医療者|質問|確認/, 'questions'],
    [/心配|不安|困|治療/, 'concerns'],
    [/計画|方法|手順/, 'plan'],
    [/したい|希望/, 'hopes'],
  ]
  const recommendation = rules.find(([pattern]) => pattern.test(text))?.[1] ?? 'values'
  return {
    extraction: text.split(/(?<=。|！|？)\s*|\n+/u).map((part) => part.trim())
      .filter(Boolean).map((part) => `・${part}`).join('\n'),
    recommendation,
  }
}

function respond(response: ServerResponse, status: number, value: unknown) {
  response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' })
  response.end(JSON.stringify(value))
}

async function readBody(request: IncomingMessage): Promise<Record<string, unknown>> {
  request.setEncoding('utf8')
  let body = ''
  for await (const chunk of request) {
    body += chunk
    if (body.length > 32000) throw new Error('入力が長すぎます。')
  }
  const value = JSON.parse(body)
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('形式が正しくありません。')
  return value
}

function applyAction(concerns: Map<string, Concern>, action: Record<string, unknown>) {
  const { id, type } = action
  if (typeof id !== 'string' || !/^[a-f0-9-]{36}$/i.test(id)) throw new Error('整理IDが無効です。')
  const current = concerns.get(id)
  if (type === 'extract') {
    if (current?.completed) throw new Error('この整理は完了しています。')
    const text = readText(action.text)
    const timing = readText(action.timing, 30)
    const selected = Array.isArray(action.treatments) ? action.treatments : []
    if (!timings.includes(timing) ||
        (timing === '治療中' ? !selected.length || selected.some((item) => !treatments.includes(item)) : selected.length > 0)) {
      throw new Error('治療情報を確認してください。')
    }
    const uniqueTreatments = [...new Set<string>(selected)]
    if (current?.text === text && current.timing === timing &&
        current.treatments.length === uniqueTreatments.length &&
        current.treatments.every((item) => uniqueTreatments.includes(item))) return current
    return { id, text, timing, treatments: uniqueTreatments,
      ...extract(text), confirmed: false, runs: [], completed: false }
  }
  if (!current) throw new Error('整理が見つかりません。一覧から開き直してください。')
  const next = structuredClone(current)
  if (next.completed) {
    if (type === 'complete') return next
    throw new Error('この整理は完了しています。')
  }
  if (type === 'review') {
    const text = readText(action.text, 4000)
    if (next.extraction !== text) next.runs = []
    next.extraction = text
    next.recommendation = extract(text).recommendation
    next.confirmed = true
    return next
  }
  if (!next.confirmed) throw new Error('抽出案を確認して保存してください。')
  if (type === 'complete') {
    if (!canComplete(next)) throw new Error('支援を1件以上確認保存し、進行中の支援を確認または省略してください。')
    next.completed = true
    return next
  }
  const module = moduleIds.find((value) => value === action.module)
  if (!module) throw new Error('支援を選んでください。')
  const existing = next.runs.find((run) => run.module === module)
  if (type === 'start') {
    if (action.mode !== 'short' && action.mode !== 'deep') throw new Error('モードを選んでください。')
    if (existing?.status === 'active') {
      existing.mode = action.mode
      return next
    }
    next.runs = next.runs.filter((run) => run.module !== module)
    next.runs.push({ module, mode: action.mode, answers: [], result: '', status: 'active' })
    return next
  }
  if ((type === 'confirm' && existing?.status === 'confirmed' && existing.result === readText(action.text, 4000)) ||
      (type === 'skip' && existing?.status === 'skipped')) return next
  if (!existing || existing.status !== 'active') throw new Error('進行中の支援を開いてください。')
  const minimum = modules[module].questions.length
  switch (type) {
    case 'answer': {
      const index = action.index
      const limit = minimum + (existing.mode === 'deep' ? 1 : 0)
      if (typeof index !== 'number' || !Number.isInteger(index) || index < 0 ||
          index >= limit || index > existing.answers.length) throw new Error('回答する質問を確認してください。')
      existing.answers[index] = readText(action.text)
      break
    }
    case 'confirm':
      if (existing.answers.length < minimum) throw new Error('必要な質問に回答してください。')
      existing.result = readText(action.text, 4000)
      existing.status = 'confirmed'
      break
    case 'skip':
      existing.status = 'skipped'
      break
    default:
      throw new Error('操作が正しくありません。')
  }
  return next
}

type Account = { profile: LocalProfile; salt: Buffer; passwordHash: Buffer; concerns: Map<string, Concern> }
const guest: LocalProfile = { signedIn: false, email: null, consentedAt: null, cancers: [] }

function validateCancers(cancers: unknown) {
  if (!Array.isArray(cancers) || !cancers.length || cancers.some((item) => !cancerTypes.includes(item))) {
    throw new Error('がん種を1件以上選んでください。')
  }
  return cancerTypes.filter((item) => cancers.includes(item))
}

function credentials(action: Record<string, unknown>) {
  const email = typeof action.email === 'string' ? action.email.trim().toLowerCase() : ''
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('メールアドレスを確認してください。')
  }
  const password = action.password
  if (typeof password !== 'string' || password.length < 8 || password.length > 128) {
    throw new Error('パスワードは8〜128文字で入力してください。')
  }
  return { email, password }
}

export function localPatientApi(): Plugin {
  const accounts = new Map<string, Account>()
  const sessions = new Map<string, Account>()
  async function handler(request: IncomingMessage, response: ServerResponse, next: () => void) {
    const path = request.url?.split('?')[0]
    const profileRoute = path === '/api/local/profile'
    if (!profileRoute && path !== '/api/local/concerns') return next()
    if (request.socket.remoteAddress !== '::1' && request.socket.remoteAddress !== '127.0.0.1' &&
        request.socket.remoteAddress !== '::ffff:127.0.0.1') return respond(response, 403, { error: 'ローカル確認専用です。' })
    if (request.headers['sec-fetch-site'] === 'cross-site' ||
        (request.headers.origin && request.headers.origin !== `http://${request.headers.host}`)) {
      return respond(response, 403, { error: '同じ画面から操作してください。' })
    }
    const key = request.headers.cookie?.match(/(?:^|;\s*)local_patient=([a-f0-9-]+)/i)?.[1]
    const session = key ? sessions.get(key) : undefined
    if (request.method === 'GET') {
      if (profileRoute) return respond(response, 200, session?.profile ?? guest)
      if (!session) return respond(response, 401, { error: 'ログインしてください。' })
      return respond(response, 200, [...session.concerns.values()].reverse())
    }
    if (request.method !== 'POST') return respond(response, 405, { error: 'この操作には対応していません。' })
    if (!profileRoute && !session) return respond(response, 401, { error: 'ログインしてください。' })
    if (request.headers['content-type'] !== 'application/json') return respond(response, 415, { error: '形式が正しくありません。' })
    try {
      const action = await readBody(request)
      if (profileRoute && (action.type === 'login' || action.type === 'onboard')) {
        const { email, password } = credentials(action)
        let account = accounts.get(email)
        if (action.type === 'onboard') {
          if (action.consent !== true) throw new Error('ポリシーへの同意が必要です。')
          const cancers = validateCancers(action.cancers)
          if (account) throw new Error('登録できませんでした。登録済みの場合はログインしてください。')
          const salt = randomBytes(16)
          account = { profile: { signedIn: true, email, consentedAt: new Date().toISOString(), cancers },
            salt, passwordHash: scryptSync(password, salt, 64), concerns: new Map() }
          accounts.set(email, account)
        } else {
          const candidate = scryptSync(password, account?.salt ?? Buffer.alloc(16), 64)
          if (!account || !timingSafeEqual(account.passwordHash, candidate)) {
            return respond(response, 401, { error: '※ログインIDまたはパスワードが違います' })
          }
          if (!account.profile.consentedAt) {
            return respond(response, 403, { error: 'プライバシーポリシーへの同意が必要です。' })
          }
        }
        if (key) sessions.delete(key)
        const token = randomUUID()
        sessions.set(token, account)
        response.setHeader('Set-Cookie', `local_patient=${token}; HttpOnly; SameSite=Strict; Path=/api/local`)
        return respond(response, 200, account.profile)
      }
      if (profileRoute && action.type === 'logout') {
        if (key) sessions.delete(key)
        response.setHeader('Set-Cookie', 'local_patient=; Max-Age=0; HttpOnly; SameSite=Strict; Path=/api/local')
        return respond(response, 200, guest)
      }
      if (!session || !key || sessions.get(key) !== session) {
        return respond(response, 401, { error: 'ログインしてください。' })
      }
      if (profileRoute) {
        if (action.type === 'delete-account') {
          const email = session.profile.email
          if (email) accounts.delete(email)
          session.concerns.clear()
          for (const [token, account] of sessions) {
            if (account === session) sessions.delete(token)
          }
          response.setHeader('Set-Cookie', 'local_patient=; Max-Age=0; HttpOnly; SameSite=Strict; Path=/api/local')
          return respond(response, 200, guest)
        }
        if (action.type !== 'update-cancers') throw new Error('操作が正しくありません。')
        session.profile = { ...session.profile, cancers: validateCancers(action.cancers) }
        return respond(response, 200, session.profile)
      }
      const updated = applyAction(session.concerns, action)
      session.concerns.delete(updated.id)
      session.concerns.set(updated.id, updated)
      respond(response, 200, updated)
    } catch (error) {
      respond(response, 400, { error: error instanceof SyntaxError ? '形式が正しくありません。' :
        error instanceof Error ? error.message : '保存できませんでした。' })
    }
  }
  return { name: 'local-patient-api', configureServer(server) { server.middlewares.use(handler) } }
}
