# S1 共通ゲート検証環境の構築手順

東京・大阪に合成データ専用のGoogle Cloud環境を用意する。構成は[S1具体構成レビュー](../nfr-design/shared-gate-concrete-review.md)第2〜3節、試験の合否は同第4・6・12節を参照する。S1は第一検証候補。PG-01／02の実経路での成立を確認してから採用を判断する。

## 1. Google Cloud プロジェクトと準備情報

1. Google Cloud Consoleの「IAMと管理 → プロジェクトの作成」で、既存β・本番と別の検証専用プロジェクトを作成する。環境IDには gate-check- で始まる名前を使う。プロジェクトID、所有者、終了予定日を記録する。
2. 「お支払い」で検証用の課金先を紐づけ、プロジェクト単位の予算アラートと通知先を設定する。予算アラートは自動停止を行わないため、費用枠に到達した場合の停止担当も決めておく。
3. 「APIとサービス → ライブラリ」で Cloud Run、Compute Engine、Artifact Registry、Firestore、Cloud Tasks、Cloud Storage、Secret Manager、Cloud Logging、Cloud Monitoring を有効化する。Cloud Buildでイメージを作る場合はCloud Buildも有効化する。LBで証明書を管理する方式に合わせてCertificate Managerを追加する。
4. 「IAMと管理 → 割り当てとシステム上限」で、東京（asia-northeast1）と大阪（asia-northeast2）のCloud Run CPU・メモリー・Direct VPCの地域枠を確認する。目安は旧新重複を含め地域当たり44 vCPU・24 GiB。実際の割当値を記録する。
5. 作業者は1人なので、Console と Cloud Shell には同じ Google アカウントでログインする。初期設定と IAM 管理はそのアカウントで行い、Cloud Run の配備と合成リクエストの試験では、操作ごとに下記の専用サービスアカウントを使う。

### 1-5. 作業者1人での IAM 設定と ID の使い分け

| 操作                                                 | 使用する ID                           | 付与先と権限                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| API 有効化、VPC・LB の構築、IAM 設定、検証ログの確認 | 作業者の Google アカウント            | 検証プロジェクトの初期設定権限。通常の検証ログを読む権限が不足する場合は、対象プロジェクトに Logs Viewer（`roles/logging.viewer`）を付与する。                                                                                                                                             |
| 既存イメージの Cloud Run 配備                        | `gate-deploy`                         | 検証プロジェクトに Cloud Run Developer（`roles/run.developer`。初回作成のためプロジェクト単位）、対象イメージのリポジトリに Artifact Registry Reader（`roles/artifactregistry.reader`）、配備先で使う各実行用サービスアカウントに Service Account User（`roles/iam.serviceAccountUser`）。 |
| LB 経由の合成リクエスト                              | `gate-test`                           | 第3節で作成した呼出し対象の return サービスごとに Cloud Run Invoker（`roles/run.invoker`）。東京・大阪のうち実際に LB の転送先になるサービスに付与する。                                                                                                                                   |
| アプリ実行中の DB・キュー・サービス等へのアクセス    | 第2節 5項の各実行用サービスアカウント | 各役割に必要なリソースの権限と、呼出し先ごとの Invoker。                                                                                                                                                                                                                                   |

**初期設定（作業者の Google アカウント）**

