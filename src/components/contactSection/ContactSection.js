import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import loadable from '@loadable/component';
import Section from 'components/reusable/Section';
import Background from 'components/reusable/Background';
import Container from 'components/reusable/Container';
import ObserverWrapper from 'components/reusable/ObserverWrapper';

const Form = loadable(() => import('components/form/Form'));

const ContactSection = ({ saleText = '', cost = '' }) => {
  const data = useStaticQuery(graphql`
    query {
      background: file(name: { eq: "fon-contacts" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `);

  const { t } = useTranslation();
  const sale = t('modalLeft', { returnObjects: true });
  const button = t('button', { returnObjects: true });

  return (
    <Section id="contacts">
      <Background objectPosition="right bottom" imageData={data.background} />
      <Container className="pt-9 pb-[72px] md:flex md:justify-center md:px-[83px] lg:px-0 lg:justify-end md:py-[80px] lg:py-[100px]">
        <h2 className="visually-hidden">Contacts</h2>
        <div className="bg-none md:bg-slate-50/[.1] md:rounded-[20px] md:w-[602px] md:h-[707px] md:px-[74px] md:pt-[52px] md:pb-[50px]">
          <p className="text-bb1225 text-center text-bold mb-4 md:text-bb1625 md:mb-[20px]">
            {sale.text}
            <span className="inline-block text-orange-400 mx-1">
              {saleText}
            </span>
            {sale.text2}
          </p>
          <p className="text-bb1222 text-center text-bold mb-6 md:text-bb1422 md:mb-[46px]">
            *{cost}
          </p>
          <ObserverWrapper
            className="min-h-[430px] md:min-h-[406px]"
            component={
              <Form
                place="section Contact"
                buttonText={button.textBigButton}
                buttonClassName="bg-orange-400 hover:bg-orange-500"
              />
            }
            fallback={null}
          />
        </div>
      </Container>
    </Section>
  );
};
Form.propTypes = {
  saleText: PropTypes.string,
  cost: PropTypes.string,
};

export default ContactSection;
