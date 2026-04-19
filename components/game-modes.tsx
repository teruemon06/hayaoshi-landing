export default function GameModes() {
  const modes = [
    {
      title: 'ソロプレイ',
      subtitle: '60秒タイムアタック',
      description: '60秒間でどこまでスコアを伸ばせるか、世界中のプレイヤーとランキング競争。コンボで得点が跳ね上がる。',
      icon: '⏱️',
    },
    {
      title: 'ネット対戦',
      subtitle: 'ランダムマッチ',
      description: '世界中の誰かと即対戦。勝敗が自分のスコアだけでなく地元の都道府県ポイントに反映される。',
      icon: '🌍',
    },
    {
      title: 'フレンド対戦',
      subtitle: '身内で盛り上がる',
      description: '学校、職場、家族で「誰が一番物知りか」のひとつの指針に。身近な人との競争が最高に楽しい。',
      icon: '👥',
    },
    {
      title: 'CPU対戦',
      subtitle: '練習モード',
      description: '通信なし・相手待ちなしでいつでも練習。難易度調整で自分のペースで腕を磨ける。',
      icon: '🤖',
    },
  ];

  return (
    <section className="py-20 px-4 sm:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-center">
          遊び方は、4通り
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center">
          その日の気分で選べる。毎日飽きない。
        </p>

        {/* Modes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modes.map((mode, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">{mode.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {mode.title}
              </h3>
              <p className="text-sm text-purple-600 font-semibold mb-4">
                {mode.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {mode.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
