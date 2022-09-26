import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';
import loadable from '@loadable/component';

import Section from 'components/reusable/Section';
import Container from 'components/reusable/Container';
import Background from 'components/reusable/Background';
import ObserverWrapper from 'components/reusable/ObserverWrapper';
import FeedbackListSkeleton from './FeedbackListSkeleton';

const FeedbackList = loadable(() => import('./FeedbackList'));

const normalizeContentData = content => {
  return content.map(({ frontmatter, cloudinaryImg, id }) => {
    const data = {
      content: frontmatter,
      imageData: cloudinaryImg.childrenImageSharp[0].gatsbyImageData,
      id,
    };
    return data;
  });
};

const FeedbackSection = () => {
  const { content, background } = useStaticQuery(graphql`
    query {
      content: allMdx(
        filter: { frontmatter: { fieldIdName: { eq: "feedbacks" } } }
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
            imageUrl
          }
          id
          cloudinaryImg {
            childrenImageSharp {
              gatsbyImageData(width: 60, aspectRatio: 1)
            }
          }
        }
      }
      background: file(name: { eq: "bg-feedback" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `);

  const normalizedData = normalizeContentData(content.nodes);

  const { t } = useTranslation();
  return (
    <Section id={'reviews'} className="gradient2">
      <Background imageData={background} />
      <Container className="pt-11 pb-[72px] md:py-[80px] lg:pt-[124px] lg:pb-[130px]">
        <h2 className="text-center mb-8 md:mb-[48px]">{t('feedbacksTitle')}</h2>
        <ObserverWrapper
          component={<FeedbackList data={normalizedData} />}
          fallback={<FeedbackListSkeleton data={normalizedData} />}
        />
      </Container>
    </Section>
  );
};

export default FeedbackSection;
