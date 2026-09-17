import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home" aria-label="Sección principal">

      {/* Background images collage */}
      <div className="hero-bg">
        <div className="hero-bg-layer hero-img-main">
          <img src="/images/p01.png" alt="Niña con remera unicornio rosa" className="hero-float-img img-a" />
          <img src="/images/p03.png" alt="Niña con remera unicornio azul" className="hero-float-img img-b" />
          <img src="/images/p06.png" alt="Niña con remera unicornio lila" className="hero-float-img img-c" />
        </div>
        {/* Gradient overlay */}
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        >
          <Sparkles size={14} />
          <span>Nueva Temporada</span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
        >
          Colección Mágica<br />para Niñas
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease: 'easeOut' }}
        >
          Prendas suaves, diseños únicos y<br />
          toda la ternura que ellas merecen.
        </motion.p>

        <motion.a
          href="#favoritos"
          className="hero-cta"
          id="btn-hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Ver colección ✨
        </motion.a>
      </div>

      {/* Decorative dots */}
      <div className="hero-dots">
        <span /><span /><span />
      </div>
    </section>
  );
};

export default Hero;
