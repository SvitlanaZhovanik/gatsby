import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, className = '' }) => {
  return (
    <div
      className={`${className} relative w-screen mx-auto px-5 md:w-[768px] md:px-9 lg:w-[1440px] lg:px-20`}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
