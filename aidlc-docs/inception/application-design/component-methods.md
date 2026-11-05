# コンポーネントのメソッド

> 2026-11-02：ユーザー指定ポリシーを優先し、[変更表・共通設計差分](../../construction/patient-support-app/functional-design/privacy-policy-design-changes.md)を適用します。相反する旧記述は履歴です。18歳以上・属性の必須回答（「不明」「回答しない」も有効）・目的別限定閲覧・品質改善任意同意、OpenAI Responses API／Firebase、ベータ研究利用なしが現行条件。未確定のUI・担当・手順は確認中、非機能要件は中断継続です。既存回答は保持します。

言語非依存の論理契約。HTTPパス、DBスキーマ、状態名の完全な列挙、AI仕様は後続設計で確定する。

共通型：Contextはサーバーが検証したActorId・役割・RequestId。患者IDをリクエストから信用しない。Idは不透明識別子、Revisionは保存版、Pageはページング結果。Result<T>は成功値Tまたは未認証・権限拒否・入力不正・競合・利用停止・外部失敗等のエラー。失敗時に保存済みと表示しない。更新は期待版やRequestKeyを用いる設計候補とし具体方式は機能設計で承認する。

| 所属 | シグネチャ | 目的・境界 |
| --- | --- | --- |
| C03 | requestPasswordReset(Email, RequestKey): Result<ResetReceipt>; validatePasswordReset(Token): Result<ResetEligibility>; resetPassword(Token, NewPassword, RequestKey): Result<ResetReceipt> | 認証前の再設定入口。24時間・最新世代・未使用を検証。再送成立で旧リンク無効化。更新・消費・全端末資格失効を一体で確定し再ログインを求める。リンク・トークンを記録しない。照会成功だけで更新を許可せず確定時に再検証 |
| C05 | renameSession(Context, SessionId, OptionalTitle, Revision, RequestKey): Result<SessionSummary> | 本人の表示タイトルのみ更新。期待版・利用状態を検証し、内容版・依存結果・完了・利用件数を変えない。失敗時は保存済みを返さない |
| C03 | register(Registration): Result<Account>; login(Credentials): Result<Session>; authorize(Context, Action, ResourceRef): Result<Decision> | 登録・認証、アカウント利用状態・役割による認可。所有者・業務状態は所有元で判定 |
| C04 | recordConsent(Context, ConsentInput): Result<ConsentReceipt>; getEligibility(Context, Purpose): Result<Eligibility>; withdrawConsent(Context, ConsentRef): Result<Receipt> | 同意・撤回の正本。同意種別・版・同意条件を判定。研究全体の許可は返さない |
| C05 | saveProfile(Context, ProfileInput): Result<Profile>; saveDraft(Context, DraftInput, Revision): Result<SavedDraft>; resume(Context, SessionId): Result<DraftSnapshot> | 選択拒否と未入力を区別、保存版と未送信を区別 |
| C05 | suggestModules(Context, ConfirmedInput): Result<List<ModuleCandidate>>; selectModule(Context, ModuleChoice): Result<ModuleSession> | 明示ルールで候補化。5種類を独立に選択 |
| C05 | requestInterpretation(Context, SourceRef): Result<GenerationResult>; confirmResult(Context, ResultId, EditedContent, Revision): Result<ConfirmedResult> | 生成案と患者本人による内容確認済み版を区別。古い入力への結果適用を防ぐ |
| C05 | revisePrevious(Context, RevisionInput): Result<RevisedSession> | UIで取消時は呼ばない。承諾後の入力修正で関連結果を再作成し患者本人が再確認 |
| C06 | generate(ApprovedTask, MinimalInput, SourceRevision): Result<UnconfirmedProposal> | 対応タスクのみ。医学判断を確定しない。画像関連タスクなし |
| C07 | render(Context, ConfirmedSnapshotRef): Result<PdfArtifact> | 希望・困りごと・選択行動・質問・日付。氏名・画像なし |
| C08 | rate(Context, CompletedSessionId, Score): Result<Rating>; summarize(AuthorizedPeriod): Result<ScoreSummary> | 1〜10、最新値置換、0件は算出不能 |
| C09 | getOwnData(Context, Query): Result<OwnData>; deleteOwnData(Context, Scope): Result<DeletionReceipt>; closeAccount(Context): Result<DeletionReceipt> | 他人不可。受付と削除完了を区別。バックアップ等の期限は後続承認 |
| C10 | getAccount(Context, AccountId): Result<AccountStatus>; setAccountStatus(Context, AccountId, Status): Result<Receipt>; setResearchPermission(Context, Grant): Result<Receipt> | 運営専用。権限付与だけでは研究利用を有効化しない |
| C11 | saveContent(Context, ContentKind, ContentDraft, Revision): Result<Content>; setPublication(Context, ContentRef, Publication): Result<Receipt> | ContentKindはお知らせ／記事。下書きと公開版を区別 |
| C11 | listPublished(Context, ContentKind, Query): Result<Page<PublishedContent>>; getPublished(Context, ContentRef): Result<PublishedContent> | 一覧と直接指定の両方で公開状態を確認 |
| C12 | getAvailability(Context, PageRef, Action): Result<Availability>; setAvailability(Context, TargetPolicy): Result<Receipt> | 認可を解除しない。解除操作と案内の経路を確保 |
| C13 | submitInquiry(Context, InquiryInput, RequestKey): Result<InquiryReceipt>; listOwnInquiries(Context, Query): Result<Page<OwnInquiry>>; getOwnInquiry(Context, InquiryId): Result<OwnInquiry> | 本人のみ、確定返信だけを返す。送信重複防止を後続具体化 |
| C13 | listInquiries(Context, Query): Result<Page<OperatorInquiry>>; updateInquiryStatus(Context, InquiryId, Status, Revision): Result<Receipt> | 運営専用、状態遷移の詳細は機能設計 |
| C13 | saveReplyDraft(Context, InquiryId, ReplyText, Revision): Result<ReplyDraft>; finalizeReply(Context, ReplyId, Revision): Result<PublishedReply> | 自由記述の下書き・確定を分離、確定後に患者本人がアプリ内閲覧 |
| C14 | searchResearch(Context, ApprovedQuery): Result<Page<ResearchProjection>>; getResearchRecord(Context, ResearchRef): Result<ResearchProjection>; getAllowedAggregate(Context, Period): Result<SuppressedOrAggregate> | 検索・個別取得・集計の各取得時に研究条件・同意・権限を確認。個別書出しなし。10人未満・差分推定を抑制 |
| C15 | load(AuthorizedScope, Id): Result<Snapshot>; commit(ChangeSet, ExpectedRevision): Result<CommitReceipt> | モジュール専用Repository経由。トランザクション境界は後続具体化 |
| C16 | record(OperationEvent): Result<RecordReceipt>; observe(OperationOutcome): Result<Receipt> | 操作内容と観測値を分離。記録障害時の扱いはNFR設計 |
| C01・C02 | present(ViewModel): View; submit(UserAction): Result<ViewState> | 処理中・失敗・再試行、保存済みと未送信の識別 |

