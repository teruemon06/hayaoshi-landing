import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';

export const metadata: Metadata = {
  title: 'ハヤオシ - クイズで楽しく学べる学習アプリ',
  description: 'ハヤオシは、対戦型クイズで複数の科目を楽しく学べるアプリです。英単語、簿記、百人一首、日本史から選んで学習できます。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700;800&family=Zen+Maru+Gothic:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gradient-to-b from-purple-100 via-purple-50 to-white text-gray-900">
        <Header />
        {children}
      </body>
    </html>
  );
}
