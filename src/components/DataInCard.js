import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import ModalComponent from "./ModalComponent";

const DataInCard = ({ setHandleDisplay, data }) => {
  const [showModal, setShowModal] = useState(false);
  const [specificData, setSpecificData] = useState();

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (item) => {
    setSpecificData(item);
    setShowModal(true);
  };
  return (
    <div>
      <Button
        variant="secondary"
        size="lg"
        onClick={() => setHandleDisplay(undefined)}
      >
        Go Back
      </Button>

      <Row>
        {data &&
          data.map((item, key) => {
            return (
              <CardComponent
                handleShowModal={handleShowModal}
                item={item}
                key={item.id}
              />
            );
          })}
      </Row>
      <ModalComponent
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        specificData={specificData}
      />
    </div>
  );
};

export default DataInCard;
