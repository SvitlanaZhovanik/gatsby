import React from 'react';

const Section = ({ className = '', id = null, style = {}, children }) => {
  return (
    <section
      className={`${className} relative mx-auto  w-screen overflow-hidden lg:w-[1440px]`}
      style={style}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
