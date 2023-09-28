import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import Logo from "../../assets/CompanyLogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="py-3">
      <Container>
        <Row className="tfooter">
          <Col className="col1">
            <h5>Quick Links</h5>
            <nav>
              <ul>
                <li>
                  <Link to="/" className="footer-link">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="footer-link">About</Link>
                </li>
                <li>
                  <Link to="/properties" className="footer-link">Properties</Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-link">Contact</Link>
                </li>
              </ul>
            </nav>
            </Col>

          <Col className="Col2">
            <h5>Address</h5>
            <p className="add">The Exchange Building <br />
                Al Maryah Island - Abu Dhabi Global Market Square - Abu Dhabi <br /> - United Arab Emirates</p>
          </Col>
          
          <Col className="Col3">
            <h5>Contact</h5>
            <p className="con">
               +123456789<br />
               urbanhaven@gmail.com<br />
               Mon - Fri - 9:00 am - 5:00 pm <br />
               Sat - 9:00 am - 12:00 nn
               </p>
          </Col>
          </Row>
          
          <Row className="fbottom">
            <Col>
          <div id="fsocial">
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
          <Link as={Link} to="/" className="flogo">
              <img src={Logo} alt="logo" className="Logo small-logo"/>
            </Link>
          </Col>

          <Col className="align-self-center">
            <p className="copyright">&copy;Urban Haven - All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
