import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo_company.png";
import "./Header.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutube,
  FaTwitterSquare,
} from "react-icons/fa";

const Header = () => {
  return (
    <Navbar expand="lg" id="navigation">
      <Container id="nav">
        <Navbar.Brand as={Link} to="./" className="navi">
          <img src={Logo} alt="Logo" className="Logo1" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="d-flex mx-auto" id="navLinks">
            <Nav className="ml-auto ">
              <Nav.Link as={Link} to="/" className="hme">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="abt">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/property" className="properties">
                Properties
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="con">
                Contact
              </Nav.Link>
            </Nav>
          </div>

          <div id="social">
            <a href="/">
              <FaFacebookSquare className="fb" />
            </a>
            <a href="/">
              <FaInstagramSquare className="ig" />
            </a>
            <a href="/">
              <FaYoutube className="yt" />
            </a>
            <a href="/">
              <FaTwitterSquare className="tw" />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
