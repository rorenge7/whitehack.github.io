# whitehack.io

株式会社白白のコーポレートサイト（Astro）。

## 開発

```sh
npm install
npm run dev     # http://localhost:4321
npm run build   # dist/ に静的ファイルを出力
```

## コンテンツの追加

Markdown ファイルを置くだけでページと一覧に反映されます。

| 追加するもの | 置き場所 | 主な項目 |
| --- | --- | --- |
| 自社サービス | `src/content/services/*.md` | `name` `catch` `color`（red / orange / yellow） `status` `url` `order` `published` |
| 実績 | `src/content/works/*.md` | `title` `client` `category` `period` `stack` `date` `published` |
| お知らせ・ブログ | `src/content/news/*.md` | `title` `date` `category`（お知らせ / ブログ） `published` |

- `published: false` にするとサイトに出ません（屋号で運営するサービスなど）
- ファイル名がそのまま URL になります（`services/oyakoe.md` → `/services/oyakoe/`）

## 会社情報

住所・資本金・法人番号などは `src/site.ts` にまとめてあります。

## デザインの考え方

白いパレットに、事業ごとの絵の具を置く。

- 会社の共通部分：白と墨
- 受託開発：青（角ばった形）
- 自社サービス：赤・黄・オレンジ（丸みのある形）

色の定義は `src/styles/global.css` の `:root` と `[data-theme]`。
