# S1 共通ゲート検証環境の構築手順

東京・大阪に合成データ専用のGoogle Cloud環境を用意する。構成は[S1具体構成レビュー](../nfr-design/shared-gate-concrete-review.md)第2〜3節、試験の合否は同第4・6・12節を参照する。S1は第一検証候補。PG-01／02の実経路での成立を確認してから採用を判断する。

## 1. Google Cloud プロジェクトと準備情報

1. Google Cloud Consoleの「IAMと管理 → プロジェクトの作成」で、既存β・本番と別の検証専用プロジェクトを作成する。環境IDには gate-check- で始まる名前を使う。プロジェクトID、所有者、終了予定日を記録する。
2. 「お支払い」で検証用の課金先を紐づけ、プロジェクト単位の予算アラートと通知先を設定する。予算アラートは自動停止を行わないため、費用枠に到達した場合の停止担当も決めておく。
3. 「APIとサービス → ライブラリ」で Cloud Run、Compute Engine、Artifact Registry、Firestore、Cloud Tasks、Cloud Storage、Secret Manager、Cloud Logging、Cloud Monitoring を有効化する。Cloud Buildでイメージを作る場合はCloud Buildも有効化する。LBで証明書を管理する方式に合わせてCertificate Managerを追加する。
4. 「IAMと管理 → 割り当てとシステム上限」で、東京（asia-northeast1）と大阪（asia-northeast2）のCloud Run CPU・メモリー・Direct VPCの地域枠を確認する。20 vCPU枠での検証は第3節の地域当たり14 vCPUの計画値を使う。実際の割当値を記録する。
5. 作業者は1人なので、Console と Cloud Shell には同じ Google アカウントでログインする。初期設定と IAM 管理はそのアカウントで行い、Cloud Run の配備と合成リクエストの試験では、操作ごとに下記の専用サービスアカウントを使う。

### 1-5. 作業者1人での IAM 設定と ID の使い分け

| 操作                                                 | 使用する ID                           | 付与先と権限                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| API 有効化、VPC・LB の構築、IAM 設定、検証ログの確認 | 作業者の Google アカウント            | 検証プロジェクトの初期設定権限。通常の検証ログを読む権限が不足する場合は、対象プロジェクトに Logs Viewer（`roles/logging.viewer`）を付与する。                                                                                                                                             |
| 既存イメージの Cloud Run 配備                        | `gate-deploy`                         | 検証プロジェクトに Cloud Run Developer（`roles/run.developer`。初回作成のためプロジェクト単位）、対象イメージのリポジトリに Artifact Registry Reader（`roles/artifactregistry.reader`）、配備先で使う各実行用サービスアカウントに Service Account User（`roles/iam.serviceAccountUser`）。 |
| LB 経由の合成リクエスト                              | `gate-test`                           | 第3節で作成した呼出し対象の return サービスごとに Cloud Run Invoker（`roles/run.invoker`）。東京・大阪のうち実際に LB の転送先になるサービスに付与する。                                                                                                                                   |
| アプリ実行中の DB・キュー・サービス等へのアクセス    | 第2-4節の各実行用サービスアカウント | 各役割に必要なリソースの権限と、呼出し先ごとの Invoker。                                                                                                                                                                                                                                   |

**初期設定（作業者の Google アカウント）**

