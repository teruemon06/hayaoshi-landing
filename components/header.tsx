'use client';

import { useEffect, useState } from 'react';

export default function Header() {
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
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 
            className="text-2xl font-bold text-purple-500"
            style={{
              fontFamily: "'M PLUS Rounded 1c', 'Zen Maru Gothic', 'Kosugi Maru', 'Rounded Mplus 1c', sans-serif",
              transform: 'rotate(-4deg)',
              lineHeight: '1.2',
            }}
          >
            ハヤオシ
          </h1>
        </div>

        {/* Download Button */}
        <a
          href={downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-purple-500 text-white font-semibold rounded-full hover:bg-purple-600 transition-colors text-sm"
        >
          ダウンロード
        </a>
      </div>
    </header>
  );
}
