import { useEffect, useRef, useState } from "react"
import FadeIn from "../components/FadeIn"

const headline = [
  "システムを入れる。",
  "ではなく、",
  "業務がつながる",
  "状態を設計する。",
]

function ConceptSignalSp() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <style>
        {`
          @keyframes conceptSpBand {
            0% {
              transform: translateX(-120%) skewX(-10deg);
              opacity: 0;
            }
            18% {
              opacity: 1;
            }
            72% {
              opacity: 1;
            }
            100% {
              transform: translateX(120%) skewX(-10deg);
              opacity: 0;
            }
          }

          @keyframes conceptSpLine {
            0% {
              stroke-dashoffset: 520;
              opacity: 0;
            }
            35% {
              opacity: 0.5;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 0.24;
            }
          }

          @keyframes conceptSpTitle {
            0% {
              opacity: 0;
              transform: translateY(14px);
              filter: blur(4px);
              letter-spacing: -0.085em;
            }
            60% {
              opacity: 0.75;
              filter: blur(1px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
              letter-spacing: -0.058em;
            }
          }

          .concept-sp-band,
          .concept-sp-line,
          .concept-sp-title {
            animation-play-state: paused;
          }

          .concept-sp-band {
            opacity: 0;
            transform: translateX(-120%) skewX(-10deg);
          }

          .concept-sp-line {
            opacity: 0;
            stroke-dasharray: 520;
            stroke-dashoffset: 520;
          }

          .concept-sp-title {
            opacity: 0;
            transform: translateY(14px);
            filter: blur(4px);
            letter-spacing: -0.085em;
          }

          .concept-sp.is-active .concept-sp-band {
            animation: conceptSpBand 1.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
          }

          .concept-sp.is-active .concept-sp-line {
            animation: conceptSpLine 3.2s cubic-bezier(0.16, 1, 0.3, 1) both;
          }

          .concept-sp.is-active .concept-sp-title {
            animation: conceptSpTitle 0.96s cubic-bezier(0.16, 1, 0.3, 1) both;
          }
        `}
      </style>

      {/* soft glow */}
      <div className="absolute left-[-24%] top-[8%] h-[260px] w-[260px] rounded-full bg-nexus-accent/12 blur-3xl" />
      <div className="absolute right-[-30%] top-[40%] h-[300px] w-[300px] rounded-full bg-nexus-accentBlue/10 blur-3xl" />

      {/* fine grid */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* flowing lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-80"
        viewBox="0 0 390 680"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="conceptSpLineA" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#46C7D8" stopOpacity="0" />
            <stop offset="48%" stopColor="#46C7D8" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#7ADCBF" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          className="concept-sp-line"
          d="M-40 172 C72 118, 138 214, 236 154 C304 112, 344 126, 430 78"
          stroke="url(#conceptSpLineA)"
          strokeWidth="0.9"
          strokeDasharray="5 14"
        />

        <path
          className="concept-sp-line"
          d="M-52 404 C78 334, 156 456, 270 374 C338 324, 376 340, 438 292"
          stroke="url(#conceptSpLineA)"
          strokeWidth="0.8"
          strokeDasharray="4 16"
          style={{ animationDelay: "0.28s" }}
        />

        <path
          className="concept-sp-line"
          d="M68 92 H270"
          stroke="url(#conceptSpLineA)"
          strokeWidth="0.75"
          opacity="0.18"
          style={{ animationDelay: "0.44s" }}
        />
      </svg>

      {/* main band */}
      <div className="absolute left-0 top-[32%] h-[190px] w-full overflow-hidden">
        <div className="absolute inset-y-10 left-0 w-full bg-gradient-to-r from-transparent via-white/[0.035] to-transparent" />

        <div
          className="concept-sp-band absolute top-1/2 h-[104px] w-[78%] -translate-y-1/2"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(70,199,216,0.08) 18%, rgba(255,255,255,0.16) 48%, rgba(122,220,191,0.08) 74%, transparent 100%)",
            boxShadow:
              "0 0 56px rgba(70,199,216,0.18), inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -1px 0 rgba(255,255,255,0.05)",
            backdropFilter: "blur(8px)",
          }}
        />
      </div>
    </div>
  )
}

export default function ConceptSp() {
  const sectionRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const target = sectionRef.current
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.28,
        rootMargin: "0px 0px -14% 0px",
      }
    )

    observer.observe(target)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="concept"
      className={`concept-sp relative isolate overflow-hidden bg-nexus-dark px-6 py-24 text-white md:hidden ${
        isActive ? "is-active" : ""
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 24% 14%, rgba(70,199,216,0.12), transparent 36%), radial-gradient(circle at 78% 72%, rgba(122,220,191,0.08), transparent 40%), linear-gradient(180deg, #081515 0%, #061010 100%)",
        }}
      />

      <ConceptSignalSp />

      <div className="relative z-10">
        <FadeIn delay={80} y={8}>
          <div className="mb-9 flex items-center gap-3">
            <span className="h-px w-7 bg-nexus-accent" />
            <span className="font-en text-[9.5px] font-semibold uppercase tracking-[0.22em] text-nexus-accent">
              Concept
            </span>
          </div>
        </FadeIn>

        <div className="relative">
          <p className="pointer-events-none absolute -left-1 top-[-34px] font-en text-[64px] font-semibold uppercase leading-none tracking-[-0.09em] text-white/[0.025]">
            Connect
          </p>

          <h2 className="relative font-jp text-[31px] font-medium leading-[1.22] text-white">
            {headline.map((line, index) => (
              <span
                key={line}
                className="concept-sp-title block"
                style={{
                  animationDelay: `${0.46 + index * 0.12}s`,
                }}
              >
                {line}
              </span>
            ))}
          </h2>
        </div>

        <FadeIn delay={820} y={12}>
          <div className="mt-11 border-l border-white/12 pl-5">
            <p className="text-[13.5px] leading-[2.05] tracking-[0.01em] text-white/58">
              NEXUS Integration Partnersは、業務システム導入・データ連携・自動化設計を、
              単体のツール導入としてではなく、企業の情報とプロセスを接続する設計プロジェクトとして捉えます。
            </p>

            <p className="mt-6 text-[13.5px] leading-[2.05] tracking-[0.01em] text-white/58">
              現場で使われること。運用に残ること。改善できること。
              そのために、業務とシステムの間にある見えない断絶を整理します。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={980} y={10}>
          <div className="mt-10 border-y border-white/10 py-5">
            <div className="grid grid-cols-3">
              {[
                ["01", "Connect", "接続"],
                ["02", "Operate", "運用"],
                ["03", "Improve", "改善"],
              ].map(([num, en, ja], index) => (
                <div
                  key={en}
                  className={
                    index < 2
                      ? "border-r border-white/10 pr-3"
                      : "pl-4"
                  }
                >
                  <p className="font-en text-[9.5px] font-semibold uppercase tracking-[0.18em] text-nexus-accent/80">
                    {num}
                  </p>

                  <p className="mt-2 font-en text-[13px] font-medium tracking-[-0.02em] text-white/78">
                    {en}
                  </p>

                  <p className="mt-1 font-jp text-[10px] tracking-[0.04em] text-white/36">
                    {ja}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}