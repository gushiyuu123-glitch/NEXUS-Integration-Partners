import FadeIn from "./FadeIn"

export default function FloatingRequestSp() {
  return (
    <FadeIn
      delay={900}
      duration={820}
      y={8}
      className="fixed bottom-[calc(env(safe-area-inset-bottom)+1.1rem)] right-4 z-[990]"
    >
      <a
        href="#contact"
        aria-label="資料請求へ進む"
        className="group relative isolate flex items-center gap-3 overflow-hidden rounded-[18px] border border-nexus-line bg-white/[0.84] px-4 py-3 shadow-[0_18px_46px_rgba(11,31,42,0.14)] backdrop-blur-md transition-all duration-300 active:translate-y-[1px] active:scale-[0.985]"
      >
        {/* soft glow */}
        <span className="pointer-events-none absolute -inset-1 -z-10 rounded-[20px] bg-nexus-accent/[0.09] opacity-70 blur-xl" />

        {/* light sweep */}
        <span className="pointer-events-none absolute inset-y-0 left-[-72%] z-0 w-[42%] rotate-12 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 transition-all duration-700 group-active:left-[120%] group-active:opacity-100" />

        {/* signal */}
        <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-[12px] bg-nexus-dark">
          <span className="absolute h-3 w-3 rounded-full bg-nexus-accent/25 motion-safe:animate-ping" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-nexus-accent shadow-[0_0_14px_rgba(70,199,216,0.82)]" />
        </span>

        {/* text */}
        <span className="relative z-10 flex flex-col">
          <span className="font-jp text-[13px] font-semibold leading-none tracking-[-0.03em] text-nexus-dark">
            資料請求
          </span>

          <span className="mt-1 flex items-center gap-1.5">
            <span className="font-jp text-[10px] font-medium leading-none text-nexus-muted">
              無料
            </span>
            <span className="h-px w-4 bg-nexus-line" />
            <span className="font-en text-[9px] font-semibold uppercase tracking-[0.14em] text-nexus-accentDeep">
              Request
            </span>
          </span>
        </span>

        {/* arrow */}
        <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-[10px] border border-nexus-line bg-white/70 font-en text-[12px] text-nexus-muted">
          →
        </span>
      </a>
    </FadeIn>
  )
}