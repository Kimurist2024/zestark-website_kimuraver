# 事業サイト要件定義書
## プロジェクト概要
本プロジェクトは、インディーゲーム開発・プログラミング教育・コンテンツ配信事業を紹介する企業用Webサイトです。

## 目的
1. 事業内容の明確な説明
2. 企業イメージ・ブランド価値の向上
3. 問い合わせ・SNS導線の確保
4. ブログによる活動発信
## ターゲットユーザー
1. ゲーム開発・IT分野に興味のある個人
2. プログラミング学習者
3. 業務委託・開発依頼を検討している企業・個人

## ページ構成
|ページ名|パス|概要|
|---|---|---|
|ホーム|/sections/HomeSection.tsx|トップページ、全体紹介|
|サービス|/sections/ServicesSection.tsx|ゲーム開発・教育・配信事業の内容|
|会社紹介|/sections/AboutSection.tsx|チーム・理念紹介|
|お問い合わせ|/sections/ContactSection.tsx|連絡フォームやSNSリンク|
|ブログ|/sections/BlogSection.tsx|活動報告・コラム|

## 対応デバイス
1. PC
2. タブレット
3. スマートフォン
## 運営情報
事業名：Zestark
主な事業：
インディーゲーム開発
プログラミング教育
コンテンツ配信

## デプロイ（Vercel）
Vercelにログインし、GitHubリポジトリをインポート。
自動で Next.js プロジェクトとして認識。
npm run build が実行され、自動でデプロイ完了。

デプロイ後、URL例：
https://zestark.com

## README
- README.md：概要・セットアップ
- README_shousai.md：設計思想・仕様詳細