1. Console で第1節 1項の検証プロジェクトを選択し、プロジェクトセレクタで実際のプロジェクト ID を控える。「API とサービス → ライブラリ」で **IAM Service Account Credentials API**（`iamcredentials.googleapis.com`）を有効にする。
2. 「IAM と管理 → サービス アカウント → サービス アカウントを作成」で `gate-deploy` と `gate-test` を作成する。作成画面の任意の権限設定はスキップし、作成後に対象リソースごとに設定する。JSON キーは作成しない。
3. サービス アカウント一覧から `gate-deploy` を選択し、「権限 → アクセスを許可」で自分の Google アカウントに Service Account Token Creator（`roles/iam.serviceAccountTokenCreator`）を付与する。`gate-test` では同じ手順で Service Account OpenID Connect Identity Token Creator（`roles/iam.serviceAccountOpenIdTokenCreator`）を付与する。それぞれのサービスアカウントの IAM に設定する。
4. 「IAM と管理 → IAM」で `gate-deploy` に Cloud Run Developer を付与する。第2節でリポジトリと実行用サービスアカウントを作ったら、Artifact Registry の対象リポジトリの「権限」で Reader を付与し、各実行用サービスアカウントの「権限」で Service Account User を付与する。[サービスアカウントの権限](https://docs.cloud.google.com/iam/docs/service-account-permissions) · [Cloud Run の配備権限](https://docs.cloud.google.com/run/docs/reference/iam/roles)

**Cloud Run の配備（第3-1節）**

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
  --cpu=1 --memory=512Mi --min-instances=0 --max-instances=2 --concurrency=8
```

`--impersonate-service-account` はそのコマンドの配備主体を切り替え、`--service-account` はコンテナの実行 ID を指定する。配備後は作業者の Google アカウントで Cloud Run サービスの認証設定を確認し、Invoker IAM チェックが有効で、`allUsers` や `allAuthenticatedUsers` に Invoker が付与されていないことを確認する。IAM の変更も作業者の Google アカウントで行う。[サービスアカウントの代理実行](https://docs.cloud.google.com/docs/authentication/use-service-account-impersonation) · [Direct VPC の設定](https://docs.cloud.google.com/run/docs/configuring/vpc-direct-vpc)

**LB 経由の試験（第3-2節・第3-3節）**

1. 作業者の Google アカウントで、Cloud Run の呼出し対象となる各 return サービスの「権限」に `gate-test` を追加し、Cloud Run Invoker を付与する。内部サービス間の呼出しには第2-4節の実行用サービスアカウントを使う。
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

以下は **Cloud Shell の Bash** 用。Windows の VS Code から作業する場合も Bash で実行する。各ブロックを順に実行し、作成コマンドが失敗したら原因を確認してから次へ進む。すでにある資源は一覧と設定を照合して再利用する。

```bash
PROJECT_ID='Consoleで確認したS1のプロジェクトID'
T_REGION=asia-northeast1
O_REGION=asia-northeast2
VPC=s1-gate-vpc
T_SUBNET=s1-gate-t
O_SUBNET=s1-gate-o
REPO=s1-gate
DEPLOY_SA="gate-deploy@${PROJECT_ID}.iam.gserviceaccount.com"
TEST_SA="gate-test@${PROJECT_ID}.iam.gserviceaccount.com"

gcloud auth list --filter=status:ACTIVE
gcloud projects describe "$PROJECT_ID" --format='table(projectId,name,lifecycleState)'
gcloud compute networks subnets list --project="$PROJECT_ID"
gcloud firestore databases list --project="$PROJECT_ID"
gcloud artifacts repositories list --project="$PROJECT_ID"
gcloud iam service-accounts list --project="$PROJECT_ID"
```

### 2-1. 専用 VPC とサブネット

以下の CIDR は開始案。既存・接続予定のネットワークと重複せず、旧新リビジョンが同時稼働しても収まることを確認する。Private Google Access を有効にする。配備前に Google API と固定の合成受信先への DNS・ルート・宛先制御を確定し、許可先だけに到達することを検証する。Private Google Access と `all-traffic` の設定だけでは宛先制御は成立しない。

```bash
gcloud compute networks create "$VPC" --project="$PROJECT_ID" --subnet-mode=custom
gcloud compute networks subnets create "$T_SUBNET" --project="$PROJECT_ID" \
  --network="$VPC" --region="$T_REGION" --range=10.74.10.0/24 --enable-private-ip-google-access
gcloud compute networks subnets create "$O_SUBNET" --project="$PROJECT_ID" \
  --network="$VPC" --region="$O_REGION" --range=10.74.20.0/24 --enable-private-ip-google-access
```

### 2-2. 安全 DB とイメージ格納先

```bash
gcloud firestore databases create --project="$PROJECT_ID" --database=gate-safety-t \
  --location="$T_REGION" --type=firestore-native
gcloud firestore databases create --project="$PROJECT_ID" --database=gate-safety-o \
  --location="$O_REGION" --type=firestore-native
gcloud firestore databases list --project="$PROJECT_ID"

for region in "$T_REGION" "$O_REGION"; do
  gcloud artifacts repositories create "$REPO" --project="$PROJECT_ID" \
    --location="$region" --repository-format=docker || break
  gcloud artifacts repositories add-iam-policy-binding "$REPO" --project="$PROJECT_ID" \
    --location="$region" --member="serviceAccount:$DEPLOY_SA" \
    --role=roles/artifactregistry.reader || break
done
```

安全 DB は本文を保存しない。大阪側の独立した再作成を検証する場合は、大阪のリポジトリにも同じ成果物を用意し、地域ごとに配備するダイジェストを記録する。

### 2-3. 検証ケースに応じた資源

業務 DB の配置、キューの配送先と上限、PDF バケット名、シークレットの用途を候補設定で確認してから選択して実行する。キューは試験開始まで停止しておく。要求台帳と Slot は候補の初期化手順で作る。

```bash
BUSINESS_DB='設計で確定した業務DBのID'
BUSINESS_REGION='設計で確定した業務DBの地域'
PDF_BUCKET='全GCSで一意のS1用バケット名'
SECRET_ID='候補設定に合わせた合成試験用シークレット名'

gcloud firestore databases create --project="$PROJECT_ID" --database="$BUSINESS_DB" \
  --location="$BUSINESS_REGION" --type=firestore-native
for region in "$T_REGION" "$O_REGION"; do
  gcloud tasks queues create s1-gate --project="$PROJECT_ID" --location="$region" || break
  gcloud tasks queues pause s1-gate --project="$PROJECT_ID" --location="$region" || break
done
gcloud storage buckets create "gs://$PDF_BUCKET" --project="$PROJECT_ID" \
  --location="$T_REGION" --uniform-bucket-level-access --public-access-prevention
gcloud secrets create "$SECRET_ID" --project="$PROJECT_ID" --replication-policy=user-managed \
  --locations="$T_REGION,$O_REGION"
# 必要な場合のみ、SYNTHETIC_SECRET_FILE に合成試験用ファイルのパスを設定して登録
gcloud secrets versions add "$SECRET_ID" --project="$PROJECT_ID" --data-file="$SYNTHETIC_SECRET_FILE"
```

### 2-4. 実行用サービスアカウント

```bash
for role in return business writer send safety pdf; do
  sa="s1-$role@${PROJECT_ID}.iam.gserviceaccount.com"
  gcloud iam service-accounts create "s1-$role" --project="$PROJECT_ID" || break
  gcloud iam service-accounts add-iam-policy-binding "$sa" --project="$PROJECT_ID" \
    --member="serviceAccount:$DEPLOY_SA" --role=roles/iam.serviceAccountUser || break
done
```

候補の呼出し表に従って権限を割り当てる。業務 DB の書込みは writer、安全 DB の更新は safety、PDF 保管は pdf、合成 AI 受信先への送信は send に限定する。Firestore の権限は対象 DB への条件付きバインディング等で絞り、広域の権限で代用しない。PDF がオブジェクトを新規作成するだけの場合の例を示す。読取りや削除が必要なら候補の契約に合わせる。

```bash
gcloud storage buckets add-iam-policy-binding "gs://$PDF_BUCKET" --project="$PROJECT_ID" \
  --member="serviceAccount:s1-pdf@${PROJECT_ID}.iam.gserviceaccount.com" \
  --role=roles/storage.objectCreator
```

現行の[Terraform](../../../../experiments/patient-support-gate-cloud/infra/main.tf)は準備用で、readiness 条件により apply が止まる。第3節は、両地域の保存と初回本文引渡しを順序付ける部品、旧世代・既存接続を遮断する候補、役割別の設定が揃ってから実行する。

## 3. 検証候補を配備する

### 3-1. 役割ごとの Cloud Run 配備

地域ごとに return・send は最大2、business・writer・safety・PDF は最大1とし、1インスタンス当たり1 vCPUとする。6役割の8 vCPU、return・sendの旧新重複4 vCPU、追加部品2 vCPUを合わせ、計画値は地域当たり14 vCPU。使用量が16 vCPUに達した地域では新規試行を止め、必要な資源や試験証拠を確保できなければ判定を保留する。

以下の関数は1サービスずつ配備する。候補が実際に読み込む役割別の環境変数ファイルと、対象地域の Artifact Registry にあるダイジェスト付きイメージを渡す。大阪の業務5役割は設計上の閉鎖設定を投入し、safety は両地域で稼働させる。初回は東京 return だけを LB に接続する。大阪 return の追加は大阪側で閉鎖・開放を制御できることを確認した比較試験時に行う。

```bash
HOST='管理しているS1用のDNSホスト名'
AUDIENCE="https://$HOST"

deploy_role() {
  local region="$1" subnet="$2" service="$3" role="$4" image="$5" env_file="$6"
  local ingress=internal memory=512Mi max=1 concurrency=8
  local -a audiences=()
  [[ "$image" =~ @sha256:[0-9a-f]{64}$ && -r "$env_file" ]] || return 2
  case "$role" in
    return) ingress=internal-and-cloud-load-balancing; max=2; audiences=(--add-custom-audiences="$AUDIENCE") ;;
    send) max=2; concurrency=2 ;;
    pdf) memory=1Gi; concurrency=1 ;;
    business|writer|safety) ;;
    *) return 2 ;;
  esac
  gcloud run deploy "$service" --project="$PROJECT_ID" --region="$region" \
    --impersonate-service-account="$DEPLOY_SA" --image="$image" \
    --service-account="s1-$role@${PROJECT_ID}.iam.gserviceaccount.com" \
    --env-vars-file="$env_file" --ingress="$ingress" \
    --invoker-iam-check --no-allow-unauthenticated \
    --network="$VPC" --subnet="$subnet" --vpc-egress=all-traffic \
    --cpu=1 --memory="$memory" --min-instances=0 --max-instances="$max" \
    --concurrency="$concurrency" "${audiences[@]}"
}

