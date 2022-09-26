import React, { useContext, useEffect, useRef, useState } from 'react';
import loadable from '@loadable/component';
import HeaderNavigation from './HeaderNavigation';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { PageFormatContext } from 'context/PageFormatContext';
import { FiMenu } from 'react-icons/fi';
import { handleMenuClickPreload } from 'services/preloader';

import LangSwitcher from './LangSwitcher';
import Container from 'components/reusable/Container';
import Logo from './Logo';
import IconButton from './IconButton';

const MobileMenu = loadable(() => import('./MobileMenu'));

const Header = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [renderMenu, setRenderMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const firstClickOnButton = useRef(true);

  const headerRef = useRef(null);
  const pageFormat = useContext(PageFormatContext);
  const { t } = useTranslation();

  const isMobile = pageFormat === 'mobile';

  useEffect(() => {
    setHeaderHeight(headerRef?.current.offsetHeight);
  }, []);

  useEffect(() => {
    if (!isMobile && renderMenu) {
      setRenderMenu(false);
      setShowMenu(false);
    }
  }, [isMobile, renderMenu]);

  const onOpen = () => {
    setRenderMenu(true);
    setShowMenu(true);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    if (firstClickOnButton) {
      firstClickOnButton.current = false;
      handleMenuClickPreload();
      return;
    }
  };

  const onClose = () => {
    setShowMenu(false);
    document.body.style.overflow = '';
    setTimeout(() => {
      setRenderMenu(false);
    }, 500 + 100);
  };

  const handleEscape = e => {
    if (e.code !== 'Escape') return;
    onClose();
    window.removeEventListener('keydown', handleEscape);
  };

  const { nav } = t('header', { returnObjects: true });
  const { openMenu } = t('aria', { returnObjects: true });

  const preload = () => {
    MobileMenu.preload();
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 z-[2000] w-full bg-cyan-600/90 shadow-bb1"
      >
        <Container className={'flex items-center py-3'}>
          <Logo />
          <HeaderNavigation
            navConfig={nav}
            className="hidden md:block ml-auto md:mr-6 lg:mr-12"
            headerHeight={headerHeight}
          />
          <LangSwitcher className="ml-auto md:ml-0" />
          <IconButton
            onClick={onOpen}
            IconComponent={FiMenu}
            disabled={renderMenu}
            className={'md:hidden'}
            label={openMenu}
            preload={preload}
          />
        </Container>
        {isMobile && renderMenu && (
          <MobileMenu
            onClose={onClose}
            showMenu={showMenu}
            navConfig={nav}
            headerHeight={headerHeight}
          />
        )}
      </header>
    </>
  );
};

export default Header;
