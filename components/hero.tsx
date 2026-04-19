export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-white py-20 px-4 sm:py-32">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center text-5xl">
            🐦
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
          ハヤオシ
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          クイズで楽しく学べる学習アプリ
        </p>

        {/* Description */}
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          対戦型クイズで複数の科目を学習できます。段位と称号システムで学習の進捗を可視化。友達と競い合いながら、楽しく知識を深めましょう。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#download"
            className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            アプリをダウンロード
          </a>
          <a
            href="#features"
            className="px-8 py-4 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
          >
            機能を詳しく見る
          </a>
        </div>
      </div>
    </section>
  );
}
