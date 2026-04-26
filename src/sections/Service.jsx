import FadeIn from "../components/FadeIn"

const SERVICES = [
  {
    id: "system",
    num: "01",
    en: "System Implementation",
    ja: "システム導入支援",
    lead: "使われる仕組みを、現場の中に設計する。",
    desc: "要件整理、ツール選定、初期設定、運用定着まで。単なる導入ではなく、現場の業務フローに組み込まれる仕組みを設計します。",
    items: [
      "業務ヒアリング・要件整理",
      "業務ツール選定・導入支援",
      "運用定着・改善サイクル",
    ],
    image: "/images/service-system.png",
    color: "#46C7D8",
  },
  {
    id: "workflow",
    num: "02",
    en: "Workflow Design",
    ja: "業務フロー設計",
    lead: "複雑な業務を、動ける構造に変える。",
    desc: "業務フローを可視化し、どこをシステム化し、どこを人が担うべきかを整理。実行可能な改善ロードマップへ落とし込みます。",
    items: [
      "業務フロー可視化・整理",
      "課題優先度マッピング",
      "改善ロードマップ策定",
    ],
    image: "/images/service-workflow.png",
    color: "#7ADCBF",
  },
  {
    id: "sync",
    num: "03",
    en: "Data Integration",
    ja: "データ連携・自動化",
    lead: "分断された情報に、流れをつくる。",
    desc: "SaaS、CRM、表計算、社内データを接続し、人が毎回つなぎ直していた作業を自然に流れる状態へ整えます。",
    items: [
      "API連携・データパイプライン",
      "SaaS間の業務自動化",
      "カスタムシステム連携",
    ],
    image: "/images/service-sync1.png",
    color: "#8EB7FF",
  },
]

function ServiceVisual({ service }) {
  return (
    <div className="relative h-[230px] overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-soft md:h-[250px]">
      <img
        src={service.image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
        style={{
          filter: "saturate(0.94) contrast(1.02) brightness(1.04)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(247,250,252,0.34) 56%, rgba(247,250,252,0.88) 100%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(11,31,42,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,31,42,0.08) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      <div className="absolute left-6 top-6 flex items-center gap-2">
        <span
          className="h-2 w-2 rounded-full"
          style={{
            backgroundColor: service.color,
            boxShadow: `0 0 18px ${service.color}`,
          }}
        />
        <span className="font-en text-[10px] uppercase tracking-[0.2em] text-nexus-dark/52">
          {service.en}
        </span>
      </div>

      <div className="absolute bottom-6 left-6 right-6">
        <div className="mb-4 h-px w-full bg-gradient-to-r from-nexus-dark/14 via-nexus-dark/5 to-transparent" />

        <div className="flex items-end justify-between gap-6">
          <p className="font-jp text-[17px] font-medium leading-[1.55] tracking-[-0.045em] text-nexus-dark">
            {service.lead}
          </p>

          <span className="font-en text-[11px] font-semibold tracking-[0.12em] text-nexus-muted">
            {service.num}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Service() {
  return (
    <section
      id="service"
      className="relative overflow-hidden bg-nexus-bgSoft py-32 md:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(circle at 12% 16%, rgba(70,199,216,0.11), transparent 30%), radial-gradient(circle at 86% 72%, rgba(122,220,191,0.1), transparent 34%), linear-gradient(180deg, rgba(255,255,255,0.74), rgba(238,246,248,0.6))",
        }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-[0.26]">
        <svg
          className="h-full w-full"
          viewBox="0 0 1600 900"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="serviceLine" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#46C7D8" stopOpacity="0" />
              <stop offset="52%" stopColor="#46C7D8" stopOpacity="0.42" />
              <stop offset="100%" stopColor="#7ADCBF" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d="M-120 238 C168 154, 370 308, 650 220 C888 145, 1058 230, 1280 146 C1420 94, 1540 104, 1720 156"
            stroke="url(#serviceLine)"
            strokeWidth="1"
            strokeDasharray="8 18"
          />

          <path
            d="M120 736 C330 620, 530 736, 750 630 C938 538, 1108 604, 1400 474"
            stroke="url(#serviceLine)"
            strokeWidth="1"
            strokeDasharray="7 17"
          />
        </svg>
      </div>

      <div className="nexus-frame relative">
        {/* Section Head */}
        <FadeIn y={14} duration={900}>
          <div className="mx-auto mb-[72px] max-w-[860px] text-center">
            <div className="mb-10 flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-nexus-accent" />
              <span className="font-en text-[10.5px] font-semibold uppercase tracking-[0.22em] text-nexus-accentDeep">
                Service
              </span>
              <span className="h-px w-7 bg-nexus-accent" />
            </div>

            <h2 className="font-jp text-[36px] font-medium leading-[1.18] tracking-[-0.06em] text-nexus-dark md:text-[50px] xl:text-[56px]">
              システム導入を、
              <br />
              使われる業務へ
              <br />
              変えていく。
            </h2>

            <p className="mx-auto mt-8 max-w-[620px] text-[15px] leading-[2.08] tracking-[0.01em] text-nexus-muted">
              NEXUS Integration Partnersが支援するのは、ツールの導入だけではありません。
              業務の構造を読み解き、システム導入・業務設計・データ連携を
              ひとつの流れとして設計します。
            </p>
          </div>
        </FadeIn>

        {/* Service Cards */}
        <FadeIn delay={140} y={18} duration={980}>
          <div className="grid gap-5 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <article
                key={service.id}
                className="group relative h-full overflow-hidden rounded-[34px] border border-white/72 bg-white/64 p-4 shadow-soft backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/82"
              >
                <ServiceVisual service={service} />

                <div className="px-3 pb-4 pt-8">
                  <p
                    className="mb-2 font-en text-[10.5px] font-semibold uppercase tracking-[0.18em]"
                    style={{ color: service.color }}
                  >
                    {service.en}
                  </p>

                  <h3 className="font-jp text-[25px] font-medium tracking-[-0.055em] text-nexus-dark">
                    {service.ja}
                  </h3>

                  <p className="mt-5 text-[13.5px] leading-[2] text-nexus-muted">
                    {service.desc}
                  </p>

                  <ul className="mt-8 space-y-3 border-t border-nexus-line pt-6">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[12.5px] leading-[1.75] text-nexus-muted"
                      >
                        <span
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: service.color }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>

        {/* Closing Message */}
        <FadeIn delay={220} y={12} duration={900}>
          <div className="mx-auto mt-12 max-w-[920px] rounded-[28px] border border-nexus-line bg-white/54 px-7 py-7 text-center backdrop-blur-sm md:px-10">
            <p className="font-jp text-[18px] font-medium leading-[1.8] tracking-[-0.045em] text-nexus-dark md:text-[21px]">
              必要なのは、システムを増やすことではなく、
              <br className="hidden md:block" />
              業務が自然に流れる状態をつくること。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}