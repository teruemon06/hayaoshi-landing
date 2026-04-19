export default function Download() {
  return (
    <section id="download" className="py-20 px-4 sm:py-32 bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          今すぐ始めよう
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          ハヤオシは iOS と Android で利用できます。
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* App Store */}
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.05 13.5c-.91 0-1.64.46-2.05 1.27h-.02c-.3.59-.77 1.15-1.39 1.55.62.4 1.09.96 1.39 1.55h.02c.41.81 1.14 1.27 2.05 1.27 1.66 0 2.95-1.32 2.95-2.95 0-1.63-1.29-2.95-2.95-2.95zm-7.43-2.77c.99 0 1.77-.78 1.77-1.77s-.78-1.77-1.77-1.77-1.77.78-1.77 1.77.78 1.77 1.77 1.77z" />
            </svg>
            <div className="text-left">
              <div className="text-xs">App Store で</div>
              <div className="text-lg font-semibold">ダウンロード</div>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 13.5h8v8H3z M11 5.5h8v8h-8z M3 5.5h8v8H3z M11 13.5h8v8h-8z" />
            </svg>
            <div className="text-left">
              <div className="text-xs">Google Play で</div>
              <div className="text-lg font-semibold">ダウンロード</div>
            </div>
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          無料でダウンロードできます。アプリ内課金はありません。
        </p>
      </div>
    </section>
  );
}
