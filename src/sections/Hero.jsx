import { useEffect, useState } from "react"
import FadeIn from "../components/FadeIn"

const heroImage = "/images/nexus-hero44.png"

function HeroSignalLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[4] hidden overflow-hidden lg:block">
      <style>
        {`
          @keyframes heroSignalDraw {
            0% {
              stroke-dashoffset: 900;
              opacity: 0;
            }
            22% {
              opacity: 0.34;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 0.2;
            }
          }

          @keyframes heroScanFloat {
            0% {
              transform: translateX(-7%);
              opacity: 0.045;
            }
            100% {
              transform: translateX(7%);
              opacity: 0.11;
            }
          }

          @keyframes heroPulseDot {
            0%, 100% {
              opacity: 0.36;
              transform: scale(1);
            }
            50% {
              opacity: 0.78;
              transform: scale(1.12);
            }
          }

          .hero-signal-line {
            stroke-dasharray: 900;
            animation: heroSignalDraw 4.2s cubic-bezier(0.16, 1, 0.3, 1) both;
          }

          .hero-scan-float {
            animation: heroScanFloat 6.2s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate;
          }

          .hero-pulse-dot {
            transform-origin: center;
            animation: heroPulseDot 3.8s ease-in-out infinite;
          }
        `}
      </style>

      <div className="hero-scan-float absolute left-[10%] top-[30%] h-[120px] w-[38%] bg-gradient-to-r from-transparent via-nexus-accent/8 to-transparent blur-2xl" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1600 900"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heroSignalGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#46C7D8" stopOpacity="0" />
            <stop offset="36%" stopColor="#46C7D8" stopOpacity="0.32" />
            <stop offset="70%" stopColor="#7ADCBF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#46C7D8" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="heroSignalSoft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A7B8D8" stopOpacity="0" />
            <stop offset="48%" stopColor="#46C7D8" stopOpacity="0.13" />
            <stop offset="100%" stopColor="#7ADCBF" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          className="hero-signal-line"
          d="M418 376 C610 309, 760 423, 936 354 C1060 306, 1162 291, 1346 334"
          stroke="url(#heroSignalGradient)"
          strokeWidth="1"
          strokeDasharray="8 17"
        />

        <path
          className="hero-signal-line"
          d="M116 684 C322 620, 514 692, 732 612 C906 548, 1054 606, 1268 520"
          stroke="url(#heroSignalSoft)"
          strokeWidth="0.9"
          strokeDasharray="6 19"
          style={{ animationDelay: "0.34s" }}
        />

        <path
          d="M232 224 H510"
          stroke="url(#heroSignalGradient)"
          strokeWidth="1"
          opacity="0.12"
        />

        <path
          d="M1048 194 H1450"
          stroke="url(#heroSignalGradient)"
          strokeWidth="1"
          opacity="0.11"
        />

        <path
          d="M1320 182 V382"
          stroke="url(#heroSignalSoft)"
          strokeWidth="1"
          opacity="0.11"
        />

        <circle
          className="hero-pulse-dot"
          cx="1348"
          cy="334"
          r="3.2"
          fill="#7ADCBF"
          opacity="0.58"
        />
      </svg>
    </div>
  )
}

function HeroTitleGuides() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      <div className="absolute -left-8 top-[8px] h-[250px] w-px bg-gradient-to-b from-transparent via-nexus-accent/22 to-transparent" />
      <div className="absolute -left-8 top-[88px] h-px w-[128px] bg-gradient-to-r from-nexus-accent/20 to-transparent" />
      <div className="absolute left-[218px] top-[190px] h-px w-[94px] bg-gradient-to-r from-transparent via-nexus-accentBlue/15 to-transparent" />

   
    </div>
  )
}

