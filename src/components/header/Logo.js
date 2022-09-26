import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Link } from 'react-scroll';

import LogoIcon from 'images/logo.inline.svg';

const Logo = ({ onClick, onFooter = false, className = '' }) => {
  const { t } = useTranslation();

  const { topLink } = t('aria', { returnObjects: true });

  const sizes = onFooter ? 'w-[96px] h-[56px] ' : 'w-[84px] h-[49px]';
  const fill = onFooter ? 'fill-neutral-600' : 'fill-slate-50';

  return (
    <Link
      to={'home'}
      className={`${sizes} flex justify-center items-center duration-200 transition-transform hover:scale-110 ${className}`}
      smooth
      spy
      // hashSpy
      onClick={onClick}
      href=""
    >
      <span className="visually-hidden">{topLink}</span>
      <LogoIcon className={`${fill} w-full h-full`} />
    </Link>
  );
};

Logo.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  onFooter: PropTypes.bool,
};

export default Logo;
