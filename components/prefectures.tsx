export default function Prefectures() {
  return (
    <section id="prefectures" className="py-20 px-4 sm:py-32">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-center">
          キミの勝利が、地元の勝利に。
        </h2>

        {/* Description */}
        <div className="max-w-2xl mx-auto text-center space-y-4 text-gray-600 leading-relaxed">
          <p>
            ネット対戦で勝つたび、勝ち点は所属する都道府県に<br />
            加算される。47都道府県のランキングが、リアルタイムで動く。
          </p>
          <p>
            県内トップには「◯◯県1位」の称号。<br />
            出身地、今住んでいる街、応援したい県——<br />
            選ぶ理由は、あなたが決める。
          </p>
        </div>
      </div>
    </section>
  );
}
