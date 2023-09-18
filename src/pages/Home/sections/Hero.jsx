import React, { useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import VideoPoster from "../../../assets/video-poster.jpg";
import Video from "../../../assets/Aerial Shot.mp4";
import "./Hero.css";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {

      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {

          })
          .catch(error => {

          });
      }
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
              autoPlay
              muted
            >
              <source src={Video} type="video/mp4" alt="UB aerial" />
            </video>
          </div>
        </Row>
        <Row className="align-self-center" id="Hero-Text">
          <h1 className="hero-heading">
            Urban Haven
          </h1>
          <h3 className="hero-subheading">
          “Where Dreams Find a Home”
          </h3>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
