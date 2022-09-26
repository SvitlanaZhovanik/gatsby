import React, { useContext } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { PageFormatContext } from 'context/PageFormatContext';
import { graphql, useStaticQuery } from 'gatsby';

import Section from '../reusable/Section';
import Background from 'components/reusable/Background';
import Container from '../reusable/Container';
import video from '../../video/sea.mp4';

const GuaranteeSection = () => {
  const pageFormat = useContext(PageFormatContext);
  const { t } = useTranslation();
  const guarantee = t('guarantee', { returnObjects: true });

  const imageData = useStaticQuery(graphql`
    query {
      bg: file(name: { eq: "fon-guarantee" }) {
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
      {pageFormat && (
        <>
          {pageFormat === 'desktop' ? (
            <div className="lg:max-h-[540px] overflow-y-hidden md:max-h-[382px]">
              <video
                className="relative my-0 mx-auto lg:max-w-[1440px] md:max-w-[768px]"
                autoPlay={true}
                muted
                loop
              >
                <source src={video} type="video/mp4" />
              </video>
              <div className="lg:absolute lg:left-[50%] lg:top-[30%] lg:origin-top-left lg:text-slate-50">
                <h2 className="mb-12">{guarantee.title}</h2>
                <p className="lg:w-[620px] md:w-[424px]">{guarantee.text}</p>
              </div>
            </div>
          ) : (
            <>
              <Background imageData={imageData.bg} />
              <Container>
                <div className="pt-9 pb-[72px] md:py-20 md:text-center">
                  <h2 className="mb-6 text-center md:mb-12">
                    {guarantee.title}
                  </h2>
                  <p className="max-w-[480px] md:max-w-[720px] mx-auto text-center md:text-bb2030 md:tracking-[0.02]">
                    {guarantee.text}
                  </p>
                </div>
              </Container>
            </>
          )}
        </>
      )}
    </Section>
  );
};

export default GuaranteeSection;
