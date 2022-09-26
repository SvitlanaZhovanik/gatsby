import { PageFormatContext } from 'context/PageFormatContext';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { FiCalendar } from 'react-icons/fi';
import { FiClock } from 'react-icons/fi';

const PriceCard = ({ cardData, onClick, isActive, id, inSlider = false }) => {
  const pageFormat = useContext(PageFormatContext);
  const { i18n, t } = useTranslation();
  const button = t('button', { returnObjects: true });

  const handleClick = () => {
    onClick(cardData.title);
  };

  const isDesktop = pageFormat === 'desktop';

  const ptb = cardData.recommended
    ? 'lg:pt-[70px] lg:pb-[80px]'
    : 'lg:pt-[50px] lg:pb-[60px]';
  const recommendedColor =
    cardData.recommended && pageFormat !== 'tablet'
      ? 'bg-[#FBDEBB] md:bg-slate-50 lg:bg-[#FBDEBB]'
      : 'bg-slate-50';
  const activeClasses =
    isActive || isDesktop
      ? 'opacity-100 scale-100'
      : 'opacity-50 scale-95 lg:scale-100';

  const showDiscount = Boolean(cardData.discount) ? 'opacity-100' : 'opacity-0';

  return (
    <div
      className={`${
        inSlider ? activeClasses : ''
      } mx-auto rounded-2xl w-[264px] px-[14px] text-neutral-700 text-center md:rounded-[20px] pt-9 pb-[30px] md:pt-[70px] md:pb-[80px] ${ptb} md:px-[46px] md:w-[328px] bg-slate-50 transition duration-200 ${recommendedColor}`}
    >
      <h3 className="font-main font-bold text-bb2040 md:text-[24px] md:leading-none mb-2 md:mb-3">
        {cardData.title}
      </h3>
      <p
        className={`${showDiscount} font-main font-bold text-bb2024 mb-[14px] md:mb-[24px] text-orange-500`}
      >
        {t('saving')} {cardData.discount}$
      </p>
      <p className="mb-[30px] font-main font-bold text-[24px] leading-none md:text-[32px] md:mb-[74px]">
        {cardData.price}$
      </p>
      <div className="mb-10 text-start inline-block md:mb-[52px]">
        <p className="flex items-center mb-5 font-bold text-bb1625">
          <FiCalendar size={20} className="mr-[14px] md:mr-[22px]" />
          <span>{cardData[`${i18n.language}Month`]}</span>
        </p>
        <p className="flex font-bold text-bb1625 ">
          <FiClock size={20} className="mr-[14px] md:mr-[22px]" />

          <span>{cardData[`${i18n.language}Sessions`]}</span>
        </p>
      </div>
      <button
        id={`price-card-button-${id}`}
        onClick={handleClick}
        type="button"
        className="h-[56px] px-3 w-full flex justify-center items-center bg-orange-400 rounded-xl text-bb2024 text-slate-50 font-bold transition-colors duration-200 hover:bg-orange-500 focus:bg-orange-500"
      >
        {button.textSmallButton}
      </button>
    </div>
  );
};

export default PriceCard;
