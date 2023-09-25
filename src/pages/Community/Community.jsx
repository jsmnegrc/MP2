import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { Container as BootstrapContainer, Button, Row as BootstrapRow, Col as BootstrapCol } from "react-bootstrap";
import Communities from "./Communities";

const Community = ({ showScrollIcon }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BootstrapContainer className="content">
      <div id="content-header">
        <h1 className="header">Choose your Urban Community </h1>
        <div className="flexbox">
          <BootstrapRow className="header-content">
            <BootstrapCol xs={12}>
              Welcome to beautifully Complete homes
            </BootstrapCol>
            <BootstrapCol xs={12}>
              Where engaging & Conceptive amenities are brought to life
            </BootstrapCol>
            <BootstrapCol xs={12}>
              Where everyone is Connected to life’s essentials
            </BootstrapCol>
            <BootstrapCol xs={12}>
              Owning your home is a Convenient & guided journey
            </BootstrapCol>
          </BootstrapRow>
        </div>
      </div>

      <section className="main-container">
        <div className="container">
          <div className="banner">
          <h1>this is where the community will be displayed</h1>
          </div>

        </div>
      </section>

      <Communities />

      <div>
        <h3>Google Map</h3>
      </div>

      <div>
        <Button variant="success" className="Booking-button">
          Book Tripping
        </Button>
      </div>

      <div>
        {showScrollIcon && (
          <a href="#top" onClick={scrollToTop} className="scroll-to-top">
            <BsFillArrowUpSquareFill className="up" />
          </a>
        )}
      </div>
    </BootstrapContainer>
  );
};

export default Community;
