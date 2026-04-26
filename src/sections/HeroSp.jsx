import FadeIn from "../components/FadeIn"

const heroImage = "/images/nexus-hero44.png"

function HeroSignalLayerSp() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-[58px] z-[3] h-[48svh] min-h-[330px] overflow-hidden">
      <style>
        {`
          @keyframes heroSpSignalDraw {
            0% {
              stroke-dashoffset: 720;
              opacity: 0;
            }
            28% {
              opacity: 0.26;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 0.16;
            }
          }

          @keyframes heroSpScan {
            0% {
              transform: translateX(-8%);
              opacity: 0.035;
            }
            100% {
              transform: translateX(8%);
              opacity: 0.1;
            }
          }

          @keyframes heroSpDot {
            0%, 100% {
              opacity: 0.35;
              transform: scale(1);
            }
            50% {
              opacity: 0.76;
              transform: scale(1.16);
            }
          }

          .hero-sp-signal-line {
            stroke-dasharray: 720;
            animation: heroSpSignalDraw 3.8s cubic-bezier(0.16, 1, 0.3, 1) both;
          }

          .hero-sp-scan {
            animation: heroSpScan 5.8s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate;
          }

          .hero-sp-dot {
            transform-origin: center;
            animation: heroSpDot 3.6s ease-in-out infinite;
          }
        `}
      </style>

      <div className="hero-sp-scan absolute left-[10%] top-[42%] h-[120px] w-[80%] bg-gradient-to-r from-transparent via-nexus-accent/10 to-transparent blur-2xl" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 390 420"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heroSpLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#46C7D8" stopOpacity="0" />
            <stop offset="46%" stopColor="#46C7D8" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#7ADCBF" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          className="hero-sp-signal-line"
          d="M-28 190 C70 144, 154 226, 246 176 C310 140, 354 154, 430 124"
          stroke="url(#heroSpLine)"
          strokeWidth="0.85"
          strokeDasharray="6 14"
        />

        <path
          className="hero-sp-signal-line"
          d="M-34 284 C82 238, 154 306, 258 252 C318 220, 366 230, 430 202"
          stroke="url(#heroSpLine)"
          strokeWidth="0.75"
          strokeDasharray="5 16"
          style={{ animationDelay: "0.28s" }}
        />

        <path
          className="hero-sp-signal-line"
          d="M56 88 H212"
          stroke="url(#heroSpLine)"
          strokeWidth="0.75"
          opacity="0.12"
          style={{ animationDelay: "0.42s" }}
        />

        <path
          className="hero-sp-signal-line"
          d="M294 72 V246"
          stroke="url(#heroSpLine)"
          strokeWidth="0.75"
          opacity="0.1"
          style={{ animationDelay: "0.52s" }}
        />

        <circle
          className="hero-sp-dot"
          cx="292"
          cy="158"
          r="2.5"
          fill="#7ADCBF"
          opacity="0.6"
        />
      </svg>
    </div>
  )
}

