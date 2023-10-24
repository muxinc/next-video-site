'use client';

import { useEffect, useState } from 'react';

import clsx from 'clsx';
import throttle from 'just-throttle';

import { type getTableOfContents } from './getTableOfContents';

type Props = {
  toc: ReturnType<typeof getTableOfContents>;
};
export default function TableOfContentsClient({ toc }: Props) {
  const [activeId, setActiveId] = useState<string>('');
  useEffect(() => {
    const headings = Array.from(document.querySelectorAll('h2,h3'));
    // keep a list of where the headings are in the document, updating it on resize
    let headingRects: DOMRect[] = [];
    const onResize = () => {
      headingRects = headings.map((heading) => heading.getBoundingClientRect());
    };
    onResize();
    const throttledResize = throttle(onResize, 100, { trailing: true });
    window.addEventListener('resize', throttledResize);
    // figure out which header most recently passed the top of the screen
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const activeIdx = headingRects.findIndex((rect) => rect.top - 61 > scrollTop);
      setActiveId(headings[activeIdx - 1]?.id ?? 'main');
    };
    onScroll();
    const throttledScroll = throttle(onScroll, 100, { trailing: true });
    window.addEventListener('scroll', throttledScroll);
    return () => {
      throttledResize.cancel();
      throttledScroll.cancel();
      window.removeEventListener('resize', throttledResize);
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return (
    <ul className="text-16 leading-1750 tracking-2 lg:ml-15">
      {toc.map((section) => (
        <li key={section.slug} className="relative mb-30 last:mb-0">
          <div
            className={clsx(
              'pointer-events-none absolute -left-15 hidden font-700 text-pink transition-opacity lg:block',
              section.slug === activeId ? 'opacity-100' : 'opacity-0'
            )}
          >
            {'>'}
          </div>
          <a href={`#${section.slug}`} className="font-700 underline-offset-2 hover:underline focus-visible:underline">
            {section.title}
          </a>
          {section.subsections.length ? (
            <ul className="text-gray-aa">
              {section.subsections.map((subsection) => (
                <li key={subsection.slug} className="relative">
                  <div
                    className={clsx(
                      'pointer-events-none absolute -left-15 hidden font-700 text-pink transition-opacity lg:block',
                      subsection.slug === activeId ? 'opacity-100' : 'opacity-0'
                    )}
                  >
                    {'>'}
                  </div>
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
  );
}
