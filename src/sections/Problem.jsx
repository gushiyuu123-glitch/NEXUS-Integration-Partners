import FadeIn from "../components/FadeIn"

const problemImage = "/images/problem-workflow1.png"

const problemPoints = [
  {
    label: "01",
    title: "情報が分散する",
    text: "必要な情報が、販売管理・表計算・チャットなど別々の場所に残る。",
  },
  {
    label: "02",
    title: "判断が属人化する",
    text: "誰かの経験や記憶に頼らないと、次の動きが見えにくくなる。",
  },
  {
    label: "03",
    title: "手作業が増える",
    text: "転記・確認・二重入力が残り、現場の時間が静かに削られていく。",
  },
]

function ProblemBackgroundLines() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <style>
        {`
          @keyframes problemBgLineFlow {
            0% {
              stroke-dashoffset: 180;
              opacity: 0;
            }
            28% {
              opacity: 0.12;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 0.22;
            }
          }

          @keyframes problemBgLineSlow {
            0% {
              stroke-dashoffset: 240;
              opacity: 0;
            }
            32% {
              opacity: 0.07;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 0.16;
            }
          }

          @keyframes problemBgBreath {
            0%, 100% {
              opacity: 0.1;
              transform: scale(1);
            }
            50% {
              opacity: 0.2;
              transform: scale(1.04);
            }
          }

          @keyframes problemPointRise {
            0% {
              opacity: 0;
              transform: translate3d(0, 10px, 0);
            }
            100% {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }

          .problem-bg-line {
            animation: problemBgLineFlow 5.4s cubic-bezier(0.16, 1, 0.3, 1) both;
          }

          .problem-bg-line-slow {
            animation: problemBgLineSlow 6.4s cubic-bezier(0.16, 1, 0.3, 1) both;
          }

          .problem-bg-delay-1 {
            animation-delay: 0.2s;
          }

          .problem-bg-delay-2 {
            animation-delay: 0.42s;
          }

          .problem-bg-breath {
            animation: problemBgBreath 6.4s ease-in-out infinite;
          }

          .problem-point {
            opacity: 0;
            transform: translate3d(0, 10px, 0);
            animation: problemPointRise 880ms cubic-bezier(0.18, 0.72, 0.18, 1) both;
            animation-delay: var(--problem-point-delay, 0ms);
          }

          @media (prefers-reduced-motion: reduce) {
            .problem-bg-line,
            .problem-bg-line-slow,
            .problem-bg-breath,
            .problem-point {
              animation: none;
              opacity: 1;
              transform: none;
            }
          }
        `}
      </style>

      <div className="problem-bg-breath absolute left-[-10%] top-[10%] h-[320px] w-[320px] rounded-full bg-nexus-accent/[0.06] blur-3xl" />
      <div className="absolute right-[-10%] top-[26%] h-[360px] w-[360px] rounded-full bg-nexus-accentBlue/[0.06] blur-3xl" />
      <div className="absolute bottom-[-20%] left-[34%] h-[300px] w-[520px] rounded-full bg-nexus-accent/[0.045] blur-3xl" />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.34]"
        viewBox="0 0 1600 900"
        fill="none"
      >
        <defs>
          <linearGradient id="problemBgA" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#46C7D8" stopOpacity="0" />
            <stop offset="48%" stopColor="#46C7D8" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#46C7D8" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="problemBgB" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7ADCBF" stopOpacity="0" />
            <stop offset="52%" stopColor="#7ADCBF" stopOpacity="0.26" />
            <stop offset="100%" stopColor="#7ADCBF" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="problemBgC" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A7B8D8" stopOpacity="0" />
            <stop offset="50%" stopColor="#46C7D8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#A7B8D8" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          className="problem-bg-line"
          d="M-80 176 C180 124, 330 260, 552 202 C762 148, 934 190, 1132 124 C1280 76, 1416 72, 1680 132"
          stroke="url(#problemBgA)"
          strokeWidth="1"
          strokeDasharray="8 18"
        />

        <path
          className="problem-bg-line-slow problem-bg-delay-1"
          d="M-40 538 C208 466, 362 620, 592 562 C820 504, 990 614, 1222 542 C1370 496, 1496 502, 1680 562"
          stroke="url(#problemBgB)"
          strokeWidth="1"
          strokeDasharray="10 20"
        />

        <path
          className="problem-bg-line-slow problem-bg-delay-2"
          d="M238 850 C430 724, 624 720, 802 614 C984 506, 1162 520, 1402 382 C1514 318, 1584 264, 1660 188"
          stroke="url(#problemBgC)"
          strokeWidth="1"
          strokeDasharray="7 17"
        />

        <path
          className="problem-bg-line-slow"
          d="M92 252 H412"
          stroke="url(#problemBgA)"
          strokeWidth="1"
        />

        <path
          className="problem-bg-line-slow problem-bg-delay-1"
          d="M1080 236 H1508"
          stroke="url(#problemBgB)"
          strokeWidth="1"
        />

        <path
          className="problem-bg-line-slow problem-bg-delay-2"
          d="M1168 704 H1540"
          stroke="url(#problemBgA)"
          strokeWidth="1"
        />
      </svg>
    </div>
  )
}

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden bg-nexus-bg py-28 md:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-95"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.86) 0%, rgba(247,250,252,0.44) 44%, rgba(238,246,248,0.98) 100%)",
        }}
      />

      <ProblemBackgroundLines />

      <div className="nexus-frame relative">
        <div className="grid gap-16 lg:grid-cols-[0.94fr_1.06fr] lg:items-center xl:gap-20">
          {/* Text */}
          <FadeIn duration={980} y={18} threshold={0.12} rootMargin="0px 0px -10% 0px">
            <div className="relative min-w-0 lg:pr-4">
              <div className="mb-9 flex items-center gap-3">
                <span className="h-px w-7 bg-nexus-accent" />
                <span className="font-en text-[10.5px] font-semibold uppercase tracking-[0.22em] text-nexus-accentDeep">
                  Problem
                </span>
              </div>

              <h2 className="font-jp text-[34px] font-medium leading-[1.22] tracking-[-0.055em] text-nexus-dark md:text-[46px] xl:text-[50px]">
                システムを増やすほど、
                <br />
                業務はなぜか
                <br />
                見えにくくなる。
              </h2>

              <div className="mt-9 max-w-[560px] space-y-6 text-[14.5px] leading-[2.12] tracking-[0.01em] text-nexus-muted md:text-[15px]">
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

                <p>
                  だから、導入の前にまず分断を見つける。
                  どこで情報が止まり、どこで手作業が生まれ、
                  どこから整えれば現場が軽くなるのかを、業務の構造から見直します。
                </p>
              </div>

              <div className="mt-11 border-l border-nexus-accent/40 pl-6">
                <p className="font-jp text-[17px] font-medium leading-[1.82] tracking-[-0.04em] text-nexus-dark md:text-[20px]">
                  導入する前に、流れを整える。
                  <br />
                  それが、使われ続ける仕組みの出発点です。
                </p>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:max-w-[560px]">
                {problemPoints.map((item, index) => (
                  <div
                    key={item.label}
                    className="problem-point rounded-2xl border border-nexus-line/70 bg-white/56 px-4 py-4 shadow-[0_18px_46px_rgba(11,31,42,0.045)] backdrop-blur-sm"
                    style={{
                      "--problem-point-delay": `${260 + index * 120}ms`,
                    }}
                  >
                    <p className="font-en text-[10px] tracking-[0.2em] text-nexus-accentDeep/70">
                      {item.label}
                    </p>

                    <h3 className="mt-3 font-jp text-[14px] font-medium tracking-[-0.04em] text-nexus-dark">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[12.5px] leading-[1.8] text-nexus-muted">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Image */}
          <FadeIn delay={180} duration={1180} y={22} threshold={0.12} rootMargin="0px 0px -10% 0px">
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-[42px] bg-nexus-accent/10 blur-3xl"
                aria-hidden="true"
              />

              <figure className="relative overflow-hidden rounded-[34px] border border-white/70 bg-white/60 shadow-soft">
                <img
                  src={problemImage}
                  alt="業務フローとシステム連携を確認するビジネスシーン"
                  className="h-[390px] w-full object-cover md:h-[500px] lg:h-[540px]"
                  style={{
                    objectPosition: "center center",
                  }}
                />

                <div
                  className="absolute inset-0"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(11,31,42,0.01) 0%, rgba(11,31,42,0.08) 56%, rgba(11,31,42,0.36) 100%)",
                  }}
                />

                <div
                  className="absolute inset-0 opacity-[0.14]"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.22) 1px, transparent 1px)",
                    backgroundSize: "46px 46px",
                  }}
                />

                <div className="absolute right-5 top-5 hidden max-w-[230px] rounded-2xl border border-white/30 bg-white/16 p-4 text-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] backdrop-blur-md md:block">
                  <p className="font-en text-[10px] uppercase tracking-[0.22em] text-white/62">
                    Hidden Cost
                  </p>

                  <p className="mt-2 font-jp text-[14px] font-medium leading-[1.7] tracking-[-0.04em]">
                    見えない手作業が、
                    <br />
                    業務の速度を落としていく。
                  </p>
                </div>

                <figcaption className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
                  <p className="font-en text-[10px] uppercase tracking-[0.22em] text-white/58">
                    Business Flow / System Integration
                  </p>

                  <p className="mt-3 max-w-[420px] font-jp text-[16px] font-medium leading-[1.72] tracking-[-0.04em] text-white md:text-[19px]">
                    ばらばらの情報を、現場で使える流れへ整える。
                  </p>
                </figcaption>
              </figure>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}