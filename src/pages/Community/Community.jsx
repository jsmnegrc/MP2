import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { Container as BootstrapContainer, Button, Row as BootstrapRow, Col as BootstrapCol } from "react-bootstrap";
import Communities from "./Communities";
import "./Community.css";
import GoogleMap from "../../components/GoogleMap"

const Community = ({ showScrollIcon }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BootstrapContainer className="content">
      <div id="content-header">
        <h1 className="header">Choose your Urban Community</h1>
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

      <div className="banner">
        <Communities className="dbanner" />
      </div>

      <div className="map">
        {/* Insert the complete iframe code here */}
        <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=The%20Exchange%20Building%20-%20Al%20Maryah%20Island%20-%20Abu%20Dhabi%20Global%20Market%20Square%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates+(Urban%20Haven)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">Find Population on Map</a>
          </iframe>
        </div>
        {/* End of iframe code */}
        <GoogleMap />
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
