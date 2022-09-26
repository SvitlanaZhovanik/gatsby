import * as React from 'react';

const HeroDataList = ({ heroDataList }) => {
  return (
    <>
      <h2 className=" text-bb2023 leading-[-0.02em] mb-[34px] font-bold tracking-tight md:font-heads md:mb-[38px] md:text-[28px] md:leading-8">
        {heroDataList.title}:
      </h2>
      <ul className="grid gap-x-10 mb-[40px] lg:gap-y-10 relative md:grid-cols-2 md:mb-[50px] md:gap-y-[30px] lg:mb-9 lg:grid-cols-3">
        {heroDataList.list.map((item, id) => (
          <li key={`hero-${id}`} className="border-t border-slate-50 py-6">
            <p className="text-bb1625 md:text-lg leading-[25px]">{item}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HeroDataList;
