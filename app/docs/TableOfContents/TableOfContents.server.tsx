import TableOfContentsClient from './TableOfContents.client';
import { getTableOfContents } from './getTableOfContents';

type Props = {
  markdown: string;
  className?: string;
  style?: React.CSSProperties;
};
export default function TableOfContents({ style, markdown, className }: Props) {
  const toc = getTableOfContents(markdown);
  return (
    <nav className={className} style={style}>
      <h2 className="text-14 mb-30 font-mono uppercase leading-1167 tracking-2 text-gray-aa lg:sr-only">
        Table of Contents
      </h2>
      <TableOfContentsClient toc={toc} />
    </nav>
  );
}
