# build ブランチの実装・検証計画

起点は `aldlctest` の `272916f`。直近の設計資料は [S1 検証環境の構築手順](../patient-support-app/infrastructure-design/s1-gate-validation-environment-setup.md) と [共通ゲート具体構成レビュー](../patient-support-app/nfr-design/shared-gate-concrete-review.md)。

- [x] 現在の設計と既存コードを収録したコミットから `build` を作成。
- [x] フロントエンドをビルドし、`dist/index.html` を生成。
- [x] ゲート検証用と安全モデル用の TypeScript 型検査を実行し、既存テスト計81件の成功を確認。
- [ ] S1 に必要な差分を `experiments/patient-support-gate-cloud/src/roles/`、`src/repositories/`、`src/transport.ts` と現行設計で照合する。PG-01（東京・大阪の耐久保存と初回本文引渡し）と PG-02（旧世代・既存接続の遮断）の成立条件、観測点、未確定な設計判断を特定する。
- [ ] 確定した契約に沿って検証候補を実装し、本文なしの合成証跡とローカル試験で確認する。既存のテストから検出できない回帰には試験を追加する。
- [ ] 検証候補のコンテナをビルドして起動を確かめる。現環境では Docker CLI が PATH 上に見当たらないため、イメージの生成と確認には利用可能なビルド環境が必要。

PG-01／02 の合格判定には検証環境で実経路の証拠が必要。Terraform の適用条件と公開保留は既存の設計判断に従う。
