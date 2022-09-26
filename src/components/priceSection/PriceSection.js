import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';
import loadable from '@loadable/component';

import { PageFormatContext } from 'context/PageFormatContext';

import Section from 'components/reusable/Section';
import Background from 'components/reusable/Background';
import ObserverWrapper from 'components/reusable/ObserverWrapper';
import PriceCardsList from './PriceCardsList';

const SliderPriceCardsList = loadable(() => import('./SliderPriceCardsList'));

const PriceSection = ({ charity = '', openModal }) => {
  const { background, cardsList } = useStaticQuery(graphql`
    query {
      background: file(name: { eq: "price-bg" }) {
        childImageSharp {
          id
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      cardsList: allMdx(
        filter: { frontmatter: { fieldIdName: { eq: "prices" } } }
        sort: { fields: frontmatter___id, order: ASC }
      ) {
        nodes {
          frontmatter {
            title
            ukMonth
            ukSessions
            ruMonth
            ruSessions
            enMonth
            enSessions
            discount
            price
            recommended
          }
        }
      }
    }
  `);

  const pageFormat = useContext(PageFormatContext);
  const handleClick = price => openModal(`Price ${price}`, false);

  const { t } = useTranslation();
  const title = t('priceSectionTitle');

  return (
    <Section id="price">
      <Background imageData={background} />
      <div className="relative w-screen mx-auto px-0 pt-9 pb-[72px] md:px-0 md:pt-[80px] md:pb-[80px] lg:w-[1440px] lg:px-20 lg:pt-[124px] lg:pb-[124px] overflow-hidden">
        <h2 className="mx-auto text-center px-8 mb-10 md:px-0 md:max-w-[698px] md:mb-12 lg:mb-12">
          {title}
        </h2>
        {pageFormat && pageFormat === 'desktop' ? (
          <PriceCardsList
            cardsList={cardsList.nodes}
            className="mb-[30px] md:mb-16 lg:mb-[66px]"
            onClick={handleClick}
          />
        ) : (
          <ObserverWrapper
            component={
              <SliderPriceCardsList
                cardsList={cardsList.nodes}
                className="mb-[30px] md:mb-16 lg:mb-[66px]"
                onClick={handleClick}
              />
            }
            fallback={
              <PriceCardsList
                cardsList={cardsList.nodes}
                className="mb-[30px] md:mb-16 lg:mb-[66px]"
                onClick={handleClick}
              />
            }
          />
        )}
        {charity && (
          <p className="mx-auto text-center font-normal text-bb1225 px-8 max-w-[430px] md:px-0 md:max-w-[538px] md:text-bb2040 lg:max-w-full">
            {charity}
          </p>
        )}
      </div>
    </Section>
  );
};

PriceSection.propTypes = {
  charity: PropTypes.string.isRequired,
};

export default PriceSection;
