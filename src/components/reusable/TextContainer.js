import React from 'react';
import PropTypes from 'prop-types';

const TextContainer = ({
  title,
  text = [],
  className = '',
  titlePosition = 'text-start',
}) => {
  return (
    <div className={`${className}`}>
      <h2 className={`${titlePosition} mb-10 lg:mb-12 text-orange-400`}>
        {title}
      </h2>
      {!!text.length &&
        text.map(item => {
          return (
            <p key={item} className="mt-6 first-of-type:mt-0 text-neutral-700">
              {item}
            </p>
          );
        })}
    </div>
  );
};

TextContainer.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  titlePosition: PropTypes.string,
};

export default TextContainer;