問い合わせ・返信を研究ProjectionやAI入力に自動転用しない。返信通知、添付、再回答、保存期間、医療相談内容への案内は後続の機能設計で承認する。

## 補完する公開・参照契約

以下も言語非依存の契約候補であり、具体型・返却形式・HTTPパスは後続設計で定める。

| 所属 | 論理契約 | 利用主体・保証 |
| --- | --- | --- |
| C05 | getConfirmedSnapshot(Context, ConfirmedSnapshotRef): Result<ConfirmedSnapshot> | PDF取得サービスまたはC07が利用。所有者・内容確認状態・指定版との対応を検証した掲載用内容だけを返す |
| C05 | getEvaluationEligibility(Context, SessionId): Result<EvaluationEligibility> | 評価サービスが利用。所有者・完了状態等を返し、評価に不要な整理本文は渡さない |
| C05・C08・他の情報所有元 | readPermittedProjection(ValidatedResearchScope, Query): Result<Projection> | C14または委譲された研究・集計処理のみ。所有元の制約を維持する参照。具体項目は機能設計へ |
| C09 | trackDeletion(Context, DeletionRef): Result<DeletionProgress> | 削除・退会サービスが要求と対象・進行・結果・失敗・再試行・完了を対応付ける。既存応答への統合も可。独立照会APIや非同期ジョブを必須にしない |
| C14 | readResearchConditions(ResearchRef): Result<ResearchConditions> | 研究・提供処理が研究条件の承認状態・許可範囲・根拠版を取得。C04の同意とは別の正本 |

