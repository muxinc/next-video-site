import { useEffect, useState } from 'react';

const useSupportsHover = (initialValue = false) => {
  const [supportsHover, setSupportsHover] = useState(() => initialValue);

  useEffect(() => {
    const onMediaChange = (e: MediaQueryListEvent) => {
      setSupportsHover(e.matches);
    };

    const mediaQuery = window.matchMedia('(hover: hover)');
    mediaQuery.addEventListener('change', onMediaChange);
    setSupportsHover(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener('change', onMediaChange);
    };
  }, []);

  return supportsHover;
};

export default useSupportsHover;
