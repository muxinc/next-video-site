import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import iconAdaptive from 'app/(home)/_images/icon-adaptive.svg';
import iconAI from 'app/(home)/_images/icon-ai.svg';
import iconAnalytics from 'app/(home)/_images/icon-analytics.svg';
import iconFormats from 'app/(home)/_images/icon-formats.svg';
import iconPlaceholder from 'app/(home)/_images/icon-placeholder.svg';
import iconPlayer from 'app/(home)/_images/icon-player.svg';
import iconStorage from 'app/(home)/_images/icon-storage.svg';
import iconStreaming from 'app/(home)/_images/icon-streaming.svg';
import iconTimeline from 'app/(home)/_images/icon-timeline.svg';
import logoBlob from 'app/(home)/_images/logo-blob.svg';
import logoMux from 'app/(home)/_images/logo-mux-small.svg';
import logoS3 from 'app/(home)/_images/logo-s3.svg';

import placeholderVideo from 'videos/placeholder.mp4';

import NextPlusVideoLogo from '../_components/NextPlusVideoLogo';
import GridBackground from './GridBackground';

const Video = dynamic(() => import('next-video'));
const Popover = dynamic(() => import('./Popover'));

const data = {
  heroTitle: 'Add high-performance video to your Next.js app',
  heroSub: (
    <>
      <code className="rounded-4 bg-pink/25 px-10 font-mono text-16 leading-1750 text-pink supports-clamp:text-clamp-sub-mono">
        next-video
      </code>{' '}
      solves the hard problems with embedding, storing, streaming, and customizing video.
    </>
  ),
  featuresTitle: 'What’s included',
  featuresSub: 'Everything you need to stream video like a pro.',
  features: [
    {
      icon: iconStorage,
      iconAlt: 'Storage icon',
      title: 'Off-repo storage',
      text: 'Automatically transfer local videos outside of your repo to avoid repo storage limits and slow repo cloning',
    },
    {
      icon: iconStreaming,
      iconAlt: 'Streaming icon',
      title: 'Optimized video streaming',
      text: 'Automatically convert and compress videos for high performance, cost-effective video delivery',
    },
    {
      icon: iconPlayer,
      iconAlt: 'Player icon',
      title: 'BYO player, or don’t',
      text: 'Use the built-in, react friendly and customizable video player or go fully custom with your own player without losing the video optimization.',
    },
    {
      icon: iconAdaptive,
      iconAlt: 'Adaptive icon',
      title: 'Adaptive streaming',
      text: 'Prevent buffering and poor experiences on slow networks by automatically creating multiple sizes of the video.',
    },
    {
      icon: iconPlaceholder,
      iconAlt: 'Placeholder icon',
      title: 'Placeholder posters',
      text: 'Zero-config poster frames and BlurHash images for faster perceived player load times',
    },
    {
      icon: iconTimeline,
      iconAlt: 'Timeline icon',
      title: 'Timeline hover thumbnails',
      text: 'Automatically generate the images needed for previewing other parts of the video while hovering over the video progress bar.',
    },
    {
      icon: iconAI,
      iconAlt: 'AI icon',
      title: 'AI captions & subtitles',
      text: 'Add better accessibility to all your videos through Whisper-powered transcriptions and translations.',
    },
    {
      icon: iconFormats,
      iconAlt: 'Formats icon',
      title: 'File formats solved',
      text: 'Convert any source file to cross-browser and cross-device compatible formats',
    },
    {
      icon: iconAnalytics,
      iconAlt: 'Analytics icon',
      title: 'Analytics built-in (optional)',
      text: 'See how often videos get watched and track video performance',
    },
  ],
  getStartedTitle: 'Get started fast',
  getStartedVideoTitle: 'Watch a quick overview',
  getStartedVideo: placeholderVideo,
  getStartedCodeTitle: 'Start here for setup wizard',
  getStartedCode: ['npm install next-video', 'npx next-video init'],
  getStartedCodeLang: 'Bash',
  getStartedCodeDocs: (
    <>
      Or check out{' '}
      <Link href="/docs" className="text-white underline hover:no-underline focus-visible:no-underline">
        the docs
      </Link>{' '}
      for manual configuration.
    </>
  ),
  infrastructureTitle: 'Built on high-performance video streaming infrastructure',
  infrastructureText: (
    <>
      Plug in your own video infrastructure provider, or use the default provider,{' '}
      <Link href="https://www.mux.com/" className="text-white underline hover:no-underline focus-visible:no-underline">
        Mux
      </Link>
      . Mux’s developer video tools are used on the largest streaming sites and live events in the world.
    </>
  ),
  infrastructureLogos: [
    { logo: logoMux, title: 'Mux', href: 'https://www.mux.com/' },
    {
      logo: logoBlob,
      title: 'Vercel Blob',
      href: 'https://vercel.com/docs/storage/vercel-blob',
      comingSoon: true,
    },
    { logo: logoS3, title: 'AWS S3', href: 'https://aws.amazon.com/s3/', comingSoon: true },
  ],
};

