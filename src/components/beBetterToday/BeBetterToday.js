import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';

import Section from '../reusable/Section';
import Background from 'components/reusable/Background';
import Container from '../reusable/Container';
import List from 'components/reusable/List';

const BeBetterToday = () => {
  const { t } = useTranslation();
  const beBetterToday = t('beBetterToday', {
    returnObjects: true,
  });

  const imageData = useStaticQuery(graphql`
    query {
      bg: file(name: { eq: "fon-be-today" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData
        }
      }
    }
  `);

  return (
    <Section>
      <Background imageData={imageData.bg} />
      <Container className="max-w-[480px] md:max-w-[720px] lg:max-w-full">
        <div className="pt-9 pb-[72px] md:py-20 lg:py-[124px]">
          <h2 className="text-orange-400 mb-6 md:mb-[46px] md:text-center lg:text-start lg:mb-12">
            {beBetterToday.title}
            <span className="block">{beBetterToday.subTitle}</span>
          </h2>
          <p className="text-neutral-600 text-[14px] font-bold leading-10 md:text-[20px]">
            {beBetterToday.textSupItems}:
          </p>
          <List
            items={beBetterToday.items}
            className="mb-3 mt-2 md:mb-5 lg:mb-3"
          />
          <p className="text-neutral-600 font-bold text-[14px] leading-[22px] md:text-[20px] md:leading-10">
            {beBetterToday.textSubItems}
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default BeBetterToday;
