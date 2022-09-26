import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';

import ImageContent from 'components/reusable/ImageContent';
import TextContainer from 'components/reusable/TextContainer';
import Section from 'components/reusable/Section';
import Background from 'components/reusable/Background';

const InLiveSection = () => {
  const { t, i18n } = useTranslation();
  const inLive = t('inLive', { returnObjects: true });

  const data = useStaticQuery(graphql`
    query {
      photo: mdx(frontmatter: { title: { eq: "onBeach" } }) {
        cloudinaryImg {
          childImageSharp {
            gatsbyImageData(width: 768)
          }
        }
        frontmatter {
          en
          ru
          uk
        }
      }
      background: file(name: { eq: "fon-in-live-1" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `);
  const imageData = data.photo.cloudinaryImg.childImageSharp.gatsbyImageData;
  const imageAlt = data.photo.frontmatter[i18n.language];
  return (
    <Section>
      <Background imageData={data.background} />
      <div className="relative w-screen mx-auto pt-9 md:w-[768px] md:py-[80px] lg:w-[1440px] lg:py-[124px]">
        <div className="lg:flex lg:flex-row-reverse lg:justify-between">
          <TextContainer
            title={inLive.title}
            text={inLive.text}
            titlePosition="text-center lg:text-start"
            className="max-w-[480px] mx-auto px-[20px] pb-[72px] md:px-[35px] md:pb-0 md:mb-11 md:max-w-[720px] lg:max-w-full lg:mx-0 lg:mb-0 lg:ml-[40px] lg:pl-0 lg:pr-[85px] lg:mt-0 lg:w-2/4"
          />
          <ImageContent
            imageData={imageData}
            imageAlt={imageAlt}
            imgClassName="md:object-top lg:object-center"
            width="lg:w-[700px]"
            height="md:h-[500px] lg:h-[755px]"
            className="hidden md:block lg:rounded-r-[20px]"
          />
        </div>
      </div>
    </Section>
  );
};

export default InLiveSection;
