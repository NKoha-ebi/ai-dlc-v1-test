import { useState } from 'react'
import { canComplete, extraQuestion, moduleIds, modules } from './supportFlow'
import type { Action, Concern, ModuleId, Run } from './supportFlow'

export const privacyNotice = 'ご自身や他の方の氏名・住所・電話番号・メールアドレスなど、個人が特定できる情報を入力しないでください。'

type Props = {
  concern: Concern
  send: (action: Action) => Promise<Concern | undefined>
  busy: boolean
  onList: () => void
}

export default function SupportJourney({ concern, send, busy, onList }: Props) {
  const [page, setPage] = useState<'select' | 'dialogue' | 'summary'>(concern.completed ? 'summary' : 'select')
  const [selected, setSelected] = useState<ModuleId>(concern.recommendation)
  const [mode, setMode] = useState<Run['mode']>('short')
  const run = concern.runs.find((item) => item.module === selected)
  const isDialogue = page === 'dialogue' && run?.status === 'active'

  async function start() {
    const updated = await send({ type: 'start', id: concern.id, module: selected, mode: run?.status === 'active' ? run.mode : mode })
    if (updated) setPage('dialogue')
  }

  return (
    <>
      {page !== 'select' && !concern.completed &&
        <button type="button" disabled={busy} onClick={() => setPage('select')}>支援選択へ戻る</button>}
      <h1>{isDialogue ? modules[selected].title : page === 'summary' ? '今回の整理のまとめ' : '支援を選ぶ'}</h1>
      {page === 'select' && (
        <section className="card">
          <p className="saved-list">{concern.extraction}</p>
          <fieldset disabled={busy}>
            <legend>取り組みたい支援</legend>
            {moduleIds.map((id) => {
              const status = concern.runs.find((item) => item.module === id)?.status
              return (
                <label className="option" key={id}>
                  <input type="radio" name="module" checked={id === selected} onChange={() => setSelected(id)} />
                  {modules[id].title}{id === concern.recommendation ? '（候補）' : ''}
                  {status === 'confirmed' ? '・確認済み' : status === 'active' ? '・進行中' : status === 'skipped' ? '・省略済み' : ''}
                </label>
              )
            })}
          </fieldset>
          <label>モード
            <select value={mode} disabled={busy || run?.status === 'active'}
              onChange={(event) => setMode(event.target.value === 'deep' ? 'deep' : 'short')}>
              <option value="short">短め</option>
              <option value="deep">じっくり</option>
            </select>
          </label>
          <div className="actions">
            <button type="button" className="primary" disabled={busy} onClick={() => void start()}>
              {run?.status === 'active' ? '選んだ支援を再開する' : run ? '選んだ支援をやり直す' : '選んだ支援を始める'}
            </button>
            <button type="button" disabled={busy} onClick={() => setPage('summary')}>まとめを見る</button>
          </div>
        </section>
      )}
      {isDialogue && (
        <Dialogue key={selected} run={run} concern={concern} send={send} busy={busy} onFinish={() => setPage('select')} />
      )}
      {page === 'summary' && (
        <section className="card">
          {concern.completed && <p role="status">今回の整理を完了しました。</p>}
          {concern.runs.length === 0 && <p>選んだ支援はまだありません。</p>}
          {concern.runs.map((item) => (
            <div key={item.module}>
              <h2>{modules[item.module].title}</h2>
              <p className="saved-list">{item.status === 'confirmed' ? item.result :
                item.status === 'skipped' ? '省略済み' : '進行中。支援選択から再開できます。'}</p>
            </div>
          ))}
          {!concern.completed && !canComplete(concern) &&
            <p>支援を1件以上確認保存し、進行中の支援を確認保存するか省略してください。</p>}
          {concern.completed
            ? <button type="button" onClick={onList}>悩み一覧へ戻る</button>
            : <button type="button" className="primary" disabled={busy || !canComplete(concern)}
              onClick={() => void send({ type: 'complete', id: concern.id })}>今回の整理を完了</button>}
        </section>
      )}
    </>
  )
}

function Dialogue({ run, concern, send, busy, onFinish }: Omit<Props, 'onList'> & { run: Run; onFinish: () => void }) {
  const [answer, setAnswer] = useState('')
  const [result, setResult] = useState<string>()
  const questions = modules[run.module].questions
  const index = run.answers.length
  const minimumMet = index >= questions.length
  const question = questions[index] ?? (run.mode === 'deep' && index === questions.length ? extraQuestion : undefined)
  const reviewing = result !== undefined || !question
  const base = { id: concern.id, module: run.module }
  const draft = run.draft ?? run.answers.join('\n')

  async function finish(type: 'confirm' | 'skip') {
    const updated = await send(type === 'skip' ? { ...base, type } :
      { ...base, type, text: result ?? draft })
    if (updated) onFinish()
  }

  return (
    <section className="card">
      <label>モード
        <select value={run.mode} disabled={busy}
          onChange={(event) => void send({ ...base, type: 'start', mode: event.target.value === 'deep' ? 'deep' : 'short' })}>
          <option value="short">短め</option><option value="deep">じっくり</option>
        </select>
      </label>
      {run.answers.length > 0 && <details><summary>これまでの回答</summary>
        <ol className="saved-list">{run.answers.map((text, index) => <li key={index}>{text}</li>)}</ol>
      </details>}
      {run.reply && <p className="saved-list">{run.reply}</p>}
      {reviewing ? (
        <form className="flow-form" onSubmit={(event) => { event.preventDefault(); void finish('confirm') }}>
          <label htmlFor="support-result">まとめ案を確認・修正する</label>
          <p id="support-notice" className="help">{privacyNotice}</p>
          <textarea id="support-result" aria-describedby="support-notice" rows={5} maxLength={4000} required
            value={result ?? draft} onChange={(event) => setResult(event.target.value)} />
          <button className="primary" disabled={busy}>内容を確認して保存</button>
        </form>
      ) : (
        <form className="flow-form" onSubmit={(event) => {
          event.preventDefault()
          void send({ ...base, type: 'answer', index, text: answer }).then((updated) => { if (updated) setAnswer('') })
        }}>
          <label htmlFor="support-answer">{question}</label>
          <p id="support-notice" className="help">{privacyNotice}</p>
          <textarea id="support-answer" aria-describedby="support-notice" rows={4} maxLength={1000} required
            value={answer} onChange={(event) => setAnswer(event.target.value)} />
          <button className="primary" disabled={busy}>回答を保存して進む</button>
          {minimumMet && <button type="button" disabled={busy} onClick={() => setResult(draft)}>ここまででまとめる</button>}
        </form>
      )}
      <button type="button" disabled={busy} onClick={() => void finish('skip')}>この支援を省略</button>
    </section>
  )
}
