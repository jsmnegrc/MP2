import React, { useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import VideoPoster from "../../../assets/video-poster.jpg";
import Video from "../../../assets/Aerial Shot.mp4";
import "./Hero.css";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, []);

  return (
    <section
    id="Hero"
    className="d-flex justify-content-center align-items-center"
  >
    <Container>
      <Row id="Hero-Vid">
        <div className="video-container">
          <video
            ref={videoRef}
            width="100%"
            poster={VideoPoster}
            className="v-poster"
          >
            <source src={Video} type="video/mp4" alt="UB aerial" />
          </video>
        </div>
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