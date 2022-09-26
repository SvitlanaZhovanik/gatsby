import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { SwiperSlide } from 'swiper/react';

import Slider from 'components/reusable/Slider';
import Story from './Story';
import { PageFormatContext } from 'context/PageFormatContext';

const StoriesList = ({ data = [], className = '' }) => {
  const pageFormat = useContext(PageFormatContext);

  const isDesktop = pageFormat === 'desktop';

  return (
    <Slider
      slidesPerView={isDesktop ? 2 : 1}
      className={className}
      spaceBetween={40}
    >
      {!!data.length &&
        data.map(({ frontmatter, id }) => (
          <SwiperSlide key={id} className="slide h-auto">
            <Story content={frontmatter} />
          </SwiperSlide>
        ))}
    </Slider>
  );
};

StoriesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
        en: PropTypes.string,
        enName: PropTypes.string,
        ru: PropTypes.string,
        ruName: PropTypes.string,
        uk: PropTypes.string,
        ukName: PropTypes.string,
      }),
      id: PropTypes.string,
    }).isRequired,
  ).isRequired,
  className: PropTypes.string,
};

export default StoriesList;
