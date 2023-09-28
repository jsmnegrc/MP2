import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Carousel, ListGroup } from "react-bootstrap";
import "./Propertydetails.css";
import http from "../../library/http";
import PropertyContact from "./PropertyContact";

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
          externalID: externalID,
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
            className=""
            dangerouslySetInnerHTML={{ __html: propertydetails.description }}
          ></div>
        </div>
      </Container>

      <PropertyContact />
    </>
  );
};
export default Propertydetails;
