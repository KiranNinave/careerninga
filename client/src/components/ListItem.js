import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const ListItem = props => {
  const { name, location, attacker_king, defender_king, _id } = props.battle;
  return (
    <Link to={`/${_id}`} style={{ textDecoration: "none", color: "#fff" }}>
      <Card
        style={{
          width: "300px",
          backgroundColor: "#394147",
          marginTop: "20px",
          marginBottom: "20px",
          cursor: "pointer"
        }}
      >
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>{location}</Card.Title>
          <Card.Text>{name || "NA"}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem style={{ backgroundColor: "#394147" }}>
            ATTACKER : {attacker_king || "NA"}
          </ListGroupItem>
          <ListGroupItem style={{ backgroundColor: "#394147" }}>
            DEFENDER: {defender_king || "NA"}
          </ListGroupItem>
        </ListGroup>
      </Card>
    </Link>
  );
};

export default ListItem;
