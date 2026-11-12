# 実ゲート検証資材の使用方法

独立パッケージはexperiments/patient-support-gate-cloud。US-12・15・19とUS-01資格失効の横断試作で、患者画面や本番認証の実装ではない。6役割をROLE相当のJSON設定roleで選ぶ。T/O台帳は独立トランザクション。writerだけが業務禁止と通常書込みを同一トランザクションで照合する。

## インストールとローカル検査

Node.js 24系を使用。PowerShellではnpm.cmdを使う。ルートや既存safetyパッケージの依存を更新しない。

```powershell
Set-Location experiments/patient-support-gate-cloud
npm.cmd ci --ignore-scripts --no-audit --no-fund
npm.cmd run typecheck
$env:FC_SEED = '20261112'
npm.cmd test
npm.cmd run investigate
npm.cmd run estimate
```

investigateは6つのloopback HTTPサーバーと明示memory DBを起動し、C-01〜11を正常／故障の22行で調査する。最後に接続を閉じる。artifacts/investigation.jsonに本文なしイベントを保存。C-05故障は確認とwriteの間に停止を注入する既知反例なのでFAILが期待結果。CLIの正常終了は安全性合格を意味しない。OS停止・別プロセス／別instance・実IAM／network・実Firestore・実PDFは再現していない。C-01〜03のローカル拒否はクラウドの直接搬出・権限・URL迂回の証明ではない。

--cloudは明示拒否する。クラウド版の実試験ドライバーは、確定した配置・許可・費用に合わせて追加実装とレビューが必要。既存localドライバーのURLを本番へ差し替えて実行してはいけない。

## サービスと設定

config/example.jsonは不足を検出するための例。project、database、URL、SA identityを空欄のまま起動しない。localはgate-check-環境、127.0.0.1だけを許し、roleごと16文字以上の別の模擬Bearerを指定。cloudではID tokenを対象audienceと照合し、認証済みSAメールとroleを対応付ける。これは患者認証ではない。opは本人対象一致・synthetic目的・consent・元期限・世代を要求する。入力URL・redirect・自由宛先は拒否する。

writerは/commitをbusinessから、/blockをcoordinatorからのみ受ける。businessの/workはentry-returnから、coordinatorの/stopはentry-returnからのみ。final-sendの/sendとentry-returnの/returnはbusinessからのみ。sinkの/receiveはfinal-sendだけ。/statusは認証済み主体へPendingだけ、/healthは本文なし。entry-returnは一括Buffer返却。PDFや署名Storage URLは実装していない。

実送信先は固定の合成test-sinkだけ。サービスroleごと別SA・必要なinvoke edgeのみ。故障checkpointはlocal合成環境でのみ有効。localでもゲート初期値は閉鎖、試験ハーネスだけが制御状態を注入する。cloudでは最終フェンス未成立のため送信・本文返却を常にPendingに保つ。起動設定で開放するスイッチはない。

最初の送出／返却予約後は、同じ操作IDを再送しない。未知の結果はPendingのまま照合する。Firestoreの5秒待ち上限は結果不明を返すだけで、進行中commitをキャンセルした証拠ではない。元deadlineを延長せず同一IDで照合する。模擬DBの排他成功は実Firestoreの耐久・競合受入ではない。

## 費用入力

fixtures/pricing-input.jsonの各費目へ地域SKU・課金単位・単価・根拠URL・価格日・数量・実存続時間・通貨を入力。時間課金は時間を含めてquantityを計算し、単価との単位を一致させる。未入力は0にせずINCOMPLETE、total:nullと未算入一覧を返す。既知小計は総額ではない。0を使うなら不要／無料の根拠をsourceへ書く。

調査22試行、Canary通常API最低1800件、AI/PDF60試行は別集計。実AI条件は未実施。retry・起動・監視・地域間通信・終了後DB/LB/IP/Secret/image/ログの実存続を含める。単一通貨へ揃え、混合通貨を合算しない。現在のfixtureは総額未確定を意図している。

## 配備資材の限界と準備

infra/main.tfはTの6サービス、Oの返却・送信・調整・sink、地域別SA・台帳、業務DB、Secret、VPC/subnet、入口LBの候補を宣言する。Dockerfileは同じsrcをNode24で起動。今回Terraform/Dockerの実行・導入・image build/push・クラウド認証は行っていない。

Terraformのreadinessは未解消条件により必ず停止する。deny-all egressから、必要なDNS、Google API、内部Run、地域間接続、最終sinkだけを許す具体経路を設計・検証してから再レビューする。NATは宛先制限ではないため安易に追加しない。内部LB／proxy／NATが必要なら追加資源と費用を含める。DB別IAMの実効境界、OとTのinvoke関係、外部合成クライアント認証、default/tag URL迂回拒否、監視／backup／復元、Secret version投入も未完成。全projectへのdatastore.userやallUsers invokerで穴埋めしない。

将来の準備順序は、専用project・所有者・国内地域・課金先・クォータ・保存要件を確定、実経路と権限を設計、CLI／コンテナ／providerを別途導入、template検証、SKUと実数量を積算、具体的実試験コードをレビュー、範囲と費用の許可を得る。この後に限り準備・実行を検討する。今回の承認はこの実行許可を含まない。

## 停止切替と終了棚卸し

通常操作を閉じ、停止前処理・未知試行・全旧revision／instance／資格／URL／既存接続を列挙する。旧版から新規送信できないことと新規本文返却できないことをそれぞれ観測する。拒否API成功、traffic0、max1、自己申告一覧だけを証拠にしない。証拠不足はPendingのまま新版を閉鎖する。

旧版の作用不能、二地域Decision、未知試行ゼロ、別担当確認、Canary整合がそろった後に新版だけの開放を検討する。mayOpenNewは純粋な必要条件の判定器で、boolean入力自体は証拠ではない。cloud runtimeの開放には接続していない。通常アプリCanaryの5%→25%→100%、各15分、API別100件と実AI/PDF条件は維持。ゲート停止切替とCanaryの具体整合はPG-04の残課題。

終了時は残存listener／接続、資格・token・Secret version、Run revision/tag、LB/IP/proxy/NAT、VPC、DBとbackup、image、ログ・試験証拠を一覧にする。削除対象・証拠保持対象・保持期限・所有者・残存費用を照合し、削除保護を無断解除しない。今回クラウド資源は作成していない。

## 依存確認と検査方針

2026-11-12にnpm公式レジストリでFirestore9.4.1とgoogle-auth-library11.3.4はNode>=22、Vitest5.1.0はNode24対応を照合し固定。Node24.12.0で型検査する。公式[Firestore SDK](https://github.com/googleapis/google-cloud-node/tree/main/handwritten/firestore)、[ID token認証](https://github.com/googleapis/google-auth-library-nodejs#working-with-id-tokens)に沿って実アダプターを使用。依存lockfileは専用。fast-check4.10.2を使用しseed20261112、各300例、標準shrinkingを保持する。CIはローカル検査だけでクラウド資格を持たない。
