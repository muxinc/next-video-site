'use client';

import { useEffect, useRef } from 'react';

import { animated, config, useSpring } from '@react-spring/web';
import throttle from 'just-throttle';

const Spotlight = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [props, api] = useSpring(() => ({
    x: 0,
    y: 0,
  }));

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // then, we respond to mouse movement
    const xRange = 100;
    const yRange = 50;
    let elementXCenter: number;
    let elementYCenter: number;
    let maxXOffset: number;
    let maxYOffset: number;

    const onResize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const scrollLeft = window.scrollX;
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top + scrollTop;
      const elementLeft = elementRect.left + scrollLeft;
      elementYCenter = elementTop + elementRect.height / 2;
      elementXCenter = elementLeft + elementRect.width / 2;
      maxYOffset = windowHeight;
      maxXOffset = windowWidth / 2;
    };
    onResize();

    const onMouseMove = ({ pageX, pageY }: MouseEvent) => {
      // get distance from element center
      const xOffset = pageX - elementXCenter;
      const yOffset = pageY - elementYCenter;
      // get percentage of distance from center
      const xPercent = xOffset / maxXOffset;
      const yPercent = yOffset / maxYOffset;
      // clamp to -1 to 1
      const xClamped = Math.max(-1, Math.min(1, xPercent));
      const yClamped = Math.max(-1, Math.min(1, yPercent));
      // set spring
      api.start({ x: xClamped * xRange, y: yClamped * yRange, config: config.molasses });
    };

    // because these actions are attached to springs,
    // we can safely throttle them without affecting user experience
    const throttledResize = throttle(onResize, 100, { leading: true });
    const throttledMouseMove = throttle(onMouseMove, 100, { leading: true });

    window.addEventListener('resize', throttledResize);
    window.addEventListener('mousemove', throttledMouseMove);

    return () => {
      throttledResize.cancel();
      throttledMouseMove.cancel();
      window.removeEventListener('resize', throttledResize);
      window.removeEventListener('mousemove', throttledMouseMove);
    };
  }, [api]);

  return (
    <animated.div ref={ref} className="absolute inset-0 animate-fade-in bg-pink-dark-30 bg-vignette" style={props} />
  );
};

export default Spotlight;
