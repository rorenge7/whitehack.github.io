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

// 実績・制作事例
const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
  schema: z.object({
    title: z.string(),
    client: z.string(), // 非公開なら「製造業 A社」など
    category: z.string(), // 例：業務システム / Webアプリ
    period: z.string().optional(),
    stack: z.array(z.string()).default([]),
    date: z.coerce.date(),
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
