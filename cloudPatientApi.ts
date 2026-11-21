import type { IncomingMessage, ServerResponse } from 'node:http'
import { initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { FieldValue, getFirestore } from 'firebase-admin/firestore'
import { applyAction, credentials, guest, readBody, respond, validateCancers } from './localPatientApi.ts'
import { generateSupport } from './cloudPatientAi.ts'
import type { Concern, LocalProfile } from './src/supportFlow.ts'

const cookieName = '__Host-patient'
const sessionSeconds = 3600
type Profile = LocalProfile & { deleting?: boolean }

export function cloudPatientApi() {
  const { GOOGLE_CLOUD_PROJECT, PATIENT_DATABASE, FIREBASE_WEB_API_KEY, PATIENT_ORIGIN } = process.env
  if (!GOOGLE_CLOUD_PROJECT || !PATIENT_DATABASE || !FIREBASE_WEB_API_KEY || !PATIENT_ORIGIN ||
      !PATIENT_ORIGIN.startsWith('https://') || !PATIENT_DATABASE.startsWith('patient-')) {
    throw new Error('Patient cloud configuration is incomplete')
  }
  const app = initializeApp({ projectId: GOOGLE_CLOUD_PROJECT })
  const auth = getAuth(app)
  const db = getFirestore(app, PATIENT_DATABASE)

  function cookie(response: ServerResponse, token = '') {
    response.setHeader('Set-Cookie', `${cookieName}=${token}; Max-Age=${token ? sessionSeconds : 0}; Secure; HttpOnly; SameSite=Strict; Path=/`)
  }

  async function signIn(email: string, password: string) {
    const url = new URL('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword')
    url.searchParams.set('key', FIREBASE_WEB_API_KEY!)
    const result = await fetch(url, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, returnSecureToken: true }), signal: AbortSignal.timeout(10000),
    })
    if (result.status === 400 || result.status === 401) return undefined
    if (!result.ok) throw new Error('Firebase sign-in unavailable')
    return (await result.json() as { idToken: string }).idToken
  }

  return async (request: IncomingMessage, response: ServerResponse, path: string) => {
    const profileRoute = path === '/api/local/profile'
    if (!profileRoute && path !== '/api/local/concerns') return respond(response, 404, {})
    if (request.method !== 'POST' && request.method !== 'GET') return respond(response, 405, {})
    if (request.method === 'POST' && (request.headers.origin !== PATIENT_ORIGIN ||
        request.headers['sec-fetch-site'] === 'cross-site')) return respond(response, 403, {})
    if (request.method === 'POST' && request.headers['content-type'] !== 'application/json') {
      return respond(response, 415, { error: '形式が正しくありません。' })
    }
    let action: Record<string, unknown> = {}
    if (request.method === 'POST') {
      try { action = await readBody(request) }
      catch { return respond(response, 400, { error: '入力形式または長さを確認してください。' }) }
    }
    if (profileRoute && (action.type === 'login' || action.type === 'onboard')) {
      let login: ReturnType<typeof credentials>
      let cancers: string[] = []
      try {
        login = credentials(action)
        if (action.type === 'onboard') {
          if (action.consent !== true) throw new Error('ポリシーへの同意が必要です。')
          cancers = validateCancers(action.cancers)
        }
      } catch (error) {
        return respond(response, 400, { error: (error as Error).message })
      }
      if (action.type === 'onboard') {
        const account = await auth.createUser(login).catch((error: { code?: string }) => {
          if (error.code === 'auth/email-already-exists') return undefined
          throw error
        })
        if (!account) return respond(response, 409, { error: '登録済みの場合はログインしてください。' })
        try {
          await db.collection('patients').doc(account.uid).create({
            signedIn: true, email: login.email, consentedAt: new Date().toISOString(), cancers,
          })
        } catch (error) {
          await auth.deleteUser(account.uid)
          throw error
        }
      }
      const idToken = await signIn(login.email, login.password)
      if (!idToken) return respond(response, 401, { error: 'ログインIDまたはパスワードを確認してください。' })
      const { uid } = await auth.verifyIdToken(idToken, true)
      const profile = (await db.collection('patients').doc(uid).get()).data() as Profile | undefined
      if (!profile?.consentedAt) return respond(response, 403, { error: '同意を確認できません。' })
      cookie(response, await auth.createSessionCookie(idToken, { expiresIn: sessionSeconds * 1000 }))
      return respond(response, 200, profile.deleting ? guest : profile)
    }

    const token = request.headers.cookie?.match(/(?:^|;\s*)__Host-patient=([A-Za-z0-9_.-]+)/)?.[1]
    const session = token ? await auth.verifySessionCookie(token, true).catch(() => undefined) : undefined
    if (profileRoute && action.type === 'logout') {
      cookie(response)
      return respond(response, 200, guest)
    }
    if (!session) {
      if (profileRoute && request.method === 'GET') return respond(response, 200, guest)
      return respond(response, 401, { error: 'ログインしてください。' })
    }
    const account = db.collection('patients').doc(session.uid)
    const profileSnapshot = await account.get()
    const profile = profileSnapshot.data() as Profile | undefined
    if (profileRoute && action.type === 'delete-account') {
      if (profileSnapshot.exists) await account.update({ deleting: true })
      await db.recursiveDelete(account.collection('concerns'))
      await account.delete()
      await auth.deleteUser(session.uid).catch((error: { code?: string }) => {
        if (error.code !== 'auth/user-not-found') throw error
      })
      cookie(response)
      return respond(response, 200, guest)
    }
    if (!profile?.consentedAt || profile.deleting) {
      return respond(response, 403, { error: '利用できないアカウントです。' })
    }
    const concerns = account.collection('concerns')
    if (request.method === 'GET') {
      if (profileRoute) return respond(response, 200, profile)
      const results = await concerns.orderBy('savedAt', 'desc').get()
      return respond(response, 200, results.docs.map((doc) => doc.get('concern')))
    }
    if (profileRoute) {
      if (action.type !== 'update-cancers') return respond(response, 400, {})
      let cancers: string[]
      try { cancers = validateCancers(action.cancers) }
      catch (error) { return respond(response, 400, { error: (error as Error).message }) }
      await account.update({ cancers }, { lastUpdateTime: profileSnapshot.updateTime! })
      return respond(response, 200, { ...profile, cancers })
    }
    if (typeof action.id !== 'string' || !/^[a-f0-9-]{36}$/i.test(action.id)) return respond(response, 400, {})
    const ref = concerns.doc(action.id)
    const before = await ref.get()
    const current = before.get('concern') as Concern | undefined
    let updated: Concern
    try {
      updated = applyAction(current ? new Map([[current.id, current]]) : new Map(), action)
    } catch (error) {
      return respond(response, 400, { error: (error as Error).message })
    }
    if (updated === current) return respond(response, 200, current)
    if (action.type === 'extract' || action.type === 'answer') {
      try { await generateSupport(updated, action, profile.cancers) }
      catch { return respond(response, 503, { error: 'AI に接続できませんでした。入力を保持したまま再試行してください。' }) }
    }
    const saved = await db.runTransaction(async (tx) => {
      const [owner, latest] = await tx.getAll(account, ref)
      if (!owner.updateTime?.isEqual(profileSnapshot.updateTime!) ||
          (latest.exists !== before.exists) || (latest.exists && !latest.updateTime?.isEqual(before.updateTime!))) return false
      tx.set(ref, { concern: updated, savedAt: FieldValue.serverTimestamp() })
      return true
    })
    if (!saved) return respond(response, 409, { error: '保存状態が変わりました。一覧から開き直してください。' })
    return respond(response, 200, updated)
  }
}
