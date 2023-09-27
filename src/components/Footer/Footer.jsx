import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import "../../assets/UB Logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="py-3">
      <Container>
        <Row>
          <Col>
            <h5>Quick Links</h5>
            </Col>
            <Row>
            <nav>
              <ul>
                <li>
                  <Link to="/" className="footer-link">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="footer-link">About</Link>
                </li>
                <li>
                  <Link to="/community" className="footer-link">Community</Link>
                </li>
                <li>
                  <Link to="/pricing" className="footer-link">Pricing</Link>
                </li>
                <li>
                  <Link to="/news" className="footer-link">News</Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-link">Contact</Link>
                </li>
              </ul>
            </nav>
          </Row>
          </Row>

          <Row>
            <Col>
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
          </Col>

          <Col>
          <a href="/" className="d-flex align-items-center">
              <img alt="logo" src="UB Logo.png" width="30px" />
              <span className="ms-3 h5 font-weight-bold">Urban Haven</span>
            </a>
          </Col>

          <Col className="align-self-center">
            <p className="copyright">Copyright © 2023 Urban Haven | All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
