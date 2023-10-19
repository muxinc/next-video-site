import Image from 'next/image';

import NextVideoLogo from 'app/_images/next-video.svg';
import NextJsLogo from 'app/_images/next.js.svg';
import Plus from 'app/_images/plus.svg';

type Props = {
  priority?: boolean;
  className?: string;
};
export default function NextPlusVideoLogo({ priority, className }: Props) {
  return (
    <div
      className={className}
      // to avoid conflicts with prop tailwind classes, we use inline styles here
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem' }}
    >
      <Image src={NextJsLogo} alt="Next.js Logo" className="h-60 w-60 md:h-80 md:w-80" priority={priority} />
      <Image src={Plus} alt="" priority={priority} />
      <Image src={NextVideoLogo} alt="Next Video Logo" className="h-60 w-60 md:h-80 md:w-80" priority={priority} />
    </div>
  );
}
