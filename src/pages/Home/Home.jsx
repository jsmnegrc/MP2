import React, { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Content from "../../pages/Home/sections/Content";
import { Container, Button, Row, Col } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
import { BsFillArrowUpSquareFill } from "react-icons/bs";


const Home = () => {
  const [showScrollIcon, setShowScrollIcon] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIcon(true);
      } else {
        setShowScrollIcon(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Hero className="hero-component" />
      <Container className="content">
        <div id="content-header">
          <h1 className="header">Choose your Urban Community </h1>
          <div className="flexbox">
          <Row className="header-content">
              <Col xs={12}>
                Welcome to beautifully Complete homes
              </Col>
              <Col xs={12}>
                Where engaging & Conceptive amenities are brought to life
              </Col>
              <Col xs={12}>
                Where everyone is Connected to life’s essentials
              </Col>
              <Col xs={12}>
                Owning your home is a Convenient & guided journey
              </Col>
            </Row>
          </div>
        </div>
        <div>
          <Link to="/batangas">Batangas</Link>
          <Link to="/bicol">bicol</Link>
          <Link to="/cabanatuan">Cabanatuan</Link>
          <Link to="/cavite">Cavite</Link>
          <Link to="/laspinas">Las Piñas</Link>
          <Link to="/bataan">Bataan</Link>
        </div>

        <div>
          <Content />
        </div>

        <div>
          <h3>Google Map</h3>
        </div>

        <div>
          <Button variant="success" className="Booking-button">
            Book Tripping
          </Button>
        </div>

        <div>
        {}
        {showScrollIcon && (
          <a href="#top" onClick={scrollToTop} className="scroll-to-top">
            <BsFillArrowUpSquareFill className="up" />
          </a>
        )}
        </div>
      </Container>
    </>
  );
};

export default Home;
