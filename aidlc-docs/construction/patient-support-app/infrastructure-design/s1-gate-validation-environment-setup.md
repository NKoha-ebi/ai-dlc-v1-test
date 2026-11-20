# S1 共通ゲート検証環境の構築手順

東京・大阪に合成データ専用のGoogle Cloud環境を用意する。構成は[S1具体構成レビュー](../nfr-design/shared-gate-concrete-review.md)第2〜3節、試験の合否は同第4・6・12節を参照する。S1は第一検証候補。PG-01／02の実経路での成立を確認してから採用を判断する。

## 1. Google Cloud プロジェクトと準備情報

1. Google Cloud Consoleの「IAMと管理 → プロジェクトの作成」で、既存β・本番と別の検証専用プロジェクトを作成する。環境IDには gate-check- で始まる名前を使う。プロジェクトID、所有者、終了予定日を記録する。
2. 「お支払い」で検証用の課金先を紐づけ、プロジェクト単位の予算アラートと通知先を設定する。予算アラートは自動停止を行わないため、費用枠に到達した場合の停止担当も決めておく。
3. 「APIとサービス → ライブラリ」で Cloud Run、Compute Engine、Artifact Registry、Firestore、Cloud Tasks、Cloud Storage、Secret Manager、Cloud Logging、Cloud Monitoring を有効化する。Cloud Buildでイメージを作る場合はCloud Buildも有効化する。LBで証明書を管理する方式に合わせてCertificate Managerを追加する。
4. 「IAMと管理 → 割り当てとシステム上限」で、東京（asia-northeast1）と大阪（asia-northeast2）のCloud Run CPU・メモリー・Direct VPCの地域枠を確認する。目安は旧新重複を含め地域当たり44 vCPU・24 GiB。実際の割当値を記録する。
5. Consoleに入れる作業者、配備用ID、試験用IDを決める。検証担当にはログ閲覧と必要なサービス呼出しを対象リソース単位で付与する。鍵・トークンは共有資料に添付せず、実行セッションに認証済みアクセスを設定する。

## 2. ネットワーク、台帳、配備先を準備する

1. 「VPCネットワーク」で専用のカスタムVPCと東京・大阪の専用サブネットを作る。各地域 /24 を開始案として、既存CIDRとの衝突・予約・旧新重複を確認する。Cloud Run配備時は設計対象のサービスにDirect VPCと all-traffic を設定する。Google APIや固定の合成受信先に到達する経路を明示し、任意の外向き宛先へ到達できないことを確認する。[Direct VPCの設定](https://docs.cloud.google.com/run/docs/configuring/vpc-direct-vpc)
2. Firestore Nativeの名前付き安全DBを東京と大阪に1つずつ作成し、DB IDとlocationを記録する。例えば認証済みCloud Shellで、専用プロジェクトIDを PROJECT_ID に入れ、次を実行する。先に同名DBがある場合は既存のlocationと用途を確認する。[Firestoreの作成コマンド](https://docs.cloud.google.com/sdk/gcloud/reference/firestore/databases/create) · [DBのロケーション](https://docs.cloud.google.com/firestore/native/docs/locations)

   ~~~sh
   gcloud firestore databases create --project="$PROJECT_ID" --database=gate-safety-t --location=asia-northeast1 --type=firestore-native
   gcloud firestore databases create --project="$PROJECT_ID" --database=gate-safety-o --location=asia-northeast2 --type=firestore-native
   gcloud firestore databases list --project="$PROJECT_ID"
   ~~~

3. 必要な検証ケースに合わせて業務用Firestore、Cloud Tasksの地域別キュー、PDF用の非公開バケット、Secret Managerの検証用シークレットを作る。安全DBは本文を保存しない。要求台帳とSlotは、検証する候補と配置が決まった時点で作る。
4. Artifact Registryにコンテナ用リポジトリを用意する。地域障害や再作成も検証する場合は、大阪側で東京に依存せず同じ成果物を取得できるように準備する。イメージはダイジェストで固定する。
5. return、business、writer、send、safety、PDF用のサービスアカウントを分ける。業務DB書込みはwriter、安全DB更新はsafety、PDF保管はPDF、合成AI受信先への送信はsendに限定する。サービス間のInvokerは呼出し元ごとに付与する。

ここまでが先行して用意できる基盤。現行の[Terraform](../../../../experiments/patient-support-gate-cloud/infra/main.tf)は準備用で、readiness条件により apply が止まる。後続の配備には、両地域の保存と初回本文引渡しを順序付ける部品、および旧世代・既存接続を遮断する候補の実装とイメージが必要。

## 3. 検証候補を配備する

1. 候補イメージのダイジェストと役割設定が揃ったら、「Cloud Run → サービスを作成」で各地域に6役割を配備する。大阪の業務5役割は閉鎖した状態で配置し、safetyは東京・大阪の両方を稼働対象にする。サービスは原則認証必須とし、内部役割は内部ingressと宛先別Invokerを使う。

   | 役割 | vCPU | メモリー | min／max | concurrency |
   | --- | ---: | ---: | ---: | ---: |
   | return・business・writer・safety | 1 | 512 MiB | 0／4 | 8 |
   | send | 1 | 512 MiB | 0／4 | 2 |
   | PDF | 1 | 1 GiB | 0／2 | 1 |

   表は試験開始値。AI全体2枠・PDF全体1枠はアプリ側の台帳で扱う。

2. 返却経路のS1比較では、外部Application Load BalancerにHTTPSの検証用ホスト名・証明書を設定し、returnに向けた地域別serverless NEGを接続する。returnのingressは内部およびCloud Load Balancingに制限し、検証用クライアントだけが認証して本文に到達できるようにする。他の業務役割への外部ルートは作成しない。[Cloud Runのネットワーク境界](https://docs.cloud.google.com/run/docs/securing/security)
3. sendの固定宛先に合成AI受信サービスを接続し、返却側には実際にLB経由で受け取る合成クライアントを置く。最終送出部品を追加する案では、その部品を含めたTLS終端・接続・バッファの実経路を記録し、既存の直通経路を閉じる。実患者データ、実AIの鍵、メール配信先は接続しない。
4. 入口、実際の送出点、合成受信先で、操作・試行・接続ID、世代、最初の耐久保存結果、最初の本文引渡し、因果順序を照合できることを確かめる。ログは本文なしとする。接続を保持する試験、旧revisionを使う試験、合成操作単位で地域間伝播を保留する試験を、閉じた検証環境で実行できる状態にする。

## 4. 検証担当へ引き渡す

- [ ] プロジェクトID、両地域のサービス名・接続先、安全DB ID、検証用ホスト名、合成受信先。
- [ ] 構成リビジョン、イメージダイジェスト、LB／NEG・TLS終端・最終送出部品の対応、地域設定、ログの参照先。
- [ ] 認証済みアクセス、使える試験時間帯、費用枠、停止担当、試験後に停止・撤去する資源一覧。
- [ ] 両地域で合成データの基準ケースが通り、旧経路・分断を再現する手段と証拠取得点が確認済み。

引渡し後、PG-01は東京先行・大阪先行の両方向で、片側保存後かつ未反映の間に送信・返却の新規本文が始まらないことを確認する。PG-02は旧revision・旧instance・休止復帰・既存接続からの新規送出を確認する。保存と引渡しの因果順序または旧経路の証拠が欠けた試行は保留。試験後は入口と配送を閉じ、本文なしの証拠を保全して、LB・IP・サービス等の残存課金を点検する。
