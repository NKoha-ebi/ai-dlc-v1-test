# 既存アーキテクチャ

単一パッケージの React SPA。フロントエンドのみ。

構成図のテキスト代替: index.html → src/main.tsx → src/App.tsx。main は index.css、App は App.css を読み込む。

操作のテキスト代替: ブラウザーがHTMLを読み込む → main が root を取得 → StrictMode 内に App を描画 → 見出しを表示。

外部API、データベース、認証、永続化、AI接続、画像処理、PDF出力はソース上に存在しない。

インフラ定義・デプロイ定義は見つからない。Vite のローカル開発設定のみ。
