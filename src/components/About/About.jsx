import React from 'react';
import "./about.css";
import Me from "../../assets/me.svg";

const About = () => {
  return (
    <section id="about">
      <div className="about-grid">
        <div className='panel-1'>
          <h1>About Me</h1>
          <p className="sub-heading">
            My name is Daniel, I'm a software developer based in Christchurch,
            New Zealand.
          </p>
          <p>
            I am currently in my final year of studying a Bachelor of IT
            (majoring in software development). I have experience in the
            construction industry and general business management, and apply
            these skills to build applications that benefit both the clients and
            the end user.
          </p>
          <a href="#contact" className='btn btn-primary mt2'>Let's Talk!</a>
        </div>
        <div className='panel-2'>
          <img src={Me} className="about-img"/>
        </div>
      </div>
    </section>
  );
}

export default About