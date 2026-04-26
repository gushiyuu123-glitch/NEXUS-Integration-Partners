import FadeIn from "./FadeIn"

export default function FloatingRequest() {
  return (
    <FadeIn
      delay={920}
      duration={900}
      y={8}
      className="fixed bottom-[calc(env(safe-area-inset-bottom)+1.25rem)] right-5 z-[990] md:bottom-7 md:right-7"
    >
      <a
        href="#contact"
        aria-label="資料請求へ進む"
        className="group relative isolate flex items-center gap-4 overflow-hidden rounded-full border border-nexus-line bg-white/76 px-5 py-3 shadow-[0_18px_50px_rgba(11,31,42,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-nexus-accent/55 hover:bg-white/92 hover:shadow-[0_22px_58px_rgba(11,31,42,0.14)] active:translate-y-0 md:px-6 md:py-4"
      >
        {/* soft breathing glow */}
        <span className="pointer-events-none absolute -inset-1 -z-10 rounded-full bg-nexus-accent/8 opacity-50 blur-xl transition-opacity duration-300 group-hover:opacity-90" />

        {/* light sweep */}
        <span className="pointer-events-none absolute inset-y-0 left-[-72%] z-0 w-[40%] rotate-12 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

        {/* dot */}
        <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-nexus-dark md:h-9 md:w-9">
          <span className="absolute h-3 w-3 rounded-full bg-nexus-accent/28 motion-safe:animate-ping" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-nexus-accent shadow-[0_0_14px_rgba(70,199,216,0.82)]" />
        </span>

        {/* desktop text */}
        <span className="relative z-10 hidden flex-col md:flex">
          <span className="flex items-center gap-2">
            <span className="font-en text-[9px] font-semibold uppercase tracking-[0.22em] text-nexus-accentDeep">
              Request
            </span>

            <span className="rounded-full bg-nexus-accent/12 px-2 py-0.5 font-jp text-[10px] font-semibold tracking-[0.04em] text-nexus-accentDeep">
              無料
            </span>
          </span>

          <span className="mt-1 font-jp text-[13.5px] font-semibold tracking-[-0.03em] text-nexus-dark">
            資料を確認する
          </span>

          <span className="mt-1 font-jp text-[10.5px] leading-none text-nexus-muted">
            3分で概要を確認できます
          </span>
        </span>

        {/* mobile text */}
        <span className="relative z-10 flex flex-col md:hidden">
          <span className="font-jp text-[13px] font-semibold tracking-[-0.03em] text-nexus-dark">
            資料請求
          </span>
          <span className="mt-0.5 font-jp text-[10px] text-nexus-muted">
            無料
          </span>
        </span>

        {/* arrow */}
        <span className="relative z-10 hidden h-7 w-7 items-center justify-center rounded-full border border-nexus-line bg-white/70 font-en text-[13px] text-nexus-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-nexus-accent/60 group-hover:bg-nexus-accent group-hover:text-nexus-dark md:flex">
          →
        </span>
      </a>
    </FadeIn>
  )
}