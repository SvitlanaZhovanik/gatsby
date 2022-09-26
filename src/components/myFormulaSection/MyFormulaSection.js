import React, { useContext } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import loadable from '@loadable/component';

import Section from '../reusable/Section';
import Background from 'components/reusable/Background';
import { graphql, useStaticQuery } from 'gatsby';
import { PageFormatContext } from 'context/PageFormatContext';

const MyFormulaList = loadable(() => import('./MyFormulaList'));

const MyFormulaSection = () => {
  const { t } = useTranslation();
  const myFormula = t('myFormula', {
    returnObjects: true,
  });
  const pageFormat = useContext(PageFormatContext);

  const imageData = useStaticQuery(graphql`
    query {
      bg: file(name: { eq: "formula" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData
        }
      }
    }
  `);

  return pageFormat === 'mobile' ? null : (
    <Section>
      <Background imageData={imageData.bg} objectPosition="center" />
      <div className="pt-9 pb-[72px] mx-auto my-0 h-full md:px-[34px] md:py-20 lg:py-[124px] lg:px-[190px] text-slate-50 lg:w-[1440px]">
        <h2 className="mb-6 md:mb-8 lg:mb-14 text-center">{myFormula.title}</h2>
        <MyFormulaList data={myFormula} />
      </div>
    </Section>
  );
};

export default MyFormulaSection;
