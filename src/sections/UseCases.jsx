import FadeIn from "../components/FadeIn"

const cases = [
  {
    label: "Sales",
    jp: "営業",
    title: "営業情報を、判断できる流れへ。",
    text: "商談履歴、顧客情報、提案資料を整理し、誰が見ても次の動きが分かる状態へ整えます。",
    tags: ["CRM", "Proposal", "Report"],
  },
  {
    label: "Support",
    jp: "対応",
    title: "問い合わせ対応を、迷わない運用へ。",
    text: "FAQ、過去対応、社内ナレッジをつなぎ、回答品質と対応速度を安定させます。",
    tags: ["FAQ", "Ticket", "Knowledge"],
  },
  {
    label: "Back Office",
    jp: "事務",
    title: "繰り返す処理を、軽くする。",
    text: "請求、報告、確認作業など、日々発生する定型業務を整理し、確認漏れを減らします。",
    tags: ["Invoice", "Check", "Approval"],
  },
  {
    label: "Knowledge",
    jp: "知識",
    title: "社内情報を、探せる資産へ。",
    text: "散らばった文書やルールを整理し、必要な人が必要な情報へすぐ届く状態をつくります。",
    tags: ["Docs", "Rules", "Search"],
  },
]

export default function UseCases() {
  return (
    <section
      id="usecases"
      className="relative overflow-hidden bg-nexus-bgSoft py-32 md:py-40"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(239,247,249,0.78) 52%, rgba(247,250,252,0.98) 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-nexus-accent/35 to-transparent" />

      <p className="pointer-events-none absolute -left-8 top-20 font-en text-[96px] font-semibold uppercase leading-none tracking-[-0.08em] text-nexus-dark/[0.024] md:text-[160px] lg:text-[210px]">
        Cases
      </p>

      <div className="pointer-events-none absolute right-[-12%] top-[16%] h-[320px] w-[320px] rounded-full bg-nexus-accent/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[12%] left-[-10%] h-[280px] w-[280px] rounded-full bg-nexus-accentBlue/8 blur-3xl" />

      <div className="nexus-frame relative">
        {/* Header */}
        <header className="border-b border-nexus-line pb-14 md:pb-[72px]">
          <div className="grid gap-10 md:grid-cols-[0.75fr_1fr] md:items-end">
            {/* Left sub info */}
            <FadeIn y={10}>
              <div className="max-w-[320px]">
                <div className="mb-8 flex items-center gap-3">
                  <span className="h-px w-7 bg-nexus-accent" />
                  <span className="font-en text-[10.5px] font-semibold uppercase tracking-[0.22em] text-nexus-accentDeep">
                    Use Cases
                  </span>
                </div>

                <p className="hidden text-[13px] leading-[2] tracking-[0.02em] text-nexus-muted/78 md:block">
                  業務のすべてを一度に変えるのではなく、
                  効果が見えやすい領域から、少しずつ流れを整えていきます。
                </p>
              </div>
            </FadeIn>

            {/* Right main title */}
            <FadeIn delay={90} y={12}>
              <div className="md:ml-auto md:max-w-[660px] md:text-right">
                <p className="font-en text-[10px] font-semibold uppercase tracking-[0.24em] text-nexus-accentDeep/80">
                  Practical Starting Points
                </p>

                <h2 className="mt-7 font-jp text-[38px] font-medium leading-[1.16] tracking-[-0.06em] text-nexus-dark md:text-[56px] lg:text-[64px]">
                  どこから、
                  <br />
                  流れを変えるか。
                </h2>

                <p className="mt-7 text-[15px] leading-[2.08] tracking-[0.01em] text-nexus-muted">
                  営業、問い合わせ対応、事務処理、社内ナレッジ。
                  <br className="hidden md:block" />
                  まずは、現場の摩擦が見えやすい場所から始めます。
                </p>
              </div>
            </FadeIn>
          </div>
        </header>

        {/* Cases */}
        <div className="mt-10 divide-y divide-nexus-line/90">
          {cases.map((item, index) => (
            <FadeIn key={item.label} delay={120 + index * 85} y={14}>
              <article className="group relative">
                <div className="grid gap-7 py-10 md:grid-cols-[220px_1fr] md:gap-12 md:py-12">
                  {/* Left meta */}
                  <div className="flex items-start justify-between gap-5 md:block">
                    <p className="font-en text-[11px] font-semibold uppercase tracking-[0.22em] text-nexus-accentDeep">
                      0{index + 1}
                    </p>

                    <div className="md:mt-8">
                      <p className="font-en text-[10px] font-medium uppercase tracking-[0.2em] text-nexus-muted/50">
                        {item.label}
                      </p>

                      <p className="mt-2 font-jp text-[14px] font-medium tracking-[0.18em] text-nexus-dark/42">
                        {item.jp}
                      </p>
                    </div>
                  </div>

                  {/* Right content */}
                  <div className="md:ml-auto md:max-w-[760px] md:text-right">
                    <h3 className="font-jp text-[25px] font-medium leading-[1.42] tracking-[-0.052em] text-nexus-dark md:text-[31px] lg:text-[35px]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[13.5px] leading-[2] tracking-[0.01em] text-nexus-muted md:ml-auto md:max-w-[590px] md:text-right md:text-[14px]">
                      {item.text}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2.5 md:justify-end">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-nexus-line/90 bg-white/52 px-3.5 py-1.5 font-en text-[10px] font-medium tracking-[0.08em] text-nexus-muted/82 backdrop-blur-sm transition duration-500 group-hover:border-nexus-accent/38 group-hover:bg-white/72 group-hover:text-nexus-dark"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover wash */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-white/0 transition duration-500 group-hover:bg-white/26" />

                {/* Right-axis line */}
                <div className="pointer-events-none absolute bottom-[-1px] right-0 h-px w-full overflow-hidden opacity-70">
                  <div className="ml-auto h-px w-[28%] translate-x-full bg-gradient-to-r from-transparent via-nexus-accent/70 to-transparent opacity-0 transition duration-700 group-hover:translate-x-[-340%] group-hover:opacity-100" />
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Bottom note */}
        <FadeIn delay={500} y={14}>
          <div className="mt-16 border-t border-nexus-line pt-10 md:text-right">
            <div className="md:ml-auto md:max-w-[700px]">
              <p className="font-en text-[10px] font-semibold uppercase tracking-[0.24em] text-nexus-accentDeep">
                Start From The Visible Friction
              </p>

              <p className="mt-5 text-[14px] leading-[2] text-nexus-muted">
                最初に見るべきなのは、大きな変革テーマではなく、
                現場が毎日つまずいている小さな摩擦です。
                そこを整えることで、システム導入は“使われる改善”として残ります。
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}