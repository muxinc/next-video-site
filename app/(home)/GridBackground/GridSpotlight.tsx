'use client';

import { useEffect, useRef } from 'react';

import { animated, to, useSpring } from '@react-spring/web';
import throttle from 'just-throttle';

import useSupportsHover from '@/app/_hooks/useSupportsHover';

type Props = {
  xRange: number;
  yRange: number;
};
const Spotlight = ({ xRange, yRange }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ x, y }, api] = useSpring(() => ({
    x: 0,
    y: 0,
  }));
  const supportsHover = useSupportsHover(true);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let cleanupFunctions: Array<() => any> = [];

    let windowWidth: number;
    let windowHeight: number;
    let elementXCenter: number;
    let elementYCenter: number;
    let maxXOffset: number;
    let maxYOffset: number;

    const onResize = () => {
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const scrollLeft = window.scrollX;
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top + scrollTop;
      const elementLeft = elementRect.left + scrollLeft;
      elementYCenter = elementTop + elementRect.height / 2;
      elementXCenter = elementLeft + elementRect.width / 2;
      maxYOffset = windowHeight / 2;
      maxXOffset = windowWidth / 2;
    };

    onResize(); // call once to initialize
    // attach to window and provide cleanup functions
    const throttledResize = throttle(onResize, 100, { trailing: true });
    window.addEventListener('resize', throttledResize);
    cleanupFunctions.push(() => throttledResize.cancel());
    cleanupFunctions.push(() => window.removeEventListener('resize', throttledResize));

    const updateSpring = (xOffset: number, yOffset: number) => {
      // regardless of whether we're scrolling or moving our mouse, all roads lad to here:
      // get percentage of distance from center
      const xPercent = xOffset / maxXOffset;
      const yPercent = yOffset / maxYOffset;
      // clamp to -1 to 1
      const xClamped = Math.max(-1, Math.min(1, xPercent));
      const yClamped = Math.max(-1, Math.min(1, yPercent));
      // set spring
      api.start({ x: xClamped * xRange, y: yClamped * yRange, config: { tension: 280, friction: 90 } });
    };

    // now then, let's call that updateSpring in some event listeners.
    if (supportsHover) {
      // if the user seems to have mouse, let's follow that mouse around!
      const onMouseMove = ({ pageX, pageY }: MouseEvent) => {
        const xOffset = pageX - elementXCenter;
        const yOffset = pageY - elementYCenter;
        updateSpring(xOffset, yOffset);
      };

      // attach to window and provide cleanup functions
      const throttledMouseMove = throttle(onMouseMove, 100, { leading: true });
      window.addEventListener('mousemove', throttledMouseMove);
      cleanupFunctions.push(() => throttledMouseMove.cancel());
      cleanupFunctions.push(() => window.removeEventListener('mousemove', throttledMouseMove));
    } else {
      // if the user doesn't seem to have a mouse, let's follow the middle of the scroll
      const onScroll = () => {
        // find the coordinates of the center of the viewport relative to the page
        // this effect only happens in the y direction
        const scrollTop = window.scrollY;
        const viewportYCenter = scrollTop + windowHeight / 2;

        // get distance from element center
        const yOffset = viewportYCenter - elementYCenter;
        updateSpring(0, yOffset);
      };
      // attach to window and provide cleanup functions
      const throttledScroll = throttle(onScroll, 100, { leading: true });
      window.addEventListener('scroll', throttledScroll);
      cleanupFunctions.push(() => throttledScroll.cancel());
      cleanupFunctions.push(() => window.removeEventListener('scroll', throttledScroll));
    }

    return () => {
      cleanupFunctions.forEach((fn) => fn());
    };
  }, [supportsHover, api, xRange, yRange]);

  return (
    <animated.div
      ref={ref}
      className="absolute inset-0 animate-fade-in bg-[--spotlight-color] bg-vignette transition-colors duration-[--spotlight-duration]"
      style={{
        transform: to([x, y], (x, y) => `translate3d(${x}%, ${y}%, 0)`),
      }}
    />
  );
};

export default Spotlight;
