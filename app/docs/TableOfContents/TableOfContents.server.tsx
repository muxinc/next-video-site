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
      <TableOfContentsClient toc={toc} />
    </nav>
  );
}
