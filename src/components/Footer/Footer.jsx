import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        {/* Logo & tagline */}
        <div className="footer-brand">
          <span className="footer-logo-cursive">sarim</span>
          <span className="footer-logo-bold"> Gift</span>
        </div>
        <p className="footer-tagline">Curating joy for every little girl.</p>



        <p className="footer-copy">© 2026 Sarim Gift. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
