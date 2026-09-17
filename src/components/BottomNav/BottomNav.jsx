import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Grid2x2 } from 'lucide-react';
import './BottomNav.css';

const navItems = [
  { id: 'home', label: 'Home', Icon: Home,    href: '#home' },
  { id: 'shop', label: 'Shop', Icon: Grid2x2, href: '#favoritos' },
];

const BottomNav = () => {
  const [active, setActive] = useState('home');

  return (
    <nav className="bottom-nav" aria-label="Navegación principal" role="navigation">
      <div className="bottom-nav-inner">
        {navItems.map(({ id, label, Icon, href }) => (
          <a
            key={id}
            href={href}
            className={`nav-item ${active === id ? 'active' : ''}`}
            id={`nav-${id}`}
            aria-label={label}
            onClick={() => setActive(id)}
          >
            <motion.div
              className="nav-icon-wrap"
              whileTap={{ scale: 0.85 }}
            >
              {active === id && (
                <motion.div
                  className="nav-active-pill"
                  layoutId="nav-pill"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <Icon
                size={22}
                strokeWidth={active === id ? 2.5 : 1.8}
                className="nav-icon"
              />
            </motion.div>
            <span className="nav-label">{label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
