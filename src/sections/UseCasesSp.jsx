import FadeIn from "../components/FadeIn"

const cases = [
  {
    label: "Sales",
    jp: "営業",
    title: "営業情報を、判断できる流れへ。",
    text: "商談履歴、顧客情報、提案資料を整理し、誰が見ても次の動きが分かる状態へ整えます。",
    tags: ["CRM", "提案資料", "報告"],
  },
  {
    label: "Support",
    jp: "対応",
    title: "問い合わせ対応を、迷わない運用へ。",
    text: "FAQ、過去対応、社内ナレッジをつなぎ、回答品質と対応速度を安定させます。",
    tags: ["FAQ", "対応履歴", "ナレッジ"],
  },
  {
    label: "Back Office",
    jp: "事務",
    title: "繰り返す処理を、軽くする。",
    text: "請求、報告、確認作業など、日々発生する定型業務を整理し、確認漏れを減らします。",
    tags: ["請求", "確認", "承認"],
  },
  {
    label: "Knowledge",
    jp: "知識",
    title: "社内情報を、探せる資産へ。",
    text: "散らばった文書やルールを整理し、必要な人が必要な情報へすぐ届く状態をつくります。",
    tags: ["文書", "ルール", "検索"],
  },
]

export default function UseCasesSp() {
  return (
    <section
      id="usecases"
      className="relative isolate overflow-hidden bg-nexus-bgSoft px-6 py-24 md:hidden"
    >
      {/* background */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.86) 0%, rgba(239,247,249,0.72) 48%, rgba(247,250,252,0.98) 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px bg-gradient-to-r from-transparent via-nexus-accent/35 to-transparent" />

      <p className="pointer-events-none absolute -left-5 top-16 z-0 font-en text-[86px] font-semibold uppercase leading-none tracking-[-0.09em] text-nexus-dark/[0.028]">
        Cases
      </p>

      <div className="pointer-events-none absolute right-[-34%] top-[18%] z-0 h-[260px] w-[260px] rounded-full bg-nexus-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute left-[-36%] bottom-[12%] z-0 h-[240px] w-[240px] rounded-full bg-nexus-accentBlue/8 blur-3xl" />

      <div className="relative z-10">
        {/* header */}
        <FadeIn y={10}>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-7 bg-nexus-accent" />
            <span className="font-en text-[10px] font-semibold uppercase tracking-[0.22em] text-nexus-accentDeep">
              Use Cases
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={90} y={12}>
          <div className="border-b border-nexus-line pb-10">
            <p className="font-en text-[9.5px] font-semibold uppercase tracking-[0.24em] text-nexus-accentDeep/75">
              Practical Starting Points
            </p>

            <h2 className="mt-6 font-jp text-[36px] font-medium leading-[1.18] tracking-[-0.065em] text-nexus-dark">
              どこから、
              <br />
              流れを変えるか。
            </h2>

            <p className="mt-7 max-w-[320px] text-[13.5px] leading-[2.05] tracking-[0.01em] text-nexus-muted">
              営業、問い合わせ対応、事務処理、社内ナレッジ。
              すべてを一度に変えるのではなく、摩擦が見えやすい場所から整えます。
            </p>
          </div>
        </FadeIn>

        {/* case flow */}
        <div className="relative mt-8">
          <div className="pointer-events-none absolute left-[18px] top-0 h-full w-px bg-gradient-to-b from-nexus-accent/45 via-nexus-line to-transparent" />

          <div className="space-y-0">
            {cases.map((item, index) => (
              <FadeIn key={item.label} delay={150 + index * 80} y={14}>
                <article className="relative border-b border-nexus-line/80 py-8 pl-12">
                  {/* node */}
                  <div className="absolute left-0 top-9 flex h-9 w-9 items-center justify-center rounded-[11px] border border-nexus-line bg-white/72 backdrop-blur-sm">
                    <span className="font-en text-[10px] font-semibold tracking-[0.04em] text-nexus-accentDeep">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-en text-[9.5px] font-semibold uppercase tracking-[0.22em] text-nexus-muted/56">
                        {item.label}
                      </p>

                      <p className="mt-1 font-jp text-[11px] font-medium tracking-[0.16em] text-nexus-dark/42">
                        {item.jp}
                      </p>
                    </div>

                    <span className="mt-1 h-px w-10 bg-gradient-to-r from-nexus-accent/60 to-transparent" />
                  </div>

                  <h3 className="mt-6 font-jp text-[22px] font-medium leading-[1.45] tracking-[-0.055em] text-nexus-dark">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-[1.95] tracking-[0.01em] text-nexus-muted">
                    {item.text}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-nexus-line/80 bg-white/52 px-3 py-1.5 font-jp text-[10.5px] font-medium tracking-[0.04em] text-nexus-muted/82"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* bottom note */}
        <FadeIn delay={520} y={14}>
          <div className="mt-12 border-y border-nexus-line py-7">
            <p className="font-en text-[9.5px] font-semibold uppercase tracking-[0.24em] text-nexus-accentDeep">
              Start From The Visible Friction
            </p>

            <p className="mt-5 text-[13.5px] leading-[2] tracking-[0.01em] text-nexus-muted">
              最初に見るべきなのは、大きな変革テーマではなく、
              現場が毎日つまずいている小さな摩擦です。
              そこを整えることで、システム導入は“使われる改善”として残ります。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}