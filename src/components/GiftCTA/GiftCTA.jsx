import React from 'react';
import { motion } from 'framer-motion';
import './GiftCTA.css';

const WHATSAPP_NUMBER = '+51941319761';
const WHATSAPP_MSG = encodeURIComponent(
  '¡Hola! Vi la colección Sarim Gift y me interesa comprar una prenda para mi nena 🎀'
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const GiftCTA = () => {
  return (
    <section className="gift-cta" id="gift-cta" aria-label="Comprar por WhatsApp">
      <div className="gift-inner">
        {/* Icon */}
        <motion.div
          className="gift-icon-wrap"
          initial={{ scale: 0, rotate: -20 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#E91E8C"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 12 20 22 4 22 4 12" />
            <rect x="2" y="7" width="20" height="5" />
            <line x1="12" y1="22" x2="12" y2="7" />
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
          </svg>
        </motion.div>

        {/* Text */}
        <motion.h2
          className="gift-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          ¿Buscas un regalo especial?
        </motion.h2>

        <motion.p
          className="gift-subtitle"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Te ayudamos a elegir la prenda perfecta<br />
          y la envolvemos con mucho amor.
        </motion.p>

        {/* WhatsApp Button */}
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-btn"
          id="btn-whatsapp"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(37,211,102,0.45)' }}
          whileTap={{ scale: 0.97 }}
        >
          {/* WhatsApp icon SVG */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 32 32"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 2C8.28 2 2 8.28 2 16c0 2.47.66 4.79 1.8 6.8L2 30l7.42-1.77A13.9 13.9 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.4c-2.25 0-4.38-.6-6.22-1.65l-.44-.26-4.6 1.1 1.14-4.46-.29-.46A11.36 11.36 0 014.6 16C4.6 9.71 9.71 4.6 16 4.6S27.4 9.71 27.4 16 22.29 27.4 16 27.4zm6.29-8.5c-.34-.17-2.02-.99-2.33-1.1-.31-.12-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.33-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.7-2.02-1.9-2.36-.2-.34-.02-.52.15-.69.15-.15.34-.39.51-.59.17-.2.23-.34.34-.57.12-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59H9.7c-.2 0-.54.07-.82.37-.28.3-1.08 1.06-1.08 2.58 0 1.53 1.1 3 1.25 3.21.17.2 2.16 3.3 5.24 4.63.73.32 1.3.5 1.75.64.73.23 1.4.2 1.93.12.59-.09 1.82-.74 2.08-1.45.26-.72.26-1.33.18-1.46-.08-.12-.29-.19-.63-.36z" />
          </svg>
          Comprar por WhatsApp
        </motion.a>
      </div>
    </section>
  );
};

export default GiftCTA;
