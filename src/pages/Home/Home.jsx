import React, { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
<<<<<<< HEAD
import Community from "./HomeAndRent/HomeAndRentBody";
=======
>>>>>>> 58fa522a76f72767f5a2269e176570cd09d803eb
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
    </>
  );
};

export default Home;
