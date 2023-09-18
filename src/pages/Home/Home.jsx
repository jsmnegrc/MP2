import React, { useState, useEffect } from "react";
import Hero from "./sections/Hero";
import Content from "../../pages/Home/sections/Content";
import { Container, Button } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const Home = () => {
  // Define state for showing/hiding the scroll-to-top icon
  const [showScrollIcon, setShowScrollIcon] = useState(false);

  // Define a function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Use the useEffect hook to listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Show the scroll-to-top icon when the user scrolls down
      if (window.scrollY > 100) {
        setShowScrollIcon(true);
      } else {
        setShowScrollIcon(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the listener when the component unmounts
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
          <p className="intro">
            Welcome to the wonderful world of Complete Homes, where beauty
            abounds. At Complete Homes, we transform engaging and inventive
            amenities into reality. In our communities, everyone enjoys seamless
            access to life's necessities. When it comes to owning your home, we
            make the journey convenient and well-guided.
          </p>
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
