import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useTranslation, Link } from 'gatsby-plugin-react-i18next';
import { FiArrowLeft } from 'react-icons/fi';

const Politic = ({ title, text }) => {
  const { t, i18n } = useTranslation();
  const link = t('linkGoBack', { returnObjects: true });

  const data = useStaticQuery(graphql`
    query {
      background: file(name: { eq: "policy" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `);
  const image = getImage(data.background.childImageSharp.gatsbyImageData);
  return (
    <main className="relative bg-slate-50 overflow-hidden mx-auto max-w-[1440px]">
      <GatsbyImage
        image={image}
        alt="background photo"
        layout="fullWidth"
        quality={100}
        formats={['auto', 'webp']}
        className="max-h-[322px] mx-auto w-[1440px]"
        objectPosition="center bottom"
      />
      <section className=" px-6 py-6 md:px-12 md:py-12 lg:px-[148px] lg:py-[48px] ">
        <h1 className="absolute top-[115px] text-center md:top-[100px] lg:top-[140px] left-1/2 -translate-x-1/2 text-bb2440 font-bold md:text-bb4857 font-heads">
          {title}
        </h1>
        <Link
          to="/"
          href=""
          language={i18n.language}
          className="absolute left-6 top-[277px] lg:left-[84px] flex text-bb1422 md:text-bb1824 lg:text-bb3030 font-semibold font-main"
        >
          <FiArrowLeft className="mr-2 w-6 h-6 lg:w-8 lg:h-8" />
          {link}
        </Link>
        <div className="text-neutral-700 font-medium lg:text-bb2030 font-main">
          <MDXRenderer>{text}</MDXRenderer>
        </div>
      </section>
    </main>
  );
};

Politic.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Politic;
