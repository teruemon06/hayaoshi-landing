import type { Metadata } from 'next';
import './globals.css';

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
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
