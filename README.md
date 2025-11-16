# 事業サイト詳細設計書
## プロジェクト概要
本プロジェクトは、インディーゲーム開発・プログラミング教育・コンテンツ配信事業を紹介する企業用Webサイトです。

## 使用技術
|区分|使用技術|
|---|---|
|言語|TypeScript / JavaScript / HTML / CSS|
|フレームワーク|Next.js 15（App Router構成）|
|スタイリング|Tailwind CSS / CSS Modules|
|開発環境|VSCode|
|デプロイ|Vercel|
|バージョン管理|GitHub|

## セットアップ手順
### node.jsのインストール
node -v
でパスの確認
### 依存関係のインストール
npm install
### 開発サーバーの起動
npm run dev

ブラウザで次を開く：
http://localhost:3000

## ディレクトリ構成
```

zestark-website/
├── README.md
│
├── app/
│   ├── favicon.ico
│   ├── globals.css               # 全体共通スタイル（Tailwind含む）
│   ├── layout.tsx                # 全体レイアウト（Navbar + iframeコンテナ）
│   └── page.tsx                  # メインページ（iframeと連動）
│
├── components/
│   ├── c-layout/
│   │   └── Navbar.tsx            # ナビゲーションバー（ボタンでiframe切替）
│   └── frame-container.tsx        # iframe管理用コンポーネント
|   └── starry-background.tsx     # 背景管理用コンポーネント
|
|
├── pages/
│   └── iframe/                   # 自動生成されるHTMLファイル群（出力先）
│       ├── home.html
│       ├── services.html
│       ├── about.html
│       ├── contact.html
│       └── blog.html
│
├── public/
│   ├── images/
│   │   ├── bg-home.jpg
│   │   ├── bg-services.jpg
│   │   ├── bg-about.jpg
│   │   └── bg-contact.jpg
│   ├── icons/
│   │   ├── file.svg
│   │   ├── globe.svg
│   │   ├── next.svg
│   │   ├── vercel.svg
│   │   └── window.svg
│   └── logo.svg
│
├── styles/
│   ├── variables.css             # カラーテーマ・CSS変数
│   ├── globals.css               # page.tsxのCSS変数
│   ├── iframe.css                # iframe内ページ共通スタイル
│   └── templates/                # HTMLテンプレート共通パーツ
│       ├── head.html             # 共通<head>タグ部分
│       └── footer.html           # 共通<footer>タグ部分
│
├── scripts/                      # TypeScriptスクリプトでHTMLを自動生成
│   ├── data/
│   │   └── pages.ts              # 各ページの内容を定義（タイトル・本文など）
│   ├── templates/
│   │   └── baseTemplate.ts       # HTMLテンプレート関数
│   └── generateHtml.ts           # 自動生成スクリプトのメイン
│
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── tsconfig.json
├── package.json
└── package-lock.json

```

