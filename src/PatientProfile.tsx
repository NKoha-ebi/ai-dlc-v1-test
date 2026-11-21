import { useState } from 'react'
import policy from '../aidlc-docs/inception/requirements/privacy policy.txt?raw'
import { cancerTypes } from './supportFlow'
import type { LocalProfile, ProfileAction } from './supportFlow'

type Props = {
  profile: LocalProfile
  busy: boolean
  save: (action: ProfileAction) => Promise<boolean>
}

function CancerChoices({ value, onChange }: { value: string[]; onChange: (value: string[]) => void }) {
  return (
    <fieldset>
      <legend>がん種（必須・複数選択可）</legend>
      <div className="options">
        {cancerTypes.map((cancer) => (
          <label key={cancer} className="option">
            <input type="checkbox" checked={value.includes(cancer)} onChange={(event) =>
              onChange(event.target.checked ? [...value, cancer] : value.filter((item) => item !== cancer))} />
            {cancer}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

function Policy() {
  return (
    <section aria-labelledby="policy-title">
      <h2 id="policy-title">プライバシーポリシー</h2>
      <p className="help">ベータ版の文書をローカル確認用に表示しています。</p>
      <div className="policy-window" tabIndex={0} role="region" aria-labelledby="policy-title">
        {policy.trim().split(/\r?\n\s*\r?\n/).slice(1).map((block, index) => block.startsWith('## ')
          ? <h3 key={index}>{block.slice(3)}</h3>
          : <p key={index}>{block.replace(/\*\*/g, '')}</p>)}
      </div>
    </section>
  )
}

export function PatientLogin({ busy, save, error, clearError }: Omit<Props, 'profile'> & { error: string; clearError: () => void }) {
  const [register, setRegister] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cancers, setCancers] = useState<string[]>([])
  const [consent, setConsent] = useState(false)
  return (
    <form className="card" onSubmit={(event) => {
      event.preventDefault()
      if (busy) return
      if (!register) void save({ type: 'login', email, password })
      else if (consent && cancers.length) void save({ type: 'onboard', email, password, consent, cancers })
    }}>
      {register && <h2>アカウントを作成</h2>}
      <label htmlFor="patient-email">メールアドレス</label>
      <input id="patient-email" className="credential-input" type="email" autoComplete="username" required
        maxLength={254} value={email} onChange={(event) => { setEmail(event.target.value); clearError() }} />
      <label htmlFor="patient-password">パスワード{register ? '（8文字以上）' : ''}</label>
      <input id="patient-password" className="credential-input" type="password" required minLength={register ? 8 : undefined}
        maxLength={128} autoComplete={register ? 'new-password' : 'current-password'}
        aria-describedby={error ? 'login-error' : undefined} value={password}
        onChange={(event) => { setPassword(event.target.value); clearError() }} />
      {error && <p id="login-error" role="alert">{error}</p>}
      {register && <>
        <CancerChoices value={cancers} onChange={setCancers} />
        <Policy />
        <label className="option">
          <input type="checkbox" required checked={consent} onChange={(event) => setConsent(event.target.checked)} />
          プライバシーポリシーに同意する
        </label>
      </>}
      <button className="primary" disabled={busy || (register && (!consent || !cancers.length))}>
        {register ? '登録してトップへ' : 'ログイン'}
      </button>
      <button type="button" disabled={busy} onClick={() => { setRegister(!register); setPassword(''); clearError() }}>
        {register ? 'ログインに戻る' : '初めての方はアカウントを作成'}
      </button>
    </form>
  )
}

export function AccountSettings({ profile, busy, save }: Props) {
  const [cancers, setCancers] = useState(profile.cancers)
  const [saved, setSaved] = useState(false)
  const [showPolicy, setShowPolicy] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  return (
    <section className="card">
      <p>登録メールアドレス {profile.email}</p>
      <form className="flow-form" onSubmit={(event) => {
        event.preventDefault()
        setSaved(false)
        void save({ type: 'update-cancers', cancers }).then((updated) => { if (updated) setSaved(true) })
      }}>
        <CancerChoices value={cancers} onChange={(value) => { setCancers(value); setSaved(false) }} />
        <button className="primary" disabled={busy || !cancers.length}>がん種を保存</button>
        {saved && <p role="status">がん種を保存しました。</p>}
      </form>
      <button type="button" aria-expanded={showPolicy} onClick={() => setShowPolicy(!showPolicy)}>
        プライバシーポリシーを{showPolicy ? '閉じる' : '確認する'}
      </button>
      {showPolicy && <Policy />}
      <section className="flow-form" aria-labelledby="delete-account-title">
        <h2 id="delete-account-title">アカウントの削除</h2>
        {confirmDelete ? (
          <>
            <p>アカウントと保存済みの悩み・支援結果を削除します。削除したデータは復元できません。</p>
            <div className="actions">
              <button type="button" autoFocus disabled={busy} onClick={() => setConfirmDelete(false)}>キャンセル</button>
              <button type="button" className="danger" disabled={busy}
                onClick={() => void save({ type: 'delete-account' })}>削除を確定する</button>
            </div>
          </>
        ) : <button type="button" className="danger-outline" onClick={() => setConfirmDelete(true)}>アカウントを削除</button>}
      </section>
    </section>
  )
}
