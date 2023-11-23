import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'normalize.css/normalize.css';
import './globals.css';
import CaptchaProvider from '@src/components/CaptchaProvider/CaptchaProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '0xDevs',
  description: '0xdevs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CaptchaProvider>{children}</CaptchaProvider>
      </body>
    </html>
  );
}
