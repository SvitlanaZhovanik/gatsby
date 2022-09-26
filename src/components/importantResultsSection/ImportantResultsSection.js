import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';

import Section from '../reusable/Section';
import Background from 'components/reusable/Background';
import Container from '../reusable/Container';
import ImportantResultsList from './ImportantResultsList';

const ImportantResultsSection = () => {
  const { t } = useTranslation();
  const importantResul = t('importantResultsSection', {
    returnObjects: true,
  });

  const imageData = useStaticQuery(graphql`
    query {
      bg: file(name: { eq: "fon-six-main-results" }) {
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
      <Container className="max-w-[460px] md:max-w-full">
        <div className="pt-9 pb-[72px] md:py-20 lg:py-[124px]">
          <h2 className="text-center mx-auto mb-6 md:mb-12">
            {importantResul.title}
          </h2>
          <ImportantResultsList data={importantResul} />
        </div>
      </Container>
    </Section>
  );
};

export default ImportantResultsSection;
