import React from "react";
import Banner from "../../../assets/banner.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="news" className="mb-4">
      <div className="banner mb-4">
        <img src={Banner} />
        <div className="overlay"></div>
        <div className="hero-text mb-5">
          <h1 className="hero-title">Urban Haven</h1>
          <p className="text-center">
            About Us
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
