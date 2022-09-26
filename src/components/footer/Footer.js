import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Container from 'components/reusable/Container';
import Logo from 'components/header/Logo';
import Button from 'components/reusable/Button';
import { getSocialData } from 'data/social/social';
import FooterNavigation from './FooterNavigation';
import { graphql, useStaticQuery } from 'gatsby';
import SocialIconsList from 'components/reusable/SocialIconsList';
import { useContext } from 'react';
import { PageFormatContext } from 'context/PageFormatContext';

const Footer = ({ saleText = '', charity = '', cost = '', openModal }) => {
  const { contacts } = useStaticQuery(graphql`
    query {
      contacts: mdx(frontmatter: { fieldIdName: { eq: "contacts" } }) {
        frontmatter {
          _1
          _2
          _3
        }
      }
    }
  `);

  const pageFormat = useContext(PageFormatContext);
  const socials = getSocialData(contacts.frontmatter);

  const handleClick = () => openModal('Footer', false);

  const { t, i18n } = useTranslation();
  const button = t('button', { returnObjects: true });
  const footer = t('footer', { returnObjects: true });
  const sale = t('modalLeft', { returnObjects: true });

  return (
    <footer className="max-w-[1440px] bg-orange-50 text-neutral-600 mx-auto my-0 pt-11 pb-16 md:pb-[50px] md:pt-20 ">
      <Container>
        <div className="flex justify-between mx-auto mb-5 md:items-center md:mb-6 lg:mb-0 lg:mx-0 lg:justify-between">
          <Logo onFooter />

          <FooterNavigation
            navConfig={footer.nav}
            navPubl={footer.navPubl}
            lang={i18n.language}
            className="pt-5 xs:pt-0 lg:ml-0 lg:flex"
          />
          {pageFormat && pageFormat !== 'mobile' && (
            <SocialIconsList
              data={socials}
              language={i18n.language}
              className=""
              onFooter
            />
          )}
        </div>
        {pageFormat && pageFormat === 'mobile' && (
          <SocialIconsList
            data={socials}
            language={i18n.language}
            className="mx-auto mb-5"
            onFooter
          />
        )}

        <p className="text-bb1222 font-bold md:text-bb2040 mx-auto mb-6 md:mb-2 text-center md:tracking-normal md:w-[548px] lg:tracking-[0.02em] lg:w-full">
          {sale.text}
          <span className="inline-block text-cyan-500 mx-1">{saleText}</span>
          {sale.text2}
        </p>
        <p className="text-bb1222 font-bold  mx-auto mb-6 md:mb-8 text-center md:text-bb1625 md:tracking-normal md:w-[548px] lg:tracking-[0.02em] lg:w-full">
          *{cost}
        </p>
        <Button
          id={'footer-button'}
          onClick={handleClick}
          className="text-slate-50 bg-cyan-500 w-[280px] hover:bg-cyan-600 transition-colors mx-auto py-4 rounded-xl font-bold leading-6 text-bb2040 md:w-[410px] lg:mb-[70px]"
        >
          {button.textSmallButton}
        </Button>
        {charity && (
          <p className="hidden text-center font-bold lg:block lg:leading-6 lg:text-bb2040">
            {charity}
          </p>
        )}
      </Container>
    </footer>
  );
};

export default Footer;
