import type { Metadata } from 'next';
import { DM_Sans, JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';

import clsx from 'clsx';

import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--sans' });
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--mono' });

function getWebHost() {
  if (process.env.NODE_ENV === 'development') {
    return new URL(`http://localhost:${process.env.PORT || 3000}`);
  } else if (process.env.VERCEL_ENV === 'preview') {
    return new URL(`https://${process.env.VERCEL_URL}`);
  } else if (process.env.PRODUCTION_URL) {
    return new URL(`https://${process.env.PRODUCTION_URL}`);
  }
  return undefined;
}

export const metadata: Metadata = {
  metadataBase: getWebHost(),
  title: 'next-video',
  description:
    'Next Video solves the hard problems with embedding, storing, streaming, and customizing video in your Next.js app.',
};

const data = {
  footerCallout: '🛠️ by Next.js fans and video nerds',
  footerColumns: [
    {
      title: 'Download',
      items: [
        { text: 'Github', href: 'https://www.github.com/muxinc/next-video' },
        { text: 'npm', href: 'https://www.npmjs.com/package/next-video' },
      ],
    },
    {
      title: 'Resources',
      items: [
        { text: 'Changelog', href: 'https://github.com/muxinc/next-video/releases' },
        { text: <span className="whitespace-nowrap">Demuxed Community</span>, href: 'https://www.demuxed.com/' },
        { text: 'next/video RFC', href: 'https://github.com/vercel/next.js/discussions/56118' },
        { text: 'howvideo.works', href: 'https://howvideo.works/' },
      ],
    },
    {
      title: 'Acknowledgements',
      items: [
        {
          text: (
            <>
              Vercel <span className="whitespace-nowrap">(application hosting)</span>
            </>
          ),
          href: 'https://www.vercel.com/',
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(
          dmSans.variable,
          jetBrainsMono.variable,
          'overflow-x-hidden bg-black px-30 font-sans text-18 text-white antialiased sm:px-50'
        )}
        style={{ minWidth: '20rem' }}
      >
        {children}
        <footer className="mx-auto mb-200 grid max-w-1180 grid-cols-1 gap-x-20 gap-y-60 text-center md:grid-cols-3 md:text-left xl:grid-cols-5">
          <p className="col-span-full whitespace-nowrap xl:col-span-2">{data.footerCallout}</p>
          {data.footerColumns.map((column, columnIdx) => (
            <div key={columnIdx}>
              <h2 className="leading-1500 mb-40 font-mono text-16 font-700 uppercase tracking-1 text-gray-a0">
                {column.title}
              </h2>
              <ul>
                {column.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="mb-10">
                    <Link className="leading-1330 hover:underline focus-visible:underline" href={item.href}>
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </footer>
      </body>
    </html>
  );
}
