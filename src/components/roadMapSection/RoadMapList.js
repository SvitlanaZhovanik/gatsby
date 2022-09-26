import React from 'react';
import PropTypes from 'prop-types';

const RoadMapList = ({ listData }) => {
  return (
    <ul className="mx-auto max-w-[340px] md:max-w-full md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-x-[40px] lg:gap-y-[92px]">
      {listData.map((item, id) => (
        <li
          key={`road-${id}`}
          className="mb-3 last:mb-0 flex items-center md:mb-0 md:min-h-[124px]"
        >
          <span
            aria-hidden="true"
            className="min-w-[47px] text-center font-main font-bold leading-none text-[60px] mr-5 text-slate-50 opacity-20 pointer-events-none select-none md:min-w-[67px] md:text-[80px] md:mr-[24px] lg:min-w-[70px] lg:mr-[40px]"
          >
            {id + 1}
          </span>
          <span className="font-main font-semibold text-bb1422 lg:text-bb1625 lg:font-bold">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};

RoadMapList.propTypes = {
  // listData: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

export default RoadMapList;
