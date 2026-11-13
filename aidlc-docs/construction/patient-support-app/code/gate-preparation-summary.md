# 実ゲート検証資材の生成・ローカル検査結果

> **配備方針更新（2026-11-13）**：β版は通常アプリ・ゲートともCanaryを廃止し一括公開する。現行条件は[一括公開方式](../nfr-design/beta-bulk-release.md)を正本とする。本書に残る旧Canary回答・維持方針・段階昇格・1800件／60試行の記述は変更前の履歴で、現行の必須条件にしない。公開前受入は最低600件＋AI/PDF20試行、切替時確認と公開後監視は別枠。実ゲートの遮断・再開証拠、停止時間、費用の未成立は継続する。

2026-11-12。レビュー回答Aの8手順を実行。追加条件「旧版の新規送信・新規返却ができない証拠を確認してから新版のみを開く。証拠不足は保留」を反映した。成果物は独立試作であり、非機能設計・インフラ設計・本実装段階全体の完了ではない。

## 生成した資材

experiments/patient-support-gate-cloudに専用package/lock/tsconfig/Vitest設定、6役割、FirestoreサーバーSDKとmemoryのRepository、証拠・設定・契約、C-01〜11ローカル調査、費用CLI、Terraform候補、Dockerfileを追加。[操作・別インストール・準備／終了棚卸し](gate-cloud-README.md)に利用方法と未完成部分を記載。.github/workflows/patient-support-gate-cloud.ymlへ資格を使わないローカル検査と部分PBTを追加した。リモートCIは未実行。

writerは対象禁止と業務commitを同一トランザクションで判定する。操作IDの競合を拒否し、再送でも元期限を保持する。coordinatorはT/OへPrepare→業務禁止→Decisionを順次記録し、途中失敗はPending。二地域Decisionだけで全旧実行者が排除済みとは応答しない。

本文なしイベントには配備・環境・役割・revision・boot・対象・操作・試行・世代・順序・原因IDを持たせた。受信側証拠と送出側のwriteを区別し、SenderFinishだけでは合格へ昇格しない。未知の送信／返却予約は自動再試行しない。設定不足のcloudからmemoryへ自動退避しない。cloudの最終送信と返却はフェンス未成立を理由にPendingを維持する。

## 検査結果

| 検査 | 結果 |
| --- | --- |
| 新規専用パッケージ型検査 | 成功。Node24.12.0、TypeScript6.0.2 |
| 新規固定試験・HTTP・部分PBT | 43件すべて成功、5ファイル。うちPBT4件×300例、seed20261112、標準shrinking |
| C-01〜11ローカル調査 | 正常／故障で22行。範囲内合格8、保留13、既知反例FAIL1。43イベントを保存 |
| 費用CLI | INCOMPLETE、total:null。8費目のSKU・単価・数量等の不足を出力 |
| クラウドモードの誤実行防止 | --cloudはCLOUD_NOT_AUTHORIZEDで終了コード1、クラウドへの接続開始なし |
| 既存safety試作 | 型検査成功、38件すべて成功。既存PBT6件×300例を維持 |
| ルートと既存safetyのpackage/lock | 開始時と終了時SHA256一致、4ファイル不変 |
| Terraform／Docker／gcloud | PATH上で未確認。導入・fmt/validate/plan/apply・build/push・ログイン未実施 |
| 実クラウド／実AI／メール | 未実施。患者データ使用なし |

実行結果は専用パッケージのartifacts/tests.json、investigation.json、estimate.json。既存回帰結果はexperiments/patient-support-safety/artifacts/gate-regression-tests.json。型検査とローカルHTTP成功は、実Firestoreの耐久性、クラウドIAM、経路拒否、実復旧の成功を意味しない。

## 反例と未成立

C-05故障では、最終許可確認後のcheckpointで停止状態へ変え、旧処理を続行すると固定合成本文がsinkへ到達した。これは意図した欠陥対照であり、Vitestの成功は反例の再現確認を意味する。返却側にも同じ確認／write間の停止を注入し、旧返却が起きる反例を固定試験で保持した。任意位置のOS停止・別instanceへの通知伝播を再現したものではない。

PG-01の正確な本文引渡し開始と停止の因果順序、PG-02の全旧実行者の作用不能は未成立。アプリの世代確認・IAM変更API成功・firewall拒否要求・max1・traffic0では代替しない。過去に生成したmayOpenNewは旧送信拒否、旧返却拒否、既存接続拒否、完全な実行者一覧、未知試行ゼロ、二地域確定、別担当に加えて旧canaryReconciledへ依存する。改修・再検証まで現行公開判断に使用禁止。boolean入力は実証ではなく、cloudの本文開放にも接続していない。

