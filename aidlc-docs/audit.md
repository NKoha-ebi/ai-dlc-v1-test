## Initial Request / Workspace Detection
**Timestamp**: 2026-10-17T06:09:46Z
**User Input**:
# Context from my IDE setup:

## Active file: AGENTS.md

## Open tabs:
- AGENTS.md: AGENTS.md
- core-workflow.md: core-workflow.md

## My request:
# 要件定義
## ビジネス要件
| 項目 | 決めること |
| --- | --- |
| 目的 | もやもやをひも解き、やりたいを実現する |
| 対象ユーザー | AYA世代がん患者・外来を想定 |
| 解決する課題 | ・病気や治療によってやりたいことが叶わない<br> ・医療者へ何を相談したらよいかわからない |
| 提供価値 | やりたいことを実現可能な内容に落とし込む |
| 成功指標（KPI） | やりたいことが整理できた割合：80% |
| ビジネスモデル | 製薬会社が費用を負担、患者へは無償提供 |
| MVPの範囲 | ・もやもやのひも解き<br>・やりたいことの落とし込み<br> ・医療者共有カードの生成 |

## ユーザー要件
| 項目 | 決めること |
| --- | --- |
| ユーザーの種類 | 患者 | 
| 利用場面 | 診察前 |
| ユーザーフロー | ①ユーザー登録<br>②疾患・治療時期選択<br>③・|
| 入力方法 | ・テキスト<br>・画像入力も可能とする（検査値など）<br> ①●は選択式 |
| 出力方法 | PDF<br>※イラストは生成しない。 |
| 権限 | 利用者本人のみ、閲覧・編集・削除が可能|
| 例外ケース | ・入力途中で中断した場合は続きから入力できる<br>・通信が切断した場合、最初からやり直し<br> ・誤入力は1つ前に戻って修正できる|
これを基にAI-DLCでアプリを作成したい。

**AI Response**: AI-DLC共通ルール、welcome、ワークスペース検出、既存コード分析ルールと拡張opt-inファイルを読み込んだ。welcomeを表示。単一Reactスターターを検出し、既存コード分析を実施。
**Context**: Existing application has only a connection-test heading. No prior state/artifacts. Documentation content validated as Markdown text with textual diagram alternatives. No application files modified. Filesystem write required explicit escalation under read-only environment.

---

## Reverse Engineering / Approval Prompt
**Timestamp**: 2026-10-17T06:09:46Z
**AI Response**: 既存コード分析完了。React・TypeScript・Viteの接続確認画面のみ。患者登録、対話、画像入力、保存、PDF機能なし。分析資料とreverse-engineering-questions.mdのQuestion 1をレビューし、[Answer]: に回答して完了を知らせてください。承認後は要件分析へ進む。拡張の適合状況はN/A（全拡張opt-in待ち）。
**Context**: Approval required by inception/reverse-engineering.md Steps 12-13 and user AGENTS.md. Stop before Requirements Analysis. No full extension rules loaded.

---
## 日本語表記への統一
**記録日時**: 2026-10-17T06:12:08Z
**ユーザー入力（原文）**:
# Context from my IDE setup:

## Active file: AGENTS.md

## Open tabs:
- AGENTS.md: AGENTS.md
- core-workflow.md: core-workflow.md

## My request:
すべて日本語に直してください

**AIの応答・対応**: 作成したAI-DLC資料の説明を日本語に統一。進捗管理、分析記録、質問の見出しを更新。ファイル名・製品名・コード識別子・規定の回答タグは保持。監査ログは既存記録の改変や全体の上書きを避け、日本語訳を追記した。今後の説明も日本語とする。
**状況**: 既存コード分析の承認待ちを継続。日本語化の依頼は次段階への承認として扱わない。

### 過去の監査記録の日本語訳

英語の項目名の対応: Initial Request / Workspace Detection＝初回依頼／ワークスペースの検出、Reverse Engineering / Approval Prompt＝既存コード分析／承認の案内、Timestamp＝記録日時、User Input＝ユーザー入力、AI Response＝AIの応答、Context＝状況。

初回記録の状況: 既存アプリには接続確認の見出しのみがある。以前の進捗記録や成果物はない。資料は図の代わりに文章を使い、Markdownとして内容を検証した。アプリケーションのファイルは変更していない。読み取り専用環境のため、ファイルの保存には明示的な権限の承認が必要だった。

承認案内の状況: 既存コード分析ルールの手順12〜13とAGENTS.mdにより、要件分析へ進む前にユーザーの承認が必要。拡張規則の本体は読み込んでいない。Question 1 は質問1、N/A は対象外、opt-in は適用の選択、welcome は開始時の案内を意味する。

ユーザー入力の英語部分は原文記録のため維持する。IDE情報の見出しは、Context from my IDE setup＝IDE設定の情報、Active file＝編集中のファイル、Open tabs＝開いているタブ、My request＝依頼内容。

---
## 既存コード分析の承認確認／要件分析
**記録日時**: 2026-10-17T06:14:48Z
**ユーザー入力（原文）**:
# Context from my IDE setup:

## Active file: aidlc-docs/inception/reverse-engineering/reverse-engineering-questions.md

## Open tabs:
- reverse-engineering-questions.md: aidlc-docs/inception/reverse-engineering/reverse-engineering-questions.md
- audit.md: aidlc-docs/audit.md
- aidlc-state.md: aidlc-docs/aidlc-state.md
- AGENTS.md: AGENTS.md
- core-workflow.md: core-workflow.md

## My request:
開頭官僚

**AIの応答・対応**: 「回答完了」の意味として受け取り、ファイルを確認。承認根拠は推測したチャット文面ではなく、回答ファイルの「[Answer]: A」。回答と選択肢に矛盾はない。既存コード分析を承認済みに更新し、要件分析ルールと関連成果物を確認した。
**状況**: 新機能・アプリ全体・複雑な案件として詳細な要件分析を選択。ユーザーフロー、AIの範囲、画像、保存、認証、PDF、KPI、品質条件と拡張適用を確認する19問を作成。拡張規則の本体は適用選択まで読まない。回答前の要件確定・実装は行わない。
**回答案内**: requirement-verification-questions.mdの各[Answer]:に回答し、完了したことを知らせてください。選択肢に合わない場合はXと希望内容を記入してください。
**内容検証**: 通常のMarkdownを使用。19個の質問見出し・回答タグ・その他の選択肢を機械的に照合。図や埋め込みコードなし。

---

## 要件分析／初回回答と補足の受領
**記録日時**: 2026-10-17T09:59:02Z
**ユーザー入力（原文）**:
# Context from my IDE setup:

## Active file: aidlc-docs/inception/requirements/requirement-verification-questions.md

## Open tabs:
- requirement-verification-questions.md: aidlc-docs/inception/requirements/requirement-verification-questions.md
- component-inventory.md: aidlc-docs/inception/reverse-engineering/component-inventory.md
- code-structure.md: aidlc-docs/inception/reverse-engineering/code-structure.md
- code-quality-assessment.md: aidlc-docs/inception/reverse-engineering/code-quality-assessment.md
- business-overview.md: aidlc-docs/inception/reverse-engineering/business-overview.md

## My request:
回答完了

質問4に関して、以下のように順序を示す

### ユーザーフローの設計方針

本アプリでは、ユーザーが入力した「もやもや」の内容や、すでに整理されている情報によって必要な支援プロセスが異なるため、すべてのユーザーに共通した固定フローは採用しない。

「価値観の整理」「やりたいことの明確化」「疾患・治療に関する懸念点の整理」「実現プランの検討」「医療者への確認事項の整理」を独立した支援モジュールとして設計し、相談内容・情報の充足状況・本人の意向に応じて実行順序を変更・省略・再実行できる構成とする。

特に「大切にしたいこと」は、必ずしも目標を見つけるための前段階ではなく、複数の選択肢から本人に適した方向性を検討するための判断基準として扱う。

フローの選択では、AIによる自然言語の解釈を利用する一方、フェーズ間の遷移条件は可能な限り明示的なルールとして定義し、動作の検証可能性とAI実行コストの抑制を図る。

なお、医療上の判断が必要な事項については、AIのみで適否を確定せず、医療者に確認すべき内容を整理する。医療者共有カードは、本人が内容を確認したうえで必要に応じてPDFとして出力する。

また、本人が希望する場合には、提案されたフローの変更や途中段階への復帰を可能とする。



質問５について以下のように整理する

**X）その他：生成AIとルールベース制御を組み合わせたハイブリッド方式**

ユーザーが自由記述した「もやもや」や希望について、生成AIが自然言語を解析し、状況・感情・希望・価値観の候補・懸念点・相談目的などを抽出・構造化する。

AIによる解釈を本人が確認・修正したうえで、構造化された情報と事前定義したルールに基づき、必要な支援モジュールを選定する。複数の候補がある場合はユーザー自身が選択できるようにする。

各支援モジュールでは、固定の質問・選択肢と生成AIによる対話・要約・下書き生成を必要に応じて組み合わせる。

AIの実行回数を最小限に抑え、ルールベースで対応できる処理には原則として生成AIを使用しない。また、医療上の判断はAIで確定せず、医療者への確認事項として整理する。

なお、AIによる行動案生成の範囲や、各モジュール内でのAI利用方法は今後の検証によって決定する。

**回答ファイル（確認時点の原文）**:
# 要件の確認

各質問の [Answer]: に選択肢の文字を記入してください。Xを選ぶ場合は具体的な内容を添えてください。回答後、チャットで「回答完了」とお知らせください。選択肢は提案であり、まだ確定した要件ではありません。

## 質問1：今回完成させる範囲

最初の完成目標はどれですか。

A) 架空の患者情報だけを使う、端末内で動く操作試作品。

B) 架空の患者情報で、実際の認証・サーバー保存・AI接続まで検証するアプリ。

C) 実際の患者情報を扱う運用開始を目指すアプリ（運用条件は別途具体化）。

X) その他（具体的に記入）。

[Answer]: c

## 質問2：利用端末

どの利用環境を対象にしますか。

A) スマートフォン中心のWebアプリ。PCにも対応。

B) PC中心のWebアプリ。スマートフォンにも対応。

C) iOS・Androidの専用アプリ。

X) その他（具体的に記入）。

[Answer]:x 患者（ユーザー）はスマートフォン。運営管理、蓄積データの医学研究利用画面はPC対応。

## 質問3：対象年齢

対象とする年齢の範囲をどうしますか。これは対象者の製品上の定義を確認する質問です。

A) 18〜39歳。

B) 15〜39歳。未成年の利用・同意条件は追加検討する。

X) その他（年齢の範囲を記入）。

[Answer]: B

## 質問4：ユーザーフロー③以降

登録・疾患と治療時期の選択後は、どの流れにしますか。

A) もやもやの入力 → 気持ちや困りごとの整理 → やりたいことと小さな行動案の整理 → 医療者への相談事項を確認・編集 → PDF作成。

B) やりたいことの入力 → 障壁やもやもやの整理 → 小さな行動案の整理 → 医療者への相談事項を確認・編集 → PDF作成。

X) その他（希望する順序を記入）。

[Answer]:x 支援モジュールの設計によりフローを動的にする。

## 質問5：AIによる支援

もやもやや希望をどの方法で整理しますか。

A) 生成AIが対話し、要約・行動案・相談事項の下書きを作る。

B) 固定の質問と選択肢で整理し、生成AIは要約のみに使う。

C) 最初は生成AIを使わず、固定の質問とテンプレートで整理する。

X) その他（具体的に記入）。

[Answer]:x 生成Aiとルールベース制御を組み合わせたハイブリット方式

## 質問6：行動案と医療的判断の境界

病気や治療に関わる「実現可能な内容」を、どの範囲で扱いますか。

A) 本人の希望・障壁・小さな行動の候補と相談事項を整理する。医学的な実行可否や治療変更は判定せず、医療者へ確認する項目として残す。

B) 医療的な提案も含めたい。対象とする判断、監修者、確認手順を具体的に追記する。

X) その他（具体的に記入）。

[Answer]: A

## 質問7：疾患・治療時期の選択

選択肢の範囲をどうしますか。

A) がん種は広い分類と「その他・不明・回答しない」。治療時期は「治療前・治療中・治療後・経過観察・その他・回答しない」で仮設定する。

B) 特定のがん種・治療時期に絞る。対象と選択肢を追記する。

X) その他（確定した選択肢や参考資料の有無を記入）。

[Answer]:A　治療時期の分類をもう少し詳細にする。（「治療中」を具体的な治療内容の選択肢に変更）

## 質問8：画像入力

検査値などの画像をどこまで扱いますか。

A) 添付とプレビューのみ。数値は本人が必要に応じてテキスト入力する。

B) 文字を読み取り、本人が読み取り結果を確認・修正してから整理に利用する。医学的な数値判定はしない。

C) 画像から数値の医学的な解釈も行いたい。対象と確認手順を追記する。

X) その他（具体的に記入）。

[Answer]:x 検査値に基づいた判断を行わないため、画像入力を行わない

## 質問9：登録と本人のデータ管理

利用者本人だけが閲覧・編集・削除する仕組みとして、何を想定していますか。

A) メールアドレスとパスワードで登録・ログインする。

B) メールに届くログインリンクで本人を確認する。

C) 試作品では仮の登録画面と端末内保存に限定する。実際の本人認証は次の段階で実装する。

X) その他（希望する認証方式を記入）。

[Answer]: A

## 質問10：中断と通信断の扱い

「中断なら再開」「通信断なら最初から」の保存範囲をどう定義しますか。

A) 通常の中断は下書きを保存して再開。通信断時は、そのとき進行中の整理だけを破棄し、登録情報・完成済みカードは保持する。

B) 通信断でも下書きを保持し、再接続後に再開できる仕様へ変更する。

X) その他（何を保存・破棄し、どこからやり直すかを記入）。

[Answer]: B

## 質問11：修正する範囲

「1つ前に戻る」で入力を修正した場合、作成済みの要約や行動案はどうしますか。

A) 前の入力を保持して修正できる。修正内容に関係する要約・行動案は再作成し、本人が再確認する。

B) 最後の確認画面で全項目を直接編集できる仕様にする。

X) その他（具体的に記入）。

[Answer]:x １つ前に戻る場合、ポップアップなどで確認を取り、それでも良ければAとする。APIの無駄な使用を減らしたい。

## 質問12：PDFの内容と共有方法

医療者共有カードには何を載せますか。イラストは生成しません。

A) 1ページを基本に、やりたいこと・困りごと・本人が選んだ行動案・医療者への質問・作成日を記載。本人がダウンロードして提示する。画像原本と氏名は載せない。

B) Aの項目に疾患・治療時期・本人確認済みの検査値も追加。本人がダウンロードして提示する。

X) その他（項目、ページ数、氏名・画像の掲載、直接送信の要否を記入）。

[Answer]: A

## 質問13：保存期間と削除

下書き・画像・対話・カードの保存方針はどうしますか。

A) 本人が削除するまで保存し、アカウント削除時は関連データも削除対象にする。具体的な削除完了期限は設計で定める。

B) 保存期限を設ける。データごとの期間とアカウント削除時の扱いを追記する。

C) 試作品として端末内に保存し、本人が全データを削除できる。サーバー保存はしない。

X) その他（具体的に記入）。

[Answer]: A

## 質問14：費用負担者への情報提供

製薬会社へアプリの利用情報を提供しますか。

A) MVPでは提供しない。費用負担のみを想定する。

B) 個人を識別しない集計のみ提供したい。集計項目・同意・少人数集計の扱いは別途具体化する。

X) その他（提供先・目的・項目・同意の考え方を記入）。

[Answer]: B

## 質問15：KPIの定義

「やりたいことが整理できた割合80%」をどう測りますか。

A) 整理完了時の「やりたいことが整理できた」への「はい」数 ÷ その設問への回答者数。対象期間を区切って集計し、未回答・途中離脱は別に表示する。

B) 整理を開始した全利用者を分母とし、「整理できた」と回答した利用者を分子にする。未回答・途中離脱も分母に含める。

X) その他（設問、分母、分子、計測単位を記入）。

[Answer]:x 整理完了時に10段階評価でアンケート集計。平均数値\*10＝（やりたいことが整理できた割合[%]）とする。

## 質問16：使いやすさ・性能・運用条件

初期の非機能要件をどう決めますか。

A) 小規模な試用を想定。日本語、スマートフォン対応、キーボード操作、読みやすい文字・配色、処理中表示と再試行を基本とし、人数・応答時間・稼働率の数値目標は設計時の提案で決める。

B) 現時点で数値や運用条件がある。同時利用人数、応答時間、公開先、AIの利用先・予算、保存地域などの指定を追記する。

X) その他（制約・希望を記入）。

[Answer]: A

## 質問17：セキュリティ拡張

セキュリティの拡張規則を適用しますか。

A) はい。すべてのセキュリティ規則を必須とし、違反があれば段階を完了しない（本番向けアプリで推奨）。

B) いいえ。この拡張規則は適用しない（概念検証・試作品向け）。本人だけのアクセスなど、元の要件は維持する。

X) その他（具体的に記入）。

[Answer]:　B

## 質問18：障害への耐性・回復力の拡張

障害への耐性・回復力の基準を適用しますか。

AWSの設計指針に基づき、障害への耐性、高可用性、観測、復旧など15分野の設計を支援する規則です。適用だけで本番運用の準備や稼働率・復旧時間・復旧時点の目標を保証するものではなく、構築後の正式なレビューの代替でもありません。設計のたたき台として利用します。

A) はい。設計指針として適用する（業務上重要なシステムで推奨。運用前に検証・強化する）。

B) いいえ。適用しない（概念検証・試作品向け）。

X) その他（具体的に記入）。

[Answer]: A

## 質問19：性質に基づくテストの拡張

多様な入力でも満たすべき性質を検証するテストの規則を適用しますか。

A) はい。すべての規則を必須とする（業務ロジック・データ変換・保存形式・状態を持つ機能向け）。

B) 一部適用する。副作用のない関数と、保存形式への変換・復元の検証に限定する。

C) いいえ。適用しない（画面中心で複雑なロジックが少ない試作品向け）。

X) その他（具体的に記入）。

[Answer]: B


**AIの応答・対応**: 19問を検証し、大小文字と全角空白は許容。質問4・5の補足を優先し、動的な5支援モジュールと生成AI・ルールのハイブリッド方針を記録。画像入力は廃止、通信断は再開へ変更。拡張設定を更新し回復力・PBTの規則を読み込んだ。セキュリティ規則は無効のため読み込み・適用を省略。部分PBTは指定5規則を必須とする。
**未確定事項**: 運営・研究の初期範囲と権限、未成年の同意、治療分類、KPI単位、AI検証段階を追加9問へ整理。RESILIENCY-02（復旧・可用性）とRESILIENCY-03（変更管理）は未充足のため要件確定を保留。その他の拡張適用状況は分析記録参照。
**回答案内**: requirements-clarification-questions.mdの各[Answer]:に回答し、回答完了と知らせてください。追加確認はrequirements-analysis.md手順6と、有効化された回復力拡張の必須確認に基づく。
**内容検証**: 図・コードなしのMarkdown。9質問・回答欄・その他選択肢の個数とタブ不使用を検証。元の回答は変更していない。

---


## 要件分析・追加回答確認
**Timestamp**: 2026-10-17T10:31:19Z
**User Input**: 回答完了　次に進んでください。
**AI Response**: 追加9回答を検証。選択済み内容をrequirements.mdの草案に反映。質問1・2・7の補足は未記入のため確定しない。requirements-finalization-questions.mdに3項目を作成。RESILIENCY-02の数値目標・根拠が未確定であり段階完了は宣言しない。セキュリティ拡張は無効のため本体読込・適用を省略。PBTは部分適用、現段階の実装確認は対象外。
**Context**: 内容は通常のMarkdown。埋め込みコード・図・タブなし、回答欄3個を作成前に検証。要件草案・進捗・確認事項を更新、既存回答を保持。ユーザーへ3項目の回答を案内する。
---


## 要件分析・補足3回答の確認
**Timestamp**: 2026-10-17T10:40:54Z
**User Input**: 補足確認3項目に回答完了しました。
**AI Response**: A・B・Aの回答を確認。運営操作、研究の検索閲覧のみ、集計3項目、10人未満と差分推定の抑制、条件承認前の研究アクセス・製薬会社提供無効を反映。可用性99.5%を未承認提案として記載。10分がRTO・RPOのどちらか曖昧なため質問4を追加し完了を保留。RESILIENCY-02は未充足、03の変更管理提案は維持、その他の評価は要件草案参照。セキュリティ拡張は無効のため読込・適用を省略。PBTは要件段階N/A。
**Context**: 通常Markdownの構文・回答欄1個・タブおよび埋め込みコードなしを保存前に検証。質問1〜3の原回答を保持。
**回答ファイル原文（追加質問4も含む現在のスナップショット）**:
# 要件確定に向けた補足3項目

追加9問の選択は受領済みです。以下は質問1・2・7で未記入だった補足です。既存回答の変更は不要です。各[Answer]:に記入してください。

## 質問1：初期版の運営・研究・集計操作

A) 下記の最小範囲を提案として採用する。運営はアカウント状態確認・利用停止／解除、研究者権限管理。研究者は同意済みデータの検索・閲覧のみ（個別データの書出しなし）。製薬会社向けは期間別の利用件数・完了件数・整理実感スコアのみ。少人数集計は対象10人未満を非表示とし、差分から推定できる集計も出さない。これらは今回の提案であり、従来回答から確定した内容ではない。

B) 必要な運営操作・研究操作・集計項目・各閲覧者を自分で指定する。詳細を追記する。

X) その他（具体的に記入）。

[Answer]: A

## 質問2：研究参加同意の範囲

A) 研究主体・目的・対象データ・アクセス権限・撤回後の扱いをこの回答で指定する。識別情報を除く対象、自由記述の扱い、撤回前の出力データの扱いも記入する。

B) 現時点では研究主体等が未定。研究画面は初期版に実装するが、研究利用の条件・同意文面を確認して承認するまで実データへの研究アクセスと製薬会社への提供を無効にする。条件未確定のまま研究運用を開始しない。

X) その他（具体的に記入）。

[Answer]:　B

## 質問3：復旧目標の具体値

Pilot Lightの選択は受領済みです。RESILIENCY-02では具体的な目標と業務上の根拠が必要で、AIが無断で確定できません。RTOは復旧までの許容時間、RPOは保存済みデータの許容損失時間幅です。通信断時に未送信下書きを保持する要件とは区別します。

A) RTO・RPOの具体値と業務上の理由を自分で指定する。患者向け・運営・研究・集計と、保存データの種類ごとの差異があれば併記する。

B) AI-DLCからPilot Lightに整合するRTO・RPO・可用性の数値と根拠を提案し、要件定義書で承認したい。数値は承認まで未確定とする。

X) その他（予算・許容停止時間などを具体的に記入）。

[Answer]:A 10分。ユーザーに一定期間試用してもらうベータ版であり、ある程度の使いやすさが必要。

## 質問4：回答3の「10分」の対象

回答3を受領しました。「10分」がRTOとRPOのどちらを指すかで、復旧・保存設計が変わるため確認します。ベータ版として使いやすさが必要という理由は記録済みです。

A) 両方とも10分。RTOは障害から10分以内の復旧、RPOは保存済みデータの損失を最大10分以内とする。初期版の患者・運営・研究・集計の各機能と、それらの永続データに共通の目標とする。

B) RTOだけ10分。RPOは別の具体値を追記するか、要件定義書でAI-DLCから提案してほしい旨を記入する。

C) RPOだけ10分。RTOは別の具体値を追記するか、要件定義書でAI-DLCから提案してほしい旨を記入する。

X) その他（機能・データ別の目標などを具体的に記入）。

[Answer]:

**回答案内**: requirements-finalization-questions.mdの質問4に回答してください。RTO/RPOの無断決定禁止と曖昧さの解消は回復力規則および質問形式規則による。
---


## 要件分析・最終補足回答と承認案内
**Timestamp**: 2026-10-17T10:43:38Z
**User Input**: 補足質問回答完了
**回答ファイルの原回答**: [Answer]: A
**AI Response**: RTO・RPO各10分を確認し要件に反映。重要度・影響・依存関係を追加。要件追加確認を完了し承認待ちへ更新。可用性99.5%は未承認の提案であり目標の実現性は後続で検証。セキュリティ拡張は無効のため読込・適用を省略。PBT必須5規則は要件段階N/A。適合状況はrequirements.md参照。
**承認案内**: 要件定義書とrequirements-approval-questions.mdを確認し、Aで承認・ユーザーストーリーへ続行、Bで変更依頼、Xでその他を記入してください。明示承認までは次段階を開始しない。
**Context**: requirements-analysis.mdの手順9およびAGENTS.mdの明示承認規定。図・コードなし、Markdownの表と文章、回答欄1個、タブなしを保存前に検証。段階承認チェックは未完了を維持。
---


## 要件承認・ユーザーストーリー計画
**Timestamp**: 2026-10-17T10:52:43Z
**User Input**: 回答完了
**承認ファイル原回答**: [Answer]: A
**AI Response**: 要件定義書の明示承認を確認し、要件分析を完了。ユーザーストーリーの実施評価と生成計画を作成。新しい利用体験・複数役割・複雑な受入条件が実施理由。生成は計画承認まで未着手。
**承認案内**: story-generation-plan.mdの質問1に、計画承認・生成へ進む場合はA、変更依頼はBと内容、その他はXと内容を記入してください。
**Context**: user-stories.mdのPart 1手順13は計画の明示承認を必須とする。通常Markdown、表の列、質問・回答欄1個、タブ・埋め込みコードなしを保存前に検証。計画と段階の完了済みチェックを更新。セキュリティ拡張は無効で読込・適用省略。回復力は既存決定を引継ぎ、構築確認はN/A。PBT実装検証はN/A。
---


## ユーザーストーリー生成
**Timestamp**: 2026-10-20T11:22:28Z
**User Input**: ユーザーストーリー確認済み
**計画ファイルの原回答**: [Answer]: B 対象ペルソナは患者、運営者、医学研究者　その他の内容は承認
**AI Response**: 変更対象が明確でその他は明示承認済みのため、3ペルソナへ修正して承認範囲内の生成を実行。3種類のpersonas.mdと21件のstories.mdを作成し、受入条件・要件対応・INVEST・依存・拡張適合を記載。保護者同意・製薬会社集計は独立ペルソナにせず要件として保持。チェックリストと状態を更新。
**成果物承認案内**: personas.mdとstories.mdを確認し、user-stories-approval-questions.mdの質問1にAで承認してワークフロー計画へ進む、Bで対象IDと変更内容、Xでその他を記入してください。
**Context**: user-stories.md手順21により生成成果物の明示承認を待つ。今回の確認を未生成だった成果物の承認には流用しない。Markdown・21識別子・タブとコードブロックなしを作成前に検証。回復力は既存方針維持、設定確認はN/A。PBT実装確認はN/A。無効なセキュリティ拡張は読込・適用省略。
---


## ユーザーストーリー・ペルソナ改訂
**Timestamp**: 2026-10-23T03:59:24Z
**User Input**:
# Context from my IDE setup:

## Active file: aidlc-docs/inception/user-stories/personas.md

## Open tabs:
- personas.md: aidlc-docs/inception/user-stories/personas.md

## My request:
このような構成を考えている。ペルソナのページを更生しなおして

**添付**: 患者画面、共通データベース、管理者用Web画面（運用管理・研究用データ）の構成図。画像バイナリは会話の添付を参照。
**AI Response**: 3ペルソナを維持し、図に沿った画面・目的・行動・権限・役割境界へpersonas.mdを再構成。コンテンツ管理・問い合わせ対応・CSV出力・研究別管理を構想として記録。CSVと個別データ書出し禁止等の差分を明記。承認済み要件とstories.mdは変更せず、成果物承認待ちを維持。
**Context**: 既存ユーザーストーリー段階の変更依頼として実施。通常Markdownの見出し・表・箇条書きを保存前に検証。図・コードブロックなし。RESILIENCY-01〜03・11の既存方針を維持、その他は本改訂範囲N/A。PBTは資料改訂のためN/A。無効なセキュリティ拡張は読込・適用省略。計画・状態へ完了チェックを追記。次段階への移行なし。
---

## ユーザーストーリー・ペルソナ承認
**Timestamp**: 2026-10-26T08:50:53Z
**User Input**: "personas.md承認"
**AI Response**: personas.mdの承認を記録しました。stories.mdは引き続き承認待ちです。
**Context**: user-stories.md手順22に基づく承認記録。承認対象は明示されたペルソナ単独。未確定のCSV出力範囲等を確定せず、段階全体の承認チェックは未完了を維持。計画・状態へ個別承認チェックを追記。通常Markdownの見出し・文章・チェックボックスを保存前に検証、図や埋め込みコードなし。拡張規則は既存評価を維持し、承認記録のみのため追加評価はN/A。セキュリティ拡張は無効のため適用省略。
---

## ユーザーストーリー・運営機能追加
**Timestamp**: 2026-10-29T04:40:29Z
**User Input**:
# Context from my IDE setup:

## Open tabs:
- stories.md: aidlc-docs/inception/user-stories/stories.md
- personas.md: aidlc-docs/inception/user-stories/personas.md
- requirements.md: aidlc-docs/inception/requirements/requirements.md

## My request:
ユーザーストーリーの運営について、アカウントの状態管理の他、お知らせなどの発行、メンテナンスでのページ遷移の公開、非公開の権限を運営に付与したい

**AI Response**: stories.mdにUS-22お知らせの発行・公開管理、US-23メンテナンス時のページ公開・非公開管理を追加。権限確認、直接URL、メンテナンス案内、再公開、下書き保持、失敗時、変更記録の受入条件を記載。requirements.mdにFR-13・14を追加差分として追記し要件対応を更新。全23件。公開停止の対象ページ・関連API等は後続設計で具体化。
**Context**: 既存ユーザーストーリー段階の明示された変更依頼を実施。既存IDとペルソナ承認を維持、ストーリー全体は承認待ち。図・コードなしのMarkdownとID一意性を保存前に検証。回復力の既存方針と計画停止算入・変更管理を維持、実装・PBT検証はN/A。無効なセキュリティ拡張は適用省略。
---

## ユーザーストーリー承認・ワークフロー計画
**Timestamp**: 2026-10-29T04:46:23Z
**User Input**:
# Context from my IDE setup:

## Active file: aidlc-docs/inception/user-stories/stories.md

## Open tabs:
- stories.md: aidlc-docs/inception/user-stories/stories.md
- personas.md: aidlc-docs/inception/user-stories/personas.md
- requirements.md: aidlc-docs/inception/requirements/requirements.md

## My request:
ユーザーストーリー承認次に進んでください

**AI Response**: 23ストーリーの承認を記録し関連チェックを完了。実行計画と承認質問を作成。今後8種類の段階、単位ごとの設計・実装、統合検証、研究出力等の未確定事項を整理。初回保存前チェックのPowerShell文字列分割による図フェンス判定が失敗し書込み前に停止。複雑な図の代わりにテキスト可視化を用いて再検証・保存。実装は未着手。
**AI Prompt**: execution-plan.mdを確認し、workflow-planning-questions.mdの質問1へA（承認してアプリケーション設計へ）、B（変更内容）、X（その他）で回答してください。実施段階の追加・省略・順序・深さは変更できます。
**Context**: workflow-planning.md手順9〜10とAGENTS.mdは計画の明示承認後の次段階移行を規定。今回の承認を未作成だった計画へ流用しない。回復力01・02・03・11は計画適合、その他は後続設計のためN/A。PBT必須規則の実装確認はN/A。セキュリティ拡張は無効のため省略。通常Markdownの表・見出し・回答欄1件を検証。
---

## ワークフロー計画承認・アプリケーション設計開始
**Timestamp**: 2026-10-29T04:53:20Z
**User Input**:
# Context from my IDE setup:

## Active file: aidlc-docs/inception/plans/workflow-planning-questions.md

## Open tabs:
- workflow-planning-questions.md: aidlc-docs/inception/plans/workflow-planning-questions.md
- execution-plan.md: aidlc-docs/inception/plans/execution-plan.md
- stories.md: aidlc-docs/inception/user-stories/stories.md
- personas.md: aidlc-docs/inception/user-stories/personas.md
- requirements.md: aidlc-docs/inception/requirements/requirements.md

## My request:
承認しました

**回答ファイル原文**: [Answer]: A
**AI Response**: 実行計画の明示承認を確認し進捗とチェックを更新。アプリケーション設計計画を作成。必須の5成果物、実行チェック、構成・研究出力・問い合わせ等の範囲に関する3問を用意。言語と詳細UIは後続決定を維持。
**AI Prompt**: application-design-plan.mdの質問1〜3の[Answer]:に回答してください。Aは提案、Bは別案または追加範囲、Xはその他です。
**Context**: .aidlc-rule-details/inception/application-design.md手順6〜9の「Do not proceed until ALL [Answer]: tags are completed」に従い回答待ち。今回の計画承認で設計段階へ進むことは許可済みだが、新たな構成・範囲への回答を推測しない。通常Markdownの表現・見出し・回答欄3件を保存前検証。図・コードなし。拡張規則は既存設定を維持し適用見通しを計画に記載。
---

## アプリケーション設計・回答確認とUI参照方針
**Timestamp**: 2026-10-29T09:37:48Z
**User Input**:
# Context from my IDE setup:

## Active file: aidlc-docs/inception/plans/application-design-plan.md

## Open tabs:
- application-design-plan.md: aidlc-docs/inception/plans/application-design-plan.md
- workflow-planning-questions.md: aidlc-docs/inception/plans/workflow-planning-questions.md
- execution-plan.md: aidlc-docs/inception/plans/execution-plan.md
- stories.md: aidlc-docs/inception/user-stories/stories.md
- personas.md: aidlc-docs/inception/user-stories/personas.md

## My request:
アプリケーション設計計画の質問に回答完了しました。今後の詳細UIについては大枠としてデジタル庁の
[https://www.digital.go.jp/policies/servicedesign/designsystem](https://www.digital.go.jp/policies/servicedesign/designsystem)
このサイトを参照する形で、さらに詳細は後続で決定する。

**回答ファイル原文**: 質問1 [Answer]: A ／ 質問2 [Answer]: A ／ 質問3 [Answer]: B
**AI Response**: 回答を分析し単一バックエンドとCSV保留を確認。質問3Bに必要な対象・操作の記入がないため補足質問4を計画に追記。指定公式サイトを閲覧し、案内される専用サイトとUI参照方針、詳細は後続決定を記録。設計成果物生成と追加要件の確定は未実施。
**AI Prompt**: application-design-plan.mdの質問4で、追加対象の機能・操作と、問い合わせを含める場合の回答方法を記入してください。
**Context**: .aidlc-rule-details/inception/application-design.md手順8〜9は曖昧な回答を解消してから設計成果物を生成するよう規定。質問3Bは追加希望として受領済みだが範囲を推測できない。通常Markdownの見出し・リンク・選択肢・回答欄1件を追記前に検証。既存の拡張設定を維持、今回は回答分析と方針記録のみで構築・PBT検証はN/A。無効なセキュリティ拡張は適用省略。
---

## アプリケーション設計・補足回答と変更案
**Timestamp**: 2026-10-29T10:05:02Z
**User Input**:
# Context from my IDE setup:

## Active file: aidlc-docs/inception/plans/application-design-plan.md

## Open tabs:
- application-design-plan.md: aidlc-docs/inception/plans/application-design-plan.md
- workflow-planning-questions.md: aidlc-docs/inception/plans/workflow-planning-questions.md
- execution-plan.md: aidlc-docs/inception/plans/execution-plan.md
- stories.md: aidlc-docs/inception/user-stories/stories.md
- personas.md: aidlc-docs/inception/user-stories/personas.md

## My request:
回答を完了しました

**回答ファイル原文**: [Answer]:C　回答方法は自由記述。
**AI Response**: 両機能追加と自由記述形式を確認。追加要件FR-15・16とUS-24〜27の受入条件・設計影響をレビュー用変更案に具体化。回答を届ける経路は未指定のため、変更案承認と合わせてアプリ内返信または別窓口を選択する質問を作成。既存要件と23ストーリーは変更していない。
**AI Prompt**: application-scope-change-questions.mdの質問1で、変更案の承認と問い合わせの回答経路を選択してください。
**Context**: application-design.md手順8〜9の曖昧さ解消と、承認済み計画の追加要件・ストーリー変更承認を具体的な案で実施。自由記述は形式を示すが伝達経路を確定しない。Markdown見出し・箇条書き・質問1件・ストーリー候補4件を検証。回復力の既存目標を維持、実装・PBT検証はN/A。セキュリティ拡張は無効につき省略。
---

## アプリケーション設計・回答反映と設計レビュー
**Timestamp**: 2026-10-30T02:01:07Z
**User Input**:
# Context from my IDE setup:

## Open tabs:
- application-design-approval-questions.md: aidlc-docs/inception/plans/application-design-approval-questions.md
- services.md: aidlc-docs/inception/application-design/services.md
- component-dependency.md: aidlc-docs/inception/application-design/component-dependency.md
- application-design.md: aidlc-docs/inception/application-design/application-design.md
- application-scope-change-questions.md: aidlc-docs/inception/plans/application-scope-change-questions.md

## My request:
回答完了、次に進んでください

**回答ファイル原文**: [Answer]: A
**AI Response**: 回答と現在の進捗を確認し、ワークフローの次のステージへ進めます。質問1の回答Aを確認しました。問い合わせはアプリ内で患者本人が返信を閲覧できる形とし、承認された追加要件・ストーリーを反映します。そのうえで、単一バックエンド構成の設計資料を作成し、設計レビューへ進めます。
**Action**: セッション継続規則と先行成果物を確認。IDEのタブにある設計承認ファイル・設計資料は実ファイルとして存在せず、既存状態と回答済み変更案から再開。5設計資料と承認質問を生成、要件・ストーリー差分、計画チェック、進捗を更新。監査ログは追記のみ。
**AI Prompt**: アプリケーション設計資料を作成しました。application-design-approval-questions.mdの質問1に回答してください。設計承認後は作業単位生成へ進みます。
**Context**: application-design.md手順10〜15により、変更案承認と新規設計成果物の承認を区別。新規設計への明示承認前に次段階へ進まない。RESILIENCY-01・02・03・11は論理設計で適合、その他は具体構築前でN/A。PBT必須02・03・07・08・09は実装前でN/A、その他助言。無効セキュリティ拡張は適用省略。Markdown・ID一意性・相対リンク・対応表を検証。図はテキスト、コードテスト対象なし。
---

## アプリケーション設計・レビューBの反映
**Timestamp**: 2026-10-30T04:21:22Z
**User Input**:
# Context from my IDE setup:

## Active file: aidlc-docs/inception/plans/application-design-approval-questions.md

## Open tabs:
- application-design-approval-questions.md: aidlc-docs/inception/plans/application-design-approval-questions.md
- stories.md: aidlc-docs/inception/user-stories/stories.md
- execution-plan.md: aidlc-docs/inception/plans/execution-plan.md
- workflow-planning-questions.md: aidlc-docs/inception/plans/workflow-planning-questions.md
- application-design-plan.md: aidlc-docs/inception/plans/application-design-plan.md

## My request:
アプリケーション設計承認ファイルにて変更の指示を行いました。確認をお願いします

**回答ファイル原文（変更前の全文）**:
# アプリケーション設計の承認

5設計資料を確認してください。今回の追加変更は承認済みですが、設計成果物全体の承認は別に受領します。

## 質問1：設計レビューの結果

A) 設計を承認し、作業単位生成へ進む。

B) 設計の変更を依頼する。対象と変更内容を追記する。

X) その他（進め方や確認事項を具体的に記入）。

[Answer]: B

承認待ちのアプリケーション設計資料について、以下のレビュー結果を反映してください。

【対象ファイル】
aidlc-docs/inception/application-design/ 配下の以下5資料。

- components.md
- component-methods.md
- services.md
- component-dependency.md
- application-design.md

【修正の進め方】
詳細4資料を修正して相互の整合を確認し、その結果をapplication-design.mdへ反映する。
今回の修正指示は設計修正の実行を許可するものであり、修正後の設計成果物全体を承認するものではない。

【維持する前提】

- 承認済み要件・全27ストーリー。
- 単一バックエンド内の責務別モジュール構成と共通永続保存。
- CSV追加保留。
- 研究画面・製薬会社向け許可集計を初期版の実装対象とすること。
- 研究条件・同意文面等の承認前は、実データ研究・製薬会社提供を無効とすること。
- 評価1〜10、最新値置換、0回答は算出不能。
- 製薬会社向けは期間別の利用件数・完了件数・整理実感スコアのみ。
- 対象10人未満、または差分から推定可能な集計の抑制。
- 可用性99.5%、RTO・RPO各10分、Pilot Lightと既存変更管理方針。
- 言語・製品・物理構成・詳細UI等の後続選定方針。

要件・ストーリーの変更が必要な場合は無断で変更せず、差分と理由を提示する。

【共通の設計方針】

1. 判定責務を分ける

- C03：認証、アカウント利用状態、役割に基づく認可。
- C04：同意・撤回の正本と同意条件の判定。
- 各データ所有モジュール：所有者・業務状態に基づく制約。
- C12：対象ページ・関連APIの公開制御。
- C14：研究条件の承認状態、許可範囲、研究・提供条件の判定。
- アプリケーションサービス：操作に必要な判定の組合せと処理調整。

共通認可機構の利用は妨げないが、C03に全業務判定や全モジュールの直接読取を集中させない。
サービスの事前判定だけで、各モジュールの制約維持を代替しない。
必要な判定情報を確認できない操作では、条件を充足済みと扱わない。

2. 認証・所有者確認・内容確認を区別する
   整理内容についての「本人確認」は、文脈に応じて「患者本人による内容確認」等へ変更する。
   認証や所有者確認を意味する箇所は一括置換しない。

3. データと保存実装の責任を分ける
   各業務モジュールが自身のデータと業務制約を管理する。
   他モジュールの情報は、その所有モジュールが許可する公開契約・参照契約を通じて利用する。
   C15は保存実装を担う。
   Repository・テーブルの直接利用による業務制約の迂回を認めない。
   共有DBや管理されたProjection参照を一律禁止しない。

4. 未確定事項を先取りしない
   具体的な状態遷移、同期・非同期方式、HTTPパス、DBスキーマ、言語・製品、配備方式は確定しない。
   既存の適切な記載を活用し、資料間の過剰な重複を避ける。

【components.md】

- 共通方針に沿ってC03・C04・各所有モジュール・C12・C14の判定責務を整理する。
- C04は同意と撤回、C14は研究条件の承認状態と許可範囲を管理する。C14に独立した同意の正本を持たせない。
- C05が整理内容、候補の採用、患者による内容確認、確認済み版を管理することを明示する。
- C06は未確認のAI案を返し、整理内容を直接確定しない。
- C07はC05の確認済み版に対応するスナップショットからPDFを生成する。
- 確認済み版を固定して履歴を保持する設計は許容するが、患者による後からの内容修正を禁止しない。
- C09は削除の進行・結果・失敗・再試行・完了を調整・追跡し、各所有モジュールが自身のデータを処理する。
- 同意撤回と削除を区別する。遅延したAI結果や派生データで削除済みデータを復活させない原則を示す。
- C12は対象画面と関連APIへ適用する。公開停止、アカウント停止、同意による制限を区別する。
- 運営の解除経路を通常の停止対象から分離し、認証・権限確認を必須とする。
- C12自体の障害時の復旧可能性は後続設計への要求として示す。具体的な復旧手段は確定しない。
- AI・PDFの処理失敗を、下書き保存や保存済み閲覧へ不要に波及させない方針を示す。単一バックエンドで全障害を完全分離できるとは保証しない。
- C16の監査・操作記録と稼働観測を論理的に区別する。別配備は要求しない。
- 研究閲覧・製薬会社向け提供はC14の条件確認を必須とし、C08の内部集計とは区別する。

【component-methods.md】

- C03のauthorizeを責務に合わせて限定する。ResourceRefを受け取ることは、全モジュールの直接読取を意味しない。
- C04のgetEligibilityは同意に関する適格性を返し、研究利用全体の許可とは区別する。
- ConfirmedInput・ConfirmedResultの確認対象と保証内容を明確にする。
- 確認済み版を一意に参照できる契約にする。新しい識別子の追加自体は必須にしない。
- C05に、PDF用の確認済み内容と、評価用の所有者・完了状態等を取得できる公開契約を補う。評価に不要な整理本文は渡さない。
- C05・C08等からC14へ研究・集計用情報を提供する参照契約を補う。具体的な項目は後続で定義する。
- C06の未確認案を、C05が入力版に対応付けて管理する責任を示す。
- AI処理の受付、生成完了、保存完了を区別する。GenerationResult等の意味と保証を説明し、同期・非同期や返却形式を先取りしない。
- ConfirmedSnapshotRefの参照先と保証内容を明確にする。参照の所持だけで認可・内容確認済みとみなさない。
- AuthorizedPeriod等の生成・検証責務、保証内容、呼出主体を示す。C08の集計結果は研究・外部提供の許可を代替しない。
- C09の削除要求と進行・結果を対応付ける契約を補う。独立照会APIや非同期ジョブは必須にしない。
- C14の研究条件について、正本、取得・反映経路、利用主体を示す。登録・更新メソッド一式、専用画面、新たな承認権限は必須にしない。
- C14による提供条件確認・抑制が迂回不能である契約にする。内部委譲は許容する。
- ApprovedTask・ApprovedQuery・AuthorizedScope等の型名だけを承認・認可根拠にしない。
- Contextを持たない内部契約の呼出主体と信頼境界を示す。全メソッドへのContext追加は要求しない。
- 登録・ログインは認証済みContext確立前の契約として区別する。新しい匿名API・公開画面は追加しない。
- C16のrecord／observe、C13の返信下書き・確定、C11の公開状態確認は既存記載を活用する。

【services.md】

- 共通の判定分担と、操作に必要な判定だけを組み合わせる方針を示す。
- 登録・ログインと認証後の業務操作を区別し、「全サービスでContextを確立」という表現を調整する。
- 患者整理では、入力版に対応した未確認案、保存結果、患者による内容確認、確認済み版を区別する。一回の同期処理として固定しない。
- 通常再開と、戻って入力を修正する操作を区別する。
- 戻る取消時は再生成しない。承諾後に入力を修正した場合は、FR-08・US-11に従って関連生成結果を再作成し、患者本人が再確認する。再生成を省略できる新条件は追加しない。
- PDF取得ではC05の許可された契約を通じ、所有者・確認状態・版の対応を満たす内容を利用する。サービスが取得する方式とC07が取得する方式のどちらかに固定しない。
- 評価の調整先にC05を加え、所有者・完了状態等を確認する。評価制約と最新値置換はC08が維持する。
- 削除・退会では、サービスがユースケース全体、C09が削除の調整・追跡、各所有モジュールがデータ処理を担う。
- C10の研究者権限設定と、C14の研究条件の承認状態・許可範囲の反映を区別する。運営の新しい承認権限を導かない。
- 研究閲覧ではC03・C04・C14と許可された参照元の役割を示し、検索・個別取得の双方で制約を維持する。
- 提供集計ではC14の条件確認・抑制を必須にし、運営確認やC08の集計結果だけで提供を許可しない。
- 利用件数・完了件数・評価値のすべてをC08から取得する構成に固定しない。
- C15は所有モジュール経由の保存依存を示し、サービスによる他モジュール保存領域の直接操作ではないと注記する。
- AI失敗時の入力保持、PDFとAIの分離、解除経路の分離、返信下書きの非開示という既存方針を維持する。

【component-dependency.md】

- 共通行と個別行を合わせて依存表を読むことを明示する。未記載の横断参照を無条件に許可しない。
- 呼出元が画面・サービス・モジュールのどれかを明確にする。
- 直接呼出し、サービスを介した論理依存、削除・撤回等の変更反映経路を区別する。
- C01・C02から認証入口・業務API・サービスへの経路を整理する。どの経路でも必要な条件を迂回させない。
- サービスから対応する業務モジュールへの関係を示す。個別対応はservices.mdを参照して重複を抑えてよい。
- C05→C06は内部呼出し、C06→外部AIは外部I/Oとして示す。
- PDFはC05の許可された契約を通じた取得を示す。C07→C15をC05保存領域の直接読取と解釈させない。
- PDF成果物の保存依存は保存する場合のみとし、新たな必須保存要件にしない。
- 評価サービス→C05の状態確認と、C08での評価制約維持を示す。C08→C05の直接依存は必須にしない。
- C09から削除対象を所有する各モジュールへの経路を示す。既存の列挙を対象の全件とみなさない。
- アカウント情報の所有主体は、C03・C10が操作を扱うことだけから断定しない。論理責務を確認し、判断できない場合は未解決事項として報告する。
- C07・C14等が成果物・派生データを保持する場合は、削除・撤回反映の責任と経路を示す。保存・通知方式は固定しない。
- C14の同意参照と研究条件の参照を区別する。
- 許可3指標の情報源と所有元を追跡可能にする。C05・C08だけで全情報を提供すると決めつけない。
- 研究者へ返す時点では識別情報除去・範囲制限が適用済みとする。検索条件・件数・付随情報も含め、別経路からの制約迂回を防ぐ。
- 通常再開、戻る取消、承諾後の修正・再生成・再確認をデータフロー上で区別する。

【application-design.md】

詳細4資料の修正後に、以下を反映する。

- 「設計判断」「統合した構成」に、判定責務の分担とサービスによる調整を要約する。
- 詳細定義は各資料を正本とする既存方針を維持する。メソッド表や依存表を重複掲載しない。
- 「要件・ストーリー対応」は、担当責務の変更に合わせて点検・更新する。主要担当と共通依存を区別し、全担当を網羅する表なのか主要担当の表なのかを明示する。
- 認証・所有者確認・患者による内容確認の用語を整合させる。
- AI案・確認済み版、受付・生成・保存、削除受付・完了等の区別を要約する。
- 通常再開と戻る修正を区別し、取消時は再生成せず、承諾後の入力修正では関連結果の再作成・再確認を行う既存条件を維持する。
- C04の同意とC14の研究条件、C08の内部集計とC14の提供判定を区別する。
- データ所有、許可された参照、削除・撤回反映、障害の不要な波及防止を要約する。
- データフローの件数等、詳細資料の変更で古くなる記述を更新する。
- 「後続で具体化する事項」を整理し、決定済み条件と未確定事項を区別する。
- 拡張適合は修正後の資料を根拠に再評価する。論理設計での適合、後続での検証、N/Aを区別し、実装・復旧目標の達成を検証済みとは記載しない。

【後続へ引き継ぐ事項】

内容に応じて、機能設計・非機能要件・非機能設計・インフラ設計・コード生成へ割り当てる。

- 詳細な判定順序、拒否理由、状態遷移。
- 内容確認、版管理、再確認・再生成対象の具体条件。
- AIの同期／非同期、受付・完了・失敗・再開方式。
- 削除期限、保持期間、部分失敗・再試行、派生データ・バックアップへの対応。
- 研究承認手続き、撤回反映、Projection項目、集計期間・人数の数え方、差分推定抑制。
- 判定不能時の応答・再試行・キャッシュ、資源制限、記録障害時の操作別継続条件。
- C12自体の障害に対する運用・インフラ上の復旧方式。
- 具体的な型、HTTPパス、Repository、トランザクション、配備・観測方式。

承認済み条件を未決定へ戻さず、その例外を後続設計だけで追加しない。

【検証・完了報告】

- 指定ワークフローの関連規則と有効な拡張設定を確認する。
- 内容を検証してからファイルを編集する。
- 要件・27ストーリーとの対応、責務、公開契約、サービス調整、依存経路、用語、リンク、Markdownを点検する。
- 必要な計画チェック・進捗を更新し、監査ログは追記する。
- 5資料それぞれの変更点、整合確認結果、未解決事項、後続への引継ぎ、拡張適合を報告する。
- 修正後は5資料全体の再レビュー・再承認待ちとする。
- 設計承認済みにはせず、作業単位生成・実装へ進まない。

## 実行チェック

- [x] 承認済み変更と設計成果物を反映
- [x] 要件・ストーリー対応、権限境界、拡張適合、Markdownを検証
- [ ] 設計成果物の明示承認を受領
- [ ] 承認後に作業単位生成を開始


**AI Response**: 承認ファイルの変更指示と現在の設計・進行状況を確認し、必要な修正を反映します。回答Bと5資料への修正指示を確認しました。判定責務、データ参照契約、削除・撤回の経路を中心に整合させ、修正後も設計全体は再承認待ちとして扱います。既存資料ではC03への判定集中、C04とC14の責務混在、評価・PDF向け参照契約の不足を確認しました。アカウント情報の所有主体と利用件数の情報源は根拠不足のため後続確認事項としました。
**Action**: 詳細4資料を修正後に統合資料を更新。計画チェックと進捗更新、質問1の原文を保持して再承認質問2を追加。監査は追記のみ。要件・ストーリー本文は変更なし。修正内容は書込前にMarkdown構造・相対リンク・特殊文字を点検。
**AI Prompt**: 修正後5資料を再レビューし、application-design-approval-questions.mdの質問2へ回答してください。
**Context**: 共通規則・application-design.md手順13に従う再承認待ち。RESILIENCY-01・02・03・11は論理設計／目標引継ぎ適合、04〜10・12〜15は具体構築・試験前でN/A。PBT必須02・03・07・08・09は実装前でN/A、その他助言。無効なセキュリティ拡張は読込・適用を省略。実装・復旧目標達成の検証はしていない。次段階は未開始。

---
## アプリケーション設計再承認・作業単位生成計画
**Timestamp**: 2026-10-30T05:21:52Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/inception/plans/application-design-approval-questions.md

## Open tabs:
- application-design-approval-questions.md: aidlc-docs/inception/plans/application-design-approval-questions.md
- application-design.md: aidlc-docs/inception/application-design/application-design.md
- stories.md: aidlc-docs/inception/user-stories/stories.md
- execution-plan.md: aidlc-docs/inception/plans/execution-plan.md
- workflow-planning-questions.md: aidlc-docs/inception/plans/workflow-planning-questions.md

## My request:
アプリケーション設計、再レビュー確認完了しました。次に進んでください"
**AI Response**: "アプリケーション設計の承認として受け取りました。現在の進行状態とルールを確認し、次のステージへ進めます。再承認の回答Aを確認しました。次は作業単位生成の計画を作成します。単一バックエンドの構成を維持するため、規則にある「モノリスは1作業単位」と、実行計画の基盤・患者・運営・研究という論理分割を整理して提示します。"
**Action**: 共通規則・継続規則・作業単位生成規則と拡張opt-in・有効拡張、先行成果物を確認。設計承認チェックを更新し、unit-of-work-plan.mdに粒度・担当体制の2問と必須3成果物の生成・検証手順を作成。内容は書込前にMarkdown・タグ・空行・パスを検証。監査ログは追記のみ。
**AI Prompt**: "作業単位生成の計画を作成しました。unit-of-work-plan.mdの質問1・2の[Answer]:に回答し、完了したらお知らせください。回答確認後、生成計画の承認へ進みます。"
**Context**: 設計は承認済み、Units Generation Part 1は質問回答待ち。units-generation.mdのStep 6・9により全回答と計画承認後に生成する。RESILIENCY-01・02・03・11は計画／引継ぎ適合、04〜10・12〜15は構築・設定・試験前でN/A。PBT必須02・03・07・08・09は実装前でN/A、その他助言。無効なセキュリティ拡張は読込・適用を省略。単位成果物とコードは未生成。

---
## 作業単位生成計画・回答確認
**Timestamp**: 2026-10-30T05:35:59Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/inception/plans/unit-of-work-plan.md

## Open tabs:
- unit-of-work-plan.md: aidlc-docs/inception/plans/unit-of-work-plan.md
- application-design-approval-questions.md: aidlc-docs/inception/plans/application-design-approval-questions.md
- application-design.md: aidlc-docs/inception/application-design/application-design.md
- stories.md: aidlc-docs/inception/user-stories/stories.md
- execution-plan.md: aidlc-docs/inception/plans/execution-plan.md

## My request:
作業単位生成計画についての質問に回答完了しました。次に進んでください"
**AI Response**: "作業単位生成計画の回答を確認し、矛盾や曖昧さがなければ計画承認の手続きへ進めます。質問1A・2Aを確認しました。全体1作業単位・4論理領域・共通担当体制を計画へ反映し、計画承認質問を作成しました。"
**AI Prompt**: "unit-of-work-approval-questions.mdの質問1へ回答してください。"
**Context**: units-generation.md Step 7で回答の矛盾・曖昧さなしを確認、Step 9の計画承認待ち。質問回答完了と計画全体の承認は区別。計画チェック・進捗を更新し、Markdown・空行・選択肢・回答タグを事前検証。監査は追記のみ。RESILIENCY-01・02・03・11は計画と引継ぎ適合、04〜10・12〜15は構築・設定・試験前につきN/A。PBT必須02・03・07・08・09は実装前でN/A、その他助言。セキュリティ拡張は無効につき読込・適用省略。単位3成果物・コードは未生成。

---
## 作業単位生成・計画承認と生成
**Timestamp**: 2026-10-30T05:41:41Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/inception/plans/unit-of-work-approval-questions.md

## Open tabs:
- unit-of-work-approval-questions.md: aidlc-docs/inception/plans/unit-of-work-approval-questions.md
- unit-of-work-plan.md: aidlc-docs/inception/plans/unit-of-work-plan.md
- application-design-approval-questions.md: aidlc-docs/inception/plans/application-design-approval-questions.md
- application-design.md: aidlc-docs/inception/application-design/application-design.md
- stories.md: aidlc-docs/inception/user-stories/stories.md

## My request:
回答完了しました。次に進んでください。"
**AI Response**: "計画の承認回答を確認し、承認済みの内容に沿って作業単位・依存関係・ストーリー対応の3資料を作成します。承認回答Aを確認しました。全体を1作業単位とし、内部の4領域と全27ストーリーを対応付けます。アカウント情報の所有元、利用件数の定義、研究承認根拠の反映経路は、機能設計で確認する事項として引き継ぎます。"
**Action**: 計画承認質問1Aを記録、Part 1完了。承認済み計画を順に実行し必須3資料を生成、各ステップ完了後に計画チェックを更新。書込前に表・Markdown・IDと27ストーリーの一意網羅を検証。U01・G1〜G4・C01〜16・全FR/NFRの対応を確認。計画・進捗・監査を更新、質問1の回答を保持し成果物承認質問2を追記。アプリコードと先行要件・ストーリーは変更なし。
**AI Prompt**: "作業単位生成の3資料を作成しました。unit-of-work-approval-questions.mdの質問2へ回答してください。承認後はU01全体の機能設計へ進みます。"
**Context**: units-generation.md Step 17の成果物承認待ち。RESILIENCY-01は重要度・停止影響・依存対応で適合、02・03・11は目標・変更管理・Pilot Light引継ぎ適合。04〜10・12〜15は設定・構築・試験前でN/A。PBT必須02・03・07・08・09はコード・テスト・CIなしでN/A、その他助言。無効セキュリティ拡張は適用省略。図なし、コードテスト・復旧達成実測は未実施。Constructionへは未移行。

---
## 作業単位成果物承認・機能設計開始
**Timestamp**: 2026-10-30T06:20:50Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/inception/plans/unit-of-work-approval-questions.md

## Open tabs:
- unit-of-work-approval-questions.md: aidlc-docs/inception/plans/unit-of-work-approval-questions.md
- unit-of-work-story-map.md: aidlc-docs/inception/application-design/unit-of-work-story-map.md
- unit-of-work-dependency.md: aidlc-docs/inception/application-design/unit-of-work-dependency.md
- unit-of-work.md: aidlc-docs/inception/application-design/unit-of-work.md
- unit-of-work-plan.md: aidlc-docs/inception/plans/unit-of-work-plan.md

## My request:
承認質問２に回答完了しました。次に進んでください"
**AI Response**: "承認質問2の回答を確認し、作業単位生成の承認を記録して、U01全体の機能設計へ進みます。承認質問2の回答Aを確認しました。機能設計の計画と確認事項を作成します。先ほどの同意撤回に関する3点も、調整役・途中失敗・反映前の利用防止を決める設計項目に含めます。"
**Action**: 作業単位生成を承認完了。機能設計規則を読み、単位・ストーリー対応・先行設計を確認。8観点を評価し12問と4成果物・性質分析・追跡検証の計画を作成。図なし、Markdown・回答タグ数を事前検証。計画チェック・進捗更新、監査追記。
**AI Prompt**: "機能設計計画の質問1〜12の[Answer]:へ回答してください。Aは具体案の作成を任せる選択であり、詳細は設計レビューで確認します。"
**Context**: functional-design.md Step 5により回答分析・曖昧さ解消後に4設計成果物を生成。撤回について先の会話で説明した案は承認済みとは扱わない。RESILIENCY-01・02・03・11は計画・引継ぎ適合、04〜10・12〜15は設定・実測前でN/A。PBT必須02・03・07・08・09は未実装でN/A、その他助言。無効セキュリティ拡張適用省略。実装・機能設計完了を宣言していない。

---
## U01機能設計・回答受領
**Timestamp**: 2026-10-30T23:50:04Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-functional-design-plan.md

## Open tabs:
- patient-support-app-functional-design-plan.md: aidlc-docs/construction/plans/patient-support-app-functional-design-plan.md
- unit-of-work-approval-questions.md: aidlc-docs/inception/plans/unit-of-work-approval-questions.md
- unit-of-work-story-map.md: aidlc-docs/inception/application-design/unit-of-work-story-map.md
- unit-of-work-dependency.md: aidlc-docs/inception/application-design/unit-of-work-dependency.md
- unit-of-work.md: aidlc-docs/inception/application-design/unit-of-work.md

## My request:
回答完了しました。次に進んでください"
**AI Response**: "機能設計計画の回答を読み、矛盾や追加確認が必要な点を確認します。回答が揃っていれば、U01全体の4つの機能設計資料を作成します。Playwright MCPを後続で導入する方針も引き継ぎます。12問ともAを基本とする回答で、設計を妨げる矛盾はありません。追加指定の「複数端末で保存済み内容から再開」「リアルタイム同時編集は不要」を反映します。質問12の追加項目は、画面遷移・入力検証・レスポンシブなど既存の範囲と重なる部分を統合し、成功状態・初期／空状態・操作確認も明示します。これから具体案を作成し、細かなルールや数値は設計レビューで確認いただく形にします。"
**Context**: 全12回答を確認、質問6の明確なA意思と追加指示を原文保持で解釈。質問11A・公開制御維持、質問12A・重複点検を記録。規則・拡張設定・先行成果物を読込。設計生成開始、段階承認は未受領。

---
## U01機能設計・生成とレビュー案内
**Timestamp**: 2026-10-30T23:55:10Z
**AI Response**: "データモデルと業務フローの案を作成しました。同意撤回は、反映処理の完了を待たずに新しい研究利用を止め、途中失敗しても撤回状態を維持する設計です。複数端末の再開では、保存済みの内容と端末内の未送信入力を区別し、競合時の自動上書きを避けます。続いて、業務ルールと画面設計を具体化します。生成回数・削除期限・研究閲覧項目などの新しい提案は、レビュー時に分かるよう明示します。4資料が揃い、全27ストーリー・16機能要件との対応、表の構造、相対リンクを確認しています。生成上限、削除・保持期限、研究閲覧項目、集計期間は「今回の提案」として一覧にしました。画面設計には、初期・空・成功・失敗・競合時の表示も含めています。Playwrightによる実画面確認と修正は、後続のコード生成で行う手順として記録します。"
**Action**: 4資料を承認済み計画順に作成し各作成直後にチェック更新。質問6の複数端末、質問11の既存権限制御、質問12の重複統合を反映。C03アカウント所有・C05利用記録、撤回追跡と開示確定順序、AI・版・評価・削除・研究抑制・公開・問い合わせ・画面状態を具体案にした。生成上限・保持期限・研究項目等をD01〜08で明示。Playwright導入とUI反復レビューを実行計画にも補足。文書検証で27US・16FR・8NFRの参照、表列数と相対リンクを確認。初回のID自動検査はNFR-04・05等の省略表記を検出できなかったため、NFR-04・NFR-05のように明示して再検査を通過。コード・実画面・復旧試験は未実施。
**AI Prompt**: "4設計資料を確認し、patient-support-app-functional-design-approval-questions.mdの質問1でRequest ChangesまたはContinue to Next Stageを選択してください。"
**Context**: functional-design.md Step 7・8の成果物承認待ち。RESILIENCY-01・02・03は論理設計／引継ぎ適合、10は業務縮退方針を定義し具体設定は後続、11はPilot Light引継ぎ適合で手順・実現性は後続。04〜09・12〜15の具体構成／設定／実測はN/A。PBT-01等の助言で性質を分析、必須02・03のテスト実装と07・08・09の基盤・生成器・縮小・seed・CIは未実装でN/A。セキュリティ拡張は無効で適用省略、元要件は維持。実運用の同意・研究承認を本設計承認と混同しない。次段階は非機能要件、未開始。

---
## U01機能設計・レビューB受領
**Timestamp**: 2026-10-31T08:29:14Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md

## Open tabs:
- patient-support-app-functional-design-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md
- frontend-components.md: aidlc-docs/construction/patient-support-app/functional-design/frontend-components.md
- business-rules.md: aidlc-docs/construction/patient-support-app/functional-design/business-rules.md
- business-logic-model.md: aidlc-docs/construction/patient-support-app/functional-design/business-logic-model.md
- unit-of-work.md: aidlc-docs/inception/application-design/unit-of-work.md

## My request:
承認対象４資料を確認し、C:\Users\khr85\Documents\ai-dlc-v1-test\aidlc-docs\construction\plans\patient-support-app-functional-design-approval-questions.md　に回答完了しました。次に進んでください"
**User File Input（原文全体）**:
# U01 機能設計成果物の承認

## 質問1：4つの機能設計資料のレビュー

patient-support-app/functional-design配下のdomain-entities.md、business-logic-model.md、business-rules.md、frontend-components.mdを確認してください。構築・言語選定・実装・Playwright導入は未実施です。

特にbusiness-rules.md冒頭のD01〜08を確認してください。AI上限5回／支援実行・30回／セッション、削除7日・バックアップ含む35日・最小追跡記録180日、固定月次集計と最小研究項目、完了条件、問い合わせ追加機能を含めない案、入力上限は今回の具体的提案です。40歳到達後の自動退会なし、PDF超過時の複数ページ、同意撤回と開示の確定順序、画面構成・状態も設計本文の提案として確認してください。

複数端末でのサーバー保存済み内容からの再開、未送信入力の端末内保持、リアルタイム共同編集不要を反映しました。質問12の重複は統合し、操作確認・成功・初期／空状態・レスポンシブ・アクセシビリティを明記しました。

本承認は4資料の設計承認です。研究の実データ利用・提供、未成年同意確認の実運用、医学情報記事の公開は、それぞれ未確定の外部条件・担当体制が承認されるまで有効にしません。設計上の期限や数値は非機能・インフラ設計で実現性を確認し、変更が必要なら再承認します。

機能設計の完了時は規定の2選択肢を使います。

A) Continue to Next Stage：4設計資料を承認し、U01の非機能要件へ進む。

B) Request Changes：修正を依頼する。対象ファイル・節と希望する内容を追記してください。

[Answer]: B

以下5項目について、作成者の見解に沿って`domain-entities.md`を補足してください。

既存の設計方針を維持し、次の5点について、不足する定義と参照関係を補足してください。

修正前に `domain-entities.md`、`business-logic-model.md`、`business-rules.md` を照合し、既に十分定義されている内容は重複して追記しないでください。既存記述を正本として参照し、説明の不足や不整合がある箇所だけを修正してください。

1. **SupportSessionとModuleRunの完了条件**
   - 支援の選択状況と実行状態を区別し、「未選択」と「選択済みだが未完了」をモデル上で判別できるようにする。
   - `business-logic-model.md` の既存完了条件を参照し、SupportSessionの完了判定に必要な属性・状態・不変条件を明確にする。
   - 未選択の支援は完了判定の対象外とし、5支援すべての実施を要求しない。
   - 同じ支援に複数のModuleRunがある場合、どの実行を現在の完了判定に用いるかを明確にする。
2. **Revisionの適用範囲と更新の原子性**
   - SupportSessionのRevisionをセッション集約の更新競合・整合性を管理する版として定義し、その更新対象を明示する。InputRevisionやConfirmedSnapshotの内容を参照するための版とは区別する。
   - 確認済み結果の保存では、ConfirmedSnapshotの保存、ModuleRunの状態変更、必要なSupportSessionの状態・Revision更新を、一括して確定する業務操作として定義する。
   - この操作は、すべて反映するか、いずれも反映しないものとし、不整合な途中状態を読取結果や画面に公開しない。
   - 保存結果不明時の同一RequestKeyによる確認・再送は既存規則を参照し、この業務操作にも適用されることを明確にする。
   - 原子性を保証する業務境界は機能設計で定義し、具体的なDBトランザクション方式は後続設計に委ねる。
3. **入力変更時の依存関係と失効範囲**
   - GeneratedProposalとConfirmedSnapshotについて、実際に使用した入力・確認済み結果の識別子と版を追跡できるようにする。
   - 既存の「依存を辿って影響範囲を求め、無関係な支援は維持する」方針に沿い、直接依存と間接依存の判定方法を補足する。
   - 参照関係を特定できない場合は、影響なしと判断せず、失効範囲を保守的に扱う。
   - 過去版の履歴保持と、現在有効な結果としての利用可否を区別する。既存の再生成・再確認およびPDF・研究提供の利用制限と整合させる。
4. **同意撤回・退会と処理中データの競合**
   - 同意撤回と研究データ開示の順序保証は、`business-logic-model.md` の既存定義を参照し、関連エンティティの状態・版との対応を補足する。
   - 退会受付確定と、研究データの開示確定・AI生成結果の保存／適用確定との順序保証を明確にする。
   - 撤回または退会によって対象者が利用不可となった場合は、対象データを新たに開示せず、集計は対象者を除いて再計算し、抑制条件を再判定する。再計算しただけで再開示可能とは扱わない。
   - 退会受付確定後に届いたAI生成結果は、患者整理への保存・適用を拒否し、一時データも削除対象として扱う。
   - 状態確認と確定操作の間の競合を防止し、必要な状態・版を確認できない場合は開示・保存・適用を拒否する。
   - 既に開示確定した情報の扱いは、既存の研究条件・撤回方針に従う。
5. **DeletionRequestとAccount削除後の追跡情報**
   - DeletionRequestはAccountの消去に連動して消さず、独立した要求IDで未完了処理・再試行・完了を追跡できるようにする。
   - 認証資格・新規利用の無効化、本人情報の消去、削除処理に必要な最小追跡情報の保持を区別する。
   - 対象を保持する各所有元について、削除対象、必要最小限の参照・記録、保持目的・期限、閲覧権限、完了条件を整理する。C03・C04・C05・C06・C07・C08・C09・C13・C14・C16など、対象データを持つ所有元の漏れを確認する。
   - 本人と対象データの対応付けは、処理・復元後の再反映に必要な期間だけ保持し、不要になった時点で除去する。不透明なIDだけを理由に匿名情報とは扱わない。
   - 研究Projection・複製・中間データを削除対象として追跡する。保存済み集計は既存規則に従って再計算・提供可否を再判定する。
   - C16の操作記録を一律に削除対象外としない。残す記録と削除する本人情報を区別する。
   - Accountの「削除済み」、関連データの削除完了、バックアップへの対応完了、追跡記録の保持終了がそれぞれ何を意味するかを明確にする。
   - 既存の期限案を独自に変更せず、完了条件や追跡情報の保持と両立しない場合は、その不整合を報告する。

**修正時の共通条件**

- 今回は機能設計の補足とし、言語・DB製品・具体的な実装方式は決定しない。
- 新しい機能・要件・保持例外を独自に追加しない。
- 属性、状態遷移、集約境界、不変条件の適切な箇所へ必要最小限の修正を行う。
- 他の設計書で十分に定義されている内容は、参照先と適用関係の明確化にとどめる。
- 修正に伴って他の設計資料に不整合が生じる場合は、関連箇所も整合させる。
- 修正後、各項目について「修正箇所」「追記・変更内容」「既存記述で十分なため変更しなかった内容」「残る未確定事項」を簡潔に報告する。

U01 業務ルール：修正指示（最終案）
既存の設計方針を維持し、business-rules.md、business-logic-model.md、domain-entities.md、frontend-components.mdを照合したうえで、以下を修正してください。既に定義されている内容は重複して追記せず、不足・不整合がある箇所のみ補足・置換してください。

変更対象はbusiness-rules.md

優先度A：必須修正

1. AI再生成と手入力の関係（BR-03・04）

- 入力変更後に必要な「影響対象の内容の作り直し・本人再確認」と、その作成手段である「AI再生成」を区別してください。変更前の結果をそのまま再確認するだけで、有効な結果へ戻さないでください。
- 業務フローに既存の手入力経路を参照し、現在の入力・有効な参照元に対応した内容を本人が作成・確認・保存できる場合は、同じセッションで継続・完了できる案として整理してください。AI上限到達によって、手入力まで一律に禁止しないでください。
- 手入力でも、必要項目・参照版・依存先の再確認・完了資格を満たすことを条件としてください。参照していた結果を省略する場合は、その参照を解消し、影響する内容を作り直して再確認するまで完了不可としてください。
- BR-03の「必須再生成を上限で免除しない」と、業務フローの「枠不足なら確認済みへ進めない」は、この案との調整対象として明示してください。AI再生成自体を必須とする範囲が既存の確定要件にある場合は維持し、変更には別途承認が必要としてください。
- 上限値は変更せず、新規セッション作成を上限回避策として案内しない既存方針を維持してください。

2. セッション完了・再編集の整合性（BR-04・05）

- 初回完了の履歴、現在の作業状態、各結果の現在の有効性を区別してください。初回完了記録があっても、現在の結果すべてが有効とは扱わないでください。
- 業務フローの既存完了条件を参照し、未選択の支援は完了を妨げず、選択済みの判定対象実行が未実施・編集中・生成中・確認待ち・再確認必要の場合は完了不可としてください。明示省略は完了を妨げませんが、少なくとも1件の有効な確認済み結果を必要としてください。
- 同じ支援に複数のModuleRunがある場合は、ドメインで定義する現在の判定対象を使用し、過去の確認済み実行で現在の未完了を代替しないでください。
- 完了後の変更保存を再編集中への遷移契機とし、画面上の未保存編集と区別してください。初回完了時点と件数は変更しないでください。
- 再編集中の新規評価・更新は保留し、既存評価は保持する既存方針を維持してください。PDFと研究利用は、再編集中という状態だけで一律に決めず、対象版の有効性と各操作の許可条件で判定してください。具体的な操作可否・遷移は業務フローを正本としてください。

3. 削除期限と追跡記録（BR-07）

- 削除受付確定による利用禁止、本体・派生物等の削除、バックアップ失効・消去、削除要求の完了、追跡記録の保持終了を区別してください。Account削除だけで全体完了と扱わないでください。
- 7日・35日の起算点は削除受付確定、一時PDFの24時間は生成時点、要求追跡の180日は要求の処理完了、操作追跡の180日は操作時点という既存案を維持し、対象ごとに対応付けてください。再試行・復元で起算点を更新しないでください。
- 本体側の削除完了は、対象範囲のProjection・複製・中間データ・失敗一時物を含む各所有元の処理結果を確認して判定してください。利用禁止や論理削除だけを物理削除完了と表示しないでください。
- バックアップの期限到来だけを完全完了の根拠にせず、対象データの残存・復元可能性について、採用する方式に応じた消去確認が必要としてください。既存の「物理消去を確認するまで完全完了にしない」を緩和しないでください。
- 削除再反映に必要な最小追跡情報は、対象を含むバックアップの対応完了まで保持してください。本人対応付けは再反映に必要な期間と目的を満たした後に除去し、不透明IDだけで匿名とは扱わないでください。
- 未完了を理由に追跡情報を無期限保持できる解釈を避け、期限超過・保持延長の必要性は未解決事項として記録し、見直し承認の対象としてください。既存期限案は変更しないでください。

4. 同意撤回と研究開示（BR-06・07）

- 撤回による新規開示禁止の判定境界は、送信開始・受信ではなく「特定要求・特定結果に対する開示許可確定」とする案を明記してください。撤回確定より後の新しい開示許可確定は拒否してください。
- 撤回前に許可確定した特定応答は、撤回後に送信・受信され得ることを変更案として明記してください。受信済み情報の回収や、撤回後の送信をすべて停止する保証とは区別してください。
- 許可を新規取得、別ページ、別結果、クライアントからの再送要求へ流用しないでください。許可済みの同一応答の配送継続と、新しい要求の許可判定は区別してください。
- 退会・対象削除にも同じ開示許可境界を適用する案を明示してください。ただし、受付確定後のAI結果の保存・適用は禁止し、開示許可済みであることを保存許可の根拠にしないでください。
- 研究同意撤回だけで、通常利用のAI処理・保存を停止しない既存方針を維持してください。
- 業務ルールには保証範囲と禁止条件を置き、処理順序は業務フロー、順序保証に必要な状態・版はドメイン、原子的な保証の実装方式は後続設計へ委譲してください。
  優先度B：詳細設計前に補足

5. 評価・集計の時点（BR-05・09）

- 再編集中も保持される既存評価は、初回完了済みセッションの最新評価として内部集計に含める案を明記してください。同意・削除状態等の適格条件は継続して適用してください。
- 再完了後の評価更新は、評価更新月へ移すのではなく、当該セッションの初回完了月のスコア再計算に反映してください。再計算時点の最新確定評価と元版を用いることを明確にしてください。
- 再計算と外部再開示は別判定とし、人数・差分・開示履歴・現在の同意条件を再確認する既存規則を参照してください。過去に提供できたことを再開示の根拠にしないでください。
- 利用月は初回保存月、完了月は初回完了月という既存定義を維持してください。月が異なる場合は各月にそれぞれ1件計上し、再編集・再完了では追加しないことだけを補足してください。

6. 研究内参照IDと開示制御（BR-08・09）

- 研究内参照IDは対象研究の承認された範囲内でのみ使用し、研究間の共通IDとして利用・照合しない案を明記してください。ID生成方式は決定しないでください。
- BR-09の10人基準・差分抑制は許可集計の規則であり、個別取得の許可条件や、個別取得へ一律に適用する人数基準ではないことを明確にしてください。
- 個別取得では、BR-08に既存の許可項目・検索条件・返却件数・少数組合せへの制御を参照してください。参照ID、検索、ページング、反復取得の組合せで推定可能になる場合も、承認条件に従って制限し、判断不能なら拒否してください。
- 再編集中の研究閲覧では、失効・未確認の現在結果を確認済み結果として提供しないでください。初回完了履歴・既存評価の集計可否とは分け、現在状態の表示は承認された項目範囲内としてください。

7. AI呼出し回数の計数（BR-03）

- 同一RequestKeyの同一要求への同時再送では、外部呼出しと上限消費を重複させないでください。RequestKeyによる要求重複排除と、実際の外部送信試行の計数を区別してください。
- 外部送信が成立しなかったと確認できる場合は消費せず、送信済みの失敗は消費する既存規則を維持してください。送信した可能性があり成否不明の場合は、未消費として枠を戻したり、無条件に外部再送したりしないでください。
- 成否不明の試行は消費相当として枠を確保する案とし、送信前不成立を確認できた場合だけ解除できる条件を定義してください。
- 別の外部送信試行を許可する場合は、その試行も上限対象としてください。同一キーであることを理由に、複数回の外部送信を1回として扱わないでください。
- 同時要求でも支援実行単位・セッション単位の上限を超えない条件を定義し、予算確保・確定の処理順序と実装方式は後続へ委譲してください。

8. 複数端末・下書き保持（BR-04）

- 画面内の入力保持、端末内保存成功、サーバー保存成功を区別してください。端末内保存成功だけで別端末から再開可能とは表示しないでください。
- リロード・ブラウザ終了・クラッシュ後の復元は、端末内保存に成功し、同じ本人の保存領域を安全に利用できる範囲に限る案としてください。未保存の画面内入力や、端末データ消去後の復元は保証しないでください。
- 保存失敗・通信断・競合では、可能な範囲で現在の入力を保持し、どこまで保存できているか表示してください。端末内保存まで失敗した場合の既存表示を参照し、永続保存を保証した表現にしないでください。
- ログアウトでは既存の破棄確認・取消・共有端末方針を参照してください。API拒否時の入力保持を、ログアウト後も共有端末へ残す許可と解釈しないでください。
- 競合解消後は最新の期待Revisionで再保存し、実際に確定した変更の影響対象を再確認してください。本人の明示操作なしに下書きを置換・破棄しないでください。

9. 依存結果の無効化（BR-04）

- 実際に使用した入力・支援結果・疾患／治療情報の識別子と版を根拠に、直接・間接依存する結果だけを失効・再確認対象としてください。
- 参照関係のない結果は維持し、SupportSessionのRevisionが変わったことだけで全結果を失効させないでください。競合管理版と内容の参照版を区別してください。
- 依存関係を確認できない場合は影響なしと扱わず、対象結果の現在利用を許可しないでください。
- 履歴の保持と現在の利用可否を区別し、失効した過去結果をPDF・研究提供・後続支援へ流用しないでください。依存属性はドメイン、影響判定と再確認の順序は業務フローを参照してください。

10. 操作の冪等性（BR-02・04）

- RequestKeyの同一性は、サーバーが確立した操作主体・操作種別・対象・要求内容との対応で判定してください。期待Revision等、操作結果に影響する条件も要求内容に含めてください。
- 同一キー・同一内容の同時再送は、一つの論理操作へ収束させてください。同じキーで異なる内容を指定した場合は拒否し、競合解消等で要求内容を変える場合は別要求として扱ってください。
- 結果不明時は既存要求の結果を確認し、無条件に新規操作を作らない既存規則を参照してください。
- 冪等性を、現在の権限・同意・削除状態を省略して本文や成果物を再取得できる根拠にしないでください。操作成立の確認と、内容の再開示許可を区別してください。
- キーの保持・失効後に重複実行を防げる条件は後続設計事項とし、新たな保持日数は決定しないでください。
  優先度C：軽微な補足

11. 年齢・未成年同意（BR-01）

- 登録時の15〜39歳という資格と、登録後の継続利用条件を区別してください。40歳到達で自動退会・削除しない既存案を維持し、継続利用制限は未確定事項として残してください。
- 保護者等の同意が必要な対象で撤回・失効・確認不能になった場合は、その同意を必要とする整理機能の利用を許可しないでください。自動退会・削除や研究同意撤回と同一視しないでください。
- 再開には、その時点の年齢と承認された同意手続きに基づく有効な確認を必要としてください。18歳到達だけで撤回済み同意を復活させたり、新しい同意を取得済みと扱ったりしないでください。
- 制限中も必要な同意確認・撤回・削除等の操作は、それぞれの条件で判定してください。保護者用画面・権限は追加しないでください。

12. 入力・PDF・公開制御（BR-03・05・10、D08）

- 疾患・治療分類の「その他」は、現行の選択値だけで受理し、追加説明を必須にしない案として明記してください。新しい自由記述欄は追加しないでください。
- 文字数はフロント資料に既存の「Unicodeのユーザーが見える文字単位」という案を参照し、業務ルール上の共通条件として整理してください。前後の空白等を黙って除去して上限内に収めず、空白のみの未入力判定とは区別してください。詳細方式と技術上限は後続へ委譲してください。
- PDFは対象の確認済みスナップショット版を固定し、掲載内容の確認時点とPDF生成時点を区別してください。生成日は実際のPDF生成日とし、再生成で内容の確認時点を書き換えないでください。
- 履歴閲覧、過去版からのPDF再生成、既生成PDF再取得を区別してください。履歴保持だけを取得許可の根拠にせず、失効した版は再生成・再取得とも不可とする案でBR-04と整合させてください。現在も有効な対象版の利用可否は業務フローに従ってください。
- 公開停止前に受理した保存は、版・所有・必要同意・削除状態等の確定条件を満たす場合だけ確定可能としてください。受付済みであることを、その後の退会・削除・競合を無視できる根拠にしないでください。
- 停止中の結果開示保留と、再公開後の再検証を全対象で統一してください。公開停止はBR-06の撤回前許可確定とは別の制御として扱ってください。
- 判定不能時のAPI拒否は維持しつつ、現在の画面内入力を保持できることと区別してください。API拒否を保存成功・端末永続保存の保証として表示しないでください。
  修正時の共通条件
- 新機能・新権限・新画面を独自に追加しないでください。
- D01〜D08の提案値と既存期限案を変更せず、承認前に確定要件へ変更しないでください。
- 手入力完了、撤回・退会前に許可確定した応答の配送、再編集中の評価集計・PDF利用等は、既存記述との調整が済むまで変更案として区別してください。
- 定義・属性・不変条件はドメイン、処理順序・判定時点・状態別操作可否は業務フロー、表示・確認操作はフロント資料を正本としてください。業務ルールには許可・禁止・判定条件を記載し、他資料の説明を重複させないでください。
- 言語・DB・保存技術・原子的処理の実装方式・再試行間隔・性能は決定しないでください。
- 修正後は、変更箇所・変更内容・既存定義で足りた内容・他資料に必要な変更・残る未確定事項を簡潔に報告してください。
  他資料への主要な反映先は、ドメインの「共通の意味・主要属性・状態と集約境界」、業務フローの「生成上限・修正／完了・PDF／評価／削除・撤回」、フロントのP06〜P09と生成・評価・PDF・保存状態の表示です。

frontend-components.mdについて、次の3点を既存の業務設計と整合するよう修正してください。

対象：
aidlc-docs/construction/patient-support-app/functional-design/frontend-components.md

参照：
同ディレクトリのbusiness-rules.md、business-logic-model.md、domain-entities.md

今回はフロント設計の明確化に限定します。参照資料の業務ルール・状態・生成上限・完了条件を独自に変更しないでください。関連資料は現在レビュー案であることを維持してください。

1. 支援の複数選択と進行状態（P05・P06）

- 全5支援から複数選択でき、選択後も支援の追加・明示省略・実行順序の変更ができることを明記する。
- 未選択と「選択済み・未実行」を区別する。
- 「選択済み・未実行」「実行中」「確認済み」「省略」「再確認必要」を画面上で識別できるようにする。
- これらは画面上の表示分類とし、ModuleRunの既存状態（未実施・編集中・確認待ち・確認済み・再確認必要・省略）との対応を明記する。「実行中」にまとめる場合も、編集中と確認待ちの違いが分かるようにする。
- 支援の進行状態とAI生成の処理状態、保存状態を混同しない。
- ModulePicker、ProposalReview・ModuleEditorの入出力・イベント・保持状態にも反映する。省略をデータ削除と同義にしない。

2. 個別支援の確認保存とセッション全体の完了（P06・P07）

- 個別支援の「内容を確認して保存」と、セッション全体の「今回の整理を完了」を別操作として明記する。
- 個別支援の保存だけで全体を完了扱いにしない。
- 全体の完了条件は、業務ロジックモデルに合わせて以下を明記する。
  ・選択した支援に、内容確認済みの結果が1件以上ある。
  ・選択中の実行がすべて確認済み、または明示省略である。
  ・再確認必要な結果が残っていない。
  ・患者本人が全体の完了操作を行う。
- 未実行の選択支援を自動的に省略扱いにしない。全5支援の実施も強制しない。
- P07では完了を妨げている支援・理由と、該当支援へ戻る操作を表示する。
- 完了資格はC05の判定結果に従い、フロントだけで確定しない。

3. AI生成回数の上限到達時（P05・P06）

- 1支援実行あたり初回込み5回、セッション全体30回という現行案に合わせ、どの枠が不足しているかを表示する。
- AI生成の制限と、閲覧・編集・下書き保存・確認済み結果の保存・全体完了の可否を分けて説明する。
- 上限到達だけを理由に、入力済み内容や保存済み結果を失わせたり、画面全体を操作不能にしたりしない。
- 現在の入力版・参照版に適合した案は、上限到達だけを理由に確認保存を禁止しない。
- 入力修正によって必須再生成が必要な場合は、上限を理由に再生成を免除したり、古い結果を確認済みにしたりしない。下書き保存と確認済み保存の違い、進めない理由を明記する。
- 既存の手入力経路は維持する。ただし、手入力が必須再生成の代替になると独自に解釈しない。資料から判断できない範囲は未決事項として報告する。
- セッション新規作成や支援の再実行による上限回避を推奨しない。
- 共通表示状態に「AI生成上限到達」を追加し、可能な操作と条件付きで不可能な操作を示す。

画面一覧だけでなく、関連する部品契約、フォーム検証、共通表示状態、Testable Propertiesにも必要な範囲で整合を取ってください。

確認観点には、複数支援の一部未実行、一部明示省略、全件省略、再確認必要、上限到達後の確認保存、必須再生成に必要な枠の不足を含めてください。

フロント設計だけでは解消できない矛盾・未決事項は、業務ルールを変更せず報告してください。段階の承認や次段階への移行は行わないでください。

4.フロントエンド機能設計に、以下のUIデザイン方針を補足してください。

- **ロゴ**：C:\Users\khr85\Documents\ai-dlc-v1-test\血液がんサポートプロジェクトlogo.png のロゴを正式なアプリロゴとして使用する。形状や配色を無断で変更しない。
- **カラー**：ロゴ画像の色調を基本とし、アプリ全体で統一感を持たせる。
- **デザインの方向性**：がん患者の認知負荷を高めないようなシンプルかつ落ち着きのあるデザイン。
- **デザインシステム**：デジタル庁デザインシステムを引き続き参照し、視認性・アクセシビリティを優先する。
- **詳細調整**：配色・フォント・余白・ボタンなどの具体的な見た目は、実画面を確認しながら調整する。

既存の画面構成・機能・操作仕様は変更せず、UIデザインに関する方針として追加してください。

**AI Response**: 回答済みの承認内容と進行状況を確認し、ワークフローに沿って次のステージへ進めます。回答はB：修正依頼でした。次段階へは移らず、4資料の定義・業務フロー・画面仕様を照合して修正します。数値や期限の提案は維持し、資料間で調整が必要な変更と未確定事項を明示します。
**Context**: 修正計画を作成。機能設計の承認未受領。無効セキュリティ拡張は読込・適用省略。

---

## U01機能設計・レビューB修正結果
**Timestamp**: 2026-10-31T10:57:34Z
**AI Response**: 「主な不整合は、入力変更後の『内容の作り直し』と『AI再生成』の混同でした。ご指定の手入力経路を業務側の変更案として整理し、古い結果の再確認だけでは有効に戻せない条件を揃えます。削除についても、アカウント消去・関連データ消去・バックアップ対応・追跡保持終了を分けて記載します。業務側の修正案を揃えました。全体完了は『現在の判定対象の支援』で判断し、過去の確認済み結果では代替しません。続いて、画面・部品契約・検証観点を合わせ、指定ロゴと落ち着いたUI方針を追記します。4資料の修正と照合が完了しました。21項目の対応表、既存記述を維持した箇所、残る未確定事項を修正報告にまとめています。Markdownの表・相対リンクと、D01〜D08の提案値を変更していないことを確認しました。ご指定どおり、機能設計の承認と次段階への移行は行っていません。」
**Action**: 修正計画を作成し、各資料の作業完了と同じ変更でチェック更新。選択集合／現在Run・集約Revision／内容版・確認保存原子性・直接間接依存・撤回退会の許可確定と配送・削除要求独立追跡と所有元別範囲・AI送信試行計数・手入力作り直し・評価月・PDF対象版・公開停止・端末保存表示・UI方針を整合。修正報告にドメイン5・規則12・フロント4の対応と未確定事項を記録。承認回答B・指示原文を保持、進捗と元計画を更新。新しい承認質問・実装・次段階移行なし。
**Validation**: PowerShellで5設計／報告文書の表列数・相対リンク・置換文字なし、21項目対応、B保持、HEADと比較したD01〜08行の一致を検証し成功。初回Python検証は環境で出力なく終了1のため検証実施とは扱わず、PowerShellへ切替。Gitの所有権チェックはコマンド単位safe.directoryで参照し、全体設定は変更していない。図・埋込コードなし。アプリコード・コードテスト・実画面・消去／復旧実測は未実施。
**Context**: functional-design.mdの修正後レビュー状態。RESILIENCY-01・02・03は論理設計／目標引継ぎ適合、10業務縮退方針・11Pilot Light引継ぎ適合。04〜09・10実装・11復旧手順費用実測・12〜15構成運用試験は本段階N/A。PBT-01助言の性質追記、必須02・03・07・08・09は未実装でN/A、04・05・06・10助言維持。無効セキュリティ拡張の読込・適用省略。期限両立・外部側消去・原子的方式・実研究条件等は後続の未確定事項。本修正を段階承認と混同しない。
**Final Response**: 回答B（修正依頼）に基づき、4資料を修正しました。修正内容・既存記述を維持した箇所・未確定事項は修正報告にまとめています。提案値・期限は維持し、文書の整合性を確認済みです。機能設計は未承認のまま、次段階には移行していません。

---

## 機能設計：研究参加同意の募集条件補足
**Timestamp**: 2026-10-31T12:51:02Z
**User Input**:
では、この表の内容で、各ファイルに内容の変更をしてください。



| ファイル                                                                   | 明記する内容                                                                         |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `inception/requirements/requirements.md`                               | FR-11に、ベータ版の同意募集無効、研究不同意・未同意でも通常利用を制限しないという要件                                  |
| `construction/patient-support-app/functional-design/business-rules.md` | **BR-08に同意募集・受付の許可条件を定義する正本**。募集有効、対象研究・目的・対象データ・撤回方針・承認済み文面の確認を必須とし、不充足時は受付禁止 |
| 同階層の `business-logic-model.md`                                         | 同意提示前と受付確定時に条件を確認し、不充足・確認不能なら拒否する処理順序                                          |
| 同階層の `frontend-components.md`                                          | P02・P10・ConsentPanelに、BR-08を満たす場合だけ同意依頼・同意操作を表示すること                            |
| 同階層の `domain-entities.md`                                              | 対象研究ごとの募集有効／無効の状態と、その管理責任・研究条件との対応                                             |
| `inception/user-stories/stories.md`                                    | 募集無効・条件不足では同意依頼が出ないこと、APIでも受付拒否すること、通常利用できることを受入条件として追加                        |

**AI Response**: 指定6資料に反映。新規同意・再同意と既存同意確認・撤回を分離。計画・状態を更新。段階承認・次段階移行・実装なし。
**Context**: BR-08正本、C14募集状態、C04本人意思の分離。RESILIENCY既存方針・PBT助言維持、未実装項目N/A。無効セキュリティ拡張適用省略。図・コード追加なし。文書構造・必要記載・diff空白を確認。初回編集コマンドの構文エラーとパッチ不一致は変更前に停止、表境界検出失敗のフロントは別節として反映し再確認。

---

## 機能設計：運営用当月集計と保存方針
**Timestamp**: 2026-10-31T13:35:28Z
**User Input**: "ではその内容でファイルの内容を変更してください。"
**AI Response**: 前の変更表に沿い、FR-11・12補足、US-28、BR-11、非永続OperationsAggregate、O06と運営用取得契約、関連設計・作業対応を更新。元データ複製なし・保存層集計・原則非永続。対象者・少人数条件は未確定として実データ有効化を保留。段階承認・移行・実装なし。
**Context**: ユーザーの直前変更表への実行指示。計画checkboxは各作業と同じinteractionで更新。RESILIENCY-01・02・03・10方針・11方針維持適合、04〜09・10設定・11実測・12〜15構成運用試験N/A。PBT-01助言追加、02・03・07・08・09未実装N/A、04・05・06・10助言維持。無効セキュリティ拡張適用省略。追加文書は図・埋込コードなし、表・空行・参照を確認して書込。性能・復旧・コード試験は未実施。

---

## 運営用集計修正の検証結果
**Timestamp**: 2026-10-31T13:35:50Z
**AI Response**: US見出し28件・一意、変更資料の表列数・UTF-8文字とgit diff --checkを確認し成功。計画を完了更新。機能設計の全体承認と次段階移行は行わない。

---

## がん種選択肢の修正
**Timestamp**: 2026-10-31T14:13:51Z
**User Input**: "癌腫について、現在の項目から以下の項目に変更してください。影響のあるファイルも併せて変更してください。
がん種
肺、胃、食道、肝臓・胆のう、膵臓、乳房、泌尿器、頭頚部、子宮・卵巣、血液、軟部組織、脳腫瘍、大腸、その他＋「不明・回答しない」"
**AI Response**: がん種を指定16項目へ変更し、FR-03・US-03・BR-03・PatientProfile・保存フロー・P04を整合。計画・変更報告・状態を更新。
**Context**: 治療時期・治療内容は維持。過去回答は保持、研究の許可項目は拡大せず、旧値の自動移行を決定しない。機能設計全体承認・次段階移行・実装なし。無効セキュリティ拡張適用省略。図・コード追加なし。

---

## 外部APIの選定状況と利用規範の確認
**Timestamp**: 2026-10-31T14:19:54Z
**User Input**: "現在、外部APIは何を用いるのかは不確定だという認識で合っていますか？また、具体的なツールは確定していないものの、使用状況やタイミング、渡される情報に関してはどのような規範が設けられていますか？"
**AI Response**: 要件NFR-03と現在の設計資料を確認。外部AIの利用先は未選定であり、用途・呼出経路・最小入力・送信禁止項目・本人確認・版管理・再送と計数・失敗と削除の規範を説明する。具体上限等は未承認レビュー案と区別。送信項目の詳細契約、提供元の保持・学習利用等を確定済みとは扱わない。
**Context**: 既存資料の説明のみ。段階承認・次段階移行・設計やコードの変更なし。無効なセキュリティ拡張の適用は省略。通常Markdownとして検証し、監査ログに追記。

---

## AI上限到達前に未完了の場合のフロー確認
**Timestamp**: 2026-10-31T14:22:38Z
**User Input**: "これって上限を設けた時、再度入力などで、タスクが完了する前に上限に達してしまった場合にはどのようなフローになりますか？"
**AI Response**: 現行レビュー案では新規AI呼出しを止め入力を保持し、現在版適合案があれば本人確認保存、入力変更で失効した場合は手入力による作り直し・参照整合・本人再確認を満たす経路を説明。AI必須範囲で枠不足なら下書き保持と阻害理由表示に留まり、完了までの救済策は未確定と明示。明示省略と有効結果1件以上等の全体完了資格も区別する。
**Context**: 既存機能設計の説明。設計変更・承認・次段階移行なし。通常Markdownの内容を検証して追記。

---

## 上限救済策の要望とモジュール別AI利用想定
**Timestamp**: 2026-10-31T14:25:29Z
**User Input**: "救済策ほしいなぁ。あと、モジュール選択として、もやもやの解消を続けた場合だと、たぶんAIとのチャット形式にほぼなると思うんだけど、そこについて各モジュールごとにどのくらいAIを使う想定でいるのか教えてください"
**AI Response**: 現行は各支援の入力・生成案・本人編集確認の反復であり、対話ターン設計やモジュール別利用回数の見積りは未策定と説明。各モジュールのAI用途を整理し、チャット前提なら一律5回の妥当性は未検証と明示。救済策として整理保存機能の維持、通常対話枠と最終まとめ枠の分離、既存セッションへの追加枠、回復条件表示を未承認の検討案として具体化。数値・回復周期・追加枠条件は確定しない。
**Context**: 現行資料と新規提案を区別した説明。監査以外の文書変更、機能設計全体承認、次段階移行なし。通常Markdownを検証して追記。

---

## ベータ版の回数上限・費用目安・保存制約の確認
**Timestamp**: 2026-10-31T14:34:43Z
**User Input**: "回数に関しては、今回別にお金を取るわけじゃないのと、ベータ版だからということで、費用圭さん、データ保存場所などに関しては目安で考えるのはどうだろう、上限考えないとダメな理由はどこにありますか？目安で考えて、上限が来たからその後のフローを変えるとなると、また業務フローが増えると思うんだけど、やっぱりデータ保存形式に制約があるのかな"
**AI Response**: 5回・30回はデータ保存形式や確定要件に由来する必須制約ではなく費用制御の未承認提案であると説明。対話回数は利用目安に留め、本人確認・完了条件から切り離す方針を提案。利用者への無料提供と運営の外部API費用を区別し、運営側の監視・異常連続要求対策・予算保護は共通障害対応として検討。保存形式は未選定、保存地域・提供元保持等は設計時に具体化し実データ利用前に確認が必要と説明。既存の救済策提案が固定上限を前提として複雑化した点を訂正。
**Context**: 方針相談への回答。監査以外の設計資料変更や段階承認は行わない。通常Markdownとして検証し追記。

---

## 外部AI・プライバシーの後日確認メモ作成
**Timestamp**: 2026-10-31T14:53:20Z
**User Input**: "こちらの内容は現在AI利用先が未選定であることから、未確定の部分や補足・変更をまだしてはいけない部分があります。後ほど、確認する項目として新規ファイルにこの内容をまとめてください。ただし、この内容は後で参照するものであり、実際の設計・生成などの工程には私が許可をしない限り反映しないように明示してください。"
**AI Response**: 後日確認用のexternal-ai-privacy-deferred-review.mdを新規作成。既存記述と整合する点、許可後の補足・変更検討項目、ユーザー判断・外部確認事項を分離。OpenAI Responses APIを含むAI利用先は未選定と明記し、明示許可まで要件・設計・生成・設定・運用等への反映を禁止。先のAI回答の採用確定扱いを訂正。Markdown表と相対リンクを検証。
**Context**: 参考資料のみを新規作成。既存要件・設計・状態・承認質問・アプリコードは変更しない。計画相当の作成確認チェックを新規メモ内で完了記録。段階承認・次段階移行なし。

---

## M3のフローとモジュール間の違いの説明
**Timestamp**: 2026-10-31T14:56:20Z
**User Input**: "M3について大体のフローはどのようになっている？モジュールごとに深ぼる内容が違うのは理解しているが、具体的に何が変わることになっていますか"
**AI Response**: US-08、5支援の入出力、P05〜07を確認。M3は心配・困りごとと本人選択の疾患・治療情報から相談事項・質問候補を整理し、本人が修正確認保存する流れと説明。共通画面・処理の骨格と、参照情報・AIの整理目的・出力・禁止範囲の差を表で比較。チャットの質問順・深掘り・終了条件は未確定で、例示を現行仕様と区別。保留メモの内容を設計へ適用しない。
**Context**: 既存資料の説明のみ。監査以外のファイル変更・承認・次段階移行なし。通常Markdownとして検証して追記。

---

## 回答時間の目安を患者が選ぶ仕様の確認
**Timestamp**: 2026-10-31T15:00:00Z
**User Input**: "# Context from my IDE setup:

## Open tabs:
- domain-entities.md: aidlc-docs/construction/patient-support-app/functional-design/domain-entities.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md
- patient-support-app-functional-design-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md
- frontend-components.md: aidlc-docs/construction/patient-support-app/functional-design/frontend-components.md
- business-rules.md: aidlc-docs/construction/patient-support-app/functional-design/business-rules.md

## My request:
回答時間の調整（目安）を患者に選ばせたいとかいうのって、どこかに明示してありますか？"
**AI Response**: 設計資料を検索して、患者が回答時間の目安を選ぶ仕様が明記されているか確認します。要件・ストーリー・機能設計・監査記録を検索した範囲では明示なし。personas.mdの「自分のペース」は関連する方針だが時間選択の仕様ではない。患者の時間選択に応じた質問数・深掘りの変更も未定義と説明。
**Context**: 既存資料の確認のみ。通常Markdownとして検証。監査以外の変更・段階移行なし。

---

## 対話モードの選択・途中変更の具体化
**Timestamp**: 2026-10-31T15:06:54Z
**User Input**: "# Context from my IDE setup:

## Open tabs:
- domain-entities.md: aidlc-docs/construction/patient-support-app/functional-design/domain-entities.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md
- patient-support-app-functional-design-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md
- frontend-components.md: aidlc-docs/construction/patient-support-app/functional-design/frontend-components.md
- business-rules.md: aidlc-docs/construction/patient-support-app/functional-design/business-rules.md

## My request:
ここを詰めたいな
モードを選択できるようにしたいのとそれも途中で変更できるようにしたい。"
**AI Response**: 回答時間の目安に応じたモード選択と対話途中での変更を具体化するため、既存の対話フローと未確定事項を確認。モード構成・適用範囲・まとめ操作・変更時の共通動作を確認する専用質問ファイルを作成。短め・標準・じっくりの3種類を仮案とし、回答保持・次回要求からの適用・時間切れ打切りなしを提案。
**Context**: 機能設計レビューの補足検討。通常Markdownと質問形式を検証。質問ファイル内の実施済みチェック更新。既存要件・設計の確定変更、保留メモの適用、段階承認・移行なし。質問はcommon/question-format-guide.mdに従いファイルに記載。

---

## 対話モード回答の確認・反映
**Timestamp**: 2026-11-02T04:25:23Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-conversation-mode-questions.md

## Open tabs:
- patient-support-app-conversation-mode-questions.md: aidlc-docs/construction/plans/patient-support-app-conversation-mode-questions.md
- domain-entities.md: aidlc-docs/construction/patient-support-app/functional-design/domain-entities.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md
- patient-support-app-functional-design-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md
- frontend-components.md: aidlc-docs/construction/patient-support-app/functional-design/frontend-components.md

## My request:
対話モードの確認ファイルの回答を完了しました。"
**AI Response**: 確認ファイルの回答を読み、選択内容と追記を照合します。曖昧な点がなければ、関連する要件・設計資料へ反映します。回答は質問1B・2A・3A・4A。短め／じっくり、数値時間表示なし、支援ごとの開始時選択・途中変更、まとめ別操作を要件・既存ストーリー・4機能設計資料・変更報告・状態へ反映。生成中要求の適用モード固定、変更だけで追加生成・内容失効なし、入力保持と失敗時表示を記載。回答原文保持・計画チェック更新済み。
**Context**: Markdown構造・4回答保持・BR-12重複なし・関連資料の整合を確認。新規図・コードブロック・リンクなし。git diffは環境がGitリポジトリとして認識されず利用不可のためファイル直接確認。実装・実行テスト・段階全体承認・次段階移行なし。セキュリティ拡張は無効のためスキップ。拡張の適用範囲とN/Aはrevision-notes.mdに記録。外部AI保留メモは未適用。

### 確認ファイルの回答原文
質問1: [Answer]: B
質問2: [Answer]: A
質問3: [Answer]: A
質問4: [Answer]: A

---

## 現在の承認待ち資料の確認
**Timestamp**: 2026-11-02T04:26:18Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-conversation-mode-questions.md

## Open tabs:
- patient-support-app-conversation-mode-questions.md: aidlc-docs/construction/plans/patient-support-app-conversation-mode-questions.md
- domain-entities.md: aidlc-docs/construction/patient-support-app/functional-design/domain-entities.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md
- patient-support-app-functional-design-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md
- frontend-components.md: aidlc-docs/construction/patient-support-app/functional-design/frontend-components.md

## My request:
今、承認待ちファイルって何がある？"
**AI Response**: 状態・承認質問・回答済み確認ファイルを照合。現在の段階承認待ちはpatient-support-app-functional-design-approval-questions.mdによる4機能設計資料の承認1件。既存回答Bは修正依頼の履歴であり、修正後の全体承認は未受領。対話モード確認は回答反映済み。過去のストーリー承認質問の空欄は後続承認の状態記録から現在の待ちには数えない。未確定事項・保留メモは別途検討項目であり、今回の承認待ち一覧と区別して説明。
**Context**: 状況確認のみ。監査以外の変更・承認・移行なし。通常Markdownとして検証して追記。

---

## UI設計の曖昧さの確認
**Timestamp**: 2026-11-02T04:36:41Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md

## Open tabs:
- patient-support-app-functional-design-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md
- patient-support-app-conversation-mode-questions.md: aidlc-docs/construction/plans/patient-support-app-conversation-mode-questions.md
- domain-entities.md: aidlc-docs/construction/patient-support-app/functional-design/domain-entities.md
- frontend-components.md: aidlc-docs/construction/patient-support-app/functional-design/frontend-components.md

## My request:
オッケー、UI設計について、指示があいまいだと感じる。"
**AI Response**: frontend-components.mdと既存の修正指示を確認。機能・状態の記述はある一方、対話の表示形式、画面分割、一度に示す情報、操作の配置、具体的な見た目が未確定であると説明。特に実画面で調整という記述は承認時の完成像を共有しにくいと指摘。P03・P06・P07の画面案から具体化し、主操作・補助操作・表示優先度と状態差分を確認する進め方を提案。提案と既定仕様を区別し、今回の発言を設計承認として扱わない。
**Context**: 内容確認・説明。監査以外の設計変更・実装・承認・段階移行なし。通常Markdownを検証して追記。

---

## 患者画面・共通ナビゲーションの具体化
**Timestamp**: 2026-11-02T04:48:28Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md

## Open tabs:
- patient-support-app-functional-design-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md
- patient-support-app-conversation-mode-questions.md: aidlc-docs/construction/plans/patient-support-app-conversation-mode-questions.md
- domain-entities.md: aidlc-docs/construction/patient-support-app/functional-design/domain-entities.md
- frontend-components.md: aidlc-docs/construction/patient-support-app/functional-design/frontend-components.md

## My request:
では、本筋の画面遷移だけでなく、初期のアカウント設定の画面、悩み一覧の画面、ログイン画面、設定画面、サイドバーに何を置くのか、などもわからない。ヘッダーにヘッダーロゴを設置して（ロゴにはC:\Users\khr85\Documents\ai-dlc-v1-test\血液がんサポートプロジェクトlogo.png　の画像を用いる）、ヘッダーロゴをクリック（またはタップ）するとトップ画面に戻るようにする。本筋の画面遷移の中で戻るボタンはどの位置に置くのか、選択しているモードがどこか小さくても確認できるようにしたい。（モード変更も近い位置で行えるように）トップ画面は悩み一覧。やり途中に間違えてトップ画面を押してしまうとめんどくさいので、確認のポップアップが出るようにしたい。"
**AI Response**: トップを悩み一覧として、ログイン・初期設定・設定とヘッダー・サイドバー・戻る・モード変更を具体化。patient-screen-layout.mdを新規作成し、指定事項と配置・文言等のレビュー案を区別。戻るは本文左上、モードは支援名直下に変更操作と隣接、サイドバーは悩み一覧・お知らせ／記事・問い合わせ・設定と下部ログアウト。整理途中のトップ移動は保存済みでも確認。未保存時の保存・破棄・取消、保存失敗時の非移動、認証・同意の境界を定義。悩み一覧1件を既存SupportSessionとして扱う案を明記。
**Context**: 指定ロゴ存在確認。要件・既存ストーリー・業務規則・業務フロー・画面表・変更報告・状態・計画チェック更新。書込み前に通常Markdown・表構造と図なしを確認し、書込み後も表列・リンク先・旧トップ表記の置換を確認。セキュリティ拡張は無効のため省略、他拡張の適用とN/Aを変更報告に記録。アプリ実装・実画面試験・段階承認・移行なし。

---

## ダークモード対応状況の確認
**Timestamp**: 2026-11-02T05:02:04Z
**User Input**: "# Context from my IDE setup:

## Open tabs:
- patient-screen-layout.md: aidlc-docs/construction/patient-support-app/functional-design/patient-screen-layout.md
- patient-support-app-functional-design-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md
- patient-support-app-conversation-mode-questions.md: aidlc-docs/construction/plans/patient-support-app-conversation-mode-questions.md
- domain-entities.md: aidlc-docs/construction/patient-support-app/functional-design/domain-entities.md

## My request:
これって、ダークモードへの対応ってどうなっている？"
**AI Response**: 設計資料・srcを検索し、患者アプリのダークモード要件は未定義と確認。一方、ひな形src/index.cssにはcolor-schemeとprefers-color-schemeによる端末設定連動の配色が存在。これを患者アプリ全画面の対応済みとは扱わない。追加案として設定の表示テーマに端末設定に合わせる／ライト／ダーク、ロゴ画像の無改変と周囲背景による視認性確保、全画面・ダイアログ・エラー等の両テーマ確認を説明。案の反映・実装は行わない。
**Context**: 状況確認のみ。通常Markdownとして検証し監査へ追記。設計・アプリ変更・承認・段階移行なし。

---

## 背景透過版ロゴへの参照先変更
**Timestamp**: 2026-11-02T05:15:58Z
**User Input**: "# Context from my IDE setup:

## Open tabs:
- patient-screen-layout.md: aidlc-docs/construction/patient-support-app/functional-design/patient-screen-layout.md
- patient-support-app-functional-design-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md
- patient-support-app-conversation-mode-questions.md: aidlc-docs/construction/plans/patient-support-app-conversation-mode-questions.md
- domain-entities.md: aidlc-docs/construction/patient-support-app/functional-design/domain-entities.md

## My request:
header logo_背景透過.png　でロゴの背景透過版なのでロゴの参照先をC:\Users\khr85\Documents\ai-dlc-v1-test\header logo_背景透過.png に変更してください。影響するファイルを変更してください"
**AI Response**: 背景透過版の存在を確認し、現行要件・frontend-components.md・patient-screen-layout.mdのロゴ参照を更新。承認質問には過去の指示を保持して最新参照先を追記し、変更報告・状態チェックを更新。全文検索で旧参照は回答履歴と監査のみ、現行3資料は新参照に一致と確認。src/publicに旧ロゴ参照なし。
**Context**: 通常Markdown・空白を含むパスの文中表記を検証。画像編集・旧画像削除・ダークモード採用・段階承認・移行なし。関連拡張の適用範囲は変更報告に記録。監査は追記のみ。

---

## がん種・治療時期の登録タイミング変更
**Timestamp**: 2026-11-02T05:20:42Z
**User Input**: "# Context from my IDE setup:

## Open tabs:
- patient-screen-layout.md: aidlc-docs/construction/patient-support-app/functional-design/patient-screen-layout.md
- patient-support-app-functional-design-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md
- patient-support-app-conversation-mode-questions.md: aidlc-docs/construction/plans/patient-support-app-conversation-mode-questions.md
- domain-entities.md: aidlc-docs/construction/patient-support-app/functional-design/domain-entities.md

## My request:
初期設定で癌腫の登録、悩みを作成するごとに（または具体的なプランを考えなきゃいけないときに）治療時期を登録する形に変更して"
**AI Response**: 初期設定ではがん種を登録し、治療時期は悩みごとに入力・保存する構成へ変更します。具体的なプランを考える際にも、その悩みに登録された治療時期を確認・更新できるよう、データ設計と画面遷移をそろえます。悩み作成ごとの方式を採用し、M4開始時も確認・更新可能とした。治療中の内容入力は同時点へ移し既存条件を維持。共通PatientProfileと悩み単位TreatmentContextを分離し、治療情報の参照版・遅延結果・依存再確認を補足。要件・ストーリー・4設計資料・画面配置・変更報告・承認質問への更新記録・状態・計画チェックを更新。
**Context**: 通常Markdown・表列構造を確認し、初期設定で治療情報を要求する現行記述がないことと参照元・保存先・遷移を検索照合。既存回答・監査は保持。拡張評価はrevision-notes.mdへ記載、無効セキュリティ拡張はスキップ。実装・移行・実行テスト・段階承認・次段階移行なし。

---


## U01機能設計・末尾指示の反映
**Timestamp**: 2026-11-02T07:10:40Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/functional-design/patient-screen-layout.md

## Open tabs:
- patient-screen-layout.md: aidlc-docs/construction/patient-support-app/functional-design/patient-screen-layout.md
- patient-support-app-functional-design-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md
- patient-support-app-conversation-mode-questions.md: aidlc-docs/construction/plans/patient-support-app-conversation-mode-questions.md
- domain-entities.md: aidlc-docs/construction/patient-support-app/functional-design/domain-entities.md

## My request:
C:\Users\khr85\Documents\ai-dlc-v1-test\aidlc-docs\construction\patient-support-app\functional-design\patient-screen-layout.md
のファイルの下部に画面遷移などへの変更・補足指示を記載したので、その変更に合わせ、このファイルおよび影響ファイルの内容を変更してください"
**AI Response**: ファイル下部の変更・補足指示と現在の設計内容を確認し、関連する設計ファイルにも反映します。まず、この作業に適用されるルールと進行状況を確認します。変更点は、認証失敗時の表示、整理中の部分表示、パスワード再設定、悩みタイトルの編集の4点です。要件・画面設計・データ定義・業務フロー・部品契約まで整合させます。「開店アイコン」は「回転アイコン」、再設定は登録メールアドレス宛てのリンクでパスワードを再設定する意味として反映します。画面配置への反映を終え、関連資料を更新しています。再設定成功時の全端末ログアウトと、タイトル変更が整理内容の失効や件数追加を起こさないことも明記します。末尾の指示原文は履歴として残します。
**Context**: 既存Constructionのレビュー修正として継続。12設計資料・計画・変更報告・状態を更新。原文指示は対象画面資料に保持。表・フェンス・相対リンク・置換文字・差分検査に問題なし。拡張適合詳細はrevision-notes.md。無効セキュリティ拡張を適用省略。実装・実行テスト・承認・次段階移行なし。最終報告：指定ファイルと関連する要件・画面／データ／業務設計を更新しました。認証エラー、整理中表示、パスワード再設定、タイトル編集を反映し、文書間の整合性を確認済みです。

---


## 変更箇所の一覧化
**Timestamp**: 2026-11-02T07:12:53Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/functional-design/patient-screen-layout.md

## Open tabs:
- patient-screen-layout.md: aidlc-docs/construction/patient-support-app/functional-design/patient-screen-layout.md
- patient-support-app-functional-design-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md
- patient-support-app-conversation-mode-questions.md: aidlc-docs/construction/plans/patient-support-app-conversation-mode-questions.md
- domain-entities.md: aidlc-docs/construction/patient-support-app/functional-design/domain-entities.md

## My request:
変更した１６ファイルの変更箇所を表にまとめてください。"
**AI Response**: 変更した16ファイルの差分を確認し、ファイルごとの変更箇所と内容を表にまとめます。Git差分の既存15ファイルと新規計画1ファイルを確認。画面配置、部品、データ、業務規則、フロー、要件、ストーリー、責務、契約、依存、サービス、対応表、変更報告、計画、状態、監査の16行をチャットに提示。
**Context**: 読み取りによる差分確認と監査追記。設計内容の追加変更なし。

---


## UI設計の未確定事項の確認
**Timestamp**: 2026-11-02T07:20:00Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/functional-design/patient-screen-layout.md

## Open tabs:
- patient-screen-layout.md: aidlc-docs/construction/patient-support-app/functional-design/patient-screen-layout.md
- patient-support-app-functional-design-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md
- patient-support-app-conversation-mode-questions.md: aidlc-docs/construction/plans/patient-support-app-conversation-mode-questions.md
- domain-entities.md: aidlc-docs/construction/patient-support-app/functional-design/domain-entities.md

## My request:
今UI設計であいまいなぶぶんはどこ？"
**AI Response**: 現在の画面設計と関連資料を確認し、未確定の箇所と、方針は決まっていて見た目の調整だけが残っている箇所を整理します。対話形式、支援選択手順、がん種選択方式、タイトル仕様、一覧順序、モード変更UI、補助画面詳細、見た目の未確定事項を報告。ユーザー指定済みの認証エラー・整理中表示・再設定条件とは区別。
**Context**: 画面配置・部品・変更報告・業務規則を読み取り確認。設計変更・承認・段階移行なし。

---


## 一問ずつの回答と表示形式の分離
**Timestamp**: 2026-11-02T07:26:49Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/functional-design/patient-screen-layout.md

## Open tabs:
- patient-screen-layout.md: aidlc-docs/construction/patient-support-app/functional-design/patient-screen-layout.md
- patient-support-app-functional-design-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md
- patient-support-app-conversation-mode-questions.md: aidlc-docs/construction/plans/patient-support-app-conversation-mode-questions.md
- domain-entities.md: aidlc-docs/construction/patient-support-app/functional-design/domain-entities.md

## My request:
一問ずつ回答にするけど、表示形式の変更をフロントエンドで対応できる状態にしてください"
**AI Response**: 一問ずつ回答する方式を設計に反映し、質問・回答・進行状態と表示形式を分けます。吹き出しや履歴表示は、保存・AI送信の契約を変えずにフロントエンドで切り替えられるよう、関連資料もそろえます。設計への反映ができました。質問ID・回答・現在位置を共通で管理し、表示部品が吹き出しや質問カードとして描画する構成です。表示を切り替えても、入力や進行状態を保持し、保存・AI呼び出しが発生しないことを検証観点に加えました。
**Context**: 既存機能設計レビュー修正。画面・部品・データ・規則・フロー・要件・契約・計画・報告・状態を更新。文書8資料と差分検証に問題なし。拡張適合はrevision-notes.md参照、無効セキュリティ拡張は省略。実装・段階承認・移行なし。最終報告：一問ずつ回答する方式を設計へ反映し、共通の質問・回答・進行データから表示を差し替える構成としました。表示変更だけでは入力・保存状態・AI呼出しを変えません。文書整合を確認済み、コード実装は未実施です。

---


## 画面構成・入力方式の確定指示
**Timestamp**: 2026-11-02T08:08:42Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/functional-design/patient-screen-layout.md

## Open tabs:
- patient-screen-layout.md: aidlc-docs/construction/patient-support-app/functional-design/patient-screen-layout.md
- patient-support-app-functional-design-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md
- patient-support-app-conversation-mode-questions.md: aidlc-docs/construction/plans/patient-support-app-conversation-mode-questions.md
- domain-entities.md: aidlc-docs/construction/patient-support-app/functional-design/domain-entities.md

## My request:
P05 は別画面に分ける
癌腫は複数選択可能にして「その他」「不明」「回答しない」の選択肢を含めたうえで必須回答にして下さい
悩み一覧はカード形式、保存日時の新しい順でいいと思う
モード表示はスクロール中も固定"
**AI Response**: P05を手順ごとの別画面に分け、がん種の複数選択・必須回答、悩み一覧のカード表示と保存日時順、モード表示の固定を設計に反映します。関連する入力規則・データ定義・画面遷移もそろえます。P05は「悩み入力→抽出案の確認→支援選択」の3画面に分けました。がん種は指定16項目から複数選択でき、1件以上の回答を必須とし、「回答しない」でも先へ進めます。カード一覧の保存日時順と、モード名・変更ボタンの固定表示も反映し、資料間の整合性を確認しています。
**Context**: 7仕様資料・計画・変更報告・状態を更新。文書検証と差分検査に問題なし。拡張適合詳細はrevision-notes.md、無効セキュリティ拡張は適用省略。実装・段階承認・次段階移行なし。最終報告：4点を関連設計へ反映、P05を3画面へ分割、がん種は複数選択・1件以上必須、一覧は保存日時降順のカード、モード名と変更ボタンを固定。

---


## 配置・配色の具体化
**Timestamp**: 2026-11-02T08:16:27Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/functional-design/patient-screen-layout.md

## Open tabs:
- patient-screen-layout.md: aidlc-docs/construction/patient-support-app/functional-design/patient-screen-layout.md
- patient-support-app-functional-design-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md
- patient-support-app-conversation-mode-questions.md: aidlc-docs/construction/plans/patient-support-app-conversation-mode-questions.md
- domain-entities.md: aidlc-docs/construction/patient-support-app/functional-design/domain-entities.md

## My request:
各画面の配置配色について決める"
**AI Response**: 各画面の配置と配色を具体化します。まず正式ロゴと現在の画面一覧を確認し、レビューできる形で共通の色・文字・余白・ボタンと、画面別の配置案をまとめます。ロゴのピンクを基調に、白いカードと淡い背景、濃い文字を組み合わせる案にします。主操作には読みやすい濃いローズ色を使い、患者画面を中心に、運営・研究画面も含めた配置案を作成します。新しく提案する色や寸法は、確認済みの仕様と区別して記載します。共通配色と、患者・運営・研究の各画面の配置案をまとめました。代表的な文字色と背景色の組合せは、コントラストを計算確認済みです。P06の初期表示は「質問カード＋回答欄、履歴は折りたたみ」を提案し、吹き出しへ差し替えられる設計は維持しています。
**Context**: 具体案・計画・質問2件を作成し画面設計・部品・報告・状態を更新。新規配色等の採用回答待ち。ローカルの承認済みUI方針とロゴに基づく提案、外部デザイン規約準拠の検証は実施していない。実装・全体承認・次段階移行なし。最終報告では案と質問ファイルのリンク、共通配色を提示し回答記入を案内。

---


## 配置・配色の承認・決定版作成
**Timestamp**: 2026-11-02T08:27:36Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-visual-design-questions.md

## Open tabs:
- patient-support-app-visual-design-questions.md: aidlc-docs/construction/plans/patient-support-app-visual-design-questions.md
- screen-visual-design.md: aidlc-docs/construction/patient-support-app/functional-design/screen-visual-design.md
- patient-screen-layout.md: aidlc-docs/construction/patient-support-app/functional-design/patient-screen-layout.md
- patient-support-app-functional-design-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md

## My request:
回答完了しました。配置、配色案も承認します。このまま決定版のファイルを作ってください。次にAIの動き方について質問があるので、決定版のファイルを作った後は次には進まず、待機してください"
**AI Response**: 回答を確認し、承認された配置・配色とP06の表示方式を決定版へ反映します。作成後は次の段階へ進まず、AIの動き方についてのご質問をお待ちします。回答1A・2Aを確認しscreen-visual-design.mdを決定版へ更新。白い背景と濃いグレー文字の表現へ明確化し、関連参照・計画・進捗・変更報告を更新。
**Context**: 配置配色のみ承認。質問回答は原文保持。機能設計全体は未承認。実装なし。検証後はユーザー指示に従い次段階へ進まず質問待ち。最終報告：配置・配色の決定版を作成しました。P06は質問カード＋回答欄、履歴は初期状態で折りたたみとして確定。次へ進まず質問をお待ちします。

---


## AI送信時の履歴参照範囲の現状説明
**Timestamp**: 2026-11-02T08:29:49Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/functional-design/screen-visual-design.md

## Open tabs:
- patient-support-app-visual-design-questions.md: aidlc-docs/construction/plans/patient-support-app-visual-design-questions.md
- screen-visual-design.md: aidlc-docs/construction/patient-support-app/functional-design/screen-visual-design.md
- patient-screen-layout.md: aidlc-docs/construction/patient-support-app/functional-design/patient-screen-layout.md
- patient-support-app-functional-design-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md

## My request:
ありがとう、では、AIのAPIに投げるときに、どこまでAI側が過去の履歴を参照するかについて、現状どうなっているかを教えて"
**AI Response**: 現在の設計で、AIへ渡す履歴・参照情報の範囲と、まだ決まっていない点を確認します。設計の変更や次段階への移行は行いません。BR-03と5支援入力表・C06最小入力契約・ドメインを照合。当該支援に必要な本人入力・有効な確認済み参照のみを渡す方針。直近何往復・全文／要約・別の悩みからの引継ぎ・提供元側の履歴保持方式は未確定。画面履歴とAPI入力は別。未適用メモは現状確認にのみ用い、仕様へ反映しない。
**Context**: 現状説明のみ。AI利用先未選定・接続未実装。決定版UI・設計・段階は変更せず質問対応を継続。

---


## 同じ悩み内の履歴送信方式の比較提案
**Timestamp**: 2026-11-02T11:08:35Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/functional-design/screen-visual-design.md

## Open tabs:
- patient-support-app-visual-design-questions.md: aidlc-docs/construction/plans/patient-support-app-visual-design-questions.md
- screen-visual-design.md: aidlc-docs/construction/patient-support-app/functional-design/screen-visual-design.md
- patient-screen-layout.md: aidlc-docs/construction/patient-support-app/functional-design/patient-screen-layout.md
- patient-support-app-functional-design-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md

## My request:
同じ悩みの中で何回かAIを呼び出すとき、その悩み内の過去の入力内容は把握してもらった方が、整合性というかがとりやすいかなと思っているが、その時のAIのコストなども踏まえ何個か案を提案してほしい。"
**AI Response**: 同じ悩み内の整合性を保つ方法を、履歴の渡し方・費用・実装の複雑さで比較します。API料金の仕組みを公式資料で確認し、今の設計に合う候補を提案します。設計への反映はまだ行いません。全文、直近＋確認済み情報、要約＋直近、関連履歴検索の4案を比較。初期は直近＋確認済み情報を基準に、短い対話では全文、長くなったら要約する段階的方式を提案。入力・出力・要約生成費用、キャッシュの条件、要約の否定や修正保持を説明。
**Context**: Google API料金・キャッシュ、Anthropic文脈設計の公式資料を参照。提供元未選定のため円額や削減率は確定せず、仮定例を明記。提案のみ、設計・実装・次段階移行なし。

---


## AI履歴参照の採用指示
**Timestamp**: 2026-11-02T11:12:13Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/functional-design/screen-visual-design.md

## Open tabs:
- patient-support-app-visual-design-questions.md: aidlc-docs/construction/plans/patient-support-app-visual-design-questions.md
- screen-visual-design.md: aidlc-docs/construction/patient-support-app/functional-design/screen-visual-design.md
- patient-screen-layout.md: aidlc-docs/construction/patient-support-app/functional-design/patient-screen-layout.md
- patient-support-app-functional-design-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md

## My request:
じゃあ２の案でお願いします"
**AI Response**: 案②「確認済み情報＋直近の会話」を設計に反映します。直近の会話を含める範囲と、古い回答・未確認のAI案の扱いを明記し、前に例示した「3往復」は未確定の調整値として残します。次の段階には進みません。ai-context-policy.mdへ仕様化し要件・4機能設計・契約を整合。
**Context**: 選択範囲だけ反映。保留メモ全体・要約・全文切替・提供元選定は未適用。8資料と差分検査に問題なし。実装・全体承認・次段階移行なし。最終報告：案②を採用して設計へ反映。直近往復数は今後調整、次段階には進まない。

---
## 機能設計の曖昧点に関する質問対応
**Timestamp**: 2026-11-02T11:14:11Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/functional-design/screen-visual-design.md

## Open tabs:
- patient-support-app-visual-design-questions.md: aidlc-docs/construction/plans/patient-support-app-visual-design-questions.md
- screen-visual-design.md: aidlc-docs/construction/patient-support-app/functional-design/screen-visual-design.md
- patient-screen-layout.md: aidlc-docs/construction/patient-support-app/functional-design/patient-screen-layout.md
- patient-support-app-functional-design-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md

## My request:
現在機能設計においてあいまいな点はありますか？"
**AI Response**: 現行設計・最新状態・回答済み配置配色を確認。曖昧さとして、支援ごとの必須情報とまとめ可能条件、短め／じっくりの具体差、AI必須と手入力代替の境界、タスク別の必要な確認済み情報の選択条件を報告する。明示的な保留として履歴往復数・入力予算・超過時UI、上限案、未成年同意・40歳以降、運営集計条件、研究有効化条件を区別する。配置配色・P05分割・複数がん種・一問ずつ回答は決定済みとして扱う。
**Context**: 質問への現状評価のみ。設計変更・段階完了・承認要求・次段階移行なし。Markdown本文を確認、図・コードなし。監査は追記のみ。

---
## 機能設計・曖昧点確認質問の作成
**Timestamp**: 2026-11-02T11:18:26Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/functional-design/screen-visual-design.md

## Open tabs:
- patient-support-app-visual-design-questions.md: aidlc-docs/construction/plans/patient-support-app-visual-design-questions.md
- screen-visual-design.md: aidlc-docs/construction/patient-support-app/functional-design/screen-visual-design.md
- patient-screen-layout.md: aidlc-docs/construction/patient-support-app/functional-design/patient-screen-layout.md
- patient-support-app-functional-design-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md

## My request:
では、そのあいまいな点を解消するための質問ファイルを作成してください"
**AI Response**: 挙げた曖昧点を具体的に決められる質問ファイルを作成します。既に決定済みの事項は維持し、後続設計で詰める数値や運用条件は区別します。19問に整理しました。支援ごとの「まとめられる条件」から順に回答でき、数値や運用条件には後続で確認する選択肢も設けています。回答が既存仕様の変更につながる箇所も明記しました。最終案内：質問ファイルを作成しました（全19問）。各質問の[Answer]:に選択肢の文字と必要な補足を記入してください。回答後に整合性を確認します。次段階には進んでいません。
**Context**: 質問ファイルと作業計画を作成、チェック・状態を更新。質問番号19件・回答空欄・A/B/その他・相対リンク・Unicodeを検証。Git管理外のためgit diff --checkは利用不可。図・埋め込みコードなし。既存設計本文・承認状態を維持。RESILIENCY適合とPBTの助言／N/Aは計画に記載。無効セキュリティ拡張は読み込み・適用省略。監査は追記のみ。

---
## 機能設計・19回答の分析と追加確認
**Timestamp**: 2026-11-02T11:42:57Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-functional-design-clarification-questions.md

## Open tabs:
- patient-support-app-functional-design-clarification-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-clarification-questions.md
- patient-support-app-visual-design-questions.md: aidlc-docs/construction/plans/patient-support-app-visual-design-questions.md
- screen-visual-design.md: aidlc-docs/construction/patient-support-app/functional-design/screen-visual-design.md
- patient-screen-layout.md: aidlc-docs/construction/patient-support-app/functional-design/patient-screen-layout.md
- patient-support-app-functional-design-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-approval-questions.md

## My request:
回答を完了しました。次に進んでください"
**AI Response**: 回答を確認し、矛盾や追加確認が必要な点を整理します。問題がない範囲は機能設計へ反映し、個別案の作成を選んだ項目はレビューできる形に具体化します。19問すべてに回答がありました。主な方針は読み取れています。追加確認が必要なのは、運営集計の「退会者の扱い・利用目的」と、選択された「他支援からの引継ぎ項目を本人が選ぶ」画面の具体案です。回答の整理と画面案を作成し、確認事項を3問に絞ります。
**Context**: clarification-answer-review.mdに全回答の解釈・反映予定、引継ぎ項目表・P06操作案・上限表・未承認一覧を作成。元19問の回答は保持。質問16Bの未指定2点と9Bの具体案レビューをfollowup-questions.mdの3問へ。原19回答・追加3問の形式・相対リンク・表列・Unicode・末尾空白を検証済み。作業計画と状態を更新。functional-design.mdの「Do not proceed until ALL ambiguities are resolved」に従い、設計正本への一括適用・段階完了は追加回答後へ。RESILIENCY適合／N/A・PBT部分適用と助言は分析資料に記載。無効セキュリティ拡張は適用省略。実装・全体承認・次段階移行なし。
**AI Final Response**: 19問の回答を確認し、回答整理・引継ぎ画面案・未承認項目一覧を作成しました。追加確認ファイルの3問へ回答してください。内容は運営集計の退会者の扱い、利用目的、引継ぎ項目と操作案の確認です。指定ワークフローが曖昧点解消前の先行を禁止しているため、設計本文への反映は追加回答後に行います。

---
## 機能設計・追加回答の確認と設計反映
**Timestamp**: 2026-11-02T11:59:21Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-functional-design-followup-questions.md

## Open tabs:
- patient-support-app-functional-design-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-followup-questions.md
- clarification-answer-review.md: aidlc-docs/construction/patient-support-app/functional-design/clarification-answer-review.md
- application-design-approval-questions.md: aidlc-docs/inception/plans/application-design-approval-questions.md
- unit-of-work-plan.md: aidlc-docs/inception/plans/unit-of-work-plan.md
- unit-of-work-approval-questions.md: aidlc-docs/inception/plans/unit-of-work-approval-questions.md

## My request:
追加質問に回答完了しました"
**AI Response**: 追加3問の回答を確認します。前の19問と合わせて整合性を確認し、確定した内容を関連設計へ反映します。追加3問はすべてAで、前の回答との矛盾はありませんでした。退会者は内部集計から除外し、集計はサービス改善に限定します。本人が選ぶ引継ぎ操作も採用して設計へ反映しています。AI上限など、検証後に決めると回答された数値は暫定案として残します。
**Context**: 追加3A回答原文を維持。決定事項を新設、機能設計7資料・分析資料・要件・ストーリー・アプリ設計5資料へ反映。計画チェック・状態・変更報告更新。3回答・リンク・新規表列・Unicodeを検証し、旧未確定の残存は変更履歴のみと確認。実装・実行試験なし。拡張適合は決定事項に記載。無効セキュリティは省略。現行全体承認ファイルに標準2択を作成し、全体承認は待つ。承認要求はfunctional-design.md Step 8「Do not proceed until the user explicitly approves the functional design」に基づく。個別追加回答を全体承認へ読み替えない。
**AI Final Response**: 追加3問を確認し、前の19問と合わせて設計へ反映しました。支援の最低条件、本人が選ぶ引継ぎ、手入力、文字数上限、内部集計条件を更新しました。機能設計規則が全体の明示承認を求めるため、次段階へ進む前に現行承認ファイルで修正依頼／承認して非機能要件へ進むを選んでください。拡張確認は適合・対象外で阻害所見なし。未実装です。

---
## 機能設計の承認受領・非機能要件開始
**Timestamp**: 2026-11-02T12:04:36Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-functional-design-current-approval-questions.md

## Open tabs:
- patient-support-app-functional-design-current-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-current-approval-questions.md
- patient-support-app-functional-design-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-followup-questions.md
- clarification-answer-review.md: aidlc-docs/construction/patient-support-app/functional-design/clarification-answer-review.md
- application-design-approval-questions.md: aidlc-docs/inception/plans/application-design-approval-questions.md
- unit-of-work-plan.md: aidlc-docs/inception/plans/unit-of-work-plan.md

## My request:
承認を完了しました。次に進んでください"
**AI Response**: 承認欄を確認して機能設計を完了し、非機能要件へ進みます。既存の性能・可用性・復旧目標と保留事項を引き継ぎ、技術選定や費用・AI利用条件を具体化します。機能設計の承認Bを確認しました。非機能要件では、人数・応答時間・月額費用・技術選定・保存地域・運用体制などの15問を用意しました。決まっていない項目は「AIに比較案を作らせる」を選べます。
**Context**: 現行承認質問1Bを確認。機能設計・確認計画の承認チェックを更新し、状態の現在段階をU01非機能要件へ変更。nfr-requirements.md規則と実行計画に従い8観点を評価し、非機能要件計画と質問15問を作成。全問のA/B/その他・空回答タグ・連番・参照リンク・Unicodeを検証。既存99.5%・RTO/RPO10分・Pilot Lightと拡張設定を維持。PBT-09の技術選定は回答後に実施。実装・課金契約・研究／実データ有効化なし。保留メモの適用許可とは解釈しない。
**AI Final Response**: 機能設計の承認を確認し、非機能要件へ進みました。非機能要件の質問ファイル全15問に回答してください。未定の項目はAIに比較案を作成させる選択肢を利用できます。

---

## 非機能要件・削除仕様の確認
**Timestamp**: 2026-11-02T12:27:26Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-questions.md

## Open tabs:
- patient-support-app-nfr-requirements-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-questions.md
- patient-support-app-visual-design-questions.md: aidlc-docs/construction/plans/patient-support-app-visual-design-questions.md
- patient-support-app-functional-design-clarification-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-clarification-questions.md
- clarification-answer-review.md: aidlc-docs/construction/patient-support-app/functional-design/clarification-answer-review.md
- patient-support-app-functional-design-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-followup-questions.md

## My request:
現状、悩みの項目を削除した際、情報は単独で完全削除できますか？（プライバシーぼりしー記載事項にかかる内容です）"
**AI Response**: 現在の設計資料と実装状況を確認。悩みの個別対象削除は設計にあるが、実装は接続テスト画面のみ。削除受付時の利用禁止、本体・派生物7日以内、バックアップを含む35日以内、本文を含まない最小追跡の処理完了後180日以内という設計条件を説明する。外部AI・未接続端末の消去確認と期限実現性は未検証、ダウンロード済みPDFの遠隔消去は行わないため、即時・例外なしの完全削除とは表現できない。法的判断や仕様変更は行わない。
**Context**: 非機能要件質問への回答前の仕様照会。business-rules.md BR-07、business-logic-model.md、domain-entities.md、frontend-components.md、非機能要件質問14、src/App.tsxを確認。通常Markdownとして検証し監査ログへ追記。計画作業の完了・段階変更なし。

---

## 仕様照会：運営者による動作ログの追跡範囲
**Timestamp**: 2026-11-02T12:40:37Z
**User Input**: "# Context from my IDE setup:

## Open tabs:
- patient-support-app-nfr-requirements-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-questions.md
- patient-support-app-visual-design-questions.md: aidlc-docs/construction/plans/patient-support-app-visual-design-questions.md
- patient-support-app-functional-design-clarification-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-clarification-questions.md
- clarification-answer-review.md: aidlc-docs/construction/patient-support-app/functional-design/clarification-answer-review.md
- patient-support-app-functional-design-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-followup-questions.md

## My request:
動作ログってどこまで運営者は追える？"
**AI Response**: 設計上の操作記録は実施者・対象参照・操作・結果・日時・RequestIdであり、稼働観測値と分離する。記録の存在と運営者の閲覧権限を区別し、ログ検索画面・閲覧者・イベント網羅範囲・IPや端末情報等は未確定と説明。運営権限では患者整理本文を取得不可、問い合わせ本文は対応画面で扱う。現状実装は接続テスト画面のみであり、実運用での追跡は未実装。仕様変更・段階移行なし。
**Context**: 機能設計domain-entities.md、frontend-components.md、外部AIプライバシー後続確認資料、アプリケーション設計、src/App.tsxを参照。通常Markdownとして内容を検証。監査ログへ追記のみ。

---

## 機能設計への差戻し
**Timestamp**: 2026-11-02T12:48:30Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-questions.md

## Open tabs:
- patient-support-app-nfr-requirements-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-questions.md
- patient-support-app-visual-design-questions.md: aidlc-docs/construction/plans/patient-support-app-visual-design-questions.md
- patient-support-app-functional-design-clarification-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-clarification-questions.md
- clarification-answer-review.md: aidlc-docs/construction/patient-support-app/functional-design/clarification-answer-review.md
- patient-support-app-functional-design-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-followup-questions.md

## My request:
では、運営者の機能設計が未完了ということなので、一旦非機能設計を止めて、機能設計に戻りましょう"
**AI Response**: 非機能要件を中断し、運営者機能を再確認するため機能設計へ差戻し。状態・非機能要件計画・質問に中断を明記し、運営者機能の再確認計画を作成。既存回答・承認履歴を保持し、修正版の再承認を必要とする。次はログを含む運営機能・閲覧範囲・操作フローの棚卸し。
**Context**: 現在は非機能設計開始前の非機能要件段階であることを確認。通常Markdown・相対参照・チェック項目を検証。実装や新しい閲覧権限の採用は行わない。セキュリティ拡張は無効につき適用省略、その他の拡張設定は維持。今回は段階完了ではなく中断・差戻しの記録。

---

## 運営者機能の質問・画面案作成
**Timestamp**: 2026-11-02T12:58:15Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-questions.md

## Open tabs:
- patient-support-app-nfr-requirements-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-questions.md
- patient-support-app-visual-design-questions.md: aidlc-docs/construction/plans/patient-support-app-visual-design-questions.md
- patient-support-app-functional-design-clarification-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-clarification-questions.md
- clarification-answer-review.md: aidlc-docs/construction/patient-support-app/functional-design/clarification-answer-review.md
- patient-support-app-functional-design-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-followup-questions.md

## My request:
何のファイルを確認すればよいですか？UI含め曖昧な点を解消するので、質問ファイルや案のファイルを作成してください"
**AI Response**: 運営者機能の現行設計を整理した案と、UI・権限・ログ範囲等の21問を作成。先にoperations-functional-review-proposal.mdを読み、patient-support-app-operations-functional-review-questions.mdへ回答する順番を案内。記録範囲、閲覧者、紐付け、検索、書出し、アカウント、問い合わせ、コンテンツ、公開制御、集計、処理状況、例外UI、モック希望を質問化。Aを自動採用せず、回答確認後に設計正本へ反映する。
**Context**: 非機能要件は中断継続。共通UIの承認済み配色と患者本文非開示を維持。21問と21回答欄、相対リンクを検証。図・埋込みコードなしのMarkdownとして事前検証して作成。拡張適合は案へ記録、セキュリティ拡張は無効につき適用省略。段階完了・実装・新権限の採用なし。

---

## ポリシーに基づく機能設計・質問改訂
**Timestamp**: 2026-11-03T11:25:40Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/functional-design/operations-functional-review-proposal.md

## Open tabs:
- operations-functional-review-proposal.md: aidlc-docs/construction/patient-support-app/functional-design/operations-functional-review-proposal.md
- patient-support-app-nfr-requirements-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-questions.md
- patient-support-app-visual-design-questions.md: aidlc-docs/construction/plans/patient-support-app-visual-design-questions.md
- patient-support-app-functional-design-clarification-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-clarification-questions.md
- clarification-answer-review.md: aidlc-docs/construction/patient-support-app/functional-design/clarification-answer-review.md

## My request:
保存しました。相違点を確認したうえで、基本的にプライバシーポリシーに準拠する形にしてください。プライバシーポリシーによる変更点を表にまとめてください。ファイルを変更してください。それによって、運営者機能・UIの確認質問も変えてください。影響がなかったらそのままでいいです"
**AI Response**: 指定md名はなくprivacy policy.txtを発見し原文を照合。16項目の変更表をprivacy-policy-design-changes.mdへ作成。18歳以上・属性任意、目的別最小権限・相談本文限定閲覧、品質改善任意同意、撤回と削除、Responses API／Firebase、独立解析なし、ベータ研究利用なし、権利請求・重要通知・正式版移行を反映。運営案を更新し確認質問を21問から26問へ改訂。影響しない配色・通常編集・基本操作は維持。要件・規則の直接改訂と関連資料から共通差分への優先参照で現在条件を整合。既存回答・承認履歴とポリシー原文は保持。
**Context**: 運営機能の機能設計再確認中。非機能要件中断継続。段階完了・再承認・実装・新規の実データ閲覧有効化なし。Markdown・26質問/回答欄・その他選択肢・相対リンク・文字を検証。Git管理されておらずgit diffは利用不可。拡張適合と後続検証条件は変更表へ記録、無効セキュリティ拡張の適用は省略。提供元の契約・法令の正当性の判断や外部仕様検証は今回行わず、ユーザー文書に基づく設計条件として反映。

---

## 配色変更案の提示
**Timestamp**: 2026-11-05T04:11:41Z
**User Input**: "# Context from my IDE setup:

## Open tabs:
- privacy-policy-design-changes.md: aidlc-docs/construction/patient-support-app/functional-design/privacy-policy-design-changes.md
- operations-functional-review-proposal.md: aidlc-docs/construction/patient-support-app/functional-design/operations-functional-review-proposal.md
- patient-support-app-nfr-requirements-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-questions.md
- patient-support-app-visual-design-questions.md: aidlc-docs/construction/plans/patient-support-app-visual-design-questions.md
- patient-support-app-functional-design-clarification-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-clarification-questions.md

## My request:
色彩を変更します。app_logo.png　をヘッダーロゴとして使用し、その他のアプリ内の色をapp_logo.pngに使用されている色またはそれに類似した色を使用します。使用色について変更案を表でを出してください。"
**AI Response**: app_logo.pngを目視確認し、既存screen-visual-design.mdの配色と比較。ティールを主操作、コーラルをアクセント、黄を注意表示、アイボリーを全体背景とする変更案を表で提示。提案値は厳密な画像抽出値ではなく、文字の読みやすさのために濃淡を調整した近似色。ヘッダーロゴはapp_logo.pngへ変更する案。画像には余白・右側アイコンが含まれるため、旧最大幅88pxでは縮小されすぎる点を説明。
**Context**: 既存機能設計への配色提案のみ。設計正本・アプリ未変更、段階移行なし。共通規則・拡張opt-inと現在状態を確認。セキュリティ拡張は既存無効設定によりスキップ。レジリエンシー／部分PBTは色提案に対象処理がなくN/A。Markdown表・HEX形式を確認。承認質問なし。

---

## 配色・ロゴ変更の設計反映
**Timestamp**: 2026-11-05T04:20:48Z
**User Input**: "# Context from my IDE setup:

## Open tabs:
- privacy-policy-design-changes.md: aidlc-docs/construction/patient-support-app/functional-design/privacy-policy-design-changes.md
- operations-functional-review-proposal.md: aidlc-docs/construction/patient-support-app/functional-design/operations-functional-review-proposal.md
- patient-support-app-nfr-requirements-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-questions.md
- patient-support-app-visual-design-questions.md: aidlc-docs/construction/plans/patient-support-app-visual-design-questions.md
- patient-support-app-functional-design-clarification-questions.md: aidlc-docs/construction/plans/patient-support-app-functional-design-clarification-questions.md

## My request:
ではそちらで実際にこの変更後の配色に該当ファイルの内容を変更してください。app_logo.pngはサイズを変更したので、幅規定の変更話で必要ないです。"
**AI Response**: 配色案を関連する設計ファイルへ反映。screen-visual-design.mdの全色・画面別記述・コントラスト値を更新。requirements.md、frontend-components.md、patient-screen-layout.mdの現行ロゴをapp_logo.pngへ変更し、operations-functional-review-proposal.mdもティールに整合。承認質問・revision-notes.md・状態に現行変更を追記し、過去回答は保持。ロゴ最大幅88px・最大高さ64pxなど寸法は維持。計画チェックボックスを更新。
**Context**: 設計文書変更のみ。旧HEX・旧ロゴ・ピンク／ローズの現行対象への残存を検索し、代表コントラスト値をsRGB式で再計算。Markdown表確認。アプリは接続テストの雛形であり今回の設計変更対象外。Pythonコマンドは起動失敗し変更なし、PowerShellで更新完了。セキュリティ拡張は既存無効設定により省略、レジリエンシーと部分PBTは処理・構成・テスト対象の変更がなくN/A。機能設計の再確認中を維持し、実装・段階移行・追加承認依頼なし。

---

## 機能設計：運営26回答の確認・AI入力注意書き追加
**Timestamp**: 2026-11-05T05:23:05Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-operations-functional-review-questions.md

## Open tabs:
- patient-support-app-operations-functional-review-questions.md: aidlc-docs/construction/plans/patient-support-app-operations-functional-review-questions.md
- privacy-policy-design-changes.md: aidlc-docs/construction/patient-support-app/functional-design/privacy-policy-design-changes.md
- operations-functional-review-proposal.md: aidlc-docs/construction/patient-support-app/functional-design/operations-functional-review-proposal.md
- patient-support-app-nfr-requirements-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-questions.md
- patient-support-app-visual-design-questions.md: aidlc-docs/construction/plans/patient-support-app-visual-design-questions.md

## My request:
確認事項26問に回答完了しました。それとは別にAIリテラシーについてユーザに個人情報を安易にAIに投げないように注意書きみたいなのを記述欄の近くに小さくてもいいから置いておきたいので、それを機能設計に追加して下さい"
**AI Response**: 26問全回答を確認、2C・10B・21B・23Bとその他22問Aを記録。単一権限と別担当公開の両立、限定閲覧、品質改善のコピー範囲、権利請求、通知、移行の未指定事項を追加6問へ整理。独立した注意書き追加は実施し、P05a・P05b・全5支援P06のAI送信対象記述・編集欄直上へ、氏名・住所・電話番号・メール等を入力せず関係性へ置換する文言を常時表示する仕様を追加。14px以上・読み上げ関連付け・入力保持を明記。要件・規則・部品・画面配置・配色・変更報告と進捗を更新。
**Context**: 機能設計規則Step5は曖昧な回答の追加確認を要求するため、未指定の権限・本文閲覧を確定しない。質問21Bの静的HTMLモック希望は受領し確認後の計画へ追記。26回答・追加6問の件数、その他選択肢、新規文書リンク・文字を検証。注意書きはポリシー4条3・4項に対応。拡張適合は注意書き仕様に記録、無効セキュリティ拡張は適用省略。非機能要件中断・既存保護・現行ロゴ配色を維持。段階完了・実装・実画面検証・新しい実データ閲覧有効化なし。

---

## 運営機能：追加6回答の反映のみ
**Timestamp**: 2026-11-05T05:40:04Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/inception/requirements/requirement-verification-questions.md

## Open tabs:
- requirement-verification-questions.md: aidlc-docs/inception/requirements/requirement-verification-questions.md
- privacy policy.txt: aidlc-docs/inception/requirements/privacy policy.txt
- patient-support-app-operations-functional-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-operations-functional-followup-questions.md
- privacy-policy-design-changes.md: aidlc-docs/construction/patient-support-app/functional-design/privacy-policy-design-changes.md
- patient-support-app-operations-functional-review-questions.md: aidlc-docs/construction/plans/patient-support-app-operations-functional-review-questions.md

## My request:
追加質問に回答完了しました。一旦回答内容の反映だけしてください"
**AI Response**: 全6回答Aを確認し、operations-functional-decisions.mdへ単一運営ロールと別アカウント公開確認、案件別の限定本文閲覧、品質改善の撤回前固定コピー継続利用、権利請求の本人確認、通知と移行の条件を反映。責任者・基盤・移行先等は回答Aに明記された未定／有効化保留として保持。関連機能設計・要件・変更報告・計画・状態を整合。元回答を保持し、回答反映のみで停止。
**Context**: 6回答全A・リンク・文字を検証。新規質問・モック作成・全体再承認・実装・非機能要件再開なし。拡張適合とN/Aの理由は回答反映事項に記録、セキュリティ拡張は無効につき適用省略。上位資料への展開チェックは別途記録し、未実施を完了扱いしない。

---

## 機能設計修正：AI応答注意事項の条件フィルタリング
**Timestamp**: 2026-11-05T06:03:34Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/functional-design/cancer_treatment_precautions_draft.md

## Open tabs:
- cancer_treatment_precautions_draft.md: aidlc-docs/construction/patient-support-app/functional-design/cancer_treatment_precautions_draft.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md
- screen-visual-design.md: aidlc-docs/construction/patient-support-app/functional-design/screen-visual-design.md
- ai-context-policy.md: aidlc-docs/construction/patient-support-app/functional-design/ai-context-policy.md
- ai-input-privacy-notice.md: aidlc-docs/construction/patient-support-app/functional-design/ai-input-privacy-notice.md

## My request:
C:\Users\khr85\Documents\ai-dlc-v1-test\aidlc-docs\construction\patient-support-app\functional-design\cancer_treatment_precautions_draft.md
これはAI応答に関する注意事項が記載されたマークダウンです。共通事項と癌腫、治療時期、治療内容別の注意が記載されているので、AIに必要な注意書きを渡す形にしたい。がいぶAPIに毎回注意書きを投げる場合、毎回、全文を投げるのはコストなどの問題が発生するので、条件でフィルタリングして、必要な情報だけ、投げられるようにフィルタリングの仕組みをコードとして組んでください。中身の変更はしないので、ハードコードで内容をべた付けして条件分けしてもいいです。この内容を機能設計に記載してください"
**AI Response**: 既存U01機能設計を再開。固定カタログとAND／OR判定コード、複数属性、未取得区別、詳細表の確認条件・前提、入力予算と要求版管理をai-precaution-filtering.mdへ記載し、AI入力方針・規則・モデル・フロー・変更記録を整合。原文SHA-256不変、14がん種224節、設計コード構文、リンク・フェンス・Unicodeを検証。今回は機能設計への記載まで。アプリ実装・実行テスト・API接続は未実施。
**Context**: 機能設計全体承認・次段階移行なし。非機能要件中断を維持。無効のセキュリティ拡張は適用省略。有効拡張の適合・各N/A理由は設計末尾。AI応答は、既存段階確認、構造確認と選別方針、記載完了と検証、最終変更報告。

---

## 機能設計・PP-02の必須回答への修正
**Timestamp**: 2026-11-05T06:09:29Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/functional-design/privacy-policy-design-changes.md

## Open tabs:
- privacy-policy-design-changes.md: aidlc-docs/construction/patient-support-app/functional-design/privacy-policy-design-changes.md
- cancer_treatment_precautions_draft.md: aidlc-docs/construction/patient-support-app/functional-design/cancer_treatment_precautions_draft.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md
- screen-visual-design.md: aidlc-docs/construction/patient-support-app/functional-design/screen-visual-design.md
- ai-context-policy.md: aidlc-docs/construction/patient-support-app/functional-design/ai-context-policy.md

## My request:
/C:/Users/khr85/Documents/ai-dlc-v1-test/aidlc-docs/construction/patient-support-app/functional-design/privacy-policy-design-changes.md
このファイルの内容について、
PP-02の内容は、「不明」「回答しない」を選択できることを任意回答と表現しているため、変更前の必須回答に戻してください"
**AI Response**: 指定文書のPP-02を必須回答に戻し、「不明」「回答しない」も回答として扱うことを明記。同じ文書内の登録・設定・適用条件を整合。Markdown表と差分を確認。文書修正のみで段階完了・次段階移行は行わない。有効な回復力・PBT拡張は今回の文言修正では新規方式・コード・テストを扱わないためN/A。無効なセキュリティ拡張は適用省略。
**Context**: 既存の機能設計への明示的修正依頼。
- [x] PP-02と同一文書内の関連記述を確認。
- [x] 必須回答と非開示選択の区別を反映。
- [x] 差分・Markdown表を検証。

---

## 非機能要件の再開
**Timestamp**: 2026-11-05T07:07:18Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/functional-design/privacy-policy-design-changes.md

## Open tabs:
- privacy-policy-design-changes.md: aidlc-docs/construction/patient-support-app/functional-design/privacy-policy-design-changes.md
- cancer_treatment_precautions_draft.md: aidlc-docs/construction/patient-support-app/functional-design/cancer_treatment_precautions_draft.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md
- screen-visual-design.md: aidlc-docs/construction/patient-support-app/functional-design/screen-visual-design.md
- ai-context-policy.md: aidlc-docs/construction/patient-support-app/functional-design/ai-context-policy.md

## My request:
非機能要件の設計に移ってください"
**AI Response**: 現在の進捗と規則を確認して非機能要件を再開。既存回答を保持し、未回答3項目と待機上限・対応時間帯・国外処理を6問へ整理。計画・状態・質問へ再開を記録。回答後に要件・技術選定成果物を作成し、承認後に非機能設計へ進む。再開確認ファイルの各Answer欄への記入と完了連絡を依頼する。
**Context**: nfr-requirements.md Step 5は「Do not proceed until ALL ambiguities are resolved」、nfr-design.mdの前提は「NFR Requirements must be complete for the unit」。これにより未回答を自動採用せず質問を作成。セキュリティ拡張は無効で適用省略。有効拡張の評価は質問末尾。段階完了・実装・課金・実データ送信なし。

---

## 非機能要件：再開回答の反映と成果物レビュー
**Timestamp**: 2026-11-05T11:02:05Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-nfr-resumption-questions.md

## Open tabs:
- patient-support-app-nfr-resumption-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-resumption-questions.md
- privacy-policy-design-changes.md: aidlc-docs/construction/patient-support-app/functional-design/privacy-policy-design-changes.md
- cancer_treatment_precautions_draft.md: aidlc-docs/construction/patient-support-app/functional-design/cancer_treatment_precautions_draft.md
- revision-notes.md: aidlc-docs/construction/patient-support-app/functional-design/revision-notes.md
- screen-visual-design.md: aidlc-docs/construction/patient-support-app/functional-design/screen-visual-design.md

## My request:
質問回答完了しました。次に進んでください"
**AI Response**: 6回答とポリシー第8条を照合。OpenAI Docsスキルを使用し公式情報を調査、非機能要件書・技術選定書・費用試算を作成。通常API2秒、AI／PDF60秒、平日10〜17時日本時間・メール、7日／35日／180日、合成データ開始を反映。国内優先と認証米国処理、OpenAI保持、24時間RTOと体制、Pilot Lightの成立条件を明記。fast-checkを選定し、設定・依存導入はコード生成に残す。GPT-5 mini／GPT-5.4 nanoは公式のDeprecated表示を確認して推奨から除外。リンク・Markdown表・Unicode・AI費用3シナリオとCloud Run算式を確認。承認質問を作成し、修正依頼／承認して非機能設計へ進むの2択を提示する。
**Context**: 非機能要件の成果物作成まで完了、段階承認は未受領。規則construction/nfr-requirements.md Step 8「Do not proceed until the user explicitly approves the NFR requirements」により新しい成果物の承認を待つ。回答完了の指示を未作成成果物の事前承認にはしない。実装・契約・依存導入・実データ送信なし。回復力15規則と部分PBTの段階適用を成果物に評価。セキュリティ拡張は無効につき適用省略。説明した内容は回答反映、調査結果、費用とレビュー準備、最終成果物案内。

---

## 非機能要件の不明点と他設計書の照合
**Timestamp**: 2026-11-05T11:29:28Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md

## Active selection of the file:
# U01 非機能要件

作成日：2026-11-05。状態：レビュー案。既存15回答と[再開6回答](../../plans/patient-support-app-nfr-resumption-questions.md)を反映。段階承認・実装・目標達成の実測は未実施。

## 根拠・優先順位

[プライバシーポリシー](../../../inception/requirements/privacy%20policy.txt)、[最新の設計差分](../functional-design/privacy-policy-design-changes.md)、[運営決定](../functional-design/operations-functional-decisions.md)、[AI入力方針](../functional-design/ai-context-policy.md)、[注意事項選別](../functional-design/ai-precaution-filtering.md)を入力とする。PP-02の訂正に従い属性は必須回答で、「不明」「回答しない」も有効な回答。旧資料のスキップ可記述に優先する。

再開回答は1A、2A（平日・10-17・日本・メール）、3A、4B（ポリシー準拠）、5A、6A。質問4Bは参照先が既存ポリシーとして特定でき、第8条に7日・35日・180日の根拠があるため追加の期限質問は不要。旧質問13〜15の未回答は再開質問3〜5で補完する。

## 規模と測定条件

- 登録100人以内、同時利用20人以内。1日10人が各5件の新規相談を作成し、半年後も同様。30日では1,500件／月、半年を180日とすると9,000件。既存相談の再開は別途負荷に含める。
- 同時利用人数からリクエスト毎秒やAI同時呼出数を算出したことにはしない。負荷試験案は20仮想利用者が一覧・確認保存・再開を混在させ30分継続、立上げ5分。操作間隔・各操作比率は非機能設計で明記する。
- 通常APIとAI・PDFを別集計する。成功応答だけを抜き出して性能達成とせず、試行数・成功率・失敗種別・待ち行列時間・コールドスタート有無を併記する。未測定の数値を達成済みとしない。

## 要件と受入確認

| ID／元要件 | 要件 | 検証・証跡 |
| --- | --- | --- |
| NF-01／NFR-01 | 日本語・スマートフォン対応。キーボード操作、読み上げ通知、入力保持、処理中表示。患者画面のAI入力注意書きは常時表示 | 登録→相談→一問ずつの回答→保存→再開→PDF→削除を実機・画面操作で確認 |
| NF-02／NFR-02 | 本人・役割・目的・案件許可・現在の同意／削除状態をサーバーで検証。単一運営ロールでも全本文閲覧不可 | 他人のID、直接URL、権限取消、同意撤回と取得の競合を拒否。本文なし監査 |
| NF-03／NFR-03 | 登録100人・同時20人を初期検証容量とする。通常APIの95%が2秒以内 | 合意した負荷条件でAPI受付から応答完了まで測る。ブラウザー描画・AI・PDF・メールは別指標 |
| NF-04／NFR-03 | AI・PDFの利用者待機上限は各60秒。入力を保持し、時間切れを成功や確定失敗と混同しない | サーバー期限・外部呼出し・画面待機を総時間内へ配分。成否不明の再実行で二重生成・二重更新を起こさない |
| NF-05／NFR-04 | 保存済み永続データのRPO最大10分、障害発生からRTO10分。Pilot Light方針を継承 | 認証・保存・患者・運営・集計の復旧とデータ時刻を測定。未送信端末入力は永続データのRPO対象外だが入力保持は検証 |
| NF-06／NFR-05 | 月間99.5%、24時間、計画停止を含む。30日で216分の停止予算 | 認証・整理・保存・PDF・運営主要操作を個別測定。AI必須操作はAI失敗も含む。ベータで無効の研究機能は測定対象外 |
| NF-07／NFR-06 | 本番変更に目的・影響・試験結果・実施者・承認者・復旧条件・事後結果を残す | 変更記録と復旧確認を対応付ける。DB変更を含む切り戻し方式は次段階で選択 |
| NF-08／NFR-07 | TypeScriptの純粋関数・保存変換へ部分PBT。fast-checkを選定し例示テストを併用 | 往復、不変条件、構造化生成器、縮小、seed／pathによる再現、CI実行をコード生成で構築 |
| NF-09／NFR-03・08 | 国内優先、製品ごとの処理・保存・バックアップ・ログ・認証・外部AI・メールの地域を確認 | [技術選定書](tech-stack-decisions.md)の地域例外を説明・同意・契約設定へ反映してから実データ有効化 |
| NF-10／NFR-02・03 | 削除申請後は速やかに新規利用停止、主要環境は原則7日以内、バックアップは原則35日以内。本文なしの最小削除追跡は完了後180日を超えない | 品質改善コピー・由来付き引継ぎ・派生物を含む削除台帳。復元したデータは再削除を適用してから利用可能にする |
| NF-11／NFR-03 | 相談履歴・要約・属性は原則退会まで。品質改善用データは通常相談と同じ期間。研究利用なし | 同意拒否でも基本機能利用可。撤回後は新規取得停止、撤回前固定コピーのみ許可範囲で継続、相談削除・退会時は削除 |
| NF-12／NFR-08 | 保守は寄り添いチーム、平日10:00〜17:00日本時間、メール連絡。通知先アドレスは公開前確定 | 問い合わせ窓口を障害通知先に自動流用しない。時間外対応と休日の扱いは次段階で決定 |
| NF-13／NFR-03 | 費用をAI・実行基盤・DB・認証・保存・監視・メール・待機構成に分けて計測。上限は概算レビュー後に決定 | [試算](cost-and-feasibility.md)。予算通知と利用制限は区別し、監視通知だけで課金が停止すると扱わない |
| NF-14／NFR-03 | AI入力は許可済み最小情報・現在支援の直近履歴・条件一致の注意事項。識別情報の検出・削除／置換を必須とする | 未選択情報、別相談、旧版を混ぜない。カタログ不正・必須情報を含む予算超過時は送信0回、入力保持。検出失敗時の方式は次段階で定義 |

メール受付はp95で5秒以内に永続的な受付結果を返す案を提案する。実際の到着時間は外部配信に依存し別計測とする。画面初期表示は代表モバイル回線でp95が3秒以内という検証案。これらの追加値は本書承認対象であり既存回答の確定値に混ぜない。

## 操作性の試験案

患者はiPhone Safari／Android Chrome、運営はWindows Chrome／EdgeとmacOS Safariを代表対象とし、受入時点の現行・1世代前の主要版を記録する。幅360・390・768・1280px、200%拡大、キーボードのみ、VoiceOver／TalkBackで主要経路を確認する。ブラウザーの自動エミュレーションで実機検証を代替したことにしない。

WCAG 2.2 AAを目標とする案。本文・注意書き・エラー・フォーカスのコントラスト、読み上げ順、処理状態通知、拡大時の欠落、色だけに依存しない表示を確認する。既存の配色・ロゴ寸法は維持し、不適合はレビューに戻す。基準の公式参照：[WCAG 2.2](https://www.w3.org/TR/WCAG22/)。

## 重要度・依存関係

| 対象 | 重要度／停止影響 | 上流・下流 |
| --- | --- | --- |
| 患者SPA・静的配信 | 高／患者が相談に到達できない | 利用端末→配信→認証・バックエンド |
| 単一バックエンド | 高／保存・権限・削除・PDFが停止。運営の公開制御も停止 | SPA→バックエンド→認証・Firestore・OpenAI・メール |
| Firestore・バックアップ | 高／履歴・同意・削除追跡を失う可能性 | バックエンド→DB。復旧先も削除台帳に依存 |
| Firebase Authentication | 高／ログイン・本人判定不能 | SPA／バックエンド→認証。障害時に認証を迂回しない |
| OpenAI | 高／AI整理停止 | 許可済み入力→API→版検証。既存の手入力条件を満たす経路だけ利用可 |
| 運営・内部集計 | 中／問い合わせ・活動確認が遅れる | バックエンド・DB。本文閲覧や公開制御の境界は高として扱う |
| メール・監視 | 高／重要通知と障害検知が遅れる | メール受付／監視→通知先。通常相談の保存まで連鎖停止させない |

各対象へ99.5%・RTO10分を適用し、永続状態がある対象はRPO10分。ステートレス配信・外部AI計算自体にRPOはN/A、生成結果を保存する正本には適用する。外部提供元の復旧を運営が制御できる保証はなく、縮退・復旧範囲を次段階で確認する。

## 実現性上の条件と後続判断

1. 平日日中の人手対応だけでは24時間のRTO10分を満たせない。自動復旧と時間外体制を設計するか、対象・構成・目標の変更を承認する必要がある。目標は現時点で下げない。
2. Firestoreの日次バックアップだけではRPO10分にならない。PITRは論理破損の復旧候補だが、別地域へのデータ保護・切替とは別。Pilot Lightの待機データ鮮度とRTOを実証する。
3. 国内優先は国内限定ではない。認証・AI・配信・サービス運用データの国外例外を実データ利用前に確認する。
4. OpenAI側保持と主要環境7日削除を同一視しない。ポリシー第5条4項の契約・設定と第8条の範囲を責任者が確認し、両立できなければ構成・契約または説明／要件変更をレビューする。
5. 認証の再設定リンク24時間・最新のみ・全端末失効という既存仕様はFirebase標準機能で達成確認前。標準と異なる場合は独自方式案か機能変更を提示する。

次段階でCI/CD、切り戻し、リリース方式、単一地域／複数地域、障害対応、復旧試験を質問形式で選択する。現在の要件レビューはこれらの選択や実データ有効化を代替しない。

## 試験・公開条件

合成データから開始。通常API負荷・AI60秒・PDF日本語出力、認可拒否、同意撤回・削除競合、バックアップ復元後再削除、遅延結果拒否、注意事項224節との転記・選別一致を確認する。PBTと例示テストの対象は技術選定書に記載。AIの自然さ・繰返し・矛盾・安全性は合成対話で評価し、医学的確認が必要な注意事項原文を承認済みとはしない。

公開前に担当・時間外体制・費用上限・地域例外・外部保持・通常同意文面・ポリシーの名称と適用開始日・試験証跡を確定。責任者未定の本文閲覧・新しい権利開示・実メール・正式版移行は既存の有効化保留を維持。研究はベータ対象外。

## 拡張適合（本段階）

| 規則 | 評価・根拠 |
| --- | --- |
| RESILIENCY-01 | 適合。対象別の重要度・停止影響・依存関係を記録 |
| RESILIENCY-02 | 適合（要件）。既存目標・業務根拠を維持し、体制との実現性差分を明記。達成判定は後続 |
| RESILIENCY-03 | 適合（要件）。既存の軽量変更記録・承認・復旧確認を継承 |
| RESILIENCY-04 | N/A。配備自動化の選択・構築は非機能設計以降 |
| RESILIENCY-05 | N/A。監視要件は引継ぐが監視設定は未構築 |
| RESILIENCY-06 | N/A。ヘルスチェックの方式・経路は後続設計 |
| RESILIENCY-07 | N/A。稼働資源・クォータ監視は未構築 |
| RESILIENCY-08 | N/A。地域トポロジーはユーザーが次段階で選択 |
| RESILIENCY-09 | N/A。負荷条件案は記録、スケーリング設定は後続 |
| RESILIENCY-10 | N/A。60秒・成否不明・入力保持を要件化、回路遮断等の方式は後続 |
| RESILIENCY-11 | 適合（要件方針）。Pilot Light維持、費用・データ保護・時間外対応の成立条件を明記。実装適合は未判定 |
| RESILIENCY-12 | N/A。保持期限は要件化、実バックアップ・複製設定は後続 |
| RESILIENCY-13 | N/A。切替・切戻し手順は選択後に具体化 |
| RESILIENCY-14 | N/A。復旧試験方式の選択と実施は後続 |
| RESILIENCY-15 | N/A。寄り添いチームと時間帯は確定、障害対応プロセスは次段階で確認 |
| PBT-02・03・07・08 | 各N/A。コード・試験未生成。必須の往復・不変条件・生成器・再現性は後続要件に明記 |
| PBT-09 | 適合（本段階のフレームワーク選定）。fast-checkを選定。依存追加・設定・実行の検証はコード生成で必須、未実施を完了扱いしない |
| PBT-01・04・05・06・10 | 助言。選別不変条件・重複拒否・モデル比較・例示テストを引継ぐ |
| セキュリティ拡張 | 無効・適用省略。元の認証・権限・最小送信・秘密保護は維持 |

本書と関連成果物はMarkdown文章・表のみ。図・埋め込みコードなし。リンク・表の列・回答反映・数値整合を検証する。

## Open tabs:
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- tech-stack-decisions.md: aidlc-docs/construction/patient-support-app/nfr-requirements/tech-stack-decisions.md
- patient-support-app-nfr-resumption-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-resumption-questions.md
- privacy-policy-design-changes.md: aidlc-docs/construction/patient-support-app/functional-design/privacy-policy-design-changes.md

## My request:
非機能要件書で、以下の不明点が浮上したが、これらは他の設計書に記載があるか確認してください

- **復旧目標（NF-05・12）**：RTO／RPO各10分は、リージョン全体や外部サービスの障害にも適用するか。対象操作と時間外の復旧担当はどこまでか。
- **復元時の削除・撤回（NF-05・10・11）**：バックアップ取得後の削除・同意撤回・権限取消しをどう復元先に反映し、何をもって安全に再開できると判断するか。
- **月間99.5%（NF-06）**：停止時間と操作成功率のどちらで判定するか。利用がない時間帯や監視データが欠けた時間はどう数えるか。
- **AI・PDFの60秒（NF-04）**：いつからいつまでを測るか。時間切れで成否が分からないとき、再試行・遅れて届いた結果・AI利用回数をどう扱うか。
- **AIへの送信停止（NF-02・14）**：識別情報の検出に失敗したときや、送信と同意撤回・削除が重なったとき、どの時点で送信や結果の保存を止めるか。
- **保持・削除期限（NF-09〜11）**：7日・35日・180日の起算点、対象データ、例外は何か。一時PDFや外部AI・認証・メールの記録にはどの期限が適用されるか。
- **受入試験の条件**：通常APIのp95は操作別に判定するか。メール受付5秒・初期表示3秒・WCAG 2.2 AAの対象と合格条件は何か。
- **認証・旧データ**：再設定リンクの24時間・最新のみ・全端末失効をどう検証するか。旧版で属性をスキップした利用者には、いつ回答を求めるか。"
**AI Response**: 8項目を機能設計・アプリケーション設計・要件・回答記録と照合。design-coverage-review.mdへ根拠と未定義を記録。削除期限・一時PDF24時間・AI成否不明計数・復元後開放禁止・認証検証観点は既存記載あり。障害範囲・時間外担当・欠測判定・60秒区間・AI送信競合・外部期限・受入条件・旧属性移行は不足。スキップ可の旧文残存も確認。調査結果を報告し新仕様採用・承認・次段階移行なし。
**Context**: 回復力・PBTは新構成／コード／試験生成なしの段階適用を照合結果末尾に記録。セキュリティ拡張は無効につき省略。

---

## PP-02関連資料の整合修正
**Timestamp**: 2026-11-05T11:37:16Z
**User Input**: "**属性をスキップ可能とする旧文が複数資料に残っています**。最新のPP-02が優先しますが、実装時の混乱を防ぐため整合修正が必要です。  該当ファイルを変更してください"
**AI Response**: "PP-02と旧記述の該当箇所を確認し、属性回答の扱いを資料間で統一します。画面・入力検証・業務規則のスキップ可を修正し、要件・冒頭注記・運営決定を整合。過去の回答原文・監査・ポリシー原文は保持。"
**Context**: 非機能要件承認待ちのまま既存資料を整合修正。図・コード・リンク追加なし、Markdown表の列区切り数を保持。RESILIENCY-01〜15は今回信頼性設計・実装を変更しないため各N/A。PBT-02・03・07・08・09はコード・テスト未変更のため各N/A、助言は維持。セキュリティ拡張は無効のため適用省略。

- [x] 最新PP-02・状態・旧文を照合。
- [x] 要件・画面・部品・業務規則・運営決定・適用注記を修正。
- [x] 残存検索と表構造を確認。旧利用者移行は未定を維持。

---

## 非機能要件・未解決8項目の解決案
**Timestamp**: 2026-11-05T11:50:05Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/nfr-requirements/design-coverage-review.md

## Active selection of the file:
# 非機能要件の不明点と既存設計の照合

確認日：2026-11-05。ユーザー指定8項目を、機能設計・アプリケーション設計・要件・回答記録・非機能要件成果物へ照合した。監査履歴や旧提案だけの記述を現行決定とは扱わない。本書は調査結果であり、新しい仕様の採用・段階承認ではない。

## 1. 復旧目標：一部記載、障害範囲は未定義

[要件定義NFR-04・05](../../../inception/requirements/requirements.md)には全機能のRTO／RPO各10分、24時間・操作別99.5%、認証・整理・保存・PDF等の主要操作、AI必須操作でのAI障害算入がある。[業務規則のNFR対応表](../functional-design/business-rules.md)も継承している。

ただし「AI障害を可用性に含める」は「外部サービス自体を10分以内に復旧する保証」と同義ではない。地域全体障害・外部サービス障害までRTO10分を適用するか、対象操作の完全な一覧、障害発生時刻の認定、時間外担当・代行先・通知先は未定義。[非機能要件](nfr-requirements.md)の平日10〜17時・寄り添いチーム・メールが今回確定した体制であり、時間外担当を補完する他資料は見つからない。

## 2. 復元時の削除・撤回：業務上の再開禁止条件は記載済み

[業務フローの削除節](../functional-design/business-logic-model.md)には「復元後は最新削除・撤回記録の再適用が済むまで開放しない」と明記。[BR-07](../functional-design/business-rules.md)には再試行・復元で起算点を更新しないこと、再反映に必要な追跡をバックアップ対応完了まで保持することがある。[ドメインの削除追跡](../functional-design/domain-entities.md)には元別消去結果・本人対応付け・版・要求状態を記載。

未定義なのは、最新の台帳自体をどう障害から守るか、復元時点以降の変更をどこから取得してどこまで追い付かせるか、権限取消し・資格失効を復元先へ再適用する具体手順、照合漏れゼロの確認方法、再開を承認する責任者。削除・撤回の再適用条件はあるが、全ての権限取消しまで含む再開チェックリストはない。

## 3. 月間99.5%：時間ベースの意図あり、判定式は未定義

[NFR-05](../../../inception/requirements/requirements.md)は24時間・計画停止算入・30日で216分の停止許容とし、外部定期確認と要求成功記録の併用、操作別測定、AI障害算入を記載している。したがって時間ベースの可用性を意図する記載はある。

ただし監視区間を停止と判定する閾値、要求成功率との合成方法、利用ゼロ時の判定、監視データ欠測を停止・不明・分母除外のどれにするかは未定義。要求成功率99.5%へ置換してよい根拠はない。

## 4. AI・PDFの60秒：時間境界は未定義、再試行とAI計数は記載済み

60秒は[再開回答1A](../../plans/patient-support-app-nfr-resumption-questions.md)でAI・PDF両方の待機上限として確定。しかしクリック・API受付・外部送信のどこで開始し、保存確定・画面描画・PDFダウンロードのどこで終えるかは未定義。

[BR-03・04](../functional-design/business-rules.md)、[業務フローの生成上限・共通順序](../functional-design/business-logic-model.md)、[GenerationRequest](../functional-design/domain-entities.md)には次の記載がある。

- 同一要求の再送は重複実行せず、成否不明は同一キーで既存結果を照会する。
- 送信済み失敗は消費、送信前不成立を確認できるものだけ非消費。送信した可能性があれば枠を確保し、無条件返枠・再送しない。
- 別の外部送信試行は同じキーでも追加計数し、両上限を超えない。5回／支援・30回／相談は検証案であり保証値ではない。
- 遅延結果は現在の入力・参照版、本人・同意・利用・削除状態の条件を満たさなければ適用不可。

一方、60秒経過そのものによる結果失効／後日取得の可否、成否不明を終結させる期限、再試行間隔、PDF生成の重複排除と遅延一時成果物の具体扱いは未定義。AIの送信試行計数をPDFへ適用する根拠もない。

## 5. AI送信停止：削除後の保存拒否は記載済み、送信競合の確定点は未定義

[PP-07と共通差分6](../functional-design/privacy-policy-design-changes.md)にはC06送信前の識別情報検出・削除／置換を必須とし、検出失敗時処理は後続設計と明記。[注意事項選別](../functional-design/ai-precaution-filtering.md)のカタログ不正・予算超過による送信停止は、識別情報検出器の故障処理とは別である。

[BR-07](../functional-design/business-rules.md)、[業務フロー削除節](../functional-design/business-logic-model.md)、[ドメイン確定境界](../functional-design/domain-entities.md)には削除受付確定後の新規利用禁止・AI保存／適用拒否、確定まで必要な状態・版を検証できない場合の拒否がある。

ただし外部送信の直前確認と実送信を削除／利用停止とどう順序付けるか、すでに送った処理の取消・外部側保持をどう扱うかは未定義。研究の「開示許可確定」境界を外部AI送信へ自動転用しない。

同意の目的を区別する。[BR-06](../functional-design/business-rules.md)では研究のみの撤回は通常AI利用を停止しない。[運営決定](../functional-design/operations-functional-decisions.md)では品質改善撤回は新規取得・追記停止、撤回前固定コピーは許可範囲で継続。品質改善撤回だけで基本相談AIも停止するとは記載していない。

## 6. 保持期限：内部データは具体記載、外部サービス記録の対応は未確定

[BR-07の期限表](../functional-design/business-rules.md)と[ドメイン元別表](../functional-design/domain-entities.md)に記載済み。

| 対象 | 起算点と期限 |
| --- | --- |
| 本体・複製・派生物・問い合わせ・失敗一時物 | 削除受付確定から7日以内 |
| バックアップ内対象 | 同じ削除受付確定から35日以内 |
| 一時PDF・生成中間物 | 生成後24時間以内。対象削除時は先に利用不可、本体7日条件も満たす |
| 最小削除・撤回要求追跡 | 当該要求の処理完了から180日以内 |
| 最小操作追跡 | 操作時点から180日以内。不要な本人情報は本体期限で消去 |

再試行・復元で期限を再起算しない。対象に品質改善コピー・由来付き引継ぎ・派生物を追加するのは[PP-12](../functional-design/privacy-policy-design-changes.md)と運営決定。ポリシー第8条の「原則」と、本文なし削除追跡の上限に従う。

例外は[ポリシー第8条8項](../../../inception/requirements/privacy%20policy.txt)・PP-13・運営決定の法令上の保存義務等。一般運営者だけで延長しない。責任者・根拠・対象・期限・利用制限の確認が必要で、未定のまま新しい例外保持を有効化しない。

外部AIの対象はドメインC06表にあるが、外部側の消去確認方式は後続事項。[技術選定書](tech-stack-decisions.md)はOpenAI保持・認証の国外処理と提供元記録を別確認としており、アプリ内7日を外部全記録へ保証していない。認証サービスの運用記録、メール配送・窓口メールボックスの複製、配信失敗記録それぞれへの期限対応・消去確認は未確定。アプリ内問い合わせC13の7日を外部メールへ自動適用しない。

## 7. 受入試験：観点あり、十分な合格基準は未定義

通常API p95が2秒以内は旧質問4Aで回答済み。[非機能要件](nfr-requirements.md)には20仮想利用者・30分等の試験案と成功率併記があるが、通常APIを操作別p95とする明示規定、API一覧・比率・サンプル数・通信条件・失敗試行の扱いは未定義。可用性の操作別測定を性能p95の決定として流用しない。

メール受付5秒・画面初期表示3秒・WCAG 2.2 AAは今回の提案で、他資料による既決定ではない。機能設計の[画面配置](../functional-design/patient-screen-layout.md)と[視覚設計](../functional-design/screen-visual-design.md)にはフォーカス・読み上げ・エラー・コントラスト等の観点があるが、AA全達成基準の対応表はない。受付対象メールの種類、初期表示の完了イベント、端末・回線・キャッシュ条件、対象ページ・達成基準・不適合の扱いを含む受入表は後続設計が必要。

## 8. 認証・旧データ：認証の検証観点は記載済み、属性再回答の移行は未定義

[BR-02の再設定](../functional-design/business-rules.md)、[PasswordResetRequest](../functional-design/domain-entities.md)、[C03契約](../../../inception/application-design/component-methods.md)、[患者画面の再設定検証](../functional-design/patient-screen-layout.md)に、発行から24時間未満・最新世代・未使用、再送後の旧リンク拒否、同時使用で成功1回、更新・消費・全端末失効まで成功表示しない、再ログイン、秘密を記録しないという期待動作・検証観点がある。

ただしFirebaseで実現する具体方式、時刻制御・複数端末・失効済みトークンの実試験手順は未作成。[技術選定書](tech-stack-decisions.md)でも達成確認前と明記。

旧版スキップ済み利用者に次回ログイン・相談作成・M4前などのいつ回答を求めるかは未定義。PP-02は必須回答への訂正と入力タイミング維持を定めるが、旧利用者向け移行手順ではない。通常の初期設定ゲートから移行時の再回答タイミングを推定しない。画面配置・業務規則・運営決定・視覚設計等のスキップ可の旧文は2026-11-05に最新PP-02へ整合修正済み。旧利用者向けの再回答タイミング・移行手順は引き続き未定義。

## 結論と作業範囲

8項目すべてについて関連記載はあるが、全て解消済みではない。特に削除期限・AI計数・復元後の開放禁止・認証検証観点は非機能要件への参照不足。障害範囲・監視欠測・計測境界・外部送信競合・外部記録期限・受入条件・属性移行は実質的な未定義事項。

今回は照合と結果記録のみ。要件本文の変更・新しい方式選択・承認・次段階移行は行わない。前回の「追加の期限質問は不要」は数値期限がポリシーに存在するという意味に限り、全データの範囲・起算・例外・外部消去の確認まで不要という意味にはしない。

- [x] 8項目を既存設計・要件・回答記録へ照合。
- [x] 記載済み・未定義・旧文残存を区別し参照付きで記録。
- [x] Markdown表・相対リンク・文字を確認し、監査・状態へ記録。

拡張適合：RESILIENCY-01〜03・11は既存目標・責務・変更管理を変更せず参照。04〜10・12〜15は各N/A（調査のみで新しい構成・実装・監視・復旧手順を生成しない）。PBT-02・03・07・08・09は各N/A（コード・テスト・選定変更なし）。助言規則は維持。セキュリティ拡張は無効につき適用省略。段階完了の再宣言ではない。

## Open tabs:
- design-coverage-review.md: aidlc-docs/construction/patient-support-app/nfr-requirements/design-coverage-review.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- tech-stack-decisions.md: aidlc-docs/construction/patient-support-app/nfr-requirements/tech-stack-decisions.md
- patient-support-app-nfr-resumption-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-resumption-questions.md

## My request:
では、これらの未解決点について、既存の仕様を加味して解決案をそれぞれ出してください"
**AI Response**: 既存仕様を照合しunresolved-issues-proposals.mdへ8項目の推奨案・新規数値・変更箇所・要実証事項を記載。復旧範囲と時間外体制、独立保護する安全変更台帳と再開条件、時間ベース可用性と欠測、60秒の計測区間と5分受取期限、送信競合と検出失敗、外部記録の保持台帳、操作別受入試験、再設定世代と旧属性移行を提案。Firebase復旧・セッション管理・WCAGの公式情報を参照。外部障害RTO例外と移行時ゲート例外は仕様変更案として明示。要件正本への採用・承認・実装・次段階移行なし。
**Context**: 既存の10分・99.5%・60秒・削除期限を無断変更せず、成立に必要な構成・運用条件を提示。提案文書のリンク・表・Unicodeを検証。規則別適合は提案末尾、セキュリティ拡張は無効につき省略。

---

## 未解決点の解決案・レビュー反映
**Timestamp**: 2026-11-05T12:03:45Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/nfr-requirements/unresolved-issues-proposals.md

## Active selection of the file:
# 未解決8項目の解決案

2026-11-05。状態：提案・未採用。[照合結果](design-coverage-review.md)の未解決部分を対象とする。既存の数値・本人確認・同意目的・削除期限を維持できる案を優先し、変更が必要な箇所を明示する。要件本文の上書き・段階承認・実装は行っていない。

## 1. 復旧目標：障害種別と復旧範囲を明示する

### 推奨案

- アプリ管理範囲のプロセス・ゾーン・配備不具合・論理破損をRTO10分／RPO10分の対象とする。対象操作はログイン、一覧／相談再開、入力・確認済み結果の保存、AI整理、PDF生成／取得、問い合わせ受付、運営アカウント操作、記事公開、公開停止／解除、内部3指標とする。削除受付・同意変更の安全な継続も復旧確認に含める。
- 復旧の開始は監視で認定した最初の失敗時刻。実障害時刻がログ等で特定できた場合はそちらへ遡る。検知時間をRTOから除外しない。終了は対象操作の合成試験と安全性確認が全て成功した時刻。縮退して一部操作だけ動く状態は全体復旧完了にしない。
- リージョン全体障害は別地域のPilot Light候補として評価し、同じ10分を達成できる複製・切替と費用を検証する。採用前に地域トポロジーを選択し、検証できない構成で地域障害対応を保証しない。
- OpenAIやFirebase Authentication等、提供元全体の障害は提供元復旧に依存するため「提供元を10分で復旧する目標」の対象外とする変更案。アプリ側は検知後10分以内に影響表示・対象操作制限・既存条件内の代替経路を整える。AI失敗は既存どおり可用性の停止へ算入し、手入力可能でもAI整理の復旧扱いにしない。別AI提供元や認証迂回を自動追加しない。
- 平日10〜17時の寄り添いチームを通常対応窓口として維持。24時間10分目標を維持するなら、事前承認した自動復旧手順と、夜間休日の一次／二次担当または外部保守契約が必要。役割を提案するだけで担当者が決定したとはしない。体制が用意できない場合は、公開前に時間外RTO緩和等の要件変更を選択する。

### 承認・実証が必要な点

外部サービス全体障害のRTO例外は既存「全機能10分」の範囲変更。地域障害を対象に含めるか、24時間当番費用を負担するかもユーザー判断。目標維持案と範囲緩和案を同時に採用済みとはしない。

Firestoreの日次バックアップ・PITRは論理復旧の手段であり、地域間複製や10分以内の全操作復旧をそれだけで保証しない。[公式復旧資料](https://firebase.google.com/docs/firestore/disaster-recovery)。

## 2. 復元後の再開：安全性に関わる変更は通常データと別に保護する

### 推奨案

1. 削除・同意撤回・役割取消し・資格失効・利用停止に、対象・目的・世代・変更順序・確定時刻・要求IDを持つ最小限の変更台帳を設ける。本文やメールアドレスは台帳へ転記しない。既存C03／C04／C09の正本責務は変更せず、復旧用の確定証跡を記録する。
2. 台帳は復旧元の相談DBと同じバックアップだけに置かず、選択した障害範囲を共有しない保護先へ確定証跡を保存する。確定済み安全変更は失わせないことを目標とし、一般相談データのRPO10分とは区別する。複数保存先間の確定を単一DBトランザクションだけで保証できるとはしない。
3. 未確定は成功表示しないが、削除等の要求を受けた時点で可能な範囲の利用禁止を先行する。正本／保護先への記録途中で障害が起きた対象は復旧時も利用不可。保護先へ届かなかった末尾が存在し得る場合、当該時間帯・対象を特定できるまで復元先を開放しない。安全な履歴を証明できなければRTOより利用禁止を優先し、目標未達として記録する。
4. 復旧先は非公開で立ち上げ、復元時点から切替前の確定済み最終順序までの変更を再適用する。元の削除期限・撤回版・資格失効世代を保存し、再試行で起算し直さない。旧主系を停止・書込遮断して二重主系を防ぐ。
5. キャッシュ・集計・品質改善コピー・一時PDF・既存要求の適格性を再評価する。権限を過去状態から戻さず、確認不能な対象は拒否。旧端末は再認証し、サーバーの現在権限と失効世代を照合する。

### 再開条件案

- 台帳の欠番・未確定末尾がなく、切替直前の確定順序まで反映した証跡がある。
- 対象元ごとの削除・同意・権限・資格世代が一致し、期限超過は別途処理・報告されている。
- 削除済み相談取得、撤回後の新規品質改善取得、取消済み運営権限、旧ログイン資格、旧AI結果の保存が全て拒否される。
- 許可された通常操作が成功し、旧主系への要求が遮断されている。
- 復旧実行担当と別の再開確認担当が証跡を確認する。既知の障害で全条件を機械判定できる場合だけ事前承認済み自動復旧を許可する。データ復元で確認不能事項が残る場合は時間外でも自動開放しない。

保護先・確定プロトコル・担当割当は設計と障害注入試験で実証する。これは台帳のRPOを厳しくする追加提案であり、単に「再適用する」と記載して解消済みにしない。

## 3. 月間99.5%：時間ベースの操作別指標へ統一する

### 推奨案

- 月はAsia/Tokyoの暦月。操作別に「1－利用不能時間／月の全提供時間」で計算する。計画停止を分母から除外せず、30日なら停止予算216分を維持する。
- 主要操作は1分区間で合成監視を実施。成功は必要な保存・権限・結果整合まで確認できた場合とする。失敗した区間は停止として数える。警報は連続2回で発報しても、停止の起点は最初の失敗区間へ遡る。
- 利用者ゼロでも合成監視で判定する。正常な定期監視はあるが正当な実要求だけ失敗した場合も調査し、サービス側障害と確認できた区間は停止へ訂正する。入力不正・正当な認可拒否は障害にしない。
- 監視欠測は「不明」と区別表示しつつ、達成率の下限計算では停止相当とし分母に残す。事前に定義した独立監視の同じ操作・区間の証跡で正常を確認できた場合のみ訂正可能。都合のよい要求1件だけで全区間を正常にしない。
- 要求成功率は別の補助指標として報告し、時間可用性と平均・加重合成しない。操作ごとの達成率と全操作中の最低値を表示し、一部停止を全体平均で隠さない。

AIを含む監視は合成データ・小さい固定入力を使用する。毎分の実AI呼出しは30日で43,200回／経路となるため、監視費用を別途見積もる。費用節約のためAI部分を低頻度にする場合は、その監視間隔と区間推定精度を再提案し、スタブ監視だけでOpenAI依存込みの99.5%を測定したとはしない。

## 4. 60秒：画面待機と処理要求の寿命を分離する

### 推奨案

- 開始は入力検証後に本人の操作を受け付けて要求を送出したブラウザー単調時計の時点。終了はAIなら未確認案を画面に描画して確認可能になった時点、PDFなら取得可能な成果物の準備完了を画面表示した時点。端末へのダウンロード完了は別計測。
- サーバー処理目標は受付から55秒以内、通常の外部AI呼出し打切りは45秒を初期案とし、通信・検証・保存・描画の余裕を持たせる。開始前の待ち行列も60秒へ含める。通信状況による期限超過は入力を保持して状態表示し、処理が成功したと断定しない。
- 画面は60秒で待機表示を終了し「結果を確認中」へ移る。既存要求IDの状態照会は2秒・5秒・10秒、その後30秒間隔を上限案とし、タブ非表示時は停止または低頻度化する。状態照会は外部AI再送でもAI回数消費でもない。
- 60秒経過だけでは現在版に合致する結果を失効させない。受付から5分以内に到着し、本人・同意・削除・公開状態・入力版・参照版を再検証できた結果のみ保存し、本人が改めて確認する。自動的に確認済み・完了にはしない。
- 受付5分でアプリの要求を終端化する。外部成否不明なら「期限終了・外部成否不明」のまま終える。成功未確認を確定失敗へ書き換えない。以後の遅延本文を保存・適用せず一時物を消去する。処理取消を試みても外部側の実行・課金停止は保証しない。
- AI枠は既存規則どおり、送信可能性がある試行は消費相当を維持し、期限終了で返枠しない。新しい試行は別試行として残り枠内・本人操作で許可し、旧試行を再開しない。旧要求の同一キーは終端状態を返す。
- PDFも本人・対象Snapshot版・要求キーで重複排除し、同じ要求は既存成果物／状態を返す。新しい生成試行でもAI枠は消費しない。5分後の遅延成果物は破棄し、一時物の24時間期限を延長しない。

5分・45秒・55秒・照会間隔は新規提案。外部APIの応答回収機能・実行環境の制約を確認し、回収不能時は安全な終端状態を維持する。

## 5. 識別情報検出失敗と送信競合：拒否を既定にする

### 推奨案

- 識別情報除去はサーバー内で行い、検出のために未処理本文を別の外部AIへ送らない。故障・タイムアウト・処理結果の検証失敗は外部送信0回、入力保持、再試行または手入力経路へ案内する。注意書き表示や本人の再送操作だけで検出を迂回しない。
- 通常利用に必要な同意、Account利用状態、削除世代、入力・参照版を要求へ固定し、送信直前と保存確定時に再検証する。確認不能も拒否。研究／品質改善の撤回だけで通常相談AIを止めない既存方針は維持。
- 対象アカウント／相談の送信と削除・利用停止を、共通の制御経路で直列化する。送信待ちは削除受付で破棄し、受付後に新たなネットワーク送信を開始しない。送信前に発行した許可だけを根拠に、受付後に送信する方式は不可。
- ただしDB更新と外部HTTP送信を完全に原子的にはできない。通信開始前後にプロセス停止・ネットワーク分断が起きた場合は送信済みの可能性として扱う。削除確定より先に送信を開始した要求は取消を試みるが回収保証はしない。削除受付後は結果保存・適用を常に拒否する。
- 直列化は単一プロセス内のメモリロックだけに依存させず、複数インスタンス・期限切れ実行者・再起動を含め、送信経路の排他と旧実行者遮断を実証する。厳密な送信開始前後の境界を保証できない構成では「削除後の外部送信ゼロ」を保証と記載せず、境界を変更して再確認する。
- 削除受付を長時間遅らせない。ネットワーク送信開始との短い順序判定だけを調整し、最大調整時間は2秒案。順序を確定できなければ新規送信・利用を停止して保留とし、本人へ受付状態を正確に示す。

検証は送信直前・送信開始直後・応答直前・保存直前で削除／停止を割り込ませ、外部試行数・保存拒否・枠消費を確認する。完全な匿名化を保証する案ではない。

## 6. 保持期限：データ種別ごとの台帳と削除証跡を定義する

### 推奨案

- 既存の起算点を維持する。本体等7日・バックアップ35日は削除受付確定、削除追跡180日は要求完了、操作追跡180日は操作、一時PDF24時間は生成が起算。復元・再試行・複製で延長しない。
- 一時PDFの未完成物は生成開始から24時間以内、完成物も生成開始から24時間以内とする案。対象削除受付で即時取得不可とし、実消去期限は「生成開始＋24時間」と「削除受付＋7日」の早い方。利用者が取得済みのファイルの遠隔消去は保証しない。
- Firestoreの本体、品質改善コピー、由来付き引継ぎ、一時物、認証アカウント、アプリ内問い合わせ、外部窓口メールの本文・添付・送信済み・ゴミ箱を対象台帳へ列挙する。運営が直接管理するメールの削除対象コピーは原則7日以内、バックアップは35日以内を提案。保管先へ実際に適用できるか確認する。
- システムメールには相談本文を含めず、通知ID・種別・成否等だけを保存。本人対応付けが不要になれば本体期限で除去し、最小操作記録のみ操作から180日以内。メール宛先を180日保持してよい根拠にはしない。
- 外部AI・認証・メール提供元のサービス側ログ／法定保存は、サービス別にデータ項目・管理主体・契約保持期間・削除要求方法・確認できる証跡を台帳化する。「アプリで削除済み」と「提供元の残存期限確認済み」を分ける。提供元が個別消去を受け付けなければ、契約上の期限と限界を記録し、内部7日達成に混ぜない。
- OpenAIには保持最小化設定と任意共有無効を適用する案を維持し、外部保持は実契約を確認する。既存期限と両立しない場合は、保持制御契約・データ送信方式の変更、または明示的な説明／要件変更を採用前にレビューする。外部提供元だから自動的に例外としない。
- 保持例外は指定した個人情報取扱責任者が、根拠・対象・期限・アクセス制限・再評価日を記録し、別の確認者が承認する案。役職名だけでは担当決定にならない。未割当中は新しい例外を有効化しない。期限到来時の自動削除と失敗警報を設け、期限超過を完了にしない。

第8条の期限・例外と第5条の外部保持の関係を、責任者が説明文面と照合する。これは法的適合性の判定ではなく、既存ポリシーに沿う実装・運用案。

## 7. 受入試験：操作ごとに条件と分母を固定する

### 推奨案

| 対象 | 計測・合格条件案 |
| --- | --- |
| 通常API | 一覧・相談再開・下書き保存・確認保存・設定保存・運営検索を個別にp95が2秒以内。バックエンド受付から応答完了。正常入力の予期しない失敗は2秒超として判定し、成功率も別表示 |
| 通常API負荷 | 20仮想利用者、立上げ5分・定常30分、各操作最低200試行。比率は一覧30%、再開20%、下書き20%、確認保存10%、設定10%、運営検索10%。操作間隔2〜5秒。最低試行数不足なら延長し未測定を合格にしない |
| AI／PDF干渉 | 同時利用20人の内訳を通常15人・AI4人・PDF1人として別試験。スタブで基盤負荷、少量の実APIで品質・時間・クォータを確認。スタブ試験を実AI性能の合格に流用しない |
| メール受付 | 対象はシステムの認証・重要通知メール送信要求。許可済み要求のAPI受付から永続キュー／要求台帳への記録までp95が5秒以内。全受付に一意の要求IDと状態がある。到着時間・配信成功率は別指標。手動の窓口メール受信は対象外 |
| 初期表示 | P01・患者トップ・相談再開・運営トップ。ナビゲーション開始から主要データと主操作が利用可能になるまでp95が3秒以内。プレースホルダーだけでは完了にしない |
| 端末・回線 | 合意した代表iPhone／Android／PCを記録。モバイル試験は下り10 Mbps・上り2 Mbps・RTT100 msを提案。初回キャッシュなし／再訪ありを別集計。各画面・各条件最低100回、失敗を除いてp95を改善しない |
| アクセシビリティ | 初期提供する全画面・ダイアログ・エラー・処理中状態と登録から削除までの完全な経路に、WCAG 2.2のA・AA達成基準を対応付ける。適用基準の未達0、N/Aは根拠を記録。自動検査に加えキーボード・読み上げ・拡大・フォーカス・入力支援を手動確認 |

計測ツールと百分位計算法を固定し、時間切れ・予期しない失敗を閾値超として順位付けする。ネットワーク切断等の障害注入は通常性能と別の試験群として必須実施。重複保存・越権取得・削除後利用等の整合性違反は1件でも不合格。速度の良さで相殺しない。

WCAGのAA適合は適用するAとAAの全達成基準、画面全体と完全な処理経路を対象とする。色や読み上げの数例だけでAA適合とはしない。[公式WCAG 2.2](https://www.w3.org/TR/WCAG22/)。

## 8. 認証と属性移行：再設定の受付世代と旧資格失効をアプリでも管理する

### 再設定の推奨案

- Firebase標準の再設定リンクだけで24時間・最新のみを満たすとは仮定しない。標準機能で要件どおりに制御できなければ、アプリ管理のランダムな単回トークンと発行世代を持つ再設定入口を設計する。トークンはハッシュ等の検証値だけを保存し、パスワード正本はFirebaseに置く。
- 発行・再送成立は耐久的なメール受付と最新世代更新に対応付ける。旧世代・使用済み・発行から24時間以上は拒否し、配送失敗・再試行で旧世代を復活させない。再設定URL・生トークン・新パスワードはログや解析へ記録しない。
- トークン消費開始で対象アカウントを再設定処理中として旧資格のアプリアクセスを遮断する。Firebaseのパスワード更新、更新トークン失効、アプリの資格世代更新を追跡し、全て完了して初めて成功を返す。複数システムなのでDBの一回のトランザクションで原子的に終わると説明せず、途中失敗時は処理中・旧資格拒否を維持して同じ要求を照合・再開する。
- 各APIはFirebase資格に加えAccount状態・アプリ資格世代を確認する。処理開始前のログイン資格は拒否。更新後でも処理完了前のログインを有効化せず、自動ログインしない。運営の利用停止等を再設定で解除しない。
- Firebaseの管理資格を使う独自入口は攻撃面が増えるため、レート制限・登録有無の秘匿・CSRF／トークン漏えい対策・メール所有確認を含めて設計する。標準の公開パスワード再設定経路が残る場合も、既存アプリ資格を再利用できないことを検証する。制御できなければこの案を採用せず、認証仕様または構成の変更案へ戻す。

Firebaseの失効APIと失効検証は利用できるが、アプリの最新リンク世代・24時間・処理中アクセス拒否を含む一体動作は追加設計である。[公式セッション管理](https://firebase.google.com/docs/auth/admin/manage-sessions)。

### 試験案

発行23:59:59と24:00:00、再送前後、同時使用、別端末の旧IDトークン／更新トークン／アプリCookie、更新途中の障害、返信喪失後の同一要求、停止中アカウント、ログへの秘密混入を確認する。時間境界は注入可能なサーバー時計で単体試験し、実Firebaseへの失効・更新・複数端末の試験を別に行う。

### 旧属性の推奨移行案

- 初回の更新後ログインで、現在必須の年齢層・がん種の回答状態を検査し、不足があれば新規相談・AI生成・確認済み保存の前に再回答を求める。「不明」「回答しない」は有効回答とする。具体情報の開示は強制しない。
- 既存履歴閲覧、同意変更、属性削除、相談削除、退会、問い合わせ、既存有効版PDF取得は再回答なしで利用可能とする案。権利行使や既存データ取得を再回答で妨げない。これは既存の初期設定ゲートに対する移行時の例外なので明示承認対象。
- 治療時期・治療内容は共通プロフィールへ移さず、当該相談で次に編集・AI生成・M4へ進む際に現状確認する。治療中なら治療内容の有効回答を要する。他相談に一括適用しない。
- 削除済み属性を旧履歴から自動復元せず、未回答を「不明」へ自動変換しない。旧Snapshotの版を一括書換えしない。回答変更後は実際の依存先だけ再確認対象にする。
- スキーマ版・回答状態・移行完了版を管理し、画面を迂回したAPIにも同じ判定を適用する。移行は合成の旧版データで試験し、実際に旧利用者がいなければ移行不要として根拠を記録する。

## レビュー対象と検証

本書は解決案の提示であり、未解決項目を採用済みに変更する文書ではない。特に外部障害のRTO例外、地域間待機構成、24時間担当、保護台帳の無損失条件、60秒後の5分受取期限、移行中の閲覧等の例外は業務・費用への影響があるため採用判断が必要。担当者名・契約条件・到達性・復旧実測の代わりに設計だけで完了とはしない。

- [x] 8項目の既存制約を確認し解決案を作成。
- [x] 新規提案・既存仕様変更・要実証事項を区別。
- [x] 相対参照・表・文字と数値の整合を確認。

## 拡張の適合（提案作成範囲）

| 規則 | 評価 |
| --- | --- |
| RESILIENCY-01・02・03 | 適合。対象操作・影響と目標変更箇所を明示、無断で既存目標を変更しない |
| RESILIENCY-04 | N/A。CI/CD方式は今回提案対象外、選択を後続へ維持 |
| RESILIENCY-05・06・07 | 設計案に反映。操作監視・欠測・確認条件を提案、監視の設定・実測はN/A |
| RESILIENCY-08・09 | N/A。地域トポロジーと資源スケーリングの採用・配備は未実施。地域間構成を自動確定しない |
| RESILIENCY-10 | 設計案に反映。期限・成否不明・入力保持・外部依存の縮退を提案、実装適合は未判定 |
| RESILIENCY-11・12・13 | 設計案に反映。Pilot Lightの成立条件、台帳保護、復元前後の制御・再開条件を提示。実構成・復旧試験の検証はN/A |
| RESILIENCY-14・15 | 提案に反映。障害割込試験と時間外体制を提示。組織の方式選択・役割割当・実施は未完了 |
| PBT-02・03・07・08 | 各N/A。実コード・生成器・試験は未作成。時間境界・世代・重複・削除後拒否の性質を後続へ引継ぐ |
| PBT-09 | N/A。既存fast-check選定を変更しない |
| その他PBT | 助言。状態遷移・故障注入・例示試験を併用する提案 |
| セキュリティ拡張 | 無効・適用省略。元の認証・同意・最小送信・秘密保護を維持 |

## Open tabs:
- unresolved-issues-proposals.md: aidlc-docs/construction/patient-support-app/nfr-requirements/unresolved-issues-proposals.md
- design-coverage-review.md: aidlc-docs/construction/patient-support-app/nfr-requirements/design-coverage-review.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- tech-stack-decisions.md: aidlc-docs/construction/patient-support-app/nfr-requirements/tech-stack-decisions.md

## My request:
ではその内容で変更してください"
**AI Response**: unresolved-issues-proposals.mdの全8項目へ直前のフィードバックを反映。操作復旧と10分案内を分離、確定証跡と末尾不明時の遮断、部分障害と監視間隔、45秒打切りと回収条件・60秒結果指標と状態指標・5分終端を明記。要求受信／利用遮断確定／削除受付確定を区別し送信禁止は遮断確定からとした。全体削除完了通知と追跡180日起算、ポリシーとメール／PDFの関係、成功率の独立基準・同一相談競合試験、パスワード更新応答喪失と標準経路迂回、属性回答と成人資格分離を追記。文書の提案状態を維持し正本要件の採用・段階承認・実装・次段階移行なし。
**Context**: 解決案文書の修正依頼に対する反映。拡張規則の評価は同文書末尾を維持。提案の改訂が承認されたことを運用構成・契約・要件全体の承認と混同しない。

---

## 非機能要件：解決案採用・資料整理
**Timestamp**: 2026-11-05T12:14:23Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/nfr-requirements/cost-and-feasibility.md

## Open tabs:
- cost-and-feasibility.md: aidlc-docs/construction/patient-support-app/nfr-requirements/cost-and-feasibility.md
- unresolved-issues-proposals.md: aidlc-docs/construction/patient-support-app/nfr-requirements/unresolved-issues-proposals.md
- design-coverage-review.md: aidlc-docs/construction/patient-support-app/nfr-requirements/design-coverage-review.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md

## My request:
/C:/Users/khr85/Documents/ai-dlc-v1-test/aidlc-docs/construction/patient-support-app/nfr-requirements/unresolved-issues-proposals.md　この案で、非機能要件書を変更してください。解決案や比較検討ファイルなどは参照時にややこしくなってしまうので、もう使わないファイルは削除してください"
**AI Response**: "解決案の内容と現在の非機能要件書を確認し、要件書へ反映します。あわせて参照関係を確認し、役目を終えた検討ファイルを整理します。8項目の解決案と費用の前提・概算を要件書へ統合。技術選定・承認参照を修正。解決案・照合結果・費用比較の3資料を削除。担当・契約・地域構成・実証は成立条件として残し、段階承認・移行は行わない。文書リンク・文字・表の整合を検証。"
**Context**: 要件改訂の明示指示を根拠として採用。無効なセキュリティ拡張を省略。回復力01〜03・11は要件適合、04〜10・12〜15は実構築・方式選択前でN/A（要求条件は記載）。PBT09は選定適合、02・03・07・08は実コード・試験未生成でN/A、他は助言。

---

## 非機能要件ファイルの整理状態の確認
**Timestamp**: 2026-11-05T12:17:55Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/nfr-requirements/unresolved-issues-proposals.md

## Open tabs:
- unresolved-issues-proposals.md: aidlc-docs/construction/patient-support-app/nfr-requirements/unresolved-issues-proposals.md
- cost-and-feasibility.md: aidlc-docs/construction/patient-support-app/nfr-requirements/cost-and-feasibility.md
- design-coverage-review.md: aidlc-docs/construction/patient-support-app/nfr-requirements/design-coverage-review.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md

## My request:
非機能要件に関するファイルのうち、実際の設計時に用いる設計書と、草案は区別できるように整理されていますか？"
**AI Response**: "現状は一部区別できるが整理は不完全。現行参照先はnfr-requirements.md（段階承認待ち）とtech-stack-decisions.md（レビュー案）。unresolved-issues-proposals.mdが未採用表記のまま残存し、削除済みdesign-coverage-review.mdへのリンクも残る。cost-and-feasibility.mdとdesign-coverage-review.mdはディスク上に存在しない。承認質問はplans配下で分離済み。非機能設計書は未作成。今回は確認のみでファイル整理・段階移行は実施しない。"
**Context**: 現行ファイル・状態・承認欄・監査履歴の照合。新規要件・設計成果物なしのため拡張の追加適合評価はN/A。監査追記は図・コードを含まないMarkdownとして検証。

---

## 非機能要件の旧草案削除
**Timestamp**: 2026-11-05T12:19:31Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/nfr-requirements/unresolved-issues-proposals.md

## Open tabs:
- unresolved-issues-proposals.md: aidlc-docs/construction/patient-support-app/nfr-requirements/unresolved-issues-proposals.md
- cost-and-feasibility.md: aidlc-docs/construction/patient-support-app/nfr-requirements/cost-and-feasibility.md
- design-coverage-review.md: aidlc-docs/construction/patient-support-app/nfr-requirements/design-coverage-review.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md

## My request:
未採用のものは削除してください"
**AI Response**: "未採用・旧草案の内容と参照先を確認し、現行の要件書へ統合済みの不要ファイルを削除します。残存していたunresolved-issues-proposals.mdを削除。費用比較・設計照合の2資料は既に存在しない。現行の要件書・技術選定書・承認質問と回答履歴は保持。計画・状態を更新し、現行参照を検証。"
**Context**: 明示的に許可された旧資料削除。文書整理のみで実装・段階移行なし。追記内容は図・コードを含まないMarkdownとして事前検証。拡張適合の変更なし（資料削除への各設計・実装規則はN/A、セキュリティ拡張は無効につき省略）。

---

## 非機能要件の障害範囲・手動復旧に関する説明
**Timestamp**: 2026-11-05T12:23:37Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md

## Open tabs:
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- design-coverage-review.md: aidlc-docs/construction/patient-support-app/nfr-requirements/design-coverage-review.md
- unresolved-issues-proposals.md: aidlc-docs/construction/patient-support-app/nfr-requirements/unresolved-issues-proposals.md
- cost-and-feasibility.md: aidlc-docs/construction/patient-support-app/nfr-requirements/cost-and-feasibility.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md

## My request:
非機能要件について、障害復旧はそんなにスピードいらなくて、大きな障害については全体として、６，７時間で復旧できればいいと思っていますが、非機能要件で定義されている障害とは何を指しており、開発者の手作業が必要になるものですか？"
**AI Response**: "現行要件の障害範囲を確認。プロセス停止・ゾーン障害・配備不具合・論理破損・地域全体障害と外部提供元全体障害を区別して説明する。全障害が手作業を要するわけではなく、既知の自動復旧と、不具合修正・データ復元・安全確認等の人手を区別。現行はアプリ管理範囲RTO10分、一般永続データRPO10分、安全変更無損失。大規模障害6〜7時間の意向を受領し、上限7時間の変更案と、月間99.5%の停止予算3時間36分との整合、夜間休日の対応、RPOを別に扱う必要を説明。要件本文の変更・段階移行は未実施。"
**Context**: 承認前の質問への回答。新規成果物や計画ステップの実行なし。回復力拡張は有効として既存要件を参照、セキュリティ拡張は無効につき適用省略。PBTは今回の説明にN/A。監査追記は図・コードを含まないMarkdownとして事前検証。

---

## 大規模障害の復旧目標緩和に伴う変更点の説明
**Timestamp**: 2026-11-05T12:26:17Z
**User Input**: "# Context from my IDE setup:

## Open tabs:
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md
- design-coverage-review.md: aidlc-docs/construction/patient-support-app/nfr-requirements/design-coverage-review.md
- unresolved-issues-proposals.md: aidlc-docs/construction/patient-support-app/nfr-requirements/unresolved-issues-proposals.md
- cost-and-feasibility.md: aidlc-docs/construction/patient-support-app/nfr-requirements/cost-and-feasibility.md

## My request:
大きな障害は12から24時間以内での復旧を目指し、翌営業日まで対応を待つのでも良くしよう。そうすると、非機能要件のなにが変わる？"
**AI Response**: "大規模障害の復旧時間、時間外の保守体制、可用性、復旧構成、案内・制限、復旧試験の変更点を説明。翌営業日着手と発生から24時間以内は休日に両立しないため、翌営業日の対応開始から12時間を目安・24時間以内を目標とする案を明示し、発生からの停止時間も別途記録する。月間99.5%は大規模停止を許容する方針との整合を再検討し、代替値を勝手に確定しない。一般データRPO10分・安全変更無損失は復旧時間緩和とは別扱い。既存Pilot Light固定方針は再評価候補とし、製品・費用・達成を断定しない。今回は変更点の説明であり、未確定の起算点・可用性を要件本文へ確定反映せず、段階承認待ちを維持。"
**Context**: 質問への回答と意向の記録。計画の実行・段階完了なし。回復力拡張の復旧目標と費用整合を参照。セキュリティ拡張は無効につき省略、PBTは説明のみのためN/A。監査追記は図・コードなしのMarkdownとして事前検証。

---

## 大規模障害の復旧目標変更・RPO根拠の確認
**Timestamp**: 2026-11-05T12:31:32Z
**User Input**: "# Context from my IDE setup:

## Open tabs:
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md
- design-coverage-review.md: aidlc-docs/construction/patient-support-app/nfr-requirements/design-coverage-review.md
- unresolved-issues-proposals.md: aidlc-docs/construction/patient-support-app/nfr-requirements/unresolved-issues-proposals.md
- cost-and-feasibility.md: aidlc-docs/construction/patient-support-app/nfr-requirements/cost-and-feasibility.md

## My request:
翌営業日の時間内に対応を開始し、対応開始から12時間～24時間での復旧を目指すでお願いします。データ保護が10分以内は何の根拠があって設定していますか"
**AI Response**: "指定の復旧目標を非機能要件・承認質問・計画・状態の優先変更節に反映。一般データRPO10分は変更なし。根拠は要件分析の補足質問3の10分指定と質問4Aの両方10分の回答。定量比較・製品必須条件による根拠は記録にない。データ損失の許容時間幅であり保護処理の時間制限ではないことを説明。月間可用性の扱いは未解決として段階承認待ちを維持。"
**Context**: ユーザーの明示指示による要件変更。変更本文は文章・箇条書きとして事前検証し、進捗チェックを更新。回復力02は根拠・計測境界を記録、11は既存候補を維持し後続で再評価。可用性整合は未解決で段階完了なし。PBTは今回N/A、セキュリティ拡張は無効につき省略。python実行とapply_patchは失敗し変更なし、PowerShellの追記で4資料へ反映。

---

## RPO緩和と障害中のデータ保護の説明
**Timestamp**: 2026-11-05T12:33:18Z
**User Input**: "# Context from my IDE setup:

## Open tabs:
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md
- design-coverage-review.md: aidlc-docs/construction/patient-support-app/nfr-requirements/design-coverage-review.md
- unresolved-issues-proposals.md: aidlc-docs/construction/patient-support-app/nfr-requirements/unresolved-issues-proposals.md
- cost-and-feasibility.md: aidlc-docs/construction/patient-support-app/nfr-requirements/cost-and-feasibility.md

## My request:
復旧時間を大きな障害発生時に上記の枠に制約を緩めたので、それに合わせて、データ損失も制約を緩めてもいいと思うが、データ保護のシステム上、長時間放置することは良くないの？"
**AI Response**: "RPO緩和は可能だが復旧時間とは独立で、相談履歴等の再入力負担から決める旨を説明。人の復旧着手を翌営業日にすることと自動バックアップ・監視・安全な遮断を止めることを区別。停止中に書込みがなければ待機時間だけで損失が増えるわけではなく、破損・不正アクセス・バックアップ失敗中の継続書込みは被害を拡大し得る。復旧までの期間中に復元点が保持期限で失われない設計、複数世代保持、削除・撤回・権限変更の安全な再適用を説明。具体的RPO変更値は未指定につき要件本文は変更なし。"
**Context**: 概念説明のみ。新しい製品仕様・価格・契約の主張なし。現行の回復力方針を参照、段階完了なし。PBTはN/A、セキュリティ拡張は無効につき省略。監査追記は図・コードなしのMarkdownとして事前検証。

---

## RPOの推奨値に関する相談
**Timestamp**: 2026-11-05T12:34:43Z
**User Input**: "# Context from my IDE setup:

## Open tabs:
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md
- design-coverage-review.md: aidlc-docs/construction/patient-support-app/nfr-requirements/design-coverage-review.md
- unresolved-issues-proposals.md: aidlc-docs/construction/patient-support-app/nfr-requirements/unresolved-issues-proposals.md
- cost-and-feasibility.md: aidlc-docs/construction/patient-support-app/nfr-requirements/cost-and-feasibility.md

## My request:
ではどのくらいにするべきだと思いますか"
**AI Response**: "一般相談データはRPO最大1時間を初期提案とする。登録100人・1日10人程度のベータ規模でも相談の再入力負担があり、半日〜1日分の損失は避けたいという判断。定量的最適値や製品標準ではない。削除・同意撤回・権限取消しの確定済み変更の保護は別条件として維持。復元点の鮮度・障害範囲別の保護・バックアップ失敗を含めて設計と復旧試験で確認し、毎時バックアップだけで1時間達成と断定しない。Google CloudのDR公式ガイドで業務影響に基づくRPOの考え方を確認。推奨のみで要件本文の数値は未変更。"
**Context**: 回復力02の業務影響に基づく提案。段階承認なし、設計・実装規則とPBTは今回N/A、セキュリティ拡張は無効につき省略。文章のみの監査記録として事前検証。

---

## ベータ実利用に合わせた復旧目標の再提案
**Timestamp**: 2026-11-05T12:39:26Z
**User Input**: "# Context from my IDE setup:

## Open tabs:
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md
- design-coverage-review.md: aidlc-docs/construction/patient-support-app/nfr-requirements/design-coverage-review.md
- unresolved-issues-proposals.md: aidlc-docs/construction/patient-support-app/nfr-requirements/unresolved-issues-proposals.md
- cost-and-feasibility.md: aidlc-docs/construction/patient-support-app/nfr-requirements/cost-and-feasibility.md

## My request:
ベータ版は多くて登録50人、継続利用人数は10人ほどだと思う。だからそれに合わせた制約の緩さで大丈夫。ただし、「登録100人・1日10人程度」は対応できるような仕様にはしたいので、そこの表記は変えなくて大丈夫、ただ、実態に合わせた復旧の目安を考えて"
**AI Response**: "仕様容量は維持し、実利用見込みは登録最大50人・継続利用約10人と区別して記録。ベータの損失許容に柔軟な意向を踏まえ、一般相談データRPO最大4時間を再提案。人数から算出された最適値ではなく、半日〜1日分の損失を避けつつ緩和する判断と明示。集中利用時には対話全体・複数人分を失い得る。削除・同意撤回・権限取消し保護は維持。提案を非機能要件末尾へ記録し、RPO10分の確定値置換や段階移行は行わない。Google Cloud公式DRガイドの業務影響に基づく目標設定を再確認。"
**Context**: 実利用見込みの記録と提案作成。チェックボックス更新。文書の文章・箇条書きを事前検証。回復力02は提案根拠記録、方式・実証は後続。PBTはN/A、セキュリティ拡張は無効につき省略。

---

## 復旧条件とRPO最大4時間の確定反映
**Timestamp**: 2026-11-05T12:43:00Z
**User Input**: "# Context from my IDE setup:

## Open tabs:
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md
- design-coverage-review.md: aidlc-docs/construction/patient-support-app/nfr-requirements/design-coverage-review.md
- unresolved-issues-proposals.md: aidlc-docs/construction/patient-support-app/nfr-requirements/unresolved-issues-proposals.md
- cost-and-feasibility.md: aidlc-docs/construction/patient-support-app/nfr-requirements/cost-and-feasibility.md

## My request:
では、その内容で該当ファイルを変更してください"
**AI Response**: "非機能要件書の表・詳細・拡張評価へ一般データRPO最大4時間と大規模障害の翌営業日着手・開始後12〜24時間目標を統合。旧変更追記・未採用提案の重複を解消し、技術選定・承認質問・計画・状態の5資料を更新。容量は登録100人・同時20人・1日10人程度、実利用見込みは登録最大50人・継続利用約10人として区別。確定済み安全変更無損失を維持。現行3成果物の参照先を検証。旧10分の出現は差分優先を説明する履歴参照であり、現行数値は4時間。月間99.5%の扱いは未解決として段階承認待ちを維持。"
**Context**: 文書のみの明示変更。Markdown文章・表の事前検証、計画チェック更新済み。回復力02は目標と根拠記録、11は既存候補を新目標で再評価、設計・実装は後続。PBTは文書変更にN/A、セキュリティ拡張は無効につき省略。段階完了・実装・実バックアップ設定の変更なし。git statusは所有者検査で不可、設定変更せず内容検証。旧条件検出は履歴言及にも一致したため個別に確認。

---
## 現在の未解決・未承認事項の照会
**Timestamp**: 2026-11-05T12:44:54Z
**User Input**: "# Context from my IDE setup:

## Open tabs:
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md
- design-coverage-review.md: aidlc-docs/construction/patient-support-app/nfr-requirements/design-coverage-review.md
- unresolved-issues-proposals.md: aidlc-docs/construction/patient-support-app/nfr-requirements/unresolved-issues-proposals.md
- cost-and-feasibility.md: aidlc-docs/construction/patient-support-app/nfr-requirements/cost-and-feasibility.md

## My request:
現在、未解決、未承認になっている内容を教えてください。"
**AI Response**: "現行状態・非機能要件・技術選定・承認質問・運営決定を照合。段階承認を妨げる可用性99.5%と大規模障害復旧目標の整合、非機能要件全体の未承認、後続の方式選択・費用・公開条件を整理して報告。統合済み8項目と採用済みRPO最大4時間は未採用扱いにしない。旧3資料は削除済み。"
**Context**: 状況確認のみ。要件変更・段階移行なし。監査追記のMarkdown文章・文字を事前確認。

---


## ベータ運用の可用性指標・復旧目標の確定
**Timestamp**: 2026-11-05T12:49:43Z
**User Input**: "# Context from my IDE setup:

## Open tabs:
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md
- design-coverage-review.md: aidlc-docs/construction/patient-support-app/nfr-requirements/design-coverage-review.md
- unresolved-issues-proposals.md: aidlc-docs/construction/patient-support-app/nfr-requirements/unresolved-issues-proposals.md
- cost-and-feasibility.md: aidlc-docs/construction/patient-support-app/nfr-requirements/cost-and-feasibility.md

## My request:
現在のベータ運用方針に合わせるなら、**月間可用性は計測指標とし、大規模障害は翌営業日着手・着手後24時間以内の復旧目標で管理する**整理  としましょう"
**AI Response**: "月間可用性を固定達成率なしの計測指標へ変更し、大規模障害は翌営業日の保守時間内に着手・着手後24時間以内の復旧目標へ統一。非機能要件・技術選定・承認質問・計画・状態の5資料を更新。待機・計画停止・外部障害を含む測定を維持。可用性整合の未解決事項は解消し、非機能要件全体の承認は引き続き未完了。文書整合確認済み。"
**Context**: 明示された方針変更の反映。文章・表を事前確認。回復力02は目標と根拠を更新、方式と実証は後続。PBTは文書変更のためN/A、セキュリティ拡張は無効につき適用省略。段階移行・実装なし。Pythonコマンドは出力なしで失敗したため、PowerShellで反映。

---
## 非機能要件承認・非機能設計開始
**Timestamp**: 2026-11-05T12:53:39Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md

## Open tabs:
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md
- design-coverage-review.md: aidlc-docs/construction/patient-support-app/nfr-requirements/design-coverage-review.md
- unresolved-issues-proposals.md: aidlc-docs/construction/patient-support-app/nfr-requirements/unresolved-issues-proposals.md
- cost-and-feasibility.md: aidlc-docs/construction/patient-support-app/nfr-requirements/cost-and-feasibility.md

## My request:
非機能要件について　回答を完了しました。次に進んでください"
**AI Response**: "承認欄のBを確認し、非機能要件段階を承認済みへ更新。非機能設計を開始し、実行計画と方式選択12問をpatient-support-app-nfr-design-plan.mdに作成。回復力・拡張性・性能・保護・論理部品の全観点を評価。質問1〜7はDR・地域・CI/CD・切り戻し・配備・障害対応・試験、8〜12は容量・性能・保護・論理部品・監視と費用。各[Answer]:への回答を依頼。"
**Context**: 非機能設計規則のStep 2〜5と有効な回復力拡張の明示的方式選択に従い回答待ち。固定可用性率はユーザーの変更を優先。質問と回答欄12件・Markdown・参照・Unicodeを検証。計画の完了手順は同一対話内でチェック更新。セキュリティ拡張は無効につき適用省略。PBTの実装評価はコード未生成でN/A、fast-check選定は維持。実装・配備・契約・実データ有効化なし。

---
## 非機能設計：ベータ運営体制と本番へのデータ移行
**Timestamp**: 2026-11-05T13:22:49Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md

## Open tabs:
- patient-support-app-nfr-design-plan.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md
- design-coverage-review.md: aidlc-docs/construction/patient-support-app/nfr-requirements/design-coverage-review.md
- unresolved-issues-proposals.md: aidlc-docs/construction/patient-support-app/nfr-requirements/unresolved-issues-proposals.md

## My request:
ベータ版では、運営者と開発チームは同じで引継ぎを行わない。運営への引継ぎを行う際の規格は考えなくていい。ただし、ベータ版（今回作成しているもの）から本番までにデータの引継ぎは行う可能性があるので、それは考慮しなければならない。"
**AI Response**: "非機能設計計画と非機能要件に、同一チームの継続運用・運営引継ぎ規格の対象外・本番へのデータ移行の考慮を反映。質問6Bの担当引継ぎと質問7CのOperations引継ぎを修正し、既存回答を保持。データ整合性・互換性・切替失敗時の復旧・同意撤回と削除と権限取消しの維持・保持期限の継承を後続設計条件として明記。"
**Context**: 明示的な前提変更の反映。文章と箇条書きのみで図・コードなし、Markdownと回答欄を検証。回復力の運営引継ぎ部分はユーザー指示によりN/A、復旧・変更管理・データ保護は維持し方式実証は後続。PBTはコード変更なしのため実行評価N/A。セキュリティ拡張は無効のため適用省略。計画の当該手順を完了へ更新。非機能設計全体は回答待ちを維持し、段階移行・実装・移行実行なし。

---

## 非機能設計：質問7の再構成
**Timestamp**: 2026-11-05T13:28:54Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md

## Open tabs:
- patient-support-app-nfr-design-plan.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md
- design-coverage-review.md: aidlc-docs/construction/patient-support-app/nfr-requirements/design-coverage-review.md
- unresolved-issues-proposals.md: aidlc-docs/construction/patient-support-app/nfr-requirements/unresolved-issues-proposals.md

## My request:
非機能設計計画の質問7は運営者引継ぎがある前提の質問になっていると思う"
**AI Response**: "前回は引継ぎという表現の修正に留まり、段階分けの構造が残っていた。質問7を同一チームの復旧試験の頻度・契機を選ぶ質問へ再構成。公開前の受入試験を共通条件に、重要変更後と定期実施、重要変更後のみ、その他の選択肢を設けた。未回答欄は保持。"
**Context**: Markdownの段落・選択肢・回答欄を事前確認。計画の該当手順を完了へ更新。RESILIENCY-14の方式選択は回答待ちで適合完了とはしない。他の回復力要件は変更なし。PBT実行は文書変更のためN/A。無効なセキュリティ拡張は適用省略。段階移行なし。

---

## 非機能設計：全回答確認・設計案作成・レビュー依頼
**Timestamp**: 2026-11-05T13:49:25Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md

## Open tabs:
- patient-support-app-nfr-design-plan.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md
- design-coverage-review.md: aidlc-docs/construction/patient-support-app/nfr-requirements/design-coverage-review.md
- unresolved-issues-proposals.md: aidlc-docs/construction/patient-support-app/nfr-requirements/unresolved-issues-proposals.md

## My request:
質問回答完了しました。次に進んでください"
**AI Response**: "全12回答B・B・B・C・D・B・B・A・A・A・A・Aを確認。Pilot Lightと国内Active-Passiveは待機アプリ常時起動を要求しない構成として整合。nfr-design-patterns.mdとlogical-components.mdを作成し、CI/CD・Canary・DB互換・期限・認可・安全変更保護・キュー・削除・監視・メール・予算候補・本番移行を記載。公式資料を確認し、Firestore別地域複製・標準認証再設定の迂回・分散確定の成立条件と不成立時の対応を明記。未測定総額を確定見積りとせず、予算枠と計算入力を分離。質問7Bにより公開前と重要変更後の復旧試験を採用し、ベータの定期訓練は必須としない。計画チェックと状態・技術選定の現行参照を更新。資料の参照とUTF-8・回答12件を検証。"
**Context**: 非機能設計規則Step 5〜7。実装・契約・配備・実送信・実移行・達成試験なし。運営引継ぎ規格は対象外。RESILIENCY-01〜15の設計上の評価は方式文書第10節、実環境の設定・試験は未構築につきN/A。固定可用性率と定期訓練の必須化はユーザー指示を優先。PBT-02・03・07・08は設計条件を継承、実行評価N/A。PBT-09は選定維持・依存設定はコード生成時。無効なセキュリティ拡張は適用省略。Markdownの本文・表のみで図／埋込コードなし。次段階はインフラ設計だが、本設計の明示承認まで移行しない。"
**Approval Prompt**: "非機能設計2資料を確認し、Request Changes（修正依頼）またはContinue to Next Stage（設計を承認してインフラ設計へ進む）を選択してください。段階承認は実データ有効化の承認ではありません。"

---


## 非機能設計レビュー：修正案5件の既存記載照合
**Timestamp**: 2026-11-05T13:55:49Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md

## Active selection of the file:
# U01 非機能設計：方式・受入条件

2026-11-05。レビュー案。全12回答を確認し作成。段階承認・実装・実環境での達成実証は未実施。

正本：[非機能要件](../nfr-requirements/nfr-requirements.md)、[技術選定](../nfr-requirements/tech-stack-decisions.md)、[方式選択回答](../../plans/patient-support-app-nfr-design-plan.md)、[論理部品](logical-components.md)。数値の受入条件は非機能要件を優先し、本書の初期設定案と区別する。

## 1. 回答の反映と設計範囲

| 質問 | 回答 | 反映 |
| --- | --- | --- |
| 1・2 | B・B | 国内複数地域の主系・待機系。Pilot Lightとして、データ保護は継続し待機アプリは常時起動を前提にしない |
| 3 | B | CI/CD・構成管理の具体案を作成 |
| 4・5 | C・D | Canary公開、監視結果による自動切り戻し、DB互換性を別途管理 |
| 6 | B | 同一チームの軽量障害対応・事後改善 |
| 7 | B | 公開前と復旧構成の重要変更後に試験。ベータ期間中の定期訓練は必須にしない |
| 8 | A | 最小待機・上限付き自動拡張、AIとPDFの実行枠を分離 |
| 9〜11 | A | 期限・要求台帳・認可・安全変更保護を具体化 |
| 12 | A | 監視間隔、メール基盤、費用・予算上限候補を比較提案 |

運営者と開発チームは同一。運営引継ぎ規格は対象外。ベータから本番へのデータ移行は第9節で扱う。単一バックエンド・既存4論理領域とC01〜C16の所有責務を維持し、研究実データを有効化しない。

## 2. 国内複数地域とデータ保護

東京主系・大阪待機系をインフラ設計の第一案とする。製品ごとの地域提供・IAM・ネットワーク・切替先URLをインフラ設計で確定する。Active-Passiveは一方のみが業務書込可能という意味とし、アプリ常時稼働のHot Standbyとは区別する。

Firestoreの国内リージョンを2つ作るだけで自動複製されるとは扱わない。地域と復旧機能は[Firestore地域](https://firebase.google.com/docs/firestore/locations)・[DR計画](https://firebase.google.com/docs/firestore/disaster-recovery)を確認した。PITR・バックアップは論理障害対策であり、それだけで別地域の最新データを準備できたことにはしない。

### 一般データ

1. C15の所有元別保存契約を通す全更新に、単調な版・要求ID・削除状態を含む複製用記録を同一主系トランザクションで作成する。主系確定後に待機DBへ適用する。待機先への直接業務書込は拒否する。
2. 複製用記録は患者本文を含み得るため、運用ログとは分離し、暗号化・サービス専用IAM・元データの削除期限を適用する。本文なしという安全台帳の条件を流用しない。
3. 初回の整合した基準点と、そこからの更新記録・削除記録を組み合わせる。通常のFirestore exportは開始時点の厳密なスナップショットではないため、PITR時刻指定または書込停止した基準点を用いる。[公式export/import](https://firebase.google.com/docs/firestore/manage-data/export-import)。
4. 複製遅延15分で警告、1時間で重大通知を初期案とし、RPO上限4時間まで放置しない。復元可能な一貫したチェックポイントの時刻を測る。遅延・欠番・破損により4時間を超える場合は未達として記録し、新規書込を制限して損失拡大を防ぐ。
5. 待機DBへの誤更新伝播に備え、主系PITRと日次バックアップ28日保持の案を併用する。別地域に整合した復元点を残す方式・所要時間は試作で確認する。外部へのexportも35日以内の削除境界に含める。

複製ワーカーは同一コードベースの内部処理であり、別の業務サービスや作業単位を新設しない。適用が二重・逆順になっても同じ版へ収束し、異なる対象の整合性が必要な更新は同じ更新グループとして公開する。整合したチェックポイントなしに待機DBを開放しない。

### 安全変更の無損失保護

一般データの非同期複製とは別に、本文なしの安全変更台帳を両地域へ耐久保存する。対象は削除・同意撤回・権限取消し・資格失効・利用停止。世代・要求ID・順序・時刻・適用期限を保存する。

安全変更は次の段階で管理する。

1. 本人・対象を確認後、主系の利用遮断を先行確定する。
2. 主系に未完了記録を保存し、保護先に同じ要求IDの変更を耐久保存する。
3. 保護先に確定判断を残し、主系に結果を反映する。両方の証跡を確認した後のみ受付確定を返す。応答喪失時は同一要求IDで状態を照合する。
4. 未完了・順序不明・保護先確認不能では成功表示しない。再送は同じ変更を収束させ、期限や取消しを巻き戻さない。

二地域間で単一Firestoreトランザクションは使えないため、分散した各段階を要求台帳で追跡する。最大連番だけで未到達末尾がないと判断しない。旧主系の書込停止と最終確定点を証明できない場合、復旧先全体を非公開とする。待機先から旧主系を停止できない故障も想定し、安全変更と業務更新の共通フェンス世代を保護側で管理する。書込・送信経路は有効な世代を確認できなければ停止する。期限切れリースを持つ旧処理が後から書き込めないことを検証する。

この方式は採用可能性を検証する設計であり、現段階で地域障害時の無損失を実証していない。独立性・末尾確定・旧実行者遮断が成立しなければ公開を保留し、構成変更を提示する。

### 切替・切戻し

- 軽微障害は既知の再起動・健全な同一地域インスタンスへの切替を自動化し、発生から10分を測る。復元や安全性不明の地域切替は自動開放しない。
- 大規模障害は自動で案内・危険操作の遮断・通知を行う。同一チームが翌営業日の10〜17時日本時間に着手し、着手から経過24時間以内の復旧を目指す。営業日カレンダーは公開前に設定する。
- 復旧担当が旧主系の書込を遮断し、待機先を非公開で起動する。一般データの整合点と安全台帳の最終確定点を照合し、削除・撤回・権限失効・派生物へ再適用する。
- ログイン・保存・再開・AI・PDF・問い合わせ・運営主要操作・内部集計と拒否試験を行い、同一チーム内の別の再開確認担当が証跡を確認して切り替える。別組織への引継ぎは要求しない。
- 主系へ戻すときも、現在の主系を正本として再複製し同じ手順を行う。古いDB・認証世代をそのまま再利用しない。
- 外部認証・AIの提供元全体障害では依存操作の復旧目標例外を記録し、認証迂回や別AIへの自動送信は行わない。

## 3. CI/CD・Canary・データ互換

GitHub ActionsとTerraformを具体案とする。リポジトリ提供元が異なる場合は同じ検証・承認契約を移植する。CI用権限はOIDC等の短期資格を用い、患者データや本番秘密をPR検証へ渡さない。

PRでは型・静的検査、Vitest例示テスト、fast-check、Emulator結合、ビルドを実行する。合成E2Eを検証環境で行い、固定した依存・コンテナーのダイジェスト・設定版・DB互換範囲・試験結果を承認記録へ対応付ける。承認済みの同一成果物を配備し、環境ごとの再ビルドで内容を変えない。

Cloud Runはリビジョン間のトラフィック移行とロールバックを提供する。[公式配備方式](https://docs.cloud.google.com/run/docs/rollouts-rollbacks-traffic-migration)。初期案は検証用リビジョン確認→5%→25%→100%。各段階は最低15分かつ対象APIの合成試行100件を満たすまで進めない。低トラフィックで実利用の統計が不足する場合も合成試験で補い、未観測を正常にしない。割合・時間はレビュー案。

自動停止・旧版へのトラフィック復帰条件は、越権・削除後利用・二重更新1件、通常API成功率99.5%未満またはp95が2秒超、AI/PDFの期限制御違反、監視欠測、安全台帳不整合とする。起動時からの単一失敗と集計窓の失敗を識別して証跡に残す。完全に安全な旧版への復帰を確認できない場合は対象操作を遮断する。

DBは拡張→両版対応→読取切替→旧形式廃止の順とする。Canary中は新旧リビジョンが同時に動くので、両版が同じ安全条件を満たすことを必須にする。旧版が読み取れない書換え、削除・撤回の復活、Snapshot全履歴の上書きは禁止。非互換移行は通常の自動切り戻しから分離し、停止窓・復旧手順をレビューしてから実施する。アプリ版を戻すだけでDBも戻るとは扱わない。

## 4. 性能・容量・期限

Cloud Runの最小インスタンス0を初期案とし、起動時間も受入試験へ含める。通常APIのp95が成立しなければ主系のみ最小1を費用比較し、値を更新する。[最小インスタンス](https://docs.cloud.google.com/run/docs/configuring/min-instances)。初期の負荷試験設定案は最大4インスタンス・各コンカレンシー8、サービス全体のAI実行2枠・PDF実行1枠。これは20人対応の証明ではなく調整開始値である。

共有実行枠はプロセスメモリーではなく要求台帳上の期限付きリースで管理する。再配備・多インスタンス・地域切替で上限が倍増しないよう世代を照合する。AI/PDFが枠を占有しても一覧・保存・権利行使用の実行余力を残す。枠不足で60秒内の開始を見込めない新規生成は受付前に拒否・入力保持し、受け付けた要求の待ち時間は期限に含める。

要求は本人・目的・入力版・参照版・RequestKey・期限を持ち、受付→待機→送信予約→実行中→結果検証→未確認案保存、または拒否／期限終了へ遷移する。AI待機45秒・サーバー目標55秒・画面待機60秒・要求終端5分を維持する。画面照会は2秒・5秒・10秒、その後最大30秒間隔。非表示タブでは頻度を落とす。

非冪等AI呼出しは、キューやHTTPクライアントの自動再送を無効にする。送信済みか不明の要求は消費相当の枠を維持し、同一キーで再生成しない。元応答を回収できる経路を実証できた場合のみ、5分未満で現在版・同意・権限を再検証して保存する。回収不能は成否不明として終端化する。5分後の遅延結果を保存しない。本文キャッシュは追加しない。

AI・PDF・メールごとにタイムアウト・失敗率・連続失敗を監視し回路遮断する。初期案は同一依存5連続失敗で60秒遮断、合成の単一試行で半開確認。AI半開試行に患者要求の自動再送を使わない。外部障害を保存・閲覧へ不要に波及させない。

## 5. 認可・送信遮断・認証回復

毎要求でFirebase資格、C03のAccount状態・アプリ資格世代、C04の目的別同意、所有元の対象・版、C12の公開状態、必要なら案件許可を照合する。管理用SDKのIAMだけで患者本人の認可を代替しない。ブラウザーからFirestoreの医療本文へ直接アクセスさせない。

識別情報の検出・削除／置換はバックエンド内で行う。検出失敗・不正カタログ・必須情報込みの予算超過は外部送信0回、入力保持。送信予約と遮断を対象世代で順序付け、遮断後に旧許可を使用できない送信経路に限定する。チェック後の別プロセスによる遅延送信を含めて故障注入で検証する。検証不能な短期ロックだけで保証済みにしない。遮断前に送信済みの外部処理は取消・課金停止を保証せず、結果利用を拒否する。

再設定はアプリ管理のランダム単回トークン・ハッシュ・発行世代・サーバー時計の24時間期限を案とする。発行は耐久的メール受付と対応付け、使用開始で旧資格を遮断する。Firebaseパスワード更新・更新トークン失効・アプリ資格世代更新を個別追跡し、全完了後に成功表示して再ログインを求める。途中失敗は処理中として拒否を継続する。

ただしFirebase標準経路には独自のアクションコード処理がある。[公式メールハンドラー](https://firebase.google.com/docs/auth/custom-email-handler)。画面を独自化するだけで、標準SDK／REST経路による古いリンクのパスワード変更を阻止したとはいえない。管理SDKの[パスワード更新](https://firebase.google.com/docs/auth/admin/manage-users)も、アプリ台帳との原子的更新を提供するものではない。

**認証方式の成立条件は未確認**。旧標準リンク・同時実行・遅延した旧管理処理・公開RESTの迂回試験を必須とする。公開前に通過できなければ独自案を成立済みにせず、認証構成または「24時間・最新のみ」要件の変更判断へ戻す。現在の設計承認で要件を緩和しない。

## 6. 保持・削除・秘密

秘密はSecret Manager候補、環境別・用途別のサービス資格を分離する。APIキー・生トークン・パスワード・本文・URLクエリーをログへ出さない。アプリだけでなくプロキシ・例外・Tracing・メール追跡も対象にする。秘密の版とローテーション手順を持ち、旧秘密での実行を停止できることを検証する。

削除台帳は主要環境・待機DB・複製記録・品質改善コピー・由来付き参照・一時PDF・問い合わせメール・バックアップを対象に進捗と失敗を記録する。主要環境7日、バックアップ35日、完了後の最小追跡180日上限、一時PDFは生成開始から24時間を維持する。DBのTTLやストレージLifecycleのみを期限保証にせず、期限前の明示削除・確認・未完了通知を行う。コピーや再試行で期限を再起算しない。

復元先・本番移行先も利用可能化前に削除台帳を適用する。保護台帳と一般複製記録にも削除・最小化処理を適用し、監査を理由に無期限保存しない。期限超過を完了扱いにしない。Firebase認証・外部AI・メール側の処理地域や保持条件の確認は既存の実データ有効化条件を維持する。

## 7. 監視・通知・予算の提案

通常操作の合成監視は1分、実AIを含む固定小入力の監視は5分を第一案とする。研究実データ・患者本文を使わない。AI監視を1分とする代替案は精度向上と費用増を併記する。5分監視は月8,640回、1分は43,200回。低頻度監視では直前正常から次の正常までを保守的停止推定区間とし、独立証跡でのみ訂正する。月間可用性は固定目標を設けず、操作別の値と最低値・欠測・着手待機・計画停止・外部障害を報告する。

readinessは必要設定・認証判定・DBアクセス・安全台帳の利用可否を確認し、livenessはプロセス自身の応答を見る。AI停止をliveness失敗にして全体再起動を繰り返さない。CPU・メモリー・同時実行・キュー年齢・依存クォータ・複製遅延・最終正常バックアップ・削除期限・予算予約残高を監視する。監視自体の欠測を別経路から検出し、通知配送も合成試験する。

### メールの比較

| 候補 | 費用・利点 | 確認条件 |
| --- | --- | --- |
| Amazon SES東京 | 送信従量の第一案。公開料金例0.10 USD／1,000通、添付等は別。1,000通なら基本送信0.10 USD | 別クラウドIAM・ドメイン確認・本番送信許可・バウンス通知・保持と国外処理・到達性を確認 |
| SendGrid Email API | 配信管理をまとめられる代替案 | 公開価格ページが製品ページへ遷移したため今回固定料金を確定せず見積取得。地域・保持・契約を比較 |
| Firebase標準認証メール | 認証用標準経路を使える場合の候補 | 重要運営通知の汎用基盤に転用しない。受付観測・再設定制約を満たすか別評価 |

根拠：[SES料金](https://aws.amazon.com/ses/pricing/)、[SES地域](https://docs.aws.amazon.com/general/latest/gr/ses.html)、[SendGrid製品](https://www.twilio.com/en-us/sendgrid)。送信リージョンだけでメール全経路・受信先まで国内と保証しない。採用案はSES東京だが契約・送信は実施しない。

メールは本文を含まない通知とし、宛先・テンプレート・要求IDを持つ暗号化された永続受付から送る。受付p95 5秒と配送完了を分離する。受付ID・送信先応答・配信イベントを記録し、配送成否不明を無条件再送しない。再設定の再送は新世代へ移行し旧リンクを復活させない。

### 費用と上限候補

従来のAI低・中・高試算56.25／337.50／1,350 USDを比較用に引き継ぐ。モデルと単価を今回再選定せず、採用前に再確認する。監視を1回入力1,000・課金出力100トークンと仮定し、従来試算単価を使うと1回0.0012 USD、5分監視10.368 USD／月、1分監視51.84 USD／月。いずれも未実測仮定。

監視サービス単体の公開単価例はuptime check 0.30 USD／1,000実行、synthetic monitor 1.20 USD／1,000実行。[公式監視料金](https://cloud.google.com/products/observability/pricing)。実行地域数・監視経路数・関数実行・ログ・アラート・実AI課金を別加算し、監視サービス費だけを総費用としない。

| 月額比較 | 低 | 中 | 高 |
| --- | --- | --- | --- |
| 利用AI（既存仮定） | 56.25 | 337.50 | 1,350.00 |
| 実AI監視（5分・1経路仮定） | 10.37 | 10.37 | 10.37 |
| AI処理中のRun経路（既存単純例） | 1.90 | 5.69 | 11.38 |
| 上記小計USD | 68.52 | 353.56 | 1,371.75 |

Runは既存の10秒・1 vCPU・0.5 GiB仮定を回数比例した比較で、待機・通常API・PDF・ビルド・保護処理は含まない。[Run料金](https://cloud.google.com/run/pricing)。DBは本体・索引・更新／複製読書き・PITR・バックアップ・復元を分ける。[Firestore料金](https://cloud.google.com/firestore/pricing)。

未算出費用の計算入力をインフラ設計で取得する：通常API試行数、1相談あたりDB操作、1時間当たり複製量、保存版数、PDF生成秒数、ネットワークGiB、監視経路／地点数、ログ量、バックアップ容量、認証利用、秘密アクセス、メール件数。総額は小計＋これら全項目＋試験費＋予備費とする。従って現段階では総額の確定見積りは出せない。

月額予算枠候補は低150・中600・高2,000 USD（便宜上1 USD＝150円なら22,500・90,000・300,000円）。これらは上記小計に残費用を収められるか検証するための提案枠で、総額見積りや課金停止の保証ではない。中600 USDをレビュー開始案とし、未算出項目と予備費が残額246.44 USDを超えれば再提案する。ユーザー承認前に予算確定・課金有効化しない。

アプリでAI要求ごとの最大トークン費を原子的に予約し、上限に達する新規AIを送信前に止める。成否不明分は予約を解除しない。課金額反映遅延と非AI費用があるのでアプリ上限も総請求額のハード上限ではない。監視・削除・安全保護・復旧に必要な費用枠を別途残し、予算不足で削除を停止しない。

[予算アラート](https://docs.cloud.google.com/billing/docs/how-to/budgets)は通知型と実停止機能を区別する。現行の[Spend cap](https://docs.cloud.google.com/billing/docs/how-to/budgets-spend-caps)も対象サービス・アカウント・停止影響を確認する。安全保護の停止や外部AIを含む全請求の一括上限としては採用済みにしない。

## 8. 障害対応と受入試験

軽量手順は検知→自動案内・遮断→同一チームへのメール→翌営業日の着手→復旧・別担当の再開確認→利用再開→事後振返りとする。原因・影響・時系列・目標未達・改善事項・担当・期限・完了証跡を変更記録に対応付ける。公開前に通知先と担当・営業日を決める。別の運営組織への引継ぎ資料は作成しない。

公開前と復旧構成の重要変更後に、合成データで以下を実施する。定期訓練はベータ期間中の必須条件にしない。毎回のバックアップ完了・チェックサム・復元点時刻・欠番の自動検証は継続する。手動試験の省略を自動検証の停止へ拡張しない。

| 試験 | 合格条件・証跡 |
| --- | --- |
| 地域喪失・主系連絡不能・二重起動 | 一般RPO4時間以内の整合点、安全変更無損失、旧主系の書込遮断。確認不能なら再開拒否 |
| 安全変更各段階での障害・返信喪失 | 成功確定を失わず、未確定を成功にせず、同一キーで再適用しても取消しを復活させない |
| バックアップ破損・複製遅延・復元 | 利用可能な世代を選び、RPO・削除期限・安全再適用を測定 |
| Canary異常・DB変更 | 旧版復帰または安全遮断。両版で本人・同意・削除・期待版の制約を維持 |
| AI/PDF・キュー重複と期限 | 外部二重送信なし、60秒の状態表示と5分終端、終端後保存なし |
| 認証回復・送信遮断 | 標準経路迂回、旧実行者、遮断との競合を試し、一件の安全違反も不合格 |
| 通常負荷・コールド起動 | 要件書の20仮想利用者・比率・試行数でAPI p95 2秒・成功率99.5%以上。AI/PDFは別計測 |
| UI・アクセシビリティ | 指定ブラウザー／実機とWCAG 2.2 A・AA全対象。入力保持・読み上げ・200%拡大・キーボード経路を確認 |

証跡は構成・成果物版・合成シナリオ・障害時点・期待／実結果・RPO・復旧開始／完了・拒否理由・改善課題を含む。実装前なので全試験は未実施。

## 9. ベータから本番へのデータ移行

移行の可能性に備え、スキーマ版・対象ID・元版・移行版・由来・元の期限を記録する。対象候補はAccount対応、Profile、相談／Run／Snapshot、同意・撤回、削除・資格・安全台帳、記事・公開状態・問い合わせの必要範囲。患者データを一律に全件コピーする決定はしない。研究実データ・不要なログ・期限切れPDF・秘密は移行対象から除く。継続中のAI要求は終端化して旧結果を適用しない。

同一プロジェクト内継続なら資格正本を維持する。別プロジェクトならFirebase AuthのUID・資格情報の移送可否を別途確認し、移送できない資格は安全な再認証・再設定へ誘導する。平文パスワードを生成・保存して移行しない。

手順は対象と目的の確定→合成旧版で予行→書込停止・処理収束→整合基準点と最終安全確定点の取得→非公開先へ移行→件数・内容・参照・版・削除と同意の照合→拒否／正常操作試験→承認後切替。旧属性の未回答・不明・回答しない・削除済みを区別し、旧Snapshotを一括上書きしない。権利行使は属性再回答で妨げない。

再実行は移行IDと元版で冪等にし、異なる元版を黙って上書きしない。切替後に本番書込がある場合は、旧環境へ戻す前に差分と安全変更を反映する。逆方向へ整合できない場合は書込を停止し修復する。移行コピーも元の保持期限を継承し、旧環境の残存消去と完了証跡まで追跡する。移行先・日時・実行承認は未確定。

## 10. 設計上の未確認事項と拡張適合

インフラ設計で解消する成立条件は、二地域保護の独立性・確定末尾とフェンス、複製／復元所要時間、標準再設定経路の迂回防止、送信遮断の実行保証、外部保持・地域、通知先、総額と予算である。未確認事項を成立済みと扱わず、失敗時は構成または要件の変更判断に戻す。実装・配備・実データ公開は承認しない。

| 規則 | 現段階の評価 |
| --- | --- |
| RESILIENCY-01 | 適合（設計）。要件書の重要度・依存と論理部品を対応付け |
| RESILIENCY-02 | 適合（設計）。最新RPO・復旧目標・月間計測を維持。固定可用性率は明示指示で置換 |
| RESILIENCY-03 | 適合（設計）。承認・成果物・変更・復旧証跡を対応付け |
| RESILIENCY-04 | 適合（設計）。CI/CD案・Canary・DB互換・自動切り戻し条件を記載 |
| RESILIENCY-05 | 適合（設計）。操作別監視・欠測・通知・独立確認を記載 |
| RESILIENCY-06 | 適合（設計）。livenessとreadinessを分離 |
| RESILIENCY-07 | 適合（設計）。実行枠・資源・クォータ・台帳遅延を観測 |
| RESILIENCY-08 | 適合（設計方針）。国内Active-PassiveとPilot Lightを整合。配置実証は後続 |
| RESILIENCY-09 | 適合（設計）。最小待機・上限・負荷試験・未達時の調整を記載 |
| RESILIENCY-10 | 適合（設計）。依存別回路遮断・非冪等再送禁止・期限と枠を分離 |
| RESILIENCY-11 | 適合（設計）。切替・切戻し・安全開放条件・費用成立条件を記載。達成は未実証 |
| RESILIENCY-12 | 適合（設計）。複製・バックアップ・暗号化・保持・整合検証を定義。設定実施はN/A（未構築） |
| RESILIENCY-13 | 適合（設計）。復旧手順・再開検証を定義。実行結果はN/A（未構築） |
| RESILIENCY-14 | 適合（設計）。ユーザー指定の公開前・重要変更後の試験と証跡。定期訓練必須化は明示指示によりN/A |
| RESILIENCY-15 | 適合（設計）。同一チームの障害対応・事後改善・追跡を定義 |
| PBT-02・03・07・08 | 設計への引継ぎは適合。実行評価はN/A（コード未生成）。保存往復・期限と許可不変条件・構造化生成器・縮小・seed/path・CIを必須化 |
| PBT-09 | 選定記録は適合。fast-checkとVitestを継承。依存導入・設定評価はN/A（コード生成前） |
| PBT-01・04・05・06・10 | 助言を反映。冪等再適用・状態遷移モデル・例示競合試験を併用 |
| セキュリティ拡張 | 無効のため適用省略。元の認証・同意・秘密保護要件は維持 |

表の適合は設計文書の記載範囲であり、構成の達成保証ではない。図・埋め込みコードは使用せず、表と手順を説明の正本とする。

## Open tabs:
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- patient-support-app-nfr-design-plan.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md
- design-coverage-review.md: aidlc-docs/construction/patient-support-app/nfr-requirements/design-coverage-review.md

## My request:
設計方式・受け入れ条件について、以下の修正案が出ています。これについて、既存の他ファイルで記載がある内容がないか確認してください。また、内容についてフィードバックをください



| 箇所                             | 矛盾・曖昧な点                                                                                                                                | 修正案                                                                                                                                   |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **§2 安全変更の途中で主系が消失する**         | 手順1で主系の利用を遮断し、手順2で保護先に記録します。この間に主系を失うと、待機先には「遮断済みだが受付未確定」の要求が見えません。確定済みの変更を無損失にできても、すでに止めた利用を切替先で再開してよいかは別問題です。                        | **受付確定済みの無損失**と**遮断済み・受付未確定の扱い**を分けて定義する。後者も維持するなら、待機先が未確定の遮断意図を認識できる手順が必要です。認識できない間の公開範囲も明記する。                                       |
| **§2・§8 地域喪失時のフェンスと復旧目標**      | 旧主系に連絡できず、書込停止と最終確定点を証明できなければ全体を閉じる設計です。旧主系が完全に失われた場合も、旧主系からの応答を証明に必要とするなら、復旧担当が着手しても開放できません。また、世代を確認してから実際に書き込むまでの間に、実行権が失効する競合が残ります。 | 旧主系の応答なしで**誰が・何を根拠に旧実行者の無効化と安全台帳の確定点を証明するか**を決める。主系喪失・待機系喪失・通信分断ごとに、通常利用、削除・撤回の受付、再開の可否を表にする。証明不能で閉じ続けた場合は、安全試験では合格でも、復旧目標は未達として別記する。 |
| **§2・§4・§7 非同期複製でAIの送信記録が消える** | 主系がAIを送信した直後、送信予約・要求キー・利用回数・予算予約が待機先へ届く前に主系を失うと、切替先で再送や再受付を防げません。通常時の同一キー照合だけでは、地域喪失時の「外部二重送信なし」を満たせません。                               | 送信前に、重複防止に必要な最小限の記録を切替先でも確認できるようにするか、記録の確定範囲を証明できない間は該当の再送・再受付を止める。**提供元が受信した直後、主系の記録が複製される前に主系を喪失する**試験を追加する。メールも成否不明時に同じ観点で確認する。    |
| **§5 同意撤回と外部AI送信の境界**          | 「送信予約」と「実際の外部送信」の間に撤回が入る場合、予約の順序だけでは送信を止められません。また、「送信済み」をアプリが送出した時点とするか、提供元が受信した時点とするかで、保証の意味が変わります。                                   | 遮断と送信の先後を決める時点を明記する。撤回を確定した後に旧許可で送出できないことと、確定前に送出済みの要求について結果保存・表示を拒否することを別々に検証する。                                                     |
| **§2・§6 削除期限と古い復元点**           | 削除から35日以内にバックアップを消しても、期限前に復元したコピーや、隔離した旧主系が後から戻る経路が残ると、削除済みデータが復活し得ます。一方、最小追跡には180日の上限があります。さらに、障害で通常受付を閉じた場合、削除・撤回要求をどこで受け付けるかが未定です。  | **復元・再接続を許すデータの範囲**と**削除台帳を破棄できる条件**を結び付ける。古い復元点や旧主系の再接続を拒否する条件、停止中の権利行使の受付先、受付時刻と削除期限の起算点を定める。                                       |"
**AI Response**: "全5件を要件・機能設計・論理部品と照合。1はNFR詳細2の95・104行に未確定遮断維持と範囲不明時の全体遮断あり。2は103行に再開証明、95行に安全優先と目標未達記録あり、独立証明と実書込時フェンスは未具体化。3は要求単位の再送禁止と枠維持はあるが、地域喪失時の送信・重複防止記録の同期耐久化分類が不足。4は149〜157行に実送信開始と遮断の直列化・2秒調整・送信後結果拒否あり。品質改善／研究撤回だけでは通常相談AIを停止しない点に注意。5はBR-07とdomain-entitiesに再反映用台帳・復元可能性消去と保持終了の条件、運営決定23〜27行にメール権利請求窓口あり。古い復元点の恒久拒否と障害時窓口の耐久性・時刻整合は不足。修正案はいずれも有用だが既存条件を正本として参照し、独自の期限・目的範囲を追加しないよう提案。設計本文を変更せずレビュー結果を回答。"
**Context**: 文書レビューのみ。RESILIENCY-10〜13の実現性・設計の不足を所見として記録し、従来の設計適合表のみで解消済みとはしない。承認待ち継続。PBT実行評価はコード変更なしでN/A。セキュリティ拡張は無効につき適用省略。監査は追記のみ、図・埋込コードなし。

---



## 非機能設計レビュー：重複を避け正本を参照する方針
**Timestamp**: 2026-11-05T13:58:06Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md

## Active selection of the file:
# U01 非機能設計：方式・受入条件

2026-11-05。レビュー案。全12回答を確認し作成。段階承認・実装・実環境での達成実証は未実施。

正本：[非機能要件](../nfr-requirements/nfr-requirements.md)、[技術選定](../nfr-requirements/tech-stack-decisions.md)、[方式選択回答](../../plans/patient-support-app-nfr-design-plan.md)、[論理部品](logical-components.md)。数値の受入条件は非機能要件を優先し、本書の初期設定案と区別する。

## 1. 回答の反映と設計範囲

| 質問 | 回答 | 反映 |
| --- | --- | --- |
| 1・2 | B・B | 国内複数地域の主系・待機系。Pilot Lightとして、データ保護は継続し待機アプリは常時起動を前提にしない |
| 3 | B | CI/CD・構成管理の具体案を作成 |
| 4・5 | C・D | Canary公開、監視結果による自動切り戻し、DB互換性を別途管理 |
| 6 | B | 同一チームの軽量障害対応・事後改善 |
| 7 | B | 公開前と復旧構成の重要変更後に試験。ベータ期間中の定期訓練は必須にしない |
| 8 | A | 最小待機・上限付き自動拡張、AIとPDFの実行枠を分離 |
| 9〜11 | A | 期限・要求台帳・認可・安全変更保護を具体化 |
| 12 | A | 監視間隔、メール基盤、費用・予算上限候補を比較提案 |

運営者と開発チームは同一。運営引継ぎ規格は対象外。ベータから本番へのデータ移行は第9節で扱う。単一バックエンド・既存4論理領域とC01〜C16の所有責務を維持し、研究実データを有効化しない。

## 2. 国内複数地域とデータ保護

東京主系・大阪待機系をインフラ設計の第一案とする。製品ごとの地域提供・IAM・ネットワーク・切替先URLをインフラ設計で確定する。Active-Passiveは一方のみが業務書込可能という意味とし、アプリ常時稼働のHot Standbyとは区別する。

Firestoreの国内リージョンを2つ作るだけで自動複製されるとは扱わない。地域と復旧機能は[Firestore地域](https://firebase.google.com/docs/firestore/locations)・[DR計画](https://firebase.google.com/docs/firestore/disaster-recovery)を確認した。PITR・バックアップは論理障害対策であり、それだけで別地域の最新データを準備できたことにはしない。

### 一般データ

1. C15の所有元別保存契約を通す全更新に、単調な版・要求ID・削除状態を含む複製用記録を同一主系トランザクションで作成する。主系確定後に待機DBへ適用する。待機先への直接業務書込は拒否する。
2. 複製用記録は患者本文を含み得るため、運用ログとは分離し、暗号化・サービス専用IAM・元データの削除期限を適用する。本文なしという安全台帳の条件を流用しない。
3. 初回の整合した基準点と、そこからの更新記録・削除記録を組み合わせる。通常のFirestore exportは開始時点の厳密なスナップショットではないため、PITR時刻指定または書込停止した基準点を用いる。[公式export/import](https://firebase.google.com/docs/firestore/manage-data/export-import)。
4. 複製遅延15分で警告、1時間で重大通知を初期案とし、RPO上限4時間まで放置しない。復元可能な一貫したチェックポイントの時刻を測る。遅延・欠番・破損により4時間を超える場合は未達として記録し、新規書込を制限して損失拡大を防ぐ。
5. 待機DBへの誤更新伝播に備え、主系PITRと日次バックアップ28日保持の案を併用する。別地域に整合した復元点を残す方式・所要時間は試作で確認する。外部へのexportも35日以内の削除境界に含める。

複製ワーカーは同一コードベースの内部処理であり、別の業務サービスや作業単位を新設しない。適用が二重・逆順になっても同じ版へ収束し、異なる対象の整合性が必要な更新は同じ更新グループとして公開する。整合したチェックポイントなしに待機DBを開放しない。

### 安全変更の無損失保護

一般データの非同期複製とは別に、本文なしの安全変更台帳を両地域へ耐久保存する。対象は削除・同意撤回・権限取消し・資格失効・利用停止。世代・要求ID・順序・時刻・適用期限を保存する。

安全変更は次の段階で管理する。

1. 本人・対象を確認後、主系の利用遮断を先行確定する。
2. 主系に未完了記録を保存し、保護先に同じ要求IDの変更を耐久保存する。
3. 保護先に確定判断を残し、主系に結果を反映する。両方の証跡を確認した後のみ受付確定を返す。応答喪失時は同一要求IDで状態を照合する。
4. 未完了・順序不明・保護先確認不能では成功表示しない。再送は同じ変更を収束させ、期限や取消しを巻き戻さない。

二地域間で単一Firestoreトランザクションは使えないため、分散した各段階を要求台帳で追跡する。最大連番だけで未到達末尾がないと判断しない。旧主系の書込停止と最終確定点を証明できない場合、復旧先全体を非公開とする。待機先から旧主系を停止できない故障も想定し、安全変更と業務更新の共通フェンス世代を保護側で管理する。書込・送信経路は有効な世代を確認できなければ停止する。期限切れリースを持つ旧処理が後から書き込めないことを検証する。

この方式は採用可能性を検証する設計であり、現段階で地域障害時の無損失を実証していない。独立性・末尾確定・旧実行者遮断が成立しなければ公開を保留し、構成変更を提示する。

### 切替・切戻し

- 軽微障害は既知の再起動・健全な同一地域インスタンスへの切替を自動化し、発生から10分を測る。復元や安全性不明の地域切替は自動開放しない。
- 大規模障害は自動で案内・危険操作の遮断・通知を行う。同一チームが翌営業日の10〜17時日本時間に着手し、着手から経過24時間以内の復旧を目指す。営業日カレンダーは公開前に設定する。
- 復旧担当が旧主系の書込を遮断し、待機先を非公開で起動する。一般データの整合点と安全台帳の最終確定点を照合し、削除・撤回・権限失効・派生物へ再適用する。
- ログイン・保存・再開・AI・PDF・問い合わせ・運営主要操作・内部集計と拒否試験を行い、同一チーム内の別の再開確認担当が証跡を確認して切り替える。別組織への引継ぎは要求しない。
- 主系へ戻すときも、現在の主系を正本として再複製し同じ手順を行う。古いDB・認証世代をそのまま再利用しない。
- 外部認証・AIの提供元全体障害では依存操作の復旧目標例外を記録し、認証迂回や別AIへの自動送信は行わない。

## 3. CI/CD・Canary・データ互換

GitHub ActionsとTerraformを具体案とする。リポジトリ提供元が異なる場合は同じ検証・承認契約を移植する。CI用権限はOIDC等の短期資格を用い、患者データや本番秘密をPR検証へ渡さない。

PRでは型・静的検査、Vitest例示テスト、fast-check、Emulator結合、ビルドを実行する。合成E2Eを検証環境で行い、固定した依存・コンテナーのダイジェスト・設定版・DB互換範囲・試験結果を承認記録へ対応付ける。承認済みの同一成果物を配備し、環境ごとの再ビルドで内容を変えない。

Cloud Runはリビジョン間のトラフィック移行とロールバックを提供する。[公式配備方式](https://docs.cloud.google.com/run/docs/rollouts-rollbacks-traffic-migration)。初期案は検証用リビジョン確認→5%→25%→100%。各段階は最低15分かつ対象APIの合成試行100件を満たすまで進めない。低トラフィックで実利用の統計が不足する場合も合成試験で補い、未観測を正常にしない。割合・時間はレビュー案。

自動停止・旧版へのトラフィック復帰条件は、越権・削除後利用・二重更新1件、通常API成功率99.5%未満またはp95が2秒超、AI/PDFの期限制御違反、監視欠測、安全台帳不整合とする。起動時からの単一失敗と集計窓の失敗を識別して証跡に残す。完全に安全な旧版への復帰を確認できない場合は対象操作を遮断する。

DBは拡張→両版対応→読取切替→旧形式廃止の順とする。Canary中は新旧リビジョンが同時に動くので、両版が同じ安全条件を満たすことを必須にする。旧版が読み取れない書換え、削除・撤回の復活、Snapshot全履歴の上書きは禁止。非互換移行は通常の自動切り戻しから分離し、停止窓・復旧手順をレビューしてから実施する。アプリ版を戻すだけでDBも戻るとは扱わない。

## 4. 性能・容量・期限

Cloud Runの最小インスタンス0を初期案とし、起動時間も受入試験へ含める。通常APIのp95が成立しなければ主系のみ最小1を費用比較し、値を更新する。[最小インスタンス](https://docs.cloud.google.com/run/docs/configuring/min-instances)。初期の負荷試験設定案は最大4インスタンス・各コンカレンシー8、サービス全体のAI実行2枠・PDF実行1枠。これは20人対応の証明ではなく調整開始値である。

共有実行枠はプロセスメモリーではなく要求台帳上の期限付きリースで管理する。再配備・多インスタンス・地域切替で上限が倍増しないよう世代を照合する。AI/PDFが枠を占有しても一覧・保存・権利行使用の実行余力を残す。枠不足で60秒内の開始を見込めない新規生成は受付前に拒否・入力保持し、受け付けた要求の待ち時間は期限に含める。

要求は本人・目的・入力版・参照版・RequestKey・期限を持ち、受付→待機→送信予約→実行中→結果検証→未確認案保存、または拒否／期限終了へ遷移する。AI待機45秒・サーバー目標55秒・画面待機60秒・要求終端5分を維持する。画面照会は2秒・5秒・10秒、その後最大30秒間隔。非表示タブでは頻度を落とす。

非冪等AI呼出しは、キューやHTTPクライアントの自動再送を無効にする。送信済みか不明の要求は消費相当の枠を維持し、同一キーで再生成しない。元応答を回収できる経路を実証できた場合のみ、5分未満で現在版・同意・権限を再検証して保存する。回収不能は成否不明として終端化する。5分後の遅延結果を保存しない。本文キャッシュは追加しない。

AI・PDF・メールごとにタイムアウト・失敗率・連続失敗を監視し回路遮断する。初期案は同一依存5連続失敗で60秒遮断、合成の単一試行で半開確認。AI半開試行に患者要求の自動再送を使わない。外部障害を保存・閲覧へ不要に波及させない。

## 5. 認可・送信遮断・認証回復

毎要求でFirebase資格、C03のAccount状態・アプリ資格世代、C04の目的別同意、所有元の対象・版、C12の公開状態、必要なら案件許可を照合する。管理用SDKのIAMだけで患者本人の認可を代替しない。ブラウザーからFirestoreの医療本文へ直接アクセスさせない。

識別情報の検出・削除／置換はバックエンド内で行う。検出失敗・不正カタログ・必須情報込みの予算超過は外部送信0回、入力保持。送信予約と遮断を対象世代で順序付け、遮断後に旧許可を使用できない送信経路に限定する。チェック後の別プロセスによる遅延送信を含めて故障注入で検証する。検証不能な短期ロックだけで保証済みにしない。遮断前に送信済みの外部処理は取消・課金停止を保証せず、結果利用を拒否する。

再設定はアプリ管理のランダム単回トークン・ハッシュ・発行世代・サーバー時計の24時間期限を案とする。発行は耐久的メール受付と対応付け、使用開始で旧資格を遮断する。Firebaseパスワード更新・更新トークン失効・アプリ資格世代更新を個別追跡し、全完了後に成功表示して再ログインを求める。途中失敗は処理中として拒否を継続する。

ただしFirebase標準経路には独自のアクションコード処理がある。[公式メールハンドラー](https://firebase.google.com/docs/auth/custom-email-handler)。画面を独自化するだけで、標準SDK／REST経路による古いリンクのパスワード変更を阻止したとはいえない。管理SDKの[パスワード更新](https://firebase.google.com/docs/auth/admin/manage-users)も、アプリ台帳との原子的更新を提供するものではない。

**認証方式の成立条件は未確認**。旧標準リンク・同時実行・遅延した旧管理処理・公開RESTの迂回試験を必須とする。公開前に通過できなければ独自案を成立済みにせず、認証構成または「24時間・最新のみ」要件の変更判断へ戻す。現在の設計承認で要件を緩和しない。

## 6. 保持・削除・秘密

秘密はSecret Manager候補、環境別・用途別のサービス資格を分離する。APIキー・生トークン・パスワード・本文・URLクエリーをログへ出さない。アプリだけでなくプロキシ・例外・Tracing・メール追跡も対象にする。秘密の版とローテーション手順を持ち、旧秘密での実行を停止できることを検証する。

削除台帳は主要環境・待機DB・複製記録・品質改善コピー・由来付き参照・一時PDF・問い合わせメール・バックアップを対象に進捗と失敗を記録する。主要環境7日、バックアップ35日、完了後の最小追跡180日上限、一時PDFは生成開始から24時間を維持する。DBのTTLやストレージLifecycleのみを期限保証にせず、期限前の明示削除・確認・未完了通知を行う。コピーや再試行で期限を再起算しない。

復元先・本番移行先も利用可能化前に削除台帳を適用する。保護台帳と一般複製記録にも削除・最小化処理を適用し、監査を理由に無期限保存しない。期限超過を完了扱いにしない。Firebase認証・外部AI・メール側の処理地域や保持条件の確認は既存の実データ有効化条件を維持する。

## 7. 監視・通知・予算の提案

通常操作の合成監視は1分、実AIを含む固定小入力の監視は5分を第一案とする。研究実データ・患者本文を使わない。AI監視を1分とする代替案は精度向上と費用増を併記する。5分監視は月8,640回、1分は43,200回。低頻度監視では直前正常から次の正常までを保守的停止推定区間とし、独立証跡でのみ訂正する。月間可用性は固定目標を設けず、操作別の値と最低値・欠測・着手待機・計画停止・外部障害を報告する。

readinessは必要設定・認証判定・DBアクセス・安全台帳の利用可否を確認し、livenessはプロセス自身の応答を見る。AI停止をliveness失敗にして全体再起動を繰り返さない。CPU・メモリー・同時実行・キュー年齢・依存クォータ・複製遅延・最終正常バックアップ・削除期限・予算予約残高を監視する。監視自体の欠測を別経路から検出し、通知配送も合成試験する。

### メールの比較

| 候補 | 費用・利点 | 確認条件 |
| --- | --- | --- |
| Amazon SES東京 | 送信従量の第一案。公開料金例0.10 USD／1,000通、添付等は別。1,000通なら基本送信0.10 USD | 別クラウドIAM・ドメイン確認・本番送信許可・バウンス通知・保持と国外処理・到達性を確認 |
| SendGrid Email API | 配信管理をまとめられる代替案 | 公開価格ページが製品ページへ遷移したため今回固定料金を確定せず見積取得。地域・保持・契約を比較 |
| Firebase標準認証メール | 認証用標準経路を使える場合の候補 | 重要運営通知の汎用基盤に転用しない。受付観測・再設定制約を満たすか別評価 |

根拠：[SES料金](https://aws.amazon.com/ses/pricing/)、[SES地域](https://docs.aws.amazon.com/general/latest/gr/ses.html)、[SendGrid製品](https://www.twilio.com/en-us/sendgrid)。送信リージョンだけでメール全経路・受信先まで国内と保証しない。採用案はSES東京だが契約・送信は実施しない。

メールは本文を含まない通知とし、宛先・テンプレート・要求IDを持つ暗号化された永続受付から送る。受付p95 5秒と配送完了を分離する。受付ID・送信先応答・配信イベントを記録し、配送成否不明を無条件再送しない。再設定の再送は新世代へ移行し旧リンクを復活させない。

### 費用と上限候補

従来のAI低・中・高試算56.25／337.50／1,350 USDを比較用に引き継ぐ。モデルと単価を今回再選定せず、採用前に再確認する。監視を1回入力1,000・課金出力100トークンと仮定し、従来試算単価を使うと1回0.0012 USD、5分監視10.368 USD／月、1分監視51.84 USD／月。いずれも未実測仮定。

監視サービス単体の公開単価例はuptime check 0.30 USD／1,000実行、synthetic monitor 1.20 USD／1,000実行。[公式監視料金](https://cloud.google.com/products/observability/pricing)。実行地域数・監視経路数・関数実行・ログ・アラート・実AI課金を別加算し、監視サービス費だけを総費用としない。

| 月額比較 | 低 | 中 | 高 |
| --- | --- | --- | --- |
| 利用AI（既存仮定） | 56.25 | 337.50 | 1,350.00 |
| 実AI監視（5分・1経路仮定） | 10.37 | 10.37 | 10.37 |
| AI処理中のRun経路（既存単純例） | 1.90 | 5.69 | 11.38 |
| 上記小計USD | 68.52 | 353.56 | 1,371.75 |

Runは既存の10秒・1 vCPU・0.5 GiB仮定を回数比例した比較で、待機・通常API・PDF・ビルド・保護処理は含まない。[Run料金](https://cloud.google.com/run/pricing)。DBは本体・索引・更新／複製読書き・PITR・バックアップ・復元を分ける。[Firestore料金](https://cloud.google.com/firestore/pricing)。

未算出費用の計算入力をインフラ設計で取得する：通常API試行数、1相談あたりDB操作、1時間当たり複製量、保存版数、PDF生成秒数、ネットワークGiB、監視経路／地点数、ログ量、バックアップ容量、認証利用、秘密アクセス、メール件数。総額は小計＋これら全項目＋試験費＋予備費とする。従って現段階では総額の確定見積りは出せない。

月額予算枠候補は低150・中600・高2,000 USD（便宜上1 USD＝150円なら22,500・90,000・300,000円）。これらは上記小計に残費用を収められるか検証するための提案枠で、総額見積りや課金停止の保証ではない。中600 USDをレビュー開始案とし、未算出項目と予備費が残額246.44 USDを超えれば再提案する。ユーザー承認前に予算確定・課金有効化しない。

アプリでAI要求ごとの最大トークン費を原子的に予約し、上限に達する新規AIを送信前に止める。成否不明分は予約を解除しない。課金額反映遅延と非AI費用があるのでアプリ上限も総請求額のハード上限ではない。監視・削除・安全保護・復旧に必要な費用枠を別途残し、予算不足で削除を停止しない。

[予算アラート](https://docs.cloud.google.com/billing/docs/how-to/budgets)は通知型と実停止機能を区別する。現行の[Spend cap](https://docs.cloud.google.com/billing/docs/how-to/budgets-spend-caps)も対象サービス・アカウント・停止影響を確認する。安全保護の停止や外部AIを含む全請求の一括上限としては採用済みにしない。

## 8. 障害対応と受入試験

軽量手順は検知→自動案内・遮断→同一チームへのメール→翌営業日の着手→復旧・別担当の再開確認→利用再開→事後振返りとする。原因・影響・時系列・目標未達・改善事項・担当・期限・完了証跡を変更記録に対応付ける。公開前に通知先と担当・営業日を決める。別の運営組織への引継ぎ資料は作成しない。

公開前と復旧構成の重要変更後に、合成データで以下を実施する。定期訓練はベータ期間中の必須条件にしない。毎回のバックアップ完了・チェックサム・復元点時刻・欠番の自動検証は継続する。手動試験の省略を自動検証の停止へ拡張しない。

| 試験 | 合格条件・証跡 |
| --- | --- |
| 地域喪失・主系連絡不能・二重起動 | 一般RPO4時間以内の整合点、安全変更無損失、旧主系の書込遮断。確認不能なら再開拒否 |
| 安全変更各段階での障害・返信喪失 | 成功確定を失わず、未確定を成功にせず、同一キーで再適用しても取消しを復活させない |
| バックアップ破損・複製遅延・復元 | 利用可能な世代を選び、RPO・削除期限・安全再適用を測定 |
| Canary異常・DB変更 | 旧版復帰または安全遮断。両版で本人・同意・削除・期待版の制約を維持 |
| AI/PDF・キュー重複と期限 | 外部二重送信なし、60秒の状態表示と5分終端、終端後保存なし |
| 認証回復・送信遮断 | 標準経路迂回、旧実行者、遮断との競合を試し、一件の安全違反も不合格 |
| 通常負荷・コールド起動 | 要件書の20仮想利用者・比率・試行数でAPI p95 2秒・成功率99.5%以上。AI/PDFは別計測 |
| UI・アクセシビリティ | 指定ブラウザー／実機とWCAG 2.2 A・AA全対象。入力保持・読み上げ・200%拡大・キーボード経路を確認 |

証跡は構成・成果物版・合成シナリオ・障害時点・期待／実結果・RPO・復旧開始／完了・拒否理由・改善課題を含む。実装前なので全試験は未実施。

## 9. ベータから本番へのデータ移行

移行の可能性に備え、スキーマ版・対象ID・元版・移行版・由来・元の期限を記録する。対象候補はAccount対応、Profile、相談／Run／Snapshot、同意・撤回、削除・資格・安全台帳、記事・公開状態・問い合わせの必要範囲。患者データを一律に全件コピーする決定はしない。研究実データ・不要なログ・期限切れPDF・秘密は移行対象から除く。継続中のAI要求は終端化して旧結果を適用しない。

同一プロジェクト内継続なら資格正本を維持する。別プロジェクトならFirebase AuthのUID・資格情報の移送可否を別途確認し、移送できない資格は安全な再認証・再設定へ誘導する。平文パスワードを生成・保存して移行しない。

手順は対象と目的の確定→合成旧版で予行→書込停止・処理収束→整合基準点と最終安全確定点の取得→非公開先へ移行→件数・内容・参照・版・削除と同意の照合→拒否／正常操作試験→承認後切替。旧属性の未回答・不明・回答しない・削除済みを区別し、旧Snapshotを一括上書きしない。権利行使は属性再回答で妨げない。

再実行は移行IDと元版で冪等にし、異なる元版を黙って上書きしない。切替後に本番書込がある場合は、旧環境へ戻す前に差分と安全変更を反映する。逆方向へ整合できない場合は書込を停止し修復する。移行コピーも元の保持期限を継承し、旧環境の残存消去と完了証跡まで追跡する。移行先・日時・実行承認は未確定。

## 10. 設計上の未確認事項と拡張適合

インフラ設計で解消する成立条件は、二地域保護の独立性・確定末尾とフェンス、複製／復元所要時間、標準再設定経路の迂回防止、送信遮断の実行保証、外部保持・地域、通知先、総額と予算である。未確認事項を成立済みと扱わず、失敗時は構成または要件の変更判断に戻す。実装・配備・実データ公開は承認しない。

| 規則 | 現段階の評価 |
| --- | --- |
| RESILIENCY-01 | 適合（設計）。要件書の重要度・依存と論理部品を対応付け |
| RESILIENCY-02 | 適合（設計）。最新RPO・復旧目標・月間計測を維持。固定可用性率は明示指示で置換 |
| RESILIENCY-03 | 適合（設計）。承認・成果物・変更・復旧証跡を対応付け |
| RESILIENCY-04 | 適合（設計）。CI/CD案・Canary・DB互換・自動切り戻し条件を記載 |
| RESILIENCY-05 | 適合（設計）。操作別監視・欠測・通知・独立確認を記載 |
| RESILIENCY-06 | 適合（設計）。livenessとreadinessを分離 |
| RESILIENCY-07 | 適合（設計）。実行枠・資源・クォータ・台帳遅延を観測 |
| RESILIENCY-08 | 適合（設計方針）。国内Active-PassiveとPilot Lightを整合。配置実証は後続 |
| RESILIENCY-09 | 適合（設計）。最小待機・上限・負荷試験・未達時の調整を記載 |
| RESILIENCY-10 | 適合（設計）。依存別回路遮断・非冪等再送禁止・期限と枠を分離 |
| RESILIENCY-11 | 適合（設計）。切替・切戻し・安全開放条件・費用成立条件を記載。達成は未実証 |
| RESILIENCY-12 | 適合（設計）。複製・バックアップ・暗号化・保持・整合検証を定義。設定実施はN/A（未構築） |
| RESILIENCY-13 | 適合（設計）。復旧手順・再開検証を定義。実行結果はN/A（未構築） |
| RESILIENCY-14 | 適合（設計）。ユーザー指定の公開前・重要変更後の試験と証跡。定期訓練必須化は明示指示によりN/A |
| RESILIENCY-15 | 適合（設計）。同一チームの障害対応・事後改善・追跡を定義 |
| PBT-02・03・07・08 | 設計への引継ぎは適合。実行評価はN/A（コード未生成）。保存往復・期限と許可不変条件・構造化生成器・縮小・seed/path・CIを必須化 |
| PBT-09 | 選定記録は適合。fast-checkとVitestを継承。依存導入・設定評価はN/A（コード生成前） |
| PBT-01・04・05・06・10 | 助言を反映。冪等再適用・状態遷移モデル・例示競合試験を併用 |
| セキュリティ拡張 | 無効のため適用省略。元の認証・同意・秘密保護要件は維持 |

表の適合は設計文書の記載範囲であり、構成の達成保証ではない。図・埋め込みコードは使用せず、表と手順を説明の正本とする。

## Open tabs:
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- patient-support-app-nfr-design-plan.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md
- design-coverage-review.md: aidlc-docs/construction/patient-support-app/nfr-requirements/design-coverage-review.md

## My request:
実装時に参照するファイル内に記載があるのなら大丈夫。無駄に重複する方が良くない気がする"
**AI Response**: "既存の正本に定義があり実装時に参照できる事項は重複転記せず、参照でつなぐ方針を確認。既存定義で充足する事項と未定義の具体方式は区別し、別ファイルに記載があるだけで未解決事項を解消済みとは扱わない。今回、設計本文の追記・新規レビュー資料の作成は行わない。"
**Context**: 方針確認。非機能設計の承認・段階移行を意味しない。監査記録のみ追記。

---



## 非機能設計：未具体化事項の解消案と追加質問
**Timestamp**: 2026-11-05T14:02:22Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md

## Open tabs:
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- patient-support-app-nfr-design-plan.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md
- design-coverage-review.md: aidlc-docs/construction/patient-support-app/nfr-requirements/design-coverage-review.md

## My request:
ではそのうえで指摘を踏まえてさらに内容を詰めるべき点があったら、解消案を提示するか、質問を提示してください"
**AI Response**: "既存定義を再質問せず、未確定遮断意図の保護、送信・回数・予算の耐久保護、旧復元世代の恒久拒否、障害中の既存メール権利受付を4解消案として追加質問ファイルに整理。二地域で安全を優先して保留する方向と、単一地域喪失後の継続を優先して独立判定基盤を比較する方向を選ぶ1問を作成。推奨はベータの二地域方針維持、復旧目標は変更せず未達を別記。方式の採用・完成扱いをせず、回答後に既存2成果物へ統合する計画を記録。参照と回答欄を検証。"
**Context**: 設計の追加検討。RESILIENCY-10〜13は検討中で解消済みとしない。PBT実行N/A、セキュリティ拡張は無効のため省略。実装・段階承認・移行なし。

---


## 非機能設計：旧主系の復帰を必要としない解消案の作成
**Timestamp**: 2026-11-05T14:15:35Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-nfr-design-followup-questions.md

## Active selection of the file:
# 非機能設計：未具体化事項の解消案と確認

レビュー用の提案。既存の正本を重複転記せず、今回決める差分だけを整理する。回答前に採用済みとは扱わない。設計全体の承認・要件緩和・外部サービス契約は含まない。

## 既存記載で足りる事項

- 受付未確定の遮断維持・範囲不明時の全体遮断・証明不能時の復旧目標未達記録：[非機能要件の詳細2](../patient-support-app/nfr-requirements/nfr-requirements.md)。これらの方針を再質問しない。
- 実送信開始と遮断の順序、調整上限2秒、送信後の結果拒否、目的別同意の区別：同資料の詳細5。研究・品質改善の撤回だけで通常相談AIを止めない。
- 削除再反映用記録と保持終了の条件：[業務規則BR-07](../patient-support-app/functional-design/business-rules.md)、[元別削除対象](../patient-support-app/functional-design/domain-entities.md)。保持期限を再質問・自動延長しない。
- メールによる権利請求：[運営決定の権利請求](../patient-support-app/functional-design/operations-functional-decisions.md)。新しい窓口を無条件に追加しない。

## 解消案1：未確定の遮断意図を復旧判断へ含める

未確定要求も保護側で認識できるよう、本人・対象・目的の確認後、本文なしの要求ID・対象・世代・遮断意図を保護側へ耐久記録する段階を設ける。この記録は「受付確定」や「処理完了」と区別する。主系だけで遮断済みのまま消失する区間を、成功確定の証跡だけで安全と判断しない。

保護側への記録不能時も、可能な主系の利用停止を遅らせない。ただし、その局所的停止が復旧先から見えない可能性を管理する必要がある。稼働世代に未解決の主系限定変更があり得る場合は、その世代のデータを自動開放しない。未解決を把握する記録そのものの消失も想定し、「記録が見えない＝未解決なし」と判定しない。

この条件を満たすには、遮断意図の記録・業務実行権・復旧時の最終確定点を同じ順序規則で管理する必要がある。どの製品で実現するかは質問1の選択後に具体化する。先に両DBへ書くだけで原子的に解消したとは扱わない。

## 解消案2：送信・回数・予算を一般データのRPOから分離する

外部送信前に、切替後も確認可能な場所へ、本人／支援実行／セッションへの最小参照、要求キー、外部試行ID、目的、対象版、消費回数、予算予約、状態・実行世代を耐久保存する。本文やメールアドレスをこの台帳に複製しない。一般相談データの4時間損失許容を、この判断記録へ適用しない。

状態は「予約済み・未送信を証明可能」「送信した可能性あり」「応答確認」「終端」に分ける。送信する可能性のある段階へ耐久的に進めてから、実送信を開始する。記録後に送信せず落ちた場合も、未送信の証明がない限り成否不明として扱う。これにより再送より停止を選ぶケースがあることを明示する。

切替後は同一キーの再送だけでなく、新しいキーでの同一操作も照合する。支援・セッションの残回数や予算を復旧前の状態より増やさない。照合対象・消費量が不明なら、その対象の新規生成も保留する。記録を保持できない場合に再生成で埋め合わせない。

メールも通知ID・種別・宛先への安全な参照・送信試行の状態を保護する。ただし重要通知とパスワード再設定は同じ再送方針にしない。再設定の意図的な再送は既存の新世代発行条件を適用する。提供元の二重受信防止を証明できない場合、成否不明の自動再送を止める。

追加試験：提供元が受信した直後・応答受領前の主系喪失、予約記録直後・未送信での喪失、異なるキーでの再受付、主系復帰後の旧試行再開。合格条件は二重送信なし、回数／予算の復活なし、状態不明の正確な表示とする。

## 解消案3：古い復元点を開放できなくする

復元物・隔離DB・export・移行コピーを、作成元環境・世代・復元点・削除反映到達点・期限の一覧で管理する。個々の削除要求の追跡を破棄する前に、その要求が必要な古いコピーが消去済みか、業務環境への再接続を恒久的に禁止できていることを確認する。

利用可能な復元世代の一覧を現在の制御側で管理し、一覧にないコピー、必要な削除履歴が失われたコピー、古い主系は、資格・経路・アプリの検証で拒否する。古いコピー内に残る許可一覧を自己証明として使用しない。再利用する場合は現在の正本から再構築する。

恒久拒否の記録は環境・世代単位とし、削除対象者との対応を必要以上に残さない。コピーを隔離しただけで物理消去期限を達成したとは扱わない。7日・35日・180日の既存期限と両立しない構成は不採用とする。

追加試験：削除前コピーを期限前に復元して放置した場合、旧主系が長期間後に復帰した場合、個別追跡消去後に古いexportを投入した場合。いずれも削除対象の取得・再送信・新主系への同期を拒否する。

## 解消案4：停止中の権利請求を既存メール窓口へ接続する

アプリ停止時は既存のメール窓口を案内する。窓口案内は主系APIを必要としない固定表示を候補とし、メール受信環境・受信時刻・最小受付記録が主系障害で失われないことを確認する。返信・手動確認は既存の保守体制に従い、即時の人手対応を追加しない。

受信、本人確認、対象確認、遮断、受付確定を別時刻で記録し、復旧後の手動登録で受信時刻を書き換えない。本人確認前のメールだけで他人のアカウントを停止しない。本人・対象を確認できた要求は、安全記録へ反映してから利用再開する。

7日・35日の起算は現在の正本に従う。ただしメール受信から受付確定までの保留によって期限を意図的に先送りしない。停止中も実行できる受付確定経路を設計し、現在のポリシー文面と両立しない遅延が避けられない場合は、既存要件どおり起算・受付方式の再確認対象として明示する。運用記録を後で登録すれば解消すると扱わない。

## 質問1：地域障害時の継続性と構成負担

現状は二地域を使う方針ですが、「片方を失っても安全な再開を判断できること」と「両方への記録を必要とすること」を同時に満たす具体方式は未確定です。保護側自体を失う場合も含めて、どの方向で解消案を詰めますか。

A) ベータでは現行の二地域方針を維持する案を優先する（推奨）。証跡・実行権の確認が不能な間は、影響する生成・書込・安全変更の受付確定を保留する。通常利用と権利請求の可否を障害別に定義し、停止中も既存メールで請求を受ける。安全に再開できず着手後24時間を超えた場合は復旧目標未達と記録する。復旧目標を撤廃せず、試作で成立しなければ構成を再検討する。

B) 片方の地域を失っても再開判断と重要な受付を続けられることを優先する。独立した判定基盤や合意方式を含め構成案・費用・国内配置の可能性を比較してほしい。第三の保存先を足すだけで成立するとは扱わず、採用前に方式を再レビューする。

C) その他（優先する継続範囲・制約を記載）。

[Answer]:

### 回答後に具体化する内容

主系喪失・保護側喪失・通信分断・両系喪失について、通常の閲覧／書込、AI／メール、削除・撤回の受信／遮断／受付確定、復旧の可否を表にする。旧主系の応答に依存しない証拠の取得主体・保存先・実行先での拒否手段を対応付ける。

実行権の事前照会やリースだけでは、照会後に止まった旧処理の実行を防げたことにしない。実際の書込確定・外部送出の経路で古い実行権を拒否できることを、プロセス停止・再開と通信分断の試験で確認する。成立しなければ当該構成は採用しない。

解消案1〜4はこの質問で選ぶ構成方針と既存要件に沿って精査する。既存の定義を正本に残し、採用した具体方式だけを方式文書・論理部品へ統合する。本ファイルを独立した実装正本として恒久的に増やさない。

## 検証・拡張規則の扱い

文章・表なしの箇条書き・選択肢のみ。図・埋込コードなし。Markdown段落・相対参照・回答欄1件・その他選択肢を検証する。

RESILIENCY-10〜13の未具体化事項は解決案と受入試験を検討中であり、解消済み・実装適合とはしない。RESILIENCY-02の既存復旧目標を維持し、安全な停止と目標達成を別評価する。RESILIENCY-14は初回公開前・重要変更後の試験方針を維持。その他の回復力規則は今回変更なし。PBTは文書検討のため実行評価N/A、既存の選定と性質検証条件を維持する。無効なセキュリティ拡張は適用省略する。

## Open tabs:
- patient-support-app-nfr-design-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-followup-questions.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- patient-support-app-nfr-design-plan.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md

## My request:
ではそれを踏まえて、新しい解決案を提示してください"
**AI Response**: 新案を検討。旧主系側に安全判断の唯一の証拠を残さない制御正本・最終実行経路と、残存証跡による開放条件を具体化する。既存Canary選択を維持。
**Context**: レビュー案の更新。採用・段階承認・実装なし。

---

## 非機能設計：差替案提示結果
**Timestamp**: 2026-11-05T14:16:04Z
**AI Response**: 解消案1を更新。東京業務主系と大阪制御正本を分離し、遮断意図を制御正本で先に記録、旧業務処理には直接資格を与えず実行仲介を設け、新しい環境IDへ復元する案を提示。旧主系の応答を必要としない開放証拠と障害別の可否を表にした。大阪制御正本の喪失と厳密な送信遮断は未解決として明記し、構成負担・性能・費用を採用条件とした。旧質問の回答依頼を保留。公式Firestore分離・Cloud Runネットワーク資料を参照。相対リンクと表列を検証。
**Context**: 設計案の更新のみ。採用・実証・段階移行なし。

---

## 非機能設計：外部フィードバックと既存資料の整合確認
**Timestamp**: 2026-11-07T11:12:35Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-nfr-design-followup-questions.md

## Active selection of the file:
# 非機能設計：未具体化事項の解消案と確認

レビュー用の提案。既存の正本を重複転記せず、今回決める差分だけを整理する。回答前に採用済みとは扱わない。設計全体の承認・要件緩和・外部サービス契約は含まない。

## 既存記載で足りる事項

- 受付未確定の遮断維持・範囲不明時の全体遮断・証明不能時の復旧目標未達記録：[非機能要件の詳細2](../patient-support-app/nfr-requirements/nfr-requirements.md)。これらの方針を再質問しない。
- 実送信開始と遮断の順序、調整上限2秒、送信後の結果拒否、目的別同意の区別：同資料の詳細5。研究・品質改善の撤回だけで通常相談AIを止めない。
- 削除再反映用記録と保持終了の条件：[業務規則BR-07](../patient-support-app/functional-design/business-rules.md)、[元別削除対象](../patient-support-app/functional-design/domain-entities.md)。保持期限を再質問・自動延長しない。
- メールによる権利請求：[運営決定の権利請求](../patient-support-app/functional-design/operations-functional-decisions.md)。新しい窓口を無条件に追加しない。

## 解消案1（差替案）：主系と独立した制御正本を残し、旧主系を再利用せず復旧する

旧案の「主系だけで遮断した要求が失われ、旧主系が戻らないと安全を証明できない」問題を解消するための新しい提案。既存のCanary公開・自動切り戻しは維持する。以下は一般データ主系が東京、制御正本が大阪で、大阪が健全なまま東京を失う場合に、東京の復帰なしで開放できる方式案である。大阪も失う場合まで解決した案ではない。

### 役割と記録の置き方

- 東京：通常の患者データと業務処理。制御状態の唯一の正本は置かない。
- 大阪：本文なしの遮断意図・受付段階・実行世代・許可するDB環境ID・外部試行／回数／予算の制御正本。必要な更新を同じ制御DBのトランザクションで順序付ける。東京への複製が終わったことを制御判断の条件にしない。
- 最終実行経路：制御側の判定を通らなければ、患者データの書込・取得／表示用の返却・外部送信を実行できない経路に限定する。東京の業務処理には外部API秘密やDBを直接変更できる資格を持たせない。

最終実行経路は単なる許可トークン発行ではなく、実際の書込・送信を仲介する。単一業務バックエンドという責務は維持するが、同一コードの内部実行経路を別権限・別配置にする変更を伴う。待機アプリは最小待機とする一方、大阪の制御機能は平常時も必要になる。従来案より地域間通信・運用負担が増えるため、採用前に配置・性能・費用を評価する。

### 遮断の手順

1. 本人・対象・目的を確認し、大阪の制御正本に遮断意図と対象の利用禁止状態を一つのトランザクションで耐久保存する。これを利用遮断の論理的な確定点とする。
2. 制御正本の禁止状態を以後の実行経路へ適用し、東京の表示用状態や削除処理を追従させる。東京へ反映する前に東京が失われても、大阪には未完了の要求が残る。
3. 正本・保護先双方への耐久保存という既存の受付確定条件を満たすまでは、受付確定や完了を表示しない。未完了でも利用禁止は維持する。東京喪失後は新しい業務正本へ反映して残りの条件を満たす。

大阪へ到達できない場合、東京だけで新たな「遮断確定」を成立させる経路は作らない。東京側は受付保留と局所的な利用停止を行い、制御側は東京からの送信・書込が到達しても自身の現在状態で判断する。大阪に届かなかった要求の内容は、既存メール受付または本人の同一要求の再提示で照合する。受信済み要求の消失を防ぐメール／受付記録の独立性は解消案4で検証する。

この変更は、保護先へ届かない局所停止を「全体で確定した遮断」と扱わないよう状態を明確化する提案である。既存の速やかな利用停止・最大2秒の調整条件に適合するかを確認し、成立しない場合に無断で要件を緩和しない。

### 旧主系が戻らないときの開放条件

復旧担当が証拠を収集し、同一チーム内の別の再開確認担当が確認する。旧東京主系からの応答は証拠に含めない。

| 条件                               | 使う証拠と実行手段                                                                                                                                          |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 遮断要求の範囲を確定できる         | 大阪の制御正本で、受付未完了を含む遮断意図と確定段階を確認する。全ての全体遮断確定がここを通るという経路制約も確認する                                      |
| 旧業務実行者が新環境へ作用できない | 制御DBのトランザクションで旧世代を閉じ、許可するDB環境IDを新環境へ変更する。仲介経路が旧世代の要求を拒否し、新DBは旧資格を許可しない                        |
| 世代切替前に仲介済みの処理を扱える | 実行中操作を一覧化し、旧DB宛の書込は新DBへ持ち込まない。外部送信は解消案2の試行記録で二重実行を止める。未解決の送信・返却がある対象は開放を保留する         |
| 復元データが使える                 | 復元先を新しい環境IDで作成し、一般データの整合点とRPOを確認する。大阪の最新の遮断・削除・資格失効を反映し、禁止対象が取得・送信・保存できないことを検証する |
| 残る受付を落とさない               | 独立したメール／受付記録から確認済み請求を照合し、安全記録へ反映する。未確認の本人請求は受付状態を保持する                                                  |
| 公開してよい                       | 必要な正常／拒否試験、最終実行経路の遮断証跡、上記の照合結果が揃う。対象範囲が特定できなければ全体を非公開のままとする                                      |

旧DBへの遅延書込自体を止められない場合も、新環境への書込・読取・複製の権限を与えず、旧DBを永久に業務へ戻さない。旧DBは削除期限に従い消去する。この条件は、古い保存先の全書込を必ず停止できるという保証と区別する。切替後の採用データを新環境に限定する方式として要件との整合をレビューする。

### 「確認してから実行する」競合の扱い

新DBの書込は、書込先DB内の有効世代確認と更新を同一トランザクションに含める。旧DBは再接続・逆同期を禁止する。これにより新DBへ旧世代が書き込む経路を排除する。Firestoreの[トランザクション分離](https://firebase.google.com/docs/firestore/transaction-data-contention)はDB内で利用できるが、別DBや外部HTTPまで原子的に扱える根拠にはしない。

外部送信は制御側の仲介以外から到達できない構成を候補とする。[Cloud Runのネットワーク制御](https://docs.cloud.google.com/run/docs/securing/security)を参考に、全送信経路・資格・既存接続まで検証する。IAM変更やファイアウォール設定変更の要求を発行しただけで遮断完了としない。

仲介処理にも「最終確認後に停止し、遮断後に復帰して送信する」競合は残り得る。対象の送信経路を停止・排他化し、未開始処理の無効化または開始済み処理の分類を確認してから遮断を確定する具体方式を試作する。最大2秒で順序を証明できなければ、送信・利用を止め受付保留とし、厳密な遮断が成立したと表示しない。ゲートウェイを置いただけで解消済みにしない。

### 障害別の範囲と限界

| 状態                       | 通常利用・送信                                                 | 削除・撤回                                                   | 再開                                                               |
| -------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------ |
| 東京喪失・大阪健全         | 復旧完了まで停止。旧要求は大阪で拒否／照合                     | 大阪の制御経路または独立メールで受け、未完了のまま遮断を維持 | 上表の証拠と新環境への適用が揃えば東京の復帰なしで可能             |
| 大阪制御正本喪失・東京健全 | 現在の安全条件を確認できない操作を停止                         | 独立メールで受信。安全記録・受付確定は保留                   | 正確な制御正本を回復できるまで不可。古い非同期コピーで代用しない   |
| 東京・大阪の通信分断       | 東京に処理継続の権限を残さず、制御経路へ到達できない操作を停止 | 到達できる制御経路か独立メールへ。受付段階を正確に表示       | 大阪健全と判定でき、旧経路の影響を排除して新環境を用意できれば可能 |
| 両地域／制御の整合性も喪失 | 停止                                                           | 独立メールも利用可能な場合のみ受信できる                     | 制御記録の完全性を復元できなければ不可                             |

本案は二地域の対称的な自動フェイルオーバーではない。東京主系の永久喪失に対する開放根拠を具体化する一方、大阪制御正本の永久喪失は未解決として残す。制御正本にも地域喪失耐性が必要なら、耐久化・独立した判定基盤を別途比較する必要がある。一般データと同じ非同期複製で無損失を保証しない。

実証前に本案を採用済みとせず、残る設計課題は、最終送信経路の厳密な遮断、制御正本の保護、地域間遅延・性能、権限分離に伴う構成・費用とする。安全な停止を確認できても、着手後24時間の復旧目標を超えれば目標未達と記録する。

## 解消案2：送信・回数・予算を一般データのRPOから分離する

外部送信前に、切替後も確認可能な場所へ、本人／支援実行／セッションへの最小参照、要求キー、外部試行ID、目的、対象版、消費回数、予算予約、状態・実行世代を耐久保存する。本文やメールアドレスをこの台帳に複製しない。一般相談データの4時間損失許容を、この判断記録へ適用しない。

状態は「予約済み・未送信を証明可能」「送信した可能性あり」「応答確認」「終端」に分ける。送信する可能性のある段階へ耐久的に進めてから、実送信を開始する。記録後に送信せず落ちた場合も、未送信の証明がない限り成否不明として扱う。これにより再送より停止を選ぶケースがあることを明示する。

切替後は同一キーの再送だけでなく、新しいキーでの同一操作も照合する。支援・セッションの残回数や予算を復旧前の状態より増やさない。照合対象・消費量が不明なら、その対象の新規生成も保留する。記録を保持できない場合に再生成で埋め合わせない。

メールも通知ID・種別・宛先への安全な参照・送信試行の状態を保護する。ただし重要通知とパスワード再設定は同じ再送方針にしない。再設定の意図的な再送は既存の新世代発行条件を適用する。提供元の二重受信防止を証明できない場合、成否不明の自動再送を止める。

追加試験：提供元が受信した直後・応答受領前の主系喪失、予約記録直後・未送信での喪失、異なるキーでの再受付、主系復帰後の旧試行再開。合格条件は二重送信なし、回数／予算の復活なし、状態不明の正確な表示とする。

## 解消案3：古い復元点を開放できなくする

復元物・隔離DB・export・移行コピーを、作成元環境・世代・復元点・削除反映到達点・期限の一覧で管理する。個々の削除要求の追跡を破棄する前に、その要求が必要な古いコピーが消去済みか、業務環境への再接続を恒久的に禁止できていることを確認する。

利用可能な復元世代の一覧を現在の制御側で管理し、一覧にないコピー、必要な削除履歴が失われたコピー、古い主系は、資格・経路・アプリの検証で拒否する。古いコピー内に残る許可一覧を自己証明として使用しない。再利用する場合は現在の正本から再構築する。

恒久拒否の記録は環境・世代単位とし、削除対象者との対応を必要以上に残さない。コピーを隔離しただけで物理消去期限を達成したとは扱わない。7日・35日・180日の既存期限と両立しない構成は不採用とする。

追加試験：削除前コピーを期限前に復元して放置した場合、旧主系が長期間後に復帰した場合、個別追跡消去後に古いexportを投入した場合。いずれも削除対象の取得・再送信・新主系への同期を拒否する。

## 解消案4：停止中の権利請求を既存メール窓口へ接続する

アプリ停止時は既存のメール窓口を案内する。窓口案内は主系APIを必要としない固定表示を候補とし、メール受信環境・受信時刻・最小受付記録が主系障害で失われないことを確認する。返信・手動確認は既存の保守体制に従い、即時の人手対応を追加しない。

受信、本人確認、対象確認、遮断、受付確定を別時刻で記録し、復旧後の手動登録で受信時刻を書き換えない。本人確認前のメールだけで他人のアカウントを停止しない。本人・対象を確認できた要求は、安全記録へ反映してから利用再開する。

7日・35日の起算は現在の正本に従う。ただしメール受信から受付確定までの保留によって期限を意図的に先送りしない。停止中も実行できる受付確定経路を設計し、現在のポリシー文面と両立しない遅延が避けられない場合は、既存要件どおり起算・受付方式の再確認対象として明示する。運用記録を後で登録すれば解消すると扱わない。

## 質問1：地域障害時の継続性と構成負担

**回答依頼を一旦保留する。** 下記は旧案に対する質問として保持する。解消案1の差替案は、旧主系なしで開放する根拠と残る故障範囲を具体化した比較案であり、下記Aへの回答だけで成立・採用としない。具体方式と制御正本の保護の比較後に、必要な判断に絞って質問を更新する。Canaryの既存回答は変更しない。

現状は二地域を使う方針ですが、「片方を失っても安全な再開を判断できること」と「両方への記録を必要とすること」を同時に満たす具体方式は未確定です。保護側自体を失う場合も含めて、どの方向で解消案を詰めますか。

A) ベータでは現行の二地域方針を維持する案を優先する（推奨）。証跡・実行権の確認が不能な間は、影響する生成・書込・安全変更の受付確定を保留する。通常利用と権利請求の可否を障害別に定義し、停止中も既存メールで請求を受ける。安全に再開できず着手後24時間を超えた場合は復旧目標未達と記録する。復旧目標を撤廃せず、試作で成立しなければ構成を再検討する。

B) 片方の地域を失っても再開判断と重要な受付を続けられることを優先する。独立した判定基盤や合意方式を含め構成案・費用・国内配置の可能性を比較してほしい。第三の保存先を足すだけで成立するとは扱わず、採用前に方式を再レビューする。

C) その他（優先する継続範囲・制約を記載）。

[Answer]:

### 回答後に具体化する内容

主系喪失・保護側喪失・通信分断・両系喪失について、通常の閲覧／書込、AI／メール、削除・撤回の受信／遮断／受付確定、復旧の可否を表にする。旧主系の応答に依存しない証拠の取得主体・保存先・実行先での拒否手段を対応付ける。

実行権の事前照会やリースだけでは、照会後に止まった旧処理の実行を防げたことにしない。実際の書込確定・外部送出の経路で古い実行権を拒否できることを、プロセス停止・再開と通信分断の試験で確認する。成立しなければ当該構成は採用しない。

解消案1〜4はこの質問で選ぶ構成方針と既存要件に沿って精査する。既存の定義を正本に残し、採用した具体方式だけを方式文書・論理部品へ統合する。本ファイルを独立した実装正本として恒久的に増やさない。

## 検証・拡張規則の扱い

文章・表・箇条書き・選択肢で記述し、図・埋込コードなし。Markdown段落・表列数・相対参照・回答欄1件・その他選択肢を検証する。旧質問は回答依頼を保留中。

RESILIENCY-10〜13の未具体化事項は解決案と受入試験を検討中であり、解消済み・実装適合とはしない。RESILIENCY-02の既存復旧目標を維持し、安全な停止と目標達成を別評価する。RESILIENCY-14は初回公開前・重要変更後の試験方針を維持。その他の回復力規則は今回変更なし。PBTは文書検討のため実行評価N/A、既存の選定と性質検証条件を維持する。無効なセキュリティ拡張は適用省略する。

## Open tabs:
- patient-support-app-nfr-design-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-followup-questions.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- patient-support-app-nfr-design-plan.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md

## My request:
**β版なら、解消案2・3・4の方針を採用し、解消案1は東京喪失に備える第一候補として試作に進めるのがよいと思います。** 4案は互いに補完する関係です。案1が再開を判断する仕組み、案2が送信と消費回数を守る仕組み、案3が古いデータの復活を防ぐ仕組み、案4が停止中も請求を受ける仕組みです。地域構成は旧質問の**A寄り**ですが、旧質問は保留のままでよいです。

| 解消案                  | 評価               | 採用前に詰める点                                   |
| -------------------- | ---------------- | ------------------------------------------ |
| **1．大阪に制御正本を置く**     | **第一候補。構成採用は保留** | 遮断の確定点、分断中に大阪へ届かなかった要求の扱い、大阪から使える一般データの復元元 |
| **2．送信・回数・予算を分離する**  | **方針を採用**        | 別キーでも同じ試行と判定する条件、未送信が証明できた予約と成否不明の試行の精算    |
| **3．古い復元点を開放できなくする** | **方針を採用**        | 隔離コピーへのアクセス制御、元の削除期限の引き継ぎ、消去の確認方法          |
| **4．既存メールで権利請求を受ける** | **方針を採用**        | 停止中にどこまで本人確認・遮断・受付確定ができるか、復旧時にどの受信分まで照合するか |

### 案1｜方向性はよい。遮断の確定点は書き直したい

旧東京の応答を待たず、大阪の記録と新環境側の拒否設定で再開を判断する考え方は妥当です。ただし、本文の前半では**大阪への耐久保存を遮断の確定点**とし、後半では**実行中の処理を分類してから遮断を確定する**としています。このままだと、判定を通過した処理が停止し、大阪に禁止状態を書き込んだ後に復帰して送信するケースで、どちらの記述を基準に合否を決めるかが曖昧です。

状態は **「遮断意図を耐久保存し、新規処理を拒否」→「実行中処理を整理し、遮断確定」→「既存の耐久保存条件を満たし、受付確定」** と分けるのがよいです。試験では、外部送信の直前、患者データの返却直前、DBの書込確定直前で処理を止め、遮断後に再開させます。2秒以内に順序を確定できない場合は、停止を維持して受付を保留し、2秒要件への適合は別に判定します。新DB内の世代確認は旧世代の書込を防ぐ手段として有効ですが、同じ世代の処理と個別の撤回が競合するケースは別に検証が必要です。Firestoreの直列化保証は、そのDB内のトランザクションに適用されます。 [firebase.google.com](https://firebase.google.com/docs/firestore/transaction-data-contention?utm_source=chatgpt.com)

もう一つ重要なのは、**大阪に遮断記録がない場合に「要求がなかった」と判断できる条件**です。東京が要求を受信し、大阪へ記録する前に東京を失うと、大阪の台帳だけではその要求を見つけられません。メール照合で救えるのはメールにも届いた要求です。アプリで受信した要求を独立した耐久記録に残せる経路を設けるか、受信済み要求の範囲を証明できない場合は全体の再開を保留するかを、開放条件に明記してください。また、東京喪失時に**4時間以内の復元点を大阪側から実際に取得できること**も採用条件です。Firestoreの標準バックアップ復元先には元と同じロケーションという制約があるため、東京のバックアップをそのまま大阪へ復元する前提では成立しません。 [docs.cloud.google.com](https://docs.cloud.google.com/firestore/docs/reference/rest/v1/projects.databases/restore?utm_source=chatgpt.com)

### 案2｜4案の中で、最も先に固めたい

送信直後に障害が起きても、回数や予算が復活しない設計は採用したいです。詰めるべきなのは、**再試行と、患者が明示的に選んだ次の生成をどう区別するか**です。相談IDと対象版だけで同一視すると、正当な再生成まで止まります。利用者の操作単位にサーバー側で試行IDを割り当て、通信上の要求キーが変わっても、同じ操作の再受付なら既存試行に結び付ける設計がよいです。 [aws.amazon.com](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/?utm_source=chatgpt.com)

回数と予算については、**未送信を証明できた予約は既存ルールに沿って解放し、送信した可能性が残る試行は自動再送も自動返却も保留する**、という精算表があると実装判断が揃います。メールは、重要通知の再送と、本人が再度依頼したパスワード再設定の新世代発行を分ける現案に賛成です。

### 案3｜採用。隔離中にも削除期限を適用する

現在の制御正本で復元物の利用可否を決める方式は妥当です。追加したいのは、**復元時点で元データに適用される削除期限を引き継ぎ、復元日を起算にしない**という規則です。隔離コピーは業務から切り離した状態で作成し、参照・export・再複製を許す資格も限定します。合格条件には「開放を拒否できた」に加え、**期限内に消去を確認できた**ことを入れたいです。特に旧東京が停止したまま期限を迎える場合は、消去の実行手段と証跡を採用前に確認する必要があります。

### 案4｜採用。メール照合を再開手順に組み込む

受信、本人確認、遮断、受付確定を別時刻にする方針は妥当です。復旧時には、**どの受信分まで確認したかを記録し、確認済みの請求を安全記録へ反映してから再開する**手順が必要です。復旧作業中に届いた新着を誰が引き継ぐかも決めておくと、照合完了から公開までの間に請求が抜けるのを防げます。

また、停止中の本人確認や受付確定が東京の認証・データ参照に依存するなら、メールでできるのは受信までです。既存の期限内に処理できるかは、その依存先と保守体制を踏まえて確認してください。受信時刻を保存するだけでは、受付確定の遅延は解消しません。

**次の判断は、案1の試作で「東京なしで安全に開けるか」を確認してからで十分です。** 見るべき結果は、遮断後に遅延処理が実行されないこと、分断中の受信済み要求を取りこぼさないこと、大阪から所定の復元点で再開できることの3つです。大阪の永久喪失時にも再開や重要な受付の継続が必要と判断した段階で、Bの構成比較に進むのが妥当です。



このようなフィードバックが来たが、既存ファイルとの整合性は保たれているか、"
**AI Response**: 方向性は既存要件と概ね整合するが、案1の遮断確定点の二重定義、東京のみ受信した要求の完全性、別地域で利用可能な復元点は未解消。案2の操作IDと外部試行IDの区別・最初の応答喪失時の対応付け、未送信予約の精算を具体化する必要あり。案3の元期限継承は既存要件で定義済み。案4の受信照合境界は追加具体化。採用・試作の文言は受領したフィードバックとして評価し、現在の正式資料は未採用のままなので反映済みとは言わない。Firestore公式restoreの同一ロケーション制約を確認。設計本文と採用状態は変更しない。
**Context**: 文書レビューのみ、試作・コード生成・段階移行なし。回復力10〜13の未解消事項を指摘、PBT実行はN/A、セキュリティ拡張は無効につき省略。

---

## 非機能設計：フィードバックを反映した具体案への修正
**Timestamp**: 2026-11-07T11:18:26Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-nfr-design-followup-questions.md

## Active selection of the file:
# 非機能設計：未具体化事項の解消案と確認

レビュー用の提案。既存の正本を重複転記せず、今回決める差分だけを整理する。回答前に採用済みとは扱わない。設計全体の承認・要件緩和・外部サービス契約は含まない。

## 既存記載で足りる事項

- 受付未確定の遮断維持・範囲不明時の全体遮断・証明不能時の復旧目標未達記録：[非機能要件の詳細2](../patient-support-app/nfr-requirements/nfr-requirements.md)。これらの方針を再質問しない。
- 実送信開始と遮断の順序、調整上限2秒、送信後の結果拒否、目的別同意の区別：同資料の詳細5。研究・品質改善の撤回だけで通常相談AIを止めない。
- 削除再反映用記録と保持終了の条件：[業務規則BR-07](../patient-support-app/functional-design/business-rules.md)、[元別削除対象](../patient-support-app/functional-design/domain-entities.md)。保持期限を再質問・自動延長しない。
- メールによる権利請求：[運営決定の権利請求](../patient-support-app/functional-design/operations-functional-decisions.md)。新しい窓口を無条件に追加しない。

## 解消案1（差替案）：主系と独立した制御正本を残し、旧主系を再利用せず復旧する

旧案の「主系だけで遮断した要求が失われ、旧主系が戻らないと安全を証明できない」問題を解消するための新しい提案。既存のCanary公開・自動切り戻しは維持する。以下は一般データ主系が東京、制御正本が大阪で、大阪が健全なまま東京を失う場合に、東京の復帰なしで開放できる方式案である。大阪も失う場合まで解決した案ではない。

### 役割と記録の置き方

- 東京：通常の患者データと業務処理。制御状態の唯一の正本は置かない。
- 大阪：本文なしの遮断意図・受付段階・実行世代・許可するDB環境ID・外部試行／回数／予算の制御正本。必要な更新を同じ制御DBのトランザクションで順序付ける。東京への複製が終わったことを制御判断の条件にしない。
- 最終実行経路：制御側の判定を通らなければ、患者データの書込・取得／表示用の返却・外部送信を実行できない経路に限定する。東京の業務処理には外部API秘密やDBを直接変更できる資格を持たせない。

最終実行経路は単なる許可トークン発行ではなく、実際の書込・送信を仲介する。単一業務バックエンドという責務は維持するが、同一コードの内部実行経路を別権限・別配置にする変更を伴う。待機アプリは最小待機とする一方、大阪の制御機能は平常時も必要になる。従来案より地域間通信・運用負担が増えるため、採用前に配置・性能・費用を評価する。

### 遮断の手順

1. 本人・対象・目的を確認し、大阪の制御正本に遮断意図と対象の利用禁止状態を一つのトランザクションで耐久保存する。これを利用遮断の論理的な確定点とする。
2. 制御正本の禁止状態を以後の実行経路へ適用し、東京の表示用状態や削除処理を追従させる。東京へ反映する前に東京が失われても、大阪には未完了の要求が残る。
3. 正本・保護先双方への耐久保存という既存の受付確定条件を満たすまでは、受付確定や完了を表示しない。未完了でも利用禁止は維持する。東京喪失後は新しい業務正本へ反映して残りの条件を満たす。

大阪へ到達できない場合、東京だけで新たな「遮断確定」を成立させる経路は作らない。東京側は受付保留と局所的な利用停止を行い、制御側は東京からの送信・書込が到達しても自身の現在状態で判断する。大阪に届かなかった要求の内容は、既存メール受付または本人の同一要求の再提示で照合する。受信済み要求の消失を防ぐメール／受付記録の独立性は解消案4で検証する。

この変更は、保護先へ届かない局所停止を「全体で確定した遮断」と扱わないよう状態を明確化する提案である。既存の速やかな利用停止・最大2秒の調整条件に適合するかを確認し、成立しない場合に無断で要件を緩和しない。

### 旧主系が戻らないときの開放条件

復旧担当が証拠を収集し、同一チーム内の別の再開確認担当が確認する。旧東京主系からの応答は証拠に含めない。

| 条件                               | 使う証拠と実行手段                                                                                                                                          |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 遮断要求の範囲を確定できる         | 大阪の制御正本で、受付未完了を含む遮断意図と確定段階を確認する。全ての全体遮断確定がここを通るという経路制約も確認する                                      |
| 旧業務実行者が新環境へ作用できない | 制御DBのトランザクションで旧世代を閉じ、許可するDB環境IDを新環境へ変更する。仲介経路が旧世代の要求を拒否し、新DBは旧資格を許可しない                        |
| 世代切替前に仲介済みの処理を扱える | 実行中操作を一覧化し、旧DB宛の書込は新DBへ持ち込まない。外部送信は解消案2の試行記録で二重実行を止める。未解決の送信・返却がある対象は開放を保留する         |
| 復元データが使える                 | 復元先を新しい環境IDで作成し、一般データの整合点とRPOを確認する。大阪の最新の遮断・削除・資格失効を反映し、禁止対象が取得・送信・保存できないことを検証する |
| 残る受付を落とさない               | 独立したメール／受付記録から確認済み請求を照合し、安全記録へ反映する。未確認の本人請求は受付状態を保持する                                                  |
| 公開してよい                       | 必要な正常／拒否試験、最終実行経路の遮断証跡、上記の照合結果が揃う。対象範囲が特定できなければ全体を非公開のままとする                                      |

旧DBへの遅延書込自体を止められない場合も、新環境への書込・読取・複製の権限を与えず、旧DBを永久に業務へ戻さない。旧DBは削除期限に従い消去する。この条件は、古い保存先の全書込を必ず停止できるという保証と区別する。切替後の採用データを新環境に限定する方式として要件との整合をレビューする。

### 「確認してから実行する」競合の扱い

新DBの書込は、書込先DB内の有効世代確認と更新を同一トランザクションに含める。旧DBは再接続・逆同期を禁止する。これにより新DBへ旧世代が書き込む経路を排除する。Firestoreの[トランザクション分離](https://firebase.google.com/docs/firestore/transaction-data-contention)はDB内で利用できるが、別DBや外部HTTPまで原子的に扱える根拠にはしない。

外部送信は制御側の仲介以外から到達できない構成を候補とする。[Cloud Runのネットワーク制御](https://docs.cloud.google.com/run/docs/securing/security)を参考に、全送信経路・資格・既存接続まで検証する。IAM変更やファイアウォール設定変更の要求を発行しただけで遮断完了としない。

仲介処理にも「最終確認後に停止し、遮断後に復帰して送信する」競合は残り得る。対象の送信経路を停止・排他化し、未開始処理の無効化または開始済み処理の分類を確認してから遮断を確定する具体方式を試作する。最大2秒で順序を証明できなければ、送信・利用を止め受付保留とし、厳密な遮断が成立したと表示しない。ゲートウェイを置いただけで解消済みにしない。

### 障害別の範囲と限界

| 状態                       | 通常利用・送信                                                 | 削除・撤回                                                   | 再開                                                               |
| -------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------ |
| 東京喪失・大阪健全         | 復旧完了まで停止。旧要求は大阪で拒否／照合                     | 大阪の制御経路または独立メールで受け、未完了のまま遮断を維持 | 上表の証拠と新環境への適用が揃えば東京の復帰なしで可能             |
| 大阪制御正本喪失・東京健全 | 現在の安全条件を確認できない操作を停止                         | 独立メールで受信。安全記録・受付確定は保留                   | 正確な制御正本を回復できるまで不可。古い非同期コピーで代用しない   |
| 東京・大阪の通信分断       | 東京に処理継続の権限を残さず、制御経路へ到達できない操作を停止 | 到達できる制御経路か独立メールへ。受付段階を正確に表示       | 大阪健全と判定でき、旧経路の影響を排除して新環境を用意できれば可能 |
| 両地域／制御の整合性も喪失 | 停止                                                           | 独立メールも利用可能な場合のみ受信できる                     | 制御記録の完全性を復元できなければ不可                             |

本案は二地域の対称的な自動フェイルオーバーではない。東京主系の永久喪失に対する開放根拠を具体化する一方、大阪制御正本の永久喪失は未解決として残す。制御正本にも地域喪失耐性が必要なら、耐久化・独立した判定基盤を別途比較する必要がある。一般データと同じ非同期複製で無損失を保証しない。

実証前に本案を採用済みとせず、残る設計課題は、最終送信経路の厳密な遮断、制御正本の保護、地域間遅延・性能、権限分離に伴う構成・費用とする。安全な停止を確認できても、着手後24時間の復旧目標を超えれば目標未達と記録する。

## 解消案2：送信・回数・予算を一般データのRPOから分離する

外部送信前に、切替後も確認可能な場所へ、本人／支援実行／セッションへの最小参照、要求キー、外部試行ID、目的、対象版、消費回数、予算予約、状態・実行世代を耐久保存する。本文やメールアドレスをこの台帳に複製しない。一般相談データの4時間損失許容を、この判断記録へ適用しない。

状態は「予約済み・未送信を証明可能」「送信した可能性あり」「応答確認」「終端」に分ける。送信する可能性のある段階へ耐久的に進めてから、実送信を開始する。記録後に送信せず落ちた場合も、未送信の証明がない限り成否不明として扱う。これにより再送より停止を選ぶケースがあることを明示する。

切替後は同一キーの再送だけでなく、新しいキーでの同一操作も照合する。支援・セッションの残回数や予算を復旧前の状態より増やさない。照合対象・消費量が不明なら、その対象の新規生成も保留する。記録を保持できない場合に再生成で埋め合わせない。

メールも通知ID・種別・宛先への安全な参照・送信試行の状態を保護する。ただし重要通知とパスワード再設定は同じ再送方針にしない。再設定の意図的な再送は既存の新世代発行条件を適用する。提供元の二重受信防止を証明できない場合、成否不明の自動再送を止める。

追加試験：提供元が受信した直後・応答受領前の主系喪失、予約記録直後・未送信での喪失、異なるキーでの再受付、主系復帰後の旧試行再開。合格条件は二重送信なし、回数／予算の復活なし、状態不明の正確な表示とする。

## 解消案3：古い復元点を開放できなくする

復元物・隔離DB・export・移行コピーを、作成元環境・世代・復元点・削除反映到達点・期限の一覧で管理する。個々の削除要求の追跡を破棄する前に、その要求が必要な古いコピーが消去済みか、業務環境への再接続を恒久的に禁止できていることを確認する。

利用可能な復元世代の一覧を現在の制御側で管理し、一覧にないコピー、必要な削除履歴が失われたコピー、古い主系は、資格・経路・アプリの検証で拒否する。古いコピー内に残る許可一覧を自己証明として使用しない。再利用する場合は現在の正本から再構築する。

恒久拒否の記録は環境・世代単位とし、削除対象者との対応を必要以上に残さない。コピーを隔離しただけで物理消去期限を達成したとは扱わない。7日・35日・180日の既存期限と両立しない構成は不採用とする。

追加試験：削除前コピーを期限前に復元して放置した場合、旧主系が長期間後に復帰した場合、個別追跡消去後に古いexportを投入した場合。いずれも削除対象の取得・再送信・新主系への同期を拒否する。

## 解消案4：停止中の権利請求を既存メール窓口へ接続する

アプリ停止時は既存のメール窓口を案内する。窓口案内は主系APIを必要としない固定表示を候補とし、メール受信環境・受信時刻・最小受付記録が主系障害で失われないことを確認する。返信・手動確認は既存の保守体制に従い、即時の人手対応を追加しない。

受信、本人確認、対象確認、遮断、受付確定を別時刻で記録し、復旧後の手動登録で受信時刻を書き換えない。本人確認前のメールだけで他人のアカウントを停止しない。本人・対象を確認できた要求は、安全記録へ反映してから利用再開する。

7日・35日の起算は現在の正本に従う。ただしメール受信から受付確定までの保留によって期限を意図的に先送りしない。停止中も実行できる受付確定経路を設計し、現在のポリシー文面と両立しない遅延が避けられない場合は、既存要件どおり起算・受付方式の再確認対象として明示する。運用記録を後で登録すれば解消すると扱わない。

## 質問1：地域障害時の継続性と構成負担

**回答依頼を一旦保留する。** 下記は旧案に対する質問として保持する。解消案1の差替案は、旧主系なしで開放する根拠と残る故障範囲を具体化した比較案であり、下記Aへの回答だけで成立・採用としない。具体方式と制御正本の保護の比較後に、必要な判断に絞って質問を更新する。Canaryの既存回答は変更しない。

現状は二地域を使う方針ですが、「片方を失っても安全な再開を判断できること」と「両方への記録を必要とすること」を同時に満たす具体方式は未確定です。保護側自体を失う場合も含めて、どの方向で解消案を詰めますか。

A) ベータでは現行の二地域方針を維持する案を優先する（推奨）。証跡・実行権の確認が不能な間は、影響する生成・書込・安全変更の受付確定を保留する。通常利用と権利請求の可否を障害別に定義し、停止中も既存メールで請求を受ける。安全に再開できず着手後24時間を超えた場合は復旧目標未達と記録する。復旧目標を撤廃せず、試作で成立しなければ構成を再検討する。

B) 片方の地域を失っても再開判断と重要な受付を続けられることを優先する。独立した判定基盤や合意方式を含め構成案・費用・国内配置の可能性を比較してほしい。第三の保存先を足すだけで成立するとは扱わず、採用前に方式を再レビューする。

C) その他（優先する継続範囲・制約を記載）。

[Answer]:

### 回答後に具体化する内容

主系喪失・保護側喪失・通信分断・両系喪失について、通常の閲覧／書込、AI／メール、削除・撤回の受信／遮断／受付確定、復旧の可否を表にする。旧主系の応答に依存しない証拠の取得主体・保存先・実行先での拒否手段を対応付ける。

実行権の事前照会やリースだけでは、照会後に止まった旧処理の実行を防げたことにしない。実際の書込確定・外部送出の経路で古い実行権を拒否できることを、プロセス停止・再開と通信分断の試験で確認する。成立しなければ当該構成は採用しない。

解消案1〜4はこの質問で選ぶ構成方針と既存要件に沿って精査する。既存の定義を正本に残し、採用した具体方式だけを方式文書・論理部品へ統合する。本ファイルを独立した実装正本として恒久的に増やさない。

## 検証・拡張規則の扱い

文章・表・箇条書き・選択肢で記述し、図・埋込コードなし。Markdown段落・表列数・相対参照・回答欄1件・その他選択肢を検証する。旧質問は回答依頼を保留中。

RESILIENCY-10〜13の未具体化事項は解決案と受入試験を検討中であり、解消済み・実装適合とはしない。RESILIENCY-02の既存復旧目標を維持し、安全な停止と目標達成を別評価する。RESILIENCY-14は初回公開前・重要変更後の試験方針を維持。その他の回復力規則は今回変更なし。PBTは文書検討のため実行評価N/A、既存の選定と性質検証条件を維持する。無効なセキュリティ拡張は適用省略する。

## Open tabs:
- patient-support-app-nfr-design-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-followup-questions.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- patient-support-app-nfr-design-plan.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md

## My request:
では具体的にC:\Users\khr85\Documents\ai-dlc-v1-test\aidlc-docs\construction\plans\patient-support-app-nfr-design-followup-questions.md　の案をどう修正するべきですか"
**AI Response**: 指定の追加案ファイルを、遮断3段階・受信完全性・復元元条件・操作と試行の区別・精算・隔離消去・メール照合境界を明確にしたレビュー案へ修正する。採用状態は未確定を維持。
**Context**: 文書修正の着手。実装・構成採用・試作実行なし。

---

## 非機能設計：追加案の修正・検証結果
**Timestamp**: 2026-11-07T11:19:04Z
**AI Response**: 追加案に遮断意図保存・遮断確定・受付確定の3段階、独立したアプリ受信記録と完全性の証拠、東京なしで大阪から利用するRPO4時間の復元元、同一世代の個別撤回の競合試験を記載。案2にOperationId・AttemptId・通信キーの区別、初回応答喪失を含む安定操作識別と精算表を追加。案3に隔離資格・元期限継承・停止した旧主系の消去証跡、案4に停止中の段階別依存先と受信到達点・新着確認担当・公開直前差分を追加。既存定義は参照に留めた。旧質問は保留、案2〜4の方針採用と案1の試作は推奨として区別し、現時点で採用済みにはしない。
**Context**: 相対リンク・UTF-8・全表列数・回答欄1件・旧確定点文言の除去を検証。実装テストは文書変更のみのため未実施。RESILIENCY-10〜13は方式と試験を具体化したが未実証、未解消の設計条件を残し完了を宣言しない。PBT実行N/A、セキュリティ拡張は無効につき省略。

---

## 非機能設計：解消案の設計統合
**Timestamp**: 2026-11-07T11:21:20Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-nfr-design-followup-questions.md

## Active selection of the file:
# 非機能設計：未具体化事項の解消案と確認

レビュー用の提案。既存の正本を重複転記せず、今回決める差分だけを整理する。回答前に採用済みとは扱わない。設計全体の承認・要件緩和・外部サービス契約は含まない。

## 今回の修正と推奨する扱い

2026-11-07の整合確認を反映した修正版。案2・3・4は方針採用を推奨し、案1は東京喪失に備える第一候補として試作対象とすることを推奨する。これは採用判断の提案であり、現段階の採用・構成承認・試作実施を示さない。旧質問1は保留のまま、まず下記の未確認事項を検証する。

案1は再開判断、案2は送信・消費の保護、案3は古いデータの復活防止、案4は停止中の権利請求受付を担い、相互に補完する。採用後は具体方式だけを既存2成果物へ統合し、この資料を実装正本として追加しない。

## 既存記載で足りる事項

- 受付未確定の遮断維持・範囲不明時の全体遮断・証明不能時の復旧目標未達記録：[非機能要件の詳細2](../patient-support-app/nfr-requirements/nfr-requirements.md)。これらの方針を再質問しない。
- 実送信開始と遮断の順序、調整上限2秒、送信後の結果拒否、目的別同意の区別：同資料の詳細5。研究・品質改善の撤回だけで通常相談AIを止めない。
- 削除再反映用記録と保持終了の条件：[業務規則BR-07](../patient-support-app/functional-design/business-rules.md)、[元別削除対象](../patient-support-app/functional-design/domain-entities.md)。保持期限を再質問・自動延長しない。
- メールによる権利請求：[運営決定の権利請求](../patient-support-app/functional-design/operations-functional-decisions.md)。新しい窓口を無条件に追加しない。

## 解消案1（差替案）：主系と独立した制御正本を残し、旧主系を再利用せず復旧する

旧案の「主系だけで遮断した要求が失われ、旧主系が戻らないと安全を証明できない」問題を解消するための新しい提案。既存のCanary公開・自動切り戻しは維持する。以下は一般データ主系が東京、制御正本が大阪で、大阪が健全なまま東京を失う場合に、東京の復帰なしで開放できる方式案である。大阪も失う場合まで解決した案ではない。

### 役割と記録の置き方

- 東京：通常の患者データと業務処理。制御状態の唯一の正本は置かない。
- 大阪：本文なしの遮断意図・受付段階・実行世代・許可するDB環境ID・外部試行／回数／予算の制御正本。必要な更新を同じ制御DBのトランザクションで順序付ける。東京への複製が終わったことを制御判断の条件にしない。
- 最終実行経路：制御側の判定を通らなければ、患者データの書込・取得／表示用の返却・外部送信を実行できない経路に限定する。東京の業務処理には外部API秘密やDBを直接変更できる資格を持たせない。

最終実行経路は単なる許可トークン発行ではなく、実際の書込・送信を仲介する。単一業務バックエンドという責務は維持するが、同一コードの内部実行経路を別権限・別配置にする変更を伴う。待機アプリは最小待機とする一方、大阪の制御機能は平常時も必要になる。従来案より地域間通信・運用負担が増えるため、採用前に配置・性能・費用を評価する。

### 遮断の手順

| 段階 | 確定すること・進む条件 |
| --- | --- |
| 遮断意図の耐久保存・新規処理拒否 | 本人・対象・目的を確認し、制御正本へ意図と新規処理禁止を記録する。この時点では旧許可の実行不能まで証明済みとはしない |
| 利用遮断の確定 | 同じ対象・目的の実行中処理を照合し、未開始処理の許可を無効化する。旧許可で後から送信・書込・返却を開始できないことを証明する。すでに送出済みの処理は区別し、結果の保存・適用・新規表示を拒否する |
| 削除等の受付確定 | 利用遮断が確定し、正本・障害範囲を共有しない保護先の既存の耐久保存条件を満たした場合にのみ返す。削除期限の起算は正本の定義に従う。物理消去完了とは別の状態 |

3段階にそれぞれ時刻・要求ID・対象の制御版・証拠を対応付ける。大阪への意図保存だけを利用遮断の確定点と呼ばない。東京へ追従する前に東京が失われても、制御側の未完了要求と新規処理禁止を維持し、新業務正本への反映後に残る受付条件を確認する。

大阪へ到達できない場合、東京だけで新たな「遮断確定」を成立させる経路は作らない。東京側は受付保留と可能な局所的利用停止を行う。ただし制御側に要求が届いていなければ、制御側の旧状態で処理される危険は残るため、これだけで安全な再開条件を満たしたとはしない。

### アプリ受信要求の完全性

試作では、権利請求のアプリ入口を東京の業務処理から分離し、東京喪失後も利用できる受信経路で要求ID・受信順序・時刻・対象への最小参照を耐久記録してから、制御処理へ渡す方式を第一候補とする。本人未確認の受信記録と、本人確認済みの遮断意図は区別する。本文・秘密の保存範囲は必要最小限とする。

この入口を通らず東京だけが受信できる旧経路が存在する場合は、経路閉鎖と未反映要求の照合まで確認する。「大阪に記録がない」だけでは、要求がなかったと判断しない。本人の再提示やメール照合は補助手段であり、アプリで受信した要求の全件回収の証拠にはしない。

開放には、旧受信経路の停止、独立入口の耐久記録の確認済み到達点、その到達点までの未処理／未確認要求の分類・追跡が必要になる。新着は現在の経路で継続管理する。要求の存在し得る区間や対象を特定できない場合は全体の再開を保留する。入口の応答前・記録前後で主系を失う試験も行い、記録前の受信区間を見落とさない構成か検証する。成立しない場合は未解決とする。

この変更は、保護先へ届かない局所停止を「全体で確定した遮断」と扱わないよう状態を明確化する提案である。既存の速やかな利用停止・最大2秒の調整条件に適合するかを確認し、成立しない場合に無断で要件を緩和しない。

### 旧主系が戻らないときの開放条件

復旧担当が証拠を収集し、同一チーム内の別の再開確認担当が確認する。旧東京主系からの応答は証拠に含めない。

| 条件                               | 使う証拠と実行手段                                                                                                                                          |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 遮断要求の範囲を確定できる | 独立入口の受信記録と大阪の制御正本を照合し、未確認・受付未完了も追跡する。旧受信経路の未到達区間が不明なら全体の再開を保留する |
| 旧業務実行者が新環境へ作用できない | 制御DBのトランザクションで旧世代を閉じ、許可するDB環境IDを新環境へ変更する。仲介経路が旧世代の要求を拒否し、新DBは旧資格を許可しない                        |
| 世代切替前に仲介済みの処理を扱える | 実行中操作を一覧化し、旧DB宛の書込は新DBへ持ち込まない。外部送信は解消案2の試行記録で二重実行を止める。未解決の送信・返却がある対象は開放を保留する         |
| 復元データが使える | 東京へ接続せず大阪側から取得できる整合復元点を使用する。障害時点からのデータ損失が4時間以内であることを確認し、新環境へ最新の遮断・削除・資格失効を反映して拒否試験する |
| 残る受付を落とさない | アプリ・メールの確認済み到達点と処理状態を照合する。確認済み請求を安全記録へ反映し、未確認要求と新着の担当・処理経路を継続管理する |
| 公開してよい                       | 必要な正常／拒否試験、最終実行経路の遮断証跡、上記の照合結果が揃う。対象範囲が特定できなければ全体を非公開のままとする                                      |

旧DBへの遅延書込自体を止められない場合も、新環境への書込・読取・複製の権限を与えず、旧DBを永久に業務へ戻さない。旧DBは削除期限に従い消去する。この条件は、古い保存先の全書込を必ず停止できるという保証と区別する。切替後の採用データを新環境に限定する方式として要件との整合をレビューする。

### 大阪から取得する一般データの復元元

東京への接続を遮断した状態で、大阪の待機DBに適用済みの整合チェックポイント、または大阪から読める整合した基準データと更新記録から新環境を復元する案を検証する。単に複製ジョブが起動していたことではなく、障害発生時点との時刻差・内容・参照整合性と復旧時間を測る。

Firestore標準バックアップのrestoreはバックアップと同じロケーションのDBへの復元に限られる。[公式restore仕様](https://docs.cloud.google.com/firestore/docs/reference/rest/v1/projects.databases/restore)。東京の標準バックアップを大阪へ直接restoreする想定は採用しない。PITRやexportも、東京を失った後に新規取得すればよいとは扱わず、障害前に大阪側で利用可能になったデータと必要な権限・鍵を検証する。

復元可能な一般データの時刻が障害時点より4時間超古い場合はRPO未達、安全台帳・受信範囲が不完全な場合は安全再開不可と、別に判定する。新しい環境を起動できたことだけで本案合格にしない。

### 「確認してから実行する」競合の扱い

新DBの書込は、書込先DB内の有効世代確認と更新を同一トランザクションに含める。旧DBは再接続・逆同期を禁止する。これにより新DBへ旧世代が書き込む経路を排除する。同じ世代の処理と個別の撤回の競合は別に検証し、対象・目的ごとの現在の制御版を実行境界で検証する。大阪の制御版を事前に読んだだけで新DBの書込と原子的になったとは扱わない。Firestoreの[トランザクション分離](https://firebase.google.com/docs/firestore/transaction-data-contention)はDB内で利用できるが、別DBや外部HTTPまで原子的に扱える根拠にはしない。

外部送信は制御側の仲介以外から到達できない構成を候補とする。[Cloud Runのネットワーク制御](https://docs.cloud.google.com/run/docs/securing/security)を参考に、全送信経路・資格・既存接続まで検証する。IAM変更やファイアウォール設定変更の要求を発行しただけで遮断完了としない。

仲介処理にも「最終確認後に停止し、遮断後に復帰して送信する」競合は残り得る。対象の送信経路を停止・排他化し、未開始処理の無効化または開始済み処理の分類を確認してから遮断を確定する具体方式を試作する。最大2秒で順序を証明できなければ、送信・利用を止め受付保留とし、厳密な遮断が成立したと表示しない。ゲートウェイを置いただけで解消済みにしない。

試験は外部送出直前・患者データ返却直前・DB書込確定直前で処理を停止し、遮断の段階移行後に再開させる。旧許可による遅延実行がないこと、送出済み結果を利用しないことを確認する。2秒超過時は安全な停止の成否と時間要件への適否を別々に記録し、保留表示だけで2秒要件合格にしない。

### 障害別の範囲と限界

| 状態                       | 通常利用・送信                                                 | 削除・撤回                                                   | 再開                                                               |
| -------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------ |
| 東京喪失・大阪健全         | 復旧完了まで停止。旧要求は大阪で拒否／照合                     | 大阪の制御経路または独立メールで受け、未完了のまま遮断を維持 | 上表の証拠と新環境への適用が揃えば東京の復帰なしで可能             |
| 大阪制御正本喪失・東京健全 | 現在の安全条件を確認できない操作を停止                         | 独立メールで受信。安全記録・受付確定は保留                   | 正確な制御正本を回復できるまで不可。古い非同期コピーで代用しない   |
| 東京・大阪の通信分断       | 東京に処理継続の権限を残さず、制御経路へ到達できない操作を停止 | 到達できる制御経路か独立メールへ。受付段階を正確に表示       | 大阪健全と判定でき、旧経路の影響を排除して新環境を用意できれば可能 |
| 両地域／制御の整合性も喪失 | 停止                                                           | 独立メールも利用可能な場合のみ受信できる                     | 制御記録の完全性を復元できなければ不可                             |

本案は二地域の対称的な自動フェイルオーバーではない。東京主系の永久喪失に対する開放根拠を具体化する一方、大阪制御正本の永久喪失は未解決として残す。制御正本にも地域喪失耐性が必要なら、耐久化・独立した判定基盤を別途比較する必要がある。一般データと同じ非同期複製で無損失を保証しない。

実証前に本案を採用済みとせず、残る設計課題は、最終送信経路の厳密な遮断、制御正本の保護、地域間遅延・性能、権限分離に伴う構成・費用とする。安全な停止を確認できても、着手後24時間の復旧目標を超えれば目標未達と記録する。

## 解消案2：送信・回数・予算を一般データのRPOから分離する

### 操作と外部試行の識別

通信上のRequestKey、利用者の生成操作を表すOperationId、外部送信試行を表すAttemptIdを区別する。OperationIdに本人・支援実行／セッション・目的・入力／参照版を結び付け、AttemptIdには消費回数・予算予約・送信状態を結び付ける。

操作開始時にクライアントが生成・保持する安定した操作識別子と、サーバーが耐久記録するOperationIdの対応を作る案とする。サーバー発行IDの応答を受け取る前に切断しても、同じ操作識別子で再照合する。通信キーが変わっても同じ操作識別子なら既存操作へ結び付け、異なる入力内容への流用は拒否する。相談ID・対象版・本文の一致だけで同じ操作と推測しない。

本人が明示的に「次の生成」を選んだ場合は新しい操作識別子を作り、残回数・残予算と現在状態を検証して新しい試行を作る。成否不明の旧試行の消費相当分は残す。操作識別子も失われ、再受付か次の生成か判定できない場合は新規送信せず、既存操作の状態確認または本人による新しい操作の明示に進む。本人の新規操作を理由に旧消費を返却しない。

外部送信前に、切替後も確認可能な場所へ、本人／支援実行／セッションへの最小参照、要求キー、外部試行ID、目的、対象版、消費回数、予算予約、状態・実行世代を耐久保存する。本文やメールアドレスをこの台帳に複製しない。一般相談データの4時間損失許容を、この判断記録へ適用しない。

状態は「予約済み・未送信を証明可能」「送信した可能性あり」「応答確認」「終端」に分ける。送信する可能性のある段階へ耐久的に進めてから、実送信を開始する。記録後に送信せず落ちた場合も、未送信の証明がない限り成否不明として扱う。これにより再送より停止を選ぶケースがあることを明示する。

切替後は同一キーの再送だけでなく、新しいキーでの同一操作も上記の対応表で照合する。支援・セッションの残回数や予算を復旧前の状態より増やさない。照合対象・消費量が不明なら、その対象の新規生成も保留する。記録を保持できない場合に再生成で埋め合わせない。

### 回数・予算の精算

| 証拠と状態 | 回数・予算 | 再送・次の操作 |
| --- | --- | --- |
| 送信前の不成立を証明し、旧送信者も今後送出できない | 同じ予約の解放を一回だけ確定する。単なる時間切れ・リース失効を証拠にしない | 既存要求の終端状態を維持し、必要なら現在条件に従う新たな操作へ |
| 送信した可能性があり成否不明 | 消費相当・予算予約を維持し、自動返却しない | 自動再送禁止。既存試行照会か、残枠内で本人が明示した次の操作へ |
| 送信・応答を確認した | 既存の回数規則で消費を維持。予算は信頼できる利用量証拠で一回だけ精算する | 同じ操作の再受付では再送せず、記録済み結果／状態を返す |

予算差額の解放は、外部試行との対応と課金根拠を確認できた場合だけ行う。証拠不足では最大予約を維持する。解放・精算は試行IDと状態版で重複適用を防ぐ。要求キーを変えて解放を重ねない。

メールも通知ID・種別・宛先への安全な参照・送信試行の状態を保護する。ただし重要通知とパスワード再設定は同じ再送方針にしない。再設定の意図的な再送は既存の新世代発行条件を適用する。提供元の二重受信防止を証明できない場合、成否不明の自動再送を止める。

追加試験：提供元が受信した直後・応答受領前の主系喪失、予約記録直後・未送信での喪失、異なるキーでの再受付、主系復帰後の旧試行再開。合格条件は二重送信なし、回数／予算の復活なし、状態不明の正確な表示とする。

## 解消案3：古い復元点を開放できなくする

復元物・隔離DB・export・移行コピーを、作成元環境・世代・復元点・削除反映到達点・期限の一覧で管理する。個々の削除要求の追跡を破棄する前に、その要求が必要な古いコピーが消去済みか、業務環境への再接続を恒久的に禁止できていることを確認する。

利用可能な復元世代の一覧を現在の制御側で管理し、一覧にないコピー、必要な削除履歴が失われたコピー、古い主系は、資格・経路・アプリの検証で拒否する。古いコピー内に残る許可一覧を自己証明として使用しない。再利用する場合は現在の正本から再構築する。

恒久拒否の記録は環境・世代単位とし、削除対象者との対応を必要以上に残さない。コピーを隔離しただけで物理消去期限を達成したとは扱わない。7日・35日・180日の既存期限と両立しない構成は不採用とする。

隔離コピーは作成時から業務アクセスを許可しない。復旧用の限定資格だけに必要な読取・復元権限を与え、参照・export・再複製・公開化の権限を分ける。復元物自身の資格や古い許可一覧で隔離を解除しない。

起算点と期限は既存BR-07を参照し、各コピーに元の削除期限を引き継ぐ。復元・隔離・再コピーした日から再起算しない。旧東京が停止したままでも消去できる管理経路・必要な権限・対象識別・証跡取得を試作の確認項目にする。アクセス不能を消去済みの証拠とせず、期限内に消去できない場合は未達を記録する。

追加試験：削除前コピーを期限前に復元して放置した場合、旧主系が長期間後に復帰した場合、個別追跡消去後に古いexportを投入した場合。いずれも削除対象の取得・再送信・新主系への同期を拒否し、対象コピーの期限内消去を確認できることまでを合格条件とする。

## 解消案4：停止中の権利請求を既存メール窓口へ接続する

アプリ停止時は既存のメール窓口を案内する。窓口案内は主系APIを必要としない固定表示を候補とし、メール受信環境・受信時刻・最小受付記録が主系障害で失われないことを確認する。返信・手動確認は既存の保守体制に従い、即時の人手対応を追加しない。

受信、本人確認、対象確認、遮断、受付確定を別時刻で記録し、復旧後の手動登録で受信時刻を書き換えない。本人確認前のメールだけで他人のアカウントを停止しない。本人・対象を確認できた要求は、安全記録へ反映してから利用再開する。

### 停止中にできることの判定

| 段階 | 東京なしで必要なもの | 不足時の扱い |
| --- | --- | --- |
| 受信 | 独立したメール受信環境と受信ID・元時刻の耐久記録 | 配送・受信自体を確認できなければ受付できたと表示しない |
| 本人・対象確認 | 既存手順に沿う本人確認と、許可された最小限のアカウント／対象参照 | 東京参照や外部認証が必要で利用不能なら受信のみとし、本文・存在を開示しない |
| 遮断 | 案1の制御経路で禁止状態と実行中処理を確認できること | 遮断準備／保留を区別し、遮断確定を表示しない |
| 受付確定 | 既存の正本・保護先への耐久保存条件を満たすこと | 受信のみ・確認中・遮断済みの状態を正確に保持する |

### 復旧時の照合範囲と新着

受信IDの一覧・受信元の連番等、欠落を検出できる証拠で照合対象の到達点を固定する。時刻だけでは同時刻の受信や遅延配送を区別できないため、受信IDも用いる。到達点までの各要求を、確認済み反映完了・本人確認待ち・処理保留などへ対応付け、既読表示だけで照合完了にしない。

同一チーム内で照合担当と新着確認担当を定める。同じ担当者が兼ねる場合も、照合完了から公開までの新着確認を作業として明示し、公開直前に到達点以降の差分を確認する。確認済みの請求は安全記録へ反映し、新着は停止前の旧経路へ戻さず現在の受付経路で継続処理する。影響する未処理要求があれば該当対象を開放せず、範囲不明なら全体の再開を保留する。未確認メールだけで他人を無期限停止する規則にはしない。

7日・35日の起算は現在の正本に従う。ただしメール受信から受付確定までの保留によって期限を意図的に先送りしない。停止中も実行できる受付確定経路を設計し、現在のポリシー文面と両立しない遅延が避けられない場合は、既存要件どおり起算・受付方式の再確認対象として明示する。運用記録を後で登録すれば解消すると扱わない。

## 質問1：地域障害時の継続性と構成負担

**回答依頼を一旦保留する。** 下記は旧案に対する質問として保持する。解消案1の差替案は、旧主系なしで開放する根拠と残る故障範囲を具体化した比較案であり、下記Aへの回答だけで成立・採用としない。具体方式と制御正本の保護の比較後に、必要な判断に絞って質問を更新する。Canaryの既存回答は変更しない。

現状は二地域を使う方針ですが、「片方を失っても安全な再開を判断できること」と「両方への記録を必要とすること」を同時に満たす具体方式は未確定です。保護側自体を失う場合も含めて、どの方向で解消案を詰めますか。

A) ベータでは現行の二地域方針を維持する案を優先する（推奨）。証跡・実行権の確認が不能な間は、影響する生成・書込・安全変更の受付確定を保留する。通常利用と権利請求の可否を障害別に定義し、停止中も既存メールで請求を受ける。安全に再開できず着手後24時間を超えた場合は復旧目標未達と記録する。復旧目標を撤廃せず、試作で成立しなければ構成を再検討する。

B) 片方の地域を失っても再開判断と重要な受付を続けられることを優先する。独立した判定基盤や合意方式を含め構成案・費用・国内配置の可能性を比較してほしい。第三の保存先を足すだけで成立するとは扱わず、採用前に方式を再レビューする。

C) その他（優先する継続範囲・制約を記載）。

[Answer]:

### 試作前に具体化し、結果で判断する内容

主系喪失・保護側喪失・通信分断・両系喪失について、通常の閲覧／書込、AI／メール、削除・撤回の受信／遮断／受付確定、復旧の可否を表にする。旧主系の応答に依存しない証拠の取得主体・保存先・実行先での拒否手段を対応付ける。

実行権の事前照会やリースだけでは、照会後に止まった旧処理の実行を防げたことにしない。実際の書込確定・外部送出の経路で古い実行権を拒否できることを、プロセス停止・再開と通信分断の試験で確認する。成立しなければ当該構成は採用しない。

解消案1〜4は既存要件と本修正版の条件に沿って精査する。旧質問への回答を、具体方式の不成立を解決する代わりに使わない。既存の定義を正本に残し、採用した具体方式だけを方式文書・論理部品へ統合する。本ファイルを独立した実装正本として恒久的に増やさない。

### 試作で判定する3条件（未実施）

1. 遮断後の遅延実行がない：外部送出・データ返却・書込確定の直前で停止・再開し、旧許可と同世代の個別撤回の両方を試す。安全性と2秒要件を別判定する。
2. 分断中の受信済み要求を落とさない：独立入口の記録前後・返信喪失・メール新着を含めて照合し、範囲不明なら再開を拒否する。
3. 東京への接続なしで大阪から所定の復元点を使える：RPO4時間、安全状態の再適用、新環境の正常／拒否試験と復旧時間を測る。

これは試作の判定条件であり、試作コード・クラウド資源は作成していない。大阪制御正本の永久喪失時の継続が必要になった場合、またはこの試作で成立しない場合に独立した判定基盤等の構成比較へ戻る。国内構成・復旧目標・既存Canary方針を無断で変更しない。

## 検証・拡張規則の扱い

文章・表・箇条書き・選択肢で記述し、図・埋込コードなし。Markdown段落・表列数・相対参照・回答欄1件・その他選択肢を検証する。旧質問は回答依頼を保留中。

RESILIENCY-10〜13の未具体化事項は解決案と受入試験を検討中であり、解消済み・実装適合とはしない。RESILIENCY-02の既存復旧目標を維持し、安全な停止と目標達成を別評価する。RESILIENCY-14は初回公開前・重要変更後の試験方針を維持。その他の回復力規則は今回変更なし。PBTは文書検討のため実行評価N/A、既存の選定と性質検証条件を維持する。無効なセキュリティ拡張は適用省略する。

## Open tabs:
- patient-support-app-nfr-design-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-followup-questions.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- patient-support-app-nfr-design-plan.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md

## My request:
では、この解決案を設計に組み込んでください"
**AI Response**: 案2〜4の方針と具体条件を方式文書・論理部品に統合し、案1は試作対象の第一候補として成立条件・未確認範囲を保持する。追加案は重複を除いて統合先と保留質問の記録へ整理する。
**Context**: 明示された設計統合の実施。非機能設計全体の承認や実装・配備・実証は含まない。

---

## 非機能設計：統合完了・検証
**Timestamp**: 2026-11-07T11:24:35Z
**AI Response**: 案2〜4を設計方針として採用し方式文書・論理部品へ統合。案1は東京喪失に備えた試作対象の第一候補として構成採用を保留したまま統合。主系先行遮断の旧手順を置換し3段階・独立受信・復元元・開放証拠・障害別動作を整合。操作・試行・精算・受信照合・復元物の契約を論理部品へ対応。追加案の本文は統合先への参照と旧保留質問へ整理。計画チェック・技術選定・状態・拡張評価を更新し、5文書の相対参照・表列・Unicode・保留回答欄と旧手順除去を検証。
**Context**: 文書のみ。実装・試作・構成採用・段階全体の承認は未実施。回復力08・10〜13の未確認条件を保持し設計適合の過大表現を調整。PBT実行N/A、無効なセキュリティ拡張は適用省略。auditは追記のみ。

---

## 非機能設計：公開前の意味の明確化
**Timestamp**: 2026-11-07T11:55:31Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md

## Active selection of the file:
# U01 非機能設計：方式・受入条件

2026-11-05。レビュー案。全12回答を確認し作成。段階承認・実装・実環境での達成実証は未実施。

2026-11-07のユーザー指示で解消案を統合した。案2（送信・回数・予算）、案3（復元物の隔離・消去）、案4（停止中の権利請求）を設計方針として採用する。案1（大阪の制御正本）は試作対象の第一候補として設計へ組み込み、構成採用は成立確認後とする。旧追加質問は保留。Canary方針を維持し、今回の統合だけで設計全体の承認・試作実施・実データ有効化とはしない。

正本：[非機能要件](../nfr-requirements/nfr-requirements.md)、[技術選定](../nfr-requirements/tech-stack-decisions.md)、[方式選択回答](../../plans/patient-support-app-nfr-design-plan.md)、[論理部品](logical-components.md)。数値の受入条件は非機能要件を優先し、本書の初期設定案と区別する。

## 1. 回答の反映と設計範囲

| 質問 | 回答 | 反映 |
| --- | --- | --- |
| 1・2 | B・B | 国内複数地域の主系・待機系。Pilot Lightとして、データ保護は継続し待機アプリは常時起動を前提にしない |
| 3 | B | CI/CD・構成管理の具体案を作成 |
| 4・5 | C・D | Canary公開、監視結果による自動切り戻し、DB互換性を別途管理 |
| 6 | B | 同一チームの軽量障害対応・事後改善 |
| 7 | B | 公開前と復旧構成の重要変更後に試験。ベータ期間中の定期訓練は必須にしない |
| 8 | A | 最小待機・上限付き自動拡張、AIとPDFの実行枠を分離 |
| 9〜11 | A | 期限・要求台帳・認可・安全変更保護を具体化 |
| 12 | A | 監視間隔、メール基盤、費用・予算上限候補を比較提案 |

運営者と開発チームは同一。運営引継ぎ規格は対象外。ベータから本番へのデータ移行は第9節で扱う。単一バックエンド・既存4論理領域とC01〜C16の所有責務を維持し、研究実データを有効化しない。

## 2. 国内複数地域とデータ保護

東京の一般データ主系と大阪の一般データ待機系を第一案とする。一般データのActive-Passiveと、安全判断用の制御正本の配置を区別する。後述の第一候補では大阪の制御経路が平常時も動作するため、全リソースが待機のみとは説明しない。製品ごとの地域提供・IAM・ネットワーク・切替先URLは成立確認後に確定する。

Firestoreの国内リージョンを2つ作るだけで自動複製されるとは扱わない。地域と復旧機能は[Firestore地域](https://firebase.google.com/docs/firestore/locations)・[DR計画](https://firebase.google.com/docs/firestore/disaster-recovery)を確認した。PITR・バックアップは論理障害対策であり、それだけで別地域の最新データを準備できたことにはしない。

### 一般データ

1. C15の所有元別保存契約を通す全更新に、単調な版・要求ID・削除状態を含む複製用記録を同一主系トランザクションで作成する。主系確定後に待機DBへ適用する。待機先への直接業務書込は拒否する。
2. 複製用記録は患者本文を含み得るため、運用ログとは分離し、暗号化・サービス専用IAM・元データの削除期限を適用する。本文なしという安全台帳の条件を流用しない。
3. 初回の整合した基準点と、そこからの更新記録・削除記録を組み合わせる。通常のFirestore exportは開始時点の厳密なスナップショットではないため、PITR時刻指定または書込停止した基準点を用いる。[公式export/import](https://firebase.google.com/docs/firestore/manage-data/export-import)。
4. 複製遅延15分で警告、1時間で重大通知を初期案とし、RPO上限4時間まで放置しない。復元可能な一貫したチェックポイントの時刻を測る。遅延・欠番・破損により4時間を超える場合は未達として記録し、新規書込を制限して損失拡大を防ぐ。
5. 待機DBへの誤更新伝播に備え、主系PITRと日次バックアップ28日保持の案を併用する。別地域に整合した復元点を残す方式・所要時間は試作で確認する。外部へのexportも35日以内の削除境界に含める。

複製ワーカーは同一コードベースの内部処理であり、別の業務サービスや作業単位を新設しない。適用が二重・逆順になっても同じ版へ収束し、異なる対象の整合性が必要な更新は同じ更新グループとして公開する。整合したチェックポイントなしに待機DBを開放しない。

### 安全変更の保護と制御正本：試作対象の第一候補
旧案の「主系だけで遮断した要求が失われ、旧主系が戻らないと安全を証明できない」問題を解消するための新しい提案。既存のCanary公開・自動切り戻しは維持する。以下は一般データ主系が東京、制御正本が大阪で、大阪が健全なまま東京を失う場合に、東京の復帰なしで開放できる方式案である。大阪も失う場合まで解決した案ではない。

### 役割と記録の置き方

- 東京：通常の患者データと業務処理。制御状態の唯一の正本は置かない。
- 大阪：本文なしの遮断意図・受付段階・実行世代・許可するDB環境ID・外部試行／回数／予算の制御正本。必要な更新を同じ制御DBのトランザクションで順序付ける。東京への複製が終わったことを制御判断の条件にしない。
- 最終実行経路：制御側の判定を通らなければ、患者データの書込・取得／表示用の返却・外部送信を実行できない経路に限定する。東京の業務処理には外部API秘密やDBを直接変更できる資格を持たせない。

最終実行経路は単なる許可トークン発行ではなく、実際の書込・送信を仲介する。単一業務バックエンドという責務は維持するが、同一コードの内部実行経路を別権限・別配置にする変更を伴う。待機アプリは最小待機とする一方、大阪の制御機能は平常時も必要になる。従来案より地域間通信・運用負担が増えるため、採用前に配置・性能・費用を評価する。

### 遮断の手順

| 段階 | 確定すること・進む条件 |
| --- | --- |
| 遮断意図の耐久保存・新規処理拒否 | 本人・対象・目的を確認し、制御正本へ意図と新規処理禁止を記録する。この時点では旧許可の実行不能まで証明済みとはしない |
| 利用遮断の確定 | 同じ対象・目的の実行中処理を照合し、未開始処理の許可を無効化する。旧許可で後から送信・書込・返却を開始できないことを証明する。すでに送出済みの処理は区別し、結果の保存・適用・新規表示を拒否する |
| 削除等の受付確定 | 利用遮断が確定し、正本・障害範囲を共有しない保護先の既存の耐久保存条件を満たした場合にのみ返す。削除期限の起算は正本の定義に従う。物理消去完了とは別の状態 |

3段階にそれぞれ時刻・要求ID・対象の制御版・証拠を対応付ける。大阪への意図保存だけを利用遮断の確定点と呼ばない。東京へ追従する前に東京が失われても、制御側の未完了要求と新規処理禁止を維持し、新業務正本への反映後に残る受付条件を確認する。

大阪へ到達できない場合、東京だけで新たな「遮断確定」を成立させる経路は作らない。東京側は受付保留と可能な局所的利用停止を行う。ただし制御側に要求が届いていなければ、制御側の旧状態で処理される危険は残るため、これだけで安全な再開条件を満たしたとはしない。

### アプリ受信要求の完全性

試作では、権利請求のアプリ入口を東京の業務処理から分離し、東京喪失後も利用できる受信経路で要求ID・受信順序・時刻・対象への最小参照を耐久記録してから、制御処理へ渡す方式を第一候補とする。本人未確認の受信記録と、本人確認済みの遮断意図は区別する。本文・秘密の保存範囲は必要最小限とする。

この入口を通らず東京だけが受信できる旧経路が存在する場合は、経路閉鎖と未反映要求の照合まで確認する。「大阪に記録がない」だけでは、要求がなかったと判断しない。本人の再提示やメール照合は補助手段であり、アプリで受信した要求の全件回収の証拠にはしない。

開放には、旧受信経路の停止、独立入口の耐久記録の確認済み到達点、その到達点までの未処理／未確認要求の分類・追跡が必要になる。新着は現在の経路で継続管理する。要求の存在し得る区間や対象を特定できない場合は全体の再開を保留する。入口の応答前・記録前後で主系を失う試験も行い、記録前の受信区間を見落とさない構成か検証する。成立しない場合は未解決とする。

この変更は、保護先へ届かない局所停止を「全体で確定した遮断」と扱わないよう状態を明確化する提案である。既存の速やかな利用停止・最大2秒の調整条件に適合するかを確認し、成立しない場合に無断で要件を緩和しない。

### 旧主系が戻らないときの開放条件

復旧担当が証拠を収集し、同一チーム内の別の再開確認担当が確認する。旧東京主系からの応答は証拠に含めない。

| 条件                               | 使う証拠と実行手段                                                                                                                                          |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 遮断要求の範囲を確定できる | 独立入口の受信記録と大阪の制御正本を照合し、未確認・受付未完了も追跡する。旧受信経路の未到達区間が不明なら全体の再開を保留する |
| 旧業務実行者が新環境へ作用できない | 制御DBのトランザクションで旧世代を閉じ、許可するDB環境IDを新環境へ変更する。仲介経路が旧世代の要求を拒否し、新DBは旧資格を許可しない                        |
| 世代切替前に仲介済みの処理を扱える | 実行中操作を一覧化し、旧DB宛の書込は新DBへ持ち込まない。外部送信は解消案2の試行記録で二重実行を止める。未解決の送信・返却がある対象は開放を保留する         |
| 復元データが使える | 東京へ接続せず大阪側から取得できる整合復元点を使用する。障害時点からのデータ損失が4時間以内であることを確認し、新環境へ最新の遮断・削除・資格失効を反映して拒否試験する |
| 残る受付を落とさない | アプリ・メールの確認済み到達点と処理状態を照合する。確認済み請求を安全記録へ反映し、未確認要求と新着の担当・処理経路を継続管理する |
| 公開してよい                       | 必要な正常／拒否試験、最終実行経路の遮断証跡、上記の照合結果が揃う。対象範囲が特定できなければ全体を非公開のままとする                                      |

旧DBへの遅延書込自体を止められない場合も、新環境への書込・読取・複製の権限を与えず、旧DBを永久に業務へ戻さない。旧DBは削除期限に従い消去する。この条件は、古い保存先の全書込を必ず停止できるという保証と区別する。切替後の採用データを新環境に限定する方式として要件との整合をレビューする。

### 大阪から取得する一般データの復元元

東京への接続を遮断した状態で、大阪の待機DBに適用済みの整合チェックポイント、または大阪から読める整合した基準データと更新記録から新環境を復元する案を検証する。単に複製ジョブが起動していたことではなく、障害発生時点との時刻差・内容・参照整合性と復旧時間を測る。

Firestore標準バックアップのrestoreはバックアップと同じロケーションのDBへの復元に限られる。[公式restore仕様](https://docs.cloud.google.com/firestore/docs/reference/rest/v1/projects.databases/restore)。東京の標準バックアップを大阪へ直接restoreする想定は採用しない。PITRやexportも、東京を失った後に新規取得すればよいとは扱わず、障害前に大阪側で利用可能になったデータと必要な権限・鍵を検証する。

復元可能な一般データの時刻が障害時点より4時間超古い場合はRPO未達、安全台帳・受信範囲が不完全な場合は安全再開不可と、別に判定する。新しい環境を起動できたことだけで本案合格にしない。

### 「確認してから実行する」競合の扱い

新DBの書込は、書込先DB内の有効世代確認と更新を同一トランザクションに含める。旧DBは再接続・逆同期を禁止する。これにより新DBへ旧世代が書き込む経路を排除する。同じ世代の処理と個別の撤回の競合は別に検証し、対象・目的ごとの現在の制御版を実行境界で検証する。大阪の制御版を事前に読んだだけで新DBの書込と原子的になったとは扱わない。Firestoreの[トランザクション分離](https://firebase.google.com/docs/firestore/transaction-data-contention)はDB内で利用できるが、別DBや外部HTTPまで原子的に扱える根拠にはしない。

外部送信は制御側の仲介以外から到達できない構成を候補とする。[Cloud Runのネットワーク制御](https://docs.cloud.google.com/run/docs/securing/security)を参考に、全送信経路・資格・既存接続まで検証する。IAM変更やファイアウォール設定変更の要求を発行しただけで遮断完了としない。

仲介処理にも「最終確認後に停止し、遮断後に復帰して送信する」競合は残り得る。対象の送信経路を停止・排他化し、未開始処理の無効化または開始済み処理の分類を確認してから遮断を確定する具体方式を試作する。最大2秒で順序を証明できなければ、送信・利用を止め受付保留とし、厳密な遮断が成立したと表示しない。ゲートウェイを置いただけで解消済みにしない。

試験は外部送出直前・患者データ返却直前・DB書込確定直前で処理を停止し、遮断の段階移行後に再開させる。旧許可による遅延実行がないこと、送出済み結果を利用しないことを確認する。2秒超過時は安全な停止の成否と時間要件への適否を別々に記録し、保留表示だけで2秒要件合格にしない。

### 障害別の範囲と限界

| 状態                       | 通常利用・送信                                                 | 削除・撤回                                                   | 再開                                                               |
| -------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------ |
| 東京喪失・大阪健全         | 復旧完了まで停止。旧要求は大阪で拒否／照合                     | 大阪の制御経路または独立メールで受け、未完了のまま遮断を維持 | 上表の証拠と新環境への適用が揃えば東京の復帰なしで可能             |
| 大阪制御正本喪失・東京健全 | 現在の安全条件を確認できない操作を停止                         | 独立メールで受信。安全記録・受付確定は保留                   | 正確な制御正本を回復できるまで不可。古い非同期コピーで代用しない   |
| 東京・大阪の通信分断       | 東京に処理継続の権限を残さず、制御経路へ到達できない操作を停止 | 到達できる制御経路か独立メールへ。受付段階を正確に表示       | 大阪健全と判定でき、旧経路の影響を排除して新環境を用意できれば可能 |
| 両地域／制御の整合性も喪失 | 停止                                                           | 独立メールも利用可能な場合のみ受信できる                     | 制御記録の完全性を復元できなければ不可                             |

本案は二地域の対称的な自動フェイルオーバーではない。東京主系の永久喪失に対する開放根拠を具体化する一方、大阪制御正本の永久喪失は未解決として残す。制御正本にも地域喪失耐性が必要なら、耐久化・独立した判定基盤を別途比較する必要がある。一般データと同じ非同期複製で無損失を保証しない。

実証前に本案を採用済みとせず、残る設計課題は、最終送信経路の厳密な遮断、制御正本の保護、地域間遅延・性能、権限分離に伴う構成・費用とする。安全な停止を確認できても、着手後24時間の復旧目標を超えれば目標未達と記録する。
### 切替・切戻しの共通目標

軽微障害は発生から10分の自動復旧を目標とする。大規模障害は同一チームが翌営業日の保守時間内に着手し、着手から経過24時間以内の復旧を目指す。発生・検知・着手・復旧完了と目標未達を別記する。安全確認不能なら開放しない。

復旧担当が上記の証拠を収集し、同一チーム内の別担当が正常／拒否試験と受信照合を確認してから切り替える。旧東京の応答は開放の必須証拠にしない。戻す場合も現在の正本から新環境を構築し、旧DBをそのまま再開しない。外部認証・AIの提供元全体障害は既存の依存操作の例外条件を維持し、認証迂回・別AIへの自動送信を追加しない。
## 3. CI/CD・Canary・データ互換

GitHub ActionsとTerraformを具体案とする。リポジトリ提供元が異なる場合は同じ検証・承認契約を移植する。CI用権限はOIDC等の短期資格を用い、患者データや本番秘密をPR検証へ渡さない。

PRでは型・静的検査、Vitest例示テスト、fast-check、Emulator結合、ビルドを実行する。合成E2Eを検証環境で行い、固定した依存・コンテナーのダイジェスト・設定版・DB互換範囲・試験結果を承認記録へ対応付ける。承認済みの同一成果物を配備し、環境ごとの再ビルドで内容を変えない。

Cloud Runはリビジョン間のトラフィック移行とロールバックを提供する。[公式配備方式](https://docs.cloud.google.com/run/docs/rollouts-rollbacks-traffic-migration)。初期案は検証用リビジョン確認→5%→25%→100%。各段階は最低15分かつ対象APIの合成試行100件を満たすまで進めない。低トラフィックで実利用の統計が不足する場合も合成試験で補い、未観測を正常にしない。割合・時間はレビュー案。

自動停止・旧版へのトラフィック復帰条件は、越権・削除後利用・二重更新1件、通常API成功率99.5%未満またはp95が2秒超、AI/PDFの期限制御違反、監視欠測、安全台帳不整合とする。起動時からの単一失敗と集計窓の失敗を識別して証跡に残す。完全に安全な旧版への復帰を確認できない場合は対象操作を遮断する。

DBは拡張→両版対応→読取切替→旧形式廃止の順とする。Canary中は新旧リビジョンが同時に動くので、両版が同じ安全条件を満たすことを必須にする。旧版が読み取れない書換え、削除・撤回の復活、Snapshot全履歴の上書きは禁止。非互換移行は通常の自動切り戻しから分離し、停止窓・復旧手順をレビューしてから実施する。アプリ版を戻すだけでDBも戻るとは扱わない。

## 4. 性能・容量・期限

Cloud Runの最小インスタンス0を初期案とし、起動時間も受入試験へ含める。通常APIのp95が成立しなければ主系のみ最小1を費用比較し、値を更新する。[最小インスタンス](https://docs.cloud.google.com/run/docs/configuring/min-instances)。初期の負荷試験設定案は最大4インスタンス・各コンカレンシー8、サービス全体のAI実行2枠・PDF実行1枠。これは20人対応の証明ではなく調整開始値である。

共有実行枠はプロセスメモリーではなく要求台帳上の期限付きリースで管理する。再配備・多インスタンス・地域切替で上限が倍増しないよう世代を照合する。AI/PDFが枠を占有しても一覧・保存・権利行使用の実行余力を残す。枠不足で60秒内の開始を見込めない新規生成は受付前に拒否・入力保持し、受け付けた要求の待ち時間は期限に含める。

要求は本人・目的・入力版・参照版・RequestKey・期限を持ち、受付→待機→送信予約→実行中→結果検証→未確認案保存、または拒否／期限終了へ遷移する。AI待機45秒・サーバー目標55秒・画面待機60秒・要求終端5分を維持する。画面照会は2秒・5秒・10秒、その後最大30秒間隔。非表示タブでは頻度を落とす。

非冪等AI呼出しは、キューやHTTPクライアントの自動再送を無効にする。送信済みか不明の要求は消費相当の枠を維持し、同一キーで再生成しない。元応答を回収できる経路を実証できた場合のみ、5分未満で現在版・同意・権限を再検証して保存する。回収不能は成否不明として終端化する。5分後の遅延結果を保存しない。本文キャッシュは追加しない。

AI・PDF・メールごとにタイムアウト・失敗率・連続失敗を監視し回路遮断する。初期案は同一依存5連続失敗で60秒遮断、合成の単一試行で半開確認。AI半開試行に患者要求の自動再送を使わない。外部障害を保存・閲覧へ不要に波及させない。

### 送信・回数・予算の保護（採用方針）

### 操作と外部試行の識別

通信上のRequestKey、利用者の生成操作を表すOperationId、外部送信試行を表すAttemptIdを区別する。OperationIdに本人・支援実行／セッション・目的・入力／参照版を結び付け、AttemptIdには消費回数・予算予約・送信状態を結び付ける。

操作開始時にクライアントが生成・保持する安定した操作識別子と、サーバーが耐久記録するOperationIdの対応を作る案とする。サーバー発行IDの応答を受け取る前に切断しても、同じ操作識別子で再照合する。通信キーが変わっても同じ操作識別子なら既存操作へ結び付け、異なる入力内容への流用は拒否する。相談ID・対象版・本文の一致だけで同じ操作と推測しない。

本人が明示的に「次の生成」を選んだ場合は新しい操作識別子を作り、残回数・残予算と現在状態を検証して新しい試行を作る。成否不明の旧試行の消費相当分は残す。操作識別子も失われ、再受付か次の生成か判定できない場合は新規送信せず、既存操作の状態確認または本人による新しい操作の明示に進む。本人の新規操作を理由に旧消費を返却しない。

外部送信前に、切替後も確認可能な場所へ、本人／支援実行／セッションへの最小参照、要求キー、外部試行ID、目的、対象版、消費回数、予算予約、状態・実行世代を耐久保存する。本文やメールアドレスをこの台帳に複製しない。一般相談データの4時間損失許容を、この判断記録へ適用しない。

状態は「予約済み・未送信を証明可能」「送信した可能性あり」「応答確認」「終端」に分ける。送信する可能性のある段階へ耐久的に進めてから、実送信を開始する。記録後に送信せず落ちた場合も、未送信の証明がない限り成否不明として扱う。これにより再送より停止を選ぶケースがあることを明示する。

切替後は同一キーの再送だけでなく、新しいキーでの同一操作も上記の対応表で照合する。支援・セッションの残回数や予算を復旧前の状態より増やさない。照合対象・消費量が不明なら、その対象の新規生成も保留する。記録を保持できない場合に再生成で埋め合わせない。

### 回数・予算の精算

| 証拠と状態 | 回数・予算 | 再送・次の操作 |
| --- | --- | --- |
| 送信前の不成立を証明し、旧送信者も今後送出できない | 同じ予約の解放を一回だけ確定する。単なる時間切れ・リース失効を証拠にしない | 既存要求の終端状態を維持し、必要なら現在条件に従う新たな操作へ |
| 送信した可能性があり成否不明 | 消費相当・予算予約を維持し、自動返却しない | 自動再送禁止。既存試行照会か、残枠内で本人が明示した次の操作へ |
| 送信・応答を確認した | 既存の回数規則で消費を維持。予算は信頼できる利用量証拠で一回だけ精算する | 同じ操作の再受付では再送せず、記録済み結果／状態を返す |

予算差額の解放は、外部試行との対応と課金根拠を確認できた場合だけ行う。証拠不足では最大予約を維持する。解放・精算は試行IDと状態版で重複適用を防ぐ。要求キーを変えて解放を重ねない。

メールも通知ID・種別・宛先への安全な参照・送信試行の状態を保護する。ただし重要通知とパスワード再設定は同じ再送方針にしない。再設定の意図的な再送は既存の新世代発行条件を適用する。提供元の二重受信防止を証明できない場合、成否不明の自動再送を止める。

追加試験：提供元が受信した直後・応答受領前の主系喪失、予約記録直後・未送信での喪失、異なるキーでの再受付、主系復帰後の旧試行再開。合格条件は二重送信なし、回数／予算の復活なし、状態不明の正確な表示とする。

## 5. 認可・送信遮断・認証回復

毎要求でFirebase資格、C03のAccount状態・アプリ資格世代、C04の目的別同意、所有元の対象・版、C12の公開状態、必要なら案件許可を照合する。管理用SDKのIAMだけで患者本人の認可を代替しない。ブラウザーからFirestoreの医療本文へ直接アクセスさせない。

識別情報の検出・削除／置換はバックエンド内で行う。検出失敗・不正カタログ・必須情報込みの予算超過は外部送信0回、入力保持。送信予約と遮断を対象世代で順序付け、遮断後に旧許可を使用できない送信経路に限定する。チェック後の別プロセスによる遅延送信を含めて故障注入で検証する。検証不能な短期ロックだけで保証済みにしない。遮断前に送信済みの外部処理は取消・課金停止を保証せず、結果利用を拒否する。

再設定はアプリ管理のランダム単回トークン・ハッシュ・発行世代・サーバー時計の24時間期限を案とする。発行は耐久的メール受付と対応付け、使用開始で旧資格を遮断する。Firebaseパスワード更新・更新トークン失効・アプリ資格世代更新を個別追跡し、全完了後に成功表示して再ログインを求める。途中失敗は処理中として拒否を継続する。

ただしFirebase標準経路には独自のアクションコード処理がある。[公式メールハンドラー](https://firebase.google.com/docs/auth/custom-email-handler)。画面を独自化するだけで、標準SDK／REST経路による古いリンクのパスワード変更を阻止したとはいえない。管理SDKの[パスワード更新](https://firebase.google.com/docs/auth/admin/manage-users)も、アプリ台帳との原子的更新を提供するものではない。

**認証方式の成立条件は未確認**。旧標準リンク・同時実行・遅延した旧管理処理・公開RESTの迂回試験を必須とする。公開前に通過できなければ独自案を成立済みにせず、認証構成または「24時間・最新のみ」要件の変更判断へ戻す。現在の設計承認で要件を緩和しない。

## 6. 保持・削除・秘密

秘密はSecret Manager候補、環境別・用途別のサービス資格を分離する。APIキー・生トークン・パスワード・本文・URLクエリーをログへ出さない。アプリだけでなくプロキシ・例外・Tracing・メール追跡も対象にする。秘密の版とローテーション手順を持ち、旧秘密での実行を停止できることを検証する。

削除台帳は主要環境・待機DB・複製記録・品質改善コピー・由来付き参照・一時PDF・問い合わせメール・バックアップを対象に進捗と失敗を記録する。主要環境7日、バックアップ35日、完了後の最小追跡180日上限、一時PDFは生成開始から24時間を維持する。DBのTTLやストレージLifecycleのみを期限保証にせず、期限前の明示削除・確認・未完了通知を行う。コピーや再試行で期限を再起算しない。

復元先・本番移行先も利用可能化前に削除台帳を適用する。保護台帳と一般複製記録にも削除・最小化処理を適用し、監査を理由に無期限保存しない。期限超過を完了扱いにしない。Firebase認証・外部AI・メール側の処理地域や保持条件の確認は既存の実データ有効化条件を維持する。

### 復元物の隔離と期限内消去（採用方針）

復元物・隔離DB・export・移行コピーを、作成元環境・世代・復元点・削除反映到達点・期限の一覧で管理する。個々の削除要求の追跡を破棄する前に、その要求が必要な古いコピーが消去済みか、業務環境への再接続を恒久的に禁止できていることを確認する。

利用可能な復元世代の一覧を現在の制御側で管理し、一覧にないコピー、必要な削除履歴が失われたコピー、古い主系は、資格・経路・アプリの検証で拒否する。古いコピー内に残る許可一覧を自己証明として使用しない。再利用する場合は現在の正本から再構築する。

恒久拒否の記録は環境・世代単位とし、削除対象者との対応を必要以上に残さない。コピーを隔離しただけで物理消去期限を達成したとは扱わない。7日・35日・180日の既存期限と両立しない構成は不採用とする。

隔離コピーは作成時から業務アクセスを許可しない。復旧用の限定資格だけに必要な読取・復元権限を与え、参照・export・再複製・公開化の権限を分ける。復元物自身の資格や古い許可一覧で隔離を解除しない。

起算点と期限は既存BR-07を参照し、各コピーに元の削除期限を引き継ぐ。復元・隔離・再コピーした日から再起算しない。旧東京が停止したままでも消去できる管理経路・必要な権限・対象識別・証跡取得を試作の確認項目にする。アクセス不能を消去済みの証拠とせず、期限内に消去できない場合は未達を記録する。

追加試験：削除前コピーを期限前に復元して放置した場合、旧主系が長期間後に復帰した場合、個別追跡消去後に古いexportを投入した場合。いずれも削除対象の取得・再送信・新主系への同期を拒否し、対象コピーの期限内消去を確認できることまでを合格条件とする。

## 7. 監視・通知・予算の提案

通常操作の合成監視は1分、実AIを含む固定小入力の監視は5分を第一案とする。研究実データ・患者本文を使わない。AI監視を1分とする代替案は精度向上と費用増を併記する。5分監視は月8,640回、1分は43,200回。低頻度監視では直前正常から次の正常までを保守的停止推定区間とし、独立証跡でのみ訂正する。月間可用性は固定目標を設けず、操作別の値と最低値・欠測・着手待機・計画停止・外部障害を報告する。

readinessは必要設定・認証判定・DBアクセス・安全台帳の利用可否を確認し、livenessはプロセス自身の応答を見る。AI停止をliveness失敗にして全体再起動を繰り返さない。CPU・メモリー・同時実行・キュー年齢・依存クォータ・複製遅延・最終正常バックアップ・削除期限・予算予約残高を監視する。監視自体の欠測を別経路から検出し、通知配送も合成試験する。

### メールの比較

| 候補 | 費用・利点 | 確認条件 |
| --- | --- | --- |
| Amazon SES東京 | 送信従量の第一案。公開料金例0.10 USD／1,000通、添付等は別。1,000通なら基本送信0.10 USD | 別クラウドIAM・ドメイン確認・本番送信許可・バウンス通知・保持と国外処理・到達性を確認 |
| SendGrid Email API | 配信管理をまとめられる代替案 | 公開価格ページが製品ページへ遷移したため今回固定料金を確定せず見積取得。地域・保持・契約を比較 |
| Firebase標準認証メール | 認証用標準経路を使える場合の候補 | 重要運営通知の汎用基盤に転用しない。受付観測・再設定制約を満たすか別評価 |

根拠：[SES料金](https://aws.amazon.com/ses/pricing/)、[SES地域](https://docs.aws.amazon.com/general/latest/gr/ses.html)、[SendGrid製品](https://www.twilio.com/en-us/sendgrid)。送信リージョンだけでメール全経路・受信先まで国内と保証しない。採用案はSES東京だが契約・送信は実施しない。

メールは本文を含まない通知とし、宛先・テンプレート・要求IDを持つ暗号化された永続受付から送る。受付p95 5秒と配送完了を分離する。受付ID・送信先応答・配信イベントを記録し、配送成否不明を無条件再送しない。再設定の再送は新世代へ移行し旧リンクを復活させない。

### 停止中の権利請求と受信照合（採用方針）

アプリ停止時は既存のメール窓口を案内する。窓口案内は主系APIを必要としない固定表示を候補とし、メール受信環境・受信時刻・最小受付記録が主系障害で失われないことを確認する。返信・手動確認は既存の保守体制に従い、即時の人手対応を追加しない。

受信、本人確認、対象確認、遮断、受付確定を別時刻で記録し、復旧後の手動登録で受信時刻を書き換えない。本人確認前のメールだけで他人のアカウントを停止しない。本人・対象を確認できた要求は、安全記録へ反映してから利用再開する。

### 停止中にできることの判定

| 段階 | 東京なしで必要なもの | 不足時の扱い |
| --- | --- | --- |
| 受信 | 独立したメール受信環境と受信ID・元時刻の耐久記録 | 配送・受信自体を確認できなければ受付できたと表示しない |
| 本人・対象確認 | 既存手順に沿う本人確認と、許可された最小限のアカウント／対象参照 | 東京参照や外部認証が必要で利用不能なら受信のみとし、本文・存在を開示しない |
| 遮断 | 案1の制御経路で禁止状態と実行中処理を確認できること | 遮断準備／保留を区別し、遮断確定を表示しない |
| 受付確定 | 既存の正本・保護先への耐久保存条件を満たすこと | 受信のみ・確認中・遮断済みの状態を正確に保持する |

### 復旧時の照合範囲と新着

受信IDの一覧・受信元の連番等、欠落を検出できる証拠で照合対象の到達点を固定する。時刻だけでは同時刻の受信や遅延配送を区別できないため、受信IDも用いる。到達点までの各要求を、確認済み反映完了・本人確認待ち・処理保留などへ対応付け、既読表示だけで照合完了にしない。

同一チーム内で照合担当と新着確認担当を定める。同じ担当者が兼ねる場合も、照合完了から公開までの新着確認を作業として明示し、公開直前に到達点以降の差分を確認する。確認済みの請求は安全記録へ反映し、新着は停止前の旧経路へ戻さず現在の受付経路で継続処理する。影響する未処理要求があれば該当対象を開放せず、範囲不明なら全体の再開を保留する。未確認メールだけで他人を無期限停止する規則にはしない。

7日・35日の起算は現在の正本に従う。ただしメール受信から受付確定までの保留によって期限を意図的に先送りしない。停止中も実行できる受付確定経路を設計し、現在のポリシー文面と両立しない遅延が避けられない場合は、既存要件どおり起算・受付方式の再確認対象として明示する。運用記録を後で登録すれば解消すると扱わない。

### 費用と上限候補

従来のAI低・中・高試算56.25／337.50／1,350 USDを比較用に引き継ぐ。モデルと単価を今回再選定せず、採用前に再確認する。監視を1回入力1,000・課金出力100トークンと仮定し、従来試算単価を使うと1回0.0012 USD、5分監視10.368 USD／月、1分監視51.84 USD／月。いずれも未実測仮定。

監視サービス単体の公開単価例はuptime check 0.30 USD／1,000実行、synthetic monitor 1.20 USD／1,000実行。[公式監視料金](https://cloud.google.com/products/observability/pricing)。実行地域数・監視経路数・関数実行・ログ・アラート・実AI課金を別加算し、監視サービス費だけを総費用としない。

| 月額比較 | 低 | 中 | 高 |
| --- | --- | --- | --- |
| 利用AI（既存仮定） | 56.25 | 337.50 | 1,350.00 |
| 実AI監視（5分・1経路仮定） | 10.37 | 10.37 | 10.37 |
| AI処理中のRun経路（既存単純例） | 1.90 | 5.69 | 11.38 |
| 上記小計USD | 68.52 | 353.56 | 1,371.75 |

Runは既存の10秒・1 vCPU・0.5 GiB仮定を回数比例した比較で、待機・通常API・PDF・ビルド・保護処理は含まない。[Run料金](https://cloud.google.com/run/pricing)。DBは本体・索引・更新／複製読書き・PITR・バックアップ・復元を分ける。[Firestore料金](https://cloud.google.com/firestore/pricing)。

未算出費用の計算入力をインフラ設計で取得する：通常API試行数、1相談あたりDB操作、1時間当たり複製量、保存版数、PDF生成秒数、ネットワークGiB、監視経路／地点数、ログ量、バックアップ容量、認証利用、秘密アクセス、メール件数。第一候補に必要な大阪制御正本の平常時稼働・仲介経路・独立入口・保護記録・追加の地域間通信も加算する。総額は小計＋これら全項目＋試験費＋予備費とする。従って現段階では総額の確定見積りは出せない。

月額予算枠候補は低150・中600・高2,000 USD（便宜上1 USD＝150円なら22,500・90,000・300,000円）。これらは上記小計に残費用を収められるか検証するための提案枠で、総額見積りや課金停止の保証ではない。中600 USDをレビュー開始案とし、未算出項目と予備費が残額246.44 USDを超えれば再提案する。ユーザー承認前に予算確定・課金有効化しない。

アプリでAI要求ごとの最大トークン費を原子的に予約し、上限に達する新規AIを送信前に止める。成否不明分は予約を解除しない。課金額反映遅延と非AI費用があるのでアプリ上限も総請求額のハード上限ではない。監視・削除・安全保護・復旧に必要な費用枠を別途残し、予算不足で削除を停止しない。

[予算アラート](https://docs.cloud.google.com/billing/docs/how-to/budgets)は通知型と実停止機能を区別する。現行の[Spend cap](https://docs.cloud.google.com/billing/docs/how-to/budgets-spend-caps)も対象サービス・アカウント・停止影響を確認する。安全保護の停止や外部AIを含む全請求の一括上限としては採用済みにしない。

## 8. 障害対応と受入試験

軽量手順は検知→自動案内・遮断→同一チームへのメール→翌営業日の着手→復旧・別担当の再開確認→利用再開→事後振返りとする。原因・影響・時系列・目標未達・改善事項・担当・期限・完了証跡を変更記録に対応付ける。公開前に通知先と担当・営業日を決める。別の運営組織への引継ぎ資料は作成しない。

公開前と復旧構成の重要変更後に、合成データで以下を実施する。定期訓練はベータ期間中の必須条件にしない。毎回のバックアップ完了・チェックサム・復元点時刻・欠番の自動検証は継続する。手動試験の省略を自動検証の停止へ拡張しない。

| 試験 | 合格条件・証跡 |
| --- | --- |
| 地域喪失・主系連絡不能・二重起動 | 東京なしで使える一般RPO4時間以内の整合点、安全変更の反映、旧実行者の新環境への作用拒否と旧DB再接続禁止。第2節の開放証拠が揃わなければ再開拒否 |
| 安全変更各段階での障害・返信喪失 | 成功確定を失わず、未確定を成功にせず、同一キーで再適用しても取消しを復活させない |
| バックアップ破損・複製遅延・復元 | 利用可能な世代を選び、RPO・削除期限・安全再適用を測定 |
| Canary異常・DB変更 | 旧版復帰または安全遮断。両版で本人・同意・削除・期待版の制約を維持 |
| AI/PDF・キュー重複と期限 | 外部二重送信なし、60秒の状態表示と5分終端、終端後保存なし |
| 認証回復・送信遮断 | 標準経路迂回、旧実行者、遮断との競合を試し、一件の安全違反も不合格 |
| 通常負荷・コールド起動 | 要件書の20仮想利用者・比率・試行数でAPI p95 2秒・成功率99.5%以上。AI/PDFは別計測 |
| UI・アクセシビリティ | 指定ブラウザー／実機とWCAG 2.2 A・AA全対象。入力保持・読み上げ・200%拡大・キーボード経路を確認 |

証跡は構成・成果物版・合成シナリオ・障害時点・期待／実結果・RPO・復旧開始／完了・拒否理由・改善課題を含む。実装前なので全試験は未実施。

### 第一候補の試作で判定する3条件（未実施）

1. 遮断後の遅延実行がない：外部送出・データ返却・書込確定の直前で停止・再開し、旧許可と同世代の個別撤回の両方を試す。安全性と2秒要件を別判定する。
2. 分断中の受信済み要求を落とさない：独立入口の記録前後・返信喪失・メール新着を含めて照合し、範囲不明なら再開を拒否する。
3. 東京への接続なしで大阪から所定の復元点を使える：RPO4時間、安全状態の再適用、新環境の正常／拒否試験と復旧時間を測る。

これは試作の判定条件であり、試作コード・クラウド資源は作成していない。大阪制御正本の永久喪失時の継続が必要になった場合、またはこの試作で成立しない場合に独立した判定基盤等の構成比較へ戻る。国内構成・復旧目標・既存Canary方針を無断で変更しない。

## 9. ベータから本番へのデータ移行

移行の可能性に備え、スキーマ版・対象ID・元版・移行版・由来・元の期限を記録する。対象候補はAccount対応、Profile、相談／Run／Snapshot、同意・撤回、削除・資格・安全台帳、記事・公開状態・問い合わせの必要範囲。患者データを一律に全件コピーする決定はしない。研究実データ・不要なログ・期限切れPDF・秘密は移行対象から除く。継続中のAI要求は終端化して旧結果を適用しない。

同一プロジェクト内継続なら資格正本を維持する。別プロジェクトならFirebase AuthのUID・資格情報の移送可否を別途確認し、移送できない資格は安全な再認証・再設定へ誘導する。平文パスワードを生成・保存して移行しない。

手順は対象と目的の確定→合成旧版で予行→書込停止・処理収束→整合基準点と最終安全確定点の取得→非公開先へ移行→件数・内容・参照・版・削除と同意の照合→拒否／正常操作試験→承認後切替。旧属性の未回答・不明・回答しない・削除済みを区別し、旧Snapshotを一括上書きしない。権利行使は属性再回答で妨げない。

再実行は移行IDと元版で冪等にし、異なる元版を黙って上書きしない。切替後に本番書込がある場合は、旧環境へ戻す前に差分と安全変更を反映する。逆方向へ整合できない場合は書込を停止し修復する。移行コピーも元の保持期限を継承し、旧環境の残存消去と完了証跡まで追跡する。移行先・日時・実行承認は未確定。

## 10. 設計上の未確認事項と拡張適合

方式の成立確認として、制御正本の独立性・受信完全性・末尾確定とフェンス、東京なしで利用可能な復元元、送信遮断の実行保証を試作で検証する。標準再設定経路の迂回防止、外部保持・地域、通知先、総額と予算も未確認。インフラ設計への先送りだけで設計成立とせず、失敗時は構成または要件の変更判断へ戻す。実装・配備・実データ公開は承認しない。

| 規則 | 現段階の評価 |
| --- | --- |
| RESILIENCY-01 | 適合（設計）。要件書の重要度・依存と論理部品を対応付け |
| RESILIENCY-02 | 適合（設計）。最新RPO・復旧目標・月間計測を維持。固定可用性率は明示指示で置換 |
| RESILIENCY-03 | 適合（設計）。承認・成果物・変更・復旧証跡を対応付け |
| RESILIENCY-04 | 適合（設計）。CI/CD案・Canary・DB互換・自動切り戻し条件を記載 |
| RESILIENCY-05 | 適合（設計）。操作別監視・欠測・通知・独立確認を記載 |
| RESILIENCY-06 | 適合（設計）。livenessとreadinessを分離 |
| RESILIENCY-07 | 適合（設計）。実行枠・資源・クォータ・台帳遅延を観測 |
| RESILIENCY-08 | 方針記載は適合。一般データの国内Active-Passiveと平常時稼働の制御経路を分離。制御正本の地域喪失耐性・配置は未確認で、構成適合は保留 |
| RESILIENCY-09 | 適合（設計）。最小待機・上限・負荷試験・未達時の調整を記載 |
| RESILIENCY-10 | 方針記載は適合。操作／試行識別・精算・回路遮断を定義。実送出と遮断の順序保証は試作待ちで方式適合は未判定 |
| RESILIENCY-11 | 第一候補と再開条件を記載。旧主系なしの開放・費用・制御正本喪失は未確認で、構成採用・達成判定は保留 |
| RESILIENCY-12 | 保持・隔離・消去・複製の方針記載は適合。大阪から使えるRPO4時間の復元元と停止中の消去手段は検証待ち。設定実施N/A（未構築） |
| RESILIENCY-13 | 開放証拠・受信照合・新着管理・試作3条件を定義。安全停止と復旧目標を別評価。方式成立は未判定、実行結果N/A（未構築） |
| RESILIENCY-14 | 適合（設計）。ユーザー指定の公開前・重要変更後の試験と証跡。定期訓練必須化は明示指示によりN/A |
| RESILIENCY-15 | 適合（設計）。同一チームの障害対応・事後改善・追跡を定義 |
| PBT-02・03・07・08 | 設計への引継ぎは適合。実行評価はN/A（コード未生成）。保存往復・期限と許可不変条件・構造化生成器・縮小・seed/path・CIを必須化 |
| PBT-09 | 選定記録は適合。fast-checkとVitestを継承。依存導入・設定評価はN/A（コード生成前） |
| PBT-01・04・05・06・10 | 助言を反映。冪等再適用・状態遷移モデル・例示競合試験を併用 |
| セキュリティ拡張 | 無効のため適用省略。元の認証・同意・秘密保護要件は維持 |

表の適合は設計文書の記載範囲であり、構成の達成保証ではない。図・埋め込みコードは使用せず、表と手順を説明の正本とする。


## Open tabs:
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- patient-support-app-nfr-design-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-followup-questions.md
- patient-support-app-nfr-design-plan.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md
- patient-support-app-nfr-requirements-approval-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-requirements-approval-questions.md
- nfr-requirements.md: aidlc-docs/construction/patient-support-app/nfr-requirements/nfr-requirements.md

## My request:
ではそのように記載しなおしてください。"
**AI Response**: 方式文書の公開前5箇所をβ版の初回利用開始前へ変更。障害復旧の公開直前・公開までを利用再開直前・利用再開までへ変更。初回利用開始とCanary段階配備の区別を定義する。99.5%等の試験基準は今回変更しない。
**Context**: 文言のみの変更。文章・表の既存構造を維持し内容を事前検証。回復力14は試験契機の表現明確化、PBT実行N/A、セキュリティ拡張は無効につき省略。段階承認・実装なし。

---

## NFR Design：Canary集計条件の質問作成
**Timestamp**: 2026-11-07T12:21:11Z
**User Input**: "では、Canaryで明確にする点を質問にしてください。回答しますので"
**AI Response**: Canary専用の質問ファイルを作成。通常負荷試験と分離し、件数単位、版・試行種別、集計窓、停止タイミング、失敗・p95計算、AI/PDF、欠測・完了条件を7問に整理。各問にその他と空の回答欄を設置し、回答を待つ。
**Context**: 既存NFR設計の追加質問。設計全体の承認・段階移行なし。回答欄7件と参照先を確認。PBT実行N/A、セキュリティ拡張は無効につき省略。

---

## NFR Design：Firebaseの配置に関する照会
**Timestamp**: 2026-11-07T12:31:52Z
**User Input**: "現在の設計ではfirebaseの拠点はどこにおく予定ですか"
**AI Response**: 最新の非機能設計では一般データの主系を東京、待機系を大阪とする第一案。大阪の安全制御正本は試作対象の第一候補。Firebase全体を国内固定する設計ではなく、認証は技術選定書で米国処理と記載、Hosting等は別確認。構成は未確定・未配備であると説明。
**Context**: 設計文書の照会のみ。設計変更・承認・段階移行なし。Markdownの段落と文字列を確認、図・コードなし。

---

## NFR Design：Canary回答・補足の反映
**Timestamp**: 2026-11-07T12:41:58Z
**User Input**: "**質問1・2・3・5・7はA、質問4はCを推奨します。質問6は、10試行の内訳と実AI経路の合格条件を明記したうえでAです。** 一番修正したいのは質問4です。現案のAでは、最低件数を満たしたAPIに異常が出ていても、試行の流し方によっては15分まで自動停止できません。

| 質問             | 推奨回答         | 理由・追記する条件                                                                                                             |
| -------------- | ------------ | --------------------------------------------------------------------------------------------------------------------- |
| 1．件数           | **A**        | 新版の対象APIごとに100件を集める。API別の判定を維持しつつ、各APIの件数を計画できる。正常入力の試行がちょうど100件なら、1件失敗で成功率99%となり不合格。                                 |
| 2．新版・旧版、合成・実利用 | **A**        | 新版の合成試行を昇格の必須証拠とし、新版の実利用はAPI別に別集計する。低トラフィックの限定βでも判定できる。旧版の性能異常は別途通知し、新版の性能による切り戻し判定から分離する。                            |
| 3．集計窓          | **A**        | 段階開始からの累積を使う。試行は受付時刻で段階に割り当て、応答完了またはタイムアウトで確定する。判定時点で未確定の試行は件数を別記し、確定した結果を元の段階に反映する。段階開始時刻は比率適用の確認後とする。               |
| 4．性能悪化による自動停止  | **C**        | **新版の各APIを合成・実利用に分け、段階開始からの累積で確定100件に達した集計ごとに、15分を待たず1分ごとに判定する。** 直近5分の判定も、同じ集計単位で100件に達した場合に併用する。安全違反・欠測等の即時停止は維持する。 |
| 5．成功率・p95      | **A**        | 期限までに応答がないことを確認できた試行はタイムアウトとして失敗に数える。計測記録が失われ、結果や計測時間を判定できない場合は欠測として扱う。合成試行がバックエンド到達前に通信断となった場合も、送信記録から失敗に数える。        |
| 6．AI・PDF       | **A（内訳を追記）** | AI・PDFそれぞれの10試行について、正常系・異常系の件数と必須シナリオを配備前に固定する。実AI経路をAIの10試行に含めるかも明記し、実経路は独立して合格を求める。                                 |
| 7．不足・欠測・完了     | **A**        | 60分に達したら自動昇格を保留して通知し、現段階で監視を継続する。保留後に件数が揃った場合の扱いも固定する。私は、チームが証跡を確認して昇格判定を再開する方式を推奨する。100%段階も同じ完了条件で判定する。              |

### 回答前に詰めたい3点

1. **質問4の「直近5分で100件」は、通常の試行ペースだと発動しにくい。** 15分で各APIに100件を均等に流すと、5分では約33件です。現案では、下書き保存が先に100件に達して不合格でも、15分経過と他APIの件数が揃うまで待つ可能性があります。累積100件に達したAPIから判定すれば、昇格の条件を保ったまま早く停止できます。Google SREのCanaryガイドも、トラフィック量と観測時間を合わせて設計する考え方を示しています。 [Canary Release: Deployment Safety and Efficiency](https://sre.google/workbook/canarying-releases/?utm_source=chatgpt.com)
2. **質問6の「60秒以内」と「5分終端」は、試験ケースごとに期待結果を分ける。** 正常系では結果表示までの60秒条件、異常系では5分以内の所定の終端状態と、その後に届く結果の拒否を確認します。重複配送では、業務結果や副作用が重複しないことを確認します。10試行を完了しても、必須ケースが未実行なら昇格保留です。
3. **質問7では「試行が0件」と「監視報告が来ない」を区別する。** 監視が正常なら、試行0件でも定時に0件と報告します。100%段階で旧版への通常トラフィックが0件なのは想定内です。一方、報告が予定時刻から2分以内に届かない場合や、発生した試行の版を識別できない場合は欠測として停止します。

なお、**各APIの100件は今回の昇格ゲートとして使う件数**です。100件全成功なら観測成功率は100%ですが、運用時の真の成功率が99.5%以上であることまで、この件数で統計的に確認できるわけではありません。

今回は提示文の中で選択肢の整合性を確認しました。参照先の方式文書第3節との照合と、ファイルへの反映は未実施です。"
**AI Response**: 回答・補足を方式文書第3節と照合して質問票へ記録。API別累積100件からの1分判定、直近5分併用、受付時刻の所属と遅延確定、到達前通信断、0件と欠測、保留後のチームによる明示再開を反映。AI/PDFは各正常4・時間切れ2・重複配送2・遅延結果2、AI正常系に実AI最低1件を含む追記案として具体化。Google SRE参照先を確認。計画・状態・論理部品も整合。
**Context**: NFR設計の修正。ユーザーの具体内訳の承認は未取得としてレビュー対象を明示。方式全体の承認・実装・配備・実AI送信・段階移行なし。回復力03・04・05は本変更の設計記載で適合、その他は第10節を維持。PBT実行N/A、無効のセキュリティ拡張を省略。事前に文章・表・段落を検証し図・コードは追加せず。Python実行は出力なしの終了コード1で失敗、書込みはapply_patchで完了。git statusは所有者検査で拒否されたため、設定変更せずコマンド単位のsafe.directory指定で検証する。

---

## NFR Design：内訳承認・全体レビュー開始
**Timestamp**: 2026-11-07T12:49:37Z
**User Input**: "内訳オッケー、非機能設計全体のレビューに入るね。対象ファイルを示してください"
**AI Response**: 内訳の承認を記録し、非機能設計全体のレビュー対象ファイルを確認。AI/PDF各正常4・時間切れ2・重複配送2・遅延結果2、AI正常系に実AI最低1件を含む内訳を承認済みに更新。レビュー対象はnfr-design-patterns.md（方式・受入条件）とlogical-components.md（論理部品・接続）。質問票・計画・状態のチェックボックスと記述を整合。
**Context**: 内訳のみ承認、非機能設計全体はレビュー開始・未承認。実装・試験・段階移行なし。文章とチェックボックスのみを変更し、事前に構造を確認。回復力03・04の承認記録を更新、その他評価は方式第10節を維持。PBT実行N/A（コード変更なし）、セキュリティ拡張は無効につき省略。

---

## NFR Design承認・Infrastructure Design開始
**Timestamp**: 2026-11-07T13:05:32Z
**User Input**: "非機能設計どちらも承認します"
**AI Response**: 両ファイルの承認を記録し非機能設計を完了に更新。未確認の成立条件を引き継いでインフラ設計計画を作成。既存クラウド環境、具体案作成、分離・共有の3問を計画ファイルに記載し回答待ちとする。
**Context**: 明示承認は非機能設計2成果物。方式成立や構成採用を実証済みにせず、試作条件と未確認事項を継承。インフラ計画のMarkdown・質問形式・相対リンクを検証。回復力03の承認記録を更新、他は計画末尾と方式第10節の評価。PBT実行N/A、セキュリティ拡張は無効につき省略。コード生成・クラウド資源作成・配備なし。

---
## 非機能設計の保留事項の状況確認
**Timestamp**: 2026-11-08T08:15:56Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md

## Open tabs:
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md
- logical-components.md: aidlc-docs/construction/patient-support-app/nfr-design/logical-components.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- patient-support-app-nfr-design-plan.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md
- patient-support-app-nfr-design-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-followup-questions.md

## My request:
非機能設計について詰める中で、あとで決定するリストがあったと思うけど、AIの出力案を検討するものと、非機能設計で定義しないもの、非機能設計の後半で検討するものがそれぞれあったと思うけど、今それらはどうなっている？"
**AI Response**: 状態・非機能要件・技術選定・非機能設計・運営決定・インフラ計画を照合。提案作成済み／対象外・利用開始前決定／インフラ設計・試作へ継承を区別して説明。非機能設計は2026-11-07承認済みだが、構成採用・実証・最終予算・モデル等は未確定。記録が分散し、旧承認待ち表現が一部残ることも報告。
**Context**: 既存資料の状況確認のみ。設計判断・計画チェックの変更なし。追記内容は文章のみ、図・埋込コードなし、Markdown構造を確認。

---
## 非機能要件の回答・提案・承認記録の照合
**Timestamp**: 2026-11-09T04:20:51Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md

## Open tabs:
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md
- logical-components.md: aidlc-docs/construction/patient-support-app/nfr-design/logical-components.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- patient-support-app-nfr-design-plan.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md
- patient-support-app-nfr-design-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-followup-questions.md

## My request:
では元の質問への回答と実際の提案・承認記録を照合してください。ファイルの参照をお願いします"
**AI Response**: 元15問・再開6問・要件承認B・非機能設計12問・技術選定・要件・方式・論理部品・監査を照合。旧質問10Aのメール確認／不正ログイン試行制限／追加認証の負担・費用比較と推奨案は確認できず、提案不足と判定。旧質問11Aは対象環境・幅・支援技術・WCAG案があるが独立した試験マトリクスではなく文章形式。技術・試験基盤・メール受付目標は案あり。費用は一部概算と候補枠のみだが、総額等の後続解決条件は要件承認質問に明記されB回答で承認済み。旧AI提供元比較は後のOpenAI指定により前提変更、モデル候補はあるが最終評価未実施。非機能設計の方式案は全体承認済み、構成成立・試作は未実施。根拠ファイルと行番号を回答で提示。
**Context**: 文書調査のみ。承認事実と依頼充足を区別し、承認の自動取消し・段階変更・設計追加なし。追記はMarkdown文章のみ、構造を事前確認。既存監査本文は上書きせず追記。

---
## 未確定事項の段階境界を既存資料へ明記
**Timestamp**: 2026-11-09T05:40:44Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md

## Open tabs:
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md
- logical-components.md: aidlc-docs/construction/patient-support-app/nfr-design/logical-components.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- patient-support-app-nfr-design-plan.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md
- patient-support-app-nfr-design-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-followup-questions.md

## My request:
ではそれが分かるように、未確定の事項について境界を既存ファイルに明示してください。"
**AI Response**: 方式第10.1節に未確定事項12項目の現在状態、非機能設計／要件、インフラ設計、試作・Build and Testでの判断境界を追加。費用の仮決定と確定、比較基準、比較試作のみの承認と本実装構成の採用、不成立時の戻り先、追加認証提案不足、対象外の運営引継ぎを明記。インフラ計画の完了条件とチェック、論理部品、技術選定、非機能要件の費用条件、非機能設計計画、状態の7ファイルを整合。技術選定の旧承認待ち表現を修正。
**Context**: 許可された境界明示のみ。既存承認、未回答3問、構成・予算・試作未採用を維持。新規質問・構築・契約・実送信なし。Markdown表列数・7ファイルの相対参照・Unicode・未回答欄3件を検証済み。検証コマンドに不要なtext呼出しが混入したため削除し再実行、最終検証PASS。RESILIENCY-03は追跡記録、08・10〜13は未確認を維持、その他は既存方式第10節の評価を継承。PBT実行／設定は文書変更のみでN/A、無効セキュリティ拡張は省略。図・埋込コードなしの文章・表として事前検証。

---

## インフラ設計の次手順確認
**Timestamp**: 2026-11-09T06:12:47Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md

## Open tabs:
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md
- logical-components.md: aidlc-docs/construction/patient-support-app/nfr-design/logical-components.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- patient-support-app-nfr-design-plan.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md
- patient-support-app-nfr-design-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-followup-questions.md

## My request:
いま、未確定事項の境界明示について、ファイル内容を変更した。次に何をするべきですか。一旦インフラ設計の質問に回答すればいいかな"
**AI Response**: 状態とインフラ設計計画を確認。現状は確認質問3問の回答待ち。まず同計画の質問1～3の[Answer]:へ回答し、完了を知らせる手順を案内する。回答後に矛盾・曖昧さを確認し、構成案・費用比較・未確定事項を具体化してレビューへ進む。回答は構成採用・予算・試作の承認とは区別する。
**Context**: 進行状況の確認のみ。計画実行・段階完了なし、チェック変更なし。監査追記の通常Markdownを事前確認。セキュリティ拡張は無効につき省略。既存設計の評価を変更しない。

---

## 質問1のクラウド環境の説明
**Timestamp**: 2026-11-09T06:17:49Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md

## Open tabs:
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md
- logical-components.md: aidlc-docs/construction/patient-support-app/nfr-design/logical-components.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- patient-support-app-nfr-design-plan.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md
- patient-support-app-nfr-design-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-followup-questions.md

## My request:
/C:/Users/khr85/Documents/ai-dlc-v1-test/aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md
の質問1がしめす、クラウド環境とは何ですか？設計で言語やクラウド環境について名称を決定したと思うから、実際のツール名を用いて説明してください"
**AI Response**: 技術選定を参照し、React／TypeScript／Vite、Node.js／TypeScript、Firebase Hosting、Cloud Run、Cloud Firestore、Firebase Authenticationの設計上の位置付けを説明。質問1は製品の再選定ではなく、実際に作成済み・利用可能なGoogle Cloud／Firebaseプロジェクト、課金先、管理権限、既存リポジトリ／CIと組織制約の確認と説明。作成済みならA、未作成または不明ならBを選べることを案内する。
**Context**: 既存資料の意味の説明のみ。回答の代行・設計変更・段階移行なし。通常Markdownとして事前確認した監査記録を追記。

---

## 保持期限・Canary条件の参照確認
**Timestamp**: 2026-11-09T06:26:43Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md

## Open tabs:
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md
- logical-components.md: aidlc-docs/construction/patient-support-app/nfr-design/logical-components.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- patient-support-app-nfr-design-plan.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md
- patient-support-app-nfr-design-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-followup-questions.md

## My request:
質問2について、情報の保持期限、Canary条件は既存ファイルではどのように記載されていますか"
**AI Response**: 業務規則BR-07、非機能設計第6節と第3節を確認し、保持・削除期限とCanary段階配備の条件を参照行付きで説明。主要環境7日、バックアップ35日、最小追跡180日、一時PDF24時間、バックアップ28日は設定案と区別。API別100件・最低15分・成功率99.5%以上・p95 2秒以内、AI/PDF各10試行、安全違反即時停止、欠測・保留・切り戻し条件を整理。PDF起算の記載差も明示する。
**Context**: 既存資料の説明のみ。設計・回答・承認状態の変更なし。通常Markdownの監査追記を事前検証。

---

## 環境分離・プロジェクト構成の説明
**Timestamp**: 2026-11-09T06:36:32Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md

## Open tabs:
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md
- logical-components.md: aidlc-docs/construction/patient-support-app/nfr-design/logical-components.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- patient-support-app-nfr-design-plan.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md
- patient-support-app-nfr-design-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-followup-questions.md

## My request:
質問3について、開発・検証・β利用環境を別プロジェクトにするとはどういうことですか？どのようなディレクトリ構成？プロジェクト構成？となりますか。分けた時のメリットとデメリット、他の案を教えてください"
**AI Response**: Google Cloud／Firebaseのプロジェクトとローカルディレクトリを区別し、単一コードベースと環境別設定の構成例を説明。3クラウド環境、ローカル開発＋検証／βの2クラウド環境、単一クラウド内分離を比較。患者データ分離と管理・費用増の利害、Canaryと地域復旧分離の違いを説明し、質問3Aは比較案作成であって構成採用ではないと案内。Firebase公式の環境別プロジェクト推奨を参照。
**Context**: 既存計画とpackage.jsonを確認。公式資料を検索。説明のみでファイル構成・選択回答・段階承認は変更しない。監査追記は通常Markdownとして事前検証。

---

## 質問3Aの比較・決定段階の説明
**Timestamp**: 2026-11-09T06:40:40Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md

## Open tabs:
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md
- logical-components.md: aidlc-docs/construction/patient-support-app/nfr-design/logical-components.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- patient-support-app-nfr-design-plan.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md
- patient-support-app-nfr-design-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-followup-questions.md

## My request:
質問3のAの選択肢は、別プロジェクトとする案を「比較する」ってなに？比較した結果はどのように提示され、どの段階で決定しますか"
**AI Response**: Aは3プロジェクト構成を比較候補に含めて具体案を作成する選択と説明。比較対象の具体例は3プロジェクト、ローカル開発＋検証／βの2プロジェクト、開発検証共用＋β別。必須要件適合、構成と設定、同一負荷の全費目低標準高比較、運用負担、不確実性、推奨案をインフラ設計成果物で提示する流れを説明。インフラ設計レビューで実装構成・初期設定・予算を仮決定し、比較試作のみの承認を区別。試験後に再レビューしBuild and Testでβ採用構成と運用予算を確定する。A回答だけでは構成採用・クラウド作成の承認にならない。
**Context**: 既読の現行インフラ計画・段階境界に基づく説明。選択回答・計画チェック・設計を変更しない。監査記録は通常Markdownとして事前検証。

---

## 質問3Aの比較対象の明示
**Timestamp**: 2026-11-09T06:43:39Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md

## Open tabs:
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md
- logical-components.md: aidlc-docs/construction/patient-support-app/nfr-design/logical-components.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- patient-support-app-nfr-design-plan.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md
- patient-support-app-nfr-design-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-followup-questions.md

## My request:
例えばじゃなくて、質問に「比較する」と示されているならば、比較対象を明示してください"
**AI Response**: 質問3Aに比較対象3案（開発／検証／β別、ローカル開発＋検証／β別、開発検証共用＋β別）を明記。比較項目、成果物での提示、仮決定・試作後再レビュー・Build and Testでの確定を追記。
**Context**: 通常Markdownの段落・リストとして事前検証。回答欄・段階承認は変更しない。回復力の独立性は別設計として維持、PBT実行N/A、無効セキュリティ拡張は省略。

---

## 変更反映の再確認
**Timestamp**: 2026-11-09T06:47:34Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md

## Open tabs:
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md
- logical-components.md: aidlc-docs/construction/patient-support-app/nfr-design/logical-components.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- patient-support-app-nfr-design-plan.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md
- patient-support-app-nfr-design-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-followup-questions.md

## My request:
変更されていません"
**AI Response**: 指定パスの保存済みファイルを再読込し、77行目の質問3と79行目以降の3案の追記を確認。IDE表示との差の原因は未確認。該当行へのリンクと保存済み文面を提示し、未保存編集がある場合は保持したうえでファイルを開き直すよう案内。
**Context**: 再保存・上書きは行わず確認。git diffはGitリポジトリではないため失敗、ファイル直接読取で確認。通常Markdownの監査追記を事前確認。

---

## 質問3Aの修正再実施
**Timestamp**: 2026-11-09T06:49:52Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md

## Active selection of the file:
A) 開発・検証・β利用環境を別プロジェクトとする案を比較する。開発・検証には合成データだけを使用し、権限・秘密・データを分離する。安全制御・復旧用配置の分離は独立性の要件に基づき別途設計し、環境数や費用を提示する。

## Open tabs:
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md
- logical-components.md: aidlc-docs/construction/patient-support-app/nfr-design/logical-components.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- patient-support-app-nfr-design-plan.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md
- patient-support-app-nfr-design-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-followup-questions.md

## My request:
A) 開発・検証・β利用環境を別プロジェクトとする案を比較する。開発・検証には合成データだけを使用し、権限・秘密・データを分離する。安全制御・復旧用配置の分離は独立性の要件に基づき別途設計し、環境数や費用を提示する。
こうなっている。書かれていません"
**AI Response**: 今回の再読込では保存済みファイルも変更前の文面であることを確認。前回確認時との相違の原因は不明。質問3Aを直接修正し、比較対象3案・提示方法・決定段階を記載。再読込検索で79行目の新しいA、81～83行目の3案と旧文の不在を確認。前回答の断定を訂正する。
**Context**: 文書段落と箇条書きを事前検証して修正。回答欄・段階承認を維持。回復力の独立性は別途設計、PBT実行N/A、無効セキュリティ拡張は省略。

---

## インフラ設計・回答確認再開
**Timestamp**: 2026-11-09T06:56:08Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md

## Open tabs:
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md
- logical-components.md: aidlc-docs/construction/patient-support-app/nfr-design/logical-components.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- patient-support-app-nfr-design-plan.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-plan.md
- patient-support-app-nfr-design-followup-questions.md: aidlc-docs/construction/plans/patient-support-app-nfr-design-followup-questions.md

## My request:
C:\Users\khr85\Documents\ai-dlc-v1-test\aidlc-docs\construction\plans\patient-support-app-infrastructure-design-plan.md
回答完了しました。"
**AI Response**: 「回答内容と現在の進行状況を確認し、インフラ設計を進めます。」共通4規則・段階規則・全opt-inと有効な回復力／部分PBT規則を読込。質問1B・2A・3Aは矛盾なし。環境分離3案、サービス・権限・初期値・全費目を比較し、追加認証対策と制御正本の未成立条件を具体化する。OpenAI Docsスキルを使用し、公開仕様・料金を公式資料で調査。
**Context**: 既存Constructionの再開。歓迎の再表示・既存承認の再取得なし。無効セキュリティ拡張は本文読込・適用を省略。文書設計のみ。Gitは所有者相違で状態取得不可、設定変更なし。最終入力とファイル回答B／A／Aを記録し、回答確認チェックを更新。

---

## インフラ設計案作成・未成立事項レビュー
**Timestamp**: 2026-11-09T14:34:17Z
**User Input**: （追加のユーザー入力なし。上記原文への継続作業）
**AI Response**: 構成・配備・費用・共有基盤・追加認証補完・レビュー質問の6文書を作成。3案を同一β負荷と合成試験総量で比較し、案2（ローカル開発、検証／β別、制御／復旧を含む計6プロジェクト）を推奨。標準概算825.47 USD／月（予備費込み）、許容予算案850 USD、比較試作100 USDは未承認。公開地域・料金・IAM・VPC・復元・保持・認証仕様を公式資料で確認し、動的な地域単価を確定できない部分は計画仮単価と幅を明記。OpenAI Docsスキル使用、モデルは既存GPT-5.4 miniを保持。大阪単独制御DBの永久地域喪失無損失、最終作用遮断、受信完全性、東京なし復元、停止中消去・認証迂回の未成立／未実証を記録。追加認証対策の採否と、方式再比較／比較試作計画の次作業を質問票に分離。
**Context**: RESILIENCY-08・10〜13の未成立条件を段階完了の阻止事項として記録。段階完了・Continue to Next Stage・本実装採用は提示しない。部分PBTは設計契約を引継ぎ、実行／設定N/A。無効セキュリティ拡張は省略。計画チェックと最新状態を同じ対話で更新。UTF-8・ローカル参照22件・表172行の列・質問4問の選択肢と実回答タグ・β費目合算221.15／600.38／1969.57を機械検証しエラー0。最初の検証はPowerShellの標準入力文字コードと、説明文中のAnswerタグまで数える検証式で失敗し、UTF-8と行頭限定へ修正後成功。高ケースの最小待機を1GiB×2配置25.92へ整合。アプリ変更なしにつきビルド・アプリ試験はN/A。クラウド資源・契約・課金・実送信なし。

---

## レビュー質問の提示記録
**Timestamp**: 2026-11-09T14:34:17Z
**User Input**: （新規入力なし。回答待ち）
**AI Response**: 「回答1B・2A・3Aを確認し、インフラ設計案と3案の費用比較を作成しました。案2を推奨し、標準概算は月825.47 USDです。追加認証対策と未成立事項について、patient-support-app-infrastructure-review-questions.mdの4問へ回答してください。大阪制御正本の独立保護などが未成立のため、回復力規則に従い段階完了と本実装移行を保留しています。」
**Context**: 補完レビューは方式第10.1節とインフラ設計計画の判断境界に基づく。回復力規則の「The stage MUST NOT present the Continue to Next Stage option until all blocking findings are resolved」に従う。具体資料の作成・検証後に採否を依頼し、質問票への回答を待つ。旧回答の再取得ではない。

---

## インフラ費用の再点検・削減指示
**Timestamp**: 2026-11-12T07:07:14Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/infrastructure-design/infrastructure-design.md

## Open tabs:
- infrastructure-design.md: aidlc-docs/construction/patient-support-app/infrastructure-design/infrastructure-design.md
- patient-support-app-infrastructure-review-questions.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-review-questions.md
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md
- logical-components.md: aidlc-docs/construction/patient-support-app/nfr-design/logical-components.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md

## My request:
待って高すぎる。内訳教えて、抑えるところを徹底的に抑える。まさかこれAIの外部API費用無しで？？？"
**AI Response**: 外部AI費用込みであると直ちに説明し、旧標準全費目を再集計。利用AI337.50、監視AI10.368、その他312.508、予備費165.094＝825.47 USD。無料枠未控除・未実測の枠・都度試験・予備費を標準月額に混ぜた提示が不適切だったと訂正。公式OpenAI・GCP・Firebase資料を再確認し、uptime無料枠、Scheduler起動の業務合成監視代替、Run・DB・秘密・CI等の無料枠、AI回数／tokensの感度を整理。cost-reduction-review.mdを作成し、旧850 USD推奨と既存4問への回答依頼を停止。ユーザー指定の徹底削減を優先して、固定経路・多地域仲介・保存量も再比較の対象とした。
**Context**: 同じ使用量の差引き例は予備費なし499.198〜504.198 USD、品質を保てる場合のtokens半減・平均5回なら利用AI56.25 USD、同じ仮基盤の比較総額約218〜223 USD。新確定見積りとはせず、地域料金・試験月・未成立独立保護追加は別と明記。現在の容量と平均使用量、相談とメッセージを区別。安全条件・毎分監視・本人認証・削除・DRを無断緩和せず、構成簡素化は未採用。RESILIENCY-08・10〜13の未成立条件は維持、部分PBT実行N/A、無効セキュリティ拡張は省略。文書6件のUTF-8・参照32件・表224行・旧合計・差引き・AI3ケースを機械検証しエラー0。進捗と旧案の失効表示を同じ対話で更新。アプリ変更なし・ビルドN/A、クラウド作成・課金・外部送信なし。

---

## 月100相談への費用前提変更
**Timestamp**: 2026-11-12T07:30:08Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-infrastructure-review-questions.md

## Open tabs:
- patient-support-app-infrastructure-review-questions.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-review-questions.md
- infrastructure-design.md: aidlc-docs/construction/patient-support-app/infrastructure-design/infrastructure-design.md
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md
- logical-components.md: aidlc-docs/construction/patient-support-app/nfr-design/logical-components.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md

## My request:
月100相談くらいで見積もり取って。予備費と検証環境の仮枠ってなに？ここ朝得られない？"
**AI Response**: 月100相談で通常月の全費目概算を作成。「ここ朝得られない？」は文脈上の費用抑制の質問と解釈。予備費は請求でない予算上の余裕、検証仮枠は契約でない未実測の試験費用と説明し、予備費・常設検証・月割復元試験を通常月0に変更。実クラウド検証は必要時のみ、実施月の実使用量で別算定。既存モデル・15回・8,000／2,000tokensを維持した利用AIは22.50 USD、削減候補は11.25／7.50／3.75。実AI監視10.368は相談数に比例せず維持。通常月は固定network以外47.218〜62.718、旧55を残す比較は102.218〜117.718 USDと算定。未確定のnetworkと独立保護の追加費は未確定と明記し、全体の固定保証は行わない。
**Context**: cost-estimate-100-consultations.mdを作成し、旧費用資料・インフラ設計・非機能要件・計画・状態に現行の費用前提を反映。同時20人の容量と性能条件、既存保護・必要試験は維持。公式モデル料金、Run／監視／Firestore料金を再確認。UTF-8・表列・相対参照36件・上下限の算術を機械検証しエラー0。計画チェックを同じ対話で更新。回復力08・10〜13の未成立事項継続、部分PBT実行N/A、無効セキュリティ拡張は省略。コード変更・課金・外部送信・契約なし。公開料金による概算であり事業者への見積依頼送信は行っていない。

---

## 費用資料の整理・旧ファイル削除
**Timestamp**: 2026-11-12T07:51:57Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/infrastructure-design/cost-estimate-100-consultations.md

## Active selection of the file:
# 月100相談の通常月概算

2026-11-12。ユーザー指定により、費用算定の月間相談数を1,500から100へ変更する。登録100人・同時20人の対応容量／性能試験条件は維持。公開料金に基づく設計概算で、事業者の確定見積書ではない。税・為替・適用地域追加料金は別。構成の未成立事項は[インフラ設計](infrastructure-design.md)を継承する。

## 1. 予備費と検証環境の仮枠

| 旧費目 | 意味 | 今回の扱い |
| --- | --- | --- |
| 予備費165.09 USD（25%） | 使用量増・見積誤差に備えた予算上の余裕。サービス利用料金ではない | 通常月見積りへの自動上乗せを0にする。利用量増で発生する実料金まで0になるわけではない |
| 検証環境60 USD | stageのRun・DB・network・監視・AI・CI等に置いた未実測の費目別予算枠。月額契約ではない | 通常月の常設検証枠を0にする。ローカルEmulator・stub中心、実クラウドは必要な試験時だけ使用 |
| 前の削減案の検証10 USD | 60から減らした比較用の枠 | これも通常月へ一律に積まない |
| 復元試験15 USD／月 | 毎月実施する根拠のない月割試験枠 | β初回前・重要変更後の都度費にする。試験自体は省略しない |

検証環境を月額0扱いにするのは「通常月に新たなクラウド検証を実行せず、課金される検証資源の残存もない」場合。停止だけではDB・backup・LB・NAT等の費用が残ることがあるため、必要な証跡・元期限を守って残存を照合する。Emulatorでは本番IAM・地域・復元・配送・外部APIを検証できないので、必要な試験月には使用量を別途加算する。

都度試験もCPU秒・DB操作・転送量・実AI回数で積算し、未実行の固定10／60 USDを請求見込みにしない。支出の上限値は実施計画と一緒に決め、旧100 USD試作枠も自動採用しない。端末・PC・回線の追加調達なし、内部作業工数・開発費は月額サービス利用料の外とする。

## 2. 外部AI APIの月100相談試算

既存候補GPT-5.4 miniの標準入力0.75・課金出力4.50 USD／100万tokensで計算。cache割引・別モデルへの変更は見込まない。地域等の10%追加料金が適用される場合は各AI額×1.10。[公式モデル料金](https://developers.openai.com/api/docs/models/gpt-5.4-mini)。

| ケース | 相談／月 | 平均呼出し／相談 | 平均入力／課金出力tokens | 利用AI USD／月 |
| --- | --- | --- | --- | --- |
| 旧標準の回数・長さを維持 | 100 | 15 | 8,000／2,000 | 22.50 |
| 入出力を半減できた場合 | 100 | 15 | 4,000／1,000 | 11.25 |
| 上記＋平均10回の場合 | 100 | 10 | 4,000／1,000 | 7.50 |
| 上記＋平均5回の場合 | 100 | 5 | 4,000／1,000 | 3.75 |

計算は100×回数×（入力×0.75＋課金出力×4.50）÷100万。今回の主ケースは22.50とし、ユーザーが指定していないtokens半減・回数削減を成立済みにしない。後ろの3ケースは品質・必要情報・完遂条件を維持できた場合の比較。5回で強制終了させる案ではない。再開分も含めた月間課金操作量が増えれば追加する。

実AI監視は月間相談数で割らない。既存5分間隔・入力1,000／出力100の仮値を維持すると、8,640回×0.0012＝10.368 USD／月。この規模では利用者向けAIと比べても大きい。60分監視なら0.864 USDで9.504削減できるが、検知間隔の変更なので未採用。毎分の通常業務監視とCanary必須試験は別に維持する。

## 3. 通常月の全費目

基盤は前の削減案（managed syntheticではなく小さな監視処理、min0、無料枠、ローカル開発）を比較前提とする。低額を保証する採用構成ではない。月100相談になっても定時監視・安全記録・固定経路・蓄積データは残るため、全額を15分の1にしない。

| 費目 | 月額USD | 使用量／積算前提 |
| --- | --- | --- |
| 利用AI | 22.50 | 上表の主ケース |
| 実AI監視 | 10.368 | 既存5分監視を維持 |
| Run・PDF・複製・通常監視の実行 | 3〜10 | CPU約24万秒を起点に起動・監視対象側・AI待機を感度化。request-based無料枠を請求accountで一度だけ適用。常時min1なし |
| DB・PITR・backup・Storage | 2〜5 | 初期半年600相談、合計保存／index約1GiBの仮値。PITR約0.25、28世代backup約1.40、Storage等約0.06＋操作課金幅。日次の監視操作は別途カウントして無料枠を適用 |
| 地域間・internet転送 | 0.80 | 旧40＋40GiBを患者由来の仮値として100／1,500倍、合計約5.33GiB×仮単価0.15。監視等で増えれば置換 |
| 通常監視のサービス料・ログ・指標・Trace | 0〜2 | 自前監視の実行はRun行へ。uptime地点実行は無料枠内、ログ量・指標量も無料帯を確認。無料枠消費済みなら再計算 |
| Hosting | 0〜1 | 静的配信・圧縮、保存約1GBと日次転送無料帯を起点。患者本文は配信しない |
| Tasks・Scheduler・秘密 | 0.30〜1 | job数・操作・有効秘密版の少量利用。無料枠は他環境と重複控除しない |
| 独立受信メール・送信 | 6.05 | mailbox1席6は未選定の仮単価、SES等送信500通×0.10／千＝0.05。既存mailbox無料利用は仮定しない |
| CI・成果物保存 | 0.20〜2 | build一回・image再利用・cleanup。無料build枠とRegistryの課金容量、他用途の消費を確認 |
| DNS・ドメイン | 2.00 | 旧年24 USDの月割仮値。実ドメイン未選定 |
| 予備費 | 0 | 一律上乗せなし |
| 常設検証環境の仮枠 | 0 | ローカル主体、試験月の実利用は別 |
| 毎月復元試験の仮枠 | 0 | 試験実施月に都度加算 |
| 固定ネットワークを除く小計 | 47.218〜62.718 | 全行の下限／上限を合算 |
| 固定ネットワーク | 未確定 | 旧55 USDのPSC／LB／NAT／proxy一括枠は確定料金ではない。必要部品・代替接続で再算定 |
| 旧55 USDを残した比較合計 | 102.218〜117.718 | 約102〜118 USD／月。完成構成の確定額ではない |

RunのCPU24万秒仮値の内訳例：利用AI1,500回×20秒＝3万、実AI監視8,640回×10秒＝8.64万、毎分監視43,200回×2秒＝8.64万、6対象API×43,200回×0.1秒＝2.592万、その他約1.1万。同時実行で共有されるinstance秒・起動を測り直す。監視の実AI／通常処理が遅ければ上限10を超え得る。

DB操作例は通常監視6経路×43,200回×read5＝129.6万read、write2＝51.84万writeに、利用AI等read約1.5万・write約0.75万を加える。保存対象DB・索引・複製の追加操作を実装で確定する。無料枠はproject当たり対象DB1個の日次quotaで、月単位の単純な差引きではない。TTL／PITR／backup／restoreは有料。[Firestore公式料金](https://cloud.google.com/firestore/pricing)。

Run／監視無料帯の根拠：[Run公式料金](https://cloud.google.com/run/pricing)、[Observability公式料金](https://cloud.google.com/products/observability/pricing)。各範囲は実測前の使用量仮定で、クラウド請求の精度を小数点表示で保証しない。公開SKU・地域・契約が確定したら置換する。

## 4. 低減できた場合の比較

| 条件 | 固定ネットワーク以外 | 旧固定55を残す場合 |
| --- | --- | --- |
| 月100相談、旧tokens・平均15回を維持 | 約47〜63 | 約102〜118 |
| 月100相談、tokens半減・平均15回 | 約36〜52 | 約91〜107 |
| 月100相談、tokens半減・平均5回 | 約28〜44 | 約83〜99 |

削減の優先対象は未確定の固定network55と実AI監視10.368。固定networkの要否が決まる前に、ゼロにした低額を全要件適合の総額として提示しない。東京・大阪の保護方式を単純削除せず、同じ安全条件を満たす低固定費の経路を比較する。未成立の独立制御保護先の追加費用も未確定で、本表の額で収まるとは判断しない。

ユーザーの「ここ朝得られない？」は文脈から予備費・検証枠を抑えられないかという質問として扱った。費用前提の月100相談は明示指示として反映し、予備費と常設検証枠の一律上乗せは外す。β初回前・重要変更後の必要試験、同時20人の受入容量、認証・同意・削除・復旧の元条件は変更しない。

拡張評価：回復力の目標・変更・監視・試験は維持、RESILIENCY-08・10〜13の未成立条件は継続。試験を省略した適合宣言や段階完了は行わない。部分PBTは選定・契約を継承、実行N/A（文書のみ）。無効セキュリティ拡張は省略する。図・埋め込みコードなし。式・表・参照・UTF-8を検証する。

## Open tabs:
- cost-estimate-100-consultations.md: aidlc-docs/construction/patient-support-app/infrastructure-design/cost-estimate-100-consultations.md
- patient-support-app-infrastructure-review-questions.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-review-questions.md
- infrastructure-design.md: aidlc-docs/construction/patient-support-app/infrastructure-design/infrastructure-design.md
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md
- logical-components.md: aidlc-docs/construction/patient-support-app/nfr-design/logical-components.md

## My request:
費用に関する必要ないファイルを削除して"
**AI Response**: 費用資料3件のうち現行のcost-estimate-100-consultations.mdを残し、旧cost-estimate.mdとcost-reduction-review.mdを削除。インフラ設計・配備構成・計画・停止中質問票のリンクを現行見積りへ修正し、旧費用表を撤去。監査履歴と既存回答は保持。
**Context**: ユーザーが明示した不要費用ファイル削除を実行。対象は確認済みの2ファイルのみ。計画チェックと状態を同じ対話で更新。更新文書4件のUTF-8・表列・相対参照32件、全aidlc-docsの削除先リンク不在、残存費用ファイル1件を検証しエラー0。通常Markdownを事前確認、図・コードなし。金額・要件・拡張設定変更なし、部分PBT実行N/A、回復力未成立条件維持、無効セキュリティ拡張は省略。アプリ変更なし、ビルドN/A。

---

## 非機能設計への差戻し・レビュー回答確認
**Timestamp**: 2026-11-12T08:13:38Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-infrastructure-review-questions.md

## Open tabs:
- patient-support-app-infrastructure-review-questions.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-review-questions.md
- cost-estimate-100-consultations.md: aidlc-docs/construction/patient-support-app/infrastructure-design/cost-estimate-100-consultations.md
- infrastructure-design.md: aidlc-docs/construction/patient-support-app/infrastructure-design/infrastructure-design.md
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md
- logical-components.md: aidlc-docs/construction/patient-support-app/nfr-design/logical-components.md

## My request:
C:\Users\khr85\Documents\ai-dlc-v1-test\aidlc-docs\construction\plans\patient-support-app-infrastructure-review-questions.md
回答完了しました。次に進んでください"
**AI Response**: 4回答1A・2A・3B・4Bを確認。認証対策採用、旧予算不採用を反映し、安全変更保護・判定基盤の比較を作成。Spanner国内dual-region公式仕様と料金体系、Cloud Run固定IP経路を照合。状態・計画・関連成果物を更新。
**Context**: 質問2Aに従い非機能設計へ戻る。RESILIENCY-08・10〜13は未適合で段階完了を阻止。部分PBT実行N/A、無効セキュリティ拡張は適用省略。金額確定・クラウド作成・課金・実送信なし。新規文書は図・埋め込みコードなし、通常Markdownの構造を事前確認。

---

### 回答原文スナップショット
# U01 インフラ設計案・未成立事項のレビュー

> 2026-11-12回答反映：レビュー1A・2A・3B・4Bを受領。追加認証3対策を設計方針として採用し、非機能設計へ戻る。[安全変更保護・判定基盤の再比較](../patient-support-app/nfr-design/safety-control-comparison.md)を現行補完とする。月100相談・同時20人を維持し、旧850 USD予算・旧100 USD試作枠は不採用。方式成立・全体承認・実施は未完了。以下の採否待ち／回答停止は履歴。

> 2026-11-12：以下4問への回答依頼は停止中。質問3の850 USD案と質問4の100 USD試作枠は採用しない。旧質問や回答は履歴として保持する。費用資料は[月100相談の通常月概算](../patient-support-app/infrastructure-design/cost-estimate-100-consultations.md)へ一本化し、新構成・新予算は未決定とする。

2026-11-09作成の旧レビュー。元の回答1B・2A・3Aは確認済み。[インフラ設計案](../patient-support-app/infrastructure-design/infrastructure-design.md)、[3案の比較](../patient-support-app/infrastructure-design/deployment-architecture.md)、[現行の費用概算](../patient-support-app/infrastructure-design/cost-estimate-100-consultations.md)を参照。段階完了・本実装構成採用の承認依頼ではない。

## 質問1：追加認証対策の補完レビュー

[具体比較](../patient-support-app/nfr-requirements/authentication-supplement.md)のメール確認・不正試行制限・運営TOTPをどう扱いますか。標準再設定経路の迂回や24時間・最新のみの条件は別途成立確認が必要です。

A) 推奨の3対策を設計方針として採用する。患者へのMFA一律必須化はせず、初期制限値・回復手順は試作と受入で確認する。

B) 具体比較案の変更を依頼する。採用したい対策と変更点を回答欄に補足する。

C) その他（対策ごとの希望を回答欄に記載）。

[Answer]: A

## 質問2：制御正本の未成立事項と次の作業範囲

大阪単独の制御DBは大阪地域の永久喪失に対する確定済み安全変更の無損失を満たす構成になっていません。最終送信・返却・書込の2秒以内遮断も未実証です。回復力RESILIENCY-08・10〜13の未成立事項があり、現構成を本実装へ採用する段階には進めません。

A) 非機能設計へ戻り、国内で独立した安全変更保護と判定基盤の具体構成・確定手順・費用を先に比較する。既存の無損失・国内優先・復旧目標は維持する。推奨。

B) 現候補の限界を明示した比較試作のコード生成計画を先に作る。既存3試作条件・大阪喪失・認証迂回を範囲に含め、本実装採用や段階完了を承認したとはしない。試作後に方式・配置・費用へ戻って再レビューする。

C) その他（要件や比較範囲の変更を希望する場合は具体的に記載）。

[Answer]: A

## 質問3：環境分離・初期設定・費用案

案2（ローカル開発＋検証／β別、制御・復旧を含む計6プロジェクト）を比較の基準とし、min0・max4・concurrency8、AI2枠／PDF1枠を出発点とする提案です。予備費込み月額は低313.94／標準825.47／高2,611.96 USD、標準の許容予算案は850 USD／月です。独立制御保護の追加費用・部品単価の確定前なので、現時点の予算は比較基準であり本実装の採用・課金許可ではありません。

A) 案2・初期設定・標準850 USD／月を比較基準として採用し、試作・独立保護案の費用判明後に本実装構成を再レビューする。600 USD案は今回前提では不足することを確認する。

B) 別案・別予算を希望する。案1／案3または許容予算と、優先する負担・条件を回答欄に補足する。

C) その他（使用量・監視方針等を変更したい場合は具体的に記載）。

[Answer]: B

案2と提示された初期設定は比較候補に置く。通常月は月100相談の現行概算を使い、登録100人・同時20人の受入条件を維持する。旧850 USD／月は採用せず、固定ネットワークと独立保護を含む総額を確認してから予算を決める。

## 質問4：比較試作の費用・合否・戻り先

本問は旧試作費基準の履歴であり、回答依頼は停止中。試作費は[現行見積り第1節](../patient-support-app/infrastructure-design/cost-estimate-100-consultations.md)に従い、必要な試験の実施計画と使用量で別算定する。クラウド作成・課金有効化・契約・実送信は未許可。

A) 一回100 USD・7日以内・合成データ、実AI最大100試行かつ5 USD枠という計画基準に同意する。遮断・受信完全性・東京なし復元の3条件と大阪喪失／認証迂回を評価し、不成立・予算超過見込みなら方式／要件・費用へ戻す。実施範囲はコード生成計画で別途レビューする。

B) 試作の費用基準・期間・合否条件を変更する。変更したい値と理由を回答欄に記載する。

C) その他（現時点では有料試作を予定せずローカル検討だけにする等）。

[Answer]: B

合成データを使い、遮断・受信完全性・東京なしでの復元・大阪喪失・認証迂回を評価する。旧100 USDの試作枠は採用せず、方式比較後に必要な試験、実AIの試行回数、クラウド使用量から費用上限を決める。

## 回答後の処理

回答の整合を確認して、補完案と比較基準を更新する。質問2Aなら方式の具体比較、2Bなら比較試作計画に限定する。未成立事項を残したまま本実装のCode Generationやインフラ設計完了へ進めない。全体承認は成立条件・構成・予算のレビュー後に取得する。

質問は2つの具体選択肢＋その他、[Answer]:タグ、選択肢間の空行で構成。図・埋め込みコードなし。セキュリティ拡張無効、PBT実行N/A、回復力の未成立事項は正本の規則別一覧を参照する。

---

## 内容検証
**Timestamp**: 2026-11-12T10:54:05Z
**AI Response**: 更新8文書の厳密UTF-8・相対リンク、新規比較資料の表列数を検証しエラー0。文書のみの変更につきアプリのビルド・テスト実行N/A。
**Context**: 回答反映・比較補完。完了承認は未取得。

---

## A・B方式比較と設計検証の方針承認
**Timestamp**: 2026-11-12T10:59:47Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/nfr-design/safety-control-comparison.md

## Active selection of the file:
# U01 安全変更保護・判定基盤の再比較

2026-11-12。インフラレビュー回答1A・2A・3B・4Bを反映。質問2Aに従う非機能設計の補完であり、構成採用・段階完了の承認対象にはまだ達していない。

## 1. 維持する条件

月100相談、登録100人、同時20人。一般データRPO最大4時間、安全変更の確定後無損失、最大2秒の送信順序調整、国内優先、翌営業日着手・開始後24時間以内の復旧目標を維持する。安全停止と復旧目標達成は別判定。案2とmin0・max4・concurrency8、AI2枠／PDF1枠は比較候補。旧850 USD／月・100 USD試作枠は採用しない。

メール確認・不正試行制限・運営TOTPは設計方針として採用。患者MFA一律必須化は行わず、初期制限値・回復手順・標準再設定経路の迂回防止は検証対象のまま維持する。

## 2. 配置と比較

| 候補 | 具体構成と確定点 | 地域喪失・分断 | 負担・判断 |
| --- | --- | --- | --- |
| 旧案 | 大阪Firestoreに制御正本、他地域は非同期追従 | 大阪永久喪失時に確定済み安全変更を失い得る | 必須条件不適合。本実装候補から除外し比較履歴のみ |
| A：国内同期DB | 本文なし制御台帳をSpanner Enterprise Plusのdual-region-japan1へ分離。東京／大阪の受信・判定経路が同じ台帳を使用。通常時は両地域を含むcommit成功後に意図保存を確定 | 単一地域喪失時のDB保護を製品に委ねる。DB不通時は新規作用を拒否し受付状態を保留。DB復帰だけでアプリを再開しない | 同期・競合処理の自作範囲を減らせる第一比較候補。固定計算資源費と利用可能な最小容量の確認が必要 |
| B：2地域の同期確認台帳 | 東京／大阪それぞれ別プロジェクトのFirestoreとCloud Run。単一書込者が連番・前項hash・要求ID・制御世代を付与し、両地域の耐久記録完了後だけ確定応答。片側保存は未確定として停止側へ倒す | 同期確認不能時は確定応答しない。片地域からの単独昇格を禁止。旧書込者の失効と確定末尾を証明できなければ再開しない | 従量主体を狙えるが、2DBを1トランザクションにはできない。確定結果喪失、再試行、世代交代のプロトコル検証が重い。復旧目標内の再開可能性は未成立 |

Aの東京／大阪配置・強整合・地域障害時のRPO0は[公式構成仕様](https://docs.cloud.google.com/spanner/docs/instance-configurations)に基づく。製品の保証範囲をアプリ全体へ拡張しない。単一地域quorumへの切替後は独立保護が縮退するため、新規安全変更を従来と同じ保証で確定してよいとは扱わない。両地域保護の回復または別の成立済み保護先ができるまで該当確定を保留する。この停止が復旧目標を超えるならAも不採用として再設計する。

Bは本資料で提案する未実証方式。応答前に両側へ保存しても、復旧側が確定末尾や旧実行者排除を識別できることは別問題。hashは改ざん・欠番検出の補助であり、合意・フェンス・永続化を代替しない。

## 3. 共通の確定手順と判定責務

1. 独立した権利請求入口を両地域へ配置する。要求ID・最小参照・受信段階を記録し、本人未確認と本人確認済み意図を分ける。記録前切断も含め、到達し得る入口と未記録区間を追跡する。耐久化後の応答だけを見て受信完全性を証明しない。
2. 本人確認後、対象・目的・新制御世代・新規処理禁止を保護台帳へ保存する。Aは同期commit、Bは両側の耐久確認を必要条件にする。タイムアウトは成功扱いせず要求IDで照合する。
3. 最終実行経路が書込・送信・返却を仲介する。業務経路には直接DB書込権限・外部API秘密を与えない。全作用を実行世代と対象版で照合し、古い世代・判定不能・期限切れは拒否する。
4. 実行中作用の順序を確定し、未開始作用を拒否できた証拠を保存して利用遮断を確定する。許可確認と実送出の間で停止する競合、既存接続、予約済み処理、遅延書込・返却を含む。許可トークンの短いTTLや直前再読込だけで2秒保証を成立済みにしない。
5. 利用遮断と独立耐久保護の両条件が揃ったときだけ削除等の受付確定を返す。最大2秒で順序を確定できない場合は新規作用を停止して保留表示。送出済みデータの取消と、その結果の保存・適用・表示拒否を区別する。
6. 地域喪失後は受信到達点、未処理要求、制御末尾、旧世代の実行不能、復元物の隔離を別担当が確認して開放する。東京なし・大阪なしを別試験にする。一般データの復元点と制御台帳の無損失を混同しない。

DBと外部HTTP送信を原子的にcommitできるとは仮定しない。判定後に停止した旧プロセスが再開して実送出できる構成は不合格。全最終作用を覆う排他・世代失効と実行機構の設計が共通の残課題であり、Aの採用だけでは解消しない。

## 4. 費用の積算と接続候補

通常月の正本は[月100相談概算](../infrastructure-design/cost-estimate-100-consultations.md)。既存47.218〜62.718 USDは固定network・追加独立保護を除く比較基準であり、完成構成総額ではない。

| 候補 | 通常月の追加・置換費目 | 未確定値の決め方 |
| --- | --- | --- |
| A | Spanner計算容量・保存・backup・複製・通信、2地域の入口／仲介実行・監視 | 日本dual-region・Enterprise Plusの最小許容容量とSKU単価を取得。計算費は稼働時間×容量node換算×構成の時間単価。既存制御Firestore分を特定して差し引く |
| B | 2地域の台帳read/write・保存・PITR／backup・照合通信・入口／仲介／監視実行 | 通常監視も含む操作数、記録サイズ、保持日数、再試行率を測定。地域別・日次無料枠を重複控除しない |
| 共通network | 認証付きHTTPS、またはVPC・NAT／proxy等の制限経路 | HTTPS認証だけでは秘密を持つ実行者の任意送信を防げない。権限分離と宛先制限を満たす最小構成を先に固定。旧55 USDを部品価格として流用しない |

Spannerは計算資源以外に保存・backup・複製・転送が課金対象。[公式料金](https://cloud.google.com/spanner/pricing)。現行表を地域・構成別に確定できていないため、汎用regional単価や推定最小容量から月額を断定しない。固定IPが必要なCloud Run経路は[VPCとCloud NATを使う公式構成](https://docs.cloud.google.com/run/docs/configuring/static-outbound-ip)を比較するが、固定IP自体を送信フェンスと呼ばない。

全体総額＝既存小計－重複する旧制御費＋採用候補の制御費＋確定network費。試験月は必要試験のCPU秒・DB操作・保存／転送・実AI回数を別加算。総額・試験上限は未決定。新たな費用専用ファイルは作成しない。

## 5. 検証順序・合否・戻り先

最初に両候補の状態遷移と最終作用フェンスを紙上で検証し、反例のある候補を除外する。次にローカルモデルで重複・逆順・片側保存・commit後応答喪失・停止プロセス再開を検証する。ローカル合格は実クラウドIAM・地域喪失・実外部送信の合格を代替しない。

実試験計画では遮断・受信完全性・東京なし復元・大阪喪失・認証迂回を必須とし、合成データのみ使用。確定安全変更の消失、遮断後の不正作用、受信済み要求の見落とし、認証の旧リンク更新は1件でも不合格。復旧目標・通常API性能・同時20人も独立判定する。実AI試行数は目的別に積み上げ、旧枠を転記しない。

失敗時は本非機能設計へ戻る。要件緩和が必要なら要件／機能設計へ戻して明示レビューする。クラウド資源作成・課金・契約・実送信に入る前に実施範囲と使用量・費用上限を具体化してレビューする。

## 6. 拡張評価と現在地

| 規則 | 評価 |
| --- | --- |
| RESILIENCY-01・02・03 | 適合（本補完の文書範囲）。責務・目標・変更履歴を維持 |
| RESILIENCY-04〜07・09・14・15 | 本変更の詳細再設計はN/A。配備・容量・監視・試験・運営の既存設計を継承。実設定・実行は未実施 |
| RESILIENCY-08 | 未適合。Aの製品上の2地域保護は確認、実行経路全体の独立性・縮退時保証は未成立 |
| RESILIENCY-10 | 未適合。最終作用の競合と認証迂回は未解消 |
| RESILIENCY-11 | 未適合。候補別の費用・縮退時再開と復旧目標の両立は未確認 |
| RESILIENCY-12 | 未適合。東京なしの一般復元元・期限消去と安全台帳の構成実証待ち |
| RESILIENCY-13 | 未適合。開放証拠・旧実行者排除・受信完全性の成立確認待ち |
| PBT-02・03・07・08 | 保存往復・単調世代・遮断後作用禁止の性質を継承。構造化生成器・縮小・seed/pathを試験計画へ。実行N/A（文書のみ） |
| PBT-09 | fast-check／Vitestを継承。依存設定N/A（コード未生成） |
| セキュリティ拡張 | 無効につき適用省略。元の認証・同意・秘密保護要件は継続 |

方式比較は進めたが段階完了とはしない。次の作業は最終作用フェンスと受信境界の具体化、候補Aの容量／SKU取得、候補Bの復旧時確定手順の反例検証。追加のユーザー選択を求める前に成立性と全費目を比較可能にする。

## Open tabs:
- safety-control-comparison.md: aidlc-docs/construction/patient-support-app/nfr-design/safety-control-comparison.md
- patient-support-app-infrastructure-review-questions.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-review-questions.md
- cost-estimate-100-consultations.md: aidlc-docs/construction/patient-support-app/infrastructure-design/cost-estimate-100-consultations.md
- infrastructure-design.md: aidlc-docs/construction/patient-support-app/infrastructure-design/infrastructure-design.md
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md

## My request:
追加記載を、A・Bの方式比較と設計検証を進める方針として承認します。次回レビューでは、最大2秒の判定と停止手順、地域喪失時の再開条件と復旧目標、権利請求の受信境界を具体化し、候補別の費用とあわせて提示してください。構成採用・段階完了、および課金を伴うクラウド試験や外部送信の承認は、具体案を確認したうえで別途判断します。"
**AI Response**: 承認は方式比較・設計検証に限定して受領。2秒判定・停止、地域喪失後の再開、受信境界と候補別費用の具体レビューを作成する。
**Context**: 構成採用・段階完了・有料クラウド試験・外部送信は別途判断。セキュリティ拡張は無効につき適用省略。

---

## A・B具体設計レビュー案の作成
**Timestamp**: 2026-11-12T11:04:52Z
**AI Response**: 方式比較第7〜12節へ2秒起算・配分・停止と保留、A／B確定手順、地域喪失／分断の再開条件、24時間の作業配分、受信境界、V1〜V8の設計反例を記載。簡易3順序モデルは許可読取→遮断→送出に反例1件、他2順序では反例なし。費用正本第5節へ100／1000PU・台帳操作・NATの候補別感度と未算入部品を追記。日本SKUの単価選択未確認を明示し、Australiaの表示料金を日本料金へ転用しない。
**Context**: 文書の構造・表・リンク・式を事前確認。図・埋め込みコードなし。RESILIENCY-08・10〜13は最終作用・独立保護再構成・受信完全性・復旧目標両立の未成立により段階完了を阻止。部分PBT実行N/A、無効セキュリティ拡張は省略。構成採用・段階完了・課金・実送信なし。費用は感度小計であり完成総額ではない。

---

## 次回レビュー案の内容検証・提示
**Timestamp**: 2026-11-12T11:05:24Z
**AI Response**: 更新7文書のUTF-8・Markdown表列・相対リンク42件、候補別小計6端点を検証しエラー0。具体レビュー案を提示。A・Bとも最終作用フェンス・受信境界の未成立、日本SKU・最終ゲート費用の未確定を明示。
**Context**: 計画チェックを同じ対話で更新。完成構成・全費目総額のレビュー項目は未完了を維持。文書のみのためアプリのビルド／製品試験N/A。

---

## 利用ゼロ時の維持費の説明
**Timestamp**: 2026-11-12T11:10:21Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/infrastructure-design/cost-estimate-100-consultations.md

## Open tabs:
- cost-estimate-100-consultations.md: aidlc-docs/construction/patient-support-app/infrastructure-design/cost-estimate-100-consultations.md
- safety-control-comparison.md: aidlc-docs/construction/patient-support-app/nfr-design/safety-control-comparison.md
- patient-support-app-infrastructure-review-questions.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-review-questions.md
- infrastructure-design.md: aidlc-docs/construction/patient-support-app/infrastructure-design/infrastructure-design.md
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md

## My request:
これってさ、稼働しなくても維持費で月どれだけかかる？"
**AI Response**: 利用者アクセス0・定時監視継続の前提で既存資料を分解。共通メール約6・DNS／ドメイン2・実AI監視10.368で約18 USD。Aは100PUと仮単価の既存感度ならDB計算216〜360を加え約234〜378 USD、Bは計算容量固定費なしの比較で約18 USD。両者とも保存・通常監視・network・未選定ゲート等を別加算する部分額で総額は未確定。固定IP2個を残す案なら更に7.20 USD／月、gateway等は別。監視も停止する場合は実AI監視分を除くが資源存続費は残る。
**Context**: 既存見積りの仮定を説明し、新しい料金確定・構成変更・停止操作は行わない。文書の単純追記のみ、図・コードなし。

---

## B案の利用ゼロ時の概算補足
**Timestamp**: 2026-11-12T11:11:51Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/infrastructure-design/cost-estimate-100-consultations.md

## Open tabs:
- cost-estimate-100-consultations.md: aidlc-docs/construction/patient-support-app/infrastructure-design/cost-estimate-100-consultations.md
- safety-control-comparison.md: aidlc-docs/construction/patient-support-app/nfr-design/safety-control-comparison.md
- patient-support-app-infrastructure-review-questions.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-review-questions.md
- infrastructure-design.md: aidlc-docs/construction/patient-support-app/infrastructure-design/infrastructure-design.md
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md

## My request:
Bやとどれくらい？"
**AI Response**: Bの既存比較小計61.688〜154.548から相談AI22.50だけを引くと39.188〜132.048 USD。利用ゼロ・監視継続で他の仮枠を残す暫定比較として約40〜130 USD／月＋未価格部品と説明。前の約18 USDは共通費の一部で総額ではない。利用依存の他費目は未再積算、日本SKU・最終ゲート等は未確定のため、固定維持費の確定範囲／上限とはしない。
**Context**: 既存概算の算術説明。新規料金・構成採用・課金・実送信なし。通常Markdownを確認、図・コードなし。

---

## 費用による候補A棄却
**Timestamp**: 2026-11-12T11:15:34Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/infrastructure-design/cost-estimate-100-consultations.md

## Open tabs:
- cost-estimate-100-consultations.md: aidlc-docs/construction/patient-support-app/infrastructure-design/cost-estimate-100-consultations.md
- safety-control-comparison.md: aidlc-docs/construction/patient-support-app/nfr-design/safety-control-comparison.md
- patient-support-app-infrastructure-review-questions.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-review-questions.md
- infrastructure-design.md: aidlc-docs/construction/patient-support-app/infrastructure-design/infrastructure-design.md
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md

## My request:
費用：候補Aを棄却"
**AI Response**: 候補Aを費用により棄却し、既存の方式・金額は履歴として保持。候補Aの単価調査・追加設計検証・試験計画を終了し、今後の対象を候補Bへ限定。比較・費用・関連設計・状態・計画を更新。
**Context**: 明示された棄却決定を実行。候補Bの構成／予算採用とはしない。RESILIENCY-03は決定記録適合、08・10〜13は未成立を維持。部分PBT実行N/A、無効セキュリティ拡張は省略。図・埋め込みコードなし、通常Markdownの追記と表ラベルを事前確認。

---

検証結果：更新7文書のUTF-8・棄却記録・表列・相対参照が適合。文書変更のみにつきアプリのビルド／試験N/A。

## 不要な候補情報の削除・B案への整理
**Timestamp**: 2026-11-12T11:19:43Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/infrastructure-design/cost-estimate-100-consultations.md

## Open tabs:
- cost-estimate-100-consultations.md: aidlc-docs/construction/patient-support-app/infrastructure-design/cost-estimate-100-consultations.md
- safety-control-comparison.md: aidlc-docs/construction/patient-support-app/nfr-design/safety-control-comparison.md
- patient-support-app-infrastructure-review-questions.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-review-questions.md
- infrastructure-design.md: aidlc-docs/construction/patient-support-app/infrastructure-design/infrastructure-design.md
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md

## My request:
棄却した案の情報は不要なので、B案の設計検討飲み残して、Aの情報を消して"
**AI Response**: A案の方式・費用・公式リンク・回復手順・専用反例と比較列を削除。B案の設計検討・費用に限定し、状態・計画・関連設計の記述を整合。監査ログの原文は履歴として保持。
**Context**: ユーザーが明示した文書削除編集。アプリ・クラウド操作なし。B案の未成立条件・未確定費用・承認境界は変更しない。通常Markdownの表・見出し・リンクを事前確認。RESILIENCY-03は決定記録適合、08・10〜13は未成立を維持、部分PBT実行N/A、無効セキュリティ拡張は省略。

---

検証結果：更新7文書の不要候補記述不在・UTF-8・表列・相対参照を確認しエラー0。アプリのビルド／試験N/A（文書整理のみ）。

## B案の費用内訳の説明
**Timestamp**: 2026-11-12T11:22:00Z
**User Input**: "# Context from my IDE setup:

## Open tabs:
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- infrastructure-design.md: aidlc-docs/construction/patient-support-app/infrastructure-design/infrastructure-design.md
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md
- patient-support-app-infrastructure-review-questions.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-review-questions.md
- safety-control-comparison.md: aidlc-docs/construction/patient-support-app/nfr-design/safety-control-comparison.md

## My request:
B案の内訳もうちょい見せて"
**AI Response**: 現行費用正本を確認し、月100相談の内訳を表示。相談AI22.50、AI監視10.368、基盤実行3〜10、既存保存2〜5、メール6.05、ドメイン2、他既存1.30〜6.80、B台帳1.50〜3、追加保存0.50〜3、追加実行5〜15、NAT／IP7.47〜70.83で小計61.688〜154.548 USD。NAT／IPの幅をIP7.20・仮処理0.27・gateway0〜63.36に分解。下限は稼働可能な最低費ではなく算術境界、日本SKU未確定・ゲート等未算入を明記。利用ゼロ時は相談AIのみ差し引く暫定39.188〜132.048 USDで、他費目再積算前と説明。
**Context**: 既存文書の内訳説明のみ。構成・金額・課金許可の新規判断なし。通常Markdown表を確認、図・埋め込みコードなし。

---

## メール費用の算定根拠の説明
**Timestamp**: 2026-11-12T11:24:22Z
**User Input**: "# Context from my IDE setup:

## Open tabs:
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- infrastructure-design.md: aidlc-docs/construction/patient-support-app/infrastructure-design/infrastructure-design.md
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md
- patient-support-app-infrastructure-review-questions.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-review-questions.md
- safety-control-comparison.md: aidlc-docs/construction/patient-support-app/nfr-design/safety-control-comparison.md

## My request:
メールってどういう原理でその金額？何にお金を払っているの？"
**AI Response**: 6.05 USDは受信用mailbox1席の仮枠6 USDとアプリ自動送信500通×仮単価0.10 USD／千通＝0.05の合算。前者はアプリ停止中にも問い合わせ・削除等の請求を受信／保存／閲覧するメールサービス、後者は送信APIによる配信の対価。6 USDは未選定の仮値で契約料金ではない。患者100人分のメールアカウント費やドメイン代ではない。既存窓口を要件に沿って利用できれば追加mailbox費を削減できるが、現時点で0とはしない。
**Context**: 現行見積りの仮定の説明のみ。新たな料金保証・契約・要件変更・実送信なし。

---

## 構築前に残る判断事項の説明
**Timestamp**: 2026-11-12T11:26:32Z
**User Input**: "# Context from my IDE setup:

## Open tabs:
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- infrastructure-design.md: aidlc-docs/construction/patient-support-app/infrastructure-design/infrastructure-design.md
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md
- patient-support-app-infrastructure-review-questions.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-review-questions.md
- safety-control-comparison.md: aidlc-docs/construction/patient-support-app/nfr-design/safety-control-comparison.md

## My request:
費用の他、あと実際に構築するまでに決めないといけないのは何？"
**AI Response**: 現行状態・回答済みレビュー・B案の未成立条件を確認。費用以外では、安全遮断・受信完全性・地域喪失後再開の成立方式、認証の具体設定、環境構成、外部サービスとデータ取扱い、運用担当・通知先、試作と実装計画の確定が残ると説明。ユーザー判断と技術検証を区別し、試作開始と本実装・患者データ利用の条件を整理。
**Context**: 既存設計についての説明のみ。段階移行・構成採用・課金・外部送信なし。通常Markdownを検証。無効セキュリティ拡張は適用省略、拡張の再評価・段階完了は行わない。

---

## 技術検証の内容の説明
**Timestamp**: 2026-11-12T11:27:55Z
**User Input**: "# Context from my IDE setup:

## Open tabs:
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- infrastructure-design.md: aidlc-docs/construction/patient-support-app/infrastructure-design/infrastructure-design.md
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md
- patient-support-app-infrastructure-review-questions.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-review-questions.md
- safety-control-comparison.md: aidlc-docs/construction/patient-support-app/nfr-design/safety-control-comparison.md

## My request:
技術検証って何するの？"
**AI Response**: 合成データと必要部分だけの試作で、処理途中停止・通信断・応答喪失・片地域喪失・認証迂回を意図的に起こし、遮断後作用・受付欠落・復旧時の記録喪失や期限延長がないかを確認する作業と説明。机上検証、ローカル試作、必要時の実クラウド試験を区別し、実サービスの成立をローカルだけで証明しない。現時点は設計検証で反例が残る段階で、有料試験や外部送信は未実施。
**Context**: 説明のみ。新規実装・段階移行・課金・外部送信なし。通常Markdownの内容を検証。無効セキュリティ拡張は適用省略。

---

## 非機能設計補完：残課題の検討と質問票提示
**Timestamp**: 2026-11-12T11:31:23Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/nfr-design/safety-control-comparison.md

## Active selection of the file:
を対象として、最終作用の保証範囲を定めたゲートと
## Open tabs:
- safety-control-comparison.md: aidlc-docs/construction/patient-support-app/nfr-design/safety-control-comparison.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- infrastructure-design.md: aidlc-docs/construction/patient-support-app/infrastructure-design/infrastructure-design.md
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md
- patient-support-app-infrastructure-review-questions.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-review-questions.md

## My request:
現行の残課題について、あなたが考えて、不明点は質問ファイルを通して私に選択させてください。"
**AI Response**: 現行の反例・回答済み方針を確認し、業務DB内の原子的停止判定、最終経路の集約、受付照合、旧実行者排除と独立保護再構成の補強案を検討。技術側の担当事項と利用前条件を整理し、patient-support-app-remaining-issues-questions.mdに推奨・代替・要件変更の影響を付した6問を作成した。質問は停止境界、2秒条件、受信境界、地域喪失後の保護先、部分再開、検証計画。各[Answer]:へ選択肢の文字を記入し、その他の場合は希望を補足して、回答完了を知らせるよう案内。計画チェック・状態を更新し、6問・回答タグ・その他・UTF-8・相対参照を確認。
**Context**: 質問票の提示であり承認依頼や段階完了ではない。RESILIENCY-08・10〜13の阻害事項を継続し、実行N/Aと設計適合を区別。無効セキュリティ拡張は適用省略。既存要件・構成採用・予算の変更、実装・課金・外部送信なし。

---

## 残課題回答承認の反映・ローカル検証計画レビュー
**Timestamp**: 2026-11-12T11:45:50Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-remaining-issues-questions.md

## Open tabs:
- patient-support-app-remaining-issues-questions.md: aidlc-docs/construction/plans/patient-support-app-remaining-issues-questions.md
- safety-control-comparison.md: aidlc-docs/construction/patient-support-app/nfr-design/safety-control-comparison.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md
- infrastructure-design.md: aidlc-docs/construction/patient-support-app/infrastructure-design/infrastructure-design.md
- patient-support-app-infrastructure-design-plan.md: aidlc-docs/construction/plans/patient-support-app-infrastructure-design-plan.md

## My request:
残課題の質問を回答完了しました。検討結果も承認します。次に進んでください"
**AI Response**: 質問票の生回答1B・2B・3B・4B・5A・6Aを確認し、6回答が有効で相互矛盾なしと判断。ユーザーの明示承認を要件変更方向と検討結果の承認として記録。remaining-issues-decisions.mdに旧条件との差分、実開始と予約の区別、元期限維持、地域喪失時の長期停止例外と未達計測、部分再開の前提を記載。要件・非機能要件・方式・論理部品・インフラへ優先参照を追加。既存React/Vite構成を確認し、専用ローカルパッケージの8生成手順、10固定シナリオ、部分PBT、CIと結果報告、実クラウドでしか検証できない項目を含むpatient-support-app-local-validation-code-generation-plan.mdを作成。計画チェック・状態を更新し回答列、8手順、UTF-8・参照を検証。git statusは所有者不一致で参照できず、グローバル設定は変更していない。
**Context**: 残課題の既存承認を再要求しない。具体的な生成計画は今回初めて作成したため、AGENTS.mdのCode Generation Part 1および.aidlc-rule-details/construction/code-generation.md Step 7に従い実行前レビューを分離。実装・クラウド・課金・実送信は未実施。実構成のRESILIENCY-08・10〜13は再評価・実証前で未解消、部分PBT実行N/A、無効セキュリティ拡張は適用省略。

---

## ローカル検証コード生成計画：承認案内
**Timestamp**: 2026-11-12T11:45:50Z
**User Input**: （新規入力なし）
**AI Response**: 回答と検討結果を設計に反映し、ローカル試作計画を作成したことを報告。patient-support-app-local-validation-review-questions.mdの質問1に回答を案内。AGENTS.mdとconstruction/code-generation.mdの「Get explicit user approval before generation」に基づき、今回作成した具体計画の実行前確認が必要と説明。
**Context**: 計画と質問ファイルを作成済みの状態でレビューを依頼。段階完了や本実装構成採用を示すものではない。

---

## 本実装とローカル試作の開発言語比較
**Timestamp**: 2026-11-12T11:50:35Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-local-validation-code-generation-plan.md

## Active selection of the file:
# U01 B案ローカル検証：コード生成計画

2026-11-12。状態：計画作成済み、生成前レビュー。根拠は残課題回答6Aと[承認済み方向の具体化](../patient-support-app/nfr-design/remaining-issues-decisions.md)。本実装用のコード生成ではなく、未成立条件を調べる隔離した試作。非機能設計・インフラ設計全体を完了扱いにしない。

## 対象・既存構成

既存ルートはReact・TypeScript・Viteのプロジェクトで、package.jsonにはテストスクリプトやVitest・fast-checkがまだない。画面や既存アプリの動作に手を入れず、試作用の独立パッケージをワークスペース直下のexperiments/patient-support-safety/へ置く。既存ルートの依存・lockfileは変更しない。

所属はU01。既存C03・C04・C09・C15・C16の契約を模す。US-01（認証失効）、US-12（再送・通信断）、US-15（削除・撤回）、US-19（変更証跡）、US-20・21（権限取消し）の横断条件を検証する。これらのストーリー全体や患者機能を実装済みにはしない。模擬AI・PDFはUS-04・13の安全境界だけを扱う。

外部AI・メール・Firestore・Firebase Authへ接続しない。架空の対象IDと人工時刻のみ使用し、秘密情報を読み込まない。クラウド作成やネットワーク越しの故障試験は含めない。テスト用依存の取得が必要な場合は環境の承認機構に従う。

## インターフェースとモデル

- 二つの独立したメモリー台帳：Prepare、Decision、片側応答喪失、再送、消失を再現。操作ID・対象・世代・期限・確定状態を保存し、操作順序をログへ記録する。
- 模擬業務DB：同一対象の禁止状態確認と書込みを一つの不可分なモデル操作にする。二つのDBを一つのトランザクションとして扱わない。
- 最終作用アダプター：送信と返却それぞれについて、許可・予約・実開始・完了・結果利用を分離。停止と開始の順序を制御できるスケジューラーを注入する。
- 受付・再開判定：操作IDによる状態照会、同一操作の再送、対象別照合、全体の保護状態と旧実行者状態の検証。
- 認証モデル：資格世代・リンク発行時刻・最新リンクID・消費状態を判定する純粋関数。実Firebaseの標準REST経路を検証したとは扱わない。

全試験でt0、実開始、停止適用、完了、保存／返却の可否を区別する。偽時計で2秒境界を検証しても実性能の達成とは報告しない。

## 生成手順

- [ ] Step 1：既存変更と出力先を確認し、experiments/patient-support-safety/package.json・tsconfig.json・vitest.config.tsを作る。TypeScript・Vitest・fast-checkの整合する依存を選び、その時点の公式情報を確認する。専用lockfileを生成する。
- [ ] Step 2：src/contracts.ts・clock.ts・scheduler.ts・ledger.tsを作る。操作ID、Prepare／Decision、世代、元期限、耐久受付とAcceptedの区別、任意の停止／復帰時点を表現する。
- [ ] Step 3：src/business-store.ts・effects.ts・controller.tsを作る。業務禁止状態と書込みの同時判定、実開始前の失効、開始済み試行の完了例外、停止後の保存・新規返却拒否を実装する。伝播前の隙間と順序不明を消さず表現する。
- [ ] Step 4：src/intake.ts・recovery.ts・auth-policy.tsを作る。耐久受付、再送照合、片地域停止・分断、旧実行者排除、全体／対象別再開、期限非延長、24時間超過の未達記録を実装する。
- [ ] Step 5：tests/scenarios.test.tsで下記固定シナリオを作る。旧V1・V6・V8の変更後の合否も明示する。正常ケースだけでなく、故意に禁止判定を外した欠陥例をテスト内の対照として検出できることを確認する。欠陥例は製品コードへ混入させない。
- [ ] Step 6：tests/properties.test.ts・generators.tsで台帳の保存往復、元期限非延長、確定記録の残存、世代単調、停止後新規作用禁止、消費済みリンクの非復活を検証する。対象・操作・世代・時刻・故障順序を構造化し、seedとpathを失敗時に出力、縮小を有効にする。部分PBTの対象である純粋モデル・保存変換に限定する。
- [ ] Step 7：README.mdへ実行方法と証拠の限界を記載し、aidlc-docs/construction/patient-support-app/code/local-validation-summary.mdへ結果・反例・再現手順・未確認事項を記録する。専用package.jsonにtest・test:properties・typecheckを用意する。既存CIがあれば適切なローカルモデル試験ジョブを追加し、なければ専用.github/workflows/patient-support-safety-model.ymlを作成する計画とする（実サービス・秘密なし）。
- [ ] Step 8：専用パッケージの型検査・固定試験・PBTを実行する。失敗を単に再実行して隠さず反例を保存する。ルートの設定を変更していないことと出力先を確認し、計画チェック・監査・状態を更新する。結果を設計へ戻し、採用判断と実クラウド試験の必要範囲を提示する。

Step 7のCIファイルはワークスペースルートの.github/workflows/配下に置く。ローカル実装中にこのファイルを作成しても、リモートへのpush・公開・外部実行を許可した意味にはしない。

## 固定シナリオと合否

| ID | 注入する順序・障害 | 合格条件 |
| --- | --- | --- |
| L-01 | 許可取得・予約後停止、旧実行者復帰 | 実開始前なら送信・返却拒否。古い予約で開始できない |
| L-02 | 実開始後停止、送信・返却を継続 | 同じ試行の残りのみ完了可。追加試行・保存・後続結果利用は拒否 |
| L-03 | 停止と業務commit競合、停止伝播の遅延 | 業務DBの禁止適用後の書込みなし。伝播前作用を別記し、未適用をAcceptedにしない |
| L-04 | 正常t0・2秒境界、制御処理停止 | 正常経路の目標判定と障害Pendingを区別。時計が止まった処理を停止完了にしない |
| L-05 | 受信前／片側保存／両側保存／応答返却の各時点で喪失 | 両側保存前は未確定。両側保存後は片地域喪失でも回収。再送で元期限を延ばさない |
| L-06 | 片側Decision・両側Decision後の地域喪失 | 未確定意図を捨てない。確定応答済み安全変更は残存側に存在 |
| L-07 | 地域間分断・片地域永久喪失・旧実行者復帰 | 単独昇格せず停止。独立保護不成立時は部分再開も拒否。24時間超過を記録 |
| L-08 | 全体健全だが対象Aの依頼が未解決 | 分離の証拠がある場合のみBを開放。対象不明・新着差分未確認なら拒否 |
| L-09 | 古いリンク・24時間境界・消費済みリンク・旧資格 | 最新のみ・期限内・未消費条件、成功後の旧資格失効を純粋モデルで確認 |
| L-10 | HTTPタイムアウト後の処理継続 | タイムアウトを実停止と見なさず、遅延新規作用をモデルの最終経路で拒否 |

各固定シナリオの成功は、そのモデルと列挙した順序に限る。PBTでも実世界の全状態の証明とはしない。

## ローカルでは成立判定しない項目

実ソケットへ渡るバイトと停止の順序、ゲート迂回不能性、Cloud IAM失効、Firestore競合・耐久保存と地域喪失、Firebase標準RESTの迂回、ネットワーク分断時の実挙動、同時20人の本構成性能、2秒の実時間、実復旧24時間、外部サービスの保持・削除は別途確認が必要。モデルが通っても本実装を採用しない。

## 計画の準備状況と拡張

- [x] 6回答と変更範囲、U01のストーリー対応、既存package.jsonとソース配置を確認。
- [x] 試作の出力先・モデル契約・8生成手順・10固定シナリオ・合否・限界を具体化。
- [ ] この具体的なコード生成計画のレビュー回答を受領。
- [ ] 生成・検証を実施し、実構成への外挿を避けて報告。

RESILIENCY-03：承認・変更根拠を記録。08・10〜13：実構成未成立を維持。本試作は調査に限り、阻害事項を残した本実装着手を許可しない。PBT-02・03・07・08・09：生成手順6〜8に反映し、実行評価は未着手。PBT-01・04〜06・10：固定例と反例対照を含め助言として反映。セキュリティ拡張は無効につき適用省略。

レビュー質問は[ローカル検証計画レビュー](patient-support-app-local-validation-review-questions.md)へ記載する。段階完了の報告ではない。
## Open tabs:
- patient-support-app-local-validation-code-generation-plan.md: aidlc-docs/construction/plans/patient-support-app-local-validation-code-generation-plan.md
- patient-support-app-local-validation-review-questions.md: aidlc-docs/construction/plans/patient-support-app-local-validation-review-questions.md
- patient-support-app-remaining-issues-questions.md: aidlc-docs/construction/plans/patient-support-app-remaining-issues-questions.md
- safety-control-comparison.md: aidlc-docs/construction/patient-support-app/nfr-design/safety-control-comparison.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md

## My request:
実際の開発言語と今回のローカル施策での開発言語にはどのくらい相違がありますか"
**AI Response**: 技術選定書と試作計画を照合。現行の本実装案はフロントReact/TypeScript、バックエンドNode.js/TypeScript、試作もTypeScriptで言語差は基本的にないと説明。Vitest/fast-checkも本実装案と共通。差はメモリー台帳・偽時計・模擬サービスと実Firestore・通信・認証の実装であり、型や純粋ロジック・反例は再利用候補だがモデル全体の流用や本番保証にはしない。Node.jsは実行環境、ReactはUIライブラリーで言語とは区別。計画の承認や実行として扱わない。
**Context**: 既存設計の比較説明のみ。ファイル内容は通常Markdownとして検証。アプリ実装・課金・外部送信なし。無効セキュリティ拡張は適用省略。

---

## ローカル検証：別途インストール手順の作成
**Timestamp**: 2026-11-12T11:53:40Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-local-validation-code-generation-plan.md

## Active selection of the file:
既存ルートはReact・TypeScript・Viteのプロジェクトで、package.jsonにはテストスクリプトやVitest・fast-checkがまだない。画面や既存アプリの動作に手を入れず、試作用の独立パッケージをワークスペース直下のexperiments/patient-support-safety/へ置く。既存ルートの依存・lockfileは変更しない。

## Open tabs:
- patient-support-app-local-validation-code-generation-plan.md: aidlc-docs/construction/plans/patient-support-app-local-validation-code-generation-plan.md
- patient-support-app-local-validation-review-questions.md: aidlc-docs/construction/plans/patient-support-app-local-validation-review-questions.md
- patient-support-app-remaining-issues-questions.md: aidlc-docs/construction/plans/patient-support-app-remaining-issues-questions.md
- safety-control-comparison.md: aidlc-docs/construction/patient-support-app/nfr-design/safety-control-comparison.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md

## My request:
今回のローカル検証においてインストールが必要なツールについては別途でインストール手順教えてくれる？"
**AI Response**: Node.js v24.12.0・npm.cmd 11.6.2を確認。npm.ps1は実行ポリシーで拒否されたためnpm.cmdを案内。公式Node.js・Vitest・fast-check情報を確認し、code/local-validation-installation.mdにWindowsの確認・未導入時の導入・試作生成後のnpm ci・型検査とテスト・エラー対応を記載し、計画から参照を追加。現時点は試作package.jsonとlockfile未生成で導入手順は後続実行と明記。追加インストールは実施していない。
**Context**: ツール手順の作成。質問票の回答は空欄のまま保持し、計画承認と解釈しない。通常Markdown、表列、PowerShell構文と前提を確認。無効セキュリティ拡張は適用省略、コード実装・課金・外部サービス送信なし。

---

## ローカル検証計画承認・コード生成実行
**Timestamp**: 2026-11-12T12:05:40Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-local-validation-review-questions.md

## Open tabs:
- patient-support-app-local-validation-review-questions.md: aidlc-docs/construction/plans/patient-support-app-local-validation-review-questions.md
- patient-support-app-local-validation-code-generation-plan.md: aidlc-docs/construction/plans/patient-support-app-local-validation-code-generation-plan.md
- patient-support-app-remaining-issues-questions.md: aidlc-docs/construction/plans/patient-support-app-remaining-issues-questions.md
- safety-control-comparison.md: aidlc-docs/construction/patient-support-app/nfr-design/safety-control-comparison.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md

## My request:
/C:/Users/khr85/Documents/ai-dlc-v1-test/aidlc-docs/construction/plans/patient-support-app-local-validation-review-questions.md質問に回答完了しました。"
**AI Response**: 質問1の生回答Aを確認。公式Vitest・fast-check資料とnpmレジストリで依存・互換性を確認。npmのsandboxネットワークEACCES後に環境の承認機構を使用し、専用パッケージへ依存を導入。初期Vite8.2.2の監査報告を確認し、試作側のみ8.3.8へ更新、導入時監査0件。計画の11モデルソース、固定20テスト、PBT6テスト、専用README・lockfile・CI設定と結果報告を作成。型検査、全26試験、独立PBT実行、CI用JSON出力を確認。PBT各500ケース、seed20261112。停止伝播前の書込みは成功するモデル反例として残し、実クラウド成立を主張しない。ルート依存2ファイルのSHA256不変、文書のUTF-8・リンクを確認。計画更新コマンドの作業ディレクトリ指定誤りは直後に修正し、全8手順の完了を記録。
**Context**: 計画に基づく隔離試作の実行。実ソケット・IAM・実認証・実地域喪失等は未実証、回復力08・10〜13は未解消。部分PBTは純粋モデルで成功、リモートCI未実行。無効セキュリティ拡張は適用省略。アプリ既存画面・ルート依存変更なし。有料クラウド・実AI・実メール送信なし。

---

## ローカル検証中：ツール導入の確認
**Timestamp**: 2026-11-12T12:05:40Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/code/local-validation-installation.md

## Open tabs:
- patient-support-app-local-validation-review-questions.md: aidlc-docs/construction/plans/patient-support-app-local-validation-review-questions.md
- patient-support-app-local-validation-code-generation-plan.md: aidlc-docs/construction/plans/patient-support-app-local-validation-code-generation-plan.md
- patient-support-app-remaining-issues-questions.md: aidlc-docs/construction/plans/patient-support-app-remaining-issues-questions.md
- safety-control-comparison.md: aidlc-docs/construction/patient-support-app/nfr-design/safety-control-comparison.md
- nfr-design-patterns.md: aidlc-docs/construction/patient-support-app/nfr-design/nfr-design-patterns.md

## My request:
ツールは手順書に書いてくれたのまだやってないけど大丈夫？"
**AI Response**: 大丈夫です。Node.jsとnpmはすでに確認できており、TypeScript・Vitest・fast-checkなどは、承認いただいた計画の手順1で私が試作専用フォルダーに導入します。手動で同じ手順を実行する必要はありません。現在はバージョン確認までで、インストールはまだ行っていません。その後、環境の承認機構に従い導入を実施し、結果を手順書と報告へ反映した。
**Context**: 途中の質問に回答して承認済み試作作業を継続。最終報告は必要ツール導入済み、型検査26試験成功、実構成上の未解消点は継続と案内。

---

## ローカル検証結果に基づく次の進め方の説明
**Timestamp**: 2026-11-12T12:07:57Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/code/local-validation-summary.md

## Open tabs:
- local-validation-summary.md: aidlc-docs/construction/patient-support-app/code/local-validation-summary.md
- patient-support-app-local-validation-review-questions.md: aidlc-docs/construction/plans/patient-support-app-local-validation-review-questions.md
- patient-support-app-local-validation-code-generation-plan.md: aidlc-docs/construction/plans/patient-support-app-local-validation-code-generation-plan.md
- patient-support-app-remaining-issues-questions.md: aidlc-docs/construction/plans/patient-support-app-remaining-issues-questions.md
- safety-control-comparison.md: aidlc-docs/construction/patient-support-app/nfr-design/safety-control-comparison.md

## My request:
この検証結果をもとにどうすればいいの？"
**AI Response**: 26件合格はモデルのルール確認であり本実装の安全成立ではないと説明。次は停止伝播前の直接書込みと実送出の順序を優先し、全経路の実構成・状態・保証境界と旧実行者排除の証拠を設計する。その後、停止前後の書込み・外部送信・認証迂回を実サービスで検証する最小計画と費用を提示し、実施判断を受ける順序を推奨。根拠なく受付確定時点や停止保証を変更しない。ユーザーは技術実装を選ぶ必要はなく、具体案の保証範囲・停止時間・費用を判断する。
**Context**: 結果解説のみ。新規実装・クラウド作成・課金・外部送信なし。通常Markdownを確認。無効セキュリティ拡張は適用省略。

---

## 停止境界の具体化：質問票作成
**Timestamp**: 2026-11-12T12:10:31Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/code/local-validation-summary.md

## Active selection of the file:
# B案ローカル検証結果

2026-11-12。計画レビュー質問1Aを確認し、[承認済み計画](../../plans/patient-support-app-local-validation-code-generation-plan.md)に沿って隔離したローカル試作を実装・検証した。合成データのみ使用し、実クラウド・実AI・実メールへ接続していない。

## 実装と実行結果

実装先はワークスペース直下experiments/patient-support-safety/。計画に記載した11個のsrcファイル、固定試験、生成器、PBT、専用設定・lockfile・READMEを作成。CIは.github/workflows/patient-support-safety-model.ymlへ追加した。リモートへpushせず、CIの実行は未確認。

環境：Node.js 24.12.0、npm 11.6.2。固定依存はTypeScript 6.0.2、Vitest 5.1.0、fast-check 4.10.2、Vite 8.3.8、@types/node 24.13.3。VitestのNode/Vite要件とfast-checkの導入方法を公式情報で確認した。[Vitest公式](https://vitest.dev/guide/)、[fast-check公式](https://fast-check.dev/docs/introduction/getting-started/)。

専用ディレクトリでnpm.cmd run typecheckとnpm.cmd testを実行。型検査成功、2ファイル・26テスト成功。内訳は固定シナリオ・対照20件、PBT6件。各PBTは500ケース、計3000ケース、seed 20261112。失敗時はfast-checkの縮小、seed/path表示を利用でき、READMEに特定テストだけの再現方法を記載した。

初回導入でVite 8.2.2に高重要度の依存報告が出たため、試作側だけ8.3.8へ更新。更新時のnpm監査は脆弱性0件。既存アプリ側の依存や安全性を監査済みとする結果ではない。

## シナリオの評価

| シナリオ | 結果と限界 |
| --- | --- |
| L-01／旧V1 | 送信・返却の予約後停止、旧処理復帰で新規開始を拒否。最終アダプターの原子的判定を仮定 |
| L-02 | 開始済み同一試行は完了可、再接続・後続結果利用を拒否。承認された開始済み例外のモデル確認 |
| L-03 | 禁止適用後のcommitを拒否。ただし伝播前の直接commitは成功し、その間Acceptedを拒否。未解決の隙間を再現 |
| L-04 | 仮想時刻1999／2000／2001msで目標判定。制御不健全・旧実行者排除未確認ならPending。実レイテンシは未測定 |
| L-05／旧V6 | 片側受信記録喪失はunknownになり得る。両側保存後は残存記録から回収。再送の期限変更を拒否。受付保証変更の範囲内で判定 |
| L-06 | Prepare・片側Decisionを失敗確定とせず残存保持。両側確定済み記録はどちらの地域の単独喪失でも残存 |
| L-07 | 分断・片地域喪失で新規確定と新規作用を拒否。24時間超過を記録。時間経過で自動開放しない |
| L-08 | 未処理対象以外の開放に対象分離、新着照合、独立保護、旧実行者排除、別担当確認を要求。これらの証拠そのものはモデル外 |
| L-09 | 最新リンク・24時間未満・未消費・旧資格失効を確認。実Firebaseの認証経路は未検証 |
| L-10／旧V8 | HTTP応答タイムアウト後も遅延処理が再開する設定で、新規開始を拒否。タイムアウトを取消証拠として使用しない |

故意の欠陥対照では、停止前の許可を保存して使い回すと停止後の開始が起きることを確認した。この対照を検出したテストは成功であり、安全モデルの失敗を隠したものではない。

## PBTの範囲

保存形式往復、再送の期限維持とDecision非後退、単一地域喪失後の確定記録残存、世代単調、任意の操作・故障順序での新規開始拒否／禁止適用後commit拒否、消費済みリンク非復活を検証。対象IDに日本語・不明・回答しないを含む。空の順序列・ゼロ期限幅・境界値を含む生成器を使用する。

生成したモデルに対する有限ケースであり、全状態・全故障や本番の性質の証明ではない。外部I/Oを使うPBTは追加していない。保存形式往復はモデルが作った有効なJSONの往復であり、破損した復元データの防御を検証したものではない。

## 設計へ戻す結論

採用済みの保証境界をローカルで表現でき、列挙した条件は試験に通った。ただし本実装B案の採用判断は保留する。特に以下を解消する実構成・証拠が必要。

1. 許可と実ネットワーク送出の間に停止が入る場合の、実ゲートの保証境界。モデルの同期関数を実ソケットへ置き換えただけでは成立しない。
2. 制御台帳から業務DBへの停止伝播前に書き込める区間。受付確定前ならすべて許されると推定せず、どの作用をいつから拒否するかを実構成で説明する。
3. 旧実行者排除と対象分離・別担当確認の証拠。今回のboolean入力を製品上の操作・記録へ対応付ける。
4. 実Firestoreの競合、両地域の確定／応答喪失と耐久性、実認証の標準REST迂回、IAM、保持・削除を別途検証する。

次の実クラウド試験は、上記を対象に必要な部品・使用量・合否・費用を設計し、実施前にレビューする。本ローカル結果を同時20人、実時間2秒、実災害復旧、外部保持条件の達成証拠にはしない。

## 拡張適合

RESILIENCY-03：計画承認と実行・変更を記録。RESILIENCY-08・10〜13：実構成の未成立事項は継続。その他の実クラウド可用性・監視・配備・運用訓練は今回N/A（隔離したモデルのみ）。PBT-02・03・07・08・09：今回の純粋モデル・保存変換について実装・実行済み。CIジョブ作成済み、リモート実行は未確認。PBT-01・04〜06・10は助言として固定例・順序生成・対照に反映。無効セキュリティ拡張は適用省略、元の認証・同意・秘密保護は維持。

通常Markdownと表のみ。図なし。試作コード生成とローカル検証の結果であり、本実装全体のCode Generation／Build and Test段階の完了ではない。
## Open tabs:
- local-validation-summary.md: aidlc-docs/construction/patient-support-app/code/local-validation-summary.md
- patient-support-app-local-validation-review-questions.md: aidlc-docs/construction/plans/patient-support-app-local-validation-review-questions.md
- patient-support-app-local-validation-code-generation-plan.md: aidlc-docs/construction/plans/patient-support-app-local-validation-code-generation-plan.md
- patient-support-app-remaining-issues-questions.md: aidlc-docs/construction/plans/patient-support-app-remaining-issues-questions.md
- safety-control-comparison.md: aidlc-docs/construction/patient-support-app/nfr-design/safety-control-comparison.md

## My request:
じゃあそこ詰めるための質問ファイルを作成してください"
**AI Response**: patient-support-app-write-send-boundary-questions.mdを作成。業務DB内の禁止判定と書込みの同一トランザクション候補、実送信・返却の最終経路候補を説明し、技術側の担当を明示。利用者判断は4問に限定し、停止伝播前の書込みの扱い、一括／逐次返却、安全状態不明時の操作、実HTTP・別プロセス試作とクラウド試験の順序を推奨・代替・影響付きで質問。既存D-01〜06の再承認やライブラリー選定は求めない。4問・回答タグ・その他・UTF-8・相対参照を検証し状態を更新。各[Answer]:へ文字を記入して完了を知らせるよう案内。
**Context**: 方針選択用の質問票を作成。技術的成立を利用者判断で代替しない。回復力08・10〜13未成立継続。無効セキュリティ拡張は適用省略。アプリ変更・追加試験・クラウド作成・課金・外部送信なし。

---

## 停止境界回答の反映・実HTTP試作計画レビュー
**Timestamp**: 2026-11-12T12:19:10Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-write-send-boundary-questions.md

## Open tabs:
- patient-support-app-write-send-boundary-questions.md: aidlc-docs/construction/plans/patient-support-app-write-send-boundary-questions.md
- local-validation-summary.md: aidlc-docs/construction/patient-support-app/code/local-validation-summary.md
- patient-support-app-local-validation-review-questions.md: aidlc-docs/construction/plans/patient-support-app-local-validation-review-questions.md
- patient-support-app-local-validation-code-generation-plan.md: aidlc-docs/construction/plans/patient-support-app-local-validation-code-generation-plan.md
- patient-support-app-remaining-issues-questions.md: aidlc-docs/construction/plans/patient-support-app-remaining-issues-questions.md

## My request:
質問回答完了しました"
**AI Response**: 生回答1A・2A・3A・4Aを確認。既存D-01〜06と整合し未回答・不正・相互矛盾なし。機能設計・要件を検索しAI逐次表示の必須記述は見つからなかった。Firestore公式のcommit時直列化・再試行とNode.js公式HTTPのOS引渡し／相手受信の区別を確認。write-send-boundary-decisions.mdへW-01〜04と具体設計を記載し関連正本に優先参照を追加。追加試作の8生成手順、9シナリオ、loopback・IPC・別プロセス・終了解放・欠陥対照・観測限界を計画化。新規npm依存は原則不要。新たなコード生成計画は今回初めて提示したため、AGENTS.mdおよびconstruction/code-generation.mdの実行前承認に従いpatient-support-app-http-validation-review-questions.mdへ1問を作成。UTF-8・参照・8手順を検証し状態・チェックを更新。レビュー質問1の[Answer]:への回答を案内。
**Context**: 既存の4回答を再承認させない。新たな具体計画をレビューする段階。禁止更新前commitはW-01で許容するが実DB・ゲートの成立確認とは区別。RESILIENCY-08・10〜13は未成立継続、部分PBT追加実行N/A、無効セキュリティ拡張は省略。追加コード・クラウド作成・課金・実AI／メール送信なし。

---

## 実HTTP試作計画承認・生成と検証
**Timestamp**: 2026-11-12T12:34:37Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-http-validation-review-questions.md

## Open tabs:
- patient-support-app-http-validation-review-questions.md: aidlc-docs/construction/plans/patient-support-app-http-validation-review-questions.md
- patient-support-app-write-send-boundary-questions.md: aidlc-docs/construction/plans/patient-support-app-write-send-boundary-questions.md
- local-validation-summary.md: aidlc-docs/construction/patient-support-app/code/local-validation-summary.md
- patient-support-app-local-validation-review-questions.md: aidlc-docs/construction/plans/patient-support-app-local-validation-review-questions.md
- patient-support-app-local-validation-code-generation-plan.md: aidlc-docs/construction/plans/patient-support-app-local-validation-code-generation-plan.md

## My request:
回答完了しました。次に進んでください"
**AI Response**: 生回答Aを確認し8手順を実行。既存専用パッケージへTypeScriptのprotocol.ts・harness.ts、Node直接起動のgateway.mjs・receiver.mjs、http-validation.test.tsを追加。loopback限定のHTTP、IPCチェックポイント、実子プロセス終了、対象世代、停止意図・停止適用、最終再確認、一括返却・最小状態応答、送受信の別イベントを実装。既存の欠陥を模す対照で停止後の実本文送信を再現。候補は設けた待機点で拒否。受信読取りpauseで送信側finishと受信処理完了の違いを確認。型検査、mjs構文、既存26件＋実HTTP12件＝38件成功。PBT各500ケース・seed20261112を保持。全12試験で両子プロセスexitを確認。JSON・順序ログをローカルartifactへ保存。README・インストール手順・CI表示・結果報告・設計参照を更新。文書追加patchのBOMによる一致失敗は未変更を確認して分割修正。計画8チェック、リンク、UTF-8、ルート依存SHA256不変を確認。
**Context**: 承認された隔離試作の生成・検証完了。開始点の定義を暗黙に変えず、任意命令位置のOS停止・複数インスタンス・実ゲート排除・Firestore・IAM・実認証・実復旧は未実証。実構成の回復力08・10〜13未成立を維持。部分PBTは純粋モデルで成功。無効セキュリティ拡張は省略。追加依存・クラウド作成・課金・外部AI／メール・リモートpush／CI実行なし。本実装全体の段階完了ではない。

---

## 実ゲート・旧実行者排除の質問票作成
**Timestamp**: 2026-11-12T12:39:05Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/code/http-validation-summary.md

## Active selection of the file:
# B案：実HTTP・別プロセス検証結果

2026-11-12。[レビュー回答A](../../plans/patient-support-app-http-validation-review-questions.md)に基づき、[8手順の計画](../../plans/patient-support-app-http-validation-code-generation-plan.md)を実行。合成データ、PC内127.0.0.1、Node.js子プロセスのみ使用し、クラウド・実AI・実メールには接続していない。

## 実装と結果

既存experiments/patient-support-safety/にTypeScriptのprotocol.ts・harness.ts、直接起動用gateway.mjs・receiver.mjs、tests/http-validation.test.tsを追加。test:httpを用意し、既存testで全試験を実行する。新規依存は導入せず専用lockfile・ルート依存を維持。CIの既存レポート・artifact設定は追加試験と順序ログも対象とする。リモートCIは未実行。

Node.js24.12.0／npm11.6.2のWindows環境でmjsのnode --check、TypeScript型検査、全試験とJSONレポート出力を実行。3ファイル・38テスト成功。既存26件（固定20・PBT6、各500ケース、seed20261112）と追加実HTTP12件。H-01〜09に待機点別ケース・欠陥対照・受信待機を含む。

mjsは構文と実行で確認し、TypeScript型検査対象にはしていない。親側でIPCイベント・replyの構造を確認するが、全mjsの静的型検証をした結果ではない。各試験のfinallyで接続・listenerの破棄と子プロセス終了を行い、12件すべてで両子プロセスのexitを確認。ルートpackage.json・package-lock.jsonのSHA256は前回記録から不変。

## シナリオ別結果

| ID | 結果・観測 | 判定の限界 |
| --- | --- | --- |
| H-01 | 予約後待機、停止後再開で拒否。受信本文なし | 予約だけで開始済みとしない |
| H-02 | 最終確認前に停止して再開すると拒否 | IPC待機点の順序で確認 |
| H-03 | 確認後・実write前の待機から復帰時に再確認して拒否。欠陥対照は停止後にwriteし実受信 | 候補は当該待機点で合格、許可の使い回し方式は不合格と再現 |
| H-04 | 最初の本文受信後に停止。同じ試行の残りは完了、新規試行・結果利用の許可は拒否 | D-01の開始済み例外。実DB保存は検証対象外 |
| H-05 | 受信完了後に応答を落とすと送信側unknown。自動再送なし | 成否不明を未送信へ読み替えない |
| H-05追加 | 受信読取りpause中に送信側finish。その後read解除して受信完了 | finishは受信側本文処理完了の証拠ではない |
| H-06 | 停止適用を遅延させるとPending。旧処理は停止意図を見て拒否、その後停止適用 | IPCの待機／復帰であり、OSの任意命令位置での凍結ではない |
| H-07 | 最初の本文受信後に送信子プロセスを実終了。受信済み情報は残り、本文全体完了は未観測 | 終了を情報回収の証拠にしない |
| H-08 | 結果作成前／返却直前の2待機点で停止するとAI結果を返さず423 | 一括返却候補。返却開始後の残りの回収保証なし |
| H-09 | 停止対象の通常要求を拒否、最小状態応答のみ許可。架空ID不一致を拒否。健全な別対象は合成結果を返却 | 認証はテスト用ID一致だけ。実Firebase・患者画面は未実装 |

## 証拠と再現

[README](../../../../experiments/patient-support-safety/README.md)に従い、専用ディレクトリでnpm.cmd run test:httpを実行。型検査はnpm.cmd run typecheck、全試験はnpm.cmd test。

artifacts/http-traces.jsonに子プロセス別の連番・イベント・試行ID・対象、親が観測したIPC送受信順序、両子プロセス終了確認を保存。artifacts/tests.jsonは38テストの結果。artifactsはgitignore対象だがローカルに保持し、CIではartifact保存する設定。失敗時も可能な範囲のtraceを保存する。

H-03候補の送信側順序はreserved、checked、checkpoint:before-write、stop-applied、denied。欠陥対照は停止適用後にwrite-call、end-call、write-callback、finishが続き、受信側にfirst-body、body-completeが残る。

受信側と送信側の連番を直接比較しない。親が停止応答を受けてからcheckpoint解除を送った因果関係と照合する。受信待機の試験でも、親がfinishを観測し、受信snapshotにfirst-bodyがないと確認してからrelease-readを送る。壁時計や任意sleepで順序を推測していない。

## 設計へ戻す結論

直前再確認の候補は、制御した待機点で停止後の新規本文送出を拒否できた。予約時だけ確認する方式は実HTTPでも破れるため採用しない。

ただし、最終確認とHTTPのwriteを同じJavaScript処理区間に置いたことは、別インスタンス・OS停止・世代交代を含む実ネットワークの原子性を証明しない。候補を本実装へ採用したとは扱わない。開始点の定義も、今回のwriteイベントへ暗黙に変更しない。

write、コールバック、finish、受信側の最初のchunkと完了は別に記録する必要がある。プロセス終了は既に渡った情報を回収せず、応答喪失は未送信を意味しない。証拠不足の試行はunknownのまま保持する。

次は実ゲートの配置、業務処理からの直接通信禁止、旧資格・旧実行者の拒否、ゲート自身が停止した場合の保留／再開条件を具体化する。開始点の保証範囲と実現可能な証拠を明示してレビューする。そのうえで実Firestoreの禁止更新とcommitの競合・再試行、二地域確定、実認証REST迂回・IAM・配備切替の最小試験計画と費用を算定する。実サービスの作成・課金・実行をこの結果から許可したとはしない。

W-01〜03の書込み確定順序・一括返却・不明時機能制限は維持。実DB・IAM・クラウド障害・本番負荷・保持削除・実復旧は未検証。

## 拡張評価

RESILIENCY-03：回答Aと実行・証拠を記録。08・10〜13：実構成の独立性・最終作用・旧実行者排除・復旧の未成立を継続。04〜07・09・14〜15のクラウド配備・監視・実性能・運用実行はN/A。部分PBT-02・03・07・08・09は前回モデルを保持し全体実行で成功。実HTTPには固定例・欠陥対照を用い、新たなPBT必須範囲へ拡大していない。無効セキュリティ拡張は省略。

通常Markdownと表のみ。隔離した追加試作の生成・検証は完了。本実装構成採用、非機能設計・インフラ設計全体、実クラウドBuild and Testの完了ではない。
## Open tabs:
- http-validation-summary.md: aidlc-docs/construction/patient-support-app/code/http-validation-summary.md
- patient-support-app-http-validation-review-questions.md: aidlc-docs/construction/plans/patient-support-app-http-validation-review-questions.md
- patient-support-app-write-send-boundary-questions.md: aidlc-docs/construction/plans/patient-support-app-write-send-boundary-questions.md
- local-validation-summary.md: aidlc-docs/construction/patient-support-app/code/local-validation-summary.md
- patient-support-app-local-validation-review-questions.md: aidlc-docs/construction/plans/patient-support-app-local-validation-review-questions.md

## My request:
じゃあ次の課題に対して不明点を質問ファイルにまとめてください"
**AI Response**: patient-support-app-production-gate-questions.mdに4問を作成。開始済みの観測境界、最終経路の配備・権限分離、ゲート更新時の短い全体停止、既存環境の有無を確認。技術側で権限・通信経路・旧資格の排除・証拠・製品仕様を調査する役割を明示し、既存のD/W決定や証拠なし再開禁止を再質問しない。Canaryの暗黙変更を避け、必要な差分は後続レビューと記載。4問・回答タグ・その他・UTF-8・参照を検証し状態を更新。各[Answer]:へ文字を記入し、完了を知らせるよう案内。
**Context**: 設計方針の確認のみ。RESILIENCY-08・10〜13未成立継続、配備04は照合待ち。部分PBT追加実行N/A。無効セキュリティ拡張は省略。追加実装・試験・契約・課金・実送信なし。

---

## 実ゲート回答反映・公式仕様による具体化
**Timestamp**: 2026-11-12T12:49:41Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-production-gate-questions.md

## Open tabs:
- patient-support-app-production-gate-questions.md: aidlc-docs/construction/plans/patient-support-app-production-gate-questions.md
- http-validation-summary.md: aidlc-docs/construction/patient-support-app/code/http-validation-summary.md
- patient-support-app-http-validation-review-questions.md: aidlc-docs/construction/plans/patient-support-app-http-validation-review-questions.md
- patient-support-app-write-send-boundary-questions.md: aidlc-docs/construction/plans/patient-support-app-write-send-boundary-questions.md
- local-validation-summary.md: aidlc-docs/construction/patient-support-app/code/local-validation-summary.md

## My request:
回答完了しました。次に進んでください"
**AI Response**: 生回答1A・2A・3A・4Aを確認し相互矛盾なし。G-01〜04として引渡し開始境界、独立配備、停止更新、仮環境での設計を反映。Google公式仕様を確認し、max1・IAM変更・firewall変更・timeoutは旧実行者排除の単独証拠にできないと整理。production-gate-design.mdへ主体・配置・資格・通信先・迂回経路・停止と再開の状態・必要証拠・Canary差分を記載。gate-cloud-validation-plan.mdへ東京S1／大阪追加S2の資源、11行×初期2試行、観測・合否・保留と全費目数量表を作成。試験総額はSKUと実構成未確定のため未算定、予算承認は求めない。参照・UTF-8・表とチェックを更新。PG-01/02は残り、独立ゲート追加だけでは最終作用を保証できないと説明。
**Context**: 具体文書設計のみ、コード生成・クラウド資源作成・課金・実送信なし。RESILIENCY-04のCanary整合と08・10〜13の実構成未成立を継続。部分PBT追加実行N/A、無効セキュリティ拡張は省略。段階完了や本実装採用ではない。

---

## 実ゲート設計・最小クラウド検証仕様の承認
**Timestamp**: 2026-11-12T13:02:18Z
**User Input**: "# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-gate-cloud-validation-plan.md

## Active selection of the file:
# 実ゲート：最小クラウド検証仕様と費用積算

2026-11-12。[実ゲート設計](../patient-support-app/nfr-design/production-gate-design.md)に基づく試験仕様。未承認の実環境を作成したり有料実行したりしない。PG-01/02の成立証拠がないまま、ここで挙げるサービスを並べれば採用可能とは扱わない。本実装用コード生成計画ではない。

## 段階と資源

段階S1は東京のみの合成環境で、通信・権限・業務トランザクションを確認。entry-return、business、writer、safety-coordinator、final-send、模擬受信先の6サービス、業務DBと安全台帳DB、Secret Managerの合成秘密、VPC・東京subnet、必要な入口LB・内部到達経路を候補とする。実AI・メール・患者データは使用しない。患者本文や秘密をログに記録しない。

段階S2は大阪へ最終経路と安全台帳を追加し、既存東京資源と分離した資格・台帳で二地域確定と旧経路を確認。大阪のDB・サービス・subnet・必要なNAT等を追加する。東京だけのS1結果を二地域無損失の証拠にしない。第三地域の保護先は追加しない。

既存β環境と共用せず、仮の環境名gate-check-T/Oを使用する。実プロジェクト・所有者・課金先・クォータ・地域SKU・データ保存条件は実施前に確定する。ネットワーク制限の実現にプロキシ等が必要なら、部品と費用を追加して再積算する。

## 試験行列

各行をまず正常1回・拒否または故障1回の計2試行で調査する枠を置く（11行×2＝22試行）。これは統計的な保証や性能受入件数ではなく、部品調査用の初期枠。非決定的な競合は注入条件と再現性を評価し、追加が必要なら回数と費用を更新してから実施する。

| ID | 検証対象 | 合格／不合格／保留の基準 |
| --- | --- | --- |
| C-01 | business資格で外部本文送信、任意宛先、許可先を使う中継 | 直接通信・任意宛先を拒否。共有Google API経由等の抜け道は別列挙。単なるAPI key不所持だけを合格にしない |
| C-02 | 無権限・別SA・旧URL・タグURL・入口LB迂回 | 禁止主体から最終サービス・本文返却へ到達不可。許可主体は対象認可も通す |
| C-03 | writer以外の直接Firestore、禁止文書の不正解除 | IAMと業務認可で拒否。サーバーSDKをSecurity Rulesだけで守ったとしない |
| C-04 | 禁止文書更新と通常commitの競合／再試行 | W-01に従い禁止更新前commitは許容、後は拒否。操作ID・元期限・保存副作用を重複させない |
| C-05 | 送信直前待機、停止、旧処理復帰 | G-01の観測証拠と順序を収集。writeログのみで不十分なら保留。停止後新規作用が起きたら不合格 |
| C-06 | 旧revision・追加instance・所有者交代 | 旧経路から新規作用できない実証が必要。max1や世代記録のみなら保留。単なる拒否要求で達成としない |
| C-07 | IAM・network変更前に確立した接続と旧資格 | 新規接続と既存接続を別に測る。変更API成功だけでは遮断成功にしない |
| C-08 | ゲート応答喪失・timeout・停止確認欠測 | Pending／unknownを保持し再送・再開を禁止。古い処理が継続し得る条件を観測 |
| C-09 | 一括返却とPDF／旧配信URL | 停止後の新規本文返却を拒否し、旧URLや直接Storageを迂回口にしない。PDF本実装がない場合は未検証を明示 |
| C-10 | 二地域Prepare／Decision途中で片側を遮断 | 確定済み変更残存、未確定意図保持、単独昇格禁止。アクセス遮断を地域永久喪失そのものの証明としない |
| C-11 | ゲート更新の入口停止、旧経路静止、新版、別担当再開 | 旧新混在の安全性とCanary差分を確認。配備の比率変更だけを合格にしない |

実認証の標準REST迂回は既存未解決I-05であり、本試験のSA間呼出しとは別。Firebaseの認証構成を試す追加行・資源・回数が確定するまで、C-02成功で解消済みにしない。保持削除・実復旧・本番負荷も別の受入試験として残す。

## 証拠と終了条件

使用したダイジェスト・設定版・SA・入口と宛先・操作／試行ID・台帳確定点・API応答・受信側記録・未知状態・旧revision/instanceを記録する。ログの時刻だけで因果順序を推測せず、制御応答と受信証拠を照合する。単一ログで本文のネットワーク引渡し開始を証明できなければPG-01保留。

PG-01/02で不合格または証拠不足なら、安全性の採用判断を保留し、原因・残る保証・代替方式を提示する。IAMやfirewall変更を重ねて合格扱いにしない。試験停止後に資格・listener・残存データ・LB・IP・NAT・DBを棚卸しし、削除・保持すべき証拠と残存費用を確認する。

## 費用を出すための数量表

現行費用の正本は[通常月概算](../patient-support-app/infrastructure-design/cost-estimate-100-consultations.md)。以下は追加試験月の数量設計であり、通常月小計へ黙って加算しない。

| 費目 | 積算する数量・式 | 実行前の未確定値 |
| --- | --- | --- |
| Run実行 | サービス別vCPU秒×地域単価＋GiB秒×地域単価＋要求数×単価 | CPU・メモリー・課金方式・min設定・実行時間・監視要求 |
| Firestore | T/Oのread・write・delete・保存GiB日 | 各操作の複製倍率・retry回数・保管日・クォータ |
| 入口LB・内部経路 | 規則／proxy等の時間＋処理GiB | 入口方式と内部到達方式、使わない部品は0の根拠を記録 |
| 外向き接続 | 必要なNAT・IP・proxyの存続時間＋処理GiB | 宛先制限方式・経路・地域数・最低課金の扱い |
| 地域間転送 | T/O間の送受信GiB×経路単価 | 台帳・照合・制御通信の量 |
| Secret・イメージ | version数・アクセス回数・イメージGiB日 | 残存versionと削除予定 |
| 観測・証拠 | Logging取込GiB・保存日・Monitoring実行数 | 本文なしログ量・既存無料枠消費・artifact保存 |
| 残存資源 | 試験終了後のDB・backup・IP等の期間 | 終了日・削除条件・保管例外 |

日程案はS1を必要時起動の1作業日、S2を別の1作業日とし、各日の調査枠は8時間を積算の起点にする。ただしLB/IP等が夜間も存在すれば実存続時間で課金を見積もり、8時間だけに切り詰めない。22試行だけをRun要求数の全量とせず、監視・再試行・起動も含める。定額の予備費や旧100 USD枠は復活させない。

単価は採用する地域・SKU・為替条件と実際の資源数量を確定してから正本へ反映する。現時点で試験総額・許容予算を確定したとはしない。Cloud Runの実行以外にネットワークや接続部品を積算する。[公式Run料金](https://cloud.google.com/run/pricing)。

## 実施までのチェック

- [x] 回答4Aに従い仮識別名で、段階・資源・試験行列・数量枠を作成。
- [x] 既存費用正本との境界、残存費用、PG-01/02の保留条件を明記。
- [ ] PG-01/02の証拠取得手段とCanary差分を具体化。
- [ ] 環境条件・SKU・使用量を確定し、総額と具体的な実装／実施計画を提示。
- [ ] 実施する範囲・課金等の判断を受け、準備後に試験する。

RESILIENCY-03は証拠と変更記録へ反映。04・08・10〜13は未解決を継続し、試験仕様の作成だけで適合済みにしない。部分PBTの追加実行はN/A。無効セキュリティ拡張は省略。通常Markdownと表のみ、図・埋め込みコードなし。実行前承認を今求める文書ではない。
## Open tabs:
- patient-support-app-gate-cloud-validation-plan.md: aidlc-docs/construction/plans/patient-support-app-gate-cloud-validation-plan.md
- production-gate-design.md: aidlc-docs/construction/patient-support-app/nfr-design/production-gate-design.md
- patient-support-app-production-gate-questions.md: aidlc-docs/construction/plans/patient-support-app-production-gate-questions.md
- http-validation-summary.md: aidlc-docs/construction/patient-support-app/code/http-validation-summary.md
- patient-support-app-http-validation-review-questions.md: aidlc-docs/construction/plans/patient-support-app-http-validation-review-questions.md

## My request:
/C:/Users/khr85/Documents/ai-dlc-v1-test/aidlc-docs/construction/patient-support-app/nfr-design/production-gate-design.mdおよび/C:/Users/khr85/Documents/ai-dlc-v1-test/aidlc-docs/construction/plans/patient-support-app-gate-cloud-validation-plan.mdを承認します。次に進んでください"
**AI Response**: 2文書の設計・試験仕様の承認を受領し、未完了の証拠取得手段、Canary差分、実装準備計画へ進む。承認文書自身が有料実行・実環境作成を含まないため、今回の承認をクラウド課金・作成・実行許可やPG成立と解釈しない。
**Context**: 非機能設計補完。実構成未成立・地域SKUと総額未確定を継続し、承認済み仕様に基づく次の具体化を実施。

---

## 承認後の実行：証拠・切替仕様とコード生成計画の提示
**Timestamp**: 2026-11-12T13:06:22Z
**User Input**: （同一ターンの承認原文は直前の監査記録に完全収録）
**AI Response**: 承認済み仕様に従いgate-evidence-and-cutover.mdを作成。証拠イベント、原因ID、自己申告一覧の限界、停止・旧実行者の照合、実writeだけではG-01を満たさない保留条件を具体化。Cloud Run traffic移行は処理中要求の静止を意味しないことを公式で照合。既存Canary6API×100件×3段階＝1800件、AI/PDF60試行、最低45分と既存実AI条件を調査22試行から分け、合成試験だけでは実利用切替を達成しないと明記。実装・配備テンプレートを生成しローカルで検査する8手順を具体化し、gate-preparation-code-generation-plan.mdとレビュー1問を提示。承認済み2文書へ承認記録と参照を追加し、証拠取得手段とCanary差分の具体化チェックを更新。UTF-8・参照・8手順・回答欄を検証。gcloud／Terraform／DockerはPATH上で見つからず今回導入しない。承認済み2文書の再承認は求めず、今回初提示の具体コード生成計画はAGENTS.mdとconstruction/code-generation.mdの生成前承認指定により実行前レビューとした。
**Context**: PG-01/02の成立とCanary整合採用は未解消。RESILIENCY-04・08・10〜13未適合継続、部分PBT追加実行N/A、無効セキュリティ拡張は省略。総額・地域SKU・実環境は未確定。コード生成・クラウド作成・課金・実送信なし。

---
## 進捗照会：ワークフロー表示
**Timestamp**: 2026-11-12T13:09:14Z
**User Input**: "現在の進み具合について、ワークフローで示してください。"
**AI Response**: 状態記録の最新追記、実ゲート検証仕様、検証資材コード生成計画と未回答レビューを照合。Inception完了、Constructionの非機能設計補完・インフラ具体化中、検証資材の生成計画レビュー待ちとしてワークフローを提示。本実装と総合Build and Testは未完了、既存38試験成功は試作範囲。設計仕様承認とPG成立・課金許可を区別。今回は照会のみで段階移行・コード変更なし。
**Context**: 回復力04・08・10〜13の未適合を維持。部分PBT追加実行N/A（進捗照会）、無効セキュリティ拡張を省略。通常Markdownの監査追記は構文と特殊文字を確認済み。

---
## 検証資材生成計画の承認受領
**Timestamp**: 2026-11-12T13:17:45Z
**User Input**:
```text
# Context from my IDE setup:

## Active file: aidlc-docs/construction/plans/patient-support-app-gate-preparation-review-questions.md

## Open tabs:
- patient-support-app-gate-preparation-review-questions.md: aidlc-docs/construction/plans/patient-support-app-gate-preparation-review-questions.md
- gate-evidence-and-cutover.md: aidlc-docs/construction/patient-support-app/nfr-design/gate-evidence-and-cutover.md
- patient-support-app-gate-cloud-validation-plan.md: aidlc-docs/construction/plans/patient-support-app-gate-cloud-validation-plan.md
- production-gate-design.md: aidlc-docs/construction/patient-support-app/nfr-design/production-gate-design.md
- patient-support-app-production-gate-questions.md: aidlc-docs/construction/plans/patient-support-app-production-gate-questions.md

## My request:
/C:/Users/khr85/Documents/ai-dlc-v1-test/aidlc-docs/construction/plans/patient-support-app-gate-preparation-review-questions.mdの回答を完了しました。次に進んでください
```
**回答ファイル原文**:
# 実ゲート検証資材：コード生成計画レビュー

2026-11-12。production-gate-design.mdと最小クラウド検証仕様の承認は受領済み。今回は、その後に作成した[8手順の具体コード生成計画](patient-support-app-gate-preparation-code-generation-plan.md)の生成・ローカル検査の範囲を確認する。

## 質問1：検証用コードと配備テンプレートの作成

独立した試作用パッケージに6サービス、Firestoreアダプター、証拠収集、C-01〜11の試験ドライバー、Terraform／Dockerテンプレート、費用見積りCLIを作成する。専用のSDK依存を導入し、ローカルの模擬DB・実HTTP・固定試験・部分PBTで検査する。既存38試験とアプリは保持する。gcloud・Terraform・Dockerの導入や実行、クラウド作成・課金・push・実AI／メール送信は含めない。最終フェンスの未成立と単価不明は保留として残す。

A) 計画の8手順を承認し、検証資材の生成とローカル検査へ進む。

B) 計画の変更を依頼する。変更したい範囲を回答欄に補足する。

C) その他（希望する進め方を補足）。

[Answer]:A　8手順の検証資材の生成とローカル検査を承認します。最終ゲートの切替試験は、旧版が新規送信・返却できないことを確認してから、新版だけを開く方針で進めてください。旧版を遮断できた証拠が不足する場合は、判定を保留してください。

**AI Response**: 回答Aと追加条件を受領。矛盾なし。8手順を実行し旧版遮断証拠不足をPendingに保持する。既存段階を再開しwelcome再掲なし。共通規則・コード生成規則・拡張opt-inと有効回復力／部分PBTを確認。無効セキュリティ拡張は適用省略。npm.ps1実行制約はnpm.cmdで対応。クラウド作成・課金・実AI／メール送信は行わない。
**Context**: Construction / 検証資材の隔離試作。段階全体完了ではない。

---
## 検証資材生成・ローカル検査の結果
**Timestamp**: 2026-11-12T13:31:47Z
**User Input**: 同一ターン冒頭の依頼原文と回答ファイル全文を上記に記録済み。新しいユーザー入力なし。
**AI Response**: 8手順を実行。experiments/patient-support-gate-cloudへ独立依存・lockfile、6サービス、Firestore／memoryアダプター、writer禁止競合、T/O Prepare/Decision、本文なし証拠、固定宛先・ID token、cloud本文閉鎖、未知結果の再送禁止、Terraform候補・Dockerfile・不足設定例、C-01〜11ローカル22行、費用CLIと8費目fixtureを生成。資料はaidlc-docs内へ配置。専用CIを作成し、部分PBTのseed20261112とshrinkingを維持。SDK公式情報とnpm metadataを照合しFirestore9.4.1／auth11.3.4／Vitest5.1.0／fast-check4.10.2へ固定。初回npm照会はsandbox通信とnpm-cacheアクセス制約で失敗し、承認済み依存導入に必要な範囲のescalationで照会・インストール成功。自動承認レビューの拒否なし。最初の型検査でNode strip-types非対応のparameter propertyとSDKに存在しないtimeoutSecondsを検出し、erasable constructorと結果不明の待ち上限に修正。ルートでのnpm typecheck誤呼出しはscript不存在で無変更、専用パッケージで正しく実行。
新規43件・既存38件と両型検査は成功。新規部分PBT4件×300例、既存6件×300例。ルート・既存試作のpackage/lock計4件のSHA256は開始時と一致。調査22行は範囲内合格8、保留13、期待したC-05反例FAIL1、43イベントをJSON保存。送信と本文返却の確認後停止の反例を固定検査で保持。費用CLIはINCOMPLETE／total:null。--cloud拒否を実行し終了コード1を確認。Terraform／Docker／gcloud未導入・未実行、クラウド作成・課金・実AI／メール送信なし。新規43件の検査成功を実構成の安全性合格へ読み替えない。
**途中のユーザー向け報告**: 回答内容と現在の進行状態を確認し、承認済みの範囲で次の工程に進めます。／8手順の承認と、「旧版の新規送信・返却を遮断できた証拠がそろうまで新版を開かない」という追加条件を確認しました。独立パッケージで検証資材を作成し、ローカル検査を進めます。遮断の証拠不足は保留として残し、クラウド作成・課金・実AI／メール送信には進みません。／独立依存、証拠レコード、書込みと禁止更新を同じトランザクションで確認する処理、二地域台帳の途中失敗を保留にする処理を作成しました。続いて6サービスと試験を実装します。切替判定では旧版の送信と返却を別々に確認し、既存接続や未確定試行も条件に含めます。／新規41試験が通りました。C-05では、最終確認の直後に停止して旧処理を復帰させると、本文が受信先へ届く反例を再現しています。この結果から最終フェンスは未成立のままです。切替は保留とし、送信結果が不明な操作を自動再送しないことも確認しました。／最終検査では、新規43試験と既存38試験が通り、ルート・既存試作の依存ファイルも不変でした。22件のローカル調査は、試験範囲内合格8件・保留13件・既知反例1件です。費用CLIは単価不足をINCOMPLETEとして返します。結果と残課題を資料へまとめ、進捗・監査記録を更新します。
**Context**: 結果正本gate-preparation-summary.md。計画Step1〜8と受領／生成チェック、aidlc-state.mdを更新。旧送信・返却遮断証拠不足なら新版を閉じる条件をgate-evidence-and-cutover.mdへ追記。RESILIENCY-03適合、04・08・10〜13の本構成blocking findingは継続、他規則の今回範囲外理由と部分PBT-02・03・07・08・09適合を結果表に記録。無効セキュリティ拡張は規則本体未ロード・適用省略。段階完了・Continue to Next Stage・クラウド実行許可は提示しない。
**最終報告**: 承認済み8手順の検証資材作成とローカル検査を完了しました。新規43試験・既存38試験はすべて成功しました。ただし停止後に旧処理が送信・返却する反例を再現したため、切替は保留です。旧版遮断の証拠がそろうまで新版を開きません。クラウド実行・課金・実AI／メール送信は行っていません。結果資料を案内します。

---
## 残課題の解消案・確認質問の依頼
**Timestamp**: 2026-11-12T13:50:26Z
**User Input**:
```text
# Context from my IDE setup:

## Active file: aidlc-docs/construction/patient-support-app/code/gate-preparation-summary.md

## Open tabs:
- gate-preparation-summary.md: aidlc-docs/construction/patient-support-app/code/gate-preparation-summary.md
- patient-support-app-gate-preparation-review-questions.md: aidlc-docs/construction/plans/patient-support-app-gate-preparation-review-questions.md
- gate-evidence-and-cutover.md: aidlc-docs/construction/patient-support-app/nfr-design/gate-evidence-and-cutover.md
- patient-support-app-gate-cloud-validation-plan.md: aidlc-docs/construction/plans/patient-support-app-gate-cloud-validation-plan.md
- production-gate-design.md: aidlc-docs/construction/patient-support-app/nfr-design/production-gate-design.md

## My request:
残課題を解消するための案または未明瞭な点は質問をしてください
```
**AI Response**: 残課題と既存の決定を照合し、解消案を整理します。技術的に未成立の点と、方針の選択が必要な点を分け、確認事項は質問ファイルにまとめます。
**Context**: NFR設計補完。D/W/G判断・旧版遮断後に新版のみ開く条件は維持。コード変更・クラウド実行の依頼とは解釈しない。

---
## 残課題解消案と4問の提示
**Timestamp**: 2026-11-12T13:52:46Z
**AI Response**: 現行結果とD/W/G判断・旧版遮断条件を照合。PG-01/02は再確認追加では解消しないため、Cloud Run案の限界と専用VM等による最終主体の基盤停止を比較候補として整理した。公式Compute Engine停止／lifecycleとCloud Run timeout仕様を照合。VM停止完了だけで全経路・対象別停止・G-01順序を保証するとは主張せず、再起動／再作成制限、TLS終端・proxy・既存接続、管理制御面不通の保留、二地域保護の成立条件を残した。PG-03の資格・宛先・DB境界表、PG-04のゲート停止切替／通常アプリCanary分離、構成成立見込み後の費用比較を提案。構成変更範囲、Canary対象、計画停止上限、費用制約の4問を専用ファイルへ作成。回答だけで成立・採用・支出許可と扱わない。
**追加の途中報告**: 中心の課題は、旧プロセスが止まって復帰しても、最後の送信・返却を開始できない仕組みです。再確認を増やすだけでは解消しないため、実行基盤から旧主体を停止する方式も比較候補に加えます。成立を断定せず、構成変更の許容範囲とCanaryの扱いなど、4点を確認する形に整理しています。
**Context**: 共通ルールとNFR設計質問規則を使用。図・コードブロックなしの通常Markdown、4回答欄と各A/B/Cの意味・空行・その他選択肢・相対参照を確認。進捗checkboxを更新。RESILIENCY-03変更追跡、04・08・10〜13本構成未適合継続、その他今回範囲外理由を案に記載。部分PBT追加実行N/A、無効セキュリティ拡張省略。実装・導入・課金なし。AGENTS.mdとcommon/question-format-guide.mdの質問ファイル指定に従い回答依頼をファイルへ置く。
**最終回答**: 解消案と確認4問を作成しました。推奨は、最終送信・返却を基盤から停止できる構成も比較し、ゲートの停止切替と通常アプリのCanaryを分けて設計することです。方式の成立は未確定です。質問ファイルの各[Answer]:に回答してください。

---

## NFR Design：β版の一括公開への変更
**Timestamp**: 2026-11-13T13:52:13Z
**User Input**: "ではcanaryではなく、一括で公開することにします。該当ファイルを変更してください"
**AI Response**: 明示決定に従い文書修正を実施。公開前受入・計画停止を伴う一括切替・実環境確認・別担当開放・公開後監視を正本化。6 API各100件を一組、AI/PDF各10試行を一組へ再配置し、3段階の昇格条件を廃止。過去回答は保持して優先関係を表示。質問2を直接指示で解決、質問1・3・4は未回答。旧コードとartifactのCanary件数・判定は現行受入や費用に流用禁止として改修待ちへ追跡。
**Context**: 既存ConstructionのNFR補完を再開。共通規則・NFR／インフラ設計規則、opt-inと有効な回復力・部分PBTを参照。無効セキュリティ拡張の本体は読み込まず適用省略。Markdown参照・UTF-8・fenceと差分を確認しplan／state checkboxを更新。RESILIENCY-03適合、04は実証・資材改修待ち、08・10〜13の既存阻害事項継続。部分PBTはコード変更なしで実行N/A。実装・クラウド・課金・実AI送信なし。

---

## NFR Design Review：Canary取消しの全設計横断確認
**Timestamp**: 2026-11-13T13:57:40Z
**User Input**: "すべての設計ファイルを参照して、canary方式がすべて取り消されていることを確認してください"
**AI Response**: 設計・分析資料53ファイルを含むaudit.md以外の関連資料120ファイルを全文走査し、Canary、カナリア、旧配分・旧試験件数と一括公開の優先関係を照合。該当21ファイルはすべて一括公開正本自身、廃止注記付き文書、または最新優先状態記録であり、注記のないCanary指定は検出しなかった。現行設計として通常アプリ・ゲート双方のCanary廃止、5%→25%→100%と昇格の廃止、公開前600件＋AI/PDF20試行を確認。一方、nfr-design-patterns.md:19/57/314、infrastructure-design.md:5/149、safety-control-comparison.md:184、cost-estimate-100-consultations.md:35/110等の本文に維持表現が残存。冒頭注記により旧履歴扱いだが、本文の完全な整理済みとは判定しない。検証コードのcanaryReconciledと旧1800件／60試行、Terraform文言も残存し、beta-bulk-release.md:58で改修待ちとして明示されている。設計方針の取消しと文書本文・資材の整理完了を区別して報告する。
**Context**: 既存Constructionの確認依頼。新規開発・段階移行ではなく文書横断レビューのみ。設計とコードは変更せず監査記録のみ追記。共通規則・拡張opt-in・状態設定・NFR設計規則を参照。セキュリティ拡張は無効につき適用省略。RESILIENCY-03は変更決定と優先関係の追跡を確認。04は取消し自体は確認したが本文の旧適合表現と資材改修・実証は未完了。08・10〜13の既存阻害事項を維持。その他回復力規則は今回の配備方式取消し確認による新規評価N/A（構成・目標・運用を変更しない）。PBT-02/03/07/08/09はコード・変換・生成器の変更なしで追加実行N/A。Markdown追記には図・コードブロック・複雑構文なし。承認質問・段階完了提示なし。

- [x] 設計・関連資料の全ファイルを対象に取消し漏れを検索。
- [x] 該当文書すべての正本・廃止注記・旧履歴の扱いを照合。
- [x] 現行方式と残存記述・旧検証資材を分けて確認結果を記録。

---

## NFR Design：構築時の誤読を防ぐ旧Canary記述の取消し
**Timestamp**: 2026-11-13T14:03:36Z
**User Input**: "構築する際に誤解するような記述部分は取り消してください"
**AI Response**: 構築時に旧Canary条件を現行要件と誤読する本文を修正します。過去の回答・実行結果は履歴として明示し、一括公開の正本と整合させます。
**Context**: 文書の修正を明示承認された範囲として実施。既存共通規則・内容検証・NFR設計規則・有効拡張の設定を継承。新しい配備方式・構成は選択しない。作業計画を作成し各完了checkboxを同じ対話内で更新。

---

## NFR Design：旧条件取消しの進捗
**Timestamp**: 2026-11-13T14:03:36Z
**AI Response**: 設計本文・適合表・費用説明に残っていた「Canaryを維持する」という条件を、一括公開の条件へ修正しました。続けて、旧質問票の選択肢を取消済みと明示し、未改修の検証コードや費用CLIを公開判断に使わないよう、利用手順も整えています。
**Context**: NFR設計・技術選定・インフラ・費用・安全比較・切替仕様・質問票・生成計画・README・生成結果を整合。旧質問・回答の原文は履歴として保持し、該当選択肢を取消済みと明記。状態ファイルの旧進捗も構築要件への使用禁止と明記。

---

## NFR Design：旧条件取消しの検証結果
**Timestamp**: 2026-11-13T14:03:36Z
**AI Response**: 誤解を招く旧Canaryの維持・段階公開・昇格・整合待ちの記述を取り消し、一括公開の条件に統一しました。旧質問・回答は取消済みの履歴として明示し、旧検証コード・費用CLIは改修と再検証まで公開判断・費用算定に使用禁止と記載しました。文書参照と差分の検証は完了しています。コード改修は今回行っていません。
**Context**: 全文再検索、厳密UTF-8デコード成功、ローカルMarkdown参照321件の存在確認成功（URLエンコードを復号）、git diff --check成功。PowerShellの単一置換配列の展開で最初の個別置換処理が停止したため、該当処理を明示patchに変更し対象を再検証。既存変更は保持。RESILIENCY-03適合、04は一括公開の設計方針を維持し旧資材改修・停止時間・再開証拠待ちの全体適合保留、08・10〜13既存阻害事項継続。他の回復力規則は目標・構成・運用を変更せず今回N/A。PBT-02/03/07/08/09はコード・変換・生成器変更なしで追加実行N/A。無効セキュリティ拡張省略。進捗計画の全4項目を完了、状態記録を更新。段階完了・構築・実配備・課金・実送信なし。

---

## 承認待ち書類の確認・残課題回答受領
**Timestamp**: 2026-11-13T14:18:43Z
**User Input**: "現在、承認待ちの確認書類はありますか？実ゲートの残課題に関する質問には回答完了しました"
**AI Response**: 状態・質問票・計画・監査履歴を確認。質問1A・3A・4Aと質問2の一括公開決定を受領、矛盾なし。現在追加回答・個別承認が必要な新規確認書類はない。非機能設計・インフラ設計全体承認、方式成立・構成・予算・実行許可は未了。回答票と最新状態の古い未回答表記を訂正し、比較設計への反映は未完了として追跡。
**Context**: 状況確認と受領記録のみ。通常Markdownとして内容を検証、図・複雑構文なし。新規設計・コード・段階移行・課金・実送信なし。回復力既存阻害事項継続、新規適合評価とPBT実行はN/A。無効セキュリティ拡張は適用省略。IDE contextのActive fileはaidlc-docs/construction/plans/patient-support-app-gate-remediation-questions.md、Open tabsは同ファイルとaidlc-docs/construction/plans/patient-support-app-ai-context-plan.md。

---

## NFR設計補完：残課題と追加確認質問
**Timestamp**: 2026-11-13T14:34:50Z
**User Input**: "残課題は後何がありますか？残課題があれば、そちらの課題を解消するための確認質問ファイルを作成してください"
**AI Response**: 残課題と回答済みの方針を照合。遮断・迂回禁止・二地域復旧・一括切替・検証資材改修・費用・外部依存と運用の7分類を整理し、patient-support-app-gate-remaining-constraints-questions.mdを作成。停止影響範囲、運用担当等の具体化、外部サービス契約制約の3問。既存の翌営業日着手、別担当確認、VM比較許容、積算後の停止時間／費用判断を再確認しない。旧解消案の回答受領チェックとstateを更新。回答欄3件と全ローカル参照先の存在を検査成功。
**Context**: 共通内容検証・質問形式・NFR設計規則と拡張設定を参照。RESILIENCY-03適合、04・08・10〜13未適合継続。他規則は質問票内にN/A根拠記載。部分PBT必須5規則はコード変更なしで追加実行N/A。無効セキュリティ拡張は適用省略。図・コードブロックなしのMarkdownを検証。質問票チェックと最新状態を同一対話で更新。設計全体完了・実装・実試験・課金・外部送信は行わない。
**最終案内**: 主な残課題を一覧で説明し、追加確認3問のファイルで各[Answer]:への回答を依頼する。

---

## NFR設計補完：追加3回答の受領と比較条件反映
**Timestamp**: 2026-11-13T15:33:01Z
**User Input**: "追加確認質問に回答完了しました。"
**回答ファイル原文（受領時全文）**:
# 実ゲート残課題一覧と追加制約の確認

2026-11-13。既存の[方針確認](patient-support-app-gate-remediation-questions.md)は回答受領済み。本書は追加の制約確認であり、段階承認・構成採用・実装・有料実行の承認書ではありません。

## 決定済みの条件

専用VM等も比較対象に含める。通常アプリ・ゲートとも一括公開する。停止時間は所要時間の積算後、予算は成立見込みのある候補の費用・運用負担の提示後に判断する。旧版の新規送信・本文返却を遮断した証拠が不足すれば新版を開かない。東京・大阪限定、元の期限、独立保護が戻るまで再開しない条件を維持する。

## 残課題と解消に必要な作業

| 残課題                                         | 解消に必要な作業                                                                                                        | 主な担当・確認時期                       |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| PG-01/02：旧送信・返却の最終作用を遮断できない | Cloud Runと専用VM等の故障モデル、全旧主体・接続・proxyの排除、再起動禁止、最終I/Oとの因果順序を設計・検証する           | 技術側。質問1を比較条件に反映            |
| PG-03：通信とDB権限の迂回禁止が未実証          | 資格・宛先・操作・DB別の許可表、旧URL・直接配信・別資格の拒否試験を作成し、実IAM・ネットワークで確認する                | 技術側。模擬試験を実証に読み替えない     |
| 二地域保護・受信境界・災害復旧が未成立         | 記録前受信区間、台帳の永久喪失、独立保護再構成、期限・削除・同意を復活させない復元、再開照合を具体化・実証する          | 技術側。別担当の再開確認を維持           |
| PG-04：一括切替の停止時間・再開証拠が未確定    | 閉鎖から開放まで積算し、公開前600件＋AI/PDF20試行、切替時確認、公開後監視を分離して検証する                             | 技術側が積算後、利用者が停止時間を判断   |
| 旧方式の検証資材が残存                         | 検証コード・費用CLIの旧Canary条件を改修し、型検査・固定試験・部分PBTを再実行する。Terraform・Docker等の未検査も解消する | 具体的な変更計画のレビュー後に実施       |
| 構成総額と実試験範囲が未確定                   | 通常月・追加試験・停止延長・残存資源・VM運用を積算し、環境・地域SKU・許容額・実行対象・終了棚卸しを確定する             | 技術側が提示後、利用者が予算・実行を判断 |
| 外部依存と運用の具体条件が未確定               | AI・メール・認証の地域・保持・削除・契約条件、通知先・担当・営業日、認証回復等の実経路を確認する                        | 質問2・3で既存制約を確認し、候補を具体化 |

根拠：[解消案](../patient-support-app/nfr-design/gate-remediation-options.md)、[一括公開方式](../patient-support-app/nfr-design/beta-bulk-release.md)、[検証結果](../patient-support-app/code/gate-preparation-summary.md)、[非機能方式](../patient-support-app/nfr-design/nfr-design-patterns.md)。回答だけで上記課題が解消するわけではありません。

## 質問1：安全停止の影響範囲

対象者だけを確実に止められない場合、共有する最終ゲート全体の停止が必要になる候補があります。これは一括更新時の計画停止とは別の、平常運用中の障害・権利変更時の影響です。比較設計に許容できる範囲を教えてください。

A) 共有ゲートの安全性が不明なら全利用者の本文操作を止める候補も比較に含める。発生条件・影響・復旧手順・費用の提示後に構成を判断する。

B) 利用者ごとの隔離を構成の必須条件とする。対象を隔離できない場合は安全のため全体停止を維持するが、その構成は公開採用せず別案を検討する。

C) その他（対象グループ等の必要な隔離単位を補足）。

[Answer]: B

## 質問2：運用担当・通知先・営業日の具体化

既存方針の「自動遮断・チームへのメール・翌営業日に着手・別担当が再開確認」は維持します。VM候補を比較する際、OS更新・監視等を担える役割と、別担当の確保可能性を確認したいです。個人名・メールアドレス・秘密情報の記載は不要です。

A) 現時点で役割を示せる。復旧作業・別担当確認・VM保守を担う役割、通知先の種類、営業日・時間帯・タイムゾーンを補足する。兼任や確保できない役割も明記する。

B) 担当や営業日はまだ決められない。先に必要な役割・作業量・VM保守範囲の案を提示し、その後に割当てを判断する。担当未確定のまま公開可とは扱わない。

C) その他（利用可能な既存運用体制・委託条件を補足）。

[Answer]:A　担当は決定済み、営業日は設計に記載済み

## 質問3：外部AI・メール・認証の契約上の制約

処理地域・保持・削除等の既存条件は維持します。技術側が候補を具体化する前に、既契約・利用禁止先・調達条件等の追加制約はありますか。製品の安全性や契約適合を利用者の選択だけで判断する質問ではありません。

A) 現時点で追加の指定はない。技術側が既存条件への適合根拠・不足条件・費用を示して候補を提案し、その後に採否を判断する。

B) 既契約・指定サービス・利用禁止先・調達条件がある。公開可能なサービス名や制約を補足する。適合しない場合は代替案か保留とする。

C) その他（契約担当の確認待ち等を補足）。

[Answer]: A

## 回答後の処理と進捗

- [x] 回答済み方針と現行資料を照合し、未成立事項を一覧化。
- [x] 技術側の検証事項と利用者の追加制約を区別し、質問3問を作成。
- [x] 通常Markdown、選択肢の空行・その他・回答欄、参照先を検証。
- [ ] 追加回答を受領して矛盾を確認し、具体比較設計へ反映。
- [ ] 成立見込み・停止時間・費用・検証計画を提示し、必要な採用・実施判断へ進む。

非機能設計の分類確認：回復力・論理部品は質問1、運用具体化は質問2、認証等の外部制約は質問3。拡張性・性能は登録100人／同時20人・既存性能目標を変更しないため再質問なし。

拡張評価：RESILIENCY-03は変更追跡に適合。04・08・10〜13は上記未成立事項により未適合継続。01・02は目標不変、05〜07・09・14〜15は今回実配備・運用変更や試験を実施しないため新規評価N/A（運用担当の未確定は追跡）。部分PBT-02・03・07・08・09はコード変更なしで追加実行N/A。無効なセキュリティ拡張は適用省略。段階完了は宣言しません。

**AI Response**: 回答1B・2A・3Aを確認、未回答・相互矛盾なし。利用者別隔離を公開採用条件へ反映。共有ゲートを一括基盤停止するだけの案を採用候補から除外。担当決定済みを尊重し、営業日は非機能要件NF-12・詳細1の平日10:00〜17:00日本時間を確認。外部サービス追加指定なし。gate-additional-constraint-decisions.mdへ決定・比較表・残作業を記録、質問票・解消案・状態のcheckboxを更新。Markdown参照先の存在を検証成功。
**Context**: 既存NFR設計補完、段階移行なし。共通規則・質問形式・NFR設計規則・有効拡張の既読内容を適用。RESILIENCY-03適合、04・08・10〜13未適合継続。他規則の新規評価と部分PBT追加実行N/Aの根拠は決定書に記載。無効セキュリティ拡張は適用省略。図・複雑構文なし。実装・実クラウド・課金・外部送信なし。技術成立・具体構成・停止時間・費用は未完了として追跡。

---

## NFR設計補完：具体構成検討の開始
**Timestamp**: 2026-11-13T15:39:44Z
**User Input**: "確認完了しました。次に進んでください"
**AI Response**: 回答反映資料の確認完了を受領。利用者別隔離の必須条件を維持し、具体構成・遮断証拠・停止時間・費用の机上検討へ進む。既存D/W/G判断・追加制約と公式仕様を照合し、レビュー資料を作成する。構成採用・段階全体承認・実装・有料実行の承認には拡張しない。
**Context**: Construction / NFR設計補完を継続。共通4規則・NFR設計規則・拡張opt-inと有効な回復力／部分PBTを参照。無効セキュリティ拡張は適用省略。開始前に通常Markdownの内容を確認、図・埋め込みコードなし。

---

## NFR設計補完：利用者別ゲートの具体構成・成立性レビュー結果
**Timestamp**: 2026-11-13T15:45:04Z
**User Input**: 同一ターンの開始記録に原文「確認完了しました。次に進んでください」を記録済み。追加のユーザー入力なし。
**AI Response**: per-user-gate-feasibility-review.mdを作成。利用者別VM・同一VM内プロセス分離を含むP0〜P3、主体別資格・経路、F-01停止完了前の旧実行者復帰／F-02共有proxy返却／F-03旧世代再作成／F-04共有資格依存の机上反例、必要証拠と9行の検証行列、二地域確定・元期限・別担当再開を具体化。採用可能な構成は確定できず、一般的不可能証明とは区別。停止時間は実測値を偽らず工程と依存関係の積算式を提示。費用は30日720時間の100台72,000 VM時間・20台14,400 VM時間、両地域200台10 GiBなら2,000 GiB月の比較仮定と全費目式を整理。日本SKUは未取得で総額未算出、既存AI単価は今回再検証せず履歴として明示。旧比較小計を完成総額に読み替えない。
**途中の報告**: 利用者別VMでも停止要求から基盤停止完了までの動作とproxyの最終返却が残ること、数量化と価格確定を区別することを共有。
**Validation**: UTF-8厳密デコード7ファイル・ローカルMarkdown参照43件・新規レビュー全表の列数・埋込みコード不在・数量算術5件を確認成功。計画Step1〜5を同一ターンで完了更新。production-gate-design.md・nfr-design-patterns.md・logical-components.md・追加制約決定・費用正本・stateへ参照と結果を反映。初回の複数ファイルapply_patchはヘッダー照合不一致で不適用、再読込後に本文を保持する挿入へ切替え検証。公式VM一般目的価格ページはtimeoutが繰り返し、他地域の既定単価を流用せず未取得と記録。ネットワーク料金ページもtimeout、費目を除外しない。
**Context**: 共通4規則・NFR設計規則・拡張opt-inと有効拡張を参照。RESILIENCY-01〜03設計差分適合、04・08・10〜13未適合継続、09は候補の実容量・quota未検証を明示。他規則と部分PBT必須5規則は成果物内にN/A根拠を記録。無効セキュリティ拡張本体は未ロード・適用省略。コード・依存・実クラウド・有料試験・実AI／メール送信なし。blocking findingのためNFR設計全体完了や次段階承認は求めない。今回の業務方針追加質問なし。
**最終報告**: 具体構成・成立性レビュー資料を案内し、利用者別VMだけでは最終送信・返却遮断を保証できず構成採用は保留であること、停止時間・費用は算定条件まで整理したことを説明する。

---
