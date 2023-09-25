import { Container, Row } from "react-bootstrap";
import PropertyItem from "./PropertyItem";
import "./Properties.css";
import React from "react";

const Properties = () => {
  return (
    <section id="property">
      <Container>
        <h3 className="text-center mb-5"></h3>
        <Row className="g-4">
          <PropertyItem />
        </Row>
      </Container>
    </section>
  );
};
export default Properties;
