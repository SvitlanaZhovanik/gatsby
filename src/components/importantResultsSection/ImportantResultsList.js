import React from 'react';
import PropTypes from 'prop-types';

const ImportantResultsList = ({ data }) => {
  return (
    <ul className="grid gap-y-4 md:grid-cols-2 md:gap-x-6 md:gap-y-9 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-[68px]">
      {data.list.map(item => (
        <li
          key={item}
          className="flex items-center mx-auto w-[280px] h-[172px] border-slate-50 py-7 px-6 border rounded-[20px] md:mx-0 md:w-[338px] md:h-[186px] md:px-7 md:py-[26px] lg:w-[400px] lg:h-[152px] lg:px-[35px]"
        >
          <p className="text-bb1225 font-bold  md:text-bb1625 lg:text-bb1625">
            {item}
          </p>
        </li>
      ))}
    </ul>
  );
};

ImportantResultsList.protoTypes = {
  data: PropTypes.object,
};

export default ImportantResultsList;
