# 患者支援アプリの限定クラウド検証

対象は get-check-1120 の東京。アクセス許可済みのテスターと合成データで CV-01〜07 を確認する。

## 実行時の設定

| 設定名 | 値・用途 |
| --- | --- |
| GOOGLE_CLOUD_PROJECT | get-check-1120 |
| PATIENT_DATABASE | patient-validation |
| PATIENT_ORIGIN | テスターがアクセスする HTTPS オリジン。末尾スラッシュなし |
| FIREBASE_WEB_API_KEY | 対象プロジェクトの Firebase Web アプリ設定 |
| OPENAI_API_KEY | Secret Manager の patient-openai-api-key の有効バージョンを Cloud Run に割り当てる |
| OPENAI_MODEL | 検証用 OpenAI プロジェクトで利用できる Responses API の構造化出力対応モデル |

OpenAI キーは Secret Manager コンソールで登録し、値をチャット、ソース、ビルド引数、ログに出さない。クラウド実行 ID に対象シークレットの読み取りとアプリ専用データベース・認証に必要な権限を設定する。Firebase Authentication のメール・パスワードを有効化し、Web アプリ設定を確認する。

## 検証順

- [x] Vite と切り分けたサーバー、Dockerfile、Cloud Build 設定、認証・保存・AI 接続を追加。
- [x] 東京にアプリ用 Firestore を作成し、安全台帳と別の DB ID を確認。
- [x] ビルド、対象ファイルの lint、既存ローカル HTTP テスト、模擬 OpenAI 応答と注意事項の選別を確認。
- [ ] Firebase Authentication と実キーを設定し、Cloud Run にイメージのダイジェストを指定して配備。
- [ ] HTTPS ロードバランサーからテスターの認証を適用し、未認証・直接経路からのアクセスを確認。
- [ ] 合成相談で登録、実 OpenAI 応答、Firestore 保存、別アカウント拒否、再配備後の復元、退会を確認。

処理中のデータ競合は Firestore の版比較で拒否し、保存失敗時は最後の保存済みデータを維持する。AI 応答は本人が確認できる下書きとして扱う。現在の画面から確認できない薬剤群や照射部位を要する詳細表の判定は対象外。実環境の回復・再試行、負荷、認証、削除の検証結果は配備後に追記する。

## 現環境の接続待ち

- Firebase 設定の API は PERMISSION_DENIED。プロジェクト権限を持つアカウントで Firebase コンソールから対象プロジェクトを追加し、メール・パスワードを有効化する。
- patient-openai-api-key の入れ物は作成済み。OpenAI プロジェクトのキーを Secret Manager で新しいバージョンとして登録する。
- Cloud Run の配備とロードバランサーは接続設定後に実施し、CV-01〜07 の実環境結果は保留。

## イメージ

Cloud Build dfd73cfe-3839-4e9e-870f-5c3fba185e9d が SUCCESS。配備候補は asia-northeast1-docker.pkg.dev/get-check-1120/s1-gate/patient-support@sha256:fe6b49f06e8e5364cc733ce21e38d32b3d724baf7f8e0c844b82cf16eb3be184。
