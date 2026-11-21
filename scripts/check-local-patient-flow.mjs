import assert from 'node:assert/strict'
import { randomUUID } from 'node:crypto'

const base = process.argv[2] ?? 'http://localhost:5173'
const url = new URL('/api/local/concerns', base)
const profileUrl = new URL('/api/local/profile', base)
assert.equal((await fetch(base)).status, 200)

const password = 'local-test-password'
async function openSession(email) {
  const response = await fetch(profileUrl)
  assert.equal(response.status, 200)
  assert.deepEqual(await response.json(), { signedIn: false, email: null, consentedAt: null, cancers: [] })
  assert.equal((await fetch(url)).status, 401)
  assert.equal((await profileAction('', { type: 'login', email, password })).status, 401)
  assert.equal((await profileAction('', { type: 'onboard', email, password, consent: false, cancers: ['肺'] })).status, 400)
  assert.equal((await profileAction('', { type: 'login', email, password })).status, 401)
  assert.equal((await profileAction('', { type: 'onboard', email, password, consent: true, cancers: [] })).status, 400)
  const saved = await profileAction('', { type: 'onboard', email, password, consent: true, cancers: ['乳房', '肺'] })
  assert.equal(saved.status, 200)
  const profile = await saved.json()
  assert.equal(profile.signedIn, true)
  assert.equal(profile.email, email)
  assert.equal('password' in profile, false)
  assert.ok(profile.consentedAt)
  assert.deepEqual(profile.cancers, ['肺', '乳房'])
  return saved.headers.get('set-cookie').split(';')[0]
}

function profileAction(cookie, action) {
  return fetch(profileUrl, {
    method: 'POST',
    headers: { cookie, 'content-type': 'application/json' },
    body: JSON.stringify(action),
  })
}

const email = `patient-${randomUUID()}@example.test`
const cookie = await openSession(email)
const other = await openSession(`other-${randomUUID()}@example.test`)
const id = randomUUID()

async function call(type, fields = {}, status = 200, session = cookie) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { cookie: session, 'content-type': 'application/json' },
    body: JSON.stringify({ type, id, ...fields }),
  })
  const data = await response.json()
  assert.equal(response.status, status, JSON.stringify(data))
  return data
}

await call('extract', { text: '合成データ', timing: '治療中', treatments: [] }, 400)
let concern = await call('extract', { text: '次の診察で相談したいです。仕事と治療の両立が心配です。', timing: '治療前', treatments: [] })
assert.equal(concern.recommendation, 'questions')
assert.match(concern.extraction, /\n・/)
await call('review', { text: concern.extraction }, 400, other)
concern = await call('review', { text: concern.extraction })
assert.equal(concern.confirmed, true)
await call('complete', {}, 400)

for (const [module, count] of [['values', 1], ['hopes', 2], ['concerns', 2], ['plan', 2], ['questions', 1]]) {
  await call('start', { module, mode: 'short' })
  await call('confirm', { module, text: '早すぎる確認' }, 400)
  for (let index = 0; index < count; index++) {
    await call('answer', { module, index, text: `合成回答 ${index}` })
  }
  const fields = { module, text: '本人が確認した合成回答' }
  await call('confirm', fields)
  await call('confirm', fields)
}

await call('start', { module: 'values', mode: 'deep' })
await call('answer', { module: 'values', index: 0, text: 'やり直しの合成回答' })
const resumed = await fetch(url, { headers: { cookie } }).then((response) => response.json())
assert.equal(resumed[0].runs.find((run) => run.module === 'values').answers[0], 'やり直しの合成回答')
assert.deepEqual(await call('extract', { text: resumed[0].text, timing: '治療前', treatments: [] }), resumed[0])
await call('complete', {}, 400)
await call('skip', { module: 'values' })
concern = await call('complete')
assert.equal(concern.completed, true)
assert.deepEqual(await call('complete'), concern)
assert.deepEqual(await fetch(url, { headers: { cookie } }).then((response) => response.json()), [concern])
assert.deepEqual(await fetch(url, { headers: { cookie: other } }).then((response) => response.json()), [])
const updated = await profileAction(cookie, { type: 'update-cancers', cancers: ['回答しない'] })
assert.equal(updated.status, 200)
assert.deepEqual((await updated.json()).cancers, ['回答しない'])
assert.equal((await profileAction(cookie, { type: 'logout' })).status, 200)
assert.equal((await fetch(url, { headers: { cookie } })).status, 401)
const rejected = await profileAction('', { type: 'login', email, password: 'wrong-password' })
assert.equal(rejected.status, 401)
assert.equal((await rejected.json()).error, '※ログインIDまたはパスワードが違います')
const login = await profileAction('', { type: 'login', email, password })
assert.equal(login.status, 200)
const newCookie = login.headers.get('set-cookie').split(';')[0]
assert.notEqual(newCookie, cookie)
assert.deepEqual(await fetch(url, { headers: { cookie: newCookie } }).then((response) => response.json()), [concern])
assert.deepEqual((await fetch(profileUrl, { headers: { cookie: newCookie } }).then((response) => response.json())).cancers, ['回答しない'])
const secondLogin = await profileAction('', { type: 'login', email, password })
const secondCookie = secondLogin.headers.get('set-cookie').split(';')[0]
assert.equal((await profileAction('', { type: 'delete-account' })).status, 401)
const deleted = await profileAction(newCookie, { type: 'delete-account' })
assert.equal(deleted.status, 200)
assert.equal((await deleted.json()).signedIn, false)
for (const token of [newCookie, secondCookie]) {
  assert.equal((await fetch(url, { headers: { cookie: token } })).status, 401)
}
assert.equal((await profileAction('', { type: 'login', email, password })).status, 401)
assert.equal((await fetch(url, { headers: { cookie: other } })).status, 200)
const recreated = await openSession(email)
assert.deepEqual(await fetch(url, { headers: { cookie: recreated } }).then((response) => response.json()), [])
console.log('PASS: onboarding, consent, all five support modules, account deletion and session revocation')
