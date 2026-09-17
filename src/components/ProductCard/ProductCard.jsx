import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ProductCard.css';

const ProductCard = ({ product, index = 0, onOpenModal }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      className="product-card"
      id={`product-card-${product.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(233,30,140,0.16)' }}
    >
      {/* Image area */}
      <div className="card-img-wrap">
        {imgError ? (
          /* Fallback placeholder */
          <div
            className="card-img-placeholder"
            style={{ background: `linear-gradient(135deg, ${product.colorHex}22, ${product.colorHex}55)` }}
          >
            <span className="placeholder-icon">✨</span>
            <span className="placeholder-name">{product.shortName}</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.descripcion}
            className="card-img"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}

        {/* Size badge */}
        <div className="card-size-badge">{product.sizeLabel}</div>
      </div>

      {/* Card info */}
      <div className="card-info">
        <h3 className="card-name">{product.descripcion}</h3>
        <p className="card-price">{product.precio}</p>
        <motion.button
          className="card-btn"
          id={`btn-detail-${product.id}`}
          onClick={() => onOpenModal && onOpenModal(product)}
          whileHover={{ scale: 1.03, background: 'linear-gradient(135deg, var(--pink) 0%, var(--purple) 100%)' }}
          whileTap={{ scale: 0.97 }}
        >
          Ver Detalle
        </motion.button>
      </div>
    </motion.article>
  );
};

export default ProductCard;

