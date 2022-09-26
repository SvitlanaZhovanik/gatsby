import React, { useContext } from 'react';

import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper';
import { PageFormatContext } from 'context/PageFormatContext';

const Slider = ({
  children,
  className,
  slidesPerView = 1,
  onSlideChange,
  onSwiper,
  style,
  spaceBetween = 0,
}) => {
  const pageFormat = useContext(PageFormatContext);

  const isMobile = pageFormat === 'mobile';

  return (
    <div className={`${className} relative -z-0`}>
      <Swiper
        className="mx-auto lg:w-[1060px]"
        spaceBetween={spaceBetween}
        modules={[Navigation]}
        slidesPerView={slidesPerView}
        onSlideChange={onSlideChange}
        onSwiper={onSwiper}
        style={style}
        navigation={{
          nextEl: '.next-slider',
          prevEl: '.prev-slider',
        }}
        loop={true}
      >
        {children}
      </Swiper>

      {!isMobile && (
        <>
          <div className="prev-slider swiper-button-disabled" role={'button'}>
            <FiArrowLeftCircle size={40} />
          </div>
          <div className="next-slider swiper-button-disabled" role={'button'}>
            <FiArrowRightCircle size={40} />
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;
