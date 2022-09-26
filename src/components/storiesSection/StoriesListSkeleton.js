import React from 'react';
import PropTypes from 'prop-types';
import Story from './Story';

const StoriesListSkeleton = ({ data = [], className = '' }) => (
  <ul className={`${className} flex gap-x-10 overflow-x-auto scrollbar`}>
    {!!data.length &&
      data.map(({ frontmatter, id }) => (
        <li key={id} className="h-auto shrink-0 w-full">
          <Story content={frontmatter} />
        </li>
      ))}
  </ul>
);

StoriesListSkeleton.propTypes = {
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

export default StoriesListSkeleton;
