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

export default function ContactSp() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-nexus-dark text-white md:hidden"
    >
      {/* image area */}
      <div className="relative h-[42svh] min-h-[310px] overflow-hidden">
        <img
          src={contactImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.78]"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,16,16,0.18) 0%, rgba(6,16,16,0.42) 48%, #061010 100%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(6,16,16,0.62) 0%, rgba(6,16,16,0.18) 52%, rgba(6,16,16,0.58) 100%)",
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.22) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

    <p className="pointer-events-none absolute -left-3 top-10 font-en text-[74px] font-semibold uppercase leading-none tracking-[-0.09em] text-white/[0.075]">
  Contact
</p>
      </div>

      {/* content */}
      <div className="relative z-10 px-6 pb-28 pt-10">
        <FadeIn>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-7 bg-nexus-accent" />
            <span className="font-en text-[9.5px] font-semibold uppercase tracking-[0.22em] text-nexus-accent">
              Contact
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={100} y={10}>
          <h2 className="font-jp text-[35px] font-medium leading-[1.16] tracking-[-0.065em] text-white">
            まず、
            <br />
            業務の流れを
            <br />
            見せてください。
          </h2>
        </FadeIn>

        <FadeIn delay={200} y={10}>
          <p className="mt-7 text-[13.5px] leading-[2.05] tracking-[0.01em] text-white/62">
            システム導入、業務改善、ツール連携。
            <br />
            どこから始めるべきか分からない状態でも構いません。
            現在の業務構造を整理し、実行可能な導入ステップへ変換します。
          </p>
        </FadeIn>

        <FadeIn delay={300} y={10}>
          <div className="mt-9 flex flex-col gap-3">
            <a
              href="mailto:hello@nexus-integrate.jp"
              className="group inline-flex h-[48px] items-center justify-between rounded-[12px] bg-nexus-accent px-5 font-en text-[12px] font-semibold tracking-[0.035em] text-nexus-dark transition-all duration-300 active:translate-y-px"
            >
              hello@nexus-integrate.jp
              <span className="ml-4 h-px w-7 bg-nexus-dark/70 transition-all duration-300 group-active:w-9" />
            </a>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex h-[48px] items-center justify-between rounded-[12px] border border-white/16 bg-white/[0.045] px-5 font-jp text-[12.5px] font-medium tracking-[0.04em] text-white/76 backdrop-blur-sm transition-all duration-300 active:translate-y-px"
            >
              相談日時を決める
              <span className="font-en text-[14px] text-nexus-accent">→</span>
            </a>
          </div>
        </FadeIn>

        {/* first hearing */}
        <FadeIn delay={420} y={14} duration={900}>
          <div className="mt-16 border-y border-white/13 py-8">
            <div className="mb-8">
              <p className="font-en text-[9.5px] font-semibold uppercase tracking-[0.24em] text-nexus-accent">
                First Hearing
              </p>

              <h3 className="mt-4 font-jp text-[25px] font-medium leading-[1.42] tracking-[-0.055em] text-white">
                最初に見るのは、
                <br />
                ツールではなく流れです。
              </h3>

              <p className="mt-4 font-en text-[10px] uppercase tracking-[0.16em] text-white/28">
                30—60min
              </p>
            </div>

            <div className="divide-y divide-white/11 border-t border-white/11">
              {contactRows.map((item, index) => (
                <FadeIn key={item.num} delay={500 + index * 80} y={8}>
                  <div className="py-6">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="font-en text-[11px] font-semibold tracking-[0.12em] text-nexus-accent">
                        {item.num}
                      </span>
                      <span className="h-px flex-1 bg-white/10" />
                    </div>

                    <h4 className="font-jp text-[17px] font-medium leading-[1.6] tracking-[-0.04em] text-white/92">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-[12.8px] leading-[1.95] text-white/55">
                      {item.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={760} y={8}>
              <div className="mt-6 border-t border-nexus-accent/24 pt-6">
                <p className="font-jp text-[19px] font-medium leading-[1.65] tracking-[-0.05em] text-white">
                  整理されていない状態から、
                  <br />
                  導入可能な形へ。
                </p>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}