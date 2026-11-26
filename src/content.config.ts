import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/** パレットの色。受託開発は blue、自社サービスは red / orange / yellow から選ぶ */
export const themeColors = ["blue", "red", "orange", "yellow"] as const;

// 自社サービス：1ファイル = 1サービス。published: false でサイトに出さない
const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    name: z.string(),
    catch: z.string(), // ひとことで何のサービスか
    color: z.enum(themeColors),
    status: z.enum(["提供中", "準備中", "β版"]).default("準備中"),
    url: z.string().url().optional(), // サービス本体のサイト
    order: z.number().default(100),
    published: z.boolean().default(true),
  }),
});

// 実績：困りごと → 解消方法 → 結果 の3行で書く
const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
  schema: z.object({
    title: z.string(),
    client: z.string().optional(), // 社名は出さず業種で（例：住宅メーカー）
    problem: z.string(), // 困りごと
    solution: z.string(), // 解消方法（技術的な言葉も入れてよい）
    result: z.string(), // 結果
    order: z.number().default(100), // 小さいほど先に表示
    featured: z.boolean().default(false), // true なら受託開発ページにも表示
    published: z.boolean().default(true),
  }),
});

// お知らせ・ブログ
const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(["お知らせ", "ブログ"]).default("お知らせ"),
    published: z.boolean().default(true),
  }),
});

export const collections = { services, works, news };
