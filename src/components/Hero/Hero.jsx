import React from "react";
import HeroImage from "../../assets/hero-image.svg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-grid">
        <div>
          <span id="hero-title">Software Developer</span>
          <span id="hero-subtitle">Web, Desktop, Mobile</span>
          <span id="hero-text">
            Providing real world solutions for real life problems
          </span>
        </div>
        <div className="hero-image-container">
          <img id="hero-image" src={HeroImage} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
