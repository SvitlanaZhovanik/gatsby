import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Button from 'components/reusable/Button';
import SocialGroup from 'components/reusable/SocialGroup';
import { getSocialData } from 'data/social/social';
import Section from '../reusable/Section';
import Background from 'components/reusable/Background';
import Container from '../reusable/Container';
import HeroDataTitle from './HeroDataTitle';
import HeroListExperiences from './HeroListExperiences';
import HeroDataList from './HeroDataList';
import SocialIconsList from 'components/reusable/SocialIconsList';

const Hero = ({ openModal }) => {
  const { bgDesk, bg, contacts } = useStaticQuery(graphql`
    query MyQueryHero {
      bgDesk: file(name: { eq: "hero-1" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      bg: file(name: { eq: "hero" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      contacts: mdx(frontmatter: { fieldIdName: { eq: "contacts" } }) {
        frontmatter {
          _1
          _2
          _3
        }
      }
    }
  `);

  const socials = getSocialData(contacts.frontmatter);

  const handleClick = () => openModal('section Hero', true);

  const { t, i18n } = useTranslation();

  const button = t('button', { returnObjects: true });
  const experience = t('heroExpirience', { returnObjects: true });
  const heroList = t('heroListBlock', { returnObjects: true });
  const heroTitle = t('heroTitle', { returnObjects: true });

  return (
    <Section id={'home'} className={'bg-cyan-600 z-0'}>
      <div className={'hidden lg:block'}>
        <Background imageData={bgDesk} />
      </div>
      <div className={'lg:hidden'}>
        <Background imageData={bg} />
      </div>
      <Container className="max-w-[380px] mx-auto md:max-w-full ">
        <div className="fade-in font-main pt-[128px] pb-[72px] md:pt-[156px] md:pb-20 lg:pt-[174px] lg:pb-10">
          <div className="md:flex justify-between items-start mb-[60px] md:mb-[54px] lg:mb-[94px]">
            <div className="mb-[60px] md:mb-0">
              <HeroDataTitle heroTitle={heroTitle} />
              <Button
                id={'button-hero'}
                onClick={handleClick}
                type="button"
                className="mx-auto min-w-[280px] bg-orange-400 rounded-xl py-4 text-xl leading-6 transition-colors duration-200 hover:bg-orange-500 focus:bg-orange-500 md:mx-0 md:w-[410px]"
              >
                {button.textBigButton}
              </Button>
            </div>
            <SocialIconsList
              data={socials}
              language={i18n.language}
              className={'mx-auto md:hidden lg:hidden'}
            />
            <SocialGroup
              data={socials}
              language={i18n.language}
              className={'hidden md:block'}
            />
          </div>
          <HeroDataList heroDataList={heroList} />
          <HeroListExperiences experience={experience} />
        </div>
      </Container>
    </Section>
  );
};

Hero.propTypes = {
  saleText: PropTypes.string,
};
export default Hero;
