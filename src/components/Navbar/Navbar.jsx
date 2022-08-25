import { useState } from "react";
import { React } from "react";
import "./navbar.css";

const Navbar = () => {
  const [color, setColor] = useState();

  const changeColor = () => {
    if (window.scrollY >= window.innerHeight - 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav className={color ? "nav-bg" : ""}>
      <div className="nav-menu">
        
        <a href="#" className="nav-menu-item">
          <i class="fa-solid fa-house"></i>
          <span>Home</span>
        </a>

        <a className="nav-menu-item" href="#about">
          <i class="fa-solid fa-user"></i>
          <span>About</span>
        </a>

        <a href="#projects" className="nav-menu-item">
          <i class="fa-solid fa-tablet-button"></i>
          <span>Projects</span>
        </a>

        <a href="#contact" className="nav-menu-item">
          <i class="fa-solid fa-address-card"></i>
          <span>Contact</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
