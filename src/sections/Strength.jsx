import FadeIn from "../components/FadeIn"

const flows = [
  {
    num: "01",
    title: "業務を読む",
    text: "現場で何が止まり、どこで人がつなぎ直しているかを見つける。",
  },
  {
    num: "02",
    title: "仕組みに変える",
    text: "情報の置き場、確認の流れ、連携の順序を設計する。",
  },
  {
    num: "03",
    title: "運用に残す",
    text: "使われる状態まで整え、小さく改善しながら定着させる。",
  },
]

function StructureVisual() {
  return (
    <div className="relative min-h-[500px] overflow-hidden border-y border-nexus-line bg-white/52 md:min-h-[600px]">
      <style>
        {`
          @keyframes strengthTrace {
            0% {
              stroke-dashoffset: 420;
              opacity: 0;
            }
            28% {
              opacity: 0.46;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 0.46;
            }
          }

          @keyframes strengthFloat {
            0%, 100% {
              transform: translate3d(0, 0, 0);
            }
            50% {
              transform: translate3d(0, -6px, 0);
            }
          }

          .strength-trace {
            stroke-dasharray: 9 18;
            animation: strengthTrace 7.2s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate;
          }

          .strength-float {
            animation: strengthFloat 9.5s ease-in-out infinite;
          }
        `}
      </style>

      {/* base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.96) 0%, rgba(247,250,252,0.82) 46%, rgba(238,246,248,0.88) 100%)",
        }}
      />

      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.105]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(11,31,42,0.13) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,31,42,0.13) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* background word */}
      <p className="pointer-events-none absolute -left-4 top-8 font-en text-[82px] font-semibold uppercase leading-none tracking-[-0.08em] text-nexus-dark/[0.028] md:text-[132px]">
        Flow
      </p>

      <svg
        className="absolute inset-0 h-full w-full opacity-90"
        viewBox="0 0 680 600"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="strengthLineA" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#46C7D8" stopOpacity="0" />
            <stop offset="48%" stopColor="#46C7D8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7ADCBF" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="strengthLineB" x1="1" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#A7B8D8" stopOpacity="0" />
            <stop offset="48%" stopColor="#46C7D8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7ADCBF" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          className="strength-trace"
          d="M74 176 C184 102, 266 218, 352 174 C444 126, 514 184, 610 116"
          stroke="url(#strengthLineA)"
          strokeWidth="1"
        />

        <path
          className="strength-trace"
          d="M70 392 C180 300, 292 420, 386 328 C468 248, 540 308, 616 246"
          stroke="url(#strengthLineB)"
          strokeWidth="1"
          style={{ animationDelay: "1s" }}
        />

        <path
          d="M126 92 V512"
          stroke="#0B1F2A"
          strokeOpacity="0.065"
          strokeWidth="1"
        />
        <path
          d="M340 92 V512"
          stroke="#0B1F2A"
          strokeOpacity="0.065"
          strokeWidth="1"
        />
        <path
          d="M554 92 V512"
          stroke="#0B1F2A"
          strokeOpacity="0.065"
          strokeWidth="1"
        />

        <circle cx="126" cy="176" r="3.5" fill="#46C7D8" opacity="0.58" />
        <circle cx="340" cy="328" r="3.5" fill="#7ADCBF" opacity="0.52" />
        <circle cx="554" cy="246" r="3.5" fill="#46C7D8" opacity="0.5" />
      </svg>

      <div className="relative z-10 flex min-h-[500px] flex-col justify-end px-7 pb-8 pt-24 md:min-h-[600px] md:px-10 md:pb-10">
        <div className="ml-auto w-full max-w-[420px]">
          <div className="mb-8 border-l border-nexus-accent/38 pl-5">
            <p className="font-en text-[10px] font-semibold uppercase tracking-[0.24em] text-nexus-accentDeep/80">
              Workflow First
            </p>

            <p className="mt-4 font-jp text-[22px] font-medium leading-[1.58] tracking-[-0.055em] text-nexus-dark md:text-[27px]">
              道具ではなく、
              <br />
              流れを設計する。
            </p>
          </div>

          <div className="space-y-4">
            {flows.map((item, index) => (
              <div
                key={item.num}
                className="strength-float border-t border-nexus-line/75 pt-4"
                style={{ animationDelay: `${index * 0.72}s` }}
              >
                <div className="grid grid-cols-[42px_1fr] gap-4">
                  <p className="font-en text-[11px] font-semibold tracking-[0.1em] text-nexus-accentDeep/82">
                    {item.num}
                  </p>

                  <div>
                    <h3 className="font-jp text-[16px] font-medium tracking-[-0.04em] text-nexus-dark">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[12.5px] leading-[1.9] text-nexus-muted">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="absolute bottom-8 left-7 font-en text-[10px] uppercase tracking-[0.22em] text-nexus-muted/50 md:bottom-10 md:left-10">
          System / Workflow / Operation
        </p>
      </div>
    </div>
  )
}

export default function Strength() {
  return (
    <section
      id="strength"
      className="relative overflow-hidden bg-white py-32 md:py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-95"
        style={{
          background:
            "linear-gradient(180deg, rgba(247,250,252,0.82) 0%, rgba(255,255,255,1) 45%, rgba(247,250,252,0.86) 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-nexus-accent/32 to-transparent" />

      <p className="pointer-events-none absolute right-[-5%] top-20 font-en text-[100px] font-semibold uppercase leading-none tracking-[-0.08em] text-nexus-dark/[0.026] md:text-[180px] lg:text-[230px]">
        Strength
      </p>

      <div className="pointer-events-none absolute left-[-12%] top-[16%] h-[360px] w-[360px] rounded-full bg-nexus-accent/7 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[8%] right-[-10%] h-[380px] w-[380px] rounded-full bg-nexus-accentBlue/9 blur-3xl" />

      <div className="nexus-frame relative">
        <div className="grid gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center xl:gap-24">
          {/* Visual */}
          <FadeIn delay={80} y={18} duration={1040}>
            <StructureVisual />
          </FadeIn>

          {/* Text */}
          <FadeIn delay={180} y={18} duration={1060}>
            <div className="min-w-0 lg:pl-8">
              <div className="mb-10 flex items-center gap-3">
                <span className="h-px w-7 bg-nexus-accent" />
                <span className="font-en text-[10.5px] font-semibold uppercase tracking-[0.22em] text-nexus-accentDeep">
                  Strength
                </span>
              </div>

              <h2 className="font-jp text-[34px] font-medium leading-[1.22] tracking-[-0.055em] text-nexus-dark md:text-[46px] xl:text-[52px]">
                導入して終わる
                <br />
                仕組みではなく、
                <br />
                現場に残る流れを
                <br />
                設計する。
              </h2>

              <div className="mt-9 max-w-[590px] space-y-6 text-[14.5px] leading-[2.12] tracking-[0.01em] text-nexus-muted md:text-[15px]">
                <p>
                  システム導入で本当に難しいのは、導入そのものではありません。
                  現場の人が自然に使い、判断の速度が上がり、
                  日々の業務の中に無理なく残っていくことです。
                </p>

                <p>
                  そのために、私たちはツール選定から始めません。
                  業務の流れ、情報の置き場所、確認作業の重なり、
                  人が毎回つなぎ直している手間を読み解くところから始めます。
                </p>

                <p>
                  必要な仕組みだけを選び、既存の業務と接続し、
                  小さく試しながら定着させる。導入前の整理から、
                  導入後の改善までをひとつの流れとして設計します。
                </p>
              </div>

              <div className="mt-12 max-w-[540px] border-y border-nexus-line py-7">
                <p className="font-en text-[10px] font-semibold uppercase tracking-[0.22em] text-nexus-accentDeep">
                  Not Tool First, Workflow First.
                </p>

                <p className="mt-4 font-jp text-[17px] font-medium leading-[1.85] tracking-[-0.04em] text-nexus-dark/84 md:text-[20px]">
                  道具を増やすのではなく、業務が自然に流れる状態をつくる。
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}