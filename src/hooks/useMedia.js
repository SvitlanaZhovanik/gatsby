import { useCallback, useEffect, useState } from 'react';

const isBrowser = typeof window !== 'undefined';

const useMedia = (queries, values, defaultValue) => {
  const mediaQueryLists = queries.map(q =>
    isBrowser ? window.matchMedia(q) : false,
  );
  const getValue = useCallback(() => {
    const index = mediaQueryLists.findIndex(mql => mql.matches);
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  }, [defaultValue, mediaQueryLists, values]);

  const [value, setValue] = useState(getValue);
  useEffect(
    () => {
      const handler = () => setValue(getValue);
      mediaQueryLists.forEach(mql => mql.addListener(handler));
      return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
    },
    [getValue, mediaQueryLists], // Empty array ensures effect is only run on mount and unmount
  );
  return value;
};

export default useMedia;

// https://usehooks.com/useMedia/
