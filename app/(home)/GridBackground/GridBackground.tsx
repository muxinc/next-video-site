import { ComponentPropsWithoutRef } from 'react';

import dynamic from 'next/dynamic';

import clsx from 'clsx';

const Spotlight = dynamic(() => import('./GridSpotlight'));

/**
 * Use within a relative container
 */
type Props = {
  inset: '100' | '150';
  midpoint: number;
  xRange: ComponentPropsWithoutRef<typeof Spotlight>['xRange'];
  yRange: ComponentPropsWithoutRef<typeof Spotlight>['yRange'];
};
const GridBackground = ({ inset, midpoint, xRange, yRange }: Props) => (
  <div
    className={clsx(
      'absolute -z-10',
      '[--spotlight-color:theme(colors.pink/20%)] peer-hover:[--spotlight-color:theme(colors.pink/30%)] peer-focus-visible:[--spotlight-color:theme(colors.pink/30%)]',
      '[--spotlight-duration:1000ms] peer-hover:[--spotlight-duration:500ms] peer-focus-visible:[--spotlight-duration:500ms]',
      inset === '100' && '-inset-100',
      inset === '150' && '-inset-150'
    )}
    style={
      {
        '--vignette-midpoint': `${midpoint}%`,
      } as React.CSSProperties
    }
  >
    <Spotlight xRange={xRange} yRange={yRange} />
    <div className="absolute -inset-100 bg-grid bg-20 bg-center" />
  </div>
);

export default GridBackground;
