import FadeIn from "../components/FadeIn"

const footerGroups = [
  {
    label: "SERVICE",
    title: "サービス",
    links: [
      "業務フロー整理",
      "システム導入支援",
      "既存ツール連携",
      "社内ツール構築",
      "運用改善サポート",
    ],
  },
  {
    label: "SOLUTION",
    title: "解決できること",
    links: [
      "情報共有の属人化",
      "二重入力・転記作業",
      "営業管理のばらつき",
      "問い合わせ対応の混雑",
      "社内ナレッジの分散",
    ],
  },
  {
    label: "AREA",
    title: "対応領域",
    links: [
      "営業管理",
      "顧客対応",
      "バックオフィス",
      "社内ポータル",
      "業務レポート",
    ],
  },
  {
    label: "GUIDE",
    title: "ご依頼について",
    links: [
      "導入の進め方",
      "よくある質問",
      "対応範囲",
      "セキュリティ方針",
      "お問い合わせ",
    ],
  },
]

const policyLinks = [
  "会社概要",
  "プライバシーポリシー",
  "利用規約",
  "セキュリティ方針",
  "サイトマップ",
]

function DummyLink({ children }) {
  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className="group inline-flex w-fit items-center gap-2 text-[12px] leading-none tracking-[0.03em] text-white/42 transition-colors duration-300 hover:text-white"
    >
      <span>{children}</span>
      <span className="translate-x-[-4px] text-nexus-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        →
      </span>
    </a>
  )
}

