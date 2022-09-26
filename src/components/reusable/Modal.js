import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { FiX } from 'react-icons/fi';

const Modal = ({ isModalOpen, handleModalClose, children }) => {
  ReactModal.setAppElement('#___gatsby');
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleModalClose}
      contentLabel="Modal in section Sign Up"
      shouldCloseOnOverlayClick={true}
      className="absolute max-h-[95vh] rounded-3xl md:w-[650px] lg:w-[934px] md:h-[614px] top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 overflow-hidden"
      overlayClassName="fixed top-0 bottom-0 left-0 right-0 bg-neutral-700/70 backdrop-blur-xl z-[2500]"
    >
      <button
        className="absolute top-[22px] right-[22px] md:top-[29px] md:right-[29px]"
        onClick={handleModalClose}
        aria-label="Close"
      >
        <FiX className="w-[24px] h-[24px] duration-200 transition-transform hover:scale-110" />
      </button>
      {children}
    </ReactModal>
  );
};
Modal.propTypes = {
  isModalOpen: PropTypes.bool,
  handleModalClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Modal;
