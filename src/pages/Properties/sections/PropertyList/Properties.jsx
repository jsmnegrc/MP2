import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropertiesList from "./PropertiesList";
import "./Properties.css";
import http from "../../../../library/http";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getProperty();
    return () => {};
  }, []);

  async function getProperty() {
    const { data } = await http.get("/properties");
    setProperties(data);
  }
  return (
    <section id="properties" className="my-4">
      <Container>
        <h3 className="text-center">PROPERTIES</h3>
        <Row className="g-4">
          {properties.map((properties, index) => {
            return (
              <Col key={index} sm={6} md={3}>
                <Properties list={properties} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Properties;
