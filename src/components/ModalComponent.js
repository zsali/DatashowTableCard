import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalComponent = ({ showModal, handleCloseModal, specificData }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{specificData?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={specificData?.imageUrl} alt={specificData?.title} />
        <p>Description: {specificData?.address}</p>
        <p>beds: {specificData?.beds}</p>
        <p>bath: {specificData?.bath}</p>
        <p>coveredAreaSQFT: {specificData?.coveredAreaSQFT}</p>
        <p>propertyType: {specificData?.propertyType}</p>
        <p>isCommercial: {specificData?.isCommercial ? "Yes" : "No"}</p>
        <p>price: {specificData?.price}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
