import Image from 'next/image';
import Link from 'next/link';

import nextVideo from 'app/_images/next-video.svg';

type Props = {
  children: React.ReactNode;
};
export default function NotHomeLayout({ children }: Props) {
  return (
    <>
      <Link href="/" className="relative mb-40 flex h-80 items-center gap-20 py-20">
        <Image src={nextVideo} alt="next-video logo" className="h-full w-auto" />
        <code className="bg-pink-25 rounded-4 px-10 font-mono text-16 leading-1750 text-pink supports-clamp:text-clamp-sub-mono">
          next-video
        </code>
      </Link>
      {children}
    </>
  );
}
