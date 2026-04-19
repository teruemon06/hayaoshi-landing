export default function Engagement() {
  const elements = [
    {
      title: '段位システム',
      description: 'マルチ対戦の実力を表す公式な強さの指標。三段→四段→五段…の昇格演出で達成感。次の段位までが継続の動機に。',
      icon: '🥋',
    },
    {
      title: '称号コレクション',
      description: '科目ごとの習熟度を示すコレクション要素。「英単語使い」→「英単語マスター」→「英単語博士」とランクアップ。',
      icon: '🏅',
    },
    {
      title: '実績',
      description: '累計勝利数、連勝記録、特定科目の達成などやり込みを可視化。「5/25」のように達成進捗が見える。',
      icon: '📈',
    },
    {
      title: 'ジジのおさらい',
      description: '間違えた問題を自動で復習リストに蓄積。キャラクター「ジジ」が学習パートナーとして寄り添う。',
      icon: '🦉',
    },
  ];

  return (
    <section className="py-20 px-4 sm:py-32">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-center">
          続けるほど、<br />
          強くなる
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center">
          段位、称号、実績。やり込み要素が、続ける理由になる。
        </p>

        {/* Elements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {elements.map((element, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">{element.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {element.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {element.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
