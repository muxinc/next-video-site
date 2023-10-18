import clsx from 'clsx';

/**
 * Use within a relative container
 */
type Props = {
  inset: '100' | '200';
};
const GridBackground = ({ inset }: Props) => (
  <div className={clsx('absolute -z-10', inset === '100' && '-inset-100', inset === '200' && '-inset-200')}>
    <div className="bg-vignette absolute inset-0 bg-pink-dark-30" />
    <div className="bg-20 absolute inset-0 bg-grid bg-center" />
  </div>
);

export default GridBackground;
