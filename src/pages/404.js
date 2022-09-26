import React, { useEffect, useState } from 'react';
import { Link, graphql, navigate } from 'gatsby';

import Container from 'components/reusable/Container';
import Seo from 'components/Seo';
import RedirectTimer from 'components/reusable/RedirectTimer';
import { useI18next } from 'gatsby-plugin-react-i18next';

const NotFoundPage = () => {
  const [redirect, setRedirect] = useState(false);
  const { language, t } = useI18next();

  useEffect(() => {
    if (!redirect) return;
    navigate(`/${language}/`, { replace: true });
  }, [language, redirect]);

  const data = t('notFoundPage', { returnObjects: true });

  return (
    <>
      <Seo title="404" description={`${data.par} | ${404}`} />
      <section className="bg-cyan-500 w-[100vw] h-[100vh]">
        <Container className="py-28 text-center max-w-[450px]">
          <h1 className="mb-5 text-bb2833 font-heads font-bold">
            {data.title}
          </h1>
          <p className="mb-5 text-bb1824">{data.par}</p>
          <Link
            to={`/${language}/`}
            className="mb-5 inline-flex px-5 bg-orange-400 rounded-xl py-4 text-xl leading-6 transition-colors duration-200 hover:bg-orange-500 focus:bg-orange-500"
          >
            {data.button}
          </Link>
          <RedirectTimer getRedirect={setRedirect} />
        </Container>
      </section>
    </>
  );
};

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;

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
  }
`;
