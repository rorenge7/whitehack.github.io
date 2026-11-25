---
title: 名刺情報の自動取り込み・活用システム
client: 一般社団法人
category: AI・業務の自動化
stack: [Next.js, Prisma, PostgreSQL, Google Cloud Vision, Gemini, n8n]
date: 2026-06-01
order: 6
---

名刺の整理と活用にかかる手作業を、ほぼ自動にする仕組みです。

## 取り組み

- Googleドライブに置いた名刺画像を自動で読み取り、文字認識と生成AIで会社名・氏名などの項目を抽出・整えてデータベースに保存します。
- Web画面での一覧・編集・重複の統合・CSV入出力に加え、メール配信リストへの同期までを自動化しました。