# 候補の東京 return を配備する例
deploy_role "$T_REGION" "$T_SUBNET" s1-return-t return "$T_IMAGE" "$T_RETURN_ENV_FILE"
```

新規作成後、作業者の Google アカウントで宛先別の Invoker を付与する。以下は東京 return の試験用。内部サービスも、呼出し表に載る実行 ID だけを各宛先に付与する。既存サービスを再利用する場合は先に IAM を照合し、公開メンバーがないことを確認する。

```bash
gcloud run services add-iam-policy-binding s1-return-t --project="$PROJECT_ID" \
  --region="$T_REGION" --member="serviceAccount:$TEST_SA" --role=roles/run.invoker
gcloud run services get-iam-policy s1-return-t --project="$PROJECT_ID" --region="$T_REGION"
```

### 3-2. HTTPS ロードバランサ

次はグローバル外部 Application Load Balancer の例。東京 return の認証と閉鎖設定を確認後に実行する。既存 LB を使う場合は名前と構成を照合し、以下の新規作成は必要な資源に限る。[Google Cloud の構築例](https://docs.cloud.google.com/load-balancing/docs/https/setup-global-ext-https-serverless)

```bash
gcloud compute addresses create s1-gate-ip --project="$PROJECT_ID" --global --ip-version=IPV4
gcloud compute network-endpoint-groups create s1-return-t-neg --project="$PROJECT_ID" \
  --region="$T_REGION" --network-endpoint-type=serverless --cloud-run-service=s1-return-t
