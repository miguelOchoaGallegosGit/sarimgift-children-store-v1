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
        <p className="footer-tagline">Fomentando la alegría en cada niña..</p>



        <p className="footer-copy">© 2026 Sarim Gift. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
