import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Carousel, ListGroup } from "react-bootstrap";
import "./Propertydetails.css";
import axios from "axios";
import http from "../../library/http";

const Propertydetails = () => {
  const [propertydetails, setPropertydetails] = useState({});
  const params = useParams();

  useEffect(() => {
    getPropertydetails(params.externalID);
  }, []);

  async function getPropertydetails(externalID) {
    try {
      const response = await http.get("/properties/detail", {
        params: {
          externalID: externalID, // Use the passed externalID parameter
        },
      });

      setPropertydetails(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <section id="propertydetails" className="mb-4">
        <div className="banner-details mb-4">
          {propertydetails.photos && propertydetails.photos.length > 0 ? (
            <Carousel interval={null}>
              {propertydetails.photos.map((photo, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={photo.url}
                    alt={`Property Photo ${index + 1}`}
                    className="carousel-image"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <img
              src="/placeholder-image.jpg"
              alt="Property Placeholder"
              className="placeholder-image"
            />
          )}
        </div>
      </section>
      <Container className="details-container mb-3 p-4">
        <div className="property-details-container">
          <Row>
            <Col xs={8}>
              <h1 className="pb-3">{propertydetails.title}</h1>
            </Col>
            <Col xs={4}>
              <h1 className="pb-3 text-end text-success">
                AED {propertydetails.price}
              </h1>
            </Col>
          </Row>
          <div
            dangerouslySetInnerHTML={{ __html: propertydetails.description }}
          ></div>
        </div>
      </Container>
      <Container className="details-container p-2">
        <div className="d-flex justify-content-center">
          <div className="p-2">
            <span className="fw-semibold text-capitalize">
              {propertydetails.purpose}
            </span>{" "}
          </div>
          <div className="p-2 text-center">
            <span className=" fw-semibold text-capitalize">
              {propertydetails.rentFrequency}
            </span>{" "}
            <br />
            <span>Rent Frequency</span>
          </div>
          <div className="p-2 text-center">
            <span className="fw-semibold d-flex">
              {" "}
              <box-icon name="bed" size="sm"></box-icon>
              <span className="mx-2">{propertydetails.rooms}</span>
            </span>{" "}
            <span className="p-0 m-0">Room</span>
          </div>
          <div className="p-2 text-center">
            <span className="fw-semibold d-flex">
              {" "}
              <box-icon name="bath" size="sm"></box-icon>
              <span className="mx-2">{propertydetails.baths}</span>
            </span>{" "}
            <span className="p-0 m-0 text-center">Bathroom</span>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Propertydetails;
