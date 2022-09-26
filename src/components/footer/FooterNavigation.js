import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import { Link } from 'react-scroll';

const FooterNavigation = ({
  navConfig = [],
  navPubl = [],
  className = '',
  lang = 'ua',
}) => {
  return navConfig.length ? (
    <nav className={className}>
      <ul className="flex flex-col-reverse text-end md:flex-row md:justify-center md:mb-6 md:w-full lg:mb-0 lg:items-center lg:mr-9">
        {navPubl.map(({ id, name }) => {
          return (
            <li
              key={id}
              className="mb-2 first:mb-0 last:mr-0 md:mb-0 md:mr-[46px] md:last:mr-0"
            >
              <GatsbyLink
                to={id}
                className="whitespace-nowrap font-main font-light text-bb1224 md:text-bb1424 cursor-pointer"
                href=" "
              >
                {name}
              </GatsbyLink>
            </li>
          );
        })}
      </ul>
      <ul className="hidden md:flex md:justify-center lg:min-w-[300px] lg:items-center">
        {navConfig.map(({ id, name }) => (
          <li key={id} className="md:mb-0 md:mr-[46px] md:last:mr-0">
            <Link
              to={`${id}`}
              className="font-main font-light text-bb1424 cursor-pointer"
              smooth
              spy
              offset={-100}
              href=""
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  ) : null;
};

FooterNavigation.propTypes = {
  navConfig: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  className: PropTypes.string,
};

export default FooterNavigation;
