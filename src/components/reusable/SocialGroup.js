import React from 'react';
import Line from 'images/line.inline.svg';

const SocialGroup = ({ data = [], language, className }) => {
  return (
    <ul className={`${className} text-slate-50 w-9`}>
      {data.map(({ id, href, name, Component }) => {
        return (
          <li
            key={`${id}-soc-group`}
            className="flex flex-col fill-slate-50 items-center line-hidden"
          >
            <a
              className="py-3"
              href={href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={name[language]}
            >
              <Component className="w-6 h-6 duration-200 transition-transform hover:scale-110" />
            </a>
            <Line className="peer" />
          </li>
        );
      })}
    </ul>
  );
};

export default SocialGroup;
