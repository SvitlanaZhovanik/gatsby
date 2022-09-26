import React from 'react';
import PropTypes from 'prop-types';
import Feedback from './Feedback';

const FeedbackListSkeleton = ({ data = [], className = '' }) => (
  <ul className={`${className} flex overflow-x-auto scrollbar`}>
    {!!data.length &&
      data.map(({ content, imageData, id }, idx) => (
        <li key={id} className="h-auto shrink-0 w-full">
          <Feedback content={content} image={imageData} />
        </li>
      ))}
  </ul>
);

FeedbackListSkeleton.propTypes = {
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

export default FeedbackListSkeleton;
