import Container from 'components/reusable/Container';
import Section from 'components/reusable/Section';
import loadable from '@loadable/component';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ObserverWrapper from 'components/reusable/ObserverWrapper';
import StoriesListSkeleton from './StoriesListSkeleton';

const StoriesList = loadable(() => import('./StoriesList'));

const StoriesSection = () => {
  const { content } = useStaticQuery(graphql`
    query {
      content: allMdx(
        filter: { frontmatter: { fieldIdName: { eq: "stories" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          frontmatter {
            ukName
            ruName
            uk
            ru
            en
            enName
          }
          id
        }
      }
    }
  `);

  const { t } = useTranslation();

  return (
    <Section className="gradient1">
      <Container className="max-w-[460px] pt-11 pb-[72px] md:max-w-full md:py-[80px] lg:pt-[124px] lg:pb-[130px]">
        <h2 className="text-center mb-8 md:mb-[48px] lg:mb-[56px]">
          {t('storiesTitle')}
        </h2>
        <ObserverWrapper
          component={<StoriesList data={content.nodes} />}
          fallback={<StoriesListSkeleton data={content.nodes} />}
        />
      </Container>
    </Section>
  );
};

export default StoriesSection;
