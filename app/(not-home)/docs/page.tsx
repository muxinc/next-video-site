import { MDXRemote } from 'next-mdx-remote/rsc';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export const revalidate = 900;

export default async function Readme() {
  const res = await fetch('https://raw.githubusercontent.com/muxinc/next-video/main/README.md');
  const markdown = await res.text();

  return (
    <MDXRemote
      source={markdown}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypePrettyCode],
        },
      }}
    />
  );
}
