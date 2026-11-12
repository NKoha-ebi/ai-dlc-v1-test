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
