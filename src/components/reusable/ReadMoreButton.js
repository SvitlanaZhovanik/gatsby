import React from 'react';
import { useTranslation } from 'react-i18next';

const ReadMoreButton = ({ onClick, showAllText, className }) => {
  const { t } = useTranslation();

  const { more, less } = t('readMoreBtn', { returnObjects: true });

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} ml-auto font-bb1424 py-1 underline`}
    >
      {showAllText ? less : more}
    </button>
  );
};

export default ReadMoreButton;
