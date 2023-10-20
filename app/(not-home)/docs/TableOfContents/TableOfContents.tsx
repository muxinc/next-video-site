import Link from 'next/link';

import { getTableOfContents } from './getTableOfContents';

type Props = {
  markdown: string;
  containerClassName?: string;
  navClassName?: string;
  style?: React.CSSProperties;
};
export default function TableOfContents({ style, markdown, containerClassName, navClassName }: Props) {
  const toc = getTableOfContents(markdown);
  return toc.length ? (
    <div className={containerClassName} style={style}>
      <nav className={navClassName}>
        <h2 className="mb-20 text-24 font-800 -tracking-2">Contents</h2>
        <ul>
          {toc.map((section) => (
            <li key={section.slug} className="my-10">
              <Link
                href={`#${section.slug}`}
                className="font-700 underline-offset-2 hover:underline focus-visible:underline"
              >
                {section.title}
              </Link>
              {section.subsections.length ? (
                <ul className="ml-10">
                  {section.subsections.map((subsection) => (
                    <li key={subsection.slug} className="my-5">
                      <a
                        href={`#${subsection.slug}`}
                        className="underline-offset-2 hover:underline focus-visible:underline"
                      >
                        {subsection.title}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  ) : null;
}
