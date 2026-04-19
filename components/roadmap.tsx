export default function Roadmap() {
  const features = [
    {
      title: 'バトルロイヤル型',
      description: '10人が同じ部屋に入り、問題が次々読まれる。誰かが正解するたびに最下位が脱落。15秒決着の緊張感。',
      icon: '⚔️',
    },
    {
      title: '今週のチャレンジ',
      description: '毎週変わるテーマに挑戦。限定称号や報酬を獲得。イベント感で飽きさせない。',
      icon: '🎯',
    },
    {
      title: '科目別ミニゲーム',
      description: '英単語は4択、簿記は〇✕速答、歴史は年号並び替え。科目ごとに出題形式が違う。単調さを排除。',
      icon: '🎮',
    },
    {
      title: 'ランキング配信機能',
      description: '問題文が読み上げられる=視聴者も一緒に考えられる。観戦が面白い。YouTuber・Vtuberとの相性抜群。',
      icon: '📺',
    },
  ];

  return (
    <section className="py-20 px-4 sm:py-32 bg-gradient-to-b from-transparent to-purple-50">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-center">
          続々、リリース予定
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center">
          ハヤオシはまだ始まったばかり。<br />
          さらに面白くなる、その先を見せます。
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
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
