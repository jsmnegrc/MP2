import React, { useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import VideoPoster from "../../assets/video-poster.jpg";
import Video from "..//../assets/Aerial Shot.mp4";
import "./Hero.css";
import CountUp from "react-countup";

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

        <div className="container">
  <div className="row">
    <div className="col-12 col-md-4">
      <div className="align-self-center flexCounter stat">
        <span>
          <CountUp start={7000} end={9001} duration={4} />
          <span>+</span>
        </span>
        <br />
        <span>Premium Houses</span>
      </div>
    </div>
    <div className="col-12 col-md-4">
      <div className="align-self-center flexCounter stat">
        <span>
          <CountUp start={1020} end={2089} duration={4} />
          <span>+</span>
        </span>
        <br />
        <span>Happy Customers</span>
      </div>
    </div>
    <div className="col-12 col-md-4">
      <div className="align-self-center flexCounter stat">
        <span>
          <CountUp end={27} />
          <span>+</span>
        </span>
        <br />
        <span>Award Winnings</span>
      </div>
    </div>
  </div>
</div>


      </Container>
    </section>
  );
};

export default Hero;
