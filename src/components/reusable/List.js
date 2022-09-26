import React from 'react';
import PropTypes from 'prop-types';

const List = ({ items = [], className = '' }) => {
  return (
    !!items.length && (
      <ul className={className}>
        {items.map(item => {
          return (
            <li key={item} className="mt-3 first-of-type:mt-0">
              <p className="text-neutral-700 flex">
                <span className="text-orange-400 mr-4" aria-hidden="true">
                  ●
                </span>
                {item}
              </p>
            </li>
          );
        })}
      </ul>
    )
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};
export default List;
