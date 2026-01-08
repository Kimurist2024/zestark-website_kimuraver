# 詳細設計書
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
│   ├── globals.css               # Tailwind含む全体CSS
│   ├── layout.tsx                # 全体レイアウト（Navbar + 背景）
│   └── page.tsx                  # 1ページ構成のSPAメイン（各セクションを配置）
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # ナビゲーションバー
│   │   └── Footer.tsx            # フッター
│   │
│   ├── background/
│   │   └── StarryBackground.tsx  # 星空背景アニメーション
│   │
│   ├── sections/                 # ページ内の大きなセクションをまとめる
│   │   ├── HomeSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── BlogSection.tsx
│   │   └── ContactSection.tsx
│   │
│   └── ui/                       # 再利用UI（ボタン、カード、タイトルなど）
│       ├── GlowButton.tsx
│       └── Card.tsx
│
├── public/
│   ├── images/                   # 背景写真
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
│   ├── variables.css             # CSS変数・カラーテーマ
│   ├── style.css              # セクションの共通スタイル
│   └── animations.css            # アニメーション一元管理
│
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── tsconfig.json
├── package.json
└── package-lock.json

```
## ページ構成
|ページ名|パス|概要|
|---|---|---|
|ホーム|/sections/HomeSection.tsx|トップページ、全体紹介|
|サービス|/sections/ServicesSection.tsx|ゲーム開発・教育・配信事業の内容|
|会社紹介|/sections/AboutSection.tsx|チーム・理念紹介|
|お問い合わせ|/sections/ContactSection.tsx|連絡フォームやSNSリンク|
|ブログ|/sections/BlogSection.tsx|活動報告・コラム|

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

### ライセンス
このリポジトリの内容は、著作権により保護されています。
無断転載・複製を禁じます
🄫 2025 Zestark All Rights Reserved.

### 検索
node_module以外のディレクトリを検索
```
tree -I "node_module*"
```

### DOM
body
`-header
  |-common-section
  |   |-navi-frame
  |   |   |-nav-contents #HOME
  |   |   |-nav-contents #SERVICES
  |   |   |-nav-contents #ABOUT
  |   |   |-nav-contents #BLOG
  |   |   `-nav-contents #CONTACT
  |   |- footer
  |   |   `- copyright
  |   `- div
  |      `-zestark-logo.svg
  |
  |-home-section
  |  `-button-item
  |    |-go-to-service
  |    `-go-to-contact
  |
  |-services-section
  |   `-card-item
  |     |- card1
  |     |- card2
  |     `- card3
  |
  |-aboutus-section
  | `- aboutus-content
  |     |- campany-introduce
  |     |- future
  |     |- data-item
  |     |  |- data1
  |     |  |- data2
  |     |  `- data3
  |     `- feature-item
  |        |- feature1
  |        |- feature2
  |        `- feature3
  |
  |-blog-section
  |     `- blog-item
  |      |- blog-note
  |      `- blog-qiita
  |
  `-contact-section
   `- mail-content
      |- div      
      |   |- div
      |   |   |- name
      |   |   `- text-name
      |   `- div
      |      |- address
      |      `- text-address
      |- div
      |   |- subject
      |   `- text-subject
      |
      |- div
      |  |- messeage
      |  `- text-messeage
      |
      |- submit
      |
      `- sns-icon-item
          |- div
          |   `- discord-icon.svg
          |- div
          |   `- X-icon.svg
          `- div
             `- github-icon.svg

### DOM補足（コンポーネント仕様）
1. card-item
TypeScriptで配列から生成
内包要素：
icon
h3
p
a（詳しく見る）
2. data-item
text
div.detail
3. feature-item
icon
h3
p
4. blog-item
記事タイトル
a（続きを読む）

### HomeSection
サイト全体の概要を簡潔に提示
Services / Contact への導線を配置
### ContactSection フォーム仕様
1. name：text（必須）
2. address：email（必須）
3. subject：text
4. message：textarea（必須）
5. submit：POST（実装方法未定）
## 見出し設計ルール
h1：サイト全体で1つ（サイト名）
h2：各セクションのタイトル
h3：カード・機能単位の見出し

```
## リンク
### Figma
https://www.figma.com/design/82dGln3IyABPoP3B7cLhrX/%E4%BA%8B%E6%A5%AD%E7%94%A8Web%E3%82%B5%E3%82%A4%E3%83%88?node-id=10-18&p=f&t=9dYZgpLP64xEG2w4-0

### Github
https://github.com/Magiri1115/zestark-website