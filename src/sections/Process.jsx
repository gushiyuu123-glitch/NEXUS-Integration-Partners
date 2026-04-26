// src/sections/Process.jsx
import FadeIn from "../components/FadeIn"

const STEPS = [
  {
    num: "01",
    en: "Diagnose",
    ja: "現状整理",
    desc: "業務フロー、利用中のツール、情報の流れをヒアリングし、どこで判断や作業が止まっているのかを整理します。",
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

const PARTICLES = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${4 + ((index * 17) % 92)}%`,
  top: `${6 + ((index * 23) % 82)}%`,
  size: index % 7 === 0 ? 3 : index % 5 === 0 ? 2.5 : 2,
  delay: `${(index % 12) * 0.22}s`,
  duration: `${4.8 + (index % 6) * 0.55}s`,
  opacity: 0.12 + (index % 4) * 0.035,
}))

function ProcessParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((dot) => (
        <span
          key={dot.id}
          className="process-particle absolute rounded-full"
          style={{
            left: dot.left,
            top: dot.top,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            opacity: dot.opacity,
            animationDelay: dot.delay,
            animationDuration: dot.duration,
          }}
        />
      ))}
    </div>
  )
}

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-nexus-dark py-32 text-white md:py-40"
    >
      <style>
        {`
          @keyframes processRail {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }

            18% {
              opacity: 1;
            }

            82% {
              opacity: 1;
            }

            100% {
              transform: translateX(220%);
              opacity: 0;
            }
          }

          @keyframes processParticleFloat {
            0% {
              transform: translate3d(-10px, 8px, 0) scale(0.92);
              opacity: 0;
            }

            20% {
              opacity: var(--particle-opacity, 0.16);
            }

            50% {
              opacity: calc(var(--particle-opacity, 0.16) + 0.08);
            }

            100% {
              transform: translate3d(12px, -10px, 0) scale(1.06);
              opacity: 0;
            }
          }

          .process-particle {
            --particle-opacity: 0.16;
            background:
              radial-gradient(circle, rgba(70, 199, 216, 0.95) 0%, rgba(70, 199, 216, 0.48) 45%, rgba(70, 199, 216, 0) 100%);
            box-shadow:
              0 0 14px rgba(70, 199, 216, 0.18),
              0 0 28px rgba(122, 220, 191, 0.08);
            animation: processParticleFloat ease-in-out infinite alternate;
            will-change: transform, opacity;
          }
        `}
      </style>

      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(circle at 16% 8%, rgba(70,199,216,0.16), transparent 32%), radial-gradient(circle at 84% 78%, rgba(122,220,191,0.11), transparent 36%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0))",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.16) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* 粒子追加 */}
      <ProcessParticles />

      {/* うっすら光膜 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[14%] top-[10%] h-[240px] w-[240px] rounded-full bg-[#46C7D8]/[0.06] blur-3xl" />
        <div className="absolute right-[10%] top-[18%] h-[300px] w-[300px] rounded-full bg-[#7ADCBF]/[0.05] blur-3xl" />
        <div className="absolute left-1/2 top-[58%] h-[280px] w-[540px] -translate-x-1/2 rounded-full bg-[#46C7D8]/[0.04] blur-3xl" />
      </div>

      <p className="pointer-events-none absolute -left-8 top-20 font-en text-[120px] font-semibold uppercase leading-none tracking-[-0.08em] text-white/[0.025] md:text-[210px] lg:text-[280px]">
        Process
      </p>
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          background:
            "radial-gradient(circle at 16% 8%, rgba(70,199,216,0.22), transparent 34%), radial-gradient(circle at 84% 78%, rgba(122,220,191,0.16), transparent 38%), radial-gradient(circle at 50% 46%, rgba(255,255,255,0.055), transparent 46%), linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0))",
        }}
      />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Particles */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.34]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(70,199,216,0.46) 0 1px, transparent 1.6px), radial-gradient(circle, rgba(122,220,191,0.28) 0 1px, transparent 1.7px), radial-gradient(circle, rgba(255,255,255,0.24) 0 1px, transparent 1.8px)",
          backgroundSize: "72px 72px, 118px 118px, 156px 156px",
          backgroundPosition: "0 0, 36px 42px, 82px 18px",
        }}
      />

      {/* Fine noise dots */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.22) 0 0.7px, transparent 1.2px)",
          backgroundSize: "34px 34px",
        }}
      />

      {/* Flow light */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-20%] top-[18%] h-[1px] w-[58%] rotate-[-10deg] bg-gradient-to-r from-transparent via-[#46C7D8]/35 to-transparent blur-[0.5px]" />
        <div className="absolute right-[-18%] top-[68%] h-[1px] w-[54%] rotate-[-8deg] bg-gradient-to-r from-transparent via-[#7ADCBF]/28 to-transparent blur-[0.5px]" />
      </div>
      <div className="nexus-frame relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-[980px] text-center">
          <FadeIn>
            <div className="mb-10 flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-nexus-accent" />
              <span className="font-en text-[10.5px] font-semibold uppercase tracking-[0.22em] text-nexus-accent">
                Process
              </span>
              <span className="h-px w-7 bg-nexus-accent" />
            </div>
          </FadeIn>

          <FadeIn delay={120} y={12}>
            <h2 className="font-jp text-[38px] font-medium leading-[1.12] tracking-[-0.065em] text-white md:text-[58px] lg:text-[68px]">
              小さく入れて、
              <br />
              深く定着させる。
            </h2>
          </FadeIn>

          <FadeIn delay={220} y={10}>
            <p className="mx-auto mt-8 max-w-[660px] text-[15px] leading-[2.1] tracking-[0.01em] text-white/54">
              システム導入は、勢いだけで進めるほど現場から離れていきます。
              NEXUSは、業務の詰まりを読み、必要な仕組みを小さく入れ、
              使われ方を見ながら運用へ沈め込んでいきます。
            </p>
          </FadeIn>
        </div>

        {/* Process */}
        <div className="relative mt-24 md:mt-28">
          {/* Desktop rail */}
          <div className="absolute left-0 right-0 top-[55px] hidden h-px bg-white/10 md:block" />

          <div className="absolute left-0 top-[55px] hidden h-px w-full overflow-hidden md:block">
            <div className="h-px w-1/2 animate-[processRail_5.2s_cubic-bezier(0.16,1,0.3,1)_infinite] bg-gradient-to-r from-transparent via-nexus-accent to-transparent" />
          </div>

          <div className="grid overflow-hidden border-y border-white/10 md:grid-cols-4">
            {STEPS.map((step, index) => (
              <FadeIn key={step.num} delay={160 + index * 120} y={18}>
                <article
                  className={`group relative min-h-[340px] overflow-hidden px-0 py-9 md:min-h-[430px] md:px-7 md:py-12 ${
                    index > 0
                      ? "border-t border-white/10 md:border-l md:border-t-0"
                      : ""
                  }`}
                >
                  {/* カード内のうっすら気配 */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(70,199,216,0.08),transparent_44%)]" />
                  </div>

                  {/* Number */}
                  <p className="pointer-events-none absolute -right-2 top-4 font-en text-[96px] font-semibold leading-none tracking-[-0.08em] text-white/[0.035] transition duration-500 group-hover:text-white/[0.055] md:right-2 md:top-7 md:text-[118px]">
                    {step.num}
                  </p>

                  {/* Node */}
                  <div className="relative z-10 mb-12 flex items-center gap-4 md:mb-20">
                    <span className="relative flex h-[18px] w-[18px] items-center justify-center rounded-full border border-nexus-accent/50 bg-nexus-dark">
                      <span className="h-1.5 w-1.5 rounded-full bg-nexus-accent shadow-[0_0_18px_rgba(70,199,216,0.9)]" />
                    </span>

                    <span className="font-en text-[10px] font-semibold uppercase tracking-[0.22em] text-nexus-accent">
                      {step.en}
                    </span>
                  </div>

                  <div className="relative z-10 flex min-h-[210px] flex-col justify-between md:min-h-[250px]">
                    <div>
                      <h3 className="font-jp text-[28px] font-medium leading-[1.25] tracking-[-0.055em] text-white md:text-[32px]">
                        {step.ja}
                      </h3>

                      <p className="mt-6 text-[13.5px] leading-[2] tracking-[0.01em] text-white/48">
                        {step.desc}
                      </p>
                    </div>

                    <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="font-en text-[10px] uppercase tracking-[0.18em] text-white/24">
                        Duration
                      </span>

                      <span className="font-en text-[12px] font-semibold tracking-[0.06em] text-white/58">
                        {step.duration}
                      </span>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-nexus-accent via-nexus-accent/40 to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100" />
                </article>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <FadeIn delay={620} y={14}>
          <div className="mx-auto mt-16 max-w-[760px] border-b border-white/10 pb-10 text-center">
            <p className="mx-auto max-w-[520px] text-[13.5px] leading-[2] text-white/42">
              人が毎回つなぎ直していた作業を減らし、
              業務が自然に流れる状態をつくることです。
            </p>

            <p className="mt-8 font-jp text-[24px] font-medium leading-[1.65] tracking-[-0.05em] text-white md:text-[32px]">
              導入の目的は、
              <br />
              システムを増やすことではない。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}