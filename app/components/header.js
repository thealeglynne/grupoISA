"use client";

import React, { useState } from 'react';
import '../styles/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">grupo ISA</div>
      <nav className={`nav ${isMenuOpen ? 'open' : 'closed'}`}>
       
        <a href="https://www.linkedin.com/in/alexander-quiroga-a992452b4/" target="_blank" rel="noopener noreferrer" className="nav-button">
          linkedin
        </a>

  
        <a href="https://www.instagram.com/__glynne__/" target="_blank" className="nav-button">
          Instagram
        </a>

       
        <a href="https://thealeglynne.github.io/GLYNNE-HOME/" target="_blank" rel="noopener noreferrer" className="nav-button">
          Contact
        </a>
      </nav>

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};

export default Header;
