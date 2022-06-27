import React from "react";
import { Card } from "react-bootstrap";

const MyCard = ({ value, icon, subtitle }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{icon}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
          <Card.Text>{value}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default MyCard;
