import FadeIn from "../components/FadeIn"

const SERVICES = [
  {
    id: "system",
    num: "01",
    en: "System Implementation",
    ja: "システム導入支援",
    lead: "使われる仕組みを、現場の中に設計する。",
    desc: "要件整理、ツール選定、初期設定、運用定着まで。単なる導入ではなく、現場の業務フローに組み込まれる仕組みとして設計します。",
    points: ["要件整理", "ツール選定", "導入・定着"],
    image: "/images/service-system.png",
    color: "#46C7D8",
    align: "left",
  },
  {
    id: "workflow",
    num: "02",
    en: "Workflow Design",
    ja: "業務フロー設計",
    lead: "複雑な業務を、動ける構造に変える。",
    desc: "業務の流れを可視化し、どこをシステム化し、どこを人が担うべきかを整理します。改善の優先順位を決め、実行できる形へ落とし込みます。",
    points: ["業務整理", "課題の優先度設計", "改善ロードマップ"],
    image: "/images/service-workflow.png",
    color: "#7ADCBF",
    align: "right",
  },
  {
    id: "sync",
    num: "03",
    en: "Data Integration",
    ja: "データ連携・自動化",
    lead: "分断された情報に、流れをつくる。",
    desc: "CRM、表計算、SaaS、社内データをつなぎ、人が毎回つなぎ直していた作業を、自然に流れる状態へ整えます。",
    points: ["SaaS連携", "データ整理", "自動化設計"],
    image: "/images/service-sync1.png",
    color: "#8EB7FF",
    align: "left",
  },
]

function ServiceImage({ service }) {
  return (
    <div
      className={
        service.align === "right"
          ? "relative ml-auto w-[92%]"
          : "relative mr-auto w-[96%]"
      }
    >
      <div className="relative h-[214px] overflow-hidden rounded-[22px] border border-white/70 bg-white shadow-[0_22px_60px_rgba(11,31,42,0.08)]">
        <img
          src={service.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center"
          style={{
            filter: "saturate(0.96) contrast(1.04) brightness(1.02)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(247,250,252,0.08) 48%, rgba(247,250,252,0.48) 100%)",
          }}
        />

        <div className="absolute left-5 top-5 flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full"
            style={{
              backgroundColor: service.color,
              boxShadow: `0 0 16px ${service.color}`,
            }}
          />
          <span className="font-en text-[9px] font-semibold uppercase tracking-[0.2em] text-nexus-dark/50">
            {service.en}
          </span>
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-5 border-t border-nexus-dark/10 pt-4">
          <p className="max-w-[210px] font-jp text-[15px] font-medium leading-[1.65] tracking-[-0.045em] text-nexus-dark">
            {service.lead}
          </p>

          <span className="font-en text-[10px] font-semibold tracking-[0.14em] text-nexus-muted">
            {service.num}
          </span>
        </div>
      </div>
    </div>
  )
}

function ServiceBlock({ service, index }) {
  const isRight = service.align === "right"

  return (
    <FadeIn delay={160 + index * 110} y={16} duration={880}>
      <article className="relative border-t border-nexus-line/80 py-12">
        <ServiceImage service={service} />

        <div
          className={
            isRight
              ? "ml-auto mt-7 max-w-[300px] text-right"
              : "mt-7 max-w-[310px] text-left"
          }
        >
          <p
            className="font-en text-[9.5px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: service.color }}
          >
            {service.en}
          </p>

          <h3 className="mt-3 font-jp text-[27px] font-medium leading-[1.18] tracking-[-0.065em] text-nexus-dark">
            {service.ja}
          </h3>

          <p className="mt-5 text-[13.5px] leading-[2.05] tracking-[0.01em] text-nexus-muted">
            {service.desc}
          </p>

          <div
            className={
              isRight
                ? "mt-7 flex flex-wrap justify-end gap-2"
                : "mt-7 flex flex-wrap gap-2"
            }
          >
            {service.points.map((point) => (
              <span
                key={point}
                className="inline-flex h-8 items-center rounded-[10px] border border-nexus-line bg-white/58 px-3 font-jp text-[11px] font-medium tracking-[0.02em] text-nexus-dark/72"
              >
                {point}
              </span>
            ))}
          </div>
        </div>
      </article>
    </FadeIn>
  )
}

export default function ServiceSp() {
  return (
    <section
      id="service"
      className="relative overflow-hidden bg-nexus-bgSoft px-6 py-24 md:hidden"
    >
      {/* background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(circle at 14% 10%, rgba(70,199,216,0.11), transparent 34%), radial-gradient(circle at 92% 64%, rgba(122,220,191,0.09), transparent 36%), linear-gradient(180deg, rgba(255,255,255,0.76), rgba(238,246,248,0.68))",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[260px] opacity-[0.22]">
        <svg
          className="h-full w-full"
          viewBox="0 0 390 260"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="serviceSpLine" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#46C7D8" stopOpacity="0" />
              <stop offset="48%" stopColor="#46C7D8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#7ADCBF" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d="M-48 118 C38 72, 112 148, 196 104 C268 68, 326 94, 438 50"
            stroke="url(#serviceSpLine)"
            strokeWidth="0.9"
            strokeDasharray="7 16"
          />
          <path
            d="M-28 214 C72 158, 144 230, 250 168 C316 130, 362 148, 426 112"
            stroke="url(#serviceSpLine)"
            strokeWidth="0.8"
            strokeDasharray="5 17"
          />
        </svg>
      </div>

      <div className="relative">
        {/* head */}
        <FadeIn y={12} duration={860}>
          <div className="mx-auto max-w-[340px] text-center">
            <div className="mb-8 flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-nexus-accent" />
              <span className="font-en text-[9.5px] font-semibold uppercase tracking-[0.22em] text-nexus-accentDeep">
                Service
              </span>
              <span className="h-px w-7 bg-nexus-accent" />
            </div>

            <h2 className="font-jp text-[34px] font-medium leading-[1.18] tracking-[-0.07em] text-nexus-dark">
              システム導入を、
              <br />
              使われる業務へ
              <br />
              変えていく。
            </h2>

            <p className="mx-auto mt-7 max-w-[320px] text-[13.5px] leading-[2.05] tracking-[0.01em] text-nexus-muted">
              導入するだけでは、業務は変わりません。
              現場の流れを読み解き、システム・業務・データをひとつの動きとして整えます。
            </p>
          </div>
        </FadeIn>

        {/* service flow */}
        <div className="mt-16">
          {SERVICES.map((service, index) => (
            <ServiceBlock key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* close */}
        <FadeIn delay={460} y={14} duration={900}>
          <div className="mt-2 border-y border-nexus-line py-9 text-center">
            <p className="font-jp text-[19px] font-medium leading-[1.75] tracking-[-0.055em] text-nexus-dark">
              必要なのは、
              <br />
              システムを増やすことではなく、
              <br />
              業務が自然に流れる状態を
              <br />
              つくること。
            </p>

            <p className="mx-auto mt-5 max-w-[280px] text-[12.5px] leading-[1.9] text-nexus-muted">
              そのために、最初の設計から運用後の改善までを一つの流れとして扱います。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}