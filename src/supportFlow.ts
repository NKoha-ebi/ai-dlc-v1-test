export const modules = {
  values: { title: '価値観の整理', questions: ['大切にしたいこと、または避けたいことは何ですか？'] },
  hopes: { title: 'やりたいことの明確化', questions: ['何をしたいですか？', 'どんな場面で実現したいですか？ または、それが大切な理由は何ですか？'] },
  concerns: { title: '疾患・治療に関する懸念点の整理', questions: ['何が心配ですか？', 'どんな場面で困りますか？ または、生活にどんな影響がありますか？'] },
  plan: { title: '実現プランの検討', questions: ['実現したい希望を記入してください。', '希望に向けて、ご自身で選ぶ小さな行動は何ですか？'] },
  questions: { title: '医療者への確認事項の整理', questions: ['次の診察で、医療者に何を確認したいですか？'] },
}

export type ModuleId = keyof typeof modules
export const moduleIds = Object.keys(modules) as ModuleId[]
export const extraQuestion = '補足したい理由や、具体的な場面はありますか？'

export type Run = {
  module: ModuleId
  mode: 'short' | 'deep'
  answers: string[]
  result: string
  status: 'active' | 'confirmed' | 'skipped'
}

export type Concern = {
  id: string
  text: string
  timing: string
  treatments: string[]
  extraction: string
  confirmed: boolean
  recommendation: ModuleId
  runs: Run[]
  completed: boolean
}

export type Action =
  | { type: 'extract'; id: string; text: string; timing: string; treatments: string[] }
  | { type: 'review'; id: string; text: string }
  | { type: 'start'; id: string; module: ModuleId; mode: Run['mode'] }
  | { type: 'answer'; id: string; module: ModuleId; index: number; text: string }
  | { type: 'confirm'; id: string; module: ModuleId; text: string }
  | { type: 'skip'; id: string; module: ModuleId }
  | { type: 'complete'; id: string }

export function canComplete(concern: Concern) {
  return concern.runs.some((run) => run.status === 'confirmed') &&
    concern.runs.every((run) => run.status !== 'active')
}
export const timings = ['治療前', '治療中', '治療後', '経過観察', 'その他', '不明', '回答しない']
export const cancerTypes = ['肺', '胃', '食道', '肝臓・胆のう', '膵臓', '乳房', '泌尿器', '頭頚部',
  '子宮・卵巣', '血液', '軟部組織', '脳腫瘍', '大腸', 'その他', '不明', '回答しない']

export type LocalProfile = {
  signedIn: boolean
  email: string | null
  consentedAt: string | null
  cancers: string[]
}

export type ProfileAction =
  | { type: 'login'; email: string; password: string }
  | { type: 'logout' | 'delete-account' }
  | { type: 'onboard'; email: string; password: string; consent: boolean; cancers: string[] }
  | { type: 'update-cancers'; cancers: string[] }
export const treatments = ['手術', '抗がん剤治療', 'ホルモン療法', '化学放射線治療', '放射線治療', 'その他', '不明', '回答しない']

