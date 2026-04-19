'use client';

import { useEffect, useState } from 'react';

export default function HeroV2() {
  const [downloadLink, setDownloadLink] = useState('https://apps.apple.com/jp/app/hayaoshi/id1234567890');

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setDownloadLink('https://apps.apple.com/jp/app/hayaoshi/id1234567890');
    } else if (/android/.test(userAgent)) {
      setDownloadLink('https://play.google.com/store/apps/details?id=com.hayaoshi.app');
    }
  }, []);

  return (
    <section className="relative py-20 px-4 sm:py-32 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* App Icon */}
        <div className="mb-8 flex justify-center">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663560023736/ccdTSmpHsffWtvzu.png"
            alt="ハヤオシ"
            className="w-20 h-20 object-contain"
          />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          気づいたら、<br />
          賢くなってる。
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-gray-600 mb-4">
          早押しクイズゲーム「ハヤオシ」
        </p>

        {/* Description */}
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          通学中の5分、寝る前の3分。<br />
          スマホを開いた瞬間から、遊べる。
        </p>

        {/* CTA Button */}
        <a
          href={downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-purple-500 text-white font-bold rounded-full hover:bg-purple-600 transition-colors text-lg shadow-lg"
        >
          今すぐダウンロード
        </a>

        {/* Secondary Info */}
        <p className="text-sm text-gray-500 mt-8">
          iOS・Android 無料
        </p>
      </div>
    </section>
  );
}
