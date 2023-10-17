import Image from 'next/image';
import Link from 'next/link';

import nextVideo from './next-video.svg';

export default function Page() {
  return (
    <main>
      <section className="max-w-780 mt-100 mb-150 mx-auto text-center">
        <Image src={nextVideo} alt="Next.js alongside next-video" className="mb-60 mx-auto" />
        <h1 className="text-64 font-bold mb-30">Adding high-performance video to your Next.js app</h1>
        <p className="mb-30">
          <code className="font-mono text-21-mono text-pink bg-pink/25 px-10 rounded-4">next-video</code> solves the
          hard problems with embedding, storing, streaming, and customizing video.
        </p>
        <div className="relative px-100 py-50 w-full grid grid-cols-2 gap-20 font-mono text-16-mono uppercase">
          <div className="absolute -inset-100 -z-10">
            <div
              className="absolute inset-0 bg-pink-dark-30"
              style={{
                backgroundImage: 'radial-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%)',
              }}
            />
            <div
              className="absolute inset-0 bg-grid"
              style={{
                backgroundSize: '20px',
                backgroundPosition: 'center',
              }}
            />
          </div>
          <a href="#get-started" className="h-60 rounded-full flex items-center justify-center bg-pink text-black">
            Get started
          </a>
          <Link
            href="./docs"
            className="h-60 rounded-full border border-white flex items-center justify-center bg-pink-dark-30 "
          >
            Documentation
          </Link>
        </div>
      </section>
      <section>
        <header className="mt-150 mb-100 text-center">
          <h2 className="font-bold text-48">What&apos;s included</h2>
          <p className="text-gray-a9">Everything you need to stream video like a pro.</p>
        </header>
      </section>
    </main>
  );
}
