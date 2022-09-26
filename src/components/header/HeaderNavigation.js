import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import { handleNavigationPreload } from 'services/preloader';

const HeaderNavigation = ({
  navConfig = [],
  className = '',
  headerHeight = 0,
}) => {
  return (
    <>
      {navConfig.length ? (
        <nav className={className}>
          <ul className="flex md:gap-x-[34px] lg:gap-x-[60px]">
            {navConfig.map(({ id, name }) => (
              <li key={id} className="shrink-0 last:mr-0">
                <Link
                  to={`${id}`}
                  activeClass="after:translate-x-0"
                  className="non-active-link overflow-hidden relative font-main text-bbBase cursor-pointer py-3 after:content-[''] after:absolute after:bottom-1 after:left-0 after:h-1 after:w-full after:bg-slate-50 after:transition-transform after:duration-200 after:rounded-sm hover:after:translate-x-0 focus:after:translate-x-0"
                  smooth
                  spy
                  offset={-headerHeight - 1}
                  href=""
                  onMouseOver={() => {
                    handleNavigationPreload(id);
                  }}
                  onTouchStart={() => {
                    handleNavigationPreload(id);
                  }}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </>
  );
};

HeaderNavigation.propTypes = {
  navConfig: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  className: PropTypes.string,
  headerHeight: PropTypes.number.isRequired,
};

export default HeaderNavigation;
