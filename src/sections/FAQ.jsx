import FadeIn from "../components/FadeIn"

const faqImage = "/images/faq-consultation.png"

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

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-nexus-bg py-32 md:py-40"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={faqImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.58]"
          style={{ objectPosition: "54% center" }}
        />

        {/* 画像の空気を残しながら、文字領域だけ整える */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(247,250,252,0.86) 0%, rgba(247,250,252,0.58) 38%, rgba(247,250,252,0.28) 68%, rgba(247,250,252,0.62) 100%)",
          }}
        />

        {/* 上下の境界をなじませる */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(247,250,252,0.82) 0%, rgba(247,250,252,0.14) 30%, rgba(247,250,252,0.16) 68%, rgba(247,250,252,0.9) 100%)",
          }}
        />

        {/* 未来感の空気。強くしすぎない */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(circle at 18% 22%, rgba(70,199,216,0.12), transparent 32%), radial-gradient(circle at 78% 72%, rgba(122,220,191,0.13), transparent 36%)",
          }}
        />
      </div>

      {/* Watermark */}
      <p className="pointer-events-none absolute -right-8 top-16 font-en text-[110px] font-semibold uppercase leading-none tracking-[-0.08em] text-nexus-dark/[0.035] md:text-[190px] lg:text-[250px]">
        FAQ
      </p>

      <div className="nexus-frame relative">
        {/* Intro */}
        <div className="max-w-[680px]">
          <FadeIn>
            <div className="mb-10 flex items-center gap-3">
              <span className="h-px w-7 bg-nexus-accent" />
              <span className="font-en text-[10.5px] font-semibold uppercase tracking-[0.22em] text-nexus-accentDeep">
                FAQ
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={120} y={12}>
            <h2 className="font-jp text-[40px] font-medium leading-[1.16] tracking-[-0.065em] text-nexus-dark md:text-[62px] lg:text-[70px]">
              導入前の迷いを、
              <br />
              相談の入口に変える。
            </h2>
          </FadeIn>

          <FadeIn delay={240} y={10}>
            <p className="mt-7 max-w-[620px] text-[15px] leading-[2.1] tracking-[0.01em] text-nexus-muted">
              はじめから完璧に整理されている必要はありません。
              まだ言葉になっていない違和感や、現場で繰り返している小さな手間から、
              導入の糸口を見つけていきます。
            </p>
          </FadeIn>
        </div>

        {/* FAQ Accordion */}
        <FadeIn delay={320} y={18} duration={960}>
          <div className="mt-16 overflow-hidden rounded-[34px] border border-nexus-line bg-white/78 shadow-soft backdrop-blur-md">
            {faqs.map((item, index) => (
              <details
                key={item.q}
                className="group border-b border-nexus-line last:border-b-0"
              >
                <summary className="grid cursor-pointer list-none grid-cols-[44px_1fr_38px] items-start gap-5 px-7 py-7 transition duration-300 hover:bg-white/54 md:grid-cols-[48px_1fr_40px] md:px-10 md:py-8 [&::-webkit-details-marker]:hidden">
                  <p className="pt-1 font-en text-[11px] font-semibold tracking-[0.12em] text-nexus-accentDeep">
                    0{index + 1}
                  </p>

                  <h3 className="font-jp text-[16.5px] font-medium leading-[1.7] tracking-[-0.04em] text-nexus-dark md:text-[20px]">
                    {item.q}
                  </h3>

                  <span className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-nexus-line bg-white/82 font-en text-[20px] leading-none text-nexus-accentDeep transition duration-300 group-open:rotate-45 group-open:border-nexus-accent/50 group-open:bg-nexus-accent/10">
                    +
                  </span>
                </summary>

                <div className="px-7 pb-8 md:pl-[88px] md:pr-12">
                  <p className="max-w-[680px] border-l border-nexus-accent/35 pl-6 text-[14.5px] font-medium leading-[2.05] tracking-[0.015em] text-nexus-dark/78">
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </FadeIn>

        {/* Bottom Text */}
        <FadeIn delay={480} y={14}>
          <div className="mt-10 border-t border-nexus-line pt-10">
            <p className="max-w-[720px] font-jp text-[18px] font-medium leading-[1.75] tracking-[-0.04em] text-nexus-dark/80 md:text-[22px]">
              質問が曖昧なほど、最初の整理に価値があります。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}