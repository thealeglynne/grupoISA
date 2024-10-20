"use client";

import React, { useState } from 'react';
import '../styles/footer.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <footer className="footer">
      <div>
        h2
      </div>
    </footer>
  );
};

export default Header;
