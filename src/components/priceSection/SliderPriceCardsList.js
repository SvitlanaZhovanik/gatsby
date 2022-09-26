import React from 'react';
import PropTypes from 'prop-types';
import PriceCard from './PriceCard';
import { Swiper, SwiperSlide } from 'swiper/react';

const SliderPriceCardsList = ({ cardsList = [], className = '', onClick }) => {
  return (
    <div className={`${className} max-w-full overflow-hidden`}>
      <Swiper
        className={'priceswiper max-w-[264px] md:max-w-[328px]'}
        spaceBetween={40}
        slidesPerView={1}
        initialSlide={1}
        style={{ overflow: 'visible' }}
      >
        {!!cardsList.length &&
          cardsList.map(({ frontmatter }, id) => (
            <SwiperSlide key={`price-${id}`} className="items-center">
              {({ isActive }) => (
                <PriceCard
                  cardData={frontmatter}
                  onClick={onClick}
                  isActive={isActive}
                  id={id}
                  inSlider
                />
              )}
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

SliderPriceCardsList.propTypes = {
  cardsList: PropTypes.array.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default SliderPriceCardsList;
