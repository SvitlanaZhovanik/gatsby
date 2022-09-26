import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Section from '../reusable/Section';
import Container from '../reusable/Container';
import RoadMapList from './RoadMapList';
import Background from 'components/reusable/Background';
import { useTranslation } from 'react-i18next';

const RoadMapSection = () => {
  const { t } = useTranslation();
  const { background } = useStaticQuery(graphql`
    query RoadMapList {
      background: file(name: { eq: "road-map" }) {
        id
        publicURL
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `);

  const { title, list } = t('roadMapSection', { returnObjects: true });

  return (
    <Section>
      <Background imageData={background} />
      <Container className="px-6 max-w-[460px] pt-9 pb-[72px] md:max-w-full md:pt-20 md:pb-20 lg:pt-[124px] lg:pb-[124px]">
        <h2 className="text-center mx-auto mb-6 md:max-w-[700px] md:mb-[48px]  lg:max-w-[920px]">
          {title}
        </h2>
        {list.length ? <RoadMapList listData={list} /> : null}
      </Container>
    </Section>
  );
};

export default RoadMapSection;
