import React from "react";
import Hero from "../About/Hero/Hero";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Hero />
      <Container className="my-5">
        <Row>
          <Col lg={6}>
            <h2>About Our Company</h2>
            <p>
              Welcome to [Your Company Name], your trusted partner in finding the
              perfect real estate solutions. We are dedicated to helping you
              achieve your dreams of homeownership, whether you're looking to buy
              or rent a property.
            </p>
            <p>
              With years of experience in the real estate industry, we have
              established a reputation for providing exceptional service,
              delivering valuable insights, and guiding our clients through every
              step of the real estate journey.
            </p>
            <p>
              Our team of experts is passionate about connecting buyers and
              renters with their ideal homes. We believe that your home is more
              than just a place to live; it's where memories are made and dreams
              are realized.
            </p>
          </Col>
          <Col lg={6}>
            <img
              src="/images/about-us-image.jpg" // Replace with your image URL
              alt="About Us"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
