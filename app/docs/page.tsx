import { MDXRemote } from 'next-mdx-remote/rsc';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import clsx from 'clsx';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import VideoLDJson from '@/app/VideoLDJson';

import { data } from 'app/(home)/page';
import theme from 'app/_code/theme';

import TableOfContents from './TableOfContents';

const Video = dynamic(() => import('next-video'));

const title = 'Docs | next-video';
export const metadata = {
  title,
  openGraph: {
    title,
    url: '/docs',
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    title,
    site: '@muxhq',
    card: 'summary_large_image',
  },
};

export default async function Readme() {
  const res = await fetch('https://raw.githubusercontent.com/muxinc/next-video/main/README.md', {
    next: { revalidate: 900 },
  });
  const markdown = await res.text();

  return (
    <div className="relative mx-auto my-80 grid max-w-700 grid-cols-1 justify-center gap-80 lg:my-100 lg:grid lg:max-w-1180 lg:grid-cols-[auto_minmax(0,1fr)] xl:gap-150">
      {/* blur effect */}
      <div
        className="fixed top-0 -z-10 h-200 w-full animate-fade-in rounded-full bg-pink/50"
        style={{ filter: `blur(200px)` }}
      />
      {/* a11y skip nav */}
      <a
        href="#main"
        className="pointer-events-none fixed left-10 top-10 rounded-4 bg-pink p-10 text-black opacity-0 focus:pointer-events-auto focus:opacity-100"
      >
        Skip to main content
      </a>
      {/* nav column */}
      <div>
        {/* nav sticky container */}
        <div className="lg:sticky lg:top-100 lg:max-h-[calc(100vh-theme(spacing.100))] lg:overflow-y-scroll">
          <h1 className="mb-80 inline-flex items-center gap-15 whitespace-nowrap font-mono text-16 leading-1750 lg:mb-100">
            <Link href="/" className="group inline-block">
              <code className="inline-block rounded-4 bg-pink-25 px-15 py-10 text-pink transition-colors group-hover:bg-pink-10 group-focus-visible:bg-pink-10">
                next-video
              </code>
            </Link>
            <span className="uppercase">Documentation</span>
          </h1>
          <TableOfContents markdown={markdown} />
        </div>
      </div>
      {/* content column */}
      <main className="max-w-700 [text-wrap:pretty]" id="main">
        <div className="-mx-15 mb-80 flex overflow-hidden rounded-20 leading-0 sm:-mx-20 xl:-mx-40">
          {/* @ts-expect-error 0.8 has a bug where as prop isn't marked as optional */}
          <Video src={data.getStartedVideo} accentColor="#fa50b5" className="h-auto w-full" />
        </div>
        <VideoLDJson
          asset={data.getStartedVideo}
          name={data.getStartedVideoMetadata.title}
          description={data.getStartedVideoMetadata.description}
        />
        <MDXRemote
          source={markdown}
          components={{
            h1: () => null,
            h2: ({ children, id }) => (
              <h2 id={id} className="mb-40 mt-80 text-24 font-800 -tracking-2 md:text-32">
                {children}
              </h2>
            ),
            h3: ({ children, id }) => (
              <h3 id={id} className="mb-40 mt-40 text-21 font-800 -tracking-2 md:text-24">
                {children}
              </h3>
            ),
            h4: ({ children, id }) => (
              <h4 id={id} className="mb-40 text-18 font-800 -tracking-2 md:text-21">
                {children}
              </h4>
            ),
            h5: ({ children, id }) => (
              <h5 id={id} className="mb-40 font-800 -tracking-2">
                {children}
              </h5>
            ),
            h6: ({ children, id }) => (
              <h6 id={id} className="mb-40 italic">
                {children}
              </h6>
            ),
            p: ({ children }) => <p className="mb-40 last:mb-0">{children}</p>,
            a: ({ children, href }) => (
              <Link href={href ?? '/'} className="underline hover:no-underline focus-visible:no-underline">
                {children}
              </Link>
            ),
            ul: ({ children }) => <ul className="mb-40 ml-20 list-disc last:mb-0">{children}</ul>,
            ol: ({ children }) => <ol className="mb-40 ml-20 list-decimal last:mb-0">{children}</ol>,
            code: (props) => {
              // @ts-expect-error MDXRemote doesn't know data attributes
              const isCodeBlock = !!props['data-language'];
              return (
                <code
                  className={clsx(
                    !isCodeBlock && 'relative inline-block rounded-4 bg-gray-23 px-5 py-2 font-mono text-16'
                  )}
                >
                  {props.children}
                </code>
              );
            },
            pre: ({ children }) => (
              <pre className="-mx-15 mb-40 overflow-x-scroll rounded-20 border border-gray-28 bg-black/50 bg-soft-light px-15 py-30 text-16 leading-1750 backdrop-blur sm:-mx-20 sm:px-20 lg:p-40 xl:-mx-40">
                {children}
              </pre>
            ),
          }}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [
                rehypeSlug,
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
      </main>
    </div>
  );
}
