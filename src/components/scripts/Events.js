import { Script } from 'gatsby';
import React from 'react';

const Events = () => {
  return (
    <Script strategy="post-hydrate">
      {`
        if (typeof window !== 'undefined') {
          if (window.fbq != null) {
            window.fbq('track', 'PageView');
          }
        }
      `}
    </Script>
  );
};

export default Events;
