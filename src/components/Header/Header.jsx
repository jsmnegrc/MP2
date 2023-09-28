import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import Logo from "../../assets/logo_company.png"
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

import "./Header.css";


=======
import Logo from "../../assets/logo_company.png";
import "./Header.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutube,
  FaTwitterSquare,
} from "react-icons/fa";
>>>>>>> 58fa522a76f72767f5a2269e176570cd09d803eb

const Header = () => {
  return (
    <Navbar expand="lg" id="navigation">
      <Container id="nav">
        <Navbar.Brand as={Link} to="./" className="navi">
          <img src={Logo} alt="Logo" className="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="d-flex mx-auto" id="navLinks">
<<<<<<< HEAD
          <Nav className="ml-auto ">
            <Nav.Link as={Link} to="/" className='hme'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className='abt'>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/properties" className='properties'>
              Properties
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className='con'>
              Contact
            </Nav.Link>
          </Nav>
=======
            <Nav className="ml-auto ">
              <Nav.Link as={Link} to="/" className="hme">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="abt">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/property" className="price">
                Properties
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="con">
                Contact
              </Nav.Link>
            </Nav>
>>>>>>> 58fa522a76f72767f5a2269e176570cd09d803eb
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
