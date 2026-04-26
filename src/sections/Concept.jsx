import { useEffect, useRef, useState } from "react"
import FadeIn from "../components/FadeIn"

const headline = [
  "システムを入れる。",
  "ではなく、",
  "業務がつながる",
  "状態を設計する。",
]

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 17) % 84)}%`,
  top: `${10 + ((index * 29) % 76)}%`,
  delay: `${0.15 + (index % 9) * 0.08}s`,
  size: index % 5 === 0 ? "3px" : "2px",
  opacity: 0.22 + (index % 4) * 0.08,
}))

function ConceptParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((dot) => (
        <span
          key={dot.id}
          className="concept-particle absolute rounded-full bg-nexus-accent"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            "--dot-opacity": dot.opacity,
            "--dot-delay": dot.delay,
          }}
        />
      ))}

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.28]"
        viewBox="0 0 1440 620"
        fill="none"
        aria-hidden="true"
      >
        <path
          className="concept-line"
          d="M120 320 C320 180, 460 430, 680 280 C860 158, 1000 250, 1260 120"
          stroke="url(#conceptLineA)"
          strokeWidth="1"
          strokeDasharray="5 14"
        />
        <path
          className="concept-line concept-line-delay"
          d="M40 460 C280 360, 420 520, 690 390 C930 275, 1030 430, 1390 260"
          stroke="url(#conceptLineB)"
          strokeWidth="1"
          strokeDasharray="4 16"
        />

        <defs>
          <linearGradient id="conceptLineA" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#46C7D8" stopOpacity="0" />
            <stop offset="48%" stopColor="#46C7D8" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#7ADCBF" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="conceptLineB" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#7ADCBF" stopOpacity="0" />
            <stop offset="50%" stopColor="#46C7D8" stopOpacity="0.52" />
            <stop offset="100%" stopColor="#A7B8D8" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default function Concept() {
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
        rootMargin: "0px 0px -12% 0px",
      }
    )

    observer.observe(target)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="concept"
      className={`concept-section relative overflow-hidden bg-nexus-dark py-36 text-white md:py-40 ${
        isActive ? "is-active" : ""
      }`}
    >
      <style>
        {`
          @keyframes conceptBandReveal {
            0% {
              transform: translateX(-110%) skewX(-10deg);
              opacity: 0;
            }
            18% {
              opacity: 1;
            }
            72% {
              opacity: 1;
            }
            100% {
              transform: translateX(112%) skewX(-10deg);
              opacity: 0;
            }
          }

          @keyframes conceptSoftBand {
            0% {
              transform: translateX(-35%);
              opacity: 0;
            }
            100% {
              transform: translateX(0%);
              opacity: 1;
            }
          }

          @keyframes conceptTextRise {
            0% {
              opacity: 0;
              transform: translateY(18px);
              filter: blur(5px);
              letter-spacing: -0.09em;
            }
            58% {
              opacity: 0.68;
              filter: blur(1.2px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
              letter-spacing: -0.058em;
            }
          }

          @keyframes conceptParticle {
            0% {
              transform: translate3d(-24px, 10px, 0) scale(0.6);
              opacity: 0;
            }
            35% {
              opacity: var(--dot-opacity);
            }
            100% {
              transform: translate3d(18px, -10px, 0) scale(1);
              opacity: 0.18;
            }
          }

          @keyframes conceptLineFlow {
            0% {
              stroke-dashoffset: 100;
              opacity: 0;
            }
            35% {
              opacity: 1;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 0.55;
            }
          }

          .concept-band-main,
          .concept-band-soft,
          .concept-title-line,
          .concept-particle,
          .concept-line {
            animation-play-state: paused;
          }

          .concept-band-main {
            opacity: 0;
            transform: translateX(-110%) skewX(-10deg);
          }

          .concept-band-soft {
            opacity: 0;
            transform: translateX(-35%);
          }

          .concept-title-line {
            opacity: 0;
            transform: translateY(18px);
            filter: blur(5px);
            letter-spacing: -0.09em;
          }

          .concept-particle {
            opacity: 0;
            box-shadow: 0 0 18px rgba(70, 199, 216, 0.85);
          }

          .concept-line {
            opacity: 0;
            stroke-dashoffset: 100;
          }

          .concept-section.is-active .concept-band-main {
            animation: conceptBandReveal 1.85s cubic-bezier(0.16, 1, 0.3, 1) 0.08s both;
          }

          .concept-section.is-active .concept-band-soft {
            animation: conceptSoftBand 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.24s both;
          }

          .concept-section.is-active .concept-title-line {
            animation: conceptTextRise 1.05s cubic-bezier(0.16, 1, 0.3, 1) both;
          }

          .concept-section.is-active .concept-particle {
            animation: conceptParticle 2.4s ease-out infinite alternate;
            animation-delay: var(--dot-delay);
          }

          .concept-section.is-active .concept-line {
            animation: conceptLineFlow 3.8s ease-out both;
          }

          .concept-section.is-active .concept-line-delay {
            animation-delay: 0.35s;
          }
        `}
      </style>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[7%] top-[14%] h-[280px] w-[280px] rounded-full bg-nexus-accent/12 blur-3xl" />
        <div className="absolute right-[8%] top-[16%] h-[360px] w-[360px] rounded-full bg-nexus-accentBlue/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[34%] h-[360px] w-[520px] rounded-full bg-nexus-accent/8 blur-3xl" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(circle at 24% 18%, rgba(70,199,216,0.12), transparent 34%), radial-gradient(circle at 78% 64%, rgba(122,220,191,0.095), transparent 38%), linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0))",
        }}
      />

      <ConceptParticles />

      <div className="pointer-events-none absolute left-0 top-1/2 z-[1] h-[270px] w-full -translate-y-1/2 overflow-hidden">
        <div className="concept-band-soft absolute inset-y-8 left-0 w-full bg-gradient-to-r from-transparent via-white/[0.045] to-transparent" />

        <div
          className="concept-band-main absolute top-1/2 h-[148px] w-[58%] -translate-y-1/2"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(70,199,216,0.08) 16%, rgba(255,255,255,0.15) 46%, rgba(122,220,191,0.09) 72%, transparent 100%)",
            boxShadow:
              "0 0 70px rgba(70,199,216,0.18), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(255,255,255,0.06)",
            backdropFilter: "blur(8px)",
          }}
        />

        <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-nexus-accent/32 to-transparent" />
      </div>

      <div className="nexus-frame relative z-10 grid gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-end xl:gap-20">
        <div className="min-w-0">
          <FadeIn>
            <div className="mb-10 flex items-center gap-3">
              <span className="h-px w-7 bg-nexus-accent" />
              <span className="font-en text-[10.5px] font-semibold uppercase tracking-[0.22em] text-nexus-accent">
                Concept
              </span>
            </div>
          </FadeIn>

          <div className="relative">
            <div className="pointer-events-none absolute -left-8 top-2 h-[92%] w-px bg-gradient-to-b from-transparent via-nexus-accent/35 to-transparent" />

            <h2 className="font-jp text-[38px] font-medium leading-[1.18] text-white md:text-[54px] xl:text-[60px]">
              {headline.map((line, index) => (
                <span
                  key={line}
                  className="concept-title-line relative block"
                  style={{
                    animationDelay: `${0.52 + index * 0.13}s`,
                  }}
                >
                  <span className="relative z-10">{line}</span>

                  <span
                    className="pointer-events-none absolute -left-4 top-1/2 h-[1px] w-10 -translate-y-1/2 bg-gradient-to-r from-nexus-accent/0 via-nexus-accent/60 to-transparent opacity-0 md:opacity-100"
                    style={{
                      transform: `translateY(-50%) translateX(${index * 9}px)`,
                    }}
                  />
                </span>
              ))}
            </h2>
          </div>
        </div>

        <FadeIn delay={760} y={16}>
          <div className="relative border-l border-white/12 pl-8 md:pl-10">
            <div className="absolute -left-px top-0 h-16 w-px bg-gradient-to-b from-nexus-accent to-transparent" />

            <p className="max-w-[580px] text-[15px] leading-[2.18] tracking-[0.01em] text-white/58">
              NEXUS Integration Partnersは、業務システム導入・データ連携・自動化設計を、
              単体のツール導入としてではなく、企業の情報とプロセスを接続する
              設計プロジェクトとして捉えます。
            </p>

            <p className="mt-8 max-w-[580px] text-[15px] leading-[2.18] tracking-[0.01em] text-white/58">
              現場で使われること。運用に残ること。改善できること。
              そのために、業務とシステムの間にある見えない断絶を整理します。
            </p>

            <div className="mt-10 grid max-w-[520px] grid-cols-3 border-t border-white/10 pt-7">
              {[
                ["01", "Connect"],
                ["02", "Automate"],
                ["03", "Anchor"],
              ].map(([num, label], index) => (
                <div
                  key={label}
                  className={index < 2 ? "border-r border-white/10 pr-5" : "pl-5"}
                >
                  <p className="font-en text-[10px] uppercase tracking-[0.18em] text-nexus-accent/80">
                    {num}
                  </p>
                  <p className="mt-2 font-en text-[15px] font-medium tracking-[-0.02em] text-white/76">
                    {label}
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