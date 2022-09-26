import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useReadMore } from 'hooks/useReadMore';
import ReadMoreButton from 'components/reusable/ReadMoreButton';

const TEXT_LIMIT = 300;

const Story = ({
  content = { uk: '', ukName: '', ru: '', ruName: '', en: '', enName: '' },
}) => {
  const { i18n } = useTranslation();

  const { text, toggleText, showAllText, showReadMore } = useReadMore(
    content[i18n.language],
    TEXT_LIMIT,
  );

  return (
    <div className="flex flex-col h-full mx-auto slider-item-width px-[24px] pt-8 pb-[42px] border-2 border-slate-50 rounded-[20px] sm:w-[380px] md:w-[510px]">
      <p className="mb-[23px] font-bold text-bb1440 md:text-bb2040 md:mb-[14px] lg:text-[24px] md:leading-none">
        {content[`${i18n.language}Name`]}
      </p>
      <p className="font-medium text-bb1424 md:text-bb2024">{text}</p>
      {showReadMore && (
        <ReadMoreButton
          onClick={toggleText}
          showAllText={showAllText}
          className={'mt-auto'}
        />
      )}
    </div>
  );
};

Story.propTypes = {
  content: PropTypes.shape({
    en: PropTypes.string,
    enName: PropTypes.string,
    ru: PropTypes.string,
    ruName: PropTypes.string,
    uk: PropTypes.string,
    ukName: PropTypes.string,
  }).isRequired,
};

export default Story;
