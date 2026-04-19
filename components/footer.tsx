export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">ハヤオシについて</h3>
            <p className="text-sm leading-relaxed">
              ハヤオシは、クイズを通じて楽しく学べるモバイルアプリです。複数の科目から選択でき、対戦やランキング機能で学習をゲーム化します。
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">リンク</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  機能
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-white transition-colors">
                  ダウンロード
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  利用規約
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">お問い合わせ</h3>
            <p className="text-sm">
              ご質問やご意見は、メールでお気軽にお問い合わせください。
            </p>
            <a
              href="mailto:support@hayaoshi.app"
              className="text-primary hover:text-primary/80 transition-colors mt-2 inline-block"
            >
              support@hayaoshi.app
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© {currentYear} Hayaoshi. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-white transition-colors">
                プライバシー
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                利用規約
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