function BusinessMap() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 260)
    const t2 = setTimeout(() => setPhase(2), 860)
    const t3 = setTimeout(() => setPhase(3), 1480)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  const cx = 248
  const cy = 182

  const nodes = [
    { id: "crm", label: "CRM", sub: "顧客管理", x: 26, y: 58, dot: "#46C7D8" },
    { id: "erp", label: "ERP", sub: "基幹系", x: 208, y: 16, dot: "#7ADCBF" },
    { id: "chat", label: "Chat", sub: "社内通知", x: 392, y: 60, dot: "#46C7D8" },
    { id: "data", label: "Data", sub: "分析基盤", x: 30, y: 248, dot: "#7ADCBF" },
    { id: "docs", label: "Docs", sub: "文書管理", x: 208, y: 312, dot: "#46C7D8" },
    { id: "api", label: "API", sub: "外部連携", x: 390, y: 246, dot: "#7ADCBF" },
  ]

  const nW = 78
  const nH = 40

  const getPath = (node) => {
    const x1 = node.x + nW / 2
    const y1 = node.y + nH / 2
    const dx = cx - x1
    const dy = cy - y1
    const len = Math.hypot(dx, dy) || 1
    const px = -dy / len
    const py = dx / len
    const offset = 20
    const qx = (x1 + cx) / 2 + px * offset
    const qy = (y1 + cy) / 2 + py * offset

    return `M${x1},${y1} Q${qx},${qy} ${cx},${cy}`
  }

  return (
    <svg
      viewBox="0 0 496 378"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <pattern id="bm-dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="11" cy="11" r="0.65" fill="#C4D4DC" />
        </pattern>

        <linearGradient id="bm-line" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#46C7D8" stopOpacity="0.07" />
          <stop offset="48%" stopColor="#46C7D8" stopOpacity="0.46" />
          <stop offset="100%" stopColor="#7ADCBF" stopOpacity="0.14" />
        </linearGradient>

        <radialGradient id="bm-center-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#46C7D8" stopOpacity="0.16" />
          <stop offset="55%" stopColor="#46C7D8" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#46C7D8" stopOpacity="0" />
        </radialGradient>

        <filter id="bm-soft-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="496" height="378" rx="26" fill="url(#bm-dots)" opacity="0.4" />

      <rect
        x="6"
        y="6"
        width="484"
        height="366"
        rx="24"
        fill="rgba(255,255,255,0.14)"
        stroke="rgba(196,212,220,0.5)"
        strokeWidth="1"
      />

      <circle
        cx={cx}
        cy={cy}
        r="104"
        fill="url(#bm-center-glow)"
        filter="url(#bm-soft-glow)"
      />

      {nodes.map((node, index) => {
        const d = getPath(node)

        return (
          <g key={`path-${node.id}`}>
            <path
              d={d}
              stroke="url(#bm-line)"
              strokeWidth="0.95"
              fill="none"
              style={{
                strokeDasharray: 500,
                strokeDashoffset: phase >= 2 ? 0 : 500,
                opacity: phase >= 2 ? 1 : 0,
                transition: `stroke-dashoffset 1.05s cubic-bezier(0.16, 1, 0.3, 1) ${
                  index * 0.075
                }s, opacity 0.48s ease ${index * 0.075}s`,
              }}
            />

            {phase >= 3 && (
              <circle r="1.7" fill={node.dot} fillOpacity="0.68">
                <animateMotion
                  path={d}
                  dur={`${4.2 + index * 0.34}s`}
                  repeatCount="indefinite"
                  begin={`${index * 0.46}s`}
                />
              </circle>
            )}
          </g>
        )
      })}

      {nodes.map((node, index) => (
        <g
          key={node.id}
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform:
              phase >= 1
                ? "translateY(0px)"
                : `translateY(${index % 2 === 0 ? 7 : -7}px)`,
            transformBox: "fill-box",
            transformOrigin: "center",
            transition: `opacity 0.62s cubic-bezier(0.16, 1, 0.3, 1) ${
              index * 0.065
            }s, transform 0.62s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.065}s`,
          }}
        >
          <rect
            x={node.x}
            y={node.y}
            width={nW}
            height={nH}
            rx="10"
            fill="rgba(255,255,255,0.68)"
            stroke="rgba(198,218,228,0.78)"
            strokeWidth="1"
          />

          <circle
            cx={node.x + 12}
            cy={node.y + nH / 2}
            r="2.7"
            fill={node.dot}
            opacity="0.58"
          />

          <text
            x={node.x + 25}
            y={node.y + 16}
            fill="#14242D"
            fontSize="10.2"
            fontWeight="600"
            fontFamily="'Space Grotesk', system-ui, sans-serif"
          >
            {node.label}
          </text>

          <text
            x={node.x + 25}
            y={node.y + 30}
            fill="#8EA0AA"
            fontSize="8.2"
            fontFamily="system-ui, sans-serif"
          >
            {node.sub}
          </text>
        </g>
      ))}

      <g
        style={{
          opacity: phase >= 1 ? 1 : 0,
          transition: "opacity 0.86s ease 0.32s",
        }}
      >
        <circle
          cx={cx}
          cy={cy}
          r="70"
          fill="none"
          stroke="#46C7D8"
          strokeWidth="0.55"
          strokeDasharray="3 8"
          opacity={phase >= 3 ? "0.22" : "0"}
          style={{
            transition: "opacity 0.9s ease",
          }}
        />

        <circle
          cx={cx}
          cy={cy}
          r="49"
          fill="none"
          stroke="#7ADCBF"
          strokeWidth="0.55"
          opacity={phase >= 3 ? "0.18" : "0"}
          style={{
            transition: "opacity 0.9s ease 0.12s",
          }}
        />

        <circle cx={cx} cy={cy} r="37" fill="#0B1F2A" />

        <circle
          cx={cx}
          cy={cy}
          r="36.5"
          fill="none"
          stroke="rgba(70,199,216,0.4)"
          strokeWidth="1"
        />

        <text
          x={cx}
          y={cy - 2}
          textAnchor="middle"
          fill="#46C7D8"
          fontSize="12.8"
          fontWeight="700"
          fontFamily="'Space Grotesk', system-ui, sans-serif"
          letterSpacing="0.08em"
        >
          NEXUS
        </text>

        <text
          x={cx}
          y={cy + 14}
          textAnchor="middle"
          fill="rgba(255,255,255,0.42)"
          fontSize="6.8"
          fontFamily="'Space Grotesk', system-ui, sans-serif"
          letterSpacing="0.16em"
        >
          HUB
        </text>
      </g>

      <g
        style={{
          opacity: phase >= 3 ? 1 : 0,
          transition: "opacity 0.9s ease 0.18s",
        }}
      >
        <text
          x="22"
          y="358"
          fill="#8EA0AA"
          fontSize="7.4"
          fontFamily="'Space Grotesk', system-ui, sans-serif"
          letterSpacing="0.14em"
        >
          WORKFLOW MAP
        </text>

        <line
          x1="22"
          y1="363"
          x2="144"
          y2="363"
          stroke="#DDE8ED"
          strokeWidth="0.8"
        />

        <circle cx="464" cy="24" r="3.1" fill="#7ADCBF" opacity="0.7" />

        <text
          x="454"
          y="42"
          textAnchor="end"
          fill="#8EA0AA"
          fontSize="7.2"
          fontFamily="'Space Grotesk', system-ui, sans-serif"
          letterSpacing="0.12em"
        >
          SYSTEMS CONNECTED
        </text>
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-nexus-bg">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(150deg, #FFFFFF 0%, #F8FBFC 45%, #EAF6F9 100%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 77% 10%, rgba(70,199,216,0.064) 0%, transparent 50%), radial-gradient(ellipse at 34% 78%, rgba(122,220,191,0.046) 0%, transparent 44%)",
        }}
      />

      <HeroSignalLayer />