PG-03は実配備IAM・DB境界・default/tag/旧URL・ネットワーク迂回を未検証。Terraformはdeny-all egressとreadinessの未成立条件で実行を止める候補テンプレート。内部LB／proxy／DNS／Google API／NATの必要性、最小宛先、DB別IAM、O/Tのinvoke関係、外部クライアント認証、Secret version、監視・backup・復元は未完成。広いAPI許可・allUsers・project全体のDB権限で仮合格にしていない。Terraformとしての実検査も未実施であり、そのまま配備可能とは報告しない。

PG-04は旧版遮断後に新版のみ開く方針を採用条件として受領した。通常アプリ・ゲートとも一括公開へ変更済みで、旧Canary配分・昇格条件は取消し。公開前受入は通常API最低600件・AI/PDF20試行とし、切替時追加確認・公開後最低15分監視は別枠。許容停止時間、再開証拠の実証、実環境・地域SKU・実存続・費用総額は引き続き要確定。調査22試行を公開前受入へ読み替えない。

実クラウド用試験ドライバーは誤実行を防ぐ停止口まで。今回の22行はloopback・memory用で、クラウド実行を実現したとはしない。将来の実配置・許可・費用に合わせたドライバー追加とレビューが必要。

## 拡張適合

適用設定はaidlc-state.mdの「拡張機能の設定」を継承。無効セキュリティ拡張は規則本体を読み込まず適用省略。

| 回復力規則 | 今回の評価 |
| --- | --- |
| RESILIENCY-01 | N/A：既存の業務重要度を変更しない隔離試作 |
| RESILIENCY-02 | N/A：承認済み目標・期限を緩めず、達成実証をしない |
| RESILIENCY-03 | 適合：回答原文・追加条件・計画・結果・監査を追跡 |
| RESILIENCY-04 | 本構成は未適合継続：一括公開の停止時間・再開証拠・旧資材改修と実配備検査が未完。ローカルCI資材のみ生成 |
| RESILIENCY-05 | N/A：本文なし証拠を作成、運用監視の実配備は対象外 |
| RESILIENCY-06 | N/A：ローカルhealthのみ、実環境の可用性判定は対象外 |
| RESILIENCY-07 | N/A：運用メトリクス評価・アラート配備は対象外 |
| RESILIENCY-08 | 本構成は未適合継続：T/O永久喪失・独立保護の実証なし |
| RESILIENCY-09 | N/A：候補のmax2／concurrency4は宣言、実容量・クォータ検証は対象外 |
| RESILIENCY-10 | 本構成は未適合継続：HTTP／DBの待ち上限とunknownを実装、最終作用排除と実依存故障の保証は未成立 |
| RESILIENCY-11 | 本構成は未適合継続：既存DR方針を保持、採用構成未確定 |
| RESILIENCY-12 | 本構成は未適合継続：memory成功は実backup・耐久複製の証拠にならない |
| RESILIENCY-13 | 本構成は未適合継続：実復旧・旧実行者排除・安全な再開は未実証 |
| RESILIENCY-14 | N/A：ローカル合成故障のみ、実災害復旧訓練は未実施 |
| RESILIENCY-15 | N/A：運用事故対応プロセスを変更しない |

| 部分PBT必須規則 | 評価 |
| --- | --- |
| PBT-02 | 適合：構造化OperationのJSON round-trip |
| PBT-03 | 適合：再試行識別／元期限、旧送出・返却証拠不足時の閉鎖、価格不明時の総額未確定 |
| PBT-07 | 適合：構造化Operation・切替証拠・費目の有効範囲generator |
| PBT-08 | 適合：seed20261112、各300例、標準shrinking、CIに同じseedを指定。リモートCIは未実行 |
| PBT-09 | 適合：fast-check4.10.2を専用依存へ固定、Vitest5.1.0で実行 |

PBT-01・04・05・06・10は部分適用の助言。固定の競合・期限・台帳途中失敗・HTTP・再送拒否・反例試験を併用。実クラウドI/OのPBTはN/A。本構成のblocking findingは解消していないため、段階完了・本実装採用・実環境実行への移行は提示しない。

## 次の検討対象

旧送信・旧返却を最終作用点で止める成立方式と独立した証拠取得を設計する。証拠不足なら新版を開かず保留。成立候補が得られた後に一括公開の停止・再開条件、実経路・権限・環境・SKU・数量・許容総額をレビューし、実試験コードと実施範囲を具体化する。今回の資材作成承認を実環境作成・課金へ拡張しない。
