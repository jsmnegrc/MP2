import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Badge, ListGroup } from "react-bootstrap";
import PropertiesList from "./PropertiesList";
import "./Properties.css";
import Banner from "../../../../assets/banner.jpg";
import Agent from "../../../../assets/agent.jpg";
import http from "../../../../library/http";

import React from "react";

const Properties = () => {
  return (
    <section id="property" className="mt-4">
      <Container>
        <Row className="g-3">
          <Col sm={12} md={6} lg={4}>
            <Card
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Card.Img className="w-150" variant="top" src={Banner} />
              <Card.ImgOverlay>
                <h5>
                  <Badge className="fw-light" bg="success">
                    For-rent
                  </Badge>
                </h5>
              </Card.ImgOverlay>
              <Card.Body
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <Card.Title className="title fw-bold">Palm Jumeirah</Card.Title>
                <Card.Title className="price text-success ">
                  د.إ 530,000,000.00
                </Card.Title>
                <Card.Title className="fs-6 text-muted fw-light">
                  build your 5 star resort on the beach palm jumeirah
                </Card.Title>
                <ListGroup style={{ marginTop: "auto" }} horizontal>
                  <li className="card-item mx-2 text-muted border-right">
                    <span className="fw-semibold">
                      1{" "}
                      <box-icon name="bed" size="xs" color="#7d7878"></box-icon>
                    </span>
                    <br />
                    <span>Rooms</span>
                  </li>
                  <li className="card-item mx-2 text-muted">
                    <span className="fw-semibold">
                      1{" "}
                      <box-icon
                        name="bath"
                        size="xs"
                        color="#7d7878"
                      ></box-icon>
                    </span>{" "}
                    <br />
                    <span>Bathrooms</span>
                  </li>
                  <li className="mx-2 text-muted">
                    <span className="fw-semibold">
                      47899{" "}
                      <box-icon
                        name="square"
                        size="xs"
                        color="#7d7878"
                      ></box-icon>
                    </span>{" "}
                    <br />
                    <span>Square Ft</span>
                  </li>
                </ListGroup>
                <Card.Footer className="footer p-3 d-flex">
                  <img className="img-agent mx-2" src={Agent} alt="" />
                  <Card.Title className="fs-6 fw-medium">
                    Norman Afdal
                    <Card.Subtitle className="mt-1 fs-6 fw-light">
                      Agent
                    </Card.Subtitle>
                  </Card.Title>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Card.Img className="w-150" variant="top" src={Banner} />
              <Card.ImgOverlay>
                <h5>
                  <Badge className="fw-light" bg="success">
                    For-rent
                  </Badge>
                </h5>
              </Card.ImgOverlay>
              <Card.Body
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <Card.Title className="title fw-bold">Palm Jumeirah</Card.Title>
                <Card.Title className="price text-success">
                  د.إ 530,000,000.00
                </Card.Title>
                <Card.Title className="fs-6 text-muted fw-light">
                  build your 5-star resort on the beach palm jumeirah Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
                  in.
                </Card.Title>
                <ListGroup style={{ marginTop: "auto" }} horizontal>
                  <li className="card-item mx-2 text-muted border-right">
                    <span className="fw-semibold">
                      1{" "}
                      <box-icon name="bed" size="xs" color="#7d7878"></box-icon>
                    </span>
                    <br />
                    <span>Rooms</span>
                  </li>
                  <li className="card-item mx-2 text-muted">
                    <span className="fw-semibold">
                      1{" "}
                      <box-icon
                        name="bath"
                        size="xs"
                        color="#7d7878"
                      ></box-icon>
                    </span>{" "}
                    <br />
                    <span>Bathrooms</span>
                  </li>
                  <li className="mx-2 text-muted">
                    <span className="fw-semibold">
                      47899{" "}
                      <box-icon
                        name="square"
                        size="xs"
                        color="#7d7878"
                      ></box-icon>
                    </span>{" "}
                    <br />
                    <span>Square Ft</span>
                  </li>
                </ListGroup>
                <Card.Footer className="footer p-3 d-flex">
                  <img className="img-agent mx-2" src={Agent} alt="" />
                  <Card.Title className="fs-6 fw-medium">
                    Norman Afdal
                    <Card.Subtitle className="mt-1 fs-6 fw-light">
                      Agent
                    </Card.Subtitle>
                  </Card.Title>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Card.Img className="w-150" variant="top" src={Banner} />
              <Card.ImgOverlay>
                <h5>
                  <Badge className="fw-light" bg="success">
                    For-rent
                  </Badge>
                </h5>
              </Card.ImgOverlay>
              <Card.Body
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <Card.Title className="title fw-bold">Palm Jumeirah</Card.Title>
                <Card.Title className="price text-success">
                  د.إ 530,000,000.00
                </Card.Title>
                <Card.Title className="fs-6 text-muted fw-light">
                  build your 5-star resort on the beach palm jumeirah Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
                  in. lorem20
                </Card.Title>
                <ListGroup style={{ marginTop: "auto" }} horizontal>
                  <li className="card-item mx-2 text-muted border-right">
                    <span className="fw-semibold">
                      1{" "}
                      <box-icon name="bed" size="xs" color="#7d7878"></box-icon>
                    </span>
                    <br />
                    <span>Rooms</span>
                  </li>
                  <li className="card-item mx-2 text-muted">
                    <span className="fw-semibold">
                      1{" "}
                      <box-icon
                        name="bath"
                        size="xs"
                        color="#7d7878"
                      ></box-icon>
                    </span>{" "}
                    <br />
                    <span>Bathrooms</span>
                  </li>
                  <li className="mx-2 text-muted">
                    <span className="fw-semibold">
                      47899{" "}
                      <box-icon
                        name="square"
                        size="xs"
                        color="#7d7878"
                      ></box-icon>
                    </span>{" "}
                    <br />
                    <span>Square Ft</span>
                  </li>
                </ListGroup>
                <Card.Footer className="footer p-3 d-flex">
                  <img className="img-agent mx-2" src={Agent} alt="" />
                  <Card.Title className="fs-6 fw-medium">
                    Norman Afdal
                    <Card.Subtitle className="mt-1 fs-6 fw-light">
                      Agent
                    </Card.Subtitle>
                  </Card.Title>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Properties;

// const Properties = () => {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     getProperty();
//     return () => {};
//   }, []);

//   async function getProperty() {
//     const { data } = await http.get("/properties");
//     setProperties(data);
//   }
//   return (
//     <section id="properties" className="my-4">
//       <Container>
//         <h3 className="text-center">PROPERTIES</h3>
//         <Row className="g-4">
//           {properties.map((properties, index) => {
//             return (
//               <Col key={index} sm={6} md={3}>
//                 <Properties list={properties} />
//               </Col>
//             );
//           })}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Properties;
