import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Background from 'components/reusable/Background';
import Form from 'components/form/Form';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { PageFormatContext } from 'context/PageFormatContext';

const ModalLeft = ({ bg, place, saleText, cost }) => {
  const { t } = useTranslation();
  const button = t('button', { returnObjects: true });
  const sale = t('modalLeft', { returnObjects: true });
  const pageFormat = useContext(PageFormatContext);

  return (
    <div className="overflow-x-hidden overflow-y-auto max-h-full py-[42px] px-[20px] w-[320px] md:w-[458px] md:mx-auto lg:mx-0 lg:w-[934px] lg:h-[614px] lg:pt-[50px] lg:pl-[56px] lg:pb-[30px]">
      {pageFormat === 'desktop' ? (
        <Background
          className="lg:w-[934px]"
          imageData={bg}
          objectPosition="center top"
        />
      ) : (
        <Background
          className="lg:w-[934px]"
          imageData={bg}
          objectPosition="150px top"
        />
      )}
      <div className=" md:mx-auto lg:mx-0 lg:w-[450px]">
        <p className="md:w-[450px] font-main text-bb1422 font-bolt md:text-bb1625 mb-2">
          {sale.text}
          <span className="inline-block text-orange-400 mx-1">{saleText}</span>
          {sale.text2}
        </p>
        <p className="font-main text-bb1222 font-bolt md:text-bb1425 mb-6 ">
          *{cost}
        </p>
        <Form
          place={place}
          buttonText={button.textSmallButton}
          buttonClassName="bg-orange-400 hover:bg-orange-500 focus:bg-orange-500"
        />
      </div>
    </div>
  );
};

ModalLeft.propTypes = {
  bg: PropTypes.object,
  place: PropTypes.string,
  saleText: PropTypes.string,
  cost: PropTypes.string,
};

export default ModalLeft;