<FadeIn
  delay={180}
  duration={1040}
  y={0}
  className="absolute right-[-1.5%] top-0 z-[1] hidden h-full w-[74%] lg:block"
>
  <img
    src={heroImage}
    alt=""
    aria-hidden="true"
    className="h-full w-full object-cover object-center"
    style={{
      opacity: 0.62,
      filter: "contrast(1.08) brightness(0.98) saturate(1.02)",
      WebkitMaskImage:
        "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 36%, rgba(0,0,0,0.68) 62%, rgba(0,0,0,0.28) 84%, transparent 100%)",
      maskImage:
        "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 36%, rgba(0,0,0,0.68) 62%, rgba(0,0,0,0.28) 84%, transparent 100%)",
    }}
  />
</FadeIn>

<div className="pointer-events-none absolute left-0 top-0 z-[2] hidden h-full w-[50%] bg-gradient-to-r from-nexus-bg/88 via-nexus-bg/44 to-transparent lg:block" />

<div className="pointer-events-none absolute right-0 top-0 z-[2] hidden h-full w-[70%] bg-gradient-to-l from-white/0 via-white/[0.01] to-nexus-bg/[0.08] lg:block" />
      <div className="nexus-frame-wide relative z-20 grid min-h-screen items-center pt-[72px] lg:grid-cols-[0.94fr_1.06fr]">
        <div className="relative px-8 pb-20 pt-10 md:px-12 lg:px-0 lg:translate-x-4 lg:pb-0 lg:pt-0 xl:translate-x-6 2xl:translate-x-8">
          <HeroTitleGuides />

          <FadeIn delay={180} duration={760} y={8}>
            <div className="mb-10 flex items-center gap-3">
              <span className="block h-px w-7 bg-nexus-accent" />
              <span className="font-en text-[10.5px] font-semibold uppercase tracking-[0.22em] text-nexus-accentDeep">
                Business System / Workflow Integration
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={280} duration={900} y={12}>
            <h1 className="font-jp text-[46px] font-medium leading-[1.08] tracking-[-0.065em] text-nexus-dark md:text-[58px] lg:text-[66px] xl:text-[72px]">
              分断された業務に、
              <br />
              <span className="relative inline-block pl-[0.08em]">
                次の接続を。
                <span
                  className="absolute -bottom-1 left-[0.08em] h-[1.5px] w-[92%] opacity-45"
                  style={{
                    background:
                      "linear-gradient(to right, #46C7D8, transparent)",
                  }}
                />
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={430} duration={860} y={10}>
            <p className="mt-8 max-w-[472px] text-[15px] leading-[2.08] tracking-[0.01em] text-nexus-muted">
              NEXUS Integration Partnersは、業務システム導入・データ連携・自動化設計を通じて、
              企業の情報とプロセスを、現場で使えるかたちに整えるITパートナーです。
            </p>
          </FadeIn>

          <FadeIn delay={560} duration={780} y={10}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex h-[48px] items-center rounded-[11px] border border-nexus-dark bg-nexus-dark px-7 font-jp text-[13px] font-medium tracking-[0.035em] text-white shadow-[0_16px_36px_rgba(11,31,42,0.14)] transition-all duration-300 hover:-translate-y-px hover:border-nexus-accentDeep hover:bg-nexus-accentDeep hover:shadow-[0_18px_42px_rgba(11,31,42,0.18)]"
              >
                導入について問い合わせる
                <span className="ml-5 h-px w-7 bg-white/72 transition-all duration-300 group-hover:w-9 group-hover:bg-white" />
              </a>

              <a
                href="#service"
                className="group inline-flex h-[48px] items-center rounded-[11px] border border-nexus-line bg-white/44 px-6 font-jp text-[13px] font-medium tracking-[0.035em] text-nexus-dark backdrop-blur-sm transition-all duration-300 hover:-translate-y-px hover:border-nexus-accent/45 hover:bg-white/76"
              >
                サービス内容を見る
                <span className="ml-4 text-[14px] text-nexus-accentDeep transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={700} duration={780} y={10}>
            <div className="mt-14 grid max-w-[430px] grid-cols-3 border-t border-nexus-line pt-8">
              {[
                { en: "System", ja: "システム導入" },
                { en: "Workflow", ja: "業務設計" },
                { en: "Integration", ja: "データ連携" },
              ].map((item, index) => (
                <div
                  key={item.en}
                  className={
                    index < 2
                      ? "border-r border-nexus-line/70 pr-4"
                      : "pl-5"
                  }
                >
                  <p className="font-en text-[16px] font-semibold tracking-[-0.03em] text-nexus-dark md:text-[18px]">
                    {item.en}
                  </p>
                  <p className="mt-1.5 text-[10.5px] tracking-[0.01em] text-nexus-muted">
                    {item.ja}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="relative hidden min-h-[500px] items-center justify-center lg:flex">
          <div
            className="absolute left-4 top-1/2 h-px w-[64px] -translate-y-1/2"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(70,199,216,0.38))",
            }}
          />

          <div className="relative h-[378px] w-full max-w-[500px] translate-y-5 pr-4 xl:max-w-[520px]">
            <FadeIn delay={560} duration={1040} y={16} className="h-full w-full">
              <BusinessMap />
            </FadeIn>
          </div>


        </div>
      </div>
    </section>
  )
}