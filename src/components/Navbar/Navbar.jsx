import { useState } from 'react';
import {React} from 'react'
import "./navbar.css";

const Navbar = () => {
  const [color, setColor] = useState();

  const changeColor = () => {
    if (window.scrollY >= (window.innerHeight - 100)){
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor);

  return (
    <nav className={color ? 'nav-bg' : ''}>
      <div></div>
      <div className='nav-menu'>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact Me</a>
      </div>
    </nav>
  )
}

export default Navbar