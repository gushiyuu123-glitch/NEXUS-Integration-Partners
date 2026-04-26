// src/components/Header.jsx
import { useEffect, useState } from "react"
import FadeIn from "./FadeIn"

const navItems = [
  { en: "Concept", ja: "考え方", href: "#concept" },
  { en: "Service", ja: "サービス", href: "#service" },
  { en: "Cases", ja: "活用例", href: "#usecases" },
  { en: "Process", ja: "導入の流れ", href: "#process" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 28)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  useEffect(() => {
    const originalOverflow = document.body.style.overflow

    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = originalOverflow
    }

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <FadeIn
        as="header"
        delay={120}
        duration={860}
        y={-6}
        className={`fixed left-0 top-0 z-[999] w-full transition-all duration-500 ease-out ${
          scrolled ? "py-4" : "py-7"
        }`}
      >
        {/* header glass */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ease-out ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "rgba(247, 250, 252, 0.86)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            borderBottom: "1px solid rgba(215, 229, 232, 0.58)",
          }}
        />

        <div className="nexus-frame-wide relative flex items-center justify-between">
          {/* logo */}
          <a
            href="/"
            onClick={closeMenu}
            className="relative z-10 flex items-center gap-2.5"
            aria-label="NEXUS Integration Partners ホームへ"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="0.5"
                y="0.5"
                width="7.5"
                height="7.5"
                rx="1.5"
                fill="#0B1F2A"
              />
              <rect
                x="10"
                y="0.5"
                width="7.5"
                height="7.5"
                rx="1.5"
                fill="#46C7D8"
                opacity="0.72"
              />
              <rect
                x="0.5"
                y="10"
                width="7.5"
                height="7.5"
                rx="1.5"
                fill="#46C7D8"
                opacity="0.28"
              />
              <rect
                x="10"
                y="10"
                width="7.5"
                height="7.5"
                rx="1.5"
                fill="#0B1F2A"
                opacity="0.38"
              />
            </svg>

            <span className="font-en text-[13.5px] font-medium tracking-tight text-nexus-dark">
              NEXUS Integration Partners
            </span>
          </a>

          {/* desktop nav */}
          <nav className="hidden items-center gap-9 md:flex" aria-label="メインナビゲーション">
            {navItems.map((item) => (
              <a
                key={item.en}
                href={item.href}
                className="group relative flex items-center gap-2 font-jp text-[12px] font-medium tracking-[0.04em] text-nexus-muted transition-colors duration-300 hover:text-nexus-dark"
              >
                <span>{item.ja}</span>

                <span className="font-en text-[9px] uppercase tracking-[0.16em] text-nexus-muted/45 transition-colors duration-300 group-hover:text-nexus-accentDeep/70">
                  {item.en}
                </span>

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-nexus-accent/70 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* mobile button */}
          <button
            className="relative z-10 h-8 w-8 md:hidden"
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span
              className={`absolute left-1 block h-px w-6 origin-center bg-nexus-dark transition-all duration-300 ease-out ${
                isOpen ? "top-4 rotate-45" : "top-[11px]"
              }`}
            />

            <span
              className={`absolute left-1 block h-px origin-center transition-all duration-300 ease-out ${
                isOpen
                  ? "top-4 w-6 -rotate-45 bg-nexus-dark"
                  : "top-[18px] w-[18px] bg-nexus-muted"
              }`}
            />
          </button>
        </div>
      </FadeIn>

      {/* mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[998] overflow-hidden md:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        {/* backdrop */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ease-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "rgba(247, 250, 252, 0.96)",
            backdropFilter: "blur(26px)",
            WebkitBackdropFilter: "blur(26px)",
          }}
        />

        {/* faint light */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 84% 12%, rgba(70,199,216,0.12), transparent 32%), radial-gradient(circle at 12% 84%, rgba(122,220,191,0.09), transparent 30%)",
          }}
        />

        {/* system line */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.26]">
          <svg
            className="h-full w-full"
            viewBox="0 0 390 844"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="mobileMenuLine" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#46C7D8" stopOpacity="0" />
                <stop offset="52%" stopColor="#46C7D8" stopOpacity="0.42" />
                <stop offset="100%" stopColor="#7ADCBF" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path
              d="M-40 214 C74 156, 158 252, 282 190 C344 160, 394 164, 438 188"
              stroke="url(#mobileMenuLine)"
              strokeWidth="1"
              strokeDasharray="7 16"
            />

            <path
              d="M36 612 C122 542, 210 650, 324 556 C374 514, 414 506, 456 524"
              stroke="url(#mobileMenuLine)"
              strokeWidth="1"
              strokeDasharray="7 16"
            />

            <path
              d="M60 770 H220"
              stroke="url(#mobileMenuLine)"
              strokeWidth="1"
              opacity="0.55"
            />
          </svg>
        </div>

        <div className="nexus-frame-wide relative flex min-h-screen flex-col justify-between pb-10 pt-[104px]">
          <nav className="flex flex-col" aria-label="スマートフォンナビゲーション">
            {navItems.map((item, index) => (
              <a
                key={item.en}
                href={item.href}
                onClick={closeMenu}
                className={`group relative border-b border-nexus-line/70 py-6 transition-all duration-500 ease-out ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${100 + index * 70}ms` : "0ms",
                }}
              >
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <span className="mb-3 block font-en text-[9px] uppercase tracking-[0.24em] text-nexus-muted/50">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(navItems.length).padStart(2, "0")}
                    </span>

                    <span className="block font-jp text-[30px] font-medium leading-none tracking-[-0.05em] text-nexus-dark">
                      {item.ja}
                    </span>

                    <span className="mt-2 block font-en text-[10px] uppercase tracking-[0.2em] text-nexus-muted/52">
                      {item.en}
                    </span>
                  </div>

                  <span className="mb-1 font-en text-[18px] font-light text-nexus-muted/28 transition-all duration-300 group-hover:translate-x-1 group-hover:text-nexus-accentDeep/70">
                    ↗
                  </span>
                </div>

                <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-nexus-accent/60 to-transparent transition-all duration-500 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div
            className={`border-t border-nexus-line pt-6 transition-all duration-500 ease-out ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
            style={{
              transitionDelay: isOpen ? "420ms" : "0ms",
            }}
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-5 bg-nexus-accent/48" />

              <p className="font-en text-[9.5px] uppercase tracking-[0.22em] text-nexus-muted/55">
                System Implementation / Workflow Integration
              </p>
            </div>

            <p className="max-w-[260px] text-[12.5px] leading-[1.9] text-nexus-muted/72">
              分断された業務に、次の接続を。
            </p>
          </div>
        </div>
      </div>
    </>
  )
}