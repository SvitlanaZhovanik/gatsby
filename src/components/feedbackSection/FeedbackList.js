import Slider from 'components/reusable/Slider';
import React from 'react';
import PropTypes from 'prop-types';
import { SwiperSlide } from 'swiper/react';
import { useContext } from 'react';
import { PageFormatContext } from 'context/PageFormatContext';

import Feedback from './Feedback';

const FeedbackList = ({ data = [], className = '' }) => {
  const pageFormat = useContext(PageFormatContext);

  const isDesktop = pageFormat === 'desktop';

  return (
    <>
      {pageFormat && (
        <Slider
          slidesPerView={isDesktop ? 2 : 1}
          className={className}
          spaceBetween={40}
        >
          {!!data.length &&
            data.map(({ content, imageData, id }) => (
              <SwiperSlide key={id} className="slide h-auto">
                <Feedback content={content} image={imageData} />
              </SwiperSlide>
            ))}
        </Slider>
      )}
    </>
  );
};

FeedbackList.propTypes = {
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
      gatsbyImageData: PropTypes.object,
    }).isRequired,
  ).isRequired,
  className: PropTypes.string,
};

export default FeedbackList;
