import React from "react";
import Banner2 from "../../../assets/banner2.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="about" className="mb-4">
      <div className="banner-about mb-4">
        <img src={Banner2} />
        <div className="overlay"></div>
        <div className="hero-text mb-5">
          <h1 className="hero-title text-center">About Us</h1>
          <p className="text-center">Welcome to Urban Haven</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
