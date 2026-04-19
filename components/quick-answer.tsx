export default function QuickAnswer() {
  return (
    <section className="py-20 px-4 sm:py-32">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-center">
          問題文の途中で押せ。<br />
          早いほど高得点。
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center leading-relaxed">
          知識だけじゃ勝てない。反応速度と先読み力も勝敗を決める。<br />
          弱者が強者を食える逆転メカニクス。
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              脊髄反射の快感
            </h3>
            <p className="text-gray-600">
              「あ、これ知ってる」の瞬間に指が動く。知識と反応速度が一体になる快感。
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              上手さの天井が高い
            </h3>
            <p className="text-gray-600">
              同じ問題でも、押すタイミングで得点が変わる。極めるほど、スコアが伸びる。
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              全部聞かずに答える
            </h3>
            <p className="text-gray-600">
              問題文が読み上げられている途中で回答できる。全部聞かずに答えるスリル。
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              逆転の可能性
            </h3>
            <p className="text-gray-600">
              知識量で劣っていても、反応速度で勝つ可能性がある。誰もが活躍できる。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
