import FadeIn from "../components/FadeIn"

const contactImage = "/images/contact-bg.png"

const contactRows = [
  {
    num: "01",
    title: "現在の業務フロー",
    text: "どの作業に時間がかかっているか、どこで確認や転記が発生しているかを整理します。",
  },
  {
    num: "02",
    title: "利用中のツール・システム",
    text: "既存のSaaS、表計算、社内資料、管理ツールなどを確認し、接続できる範囲を見極めます。",
  },
  {
    num: "03",
    title: "最初に軽くしたい業務",
    text: "いきなり全体を変えるのではなく、効果が出やすい一点から導入の入口を設計します。",
  },
]

const particles = [
  "left-[67%] top-[22%] h-1.5 w-1.5 opacity-70",
  "left-[78%] top-[31%] h-1 w-1 opacity-50",
  "left-[88%] top-[43%] h-1.5 w-1.5 opacity-60",
  "left-[70%] top-[58%] h-1 w-1 opacity-45",
  "left-[84%] top-[68%] h-2 w-2 opacity-55",
  "left-[62%] top-[76%] h-1 w-1 opacity-40",
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-nexus-dark py-32 text-white md:py-40"
    >
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={contactImage}
          alt=""
          className="h-full w-full object-cover object-center opacity-[0.34]"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(7,17,17,0.98) 0%, rgba(7,17,17,0.93) 36%, rgba(7,17,17,0.72) 64%, rgba(7,17,17,0.84) 100%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 18% 22%, rgba(70,199,216,0.17), transparent 31%), radial-gradient(circle at 78% 54%, rgba(122,220,191,0.12), transparent 34%), radial-gradient(circle at 88% 18%, rgba(255,255,255,0.07), transparent 28%)",
          }}
        />
      </div>

      {/* Fine grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.052]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "58px 58px",
        }}
      />

      {/* Right side atmosphere only */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] overflow-hidden md:block">
        {/* Soft object */}
        <div className="absolute right-[13%] top-[23%] h-[360px] w-[360px] rounded-full border border-nexus-accent/10 bg-nexus-accent/[0.025] blur-[0.2px]" />
        <div className="absolute right-[19%] top-[31%] h-[220px] w-[220px] rounded-full border border-white/[0.055]" />

        {/* Flow lines */}
        <span className="absolute right-[2%] top-[29%] h-px w-[42vw] rotate-[-16deg] bg-gradient-to-r from-transparent via-nexus-accent/40 to-transparent" />
        <span className="absolute right-[7%] top-[43%] h-px w-[35vw] rotate-[-9deg] bg-gradient-to-r from-transparent via-white/18 to-transparent" />
        <span className="absolute right-[-5%] top-[61%] h-px w-[46vw] rotate-[-20deg] bg-gradient-to-r from-transparent via-nexus-accent/26 to-transparent" />
        <span className="absolute right-[28%] top-[18%] h-[56vh] w-px rotate-[22deg] bg-gradient-to-b from-transparent via-nexus-accent/22 to-transparent" />

        {/* Small particles */}
        {particles.map((className, index) => (
          <span
            key={index}
            className={`absolute rounded-full bg-nexus-accent shadow-[0_0_18px_rgba(70,199,216,0.55)] ${className}`}
          />
        ))}

        {/* Thin data path */}
        <div className="absolute right-[12%] top-[52%] h-[1px] w-[210px] rotate-[-14deg] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute right-[22%] top-[50%] h-2 w-2 rounded-full border border-nexus-accent/40 bg-nexus-dark" />
        <div className="absolute right-[38%] top-[56%] h-1.5 w-1.5 rounded-full bg-white/35" />
      </div>

      {/* Giant type */}
      <p className="pointer-events-none absolute -right-10 top-16 font-en text-[120px] font-semibold uppercase leading-none tracking-[-0.09em] text-white/[0.032] md:text-[200px] lg:text-[270px]">
        Contact
      </p>

      <div className="nexus-frame relative">
        <div className="max-w-[760px]">
          <FadeIn>
            <div className="mb-10 flex items-center gap-3">
              <span className="h-px w-7 bg-nexus-accent" />
              <span className="font-en text-[10.5px] font-semibold uppercase tracking-[0.22em] text-nexus-accent">
                Contact
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={120} y={14}>
            <h2 className="font-jp text-[40px] font-medium leading-[1.14] tracking-[-0.065em] text-white md:text-[60px] lg:text-[68px]">
              まず、
              <br />
              業務の流れを
              <br />
              見せてください。
            </h2>
          </FadeIn>

          <FadeIn delay={240} y={12}>
            <p className="mt-8 max-w-[580px] text-[15px] leading-[2.15] tracking-[0.01em] text-white/62">
              システム導入、業務改善、ツール連携。
              <br />
              どこから始めるべきか分からない状態でも構いません。
              現在の業務構造を整理し、実行可能な導入ステップへ変換します。
            </p>
          </FadeIn>

          <FadeIn delay={340} y={12}>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@nexus-integrate.jp"
                className="group inline-flex h-[52px] items-center justify-center rounded-full bg-nexus-accent px-8 font-en text-[13px] font-semibold tracking-[0.04em] text-nexus-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                hello@nexus-integrate.jp
                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex h-[52px] items-center justify-center rounded-full border border-white/18 bg-white/[0.03] px-8 font-jp text-[13px] font-medium tracking-[0.04em] text-white/72 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/34 hover:bg-white/[0.07] hover:text-white"
              >
                相談日時を決める
              </a>
            </div>
          </FadeIn>

          {/* Hearing block */}
          <FadeIn delay={430} y={18} duration={980}>
            <div className="mt-20 max-w-[700px] border-y border-white/14 py-9 backdrop-blur-[1.5px]">
              <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="font-en text-[10px] font-semibold uppercase tracking-[0.24em] text-nexus-accent">
                    First Hearing
                  </p>

                  <h3 className="mt-4 font-jp text-[26px] font-medium leading-[1.45] tracking-[-0.055em] text-white md:text-[32px]">
                    最初に見るのは、
                    <br />
                    ツールではなく流れです。
                  </h3>
                </div>

                <p className="font-en text-[11px] uppercase tracking-[0.16em] text-white/30">
                  30—60min
                </p>
              </div>

              <div className="divide-y divide-white/12 border-t border-white/12">
                {contactRows.map((item, index) => (
                  <FadeIn key={item.num} delay={520 + index * 90} y={10}>
                    <div className="grid gap-4 py-7 md:grid-cols-[64px_1fr] md:gap-7">
                      <p className="font-en text-[12px] font-semibold tracking-[0.12em] text-nexus-accent">
                        {item.num}
                      </p>

                      <div>
                        <h4 className="font-jp text-[18px] font-medium leading-[1.6] tracking-[-0.04em] text-white/92">
                          {item.title}
                        </h4>

                        <p className="mt-3 max-w-[540px] text-[13.5px] leading-[2] text-white/56">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={800} y={10}>
                <div className="mt-9 border-t border-nexus-accent/24 pt-7">
                  <p className="max-w-[520px] font-jp text-[20px] font-medium leading-[1.65] tracking-[-0.05em] text-white md:text-[24px]">
                    整理されていない状態から、
                    <br />
                    導入可能な形へ。
                  </p>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}