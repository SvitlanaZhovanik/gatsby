import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Background = ({
  imageData = {},
  className = '',
  objectPosition = 'top center',
}) => {
  const image = getImage(imageData.childImageSharp.gatsbyImageData);

  return (
    <GatsbyImage
      image={image}
      alt="background"
      className={`${className} -z-10 top-0 left-1/2 -translate-x-1/2 max-h-full mx-auto w-[1440px]`}
      style={{ position: 'absolute' }}
      objectPosition={objectPosition}
    />
  );
};

Background.propTypes = {
  imageData: PropTypes.object.isRequired,
  className: PropTypes.string,
  objectPosition: PropTypes.string,
};

export default Background;
