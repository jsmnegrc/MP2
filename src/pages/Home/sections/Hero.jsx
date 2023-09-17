
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import VideoPoster from "../../../assets/video-poster.jpg";
import Video from "../../../assets/Aerial Shot.mp4";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      id="Hero"
      className="d-flex justify-content-center align-items-center"
    >
      <Container>
        <Row id="Hero-Vid">
            <video width="100%" controls poster={VideoPoster} className="v-poster">
                <source src={Video} type="video/mp4" alt="UB aerial" className="Aerial" />
            </video>
        </Row>
          <Row className="align-self-center">
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              dolore laudantium ipsa reprehenderit modi nisi, vitae distinctio
              repellendus voluptas autem.
            </h3>
          </Row>
      </Container>
    </section>
  );
};

export default Hero;