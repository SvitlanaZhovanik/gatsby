import React from 'react';
import PropTypes from 'prop-types';
import LampIcon from 'images/lamp.inline.svg';
import LampInHandIcon from 'images/lampInHand.inline.svg';
import LampWithArrowIcon from 'images/lampWithArrow.inline.svg';

const MyFormulaList = ({ data }) => {
  return (
    <ul className="grid grid-rows-3 grid-flow-col mx-auto lg:mx-0 md:w-[768px] md:gap-x-16 lg:w-auto lg:gap-x-[156px]">
      <li className="text-center  md:row-end-3 md:row-span-2 lg:row-start-2 lg:row-span-2 w-[145px] lg:w-[247px]">
        <LampIcon className="duration-200 transition-transform hover:scale-125 w-[108px] mb-3.5 md:w-full md:mb-6 lg:mb-8 lg:w-[135px]" />
        <p className="leading-10 text-[16px] font-bold md:text-[20px]">
          {data.textUnderstand}
        </p>
      </li>
      <li className="text-center md:row-start-2 md:row-span-2 lg:row-end-3 lg:row-span-2 w-[145px] lg:w-[247px]">
        <LampInHandIcon className="duration-200 transition-transform hover:scale-125 w-[108px] mb-3.5 md:w-full md:mb-6 lg:mb-8 lg:w-[135px]" />
        <p className="leading-10 text-[16px] font-bold md:text-[20px]">
          {data.textHowGet}
        </p>
      </li>
      <li className="text-center md:row-end-3 md:row-span-2 lg:row-start-2 lg:row-span-2 w-[145px] lg:w-[247px]">
        <LampWithArrowIcon className="duration-200 transition-transform hover:scale-125 w-[108px] mb-3.5 md:w-full md:mb-6 lg:mb-8 lg:w-[135px]" />
        <p className="leading-10 text-[16px] font-bold md:text-[20px]">
          {data.textStartDoing}
        </p>
      </li>
    </ul>
  );
};

MyFormulaList.protoTypes = {
  data: PropTypes.object,
};

export default MyFormulaList;
