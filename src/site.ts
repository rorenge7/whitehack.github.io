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
  title: "代表取締役",
  business: [
    "Webアプリケーション・業務システムの受託開発",
    "新規事業・MVPの立ち上げ支援",
    "システムの性能改善・技術顧問",
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
  { title: "Webアプリ・業務システム開発", text: "フロントエンドからAPI、データベース、インフラまで一貫して設計・開発します。", note: "TypeScript／React／Next.js／Ruby on Rails／PostgreSQL" },
  { title: "新規事業・MVPの立ち上げ", text: "要件が固まり切っていない段階から、検証に必要な機能を見極めて、小さく早く形にします。" },
  { title: "性能改善・技術顧問", text: "表示の遅さや障害の原因を、画面・API・データベース・インフラを横断して切り分けます。技術責任者として、技術方針の策定やレビューも担います。" },
  { title: "クラウド・インフラ構築", text: "Google Cloud／AWS／Cloudflareで、運用まで見据えた構成を設計・構築します。" },
  { title: "AI・データ活用", text: "予測モデルの構築、生成AIを使った業務の自動化、AIエージェントから使えるMCPサーバーの開発に対応します。" },
];

export const contractLead =
  "Webアプリケーションから、クラウド・インフラまで。システム全体を見渡しながら、要件の整理・技術選定・設計・開発・運用まで一貫してお引き受けします。仕様が固まっていない段階からのご相談も歓迎です。";

// 代表プロフィール
export const profile = {
  summary: "Webアプリケーション開発からクラウド・インフラまで、システム全体を見渡して課題を解決するエンジニア。",
  history: [
    "2018年、株式会社RITでReact／Ruby on Railsを用いたWebアプリケーション開発に従事。マッチングサービスなど複数のサービス開発や、AWS上の基盤の移行、全文検索の導入を担当。同年からフリーランスとして、Webサービス・ECサイト・業務システムの開発を始める。",
    "2020年、株式会社NTTデータに入社。大規模な仮想デスクトップ基盤の設計・構築と技術リードを担当し、約2万台規模のデスクトップ展開の自動化や、性能の可視化・チューニングに取り組む。",
    "2026年1月、株式会社白白を設立。28のECサイトを展開する共通プラットフォームや一般社団法人で技術責任者を務めながら、受託開発と自社サービスの開発を行う。",
  ],
  qualifications: [
    "情報処理安全確保支援士試験、ネットワークスペシャリスト試験、応用情報技術者試験 合格",
    "Google Cloud 認定資格 12種（Professional Cloud Architect ほか）",
    "AWS Certified Solutions Architect – Associate",
    "Microsoft 認定資格 4種（Azure Administrator Associate ほか）",
  ],
  skills: "TypeScript／React／Next.js／Ruby on Rails／Python／PostgreSQL／Google Cloud／AWS／Cloudflare",
};

// 自社サービスが公開されるまでの案内
export const servicesComingSoon = "白白では、暮らしや仕事の小さな困りごとを解くサービスを準備しています。公開したら、このページでお知らせします。";
