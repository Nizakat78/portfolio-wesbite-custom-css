import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import '../app/styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-brand" data-aos="zoom-in-up">
          Nizakat Ali
        </div>
        <ul className={'navbar-links ${IsOpenMenu ? "Open" : ""}'} data-aos="zoom-out">
          <li className="navbar-link">
            <a href="#Heros">Home</a>
          </li>
          <li className="navbar-link ">
            <a href="#About">About</a>
          </li>
          <li className="navbar-link">
            <a href="#projects">Projects</a>
          </li>
          <li className="navbar-link">
            <a href="#Skills">Skills</a>
          </li>
          <li className="navbar-link">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>
      {isMenuOpen && (
        <ul className={'navbar-menu ${isMenuOpen ? "Open" : ""}'}>
          <li className="navbar-link">
            <a href="#Heros" onClick={toggleMenu}>Home</a>
          </li>
          <li className="navbar-link">
            <a href="#About" onClick={toggleMenu}>About</a>
          </li>
          <li className="navbar-link">
            <a href="#projects" onClick={toggleMenu}>Projects</a>
          </li>
          <li className="navbar-link">
            <a href="#Skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li className="navbar-link">
            <a href="#Contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
