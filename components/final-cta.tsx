'use client';

import { useEffect, useState } from 'react';

export default function FinalCTA() {
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
    <section className="py-20 px-4 sm:py-32 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
          さあ、地元を<br />
          全国1位へ
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          遊ぶだけで、気づいたら賢くなってる。<br />
          今すぐハヤオシをダウンロード。
        </p>

        {/* CTA Button */}
        <a
          href={downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-5 bg-purple-500 text-white font-bold rounded-full hover:bg-purple-600 transition-colors text-lg shadow-lg mb-8"
        >
          今すぐダウンロード
        </a>

        {/* Secondary Info */}
        <p className="text-sm text-gray-500">
          iOS・Android 無料 | アプリ内課金なし
        </p>
      </div>
    </section>
  );
}