1. Console で第1節 1項の検証プロジェクトを選択し、プロジェクトセレクタで実際のプロジェクト ID を控える。「API とサービス → ライブラリ」で **IAM Service Account Credentials API**（`iamcredentials.googleapis.com`）を有効にする。
2. 「IAM と管理 → サービス アカウント → サービス アカウントを作成」で `gate-deploy` と `gate-test` を作成する。作成画面の任意の権限設定はスキップし、作成後に対象リソースごとに設定する。JSON キーは作成しない。
3. サービス アカウント一覧から `gate-deploy` を選択し、「権限 → アクセスを許可」で自分の Google アカウントに Service Account Token Creator（`roles/iam.serviceAccountTokenCreator`）を付与する。`gate-test` では同じ手順で Service Account OpenID Connect Identity Token Creator（`roles/iam.serviceAccountOpenIdTokenCreator`）を付与する。それぞれのサービスアカウントの IAM に設定する。
4. 「IAM と管理 → IAM」で `gate-deploy` に Cloud Run Developer を付与する。第2節でリポジトリと実行用サービスアカウントを作ったら、Artifact Registry の対象リポジトリの「権限」で Reader を付与し、各実行用サービスアカウントの「権限」で Service Account User を付与する。[サービスアカウントの権限](https://docs.cloud.google.com/iam/docs/service-account-permissions) · [Cloud Run の配備権限](https://docs.cloud.google.com/run/docs/reference/iam/roles)

**Cloud Run の配備（第3節 1項）**

Console から Cloud Shell を開き、`gcloud auth list` で作業者のアカウントが有効であることを確認する。以下は東京の return の例。プレースホルダーを実際の値に置き換え、各役割と地域に合わせて第3節の設定値を適用する。

```bash
PROJECT_ID='プロジェクトセレクタで確認した検証用プロジェクトID'
DEPLOY_SA="gate-deploy@${PROJECT_ID}.iam.gserviceaccount.com"
TEST_SA="gate-test@${PROJECT_ID}.iam.gserviceaccount.com"
REGION='asia-northeast1'
RETURN_SERVICE='実際の東京returnサービス名'
RUNTIME_SA='東京returnに割り当てる実行用サービスアカウントのメールアドレス'
IMAGE='asia-northeast1-docker.pkg.dev/PROJECT_ID/REPOSITORY/IMAGE@sha256:実際のダイジェスト'
VPC='実際のVPC名'
SUBNET='実際の東京サブネット名'

gcloud run deploy "$RETURN_SERVICE" --project="$PROJECT_ID" --region="$REGION" \
  --impersonate-service-account="$DEPLOY_SA" --image="$IMAGE" \
  --service-account="$RUNTIME_SA" --ingress=internal-and-cloud-load-balancing \
  --network="$VPC" --subnet="$SUBNET" --vpc-egress=all-traffic \
  --cpu=1 --memory=512Mi --min-instances=0 --max-instances=4 --concurrency=8
```

`--impersonate-service-account` はそのコマンドの配備主体を切り替え、`--service-account` はコンテナの実行 ID を指定する。配備後は作業者の Google アカウントで Cloud Run サービスの認証設定を確認し、Invoker IAM チェックが有効で、`allUsers` や `allAuthenticatedUsers` に Invoker が付与されていないことを確認する。IAM の変更も作業者の Google アカウントで行う。[サービスアカウントの代理実行](https://docs.cloud.google.com/docs/authentication/use-service-account-impersonation) · [Direct VPC の設定](https://docs.cloud.google.com/run/docs/configuring/vpc-direct-vpc)

**LB 経由の試験（第3節 2〜4項）**

1. 作業者の Google アカウントで、Cloud Run の呼出し対象となる各 return サービスの「権限」に `gate-test` を追加し、Cloud Run Invoker を付与する。内部サービス間の呼出しには第2節 5項の実行用サービスアカウントを使う。
2. LB 配下で複数地域の return を使う場合は、各 return のカスタム audience に同じ値を設定する。以下では LB の HTTPS オリジン（例 `https://gate-check.example.com`）を使う。単一のバックエンドでは、そのサービスの `run.app` URL を audience にする方法も使える。どちらの場合も試験リクエストの送信先は LB の検証 URL とする。[複数地域のクライアント認証](https://docs.cloud.google.com/run/docs/multiple-regions) · [カスタム audience の設定](https://docs.cloud.google.com/run/docs/configuring/custom-audiences)
3. Cloud Shell で下記を実行する。URL に読み取り用の合成試験パスを指定する。PG-01／02 で使う HTTP メソッドと合成ペイロードは各試験ケースに従う。

```bash
AUDIENCE='https://gate-check.example.com'
TEST_URL='https://gate-check.example.com/実際の合成試験パス'

(
  set +x
  TOKEN="$(gcloud auth print-identity-token --project="$PROJECT_ID" \
    --impersonate-service-account="$TEST_SA" --audiences="$AUDIENCE" --include-email)" || exit 1
  printf 'Authorization: Bearer %s\n' "$TOKEN" |
    curl --silent --show-error --output /dev/null --write-out '%{http_code}\n' \
      --header @- "$TEST_URL"
)
```

4. 対象パスで期待する HTTP ステータスを確認する。同じパスへのトークンなしの呼出しも確認し、認証前に本文が取得できないことを確かめる。認証付き呼出しが拒否される場合は、使用した `gate-test`、転送先の Invoker、audience の一致、LB の転送先と ingress を確認する。試験記録には使用 ID・時刻・結果を残し、トークンは記録しない。

Cloud Shell を開き直した場合は、`PROJECT_ID` と `TEST_SA` を再設定する。コマンド単位の代理実行なので、Console のログインや Cloud Shell の既定アカウントの切り替えは不要。同じ作業者が両方のサービスアカウントを使えるため、この構成で確認できるのは各操作の実行主体と付与権限の分離まで。

## 2. ネットワーク、台帳、配備先を準備する

1. 「VPCネットワーク」で専用のカスタムVPCと東京・大阪の専用サブネットを作る。各地域 /24 を開始案として、既存CIDRとの衝突・予約・旧新重複を確認する。Cloud Run配備時は設計対象のサービスにDirect VPCと all-traffic を設定する。Google APIや固定の合成受信先に到達する経路を明示し、任意の外向き宛先へ到達できないことを確認する。[Direct VPCの設定](https://docs.cloud.google.com/run/docs/configuring/vpc-direct-vpc)
2. Firestore Nativeの名前付き安全DBを東京と大阪に1つずつ作成し、DB IDとlocationを記録する。例えば認証済みCloud Shellで、専用プロジェクトIDを PROJECT_ID に入れ、次を実行する。先に同名DBがある場合は既存のlocationと用途を確認する。[Firestoreの作成コマンド](https://docs.cloud.google.com/sdk/gcloud/reference/firestore/databases/create) · [DBのロケーション](https://docs.cloud.google.com/firestore/native/docs/locations)

   ```sh
   gcloud firestore databases create --project="$PROJECT_ID" --database=gate-safety-t --location=asia-northeast1 --type=firestore-native
   gcloud firestore databases create --project="$PROJECT_ID" --database=gate-safety-o --location=asia-northeast2 --type=firestore-native
   gcloud firestore databases list --project="$PROJECT_ID"
   ```

3. 必要な検証ケースに合わせて業務用Firestore、Cloud Tasksの地域別キュー、PDF用の非公開バケット、Secret Managerの検証用シークレットを作る。安全DBは本文を保存しない。要求台帳とSlotは、検証する候補と配置が決まった時点で作る。
4. Artifact Registryにコンテナ用リポジトリを用意する。地域障害や再作成も検証する場合は、大阪側で東京に依存せず同じ成果物を取得できるように準備する。イメージはダイジェストで固定する。
5. return、business、writer、send、safety、PDF用のサービスアカウントを分ける。業務DB書込みはwriter、安全DB更新はsafety、PDF保管はPDF、合成AI受信先への送信はsendに限定する。サービス間のInvokerは呼出し元ごとに付与する。

ここまでが先行して用意できる基盤。現行の[Terraform](../../../../experiments/patient-support-gate-cloud/infra/main.tf)は準備用で、readiness条件により apply が止まる。後続の配備には、両地域の保存と初回本文引渡しを順序付ける部品、および旧世代・既存接続を遮断する候補の実装とイメージが必要。

## 3. 検証候補を配備する

1. 候補イメージのダイジェストと役割設定が揃ったら、第1節 5項の手順で配備用サービスアカウントを使い、各地域に6役割を配備する。大阪の業務5役割は閉鎖した状態で配置し、safetyは東京・大阪の両方を稼働対象にする。サービスは原則認証必須とし、内部役割は内部ingressと宛先別Invokerを使う。

   | 役割                             | vCPU | メモリー | min／max | concurrency |
   | -------------------------------- | ---: | -------: | -------: | ----------: |
   | return・business・writer・safety |    1 |  512 MiB |     0／4 |           8 |
   | send                             |    1 |  512 MiB |     0／4 |           2 |
   | PDF                              |    1 |    1 GiB |     0／2 |           1 |

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

## 5. 環境設定中の確認事項

- 1節1のプロジェクト名→'get-check-1120'

- 1節4の地域ごとの値  
  | リージョン | CPU | メモリ | Direct VPC egress |
  |---|---:|---:|---:|
  | 東京 `asia-northeast1` | 20 vCPU | 40 GiB | 100インスタンス |
  | 大阪 `asia-northeast2` | 20 vCPU | 40 GiB | 100インスタンス |

-
