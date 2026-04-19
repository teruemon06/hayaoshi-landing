export default function Features() {
  const features = [
    {
      title: '対戦モード',
      description: '他のプレイヤーと対戦してランキングを競う。リアルタイムで結果が反映されます。',
      icon: '⚔️',
    },
    {
      title: '一人プレイ',
      description: '自分のペースで学習を進める。時間を気にせず、じっくり学べます。',
      icon: '📚',
    },
    {
      title: '複数科目',
      description: '英単語、簿記、百人一首、日本史から選択。興味のある科目を学習できます。',
      icon: '🎓',
    },
    {
      title: '段位・称号システム',
      description: '学習の進捗を段位と称号で可視化。達成感を感じながら学習できます。',
      icon: '🏆',
    },
    {
      title: 'ランキング',
      description: '全国のプレイヤーと競い合う。トップランカーを目指しましょう。',
      icon: '📊',
    },
    {
      title: 'シンプルなUI',
      description: 'わかりやすく、使いやすいインターフェース。誰でもすぐに始められます。',
      icon: '✨',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
          主な機能
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          ハヤオシには、学習を楽しくするための様々な機能があります
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
