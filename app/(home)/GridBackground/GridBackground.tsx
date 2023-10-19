import dynamic from 'next/dynamic';

import clsx from 'clsx';

const Spotlight = dynamic(() => import('./GridSpotlight'));

/**
 * Use within a relative container
 */
type Props = {
  inset: '100' | '150';
  midpoint?: number;
};
const GridBackground = ({ inset, midpoint }: Props) => (
  <div
    className={clsx(
      'absolute -z-10 [--spotlight:theme(colors.pink/20%)] peer-hover:[--spotlight:theme(colors.pink/30%)] peer-focus-visible:[--spotlight:theme(colors.pink/30%)]',
      inset === '100' && '-inset-100',
      inset === '150' && '-inset-150'
    )}
    style={
      {
        '--vignette-midpoint': midpoint ? `${midpoint}%` : undefined,
      } as React.CSSProperties
    }
  >
    <Spotlight />
    <div className="absolute -inset-100 bg-grid bg-20 bg-center" />
  </div>
);

export default GridBackground;
