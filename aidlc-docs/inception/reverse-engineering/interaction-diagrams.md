# 操作とコンポーネントの関係

テキストによる相互作用図:

1. 閲覧者がページを開く。
2. ブラウザーが index.html と src/main.tsx を読み込む。
3. main が createRoot で root に StrictMode と App を描画する。
4. App が「Codex接続テスト」を表示する。

患者登録・疾患選択・対話・共有カード作成については、現行コードに操作経路が存在しない。
