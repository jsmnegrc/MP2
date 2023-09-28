import React from "react";
import Banner from "../../../../assets/banner.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="news" className="mb-4">
      <div className="banner-property mb-4">
        <img src={Banner} />
        <div className="overlay"></div>
        <div className="hero-text mb-5">
          <h1 className="hero-title">Urban Haven Properties</h1>
          <p className="text-center">
            Discover Your Oasis in the Heart of the City
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
