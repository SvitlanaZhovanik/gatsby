import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ReadMoreButton from 'components/reusable/ReadMoreButton';
import { useReadMore } from 'hooks/useReadMore';

const TEXT_LIMIT = 280;

const Feedback = ({
  content = { uk: '', ukName: '', ru: '', ruName: '', en: '', enName: '' },
  image,
}) => {
  const { i18n } = useTranslation();

  const { text, toggleText, showAllText, showReadMore } = useReadMore(
    content[i18n.language],
    TEXT_LIMIT,
  );

  return (
    <div className="flex flex-col h-full mx-auto slider-item-width px-5 py-8 bg-[#f8fafc33] rounded-[20px] sm:w-[380px] md:w-[510px] md:px-[35px] lg:px-[40px] lg:pb-[42px] ">
      <div className="flex items-center mb-[20px] md:mb-7">
        <div className="inline-flex w-[50px] h-[50px] mr-[20px] rounded-full border border-slate-50 overflow-hidden shrink-0 md:mr-6">
          {image && (
            <GatsbyImage
              image={image}
              alt={content[`${i18n.language}Name`]}
              className="max-w-full max-h-full rounded-full overflow-hidden relative z-10"
              imgClassName="rounded-full overflow-hidden flex"
            />
          )}
        </div>
        <p className="font-bold text-bb1625 md:text-[24px] md:leading-none">
          {content[`${i18n.language}Name`]}
        </p>
      </div>
      <p className="font-medium text-bb1225 md:text-bb2024">{text}</p>
      {showReadMore && (
        <ReadMoreButton
          onClick={toggleText}
          showAllText={showAllText}
          className={'mt-2'}
        />
      )}
    </div>
  );
};

Feedback.propTypes = {
  content: PropTypes.shape({
    en: PropTypes.string,
    enName: PropTypes.string,
    ru: PropTypes.string,
    ruName: PropTypes.string,
    uk: PropTypes.string,
    ukName: PropTypes.string,
  }).isRequired,
  image: PropTypes.object.isRequired,
};

export default Feedback;
