# ローカル検証用ツールのインストール手順（Windows）

> 更新：計画レビュー回答Aに基づき、エージェントが試作専用フォルダーへ依存導入を実施済み。Node.js 24.12.0／npm 11.6.2で型検査・26テストが成功。利用者による重複インストールは不要。同じ環境を再構築する場合は以下のnpm.cmd ciを使用する。[実施結果](local-validation-summary.md)を参照。以下の「未生成」「未導入」は資料作成時の履歴。

2026-11-12。試作計画に付随する準備資料。現時点では試作パッケージとlockfileは未生成のため、以下の依存導入・試験コマンドは生成後に実行する。今回は手順の作成と既存環境の確認のみで、インストールは実施していない。

## 必要なもの

| ツール | 用途 | 導入先 |
| --- | --- | --- |
| Node.js | TypeScriptの試験を動かす実行環境 | PC。既存版が条件を満たせば追加インストール不要 |
| npm | 依存パッケージの取得 | Node.jsとともに利用する |
| TypeScript | 型検査 | 試作専用パッケージの開発依存 |
| Vitest | 固定シナリオのテスト | 同上 |
| fast-check | ランダム入力・順序を使う性質テスト | 同上 |
| Vite・Node.jsの型定義等 | テスト環境の依存と型 | 必要なものを専用package.jsonで固定 |

Docker、Python、Firebase CLI、Google Cloud CLI、Playwright用ブラウザー、外部AIキーは今回のメモリー上のモデル検証には不要。

## 1. 現在のNode.jsとnpmを確認する

PowerShellで実行する。

```powershell
node --version
npm.cmd --version
```

この作業環境ではNode.js v24.12.0を確認した。Vitestの公式移行資料では5.0の要件をNode.js 22.12.0以上・Vite 6.4.0以上としているため、このNode.jsは同要件の数値条件を満たす。実際に採用する依存バージョンの組合せはコード生成時に公式情報とインストール結果で確認し、package.jsonとpackage-lock.jsonへ固定する。既存のNode.jsをこの手順のために更新する必要は現時点ではない。[Vitest公式移行資料](https://vitest.dev/guide/migration/)

この環境ではPowerShellの実行ポリシーによりnpm.ps1が拒否されたため、Windowsのnpm.cmdを使う。実行ポリシーの変更は不要。

## 2. Node.jsが入っていない場合だけ導入する

1. [Node.js公式ダウンロード](https://nodejs.org/en/download/)を開く。
2. Windows用のLTS版インストーラー（.msi）を選ぶ。PCのアーキテクチャに合わせる。
3. インストーラーでNode.js、npm、PATHへの追加を有効にして導入する。今回の検証向けに追加のネイティブビルドツールを導入する必要はない。
4. PowerShellを開き直し、手順1の2コマンドで確認する。

管理対象PCでインストール権限が必要な場合は、そのPCの管理手順に従う。

## 3. 試作コード生成後に専用依存を入れる

実行前提：コード生成計画に従って専用package.jsonとpackage-lock.jsonが作成済みであること。まだない場合はここで止める。ルートでnpm initやパッケージ追加をする必要はない。

```powershell
Set-Location -LiteralPath 'C:\Users\khr85\Documents\ai-dlc-v1-test\experiments\patient-support-safety'
Test-Path -LiteralPath package.json
Test-Path -LiteralPath package-lock.json
npm.cmd ci
```

両方のTest-PathがTrueであることを確認してからnpm.cmd ciを実行する。lockfileに記録された依存を試作側のnode_modulesへ導入する。初回取得にはインターネット接続が必要。既存ルートのpackage.json・lockfileは変更しない。

最初のlockfile作成はコード生成手順1で担当する。利用者が最新版のパッケージを個別に追加すると検証した組合せが変わるため、この手順では専用lockfileを用いる。

fast-checkは公式にnpmの開発依存として導入する方式が案内されている。今回もグローバルインストールは不要。[fast-check公式導入手順](https://fast-check.dev/docs/introduction/getting-started/)

## 4. 導入結果を確認する（試作生成後）

同じ専用ディレクトリで実行する。

```powershell
npm.cmd ls --depth=0
npm.cmd run typecheck
npm.cmd test
npm.cmd run test:properties
```

型検査が成功し、固定シナリオとPBTの試験結果が表示されれば導入確認完了。合格件数と使用バージョンは試作実施時の結果報告へ記録する。現時点で試験成功を確認したという意味ではない。

## よくある場合

追加の実HTTP・別プロセス試作も、既存Node.jsの組込みhttp・child_processと同じテスト依存を使用する。追加インストールは不要。試作コード生成後、同じ専用ディレクトリで `npm.cmd run test:http` を実行する。PC内127.0.0.1の一時ポート待受けと子プロセス起動が必要。環境の権限制限で拒否される場合は環境の承認機構に従う。外部公開やクラウド接続は不要。

- nodeが見つからない：インストール後にターミナルを開き直し、PATHへ追加されたか確認する。
- npmのスクリプト実行が拒否される：この資料のとおりnpm.cmdを使う。
- package.json／lockfileがない：試作生成前、または現在のディレクトリが違う。ファイルを手動で仮作成せず、生成完了を確認する。
- npm ciで不整合が出る：package.jsonとlockfileの対応を確認する。lockfileを削除して最新版へ更新せず、対応する生成物を使う。
- ネットワークや権限で取得できない：エラーを保存し、組織のプロキシ・取得権限に沿って解決する。TLS検証を無効化しない。

通常Markdown・表・PowerShellのコードブロックで構成。コマンドは実行段階と前提を分離して検証した。図なし。ツール導入の説明であり、コード生成計画の承認・クラウド契約・外部送信には当たらない。
