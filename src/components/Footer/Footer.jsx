import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer ">
        <div className="footer-grid container">
          <div className="footer-contact">
            <p className="footer-heading">Daniel Tibbotts</p>
            <p>
              <i className="fa-solid fa-location-dot"></i>
              &nbsp;
              <a
                href="https://en.wikipedia.org/wiki/Christchurch"
                target="_blank"
              >
                Christchurch, New Zealand
              </a>
            </p>

            {/* Phone  */}
            <p>
              <i className="fa-solid fa-phone"></i>
              &nbsp;
              <a href="tel:+642109151347">+64 21 0915 1347</a>
            </p>

            {/* Email  */}
            <p>
              <i className="fa-solid fa-at"></i>
              &nbsp;
              <a href="mailto:dan.tibbotts@gmail.com">dan.tibbotts@gmail.com</a>
            </p>

            {/* LinkedIn  */}
            <p>
              <i className="fa-brands fa-linkedin"></i>
              &nbsp;
              <a href="https://linkedin.com/in/dan-tibbotts" target="_blank">
                linkedin.com/in/dan-tibbotts
              </a>
            </p>

            {/* GitHub  */}
            <p>
              <i className="fa-brands fa-github"></i>
              &nbsp;
              <a href="https://github.com/dan-tibbotts" target="_blank">
                github.com/dan-tibbotts
              </a>
            </p>
          </div>
          <div className="footer-site-map">
            <p className="footer-heading">Site Map</p>
            <a href="#">Home</a>
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Me</a>
          </div>
          <div>
            <p className="footer-heading">Business Focused Solutions</p>
            <p className="i">
              Building real world solutions to problems faced by business to
              enable clients and their users to solve real world problems.
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">Copyright &copy; 2022. Daniel Tibbotts</div>
    </footer>
  );
};

export default Footer;
