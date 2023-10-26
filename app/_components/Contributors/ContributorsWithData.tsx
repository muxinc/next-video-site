import Image from 'next/image';
import Link from 'next/link';

async function getContributors(): Promise<unknown> {
  const res = await fetch('https://api.github.com/repos/muxinc/next-video/contributors?per_page=18', {
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    next: { revalidate: 86400 },
  });
  const data = await res.json();
  return data;
}

export default async function ContributorsWithData() {
  const contributors = await getContributors();
  const isArray = Array.isArray(contributors);
  const isContributorsOverflow = isArray && contributors.length > 16;
  return (
    <ul className="flex flex-wrap items-center justify-center md:justify-start">
      {isArray &&
        contributors
          .filter(({ login }) => login !== 'github-actions[bot]')
          .map(({ id, avatar_url, html_url, login }, idx) => (
            <li key={id ?? idx}>
              <Link href={html_url}>
                <Image src={avatar_url} alt={login} width={48} height={48} className="overflow-hidden rounded-full" />
              </Link>
            </li>
          ))}
      {isContributorsOverflow && (
        <li>
          <Link
            href="https://github.com/muxinc/next-video/graphs/contributors"
            className="ml-10 underline hover:no-underline focus-visible:no-underline"
          >
            & more!
          </Link>
        </li>
      )}
    </ul>
  );
}
