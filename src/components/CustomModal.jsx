import { Modal } from "flowbite-react";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CustomModal = ( { open, children, header = "", onClose } ) => {
  const [ openModal, setOpenModal ] = useState( false );
  useEffect( () => {
    setOpenModal( open );
  }, [ open ] );
  return (
    <Modal className="text-blue_dark" show={ openModal } onClose={ onClose }>
      <Modal.Header className="font-baloo2 font-bold !text-blue_dark">
        { header }
      </Modal.Header>
      <Modal.Body>{ children }</Modal.Body>
    </Modal>
  );
};

CustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default CustomModal;
