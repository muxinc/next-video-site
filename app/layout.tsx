import type { Metadata } from 'next';
import { DM_Sans, JetBrains_Mono } from 'next/font/google';

import clsx from 'clsx';

import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--sans' });
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--mono' });

export const metadata: Metadata = {
  title: 'Next Video',
  description:
    'next-video solves the hard problems with embedding, storing, streaming, and customizing video in your Next.js app.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.variable, jetBrainsMono.variable, 'font-sans bg-black text-white text-24')}>
        {children}
      </body>
    </html>
  );
}
