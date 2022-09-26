import React from 'react';
import PropTypes from 'prop-types';
import PriceCard from './PriceCard';

const PriceCardsList = ({ cardsList = [], className = '', onClick }) => {
  return (
    <ul
      className={`${className} flex justify-center gap-x-10 lg:gap-x-[78px] items-center`}
    >
      {!!cardsList.length &&
        cardsList.map(({ frontmatter }, id) => (
          <li key={`price-${id}`}>
            <PriceCard cardData={frontmatter} onClick={onClick} id={id} />
          </li>
        ))}
    </ul>
  );
};

PriceCardsList.propTypes = {
  cardsList: PropTypes.array.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default PriceCardsList;
