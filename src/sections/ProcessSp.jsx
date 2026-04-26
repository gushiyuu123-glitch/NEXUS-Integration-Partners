import FadeIn from "../components/FadeIn"

const STEPS = [
  {
    num: "01",
    en: "Diagnose",
    ja: "現状整理",
    desc: "業務フロー、利用中のツール、情報の流れを確認し、どこで判断や作業が止まっているのかを整理します。",
    duration: "1–2w",
  },
  {
    num: "02",
    en: "Blueprint",
    ja: "設計・選定",
    desc: "改善効果の高い領域を見極め、必要なシステム、連携方法、運用ルールを設計図としてまとめます。",
    duration: "2–3w",
  },
  {
    num: "03",
    en: "Implement",
    ja: "実装・連携",
    desc: "業務ツールの設定、データ連携、必要に応じたカスタム実装を行い、現場で使える状態へ整えます。",
    duration: "4–8w",
  },
  {
    num: "04",
    en: "Anchor",
    ja: "定着・改善",
    desc: "導入後の使われ方を確認し、改善点を反映。仕組みが一時的な施策で終わらないよう運用に定着させます。",
    duration: "Ongoing",
  },
]

function ProcessLinesSp() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <style>
        {`
          @keyframes processSpTrace {
            0% {
              transform: translateX(-120%);
              opacity: 0;
            }
            18% {
              opacity: 0.8;
            }
            72% {
              opacity: 0.46;
            }
            100% {
              transform: translateX(160%);
              opacity: 0;
            }
          }

          @keyframes processSpFloat {
            0%, 100% {
              transform: translate3d(0, 0, 0);
              opacity: 0.16;
            }
            50% {
              transform: translate3d(8px, -10px, 0);
              opacity: 0.34;
            }
          }

          .process-sp-trace {
            animation: processSpTrace 5.8s cubic-bezier(0.16, 1, 0.3, 1) infinite;
          }

          .process-sp-float {
            animation: processSpFloat 6.4s ease-in-out infinite;
          }
        `}
      </style>

      <div className="process-sp-trace absolute left-0 top-[17%] h-px w-[76%] -rotate-[12deg] bg-gradient-to-r from-transparent via-nexus-accent/55 to-transparent" />
      <div className="process-sp-trace absolute right-0 top-[54%] h-px w-[68%] -rotate-[10deg] bg-gradient-to-r from-transparent via-nexus-accentMint/38 to-transparent [animation-delay:1.4s]" />

      <span className="process-sp-float absolute left-[12%] top-[24%] h-1 w-1 rounded-full bg-nexus-accent shadow-[0_0_18px_rgba(70,199,216,0.55)]" />
      <span className="process-sp-float absolute right-[18%] top-[42%] h-1.5 w-1.5 rounded-full bg-nexus-accentMint shadow-[0_0_20px_rgba(122,220,191,0.38)] [animation-delay:1.2s]" />
      <span className="process-sp-float absolute left-[28%] bottom-[18%] h-1 w-1 rounded-full bg-white/50 [animation-delay:2.1s]" />
    </div>
  )
}

export default function ProcessSp() {
  return (
    <section
      id="process"
      className="relative isolate overflow-hidden bg-nexus-dark px-6 py-24 text-white md:hidden"
    >
      {/* base */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 16% 8%, rgba(70,199,216,0.18), transparent 34%), radial-gradient(circle at 92% 74%, rgba(122,220,191,0.11), transparent 38%), linear-gradient(180deg, #071414 0%, #061010 100%)",
        }}
      />

      {/* grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <ProcessLinesSp />

      <p className="pointer-events-none absolute -left-3 top-10 z-0 font-en text-[86px] font-semibold uppercase leading-none tracking-[-0.09em] text-white/[0.028]">
        Process
      </p>

      <div className="relative z-10">
        {/* Header */}
        <FadeIn y={10}>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-7 bg-nexus-accent" />
            <span className="font-en text-[10px] font-semibold uppercase tracking-[0.22em] text-nexus-accent">
              Process
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={100} y={12}>
          <h2 className="font-jp text-[35px] font-medium leading-[1.15] tracking-[-0.065em] text-white">
            小さく入れて、
            <br />
            深く定着させる。
          </h2>
        </FadeIn>

        <FadeIn delay={190} y={10}>
          <p className="mt-7 max-w-[330px] text-[13.5px] leading-[2.05] tracking-[0.01em] text-white/52">
            システム導入は、勢いだけで進めるほど現場から離れていきます。
            必要な場所から小さく整え、使われ方を見ながら運用へ沈め込んでいきます。
          </p>
        </FadeIn>

        {/* Process rail */}
        <div className="relative mt-16">
          <div className="absolute left-[10px] top-2 bottom-6 w-px bg-white/10" />
          <div className="absolute left-[10px] top-2 h-[72%] w-px bg-gradient-to-b from-nexus-accent via-nexus-accent/26 to-transparent" />

          <div className="space-y-0">
            {STEPS.map((step, index) => (
              <FadeIn key={step.num} delay={230 + index * 90} y={14}>
                <article className="relative border-b border-white/10 pb-10 pl-10 pt-1 last:border-b-0 last:pb-0">
                  {/* node */}
                  <div className="absolute left-0 top-1 flex h-[21px] w-[21px] items-center justify-center rounded-full border border-nexus-accent/55 bg-nexus-dark">
                    <span className="h-1.5 w-1.5 rounded-full bg-nexus-accent shadow-[0_0_16px_rgba(70,199,216,0.9)]" />
                  </div>

                  {/* bg number */}
                  <p className="pointer-events-none absolute right-0 top-[-10px] font-en text-[74px] font-semibold leading-none tracking-[-0.085em] text-white/[0.035]">
                    {step.num}
                  </p>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-en text-[10px] font-semibold uppercase tracking-[0.22em] text-nexus-accent">
                        {step.en}
                      </p>

                      <p className="rounded-[8px] border border-white/10 bg-white/[0.04] px-2.5 py-1 font-en text-[10px] font-semibold tracking-[0.06em] text-white/48">
                        {step.duration}
                      </p>
                    </div>

                    <h3 className="mt-5 font-jp text-[25px] font-medium leading-[1.25] tracking-[-0.055em] text-white">
                      {step.ja}
                    </h3>

                    <p className="mt-5 text-[13px] leading-[2.02] tracking-[0.01em] text-white/48">
                      {step.desc}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <FadeIn delay={650} y={14}>
          <div className="mt-16 border-y border-white/10 py-8">
            <p className="font-en text-[10px] font-semibold uppercase tracking-[0.22em] text-white/24">
              Implementation Policy
            </p>

            <p className="mt-5 font-jp text-[22px] font-medium leading-[1.65] tracking-[-0.055em] text-white">
              導入の目的は、
              <br />
              システムを増やすことではない。
            </p>

            <p className="mt-5 text-[13px] leading-[2] text-white/44">
              人が毎回つなぎ直していた作業を減らし、
              業務が自然に流れる状態をつくることです。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}