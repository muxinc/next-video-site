import GithubSlugger from 'github-slugger';

type Section = { title: string; level: string; slug: string; subsections: Section[] };
export function getTableOfContents(content: string) {
  const slugger = new GithubSlugger();
  const regexp = new RegExp(/^(### |## )(.*)\n/, 'gm');
  const headings = Array.from(content.matchAll(regexp));

  let tableOfContents: Array<Section> = [
    {
      title: 'Introduction',
      level: 'h2',
      slug: 'main',
      subsections: [],
    },
  ];

  if (headings.length) {
    let previousSection: Section | null = null;
    headings.forEach((heading) => {
      const title = heading[2].trim();
      const level = heading[1].trim() === '##' ? 'h2' : 'h3';
      const slug = slugger.slug(title);

      const section: Section = {
        title,
        level,
        slug,
        subsections: [],
      };
      if (level === 'h2') {
        if (previousSection) tableOfContents.push(previousSection);
        previousSection = section;
      } else if (level === 'h3') {
        if (previousSection) {
          previousSection.subsections.push(section);
        } else {
          tableOfContents.push(section);
        }
      }
    });
    if (previousSection) tableOfContents.push(previousSection);
  }

  return tableOfContents;
}