## 型の意味と信頼境界

- register・login・再設定契約は認証済みContextの確立前に利用する認証入口。入力検証と当該入口に必要な公開制御を適用し、2026-11-02追加の再設定入口以外に匿名API・公開画面を追加しない。認証後のContextはサーバーが確立する。
- authorizeのResourceRefは対象を表す参照であり、C03が全所有モジュールを直接読む契約ではない。役割等の共通判定に限定し、所有者・業務状態は所有元の公開契約で検証する。
- ConfirmedInputは候補選択に用いる入力内容を患者が確認したもの、ConfirmedResultは特定入力版に対応する整理内容を患者が確認しC05が保存したもの。認証・所有者確認・医学的妥当性の保証ではない。確認対象と入力版・保存版を一意に追跡可能とし、識別子の新設は必須にしない。
- C06のUnconfirmedProposalは生成された未確認案のみ。C05が入力版に対応付けて管理・保存し、古い入力や削除済み対象へ適用しない。GenerationResultは受付・生成完了・保存完了のどこまで達したかを区別する処理結果であり、受付だけでは生成・保存の成功を保証しない。同期・非同期や単一応答を固定しない。
- ConfirmedSnapshotRefはC05の特定の確認済み保存版を一意に参照する。参照を所持しているだけで認可や内容確認済みとは扱わず、取得時にC05の契約で検証する。過去版の固定は後からの修正を妨げない。
- AuthorizedPeriodは集計呼出側の信頼されたサービスが目的・期間・範囲を検証して構成し、C08も自らの集計制約を検証する。研究・外部提供ではC14が承認条件に照らして期間・範囲を検証する。C08のScoreSummaryは内部集計結果であり提供許可ではない。
- C14は承認された研究条件を正本として管理する。承認済み根拠からC14への取得・反映経路の信頼性と版対応を検証し、研究閲覧・提供処理が参照する。具体的な登録・更新方法と研究承認手続きは後続設計へ引き継ぎ、専用画面・登録メソッド一式・運営の新しい承認権限は追加しない。
- getAllowedAggregateは提供条件確認と人数・差分推定抑制を必ず適用した結果のみを返す。内部委譲してもC14の判定は迂回できない。ApprovedQuery等の型名だけを承認根拠にしない。
- Contextを持たないC06はC05、C08のsummarizeは評価・集計サービス、C15は所有モジュール、C16は信頼されたサービス・モジュールのみが呼ぶ内部契約。C14の条件参照とProjection参照も信頼された内部経路に限定する。外部入力をApprovedTask・AuthorizedScope・ValidatedResearchScopeへ無検証で変換しない。呼出側の判定結果・対象・目的・版と受信側の制約を検証し、外部から直接呼ばせない。全契約へのContext追加を要求しない。
- DeletionReceiptは対象要求に対応する受付結果であり、全対象の完了が確認されるまで削除完了を示さない。C09が所有元の処理結果を追跡し、部分失敗・再試行を管理する。

C13の返信下書き・確定、C11の一覧・直接取得での公開確認、C16のrecord／observeの分離は既存表の契約を維持する。
## 運営用当月集計の追加差分（US-28）

