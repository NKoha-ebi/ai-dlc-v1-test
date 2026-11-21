import { useEffect, useRef, useState } from 'react'
import logo from '../app_logo.png'
import './App.css'

const timings = ['治療前', '治療中', '治療後', '経過観察', 'その他', '不明', '回答しない']
const treatments = ['手術', '抗がん剤治療', 'ホルモン療法', '化学放射線治療', '放射線治療', 'その他', '不明', '回答しない']
const example = '次の診察で、仕事と治療を両立するために相談したいことを整理したいです。'
const titles = {
  list: '悩み一覧',
  treatment: '治療情報',
  input: '悩みを入力する',
  review: '抽出案の確認',
}
type Screen = keyof typeof titles

function App() {
  const [screen, setScreen] = useState<Screen>('list')
  const [timing, setTiming] = useState('')
  const [selected, setSelected] = useState<string[]>([])
  const [draft, setDraft] = useState('')
  const [review, setReview] = useState('')
  const [saved, setSaved] = useState<string[]>([])
  const [error, setError] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const heading = useRef<HTMLHeadingElement>(null)
  const menu = useRef<HTMLButtonElement>(null)
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    heading.current?.focus()
  }, [screen])

  function go(next: Screen) {
    setError('')
    setScreen(next)
  }

  function showList() {
    setMenuOpen(false)
    if (screen !== 'list' && dialog.current) {
      dialog.current.returnValue = ''
      dialog.current.showModal()
    } else {
      menu.current?.focus()
    }
  }

  return (
    <>
      <header className="header">
        <button ref={menu} type="button" data-testid="header-menu-button"
          aria-expanded={menuOpen} aria-controls="main-menu"
          onClick={() => setMenuOpen(!menuOpen)}>メニュー</button>
        <a href="#main" aria-label="悩み一覧へ" data-testid="header-logo-link"
          onClick={(event) => { event.preventDefault(); showList() }}>
          <img src={logo} alt="" />
        </a>
      </header>
      <div className="layout">
        <nav id="main-menu" aria-label="メインメニュー" hidden={!menuOpen}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setMenuOpen(false)
              menu.current?.focus()
            }
          }}>
          <button type="button" data-testid="menu-list-button" onClick={showList}>悩み一覧</button>
        </nav>
        <main id="main">
          {screen !== 'list' && (
            <button type="button" data-testid="navigation-back-button"
              onClick={() => {
                if (screen === 'treatment') showList()
                else go(screen === 'input' ? 'treatment' : 'input')
              }}>戻る</button>
          )}
          <h1 ref={heading} tabIndex={-1}>{titles[screen]}</h1>
          <p className="notice">ローカル試作版です。架空の情報だけを入力してください。入力内容はこの画面を開いている間だけ保持します。</p>

          {screen === 'list' && (
            <section className="card" aria-label="悩みの整理">
              {saved.length > 0 ? (
                <ul className="saved-list">
                  {saved.map((text, index) => <li key={saved.length - index}>{text}</li>)}
                </ul>
              ) : <p>まだ悩みは登録されていません。</p>}
              <button type="button" className="primary" data-testid="list-start-button"
                onClick={() => {
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
                <fieldset aria-describedby={error ? 'treatment-error' : undefined}>
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
              {error && <p id="treatment-error" role="alert">{error}</p>}
              <button className="primary" data-testid="treatment-next-button">保存して次へ</button>
            </form>
          )}

          {(screen === 'input' || screen === 'review') && (
            <form className="card" data-testid={`${screen}-form`} onSubmit={(event) => {
              event.preventDefault()
              if (screen === 'input') {
                if (!draft.trim()) { setError('悩みを入力してください。'); return }
                setReview(draft.trim())
                go('review')
              } else {
                if (!review.trim()) { setError('確認する内容を入力してください。'); return }
                setSaved((items) => [review.trim(), ...items])
                go('list')
              }
            }}>
              <label htmlFor="concern">{screen === 'input' ? '今、気になっていること' : '確認する内容'}</label>
              <p id="input-notice" className="help">AIに送る内容には、ご自身や他の方の氏名・住所・電話番号・メールアドレスなど、個人が特定できる情報を入力しないでください。必要な場合は『家族』『職場の人』などに置き換えてください。</p>
              {screen === 'review' && <p id="review-notice" className="notice">未確認。試作では入力文をそのまま確認欄に表示します。</p>}
              <textarea id="concern" rows={6} required data-testid={`${screen}-concern-input`}
                aria-describedby={screen === 'input' ? 'input-notice' : 'input-notice review-notice'}
                value={screen === 'input' ? draft : review} onChange={(event) => {
                  if (screen === 'input') setDraft(event.target.value)
                  else setReview(event.target.value)
                  setError('')
                }} />
              {error && <p role="alert">{error}</p>}
              <div className="actions">
                {screen === 'input' && !draft && (
                  <button type="button" data-testid="input-example-button" onClick={() => setDraft(example)}>入力例を使う</button>
                )}
                <button className="primary" data-testid={`${screen}-submit-button`}>
                  {screen === 'input' ? '次へ' : '内容を確認して保存'}
                </button>
              </div>
            </form>
          )}
        </main>
      </div>

      <dialog ref={dialog} aria-labelledby="leave-title" onClose={() => {
        if (dialog.current?.returnValue === 'leave') go('list')
      }}>
        <form method="dialog" className="card">
          <h2 id="leave-title">悩み一覧へ戻りますか？</h2>
          <p>確認して保存していない内容は一覧に表示されません。</p>
          <div className="actions">
            <button value="stay" data-testid="leave-cancel-button" autoFocus>整理を続ける</button>
            <button value="leave" className="primary" data-testid="leave-confirm-button">悩み一覧へ戻る</button>
          </div>
        </form>
      </dialog>
    </>
  )
}

export default App
