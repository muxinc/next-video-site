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
import logoVercel from 'app/(home)/_images/logo-vercel.svg';
import theme from 'app/_code/theme';

import getStartedVideo from 'videos/get-started.mp4';

import NextPlusVideoLogo from '../_components/NextPlusVideoLogo';
import GridBackground from './GridBackground';

const Video = dynamic(() => import('next-video'));

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
  getStartedVideoProps: {
    src: getStartedVideo,
    poster: '/get-started-poster.jpg',
    placeholder:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAASCAYAAAA6yNxSAAAJcklEQVR4AQCBAH7/AHCbmP9umJX/aZKP/2OLiP9fhIH/XIB8/1x+ev9gf3v/ZYJ+/2yGgv9yiYb/doyI/3eMiP92iYf/c4WD/26Bfv9pfHr/ZHh3/2B2df9ddXX/W3V2/1l2d/9Xd3n/VXh6/1J5e/9PeXz/THl9/0p5ff9Ien7/R3t//0Z7gP9Ge4D/AIEAfv8AcZmV/26Vkv9pkIz/ZImF/1+Df/9dfnv/Xn15/2J+ev9ngX3/boWC/3SJhf94i4f/eYqH/3iIhf90g4H/b358/2l5d/9kdXT/X3Jy/1xxcf9ZcXH/V3Jz/1VzdP9Sc3X/UHR3/010d/9KdXj/SHV5/0Z2ev9Fdnv/RXd8/0R3fP8AgQB+/wBxlJH/bpCN/2qLiP9lhYL/YX98/2B7eP9henf/ZXx5/2t/fP9yhID/eIeE/3uJhv98iIX/eoWC/3WAfv9venj/aXRy/2Nvbv9ea2v/WWpp/1Zpaf9UaWr/UWps/09rbf9MbG7/Smxv/0dtcP9FbXH/RG5y/0NvdP9CcHT/QnB1/wCBAH7/AHKNiv9viof/a4WC/2d/ff9kenj/Y3h1/2V3dP9qeXf/cH17/3eCf/99hoP/gIeE/4GGg/9+gn//eHx5/3F0c/9pbWz/Ymdm/1tjYv9XYGD/U19f/1BfYP9NX2H/SmBi/0hhY/9FYWX/Q2Jm/0JjZ/9AZGn/QGVq/z9ma/8/Z2z/AIEAfv8Ac4aD/3GDgf9tf3z/anp3/2d2c/9ndHH/anRy/3B3df93fHn/foF+/4SEgv+HhYP/hoOB/4J+fP97d3X/c25t/2pmZf9hX17/WllZ/1RVVv9PU1T/TFNU/0lTVf9GVFf/RFVY/0JWWv9AV1v/Plld/z5aX/89W2D/PVxh/z1dYv8AgQB+/wB0fn3/cnx6/3B4d/9tdHL/a3Fv/2xwbv9wcXD/d3Vz/357ef+GgH7/i4OB/46Egv+NgYD/iHt6/4Bzcv92aWj/a19f/2FXVv9ZUFD/UktM/01JSv9JSEr/RkhL/0NJTP9BSk7/P0xP/z5NUf89T1T/PFFW/zxSV/88VFn/PFRa/wCBAH7/AHZ4d/90dnX/cnNx/3Bvbv9vbWz/cW1s/3Zvbv99dHP/hnp4/41/fv+Tg4L/lYOC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',
    accentColor: '#fa50b5',
  },
  getStartedVideoMetadata: {
    title: 'Intro to next-video',
    description:
      'Learn how Next Video solves the hard problems with embedding, storing, streaming, and customizing video in your Next.js app.',
  },
  getStartedSteps: [
    '`npx -y next-video init` to get started',
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
  infrastructureText: `Plug in your own video infrastructure provider, or use the default provider, [Mux](https://www.mux.com/). Mux is a [video API](https://www.mux.com/video-api) for developers whose video tools are used on the largest streaming sites and live events in the world.


Mux is now available on the [Vercel Marketplace](https://vercel.com/marketplace/mux). <LogoVercel />`,
  infrastructureLogos: [
    { logo: logoMux, title: 'Mux', href: 'https://www.mux.com/' },
    { logo: logoBlob, title: 'Vercel Blob', href: 'https://vercel.com/docs/storage/vercel-blob' },
    { logo: logoS3, title: 'AWS S3', href: 'https://aws.amazon.com/s3/' },
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
              <Video {...data.getStartedVideoProps} />
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
                p: ({ children }) => (
                  <p className="mb-30 text-center text-gray-aa last:mb-0 md:text-left">{children}</p>
                ),
                a: ({ children, href }) => (
                  <Link
                    className="text-white underline hover:no-underline focus-visible:no-underline"
                    href={href ?? '/'}
                  >
                    {children}
                  </Link>
                ),
                LogoVercel: () => <Image src={logoVercel} alt="Vercel logo" className="ml-30 inline-block h-18" />,
              }}
            />
          </div>
          <div className="flex shrink-0 flex-col items-center justify-center gap-40">
            {data.infrastructureLogos.map(({ href, title, logo }, logoIdx) => (
              <Link key={logoIdx} href={href}>
                <Image src={logo} alt={`${title} logo`} className="shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
