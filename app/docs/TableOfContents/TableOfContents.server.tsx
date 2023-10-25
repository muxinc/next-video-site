import dynamic from 'next/dynamic';

import { getTableOfContents } from './getTableOfContents';

const TableOfContentsClient = dynamic(() => import('./TableOfContents.client'));

type Props = {
  markdown: string;
  className?: string;
  style?: React.CSSProperties;
};
export default function TableOfContents({ style, markdown, className }: Props) {
  const toc = getTableOfContents(markdown);
  return (
    <nav className={className} style={style}>
      <h2 className="mb-30 font-mono text-14 uppercase leading-1167 tracking-2 text-gray-aa lg:sr-only">
        Table of Contents
      </h2>
      <TableOfContentsClient toc={toc} />
    </nav>
  );
}
