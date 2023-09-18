import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
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
          <Col className="align-self-center">
            <p>Copyright © 2023 Urban Haven | All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
