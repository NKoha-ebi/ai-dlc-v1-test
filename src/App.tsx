import { useEffect, useRef, useState } from 'react'
import logo from '../app_logo.png'
import { AccountSettings, PatientLogin } from './PatientProfile'
import SupportJourney, { privacyNotice } from './SupportJourney'
import { timings, treatments } from './supportFlow'
import type { Action, Concern, LocalProfile, ProfileAction } from './supportFlow'
import './App.css'

const example = '次の診察で、仕事と治療を両立するために相談したいことを整理したいです。'
const titles = {
  list: '悩み一覧',
  treatment: '治療情報',
  input: '悩みを入力する',
  review: '抽出案の確認',
  support: '支援を選ぶ',
  account: 'アカウント設定',
  notices: '通知・お知らせ',
}
type Screen = keyof typeof titles
const concernsUrl = '/api/local/concerns'
const profileUrl = '/api/local/profile'

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options)
  if (!response.headers.get('content-type')?.includes('application/json')) {
    throw new Error('ローカルAPIが利用できません。npm run dev で起動してください。')
  }
  const data = await response.json()
  if (!response.ok) throw new Error(data.error ?? '保存できませんでした。')
  return data as T
}

function post<T>(url: string, action: Action | ProfileAction) {
  return request<T>(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(action) })
}

