const modules = [
  { name: "CRM Core", sub: "顧客管理", type: "grid", accent: true },
  { name: "Workline", sub: "業務フロー", type: "line", accent: false },
  { name: "Data Nest", sub: "データ連携", type: "circle", accent: false },
  { name: "Ops Gate", sub: "管理業務", type: "gate", accent: true },
  { name: "API Link", sub: "外部連携", type: "link", accent: false },
  { name: "Reportia", sub: "レポート", type: "bars", accent: true },
  { name: "Support IQ", sub: "問い合わせ", type: "spark", accent: false },
  { name: "SaaS Flow", sub: "ツール統合", type: "flow", accent: false },
]

function LogoIcon({ type, accent }) {
  const dark = "#0B1F2A"
  const teal = "#46C7D8"
  const soft = accent ? "rgba(70,199,216,0.13)" : "rgba(255,255,255,0.62)"
  const line = accent ? "rgba(70,199,216,0.32)" : "rgba(11,31,42,0.09)"

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 42 42"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect
        x="0.75"
        y="0.75"
        width="40.5"
        height="40.5"
        rx="11"
        fill={soft}
        stroke={line}
        strokeWidth="1.5"
      />

      {type === "grid" && (
        <>
          <rect x="12" y="12" width="7" height="7" rx="2" fill={dark} />
          <rect x="23" y="12" width="7" height="7" rx="2" fill={teal} fillOpacity="0.78" />
          <rect x="12" y="23" width="7" height="7" rx="2" fill={teal} fillOpacity="0.28" />
          <rect x="23" y="23" width="7" height="7" rx="2" fill={dark} fillOpacity="0.45" />
        </>
      )}

      {type === "line" && (
        <>
          <path
            d="M11 26C15.5 16 21 30 31 15"
            stroke={dark}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="11" cy="26" r="2.5" fill={teal} />
          <circle cx="21" cy="22" r="2.5" fill={teal} fillOpacity="0.7" />
          <circle cx="31" cy="15" r="2.5" fill={teal} fillOpacity="0.45" />
        </>
      )}

      {type === "circle" && (
        <>
          <circle cx="21" cy="21" r="10" stroke={dark} strokeWidth="2" />
          <circle cx="21" cy="21" r="4" fill={teal} />
          <path d="M21 7V12" stroke={teal} strokeWidth="2" strokeLinecap="round" />
          <path d="M21 30V35" stroke={teal} strokeWidth="2" strokeLinecap="round" />
          <path d="M7 21H12" stroke={teal} strokeWidth="2" strokeLinecap="round" />
          <path d="M30 21H35" stroke={teal} strokeWidth="2" strokeLinecap="round" />
        </>
      )}

      {type === "gate" && (
        <>
          <path
            d="M13 30V15C13 13.9 13.9 13 15 13H27C28.1 13 29 13.9 29 15V30"
            stroke={dark}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M17 30V20H25V30" stroke={teal} strokeWidth="2" strokeLinecap="round" />
          <path d="M11 30H31" stroke={dark} strokeWidth="2" strokeLinecap="round" />
        </>
      )}

      {type === "link" && (
        <>
          <path
            d="M18.5 15.5H15.8C12.9 15.5 10.5 17.9 10.5 20.8C10.5 23.7 12.9 26.1 15.8 26.1H18.5"
            stroke={dark}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M23.5 15.5H26.2C29.1 15.5 31.5 17.9 31.5 20.8C31.5 23.7 29.1 26.1 26.2 26.1H23.5"
            stroke={dark}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M17 21H25" stroke={teal} strokeWidth="2" strokeLinecap="round" />
        </>
      )}

      {type === "bars" && (
        <>
          <rect x="12" y="24" width="4" height="7" rx="2" fill={teal} fillOpacity="0.45" />
          <rect x="19" y="17" width="4" height="14" rx="2" fill={teal} fillOpacity="0.75" />
          <rect x="26" y="11" width="4" height="20" rx="2" fill={dark} />
        </>
      )}

      {type === "spark" && (
        <>
          <path
            d="M21 9L23.7 18.3L33 21L23.7 23.7L21 33L18.3 23.7L9 21L18.3 18.3L21 9Z"
            fill={teal}
            fillOpacity="0.58"
          />
          <path
            d="M21 14L22.4 19.6L28 21L22.4 22.4L21 28L19.6 22.4L14 21L19.6 19.6L21 14Z"
            fill={dark}
          />
        </>
      )}

      {type === "flow" && (
        <>
          <path
            d="M10 15H22C27.5 15 32 19.5 32 25V27"
            stroke={dark}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M32 27L28.5 23.5M32 27L35.5 23.5"
            stroke={teal}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="10" cy="15" r="2.5" fill={teal} />
        </>
      )}
    </svg>
  )
}

function ModuleLogo({ item }) {
  return (
    <div className="mx-3.5 flex min-w-[142px] items-center gap-2.5 opacity-[0.74]">
      <LogoIcon type={item.type} accent={item.accent} />

      <div className="min-w-0">
        <p
          className={[
            "font-en text-[12px] font-semibold leading-none tracking-[-0.035em]",
            item.accent ? "text-[#0B6070]" : "text-nexus-dark/62",
          ].join(" ")}
        >
          {item.name}
        </p>

        <p className="mt-[5px] font-jp text-[8.5px] font-medium tracking-[0.08em] text-nexus-muted/56">
          {item.sub}
        </p>
      </div>
    </div>
  )
}

export default function FlowBandSp() {
  const loop = [...modules, ...modules, ...modules]

  return (
    <section
      className="relative z-20 -mt-px overflow-hidden border-b border-nexus-line/55 py-3 md:hidden"
      aria-label="対応領域"
    >
      <style>
        {`
          @keyframes nexusFlowBandSp {
            from {
              transform: translate3d(0, 0, 0);
            }
            to {
              transform: translate3d(-33.333%, 0, 0);
            }
          }

          .nexus-flow-band-sp-track {
            animation: nexusFlowBandSp 54s linear infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .nexus-flow-band-sp-track {
              animation: none;
              transform: none;
            }
          }
        `}
      </style>

      <p className="sr-only">
        顧客管理、業務フロー、データ連携、管理業務、外部連携、レポート、問い合わせ、ツール統合に対応します。
      </p>

      {/* hero continuation background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #EAF6F9 0%, #F4FAFB 48%, #FFFFFF 100%)",
        }}
      />

      {/* soft light */}
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(circle at 18% 0%, rgba(70,199,216,0.08), transparent 36%), radial-gradient(circle at 84% 80%, rgba(122,220,191,0.06), transparent 38%)",
        }}
      />

      {/* thin system line */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-nexus-accent/18 to-transparent" />
      <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-nexus-line/46 to-transparent" />

      {/* edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[#EEF8FA] via-[#EEF8FA]/78 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-white via-white/78 to-transparent" />

      <div className="relative flex overflow-hidden">
        <div
          className="nexus-flow-band-sp-track flex w-max items-center will-change-transform"
          aria-hidden="true"
        >
          {loop.map((item, index) => (
            <ModuleLogo key={`${item.name}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}