import React, { useEffect, useRef, useState } from 'react';

const ObserverWrapper = ({ component, fallback = null, className }) => {
  const [showElement, setShowElement] = useState(false);

  const observer = useRef();
  const container = useRef(null);

  const onElementIntersection = entries => {
    if (!entries || entries.length <= 0) {
      return;
    }

    if (entries[0].isIntersecting) {
      setShowElement(true);
      observer.current.disconnect();
    }
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(onElementIntersection, {
      rootMargin: '300% 0px',
      threshold: 0.25,
    });
  }, []);

  useEffect(() => {
    if (window && 'IntersectionObserver' in window) {
      if (container && container.current) {
        observer.current.observe(container.current);
      }
    } else {
      setShowElement(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [container]);

  return (
    <div className={className} ref={container}>
      {showElement ? component : fallback}
    </div>
  );
};

export default ObserverWrapper;
