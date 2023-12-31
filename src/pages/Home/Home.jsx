import React, { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import HomeAndRentBody from "./HomeAndRent/HomeAndRentBody";
import "./Home.css";

const Home = () => {
  const [showScrollIcon, setShowScrollIcon] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIcon(true);
      } else {
        setShowScrollIcon(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Hero className="hero-component" />
      <HomeAndRentBody />
    </>
  );
};

export default Home;
