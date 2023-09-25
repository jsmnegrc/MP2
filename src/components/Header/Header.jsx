import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
<<<<<<< HEAD:src/components/Header/Header.jsx
import Logo from "../../assets/logo_company.png"
import './Header.css';
=======
import Logo from "../assets/logo_company.png";
import "./Header.css";
>>>>>>> 235653c44d6fbb59325789172fc68c091d9293d2:src/pages/Header.jsx
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar expand="lg" id="navigation">
      <Container id="nav">
<<<<<<< HEAD:src/components/Header/Header.jsx

        <Navbar.Brand as={Link} to="./" className='navi'>
        <img src={Logo} alt="Logo" className="Logo" />
=======
        <Navbar.Brand as={Link} to="./" className="navi">
          <img src={Logo} alt="Logo" className="Logo" />
>>>>>>> 235653c44d6fbb59325789172fc68c091d9293d2:src/pages/Header.jsx
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="d-flex mx-auto" id="navLinks">
<<<<<<< HEAD:src/components/Header/Header.jsx
          <Nav className="ml-auto ">
            <Nav.Link as={Link} to="/" className='hme'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className='abt'>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/community" className='com'>
              Community
            </Nav.Link>
            <Nav.Link as={Link} to="/pricing" className='price'>
              Pricing
            </Nav.Link>
            <Nav.Link as={Link} to="/news" className='news'>
              News
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
              <Nav.Link as={Link} to="/community" className="com">
                Community
              </Nav.Link>
              <Nav.Link as={Link} to="/property" className="prop">
                Properties
              </Nav.Link>
              <Nav.Link as={Link} to="/news" className="news">
                News
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="con">
                Contact
              </Nav.Link>
            </Nav>
>>>>>>> 235653c44d6fbb59325789172fc68c091d9293d2:src/pages/Header.jsx
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
