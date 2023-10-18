import Image from 'next/image';
import Link from 'next/link';

import nextVideo from '@/app/_images/next-video.svg';

type Props = {
  children: React.ReactNode;
};
export default function NotHomeLayout({ children }: Props) {
  return (
    <>
      <Link href="/" className="relative inline-block h-80 py-20">
        <Image src={nextVideo} alt="Next.js logo and next-video logo" className="h-full w-auto" />
      </Link>
      {children}
    </>
  );
}