export default function Page() {
  return (
    <main className="pt-50 md:pt-100">
      <section className="mx-auto max-w-780 text-center">
        <NextPlusVideoLogo priority className="mx-auto mb-30 md:mb-60" />
        <h1 className="mb-30 text-32 font-800 -tracking-2 supports-clamp:text-clamp-h1">{data.heroTitle}</h1>
        <p className="mb-10 text-18 supports-clamp:text-clamp-sub md:mb-30">{data.heroSub}</p>
        <div
          className="relative mb-120 grid w-full justify-center gap-x-20 gap-y-15 py-50 font-mono text-16 uppercase tracking-1 md:mb-150"
          style={{ gridTemplateColumns: 'repeat(auto-fit, 18.75rem)' }}
        >
          <a href="#get-started" className="peer flex h-60 items-center justify-center rounded-full bg-pink text-black">
            Get started
          </a>
          <Link
            href="./docs"
            className="peer flex h-60 items-center justify-center rounded-full border border-white backdrop-blur"
          >
            Documentation
          </Link>
          <GridBackground inset="100" />
        </div>
      </section>
      <section className="mx-auto max-w-1180">
        <header className="mb-60 text-center md:mb-100">
          <h2 className="text-center text-32 font-800 -tracking-2 supports-clamp:text-clamp-h2">
            {data.featuresTitle}
          </h2>
          <p className="text-18 text-gray-a9 supports-clamp:text-clamp-sub">{data.featuresSub}</p>
        </header>
        <ul className="grid gap-20" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))' }}>
          {data.features.map((feature, featureIdx) => (
            <li
              key={featureIdx}
              className="row-span-3 grid grid-rows-subgrid rounded-20 border border-gray-28 bg-soft-light px-30 py-40"
            >
              <Image src={feature.icon} alt={feature.iconAlt} className="mb-20 supports-subgrid:mb-0" />
              <h3 className="mb-20 text-24 font-800 leading-1167 -tracking-2 supports-subgrid:mb-0">{feature.title}</h3>
              <p className="text-16 text-gray-aa supports-clamp:text-clamp-p">{feature.text}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="mx-auto max-w-1180">
        <header className="mb-60 mt-120 text-center md:mb-80 md:mt-200">
          <h2 className="text-center text-32 font-800 -tracking-2 supports-clamp:text-clamp-h2">
            {data.getStartedTitle}
          </h2>
        </header>
        <div className="grid gap-x-20 md:grid-flow-col md:grid-cols-2 md:grid-rows-[auto_auto]">
          <h3 className="mb-15 text-center text-18 font-800 -tracking-2 supports-clamp:text-clamp-sub md:mb-40 md:leading-1167">
            {data.getStartedVideoTitle}
          </h3>
          <div className="mb-60 leading-0 md:mb-0">
            <Video src={data.getStartedVideo} accentColor="#fa50b5" className="overflow-hidden rounded-20" />
          </div>
          <h3 className="mb-15 text-center text-18 font-800 -tracking-2 supports-clamp:text-clamp-sub md:mb-40 md:leading-1167">
            {data.getStartedCodeTitle}
          </h3>
          <div className="rounded-20 border border-gray-28 bg-soft-light p-40 backdrop-blur">
            <pre className="relative mb-30 overflow-hidden rounded-4 border border-gray-30 bg-black font-mono text-16 leading-1750">
              {/* Line numbers */}
              <div className="absolute left-0 top-0 flex h-full w-30 flex-col items-center border-r border-gray-30 bg-black py-20">
                {data.getStartedCode.map((_, idx) => (
                  <div key={idx} className="text-right text-gray-30">
                    {'>'}
                  </div>
                ))}
              </div>
              {/* Code */}
              <div className="ml-30 overflow-x-scroll p-20 pb-80">
                <code>{data.getStartedCode.join('\n')}</code>
              </div>
              {/* Language */}
              <div className="absolute bottom-20 right-20 leading-[1.125] text-gray-5a">{data.getStartedCodeLang}</div>
            </pre>
            <p className="text-center text-gray-aa">{data.getStartedCodeDocs}</p>
          </div>
        </div>
      </section>
      <section className="relative my-120 md:my-200">
        <GridBackground inset="150" midpoint={35} />
        <div className="mx-auto flex max-w-980 flex-col items-center gap-100 rounded-20 bg-black px-100 py-60 md:flex-row">
          <div>
            <h2 className="mb-30 text-center text-32 font-800 -tracking-2 supports-clamp:text-clamp-h2-alt md:text-left">
              {data.infrastructureTitle}
            </h2>
            <p className="text-center text-gray-aa md:text-left">{data.infrastructureText}</p>
          </div>
          <div className="flex shrink-0 flex-col items-center justify-center gap-40">
            {data.infrastructureLogos.map(({ href, title, logo, comingSoon }, logoIdx) =>
              comingSoon ? (
                <Popover key={logoIdx} text={`${title} coming soon`} label={`Show ${title} popover`}>
                  <Image src={logo} alt={`${title} logo`} className="shrink-0" />
                </Popover>
              ) : (
                <Link key={logoIdx} href={href}>
                  <Image src={logo} alt={`${title} logo`} className="shrink-0" />
                </Link>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
