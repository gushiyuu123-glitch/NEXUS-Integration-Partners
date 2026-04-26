import FadeIn from "../components/FadeIn"

const problemImage = "/images/problem-workflow1.png"

const problemPoints = [
  {
    label: "01",
    title: "情報が分散する",
    text: "販売管理、表計算、チャットなどに情報が残り、必要な確認に時間がかかる。",
  },
  {
    label: "02",
    title: "判断が属人化する",
    text: "経験や記憶に頼る場面が増え、担当者が変わると流れが止まりやすい。",
  },
  {
    label: "03",
    title: "手作業が残り続ける",
    text: "転記、確認、二重入力が積み重なり、現場の時間を静かに削っていく。",
  },
]

function ProblemLinesSp() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <style>
        {`
          @keyframes problemSpLineDraw {
            0% {
              stroke-dashoffset: 620;
              opacity: 0;
            }
            28% {
              opacity: 0.22;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 0.16;
            }
          }

          @keyframes problemSpGlow {
            0%, 100% {
              opacity: 0.36;
              transform: scale(1);
            }
            50% {
              opacity: 0.68;
              transform: scale(1.04);
            }
          }

          .problem-sp-line {
            stroke-dasharray: 620;
            animation: problemSpLineDraw 5.6s cubic-bezier(0.16, 1, 0.3, 1) both;
          }

          .problem-sp-glow {
            animation: problemSpGlow 7.2s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .problem-sp-line,
            .problem-sp-glow {
              animation: none;
            }
          }
        `}
      </style>

      <div className="problem-sp-glow absolute -left-[38%] top-[8%] h-[300px] w-[300px] rounded-full bg-nexus-accent/[0.075] blur-3xl" />
      <div className="absolute -right-[42%] top-[38%] h-[330px] w-[330px] rounded-full bg-nexus-accentBlue/[0.065] blur-3xl" />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.55]"
        viewBox="0 0 390 980"
        fill="none"
      >
        <defs>
          <linearGradient id="problemSpLineA" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#46C7D8" stopOpacity="0" />
            <stop offset="48%" stopColor="#46C7D8" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#7ADCBF" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="problemSpLineB" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7ADCBF" stopOpacity="0" />
            <stop offset="50%" stopColor="#46C7D8" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#7ADCBF" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          className="problem-sp-line"
          d="M-48 148 C44 110, 112 188, 204 142 C270 110, 318 118, 442 78"
          stroke="url(#problemSpLineA)"
          strokeWidth="0.8"
          strokeDasharray="6 16"
        />

        <path
          className="problem-sp-line"
          d="M-34 482 C78 428, 144 528, 238 462 C304 416, 356 438, 430 394"
          stroke="url(#problemSpLineB)"
          strokeWidth="0.8"
          strokeDasharray="7 17"
          style={{ animationDelay: "0.28s" }}
        />

        <path
          className="problem-sp-line"
          d="M38 716 C128 648, 202 678, 270 604 C316 554, 350 520, 424 494"
          stroke="url(#problemSpLineA)"
          strokeWidth="0.75"
          strokeDasharray="5 18"
          style={{ animationDelay: "0.48s" }}
        />

        <path
          className="problem-sp-line"
          d="M36 252 H210"
          stroke="url(#problemSpLineA)"
          strokeWidth="0.75"
          opacity="0.14"
          style={{ animationDelay: "0.62s" }}
        />

        <path
          className="problem-sp-line"
          d="M276 188 V372"
          stroke="url(#problemSpLineB)"
          strokeWidth="0.75"
          opacity="0.12"
          style={{ animationDelay: "0.72s" }}
        />
      </svg>
    </div>
  )
}

export default function ProblemSp() {
  return (
    <section
      id="problem"
      className="relative isolate overflow-hidden bg-nexus-bg px-6 pb-28 pt-24 md:hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(247,250,252,0.62) 44%, rgba(238,246,248,0.98) 100%)",
        }}
      />

      <ProblemLinesSp />

      <div className="relative z-10">
        <FadeIn duration={880} y={12} threshold={0.12}>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-7 bg-nexus-accent" />
            <span className="font-en text-[9.5px] font-semibold uppercase tracking-[0.22em] text-nexus-accentDeep">
              Problem
            </span>
          </div>

          <h2 className="font-jp text-[31px] font-medium leading-[1.24] tracking-[-0.06em] text-nexus-dark">
            システムを増やすほど、
            <br />
            業務はなぜか
            <br />
            見えにくくなる。
          </h2>
        </FadeIn>

        <FadeIn delay={160} duration={980} y={16} threshold={0.12}>
          <figure className="relative mt-11 overflow-hidden rounded-[24px] border border-white/70 bg-white/50 shadow-[0_24px_70px_rgba(11,31,42,0.1)]">
            <img
              src={problemImage}
              alt="業務フローとシステム連携を確認するビジネスシーン"
              className="h-[360px] w-full object-cover"
              style={{
                objectPosition: "center center",
                filter: "contrast(1.06) brightness(0.98) saturate(1.02)",
              }}
            />

            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(180deg, rgba(11,31,42,0.02) 0%, rgba(11,31,42,0.08) 48%, rgba(11,31,42,0.46) 100%)",
              }}
            />

            <div
              className="absolute inset-0 opacity-[0.14]"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.24) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.24) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            <figcaption className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-en text-[9px] uppercase tracking-[0.22em] text-white/56">
                Business Flow / System Integration
              </p>

              <p className="mt-3 max-w-[270px] font-jp text-[15px] font-medium leading-[1.74] tracking-[-0.04em] text-white">
                ばらばらの情報を、
                <br />
                現場で使える流れへ整える。
              </p>
            </figcaption>
          </figure>
        </FadeIn>

        <FadeIn delay={260} duration={880} y={14} threshold={0.12}>
          <div className="mt-11 space-y-6 text-[13.5px] leading-[2.05] tracking-[0.01em] text-nexus-muted">
            <p>
              販売管理、顧客管理、表計算、社内チャット。
              便利なツールは増えているのに、必要な情報は別々の場所に残り、
              判断のたびに人がつなぎ直している。
            </p>

            <p>
              問題は、システムが足りないことではありません。
              業務の流れ、情報の置き場所、判断の順番が整理されないまま、
              新しい仕組みだけが追加されていくことです。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={360} duration={880} y={14} threshold={0.12}>
          <div className="mt-10 border-l border-nexus-accent/45 pl-5">
            <p className="font-jp text-[16px] font-medium leading-[1.85] tracking-[-0.04em] text-nexus-dark">
              導入する前に、流れを整える。
              <br />
              それが、使われ続ける仕組みの出発点です。
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 border-y border-nexus-line">
          {problemPoints.map((item, index) => (
            <FadeIn
              key={item.label}
              delay={440 + index * 90}
              duration={760}
              y={10}
              threshold={0.12}
            >
              <div className="grid grid-cols-[42px_1fr] gap-4 border-b border-nexus-line py-6 last:border-b-0">
                <p className="font-en text-[10px] font-semibold tracking-[0.18em] text-nexus-accentDeep">
                  {item.label}
                </p>

                <div>
                  <h3 className="font-jp text-[15.5px] font-medium leading-[1.65] tracking-[-0.04em] text-nexus-dark">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[12.5px] leading-[1.9] tracking-[0.01em] text-nexus-muted">
                    {item.text}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}