function HeroInfoRailSp() {
  const items = [
    { en: "System", ja: "導入" },
    { en: "Flow", ja: "設計" },
    { en: "Data", ja: "連携" },
  ]

  return (
    <div className="mt-8 border-y border-nexus-line/80 py-5">
      <div className="grid grid-cols-3">
        {items.map((item, index) => (
          <div
            key={item.en}
            className={
              index < 2
                ? "border-r border-nexus-line/70 pr-3"
                : "pl-4"
            }
          >
            <p className="font-en text-[14px] font-semibold tracking-[-0.03em] text-nexus-dark">
              {item.en}
            </p>
            <p className="mt-1.5 font-jp text-[10px] tracking-[0.04em] text-nexus-muted">
              {item.ja}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3 border-t border-nexus-line/70 pt-4">
        <span className="h-1.5 w-1.5 rounded-full bg-nexus-accent shadow-[0_0_14px_rgba(70,199,216,0.75)]" />
        <p className="shrink-0 font-jp text-[10.5px] tracking-[0.04em] text-nexus-muted">
          業務・情報・ツールを接続
        </p>
        <span className="h-px flex-1 bg-gradient-to-r from-nexus-accent/50 to-transparent" />
      </div>
    </div>
  )
}

export default function HeroSp() {
  return (
 <section
  id="hero"
  className="relative isolate min-h-[100svh] overflow-hidden bg-nexus-bg pb-0 md:hidden"
>
      {/* base */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(155deg, #FFFFFF 0%, #F8FBFC 42%, #EAF6F9 100%)",
        }}
      />

      {/* soft light */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 86% 6%, rgba(70,199,216,0.16) 0%, transparent 48%), radial-gradient(ellipse at 14% 84%, rgba(122,220,191,0.07) 0%, transparent 44%)",
        }}
      />

      {/* image */}
      <FadeIn
        delay={100}
        duration={980}
        y={0}
        className="absolute inset-x-0 top-[54px] z-[1] h-[47svh] min-h-[330px] max-h-[440px] overflow-hidden"
      >
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          style={{
            objectPosition: "center 18%",
            opacity: 0.94,
            filter: "contrast(1.04) brightness(1.06) saturate(0.96)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 50%, rgba(0,0,0,0.74) 76%, rgba(0,0,0,0.04) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 50%, rgba(0,0,0,0.74) 76%, rgba(0,0,0,0.04) 100%)",
          }}
        />
      </FadeIn>

      {/* image veils */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-[132px] bg-gradient-to-b from-white/78 to-transparent" />
      <div className="pointer-events-none absolute left-0 top-[72px] z-[2] h-[40svh] w-[56%] bg-gradient-to-r from-white/56 via-white/18 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-[37svh] z-[2] h-[34svh] bg-gradient-to-b from-transparent via-nexus-bg/72 to-nexus-bg" />

      <HeroSignalLayerSp />

      {/* content */}
      <div className="relative z-20 px-6 pb-4 pt-[45svh]">
        <div className="relative">
          {/* content surface */}
          <div
            className="pointer-events-none absolute -inset-x-6 -top-12 bottom-[-32px] -z-10"
            style={{
              background:
                "linear-gradient(180deg, rgba(248,251,252,0) 0%, rgba(248,251,252,0.86) 18%, rgba(248,251,252,1) 42%, rgba(248,251,252,1) 100%)",
            }}
          />

          <FadeIn delay={210} duration={760} y={8}>
            <div className="mb-5 flex items-center gap-3">
              <span className="block h-px w-7 bg-nexus-accent" />
              <span className="font-en text-[9px] font-semibold uppercase tracking-[0.2em] text-nexus-accentDeep">
                System / Workflow Integration
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={300} duration={900} y={10}>
            <h1 className="font-jp text-[37px] font-medium leading-[1.12] tracking-[-0.065em] text-nexus-dark">
              分断された
              <br />
              業務に、
              <br />
              <span className="relative inline-block">
                次の接続を。
                <span
                  className="absolute -bottom-1 left-0 h-[1.5px] w-[92%] opacity-55"
                  style={{
                    background:
                      "linear-gradient(to right, #46C7D8, transparent)",
                  }}
                />
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={430} duration={820} y={8}>
            <p className="mt-6 max-w-[330px] text-[13px] leading-[2.0] tracking-[0.01em] text-nexus-muted">
              NEXUS Integration Partnersは、業務システム導入・データ連携・自動化設計を通じて、
              企業の情報とプロセスを現場で使えるかたちに整えるITパートナーです。
            </p>
          </FadeIn>

          <FadeIn delay={560} duration={760} y={8}>
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex h-[44px] flex-1 items-center justify-between rounded-[10px] border border-nexus-dark bg-nexus-dark px-4 font-jp text-[12.5px] font-medium tracking-[0.035em] text-white shadow-[0_14px_34px_rgba(11,31,42,0.13)] transition-all duration-300 active:translate-y-px"
              >
                導入について相談する
                <span className="ml-4 h-px w-7 bg-white/72 transition-all duration-300 group-active:w-9" />
              </a>

              <a
                href="#service"
                aria-label="サービス内容を見る"
                className="inline-flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[10px] border border-nexus-line bg-white/64 font-en text-[15px] text-nexus-accentDeep backdrop-blur-sm transition-all duration-300 active:translate-y-px"
              >
                ↓
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={680} duration={780} y={8}>
            <HeroInfoRailSp />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}