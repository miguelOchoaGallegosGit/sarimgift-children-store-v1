import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = ({ cartCount = 0 }) => {
  return (
    <motion.header
      className="header"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="header-inner">
        {/* Logo */}
        <a href="#home" className="header-logo" id="header-logo">
          <span className="logo-icon">
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#FFE4F0"/>
              <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
                fontFamily="Pacifico, cursive" fontSize="14" fill="#E91E8C">S</text>
            </svg>
          </span>
          <span className="logo-text">
            <span className="logo-cursive">sarim</span>
            <span className="logo-bold"> Gift</span>
          </span>
        </a>


      </div>
    </motion.header>
  );
};

export default Header;
