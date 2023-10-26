import { MDXRemote } from 'next-mdx-remote/rsc';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import clsx from 'clsx';
import rehypePrettyCode from 'rehype-pretty-code';

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
import theme from 'app/_code/theme';

import getStartedVideo from 'videos/get-started.mp4';

import NextPlusVideoLogo from '../_components/NextPlusVideoLogo';
import GridBackground from './GridBackground';

const Video = dynamic(() => import('next-video'));
const Popover = dynamic(() => import('./Popover'));

export const data = {
  heroTitle: 'Add high-performance video to your Next.js app',
  heroSub: '`next-video` solves the hard problems with embedding, storing, streaming, and customizing video.',
  featuresTitle: 'What’s included',
  featuresSub: 'Everything you need to add beautiful video to your Next.js application',
  features: [
    {
      icon: iconStorage,
      iconAlt: 'Storage icon',
      title: 'Off-repo storage',
      text: 'Local videos are transferred outside of your version control system to avoid storage limits and slow cloning.',
    },
    {
      icon: iconStreaming,
      iconAlt: 'Streaming icon',
      title: 'Optimized video streaming',
      text: 'Videos are converted and compressed for highly-performant, cost-effective video delivery.',
    },
    {
      icon: iconPlayer,
      iconAlt: 'Player icon',
      title: 'BYO player, or don’t',
      text: 'The built-in video player is customizable and accessible. Or you can bring your own player.',
    },
    {
      icon: iconAdaptive,
      iconAlt: 'Adaptive icon',
      title: 'Adaptive streaming',
      text: 'Prevents buffering and poor experiences on slow networks by creating multiple sizes of the video.',
    },
    {
      icon: iconPlaceholder,
      iconAlt: 'Placeholder icon',
      title: 'Placeholder posters',
      text: 'Prevents layout shift and improves perceived load times with placeholder images',
    },
    {
      icon: iconTimeline,
      iconAlt: 'Timeline icon',
      title: 'Timeline hover thumbnails',
      text: 'Generates the images needed for previewing other parts of the video while hovering over the video progress bar.',
    },
    {
      icon: iconFormats,
      iconAlt: 'Formats icon',
      title: 'File formats solved',
      text: 'Converts any source file to cross-browser compatible formats.',
    },
    {
      icon: iconAI,
      iconAlt: 'AI icon',
      title: 'AI captions & subtitles',
      text: 'Coming soon, add better accessibility to all your videos by enabling Whisper-powered transcriptions and translations.',
    },
    {
      icon: iconAnalytics,
      iconAlt: 'Analytics icon',
      title: 'Analytics built-in (optional)',
      text: 'See how often videos get watched and track video performance.',
    },
  ],
  getStartedTitle: 'Get started fast',
  getStartedVideoTitle: 'Follow the video tutorial',
  getStartedVideoSub: 'Watch a quick walkthrough video showing how to set up and use next-video',
  getStartedVideo,
  getStartedVideoMetadata: {
    title: 'Intro to next-video',
    description:
      'Learn how Next Video solves the hard problems with embedding, storing, streaming, and customizing video in your Next.js app.',
  },
  getStartedSteps: [
    '`npx next-video init` to get started',
    'Add a video to your `/videos` folder',
    `Add the component to your app
\`\`\`jsx
import Video from 'next-video';
import myVideo from '/videos/my-video.mp4'; 

export default function Page() { 
   return <Video src={myVideo} />;
}
\`\`\``,
  ],
  getStartedCodeDocs: 'Or check out [the docs](/docs) for manual configuration.',
  infrastructureTitle: 'Built on high-performance video streaming infrastructure',
  infrastructureText:
    'Plug in your own video infrastructure provider, or use the default provider, [Mux](https://www.mux.com/). Mux’s developer video tools are used on the largest streaming sites and live events in the world.',
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
    <main className="pt-80 md:pt-100">
      <section className="mx-auto max-w-780 text-center [text-wrap:balance]">
        <NextPlusVideoLogo priority className="mx-auto mb-30 md:mb-60" />
        <h1 className="mb-30 text-32 font-800 -tracking-2 supports-clamp:text-clamp-h1">{data.heroTitle}</h1>
        <MDXRemote
          source={data.heroSub}
          components={{
            p: ({ children }) => <p className="mb-10 text-18 supports-clamp:text-clamp-sub md:mb-30">{children}</p>,
            code: ({ children }) => (
              <code className="rounded-4 bg-pink-25 px-10 font-mono text-16 leading-1750 text-pink supports-clamp:text-clamp-sub-mono">
                {children}
              </code>
            ),
          }}
        />
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
          <GridBackground xRange={20} yRange={35} blur={100} />
        </div>
      </section>
      <section className="mx-auto max-w-1180">
        <header className="mb-60 text-center [text-wrap:balance] md:mb-100">
          <h2 className="text-center text-32 font-800 -tracking-2 supports-clamp:text-clamp-h2">
            {data.featuresTitle}
          </h2>
          <p className="text-18 text-gray-a9 supports-clamp:text-clamp-sub">{data.featuresSub}</p>
        </header>
        <ul className="grid gap-20" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))' }}>
          {data.features.map((feature, featureIdx) => (
            <li
              key={featureIdx}
              className="row-span-3 rounded-20 border border-gray-28 bg-soft-light px-30 py-40 [text-wrap:pretty] supports-subgrid:grid supports-subgrid:grid-rows-subgrid"
            >
              <Image src={feature.icon} alt={feature.iconAlt} className="mb-20 supports-subgrid:mb-0" />
              <h3 className="mb-20 text-24 font-800 leading-1167 -tracking-2 supports-subgrid:mb-0">{feature.title}</h3>
              <p className="text-16 text-gray-aa supports-clamp:text-clamp-p">{feature.text}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="mx-auto max-w-1180" id="get-started">
        <header className="mb-60 mt-120 text-center [text-wrap:balance] md:mb-80 md:mt-200">
          <h2 className="text-center text-32 font-800 -tracking-2 supports-clamp:text-clamp-h2">
            {data.getStartedTitle}
          </h2>
        </header>
        <div className="grid grid-cols-1 gap-x-20 gap-y-15 md:grid-cols-2">
          <div className="overflow-hidden rounded-20 border border-gray-28 bg-soft-light backdrop-blur">
            <div className="leading-0">
              <Video src={data.getStartedVideo} accentColor="#fa50b5" poster="/get-started-poster.jpg" />
            </div>
            <div className="p-30">
              <h3 className="mb-10 text-18 font-800 -tracking-2 [text-wrap:balance] supports-clamp:text-clamp-sub">
                {data.getStartedVideoTitle}
              </h3>
              <p className="text-gray-aa [text-wrap:pretty]">{data.getStartedVideoSub}</p>
            </div>
          </div>
          <div className="relative rounded-20 border border-gray-28 bg-soft-light px-30 py-40 backdrop-blur [text-wrap:pretty] lg:px-60">
            <ol style={{ counterReset: 'list' }} className="mb-30 leading-2000">
              {data.getStartedSteps.map((step, stepIdx) => (
                <li key={stepIdx} className="mb-30 lg:mb-0">
                  <span
                    style={{ counterIncrement: 'list' }}
                    className="absolute left-30 hidden text-right font-700 text-gray-aa before:content-[counter(list)_'.'] lg:inline-block"
                  />
                  <MDXRemote
                    source={step}
                    components={{
                      code: (props) => {
                        // @ts-expect-error MDXRemote doesn't know data attributes
                        const isCodeBlock = !!props['data-language'];
                        return (
                          <code
                            className={clsx(
                              !isCodeBlock && 'relative inline-block px-10 font-mono text-16 leading-2500'
                            )}
                          >
                            {!isCodeBlock && (
                              <span className="absolute inset-x-0 inset-y-4 -z-10 rounded-4 bg-gray-23" />
                            )}
                            {props.children}
                          </code>
                        );
                      },
                      pre: ({ children }) => (
                        <pre className="mt-4 overflow-x-scroll rounded-4 bg-gray-23 px-10 py-15 text-16 leading-1750">
                          {children}
                        </pre>
                      ),
                    }}
                    options={{
                      mdxOptions: {
                        rehypePlugins: [
                          [
                            rehypePrettyCode,
                            {
                              theme,
                              keepBackground: false,
                            },
                          ],
                        ],
                      },
                    }}
                  />
                </li>
              ))}
            </ol>
            <MDXRemote
              source={data.getStartedCodeDocs}
              components={{
                p: ({ children }) => <p className="text-gray-aa">{children}</p>,
                a: ({ children, href }) => (
                  <Link
                    className="text-white underline hover:no-underline focus-visible:no-underline"
                    href={href ?? '/'}
                  >
                    {children}
                  </Link>
                ),
              }}
            />
          </div>
        </div>
      </section>
      <section className="relative mx-auto my-120 max-w-980 md:my-200">
        <GridBackground xRange={20} yRange={15} inset="-50px -100px" blur={150} />
        <div className="flex min-h-380 flex-col items-center gap-60 rounded-20 bg-black px-30 py-60 md:flex-row md:gap-100 md:px-60 lg:px-100">
          <div className="[text-wrap:pretty]">
            <h2 className="mb-30 text-center text-32 font-800 -tracking-2 [text-wrap:balance] supports-clamp:text-clamp-h2-alt md:text-left">
              {data.infrastructureTitle}
            </h2>
            <MDXRemote
              source={data.infrastructureText}
              components={{
                p: ({ children }) => <p className="text-center text-gray-aa md:text-left">{children}</p>,
                a: ({ children, href }) => (
                  <Link
                    className="text-white underline hover:no-underline focus-visible:no-underline"
                    href={href ?? '/'}
                  >
                    {children}
                  </Link>
                ),
              }}
            />
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
