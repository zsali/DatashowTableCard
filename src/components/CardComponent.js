import React from "react";
import { Card } from "react-bootstrap";

const CardComponent = ({ handleShowModal, item }) => {
  return (
    <Card
      key={item.id}
      style={{ width: "16rem", cursor: "pointer" }}
      className="m-4"
      onClick={() => handleShowModal(item)}
    >
      <Card.Img variant="top" src={item?.imageUrl} />
      <Card.Body>
        <Card.Title>{item?.title}</Card.Title>
        <Card.Text>{item?.address}</Card.Text>
        <Card.Text>Beds:{item?.beds}</Card.Text>
        <Card.Text>Baths:{item?.bath}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
