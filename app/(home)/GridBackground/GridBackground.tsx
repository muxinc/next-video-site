import { ComponentPropsWithoutRef } from 'react';

import dynamic from 'next/dynamic';

import clsx from 'clsx';

const Spotlight = dynamic(() => import('./GridSpotlight'));

/**
 * Use within a relative container
 */
type Props = {
  inset?: React.CSSProperties['inset'];
  blur: ComponentPropsWithoutRef<typeof Spotlight>['blur'];
  xRange: ComponentPropsWithoutRef<typeof Spotlight>['xRange'];
  yRange: ComponentPropsWithoutRef<typeof Spotlight>['yRange'];
};
const GridBackground = ({ inset, blur, xRange, yRange }: Props) => (
  <div
    className={clsx(
      'absolute -z-10',
      '[--spotlight-color:theme(colors.pink/30%)] peer-hover:[--spotlight-color:theme(colors.pink/40%)] peer-focus-visible:[--spotlight-color:theme(colors.pink/40%)]',
      '[--spotlight-duration:1000ms] peer-hover:[--spotlight-duration:500ms] peer-focus-visible:[--spotlight-duration:500ms]'
    )}
    style={{
      inset: inset ?? 0,
    }}
  >
    <Spotlight blur={blur} xRange={xRange} yRange={yRange} />
    <div className="absolute -inset-200 bg-grid bg-20 bg-center" />
  </div>
);

export default GridBackground;
