export default function Prefectures() {
  return (
    <section id="prefectures" className="py-20 px-4 sm:py-32">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-center">
          キミの勝利が、<br />
          地元の勝利に
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center leading-relaxed">
          47都道府県対抗のリアルタイム全国ランキング。<br />
          自分の1勝が地元を動かす。個人を超えた動機で、続く。
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl mb-4">🗾</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              全国ランキングがリアルタイムで動く
            </h3>
            <p className="text-gray-600">
              あなたの勝利が所属都道府県に加算される。東京都ランキング上昇↑の演出で、自分の1勝が地図を動かす実感。
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              地元を全国1位に
            </h3>
            <p className="text-gray-600">
              県内トップランカーには「◯◯県1位」の特別称号。あなたの地元を全国1位に押し上げる目標が生まれる。
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              選ぶ理由は自由
            </h3>
            <p className="text-gray-600">
              出身地、修学旅行先、応援したい県…どの都道府県を選ぶかはあなた次第。郷土愛で繋がるコミュニティ。
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              社会的な動機
            </h3>
            <p className="text-gray-600">
              個人の勝利で終わらない。地元の勝利という社会的動機が、続ける理由になる。
            </p>
          </div>
        </div>

        {/* Highlight */}
        <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-8 rounded-lg text-center">
          <p className="text-gray-700 text-lg">
            <span className="font-bold text-purple-600">Duolingoにはない、ハヤオシだけの武器。</span><br />
            個人を超えた動機で、続く学習。
          </p>
        </div>
      </div>
    </section>
  );
}
