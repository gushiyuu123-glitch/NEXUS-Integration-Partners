import FadeIn from "../components/FadeIn"

const points = [
  { label: "Flow", ja: "業務", x: "18%", y: "26%" },
  { label: "Data", ja: "情報", x: "76%", y: "30%" },
  { label: "System", ja: "仕組み", x: "22%", y: "68%" },
  { label: "Operation", ja: "運用", x: "72%", y: "72%" },
]

function StructureVisualSp() {
  return (
    <div className="relative mt-12 min-h-[360px] overflow-hidden border-y border-nexus-line bg-white/58">
      <style>
        {`
          @keyframes strengthSpTrace {
            0% {
              stroke-dashoffset: 620;
              opacity: 0;
            }
            26% {
              opacity: 0.48;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 0.42;
            }
          }

          @keyframes strengthSpFloat {
            0%, 100% {
              transform: translate3d(-50%, -50%, 0);
            }
            50% {
              transform: translate3d(-50%, calc(-50% - 5px), 0);
            }
          }

          @keyframes strengthSpPulse {
            0%, 100% {
              opacity: 0.36;
              transform: scale(1);
            }
            50% {
              opacity: 0.82;
              transform: scale(1.18);
            }
          }

          .strength-sp-line {
            stroke-dasharray: 620;
            animation: strengthSpTrace 4.8s cubic-bezier(0.16, 1, 0.3, 1) both;
          }

          .strength-sp-node {
            animation: strengthSpFloat 8.2s ease-in-out infinite;
          }

          .strength-sp-pulse {
            transform-origin: center;
            animation: strengthSpPulse 3.8s ease-in-out infinite;
          }
        `}
      </style>

      {/* base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(247,250,252,0.82) 48%, rgba(235,247,249,0.82) 100%)",
        }}
      />

      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.105]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(11,31,42,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,31,42,0.14) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* background word */}
      <p className="pointer-events-none absolute -left-3 top-7 font-en text-[76px] font-semibold uppercase leading-none tracking-[-0.08em] text-nexus-dark/[0.035]">
        Flow
      </p>

      {/* light */}
      <div className="pointer-events-none absolute left-[-18%] top-[8%] h-[220px] w-[220px] rounded-full bg-nexus-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-18%] right-[-18%] h-[260px] w-[260px] rounded-full bg-nexus-accentMint/10 blur-3xl" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 390 360"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="strengthSpLineA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#46C7D8" stopOpacity="0" />
            <stop offset="48%" stopColor="#46C7D8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7ADCBF" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="strengthSpLineB" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7ADCBF" stopOpacity="0" />
            <stop offset="46%" stopColor="#46C7D8" stopOpacity="0.36" />
            <stop offset="100%" stopColor="#46C7D8" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          className="strength-sp-line"
          d="M48 96 C128 46, 176 132, 226 104 C286 70, 316 94, 370 52"
          stroke="url(#strengthSpLineA)"
          strokeWidth="1"
          style={{ animationDelay: "0.1s" }}
        />

        <path
          className="strength-sp-line"
          d="M36 248 C112 194, 164 276, 222 224 C272 178, 316 210, 374 170"
          stroke="url(#strengthSpLineB)"
          strokeWidth="1"
          style={{ animationDelay: "0.28s" }}
        />

        <path
          className="strength-sp-line"
          d="M78 90 C112 160, 106 212, 86 272"
          stroke="url(#strengthSpLineA)"
          strokeWidth="0.8"
          opacity="0.28"
          style={{ animationDelay: "0.45s" }}
        />

        <path
          className="strength-sp-line"
          d="M300 92 C262 158, 274 220, 302 284"
          stroke="url(#strengthSpLineB)"
          strokeWidth="0.8"
          opacity="0.24"
          style={{ animationDelay: "0.62s" }}
        />

        <circle
          className="strength-sp-pulse"
          cx="195"
          cy="178"
          r="3"
          fill="#46C7D8"
        />
      </svg>

      {/* center core */}
      <div className="absolute left-1/2 top-1/2 z-10 w-[152px] -translate-x-1/2 -translate-y-1/2 border border-nexus-dark/10 bg-nexus-dark px-5 py-5 text-center shadow-[0_24px_70px_rgba(11,31,42,0.18)]">
        <p className="font-en text-[10px] font-semibold uppercase tracking-[0.22em] text-nexus-accent">
          Nexus
        </p>
        <p className="mt-3 font-jp text-[16px] font-medium leading-[1.55] tracking-[-0.05em] text-white">
          現場に残る
          <br />
          流れへ
        </p>
      </div>

      {points.map((point, index) => (
        <div
          key={point.label}
          className="strength-sp-node absolute z-10"
          style={{
            left: point.x,
            top: point.y,
            animationDelay: `${index * 0.42}s`,
          }}
        >
          <div className="border border-nexus-line bg-white/78 px-3.5 py-2 backdrop-blur-sm">
            <p className="font-en text-[9px] font-semibold uppercase tracking-[0.14em] text-nexus-accentDeep">
              {point.label}
            </p>
            <p className="mt-1 font-jp text-[10px] tracking-[0.04em] text-nexus-muted">
              {point.ja}
            </p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-5 left-5 right-5 z-10 border-t border-nexus-line pt-4">
        <div className="flex items-center justify-between gap-5">
          <p className="font-en text-[9px] uppercase tracking-[0.22em] text-nexus-muted/70">
            Workflow First
          </p>
          <p className="font-jp text-[10.5px] leading-[1.7] tracking-[0.02em] text-nexus-muted">
            道具ではなく、流れから設計する。
          </p>
        </div>
      </div>
    </div>
  )
}

export default function StrengthSp() {
  return (
    <section
      id="strength"
      className="relative overflow-hidden bg-white py-24 md:hidden"
    >
      {/* background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-95"
        style={{
          background:
            "linear-gradient(180deg, rgba(247,250,252,0.78) 0%, rgba(255,255,255,1) 42%, rgba(247,250,252,0.92) 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-nexus-accent/34 to-transparent" />

      <p className="pointer-events-none absolute right-[-10%] top-16 font-en text-[94px] font-semibold uppercase leading-none tracking-[-0.085em] text-nexus-dark/[0.028]">
        Strength
      </p>

      <div className="relative z-10 px-6">
        <FadeIn y={12}>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-7 bg-nexus-accent" />
            <span className="font-en text-[10px] font-semibold uppercase tracking-[0.22em] text-nexus-accentDeep">
              Strength
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={100} y={14} duration={860}>
          <h2 className="font-jp text-[31px] font-medium leading-[1.24] tracking-[-0.06em] text-nexus-dark">
            導入して終わる
            <br />
            仕組みではなく、
            <br />
            現場に残る流れを
            <br />
            設計する。
          </h2>
        </FadeIn>

        <FadeIn delay={210} y={12} duration={860}>
          <p className="ml-auto mt-8 max-w-[315px] text-[13.5px] leading-[2.05] tracking-[0.01em] text-nexus-muted">
            システム導入で本当に難しいのは、導入そのものではありません。
            現場の人が自然に使い、判断の速度が上がり、
            日々の業務の中に無理なく残っていくことです。
          </p>
        </FadeIn>

        <FadeIn delay={320} y={18} duration={980}>
          <StructureVisualSp />
        </FadeIn>

        <FadeIn delay={430} y={14} duration={900}>
          <div className="ml-auto mt-11 max-w-[325px] space-y-6 text-[13.5px] leading-[2.08] tracking-[0.01em] text-nexus-muted">
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
        </FadeIn>

        <FadeIn delay={540} y={12} duration={860}>
          <div className="mt-11 border-y border-nexus-line py-6">
            <p className="font-en text-[9.5px] font-semibold uppercase tracking-[0.22em] text-nexus-accentDeep">
              Not Tool First, Workflow First.
            </p>

            <p className="mt-4 font-jp text-[16px] font-medium leading-[1.8] tracking-[-0.045em] text-nexus-dark/86">
              道具を増やすのではなく、業務が自然に流れる状態をつくる。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}