import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "../assets/UB Logo.png"
import './Header.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar expand="lg" id="navigation">
      <Container id="nav">

        <Navbar.Brand as={Link} to="./" className='navi'>
        <img src={Logo} alt="Logo" className="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <div id="navLinks">
          <Nav className="m-auto ">
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
          </div>

        <div id="social">
        <a href="/">
          <FaFacebookSquare size={24} className='fb' />
        </a>
        <a href="/">
          <FaInstagramSquare size={24} className='ig' />
        </a>
        <a href="/">
          <FaYoutube size={24} className='yt' />
        </a>
        <a href="/">
          <FaTwitterSquare size={24} className='tw' />
        </a>
        </div>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