function Logo() {
  return (
    <a href="/" className="inline-flex items-center gap-2.5">
      <svg
        width="20"
        height="20"
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
          fill="#FFFFFF"
          opacity="0.92"
        />
        <rect
          x="10"
          y="0.5"
          width="7.5"
          height="7.5"
          rx="1.5"
          fill="#46C7D8"
          opacity="0.82"
        />
        <rect
          x="0.5"
          y="10"
          width="7.5"
          height="7.5"
          rx="1.5"
          fill="#46C7D8"
          opacity="0.3"
        />
        <rect
          x="10"
          y="10"
          width="7.5"
          height="7.5"
          rx="1.5"
          fill="#FFFFFF"
          opacity="0.22"
        />
      </svg>

      <span className="font-en text-[14px] font-medium tracking-[-0.02em] text-white">
        NEXUS Integration Partners
      </span>
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#061010] text-white">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 18% 0%, rgba(70,199,216,0.12), transparent 32%), radial-gradient(circle at 82% 20%, rgba(122,220,191,0.08), transparent 34%), linear-gradient(180deg, #071111 0%, #050d0d 100%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.22) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-nexus-accent/45 to-transparent" />

      <p className="pointer-events-none absolute left-1/2 top-[104px] -translate-x-1/2 select-none font-en text-[88px] font-semibold uppercase leading-none tracking-[-0.09em] text-white/[0.026] md:top-[128px] md:text-[170px] lg:top-[142px] lg:text-[230px]">
        Nexus
      </p>

      <div className="nexus-frame-wide relative pt-[120px] md:pt-[148px] lg:pt-[168px]">
        {/* Upper */}
        <FadeIn y={14} duration={900}>
          <div className="border-b border-white/10 pb-[76px] text-center md:pb-[92px] lg:pb-[104px]">
            <div className="flex justify-center">
              <Logo />
            </div>

            <h2 className="mx-auto mt-10 max-w-[780px] font-jp text-[32px] font-medium leading-[1.28] tracking-[-0.06em] text-white md:mt-11 md:text-[48px] lg:text-[56px]">
              分断された業務を、
              <br />
              動き続ける仕組みへ。
            </h2>

            <p className="mx-auto mt-8 max-w-[620px] text-[13.5px] leading-[2.1] tracking-[0.01em] text-white/48">
              業務設計、システム導入、ツール連携、運用改善まで。
              <br className="hidden md:block" />
              現場に散らばった情報と作業を整理し、使い続けられる業務の流れへ整えます。
            </p>
          </div>
        </FadeIn>

        {/* Navigation */}
        <div className="grid border-b border-white/10 md:grid-cols-2 lg:grid-cols-4">
          {footerGroups.map((group, index) => (
            <FadeIn key={group.title} delay={100 + index * 70} y={10}>
              <div className="border-b border-white/10 px-1 py-11 md:border-r md:border-white/10 md:px-7 md:py-12 lg:border-b-0 lg:last:border-r-0">
                <p className="font-en text-[9.5px] font-semibold uppercase tracking-[0.24em] text-nexus-accent">
                  {group.label}
                </p>

                <h3 className="mt-2 font-jp text-[14px] font-medium tracking-[-0.03em] text-white/84">
                  {group.title}
                </h3>

                <div className="mt-7 flex flex-col gap-4">
                  {group.links.map((link) => (
                    <DummyLink key={link}>{link}</DummyLink>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Corporate info */}
        <FadeIn delay={260} y={12}>
          <div className="grid border-b border-white/10 py-12 md:grid-cols-[1fr_1fr_1fr_1.1fr] md:py-14">
            <div className="border-b border-white/10 py-5 md:border-b-0 md:border-r md:border-white/10 md:px-6 md:py-0">
              <p className="font-en text-[10px] font-semibold uppercase tracking-[0.22em] text-white/28">
                Company
              </p>
              <p className="mt-3 font-jp text-[13px] leading-[1.9] text-white/50">
                NEXUS Integration Partners
              </p>
            </div>

            <div className="border-b border-white/10 py-5 md:border-b-0 md:border-r md:border-white/10 md:px-6 md:py-0">
              <p className="font-en text-[10px] font-semibold uppercase tracking-[0.22em] text-white/28">
                Office
              </p>
              <p className="mt-3 font-jp text-[13px] leading-[1.9] text-white/50">
                東京都内を拠点に対応
                <br />
                オンライン相談可能
              </p>
            </div>

            <div className="border-b border-white/10 py-5 md:border-b-0 md:border-r md:border-white/10 md:px-6 md:py-0">
              <p className="font-en text-[10px] font-semibold uppercase tracking-[0.22em] text-white/28">
                Hours
              </p>
              <p className="mt-3 font-en text-[13px] leading-[1.9] text-white/50">
                Weekday
                <br />
                10:00 — 18:00
              </p>
            </div>

            <div className="py-5 md:px-6 md:py-0">
              <p className="font-en text-[10px] font-semibold uppercase tracking-[0.22em] text-white/28">
                Contact
              </p>
              <p className="mt-3 font-en text-[13px] leading-[1.9] text-white/50">
                hello@nexus-integrate.jp
              </p>
              <p className="mt-2 font-jp text-[12px] leading-[1.8] text-white/34">
                初回相談・導入前の整理から対応しています。
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Policy */}
        <FadeIn delay={320} y={10}>
          <div className="flex flex-col gap-7 py-9 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {policyLinks.map((link) => (
                <DummyLink key={link}>{link}</DummyLink>
              ))}
            </div>

            <p className="font-en text-[11px] tracking-[0.08em] text-white/26">
              © 2026 NEXUS Integration Partners. All rights reserved.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Closing band */}
      <FadeIn delay={400} y={16} duration={1000}>
        <div className="relative border-t border-white/10">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(70,199,216,0.08), transparent 28%, transparent 72%, rgba(122,220,191,0.07))",
            }}
          />

          <div className="nexus-frame-wide relative overflow-hidden py-8 md:py-10">
            <p className="select-none text-center font-en text-[44px] font-semibold uppercase leading-[0.9] tracking-[-0.075em] text-white/[0.055] md:text-[88px] lg:text-[124px] xl:text-[150px]">
              Integration Systems
            </p>

            <div className="mt-7 flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-6 md:flex-row md:items-center">
              <p className="font-en text-[10px] uppercase tracking-[0.22em] text-white/24">
                Workflow Design / System Implementation / Operation Support
              </p>

              <p className="font-jp text-[11.5px] tracking-[0.08em] text-white/28">
                分断された業務に、次の接続を。
              </p>
            </div>

            <div className="mt-8 border-t border-white/8 pt-6">
              <p className="font-en text-[10.5px] uppercase tracking-[0.18em] text-white/22">
                Web Design / Front-end by{" "}
                <a
                  href="https://gushikendesign.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GUSHIKEN DESIGN｜Webデザイン・フロントエンド実装"
                  aria-label="GUSHIKEN DESIGNのWebサイトを見る"
                  className="text-white/40 underline decoration-white/12 underline-offset-4 transition-colors duration-300 hover:text-nexus-accent hover:decoration-nexus-accent/45"
                >
                  GUSHIKEN DESIGN
                </a>
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </footer>
  )
}