function App() {
  const [screen, setScreen] = useState<Screen>('list')
  const [profile, setProfile] = useState<LocalProfile>()
  const [profileLoading, setProfileLoading] = useState(true)
  const profileRequest = useRef<Promise<LocalProfile> | undefined>(undefined)
  const [timing, setTiming] = useState('')
  const [selected, setSelected] = useState<string[]>([])
  const [draft, setDraft] = useState('')
  const [review, setReview] = useState('')
  const [saved, setSaved] = useState<Concern[]>([])
  const [id, setId] = useState('')
  const [ready, setReady] = useState(false)
  const [loading, setLoading] = useState(true)
  const [busy, setBusy] = useState(false)
  const inFlight = useRef(false)
  const concern = saved.find((item) => item.id === id)
  const [error, setError] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const heading = useRef<HTMLHeadingElement>(null)
  const menu = useRef<HTMLButtonElement>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const backTarget = useRef<Screen>('list')

  useEffect(() => {
    let active = true
    profileRequest.current ??= request<LocalProfile>(profileUrl)
    void profileRequest.current.then((current) => {
      if (active) setProfile(current)
    }).catch((reason: unknown) => {
      if (active) setError(reason instanceof Error ? reason.message : 'ログイン状態を取得できませんでした。')
    }).finally(() => {
      if (active) setProfileLoading(false)
    })
    return () => { active = false }
  }, [])

  const signedIn = profile?.signedIn === true
  useEffect(() => {
    if (!signedIn) return
    let active = true
    void request<Concern[]>(concernsUrl).then((items) => {
      if (active) { setSaved(items); setReady(true) }
    }).catch((reason: unknown) => {
      if (active) setError(reason instanceof Error ? reason.message : '一覧を取得できませんでした。')
    }).finally(() => {
      if (active) setLoading(false)
    })
    return () => { active = false }
  }, [signedIn])

  async function saveProfile(action: ProfileAction) {
    if (inFlight.current) return false
    inFlight.current = true
    setBusy(true)
    setError('')
    try {
      const updated = await post<LocalProfile>(profileUrl, action)
      if (action.type === 'logout' || action.type === 'delete-account') {
        setReady(false)
        setLoading(true)
        setSaved([])
        setDraft('')
        setReview('')
        setId('')
        setTiming('')
        setSelected([])
      }
      if (action.type !== 'update-cancers') go('list')
      setProfile(updated)
      return true
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : '設定を保存できませんでした。')
      return false
    } finally {
      inFlight.current = false
      setBusy(false)
    }
  }

  async function send(action: Action) {
    if (inFlight.current) return
    inFlight.current = true
    setBusy(true)
    setError('')
    try {
      const updated = await post<Concern>(concernsUrl, action)
      setSaved((items) => [updated, ...items.filter((item) => item.id !== updated.id)])
      return updated
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : '保存できませんでした。')
    } finally {
      inFlight.current = false
      setBusy(false)
    }
  }

  useEffect(() => {
    heading.current?.focus()
  }, [screen, signedIn, profileLoading])

  function go(next: Screen) {
    setError('')
    setScreen(next)
  }

  const organizing = (screen === 'treatment' || screen === 'input' || screen === 'review' || screen === 'support') &&
    !concern?.completed
  const logoutAfterConfirm = useRef(false)

  function navigate(next: Screen) {
    if (inFlight.current) return
    setMenuOpen(false)
    if (screen === next) menu.current?.focus()
    else if (organizing) confirmBack(next)
    else go(next)
  }

  function showList() { navigate('list') }

  function confirmBack(target: Screen, logout = false) {
    if (!dialog.current || dialog.current.open) return
    backTarget.current = target
    logoutAfterConfirm.current = logout
    dialog.current.returnValue = ''
    dialog.current.showModal()
  }

  function openConcern(item: Concern) {
    setId(item.id)
    setTiming(item.timing)
    setSelected(item.treatments)
    setDraft(item.text)
    setReview(item.extraction)
    go(item.confirmed ? 'support' : 'review')
  }

  return (
    <>
      <header className="header">
        {signedIn && <button ref={menu} type="button" data-testid="header-menu-button"
          aria-expanded={menuOpen} aria-controls="main-menu"
          onClick={() => setMenuOpen(!menuOpen)}>メニュー</button>}
        {signedIn ? <a href="#main" aria-label="悩み一覧へ" data-testid="header-logo-link"
          onClick={(event) => { event.preventDefault(); showList() }}>
          <img src={logo} alt="" />
        </a> : <img src={logo} alt="yoriMICHI" />}
      </header>
      <div className="layout">
        {signedIn && <nav id="main-menu" aria-label="メインメニュー" data-open={menuOpen}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setMenuOpen(false)
              menu.current?.focus()
            }
          }}>
          <button type="button" data-testid="menu-list-button" aria-current={screen === 'list' ? 'page' : undefined} onClick={showList}>悩み一覧</button>
          <button type="button" aria-current={screen === 'notices' ? 'page' : undefined} onClick={() => navigate('notices')}>通知・お知らせ</button>
          <button type="button" aria-current={screen === 'account' ? 'page' : undefined} onClick={() => navigate('account')}>アカウント設定</button>
          <button type="button" className="menu-logout" disabled={busy} onClick={() => {
            setMenuOpen(false)
            if (organizing) confirmBack('list', true)
            else void saveProfile({ type: 'logout' })
          }}>ログアウト</button>
        </nav>}
        <main id="main">
          {!signedIn ? (
            <>
              <h1 ref={heading} tabIndex={-1}>ログイン</h1>
              <p className="notice">ローカル検証用です。架空のメールアドレスと、この確認専用のパスワードを使用してください。</p>
              {!profile && error && <p role="alert">{error}</p>}
              {profileLoading ? <p role="status">読み込み中…</p> : profile
                ? <PatientLogin busy={busy} save={saveProfile} error={error} clearError={() => setError('')} />
                : <button type="button" onClick={() => window.location.reload()}>再読み込み</button>}
            </>
          ) : <>
          {organizing && (
            <button type="button" data-testid="navigation-back-button" disabled={busy}
              onClick={() => {
                if (screen === 'treatment') showList()
                else confirmBack(screen === 'support' ? 'review' : screen === 'input' ? 'treatment' : 'input')
              }}>戻る</button>
          )}
          {screen !== 'support' && <h1 ref={heading} tabIndex={-1}>{titles[screen]}</h1>}
          <p className="notice">ローカル検証用です。架空の情報だけを入力してください。送信済みの内容はローカルサーバーを停止するまで保持されます。</p>
          {error && <p id="flow-error" role="alert">{error}</p>}
          {busy && <p role="status">{screen === 'input' ? '整理中…' : '保存中…'}</p>}

          {screen === 'account' && profile && <AccountSettings profile={profile} busy={busy} save={saveProfile} />}
          {screen === 'notices' && <section className="card"><p>現在表示できるお知らせはありません。</p></section>}
          {screen === 'list' && (
            <section className="card" aria-label="悩みの整理">
              {loading ? <p role="status">読み込み中…</p> : saved.length > 0 ? (
                <ul className="concern-list" role="list">
                  {saved.map((item) => <li key={item.id} className="concern-card">
                    <p>{item.text.slice(0, 50)}</p>
                    <button type="button" className="concern-card-action" onClick={() => openConcern(item)}>
                      {item.completed ? 'まとめを見る' : '続きから整理する'}
                    </button>
                  </li>)}
                </ul>
              ) : ready ? <p>まだ悩みは登録されていません。</p> :
                <button type="button" onClick={() => window.location.reload()}>一覧の取得を再試行</button>}
              <button type="button" className="primary" data-testid="list-start-button" disabled={!ready}
                onClick={() => {
                  setId(crypto.randomUUID())
                  setTiming('')
                  setSelected([])
                  setDraft('')
                  setReview('')
                  go('treatment')
                }}>新しい悩みを整理する</button>
            </section>
          )}

          {screen === 'treatment' && (
            <form className="card" data-testid="treatment-form" onSubmit={(event) => {
              event.preventDefault()
              if (timing === '治療中' && selected.length === 0) {
                setError('治療内容を1つ以上選んでください。')
                return
              }
              go('input')
            }}>
              <label htmlFor="timing">治療時期（必須）</label>
              <select id="timing" required value={timing} data-testid="treatment-timing-select"
                onChange={(event) => {
                  setTiming(event.target.value)
                  setSelected([])
                  setError('')
                }}>
                <option value="">選択してください</option>
                {timings.map((item) => <option key={item}>{item}</option>)}
              </select>
              {timing === '治療中' && (
                <fieldset aria-describedby={error ? 'flow-error' : undefined}>
                  <legend>治療内容（必須・複数選択可）</legend>
                  <div className="options">
                    {treatments.map((item, index) => (
                      <label key={item} className="option">
                        <input type="checkbox" checked={selected.includes(item)}
                          data-testid={`treatment-option-${index}`}
                          onChange={(event) => {
                            setSelected(event.target.checked ? [...selected, item] : selected.filter((value) => value !== item))
                            setError('')
                          }} />
                        {item}
                      </label>
                    ))}
                  </div>
                </fieldset>
              )}
              <button className="primary" data-testid="treatment-next-button">保存して次へ</button>
            </form>
          )}

          {(screen === 'input' || screen === 'review') && (
            <form className="card" data-testid={`${screen}-form`} onSubmit={(event) => {
              event.preventDefault()
              if (screen === 'input') {
                if (!draft.trim()) { setError('悩みを入力してください。'); return }
                void send({ type: 'extract', id, text: draft, timing, treatments: selected }).then((updated) => {
                  if (updated) { setReview(updated.extraction); go('review') }
                })
              } else {
                if (!review.trim()) { setError('確認する内容を入力してください。'); return }
                void send({ type: 'review', id, text: review }).then((updated) => {
                  if (updated) go('support')
                })
              }
            }}>
              <label htmlFor="concern">{screen === 'input' ? '今、気になっていること' : '確認する内容'}</label>
              <p id="input-notice" className="help">{privacyNotice}</p>
              {screen === 'review' && <p id="review-notice" className="notice">ローカルAPIがルールに沿って作成した案です。内容を確認し、必要に応じて修正してください。</p>}
              <textarea id="concern" rows={6} required data-testid={`${screen}-concern-input`}
                disabled={busy} maxLength={screen === 'input' ? 1000 : 4000}
                aria-describedby={screen === 'input' ? 'input-notice' : 'input-notice review-notice'}
                value={screen === 'input' ? draft : review} onChange={(event) => {
                  if (screen === 'input') setDraft(event.target.value)
                  else setReview(event.target.value)
                  setError('')
                }} />
              <div className="actions">
                {screen === 'input' && !draft && (
                  <button type="button" data-testid="input-example-button" onClick={() => setDraft(example)}>入力例を使う</button>
                )}
                <button className="primary" data-testid={`${screen}-submit-button`} disabled={busy}>
                  {screen === 'input' ? busy ? '整理中…' : '次へ' : '内容を確認して保存'}
                </button>
              </div>
            </form>
          )}
          {screen === 'support' && concern &&
            <SupportJourney key={id} concern={concern} send={send} busy={busy} onList={showList} />}
          </>}
        </main>
      </div>

      <dialog ref={dialog} aria-labelledby="leave-title" onClose={() => {
        if (dialog.current?.returnValue !== 'leave') return
        if (logoutAfterConfirm.current) void saveProfile({ type: 'logout' })
        else go(backTarget.current)
      }}>
        <form method="dialog" className="card">
          <h2 id="leave-title">整理を中断しますか？</h2>
          <p>送信していない内容は再開時に表示されない場合があります。悩みの入力を修正し直すと、以前の支援結果は引き継がれません。</p>
          <div className="actions">
            <button value="stay" data-testid="leave-cancel-button" autoFocus>整理を続ける</button>
            <button value="leave" className="primary" data-testid="leave-confirm-button">中断して続ける</button>
          </div>
        </form>
      </dialog>
    </>
  )
}

export default App
