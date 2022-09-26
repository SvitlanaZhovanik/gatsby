import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

const ImageContext = ({
  imageData,
  imageAlt,
  width = '',
  height = '',
  className = '',
  imgClassName = '',
}) => {
  return (
    <div className={`${className} overflow-hidden h-full `}>
      <GatsbyImage
        image={imageData}
        alt={imageAlt}
        className={`${width} ${height}`}
        imgClassName={imgClassName}
      />
    </div>
  );
};

ImageContext.propTypes = {
  imageData: PropTypes.object,
  imageAlt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  imgClassName: PropTypes.string,
};

export default ImageContext;
