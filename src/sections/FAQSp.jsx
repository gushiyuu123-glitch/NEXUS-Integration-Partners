import FadeIn from "../components/FadeIn"

const faqImage = "/images/faq-consultation1.png"

const faqs = [
  {
    q: "何を改善すべきか、まだ明確でなくても相談できますか？",
    a: "可能です。最初のヒアリングでは、現在の業務フローや利用中のツール、日々発生している手作業を整理し、どこから着手すべきかを一緒に見極めます。",
  },
  {
    q: "小規模な導入から始められますか？",
    a: "はい。最初から大きく作り込むのではなく、効果が見えやすく、現場の負担が少ない領域から小さく始める進め方を推奨しています。",
  },
  {
    q: "既存のツールやシステムと連携できますか？",
    a: "利用中のSaaS、社内データ、既存の業務フローを確認したうえで、連携できる範囲と最適な進め方を設計します。",
  },
  {
    q: "社内にIT担当者がいなくても大丈夫ですか？",
    a: "大丈夫です。専門用語だけで進めず、現場の方が理解しやすい形で、設計・導入・運用の流れを整理します。",
  },
  {
    q: "相談から導入まで、どのくらいの期間がかかりますか？",
    a: "内容によりますが、まずは1〜2週間ほどで現状整理を行い、その後に導入範囲・優先順位・スケジュールを明確にします。小規模な改善であれば短期間で開始できます。",
  },
]

export default function FAQSp() {
  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden bg-nexus-bg py-24 md:hidden"
    >
      {/* background image */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[54svh] min-h-[390px] overflow-hidden">
        <img
          src={faqImage}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 object-cover opacity-[0.58]"
          style={{
            objectPosition: "50% 22%",
            filter: "contrast(1.06) brightness(1.02) saturate(0.98)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.96) 36%, rgba(0,0,0,0.52) 68%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.96) 36%, rgba(0,0,0,0.52) 68%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      {/* image veil */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(247,250,252,0.34) 0%, rgba(247,250,252,0.58) 34%, rgba(247,250,252,0.92) 61%, #F7FAFC 78%, #F7FAFC 100%)",
        }}
      />

      {/* soft tone */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-75"
        style={{
          background:
            "radial-gradient(circle at 18% 18%, rgba(70,199,216,0.12), transparent 34%), radial-gradient(circle at 82% 48%, rgba(122,220,191,0.08), transparent 36%)",
        }}
      />

      {/* watermark */}
      <p className="pointer-events-none absolute -right-5 top-14 z-[3] font-en text-[92px] font-semibold uppercase leading-none tracking-[-0.09em] text-nexus-dark/[0.035]">
        FAQ
      </p>

      <div className="relative z-10 px-6">
        {/* intro */}
        <FadeIn>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-7 bg-nexus-accent" />
            <span className="font-en text-[9.5px] font-semibold uppercase tracking-[0.22em] text-nexus-accentDeep">
              FAQ
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={120} y={10}>
          <h2 className="font-jp text-[32px] font-medium leading-[1.2] tracking-[-0.065em] text-nexus-dark">
            導入前の迷いを、
            <br />
            相談の入口に変える。
          </h2>
        </FadeIn>

        <FadeIn delay={220} y={10}>
          <p className="mt-6 max-w-[330px] text-[13.5px] leading-[2.05] tracking-[0.01em] text-nexus-muted">
            はじめから完璧に整理されている必要はありません。
            まだ言葉になっていない違和感や、現場で繰り返している小さな手間から、
            導入の糸口を見つけていきます。
          </p>
        </FadeIn>

        {/* accordion */}
        <FadeIn delay={320} y={14} duration={900}>
          <div className="mt-12 border-y border-nexus-line bg-white/50 backdrop-blur-[2px]">
            {faqs.map((item, index) => (
              <details
                key={item.q}
                className="group border-b border-nexus-line last:border-b-0"
              >
                <summary className="grid cursor-pointer list-none grid-cols-[32px_1fr_30px] items-start gap-4 py-6 [&::-webkit-details-marker]:hidden">
                  <p className="pt-[5px] font-en text-[10px] font-semibold tracking-[0.1em] text-nexus-accentDeep">
                    0{index + 1}
                  </p>

                  <h3 className="font-jp text-[15.5px] font-medium leading-[1.65] tracking-[-0.045em] text-nexus-dark">
                    {item.q}
                  </h3>

                  <span className="mt-[2px] flex h-7 w-7 items-center justify-center border border-nexus-line bg-white/78 font-en text-[18px] leading-none text-nexus-accentDeep transition duration-300 group-open:rotate-45 group-open:border-nexus-accent/50 group-open:bg-nexus-accent/10">
                    +
                  </span>
                </summary>

                <div className="pb-7 pl-[48px] pr-1">
                  <p className="border-l border-nexus-accent/35 pl-5 text-[13.5px] font-medium leading-[2.05] tracking-[0.01em] text-nexus-dark/76">
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </FadeIn>

        {/* bottom note */}
        <FadeIn delay={460} y={12}>
          <div className="mt-10 border-t border-nexus-line pt-8">
            <p className="font-jp text-[17px] font-medium leading-[1.75] tracking-[-0.045em] text-nexus-dark/82">
              質問が曖昧なほど、
              <br />
              最初の整理に価値があります。
            </p>

            <p className="mt-4 text-[12.5px] leading-[1.9] text-nexus-muted">
              まずは、現場で止まっている流れを一緒に見つけます。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}