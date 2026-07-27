import "./globals.css";
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-urbanist',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}