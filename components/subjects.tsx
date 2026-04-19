export default function Subjects() {
  const subjects = [
    { name: '英単語', emoji: '🌍' },
    { name: '簿記', emoji: '📊' },
    { name: '百人一首', emoji: '📜' },
    { name: '日本史', emoji: '🏯' },
    { name: '地理', emoji: '🗺️' },
    { name: '雑学', emoji: '💡' },
  ];

  return (
    <section className="py-20 px-4 sm:py-32">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-center">
          英単語も、簿記も、<br />
          百人一首も。
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center leading-relaxed">
          6科目からスタート。毎週新科目追加。<br />
          普段触れない分野にゲームとして出会える。
        </p>

        {/* Subjects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {subjects.map((subject, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-3">{subject.emoji}</div>
              <p className="text-gray-900 font-semibold">{subject.name}</p>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-8 rounded-lg text-center">
          <p className="text-gray-700 mb-4">
            <span className="font-bold">随時追加予定：</span>
          </p>
          <p className="text-gray-600">
            世界史、化学、物理、生物、古文、漢字、ことわざ、四字熟語、時事問題、音楽、映画、スポーツ…
          </p>
        </div>
      </div>
    </section>
  );
}
