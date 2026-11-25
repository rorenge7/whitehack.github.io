// サイト全体で使う会社情報。値はここだけ直せば全ページに反映される
export const company = {
  name: "株式会社白白",
  kana: "しらしろ",
  en: "Shirashiro Inc.",
  representative: "石川 諒人",
  founded: "2026年1月",
  postalCode: "", // 例：160-0022
  address: "東京都新宿区", // 番地まで
  capital: "", // 例：100万円
  corporateNumber: "", // 13桁
  business: [
    "Webサイト・Webアプリケーションの受託開発",
    "業務システムの設計・開発・保守",
    "インターネットサービスの企画・開発・運営",
  ],
  // 問い合わせフォーム（自前のフォームができるまでの仮）
  contactUrl: "https://forms.gle/vDB75tQYHF2QjeFt7",
};

export const nav = [
  { href: "/contract/", label: "受託開発" },
  { href: "/services/", label: "自社サービス" },
  { href: "/works/", label: "実績" },
  { href: "/news/", label: "お知らせ" },
  { href: "/company/", label: "会社概要" },
];
