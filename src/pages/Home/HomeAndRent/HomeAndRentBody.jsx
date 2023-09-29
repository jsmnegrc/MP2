import React from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import {
  Container as BootstrapContainer,
  Button,
  Row as BootstrapRow,
  Col as BootstrapCol,
} from "react-bootstrap";
import "./HomeAndRentBody.css";
import HomeAndRent from "./HomeAndRent";
import "./HomeAndRentBody.css";

const HomeAndRentBody = ({ showScrollIcon }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container">
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
                Where everyone is Connected to lifes essentials
              </BootstrapCol>
              <BootstrapCol xs={12}>
                Buying or renting your home is a Convenient & guided journey
              </BootstrapCol>
            </BootstrapRow>
          </div>
        </div>

        <div className="banner">
          <HomeAndRent className="dbanner" />
        </div>

        <div className="map">
          <div style={{ height: "250px", width: "100%" }}>
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=The%20Exchange%20Building%20-%20Al%20Maryah%20Island%20-%20Abu%20Dhabi%20Global%20Market%20Square%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates+(Urban%20Haven)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">
                Find Population on Map
              </a>
            </iframe>
          </div>
        </div>

        <div>
          {showScrollIcon && (
            <a href="#top" onClick={scrollToTop} className="scroll-to-top">
              <BsFillArrowUpSquareFill className="up" />
            </a>
          )}
        </div>
      </BootstrapContainer>
    </div>
  );
};

export default HomeAndRentBody;
