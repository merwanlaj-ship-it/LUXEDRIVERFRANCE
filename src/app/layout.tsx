import type { ReactNode } from 'react';
import { Inter, Playfair_Display } from 'next/font/google';
import { cookies } from 'next/headers';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export default function RootLayout({ children }: { children: ReactNode }) {
  const locale = cookies().get('NEXT_LOCALE')?.value || 'fr';

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-charcoal font-sans text-white">{children}</body>
    </html>
  );
}
