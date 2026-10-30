# コンポーネントのメソッド

言語非依存の論理契約。HTTPパス、DBスキーマ、状態名の完全な列挙、AI仕様は後続設計で確定する。

共通型：Contextはサーバーが検証したActorId・役割・RequestId。患者IDをリクエストから信用しない。Idは不透明識別子、Revisionは保存版、Pageはページング結果。Result<T>は成功値Tまたは未認証・権限拒否・入力不正・競合・利用停止・外部失敗等のエラー。失敗時に保存済みと表示しない。更新は期待版やRequestKeyを用いる設計候補とし具体方式は機能設計で承認する。

| 所属 | シグネチャ | 目的・境界 |
| --- | --- | --- |
| C03 | register(Registration): Result<Account>; login(Credentials): Result<Session>; authorize(Context, Action, ResourceRef): Result<Decision> | 登録・認証、利用停止・役割・本人判定 |
| C04 | recordConsent(Context, ConsentInput): Result<ConsentReceipt>; getEligibility(Context, Purpose): Result<Eligibility>; withdrawConsent(Context, ConsentRef): Result<Receipt> | 同意種別・版・承認条件を分離。撤回後の取扱いは承認必須 |
| C05 | saveProfile(Context, ProfileInput): Result<Profile>; saveDraft(Context, DraftInput, Revision): Result<SavedDraft>; resume(Context, SessionId): Result<DraftSnapshot> | 選択拒否と未入力を区別、保存版と未送信を区別 |
| C05 | suggestModules(Context, ConfirmedInput): Result<List<ModuleCandidate>>; selectModule(Context, ModuleChoice): Result<ModuleSession> | 明示ルールで候補化。5種類を独立に選択 |
| C05 | requestInterpretation(Context, SourceRef): Result<GenerationResult>; confirmResult(Context, ResultId, EditedContent, Revision): Result<ConfirmedResult> | 生成案と本人確認済み内容を区別。古い入力への結果適用を防ぐ |
| C05 | revisePrevious(Context, RevisionInput): Result<RevisedSession> | UIで取消時は呼ばない。承諾後の変更で関連結果の再確認を要求 |
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
| C14 | searchResearch(Context, ApprovedQuery): Result<Page<ResearchProjection>>; getResearchRecord(Context, ResearchRef): Result<ResearchProjection>; getAllowedAggregate(Context, Period): Result<SuppressedOrAggregate> | 取得時に承認・同意・権限を確認。個別書出しなし。10人未満・差分推定を抑制 |
| C15 | load(AuthorizedScope, Id): Result<Snapshot>; commit(ChangeSet, ExpectedRevision): Result<CommitReceipt> | モジュール専用Repository経由。トランザクション境界は後続具体化 |
| C16 | record(OperationEvent): Result<RecordReceipt>; observe(OperationOutcome): Result<Receipt> | 操作内容と観測値を分離。記録障害時の扱いはNFR設計 |
| C01・C02 | present(ViewModel): View; submit(UserAction): Result<ViewState> | 処理中・失敗・再試行、保存済みと未送信の識別 |

問い合わせ・返信を研究ProjectionやAI入力に自動転用しない。返信通知、添付、再回答、保存期間、医療相談内容への案内は後続の機能設計で承認する。
