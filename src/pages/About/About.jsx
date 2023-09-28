import React from "react";
import Hero from "./Hero/Hero";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css"

const About = () => {
  return (
    <>
      <Hero />
      <Container className="my-5">
        <Row>
          <Col>
            <h2 className="welcome">Welcome to the <span>Urban Haven</span> Family!</h2>
            <br />
            <p className="abt">
              <span>Urban Haven</span>, your trusted partner in finding the
              perfect real estate solutions. We are dedicated to helping you
              achieve your dreams of homeownership, whether you're looking to buy
              or rent a property.
            </p>
            <br />
            <p className="abt">
              With years of experience in the real estate industry, we have
              established a reputation for providing exceptional service,
              delivering valuable insights, and guiding our clients through
              every step of the real estate journey.
            </p>
            <br />
            <p className="abt">
              Our team of experts is passionate about connecting buyers and
              renters with their ideal homes. We believe that your home is more
              than just a place to live; it's where memories are made and dreams
              are realized.
            </p>
            <br />
            <p className="abt">
            <span>Urban Haven</span> focuses on the value of having your first home and believes that every homeowner deserves to take pride not only in where they live but how they live. It aims to promote a balanced life that enhances one’s way of living and overall value where they and their families can thrive in a safe and secured environment.
            </p>
            <br />
            <p className="abt">
            <span>Urban Haven</span> offers a redefined way of living with its Complete Homes, Conceptive Amenities, Connected Essentials and Convenient Buying and Selling Experience.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