gcloud compute backend-services create s1-return-backend --project="$PROJECT_ID" \
  --global --load-balancing-scheme=EXTERNAL_MANAGED --protocol=HTTP
gcloud compute backend-services add-backend s1-return-backend --project="$PROJECT_ID" \
  --global --network-endpoint-group=s1-return-t-neg --network-endpoint-group-region="$T_REGION"
gcloud compute url-maps create s1-return-map --project="$PROJECT_ID" \
  --global --default-service=s1-return-backend
gcloud compute ssl-certificates create s1-return-cert --project="$PROJECT_ID" \
  --global --domains="$HOST"
gcloud compute target-https-proxies create s1-return-https --project="$PROJECT_ID" \
  --global --url-map=s1-return-map --ssl-certificates=s1-return-cert
gcloud compute forwarding-rules create s1-return-443 --project="$PROJECT_ID" \
  --global --load-balancing-scheme=EXTERNAL_MANAGED --address=s1-gate-ip \
  --target-https-proxy=s1-return-https --ports=443
gcloud compute addresses describe s1-gate-ip --project="$PROJECT_ID" \
  --global --format='value(address)'
```

表示された IP に向けて、管理している DNS ゾーンで `$HOST` の A レコードを設定する。Cloud DNS を使う場合の例を示す。既存レコードがある場合は内容と用途を確認してから変更する。

```bash
DNS_ZONE='管理対象のCloud DNSゾーン名'
LB_IP="$(gcloud compute addresses describe s1-gate-ip --project="$PROJECT_ID" --global --format='value(address)')"
gcloud dns record-sets create "${HOST}." --project="$PROJECT_ID" \
  --zone="$DNS_ZONE" --type=A --ttl=300 --rrdatas="$LB_IP"
gcloud compute ssl-certificates describe s1-return-cert --project="$PROJECT_ID" \
  --global --format='yaml(managed.status,managed.domainStatus)'
```

DNS が別プロジェクトまたは別事業者にある場合は、その DNS の管理手段で設定する。証明書が `ACTIVE` になったら第1節の認証あり・なしの合成リクエストを実施する。大阪を比較対象にする際は、対象 return に同じ audience と試験用 Invoker を設定し、大阪の serverless NEG を同じバックエンドに追加する。

### 3-3. 合成試験と証拠

send の固定宛先に合成 AI 受信サービスを接続し、返却側には LB 経由の合成クライアントを置く。候補に最終送出部品がある場合は TLS 終端・接続・バッファの実経路を記録し、既存直通経路を閉じる。入口・送出点・合成受信先で操作・試行・接続 ID、世代、最初の耐久保存と本文引渡しの順序を照合する。本文はログに残さない。旧 revision・保持接続・地域間伝播保留は候補の合成試験ドライバーで実施する。

## 4. 検証担当へ引き渡す

引渡し時には次の読み取り専用コマンドで構成を照合する。収集した実行結果を引渡し記録に添え、トークンやシークレット値は含めない。

```bash
gcloud firestore databases list --project="$PROJECT_ID"
for region in "$T_REGION" "$O_REGION"; do
  gcloud run services list --project="$PROJECT_ID" --region="$region"
done
gcloud compute backend-services describe s1-return-backend --project="$PROJECT_ID" --global
gcloud compute forwarding-rules describe s1-return-443 --project="$PROJECT_ID" --global
```

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
