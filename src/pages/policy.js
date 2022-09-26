import React from 'react';
import { graphql } from 'gatsby';
import Seo from 'components/Seo';
import Politic from 'components/reusable/Politic';

const PolicyPage = ({ data }) => {
  const title = data.mdx.frontmatter.policyTitle;
  const text = data.mdx.body;

  return (
    <>
      <Seo
        title={title}
        description={title}
        lang={data.locales.edges[0].node.language}
      />
      <Politic text={text} title={title} />
    </>
  );
};

export default PolicyPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    mdx(
      frontmatter: {
        fieldIdName: { eq: "policy" }
        language: { eq: $language }
      }
    ) {
      frontmatter {
        policyTitle
      }
      body
    }
  }
`;
