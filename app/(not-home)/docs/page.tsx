import { MDXRemote } from 'next-mdx-remote/rsc';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import clsx from 'clsx';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import VideoLDJson from '@/app/VideoLDJson';

import { data } from 'app/(home)/page';
import theme from 'app/_code/theme';

import TableOfContents from './TableOfContents';

const Video = dynamic(() => import('next-video'));

export const metadata = {
  title: 'Docs',
};

export const revalidate = 900;

export default async function Readme() {
  const res = await fetch('https://raw.githubusercontent.com/muxinc/next-video/main/README.md');
  const markdown = await res.text();

  return (
    <>
      <div
        className="max-w-700 mx-auto grid grid-cols-1 gap-80 [grid-template-areas:--cols] xl:max-w-1180 xl:grid-cols-[auto_auto] xl:gap-100 xl:[grid-template-areas:--xl-cols]"
        style={{ '--cols': '"header" "toc" "content"', '--xl-cols': '"header header" "content toc"' }}
      >
        <h1 className="col-span-full text-32 font-800 -tracking-2 md:text-48" style={{ gridArea: 'header' }}>
          Documentation
        </h1>
        <TableOfContents
          style={{ gridArea: 'toc' }}
          containerClassName="xl:mb-200"
          navClassName="xl:sticky xl:top-80 max-h-[calc(100vh-theme(spacing.80))] overflow-y-scroll rounded-20 border border-gray-28 bg-soft-light p-30 text-16"
          markdown={markdown}
        />
        <main className="max-w-700 mb-100 md:mb-200" style={{ gridArea: 'content' }}>
          <Video src={data.getStartedVideo} accentColor="#fa50b5" className="mb-80 overflow-hidden rounded-20" />
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
                <h3 id={id} className="mb-20 mt-40 text-21 font-800 -tracking-2 md:text-24">
                  {children}
                </h3>
              ),
              h4: ({ children, id }) => (
                <h4 id={id} className="mb-20 text-18 font-800 -tracking-2 md:text-21">
                  {children}
                </h4>
              ),
              h5: ({ children, id }) => (
                <h5 id={id} className="mb-20 font-800 -tracking-2">
                  {children}
                </h5>
              ),
              h6: ({ children, id }) => (
                <h6 id={id} className="mb-20 italic">
                  {children}
                </h6>
              ),
              p: ({ children }) => <p className="mb-20 last:mb-0">{children}</p>,
              a: ({ children, href }) => (
                <Link
                  href={href ?? '/'}
                  className="underline underline-offset-2 hover:no-underline focus-visible:no-underline"
                >
                  {children}
                </Link>
              ),
              ul: ({ children }) => <ul className="mb-20 ml-20 list-disc last:mb-0">{children}</ul>,
              ol: ({ children }) => <ol className="mb-20 ml-20 list-decimal last:mb-0">{children}</ol>,
              code: (props) => {
                // @ts-expect-error MDXRemote doesn't know data attributes
                const isCodeBlock = !!props['data-language'];
                return (
                  <code
                    className={clsx(
                      !isCodeBlock && 'bg-gray-23 py-2 relative inline-block rounded-4 px-5 font-mono text-16'
                    )}
                  >
                    {props.children}
                  </code>
                );
              },
              pre: ({ children }) => (
                <pre className="-mx-15 mb-20 overflow-x-scroll rounded-20 border border-gray-28 bg-soft-light px-15 py-30 text-16 leading-1750 sm:-mx-20 sm:px-20 lg:-mx-40 lg:p-40">
                  {children}
                </pre>
              ),
            }}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  rehypeAutolinkHeadings,
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
    </>
  );
}
