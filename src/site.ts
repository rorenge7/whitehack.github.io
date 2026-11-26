// サイト全体で使う会社情報。値はここだけ直せば全ページに反映される
export const company = {
  name: "株式会社白白",
  kana: "しらしろ",
  en: "Shirashiro Inc.",
  representative: "石川 諒人",
  founded: "2026年1月",
  postalCode: "160-0023",
  address: "東京都新宿区西新宿", // バーチャルオフィスのため番地以降は非掲載（問い合わせがあれば回答）
  capital: "100万円",
  corporateNumber: "3011101114585",
  title: "代表取締役",
  business: [
    "Webアプリケーション・業務システムの受託開発",
    "新規事業・MVPの立ち上げ支援",
    "技術顧問・技術選定の支援",
    "クラウド・インフラの設計・構築",
    "AI・データ活用の支援",
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

// 受託開発で対応できること（トップ・受託開発ページで共通）
export const contractServices = [
  { title: "Webアプリ・業務システム開発", text: "フロントエンドからAPI、データベース、インフラまで一貫して設計・開発します。", note: "TypeScript／React／Next.js／Ruby on Rails／PostgreSQL など" },
  { title: "新規事業・MVPの立ち上げ", text: "要件が固まり切っていない段階から、検証に必要な機能を見極めて、小さく早く形にします。" },
  { title: "技術顧問", text: "技術方針の策定、技術選定、設計・コードのレビューなど、開発に関わる判断を技術者の立場から支えます。不具合や表示の遅さといった問題の原因調査にも対応します。" },
  { title: "クラウド・インフラ構築", text: "Google Cloud／AWS／Cloudflareで、運用まで見据えた構成を設計・構築します。" },
  { title: "AI・データ活用", text: "予測モデルの構築、生成AIを使った業務の自動化、AIエージェントから使えるMCPサーバーの開発に対応します。" },
];

export const contractLead =
  "Webアプリケーションから、クラウド・インフラまで。システム全体を見渡しながら、要件の整理・技術選定・設計・開発・運用まで一貫してお引き受けします。仕様が固まっていない段階からのご相談も歓迎です。";

// 代表プロフィール（会社サイトなので短く）
export const profile = {
  summary: "Webアプリからクラウド・インフラまで、システム全体を見渡して課題を解決するエンジニア。株式会社NTTデータで大規模システムの設計・構築に携わったのち、2026年に株式会社白白を設立。フリーランス時代を含め、2018年からお客様の困りごとに合わせたシステムをつくり続けています。",
  qualifications: "情報処理安全確保支援士試験・ネットワークスペシャリスト試験 合格、Google Cloud 認定資格 12種 ほか",
};

// 自社サービスが公開されるまでの案内
export const servicesComingSoon = "白白では、暮らしや仕事の小さな困りごとを解くサービスを準備しています。公開したら、このページでお知らせします。";
