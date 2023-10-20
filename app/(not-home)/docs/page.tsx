import { MDXRemote } from 'next-mdx-remote/rsc';
import Video from 'next-video';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import VideoLDJson from '@/app/VideoLDJson';

import { data } from 'app/(home)/page';

export const metadata = {
  title: 'Docs',
};

export const revalidate = 900;

export default async function Readme() {
  const res = await fetch('https://raw.githubusercontent.com/muxinc/next-video/main/README.md');
  const markdown = await res.text();

  return (
    <>
      <Video src={data.getStartedVideo} accentColor="#fa50b5" className="overflow-hidden rounded-20" />
      <VideoLDJson
        asset={data.getStartedVideo}
        name={data.getStartedVideoMetadata.title}
        description={data.getStartedVideoMetadata.description}
      />
      <MDXRemote
        source={markdown}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypePrettyCode],
          },
        }}
      />
    </>
  );
}
