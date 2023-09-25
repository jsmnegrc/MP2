import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Badge,
  Button,
} from "react-bootstrap";
import "./Properties.css";
import { Link } from "react-router-dom";

const PropertyItem = () => {
  const [propertyList, setPropertyList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (Array.isArray(response.data.hits)) {
          setPropertyList(response.data.hits);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      {propertyList.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <Row>
          {propertyList.map((property) => (
            <Col className="mb-4" key={property.id} xs={12} md={6} lg={4}>
              <Card
                className="card-list"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Card.Img
                  className=" card-img w-150 "
                  variant="top"
                  src={property.coverPhoto.url}
                />
                <Card.ImgOverlay>
                  <h5>
                    <Badge className="text-capitalize fw-light" bg="success">
                      {property.purpose}
                    </Badge>
                  </h5>
                </Card.ImgOverlay>
                <Card.Body
                  style={{ flex: 1, display: "flex", flexDirection: "column" }}
                >
                  <Card.Title className="title fw-bold">
                    {property.title}
                  </Card.Title>
                  <Card.Title className="price text-success ">
                    Price: {property.price} AED/month
                  </Card.Title>

                  <ListGroup
                    className="mb-2"
                    style={{ marginTop: "auto" }}
                    horizontal
                  >
                    <li className="card-item mx-2 text-muted border-right">
                      <span className="fw-semibold">
                        {" "}
                        <box-icon
                          name="bed"
                          size="xs"
                          color="#7d7878"
                        ></box-icon>
                      </span>
                      <br />
                      <span>Rooms: {property.rooms}</span>
                    </li>
                    <li className="card-item mx-2 text-muted">
                      <span className="fw-semibold">
                        {" "}
                        <box-icon
                          name="bath"
                          size="xs"
                          color="#7d7878"
                        ></box-icon>
                      </span>{" "}
                      <br />
                      <span> Baths: {property.baths}</span>
                    </li>
                    <li className="mx-2 text-muted">
                      <span className="fw-semibold">
                        {" "}
                        <box-icon
                          name="square"
                          size="xs"
                          color="#7d7878"
                        ></box-icon>
                      </span>{" "}
                      <br />
                      <span> Area: {property.area}</span>
                    </li>
                  </ListGroup>
                  <Card.Footer className="footer p-3 d-flex">
                    <img
                      className="img-agent mx-2"
                      src={property.agency.logo.url}
                      alt=""
                    />
                    <Card.Title className="fs-6 fw-medium">
                      Owner/Agent:
                      <Card.Subtitle className="mt-1 fs-6 fw-light">
                        {property.agency.name}
                      </Card.Subtitle>
                    </Card.Title>
                  </Card.Footer>
                  <Button
                    className="btn-item btn-success"
                    as={Link}
                    to={`/propertydetails/${property.externalID}`}
                    variant="primary"
                    onClick={() => console.log("Button clicked")}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default PropertyItem;
