# 実ゲートのクラウド検証資材：コード生成計画

2026-11-12。承認済み実ゲート設計・最小クラウド試験仕様を、レビュー可能な実装・配備テンプレートへ具体化する。[証拠・切替仕様](../patient-support-app/nfr-design/gate-evidence-and-cutover.md)を入力とする。生成とローカル検査のみで、クラウド作成・課金・実行は行わない。

## 対象と配置

新規の独立パッケージをexperiments/patient-support-gate-cloud/へ置く。Node.js24／TypeScriptを使用し、FirestoreサーバーSDK、GoogleのID token取得用ライブラリー、Vitestを必要な依存として公式仕様・互換性を確認して固定する。既存experiments/patient-support-safety/の38試験とルート依存は保持する。

U01のUS-12・15・19、US-01の資格失効に関する横断条件を対象とする。患者画面・実AI・実メール・実Firebase認証の全機能は実装しない。模擬受信先と合成データだけで、C-01〜11の資源調査を行うためのコードを作る。PG-01/02の未成立を隠した本実装ではない。

PATH上でgcloud／Terraform／Dockerを確認できなかったため、この計画ではツールの導入・ログイン・コンテナ配信・Terraform applyを行わない。将来の実行に必要な手順は別資料へ記載し、今回ローカルで実施できなかった検証を明記する。

## サービスと契約

一つのコードベースをROLE指定でentry-return、business、writer、safety-coordinator、final-send、test-sinkとして起動する。サービスごとの別SA・許可先をテンプレートで指定し、一つのサービスへ全資格を付与しない。実URL・project・課金先は必須入力のプレースホルダーとする。

writerは対象別禁止文書と業務書込みを同一DBトランザクションで照合する。coordinatorはT/O台帳のPrepare/Decision・停止意図・照合を扱い、別DBを一つのトランザクションとして扱わない。final-sendとentry-returnは予約・実write・受信証拠・unknownを分け、任意URLを受け付けない。test-sinkは本文を証拠ログへ出さず、試行ID・バイト数・受信段階のみ記録する。

実Firestoreアダプターとローカル用in-memoryアダプターを分け、後者での成功を実DB検証とはしない。通信相手は固定された模擬sinkのみ。旧実行者排除の証拠が不足すればUnknown/Pendingを残し、動いたというだけで本実装採用としない。

## 生成手順

- [x] Step 1：既存変更と出力先を確認。独立package.json、tsconfig、Vitest設定とlockfileを作成。必要SDKの現行公式仕様・Node互換を確認し専用開発依存を導入する。ルートと既存38試験の依存は変更しない。
- [x] Step 2：src/contracts.ts・evidence.ts・config.tsを作成。環境・role・対象・試行・世代・原因IDの契約、本文なし証拠、設定必須検査を定義。write／finishだけの証拠、因果関係不明、未知状態を合格へ昇格しない。
- [x] Step 3：src/repositories/firestore.ts・memory.ts、src/roles/writer.ts・coordinator.tsを作成。トランザクション、元期限維持、操作ID再送照合、二地域途中失敗と禁止更新を実装。実DB未接続時は明示的なlocalモードに限定し、本番設定不足で自動的に模擬実装へ切り替えない。
- [x] Step 4：src/roles/entry-return.ts・business.ts・final-send.ts・test-sink.tsとserver.tsを作成。固定宛先、サービス間ID token、一括返却、最小状態応答、checkpointと故障注入を実装。故障注入の起動は合成検証環境へ限定する。アプリの権限確認をIAMの最終排除と混同しない。
- [x] Step 5：infra/のTerraformテンプレート、Dockerfile、.dockerignore、config/example.jsonを作成。T/O・6サービス・追加O配置・DB・別SA・Secret・VPC・必要な入口と経路を宣言。宛先制限が具体化できない部分は必須未確定として残し、広い許可で仮合格にしない。実環境へapply、push、build、認証はしない。
- [x] Step 6：tests/に契約・writer競合モデル・元期限・二地域途中失敗・サービス間HTTP・迂回拒否・証拠不十分の固定試験と純粋関数PBTを追加。tools/のC-01〜11ドライバーはローカル模擬相手で動作確認する。実クラウド実行は別モードとし、環境・実行許可の入力なしでは開始させない。
- [x] Step 7：tools/estimate.tsとfixtures/pricing-input.jsonを作成。地域SKU・単位・単価・日付・数量・存続時間を入力し、未入力を0扱いせずINCOMPLETEと未算入費目を返す。22調査試行とCanary最低1800件＋60試行を別集計。README、別インストール手順、準備／実行／終了棚卸し手順を作成。
- [x] Step 8：型検査・新規固定試験・部分PBT・ローカルHTTP・見積りCLIを実行し、既存38試験との干渉とルート依存不変を確認。aidlc-docs/construction/patient-support-app/code/gate-preparation-summary.mdへ成功・未実行・反例・未成立を記録し、計画・監査・状態を更新。

コードと配備テンプレートは専用パッケージ内、文書はaidlc-docs内へ置く。Terraform／Dockerによる検査を実施できない場合は未実施と記載し、コードの型検査をインフラ実配置の検証へ読み替えない。

## 完了条件と後続

資材の生成とローカル検査を完了条件とする。PG-01/02やCanaryの整合が未解消でも、それを正しく保留として出力する。実現していない最終フェンスをコメントだけで実装済みにしない。未確定の設定を埋めずに実サービスを作る経路を設けない。

実環境ID・地域SKU・存続時間・許容費用を確定し、ネットワーク制限・Canary差分をレビューしてから、クラウド実行の範囲と費用を提示する。今回のコード生成承認はこの将来の実行許可を含まない。

- [x] 2文書の承認と未完了項目、既存コード・依存・ツール状況を確認。
- [x] 検証用サービス・配備テンプレート・ローカル検査へ範囲を限定し、8手順・入出力・限界を具体化。
- [x] 今回新たに提示したコード生成計画のレビュー回答を受領。回答A。旧版の新規送信・返却の遮断証拠を確認してから新版のみを開く条件を追加し、証拠不足は保留。
- [x] 計画に従い資材を生成・検査し結果を報告。gate-preparation-summary.md参照。実クラウドドライバーは未有効化、インフラ実検査・最終フェンスは未成立。

RESILIENCY-03は証拠・承認を追跡。04・08・10〜13の実構成は未適合を維持。部分PBT-02・03・07・08・09は純粋関数・保存変換へ適用し、実クラウドへの必須範囲を増やさない。無効セキュリティ拡張は省略。段階全体の完了ではない。

実行前レビューは[確認質問](patient-support-app-gate-preparation-review-questions.md)へ記載する。承認済み2文書の再承認ではない。
