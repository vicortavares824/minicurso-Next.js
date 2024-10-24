import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Minicurso Next.js',
  description: 'Aprendendo os Princípios do Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt'>
      <body>{children}</body>
    </html>
  );
}
