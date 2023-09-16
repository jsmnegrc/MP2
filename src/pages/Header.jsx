import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "../assets/UB Logo.png"

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="./">
        <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto ">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/community">
              Community
            </Nav.Link>
            <Nav.Link as={Link} to="/pricing">
              Pricing
            </Nav.Link>
            <Nav.Link as={Link} to="/news">
              News
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Button variant="outline-success">Sign in</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