C10の追加契約案：getOperationsAggregate(Context): Result<OperationsAggregate>。運営権限、C12公開可否、BR-11の確定済み対象条件を検証する。当月以外の期間・属性フィルターを外部入力で自由指定させない。返却項目は機能設計domain-entities.mdのOperationsAggregateを正本とする。未確定条件・確認不能・不許可は拒否し、0件応答へ変換しない。

内部参照契約案：C05 summarizeOperationsUsage(ValidatedOperationsScope)で利用者数・初回完了数を、C08 summarizeOperationsRatings(ValidatedOperationsScope)で評価合計・回答件数を提供する。Scopeは信頼された運営用集計サービスが対象期間・基準時点・適格条件・目的を確定して構成し、所有元も検証する。両参照が同じ集合・参照整合境界になる方式は非機能・保存設計で定める。患者明細の全件転送・画面からの直接呼出し・無制約DB参照は許可しない。

既存C14 getAllowedAggregateは外部提供用のまま。運営用Scopeを研究用Scope・提供許可として流用しない。外部提供の開示履歴を省略しない。

## P06の表示形式に依存しないC05契約

resumeの対話部分は、現在質問ID・質問内容版・質問文・回答形式と検証条件・許可された保存済み回答履歴・現在入力の基準版・操作可否を復元可能にする。回答保存／進行の論理契約はsubmitAnswer(Context, RunId, QuestionId, QuestionVersion, Answer, Revision, RequestKey): Result<ConversationState>とし、既存の保存契約へ統合してもよい。本人・現在質問・版を検証し、回答の保存と進行の整合性、再送の冪等性を保証する。入力途中の下書き保存とは区別する。

ConversationStateには保存結果・現在質問または次質問準備中／まとめ等の進行結果・保存済み版を返す。吹き出し等の表示形式は要求・応答の業務項目に含めない。既存AI受付・生成・失敗状態と版照合を共用し、submitAnswerを外部AIの毎回呼出しに直結させない。具体的なJSON・HTTP・永続化方式は後続設計で確定する。

## C05／C06のAI入力選択

C05が現在SessionId・RunIdと版を検証して、同じ悩みの必要な確認済み情報・有効な初期入力と現在Runの直近質問回答・今回回答を組み立てる。C06 generateのMinimalInputはこの選択結果に限定し、フロントや提供元の任意履歴へ自動拡張しない。質問回答の順序・発言者・使用版を対応付け、直近往復数と入力予算の数値は後続設計とする。既存の冪等性・送信計数・遅延結果の版照合を維持する。

## 機能設計19回答・追加3回答の反映

[確定した詳細条件](../../construction/patient-support-app/functional-design/clarification-decisions.md)を適用する。FR-01〜08・11／12、US-01・05〜12・28の具体化で、件数・単一バックエンドを変更しない。支援別最低条件、短めのまとめ提示／じっくりの任意深掘り、M1〜M5の初回／作り直しの手入力確認保存を採用。タイトル50文字・単一質問1000文字、登録済みの40歳以降の通常継続利用を反映する。

P06は他支援の許可された確認済み項目を本人が未選択から選ぶ。C01は候補・選択・保存状態を表示、C05が本人・Run・Session・元Snapshot版・選択内容版・許可表・現在有効性を管理し、C06へ選択済みかつ必要な情報だけを渡す。未選択の他支援を補充しない。選択保存の論理入力はContext・RunId・項目IDと元版・期待Revision・RequestKey、出力は保存済み選択と版・操作可否。既存契約への統合可。選択保存だけでは生成しない。確定変更後の旧選択結果は適用せず、実依存だけ再確認へ。C01からC06の直接呼出しや新DB・サービスは追加しない。

運営用内部集計はサービス改善に限定し、研究未同意／撤回・アカウント利用停止者を含め退会／削除対象を除外する。既存3指標は少人数でも表示し、平均0回答は算出不能。既存C05／C08の許可契約を共用し、外部提供の人数・差分条件は変更しない。全体承認・通常同意との整合・実装検証前の実データ無効と研究募集／研究実データ無効を維持する。引継ぎ許可表・P06詳細・残る非機能確認は上記決定資料を参照する。

