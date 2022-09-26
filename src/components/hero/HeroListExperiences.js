import * as React from 'react';

const HeroListExperiences = ({ experience }) => {
  return (
    <>
      <ul className="grid gap-y-6 md:border md:border-slate-50 md:rounded-2xl lg:py-7 relative md:py-5 md:pl-[46px] md:gap-y-8 md:grid-cols-2 lg:pl-0 lg:gap-y-0 lg:grid-cols-3 lg:divide-x">
        {experience.items.map(({ id, title, text }) => {
          return (
            <li
              key={id}
              className="lg:pl-[110px] text-slate-50 lg:hero-expirience-line"
            >
              <h3 className="text-bb2424 mb-1 md:text-[40px] md:leading-6 md:mb-2 font-bold">
                {title}
              </h3>
              <p className="text-bb1624 md:text-base">{text}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default HeroListExperiences;
