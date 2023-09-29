import React from "react";
import Hero from "../About/Hero/Hero";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaHome,
  FaBuilding,
  FaClipboardList,
  FaChartLine,
} from "react-icons/fa";
import "./About.css";

const ServiceCard = ({ icon, title, description }) => (
  <Card className="about-card p-3">
    <Card.Body className="fixed-height-card mb-2">
      <div className="icon">{icon}</div>
      <Card.Title className="">{title}</Card.Title>
      <Card.Subtitle className="mt-3 mb-2 text-muted">
        {description}
      </Card.Subtitle>
    </Card.Body>
  </Card>
);

const About = () => {
  return (
    <>
      <Hero />
      <Container className="my-5">
        <h2 className="welcome text-center">
          Welcome to the <span>Urban Haven</span> Family!
        </h2>
        <br />
        <br />
        <p className="abt">
          <span>Urban Haven</span>, your trusted partner in finding the perfect
          real estate solutions. We are dedicated to helping you achieve your
          dreams of homeownership, whether you're looking to buy or rent a
          property.
        </p>
        <p className="abt">
          With years of experience in the real estate industry, we have
          established a reputation for providing exceptional service, delivering
          valuable insights, and guiding our clients through every step of the
          real estate journey.
        </p>
        <p className="abt">
          Our team of experts is passionate about connecting buyers and renters
          with their ideal homes. We believe that your home is more than just a
          place to live; it's where memories are made and dreams are realized.
        </p>
        <p className="abt">
          <span>Urban Haven</span> focuses on the value of having your first
          home and believes that every homeowner deserves to take pride not only
          in where they live but how they live. It aims to promote a balanced
          life that enhances one’s way of living and overall value where they
          and their families can thrive in a safe and secured environment.
        </p>
        <p className="abt">
          <span>Urban Haven</span> offers a redefined way of living with its
          Complete Homes, Conceptive Amenities, Connected Essentials and
          Convenient Buying and Selling Experience.
        </p>
      </Container>
      <Container className="mb-5">
        <Row>
<<<<<<< HEAD
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
=======
          <Col className="mb-3">
            <ServiceCard
              icon={<FaHome />}
              title="Residential Sales and Leasing"
              description="Find your ideal home or investment property from our extensive portfolio of apartments, villas, townhouses, and penthouses."
            />
          </Col>
          <Col>
            <ServiceCard
              icon={<FaBuilding />}
              title="Commercial Real Estate"
              description="Explore prime commercial spaces, offices, and retail properties tailored to your business needs."
            />
          </Col>
          <Col>
            <ServiceCard
              icon={<FaClipboardList />}
              title="Property Management"
              description="Let us take care of the details. Our property management services ensure your investment remains hassle-free."
            />
          </Col>
          <Col>
            <ServiceCard
              icon={<FaChartLine />}
              title="Investment Consultation"
              description="Invest with confidence. Our experts will guide you through the process, identifying opportunities that align with your financial goals."
            />
>>>>>>> 4b9fc936a435255b74e244bf2317bc7b339f2850
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
