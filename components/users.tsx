export default function Users() {
  const users = [
    {
      title: '中高生',
      description: 'スキマ時間に遊びつつ授業の先取り・復習。友達と競い合いながら学べる。',
      icon: '📚',
    },
    {
      title: '大学生',
      description: '資格試験対策（簿記、TOEIC語彙、ITパスポート）をゲーム化。楽しく実力アップ。',
      icon: '🎓',
    },
    {
      title: '社会人',
      description: '通勤時間の脳トレ。教養のアップデート。ビジネスに必要な知識を遊んで習得。',
      icon: '💼',
    },
    {
      title: 'シニア',
      description: '脳トレ＋全国の同世代と交流。新しい学びと人間関係の場。',
      icon: '👴',
    },
    {
      title: 'クイズ好き',
      description: '段位・称号で腕を競う本格派。上手さの天井が高い、やり込みゲーム。',
      icon: '🧠',
    },
    {
      title: '地元愛勢',
      description: '都道府県対抗戦で県の誇りをかけて戦う。地元を全国1位に。',
      icon: '🗾',
    },
  ];

  return (
    <section className="py-20 px-4 sm:py-32">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-center">
          こんな人に、<br />
          ハヤオシ
        </h2>

        {/* Users Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {users.map((user, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">{user.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {user.title}
              </h3>
              <p className="text-gray-600">
                {user.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