## 構成のポイント
|構成要素|役割|
|---|---|
|app/|Next.jsのApp Routerルート<br>layout.tsxにNavbar+iframe構成を実装|
|app/layout.tsx|全体レイアウト定義<br>Navbar+iframe領域を配置|
|app/page.tsx|メインページ<br>Navbarからiframeのsrcを制御|
|Navbar.tsx|各ページボタン（Home / Services / About / Contact / Blog）を提供|
|FrameContainer.tsx|iframeのsrcを受け取り<br>コンテンツを動的に切り替える|
|pages/iframe/*.html|実際の事業紹介ページ<br>静的HTMLとしてiframe内で表示される|
|public/images/|背景・ロゴなどの静的リソース|
|styles/|共通CSSとiframeページ用CSSを分離|
|components/layout/Navbar.tsx|iframeの切替を行うナビゲーションバー<br>状態管理（useState）でURL変更|
|components/FrameContainer.tsx|iframeを1つだけ配置し、Navbarの操作に応じて表示内容を切り替える|
|pages/iframe/|各事業ページを独立した静的HTMLとして配置<br>iframeで読み込まれる対象|
|public/|静的ファイル（画像・SVG・ロゴ）<br>Next.jsが自動配信|
|styles/|CSS変数・iframe専用スタイルなど、Next.jsのグローバルCSS外に分離|


## ページ構成
|ページ名|パス|概要|
|---|---|---|
|ホーム|/iframe/home.html|トップページ、全体紹介|
|サービス|/iframe/services.html|ゲーム開発・教育・配信事業の内容|
|会社紹介|/iframe/about.html|チーム・理念紹介|
|お問い合わせ|/iframe/contact.html|連絡フォームやSNSリンク|
|ブログ|/iframe/blog.html|活動報告・コラム|

## デプロイ（Vercel）
Vercelにログインし、GitHubリポジトリをインポート。
自動で Next.js プロジェクトとして認識。
npm run build が実行され、自動でデプロイ完了。

デプロイ後、URL例：
https://zestark.com

## ブランチ運用ルール
|ブランチ名|運用用途|使用用途|マージ条件|
|---|---|---|---|
|main|本番運用用ブランチ。|Vercelなどへのデプロイ対象。|動作が安定しており、リリース可能な状態のみをマージ。|
|develop|開発の中心となるブランチ。|機能追加・修正ブランチの統合先。|動作確認済みのコードを随時マージ。|mainへのマージ前に最終レビューを実施。|
|test|検証・テスト専用ブランチ。|新機能や修正の動作確認、デザイン確認などに使用。|動作確認後、問題なければdevelopへマージ。|

## 補足
### Next.jsとiframe
1. iframeを使う構成のため、Next.jsのルーティング機能は使用しません。<br>
→ Reactによる状態管理（useState）でiframeのsrcを切り替えます。<br>
→ navigationbarやボタンをReactコンポーネントとして使用するため。<br>
Next.js構成をベースに、Navbar＋iframeで全ページを1画面に収めるWebサイト。<br>
「画面遷移せずに、iframe内で各ページを切り替える」スタイルのNext.js版SPA（Single Page Application）構成にしています。<br>
### レスポンシブ
本サイトはPC版・タブレット版・スマホ版に対応しています。
|デバイス種別|画面幅(px)|対応内容|
|---|---|---|
|**PC版**|`960px以上`|最大レイアウト。ナビゲーション常時表示。|
|**タブレット版**| `768px～960px`||
|**スマホ版**| `368px～767px`||

```
/* スマホ */
@media (max-width: 767px) {
  /* スマホ用スタイル */
}

/* タブレット */
@media (min-width: 768px) and (max-width: 960px) {
  /* タブレット用スタイル */
}

/* PC */
@media (min-width: 960px) {
  /* PC用スタイル */
}
```
### 参考ホームページ
|ホームページ名|リンク|参考部品|どう生かすか|
|---|---|---|---|
|キネマシトラス|"https://kinemacitrus.biz/#"|ナビゲーションウィンドウ<br>フッター|要素のレイアウトをオマージュ|
|スプラトゥーン（英語版）|"https://splatoon.nintendo.com/base/"|カスタマーサポート要素|画面下部にリンクと🄫マークを付ける|

### 運営
- 事業名: Zestark
- 主な事業: Webシステム開発及びソフトウェア開発 / IT教育事業 / コンテンツ配信
- 所在地: 
- 代表者: 

### ライセンス
このリポジトリの内容は、著作権により保護されています。
無断転載・複製を禁じます
🄫 2025 Zestark All Rights Reserved.

### 検索
node_module以外のディレクトリを検索
```
tree -I "node_module*"
```
## リンク
### Figma
https://www.figma.com/design/82dGln3IyABPoP3B7cLhrX/%E4%BA%8B%E6%A5%AD%E7%94%A8Web%E3%82%B5%E3%82%A4%E3%83%88?node-id=10-18&p=f&t=9dYZgpLP64xEG2w4-0

### Github
https://github.com/Magiri1115/zestark-website

