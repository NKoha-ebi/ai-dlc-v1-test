# コード構造

- src/main.tsx: React起動、StrictMode、グローバルCSS。
- src/App.tsx: 接続確認見出しとインラインレイアウト。default export App。
- src/App.css: テンプレート由来のクラス群。現在の画面では多くが未使用。
- src/index.css: 配色、フォント、rootレイアウト、ダークモード。
- src/assets/: hero.png、react.svg、vite.svg。現在のAppで参照なし。
- public/: favicon.svg、icons.svg。
- index.html: root要素、英語のlang属性、アプリ名のtitle。
- package.json / package-lock.json: npm依存関係とスクリプト。
- vite.config.ts: Reactプラグイン。
- tsconfig*.json: TypeScript設定とプロジェクト参照。
- eslint.config.js: TypeScript、React Hooks、React Refreshのlint設定。
- README.md: 学習目的とテンプレート説明。
- AGENTS.md / .aidlc-rule-details/: 開発ワークフロー。
- まとめ.md: 空ファイル。

ビルド: npm run build は tsc -b の後に vite build。開発: npm run dev。静的検査: npm run lint。
