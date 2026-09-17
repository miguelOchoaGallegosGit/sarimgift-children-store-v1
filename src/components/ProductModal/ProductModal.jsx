import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import "./ProductModal.css";

const WA_NUMBER = "51999999999"; // Reemplaza con el numero real de WhatsApp

const ProductModal = ({ product, onClose }) => {
  const [imgError, setImgError] = useState(false);

  // Cerrar con Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!product) return null;

  const waMessage = encodeURIComponent(
    `Hola! Me interesa la polo *${product.descripcion}* (${product.precio}). ¿Tienen disponible?`
  );
  const waLink = `https://wa.me/${WA_NUMBER}?text=${waMessage}`;

  return (
    <div
      className="modal-overlay"
      id={`modal-overlay-${product.id}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle de ${product.descripcion}`}
    >
      <div className="modal-panel" id={`modal-panel-${product.id}`}>

        {/* Image */}
        <div className="modal-img-wrap">
          {imgError ? (
            <div
              className="modal-img-placeholder"
              style={{ background: `linear-gradient(135deg,${product.colorHex}22,${product.colorHex}55)` }}
            >
              <span>✨</span>
            </div>
          ) : (
            <img
              src={product.image}
              alt={product.descripcion}
              className="modal-img"
              onError={() => setImgError(true)}
            />
          )}
          <div className="modal-img-fade" />

          {/* Close */}
          <button className="modal-close" onClick={onClose} aria-label="Cerrar" id={`modal-close-${product.id}`}>
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {product.sizeLabel && (
            <span className="modal-size-badge">{product.sizeLabel}</span>
          )}
          <h2 className="modal-name">{product.descripcion}</h2>
          <p className="modal-price">{product.precio}</p>

          {/* Details grid */}
          <div className="modal-details">

            {/* Color */}
            {product.color && product.color.length > 0 && (
              <div className="modal-detail-item">
                <span className="modal-detail-label">Color</span>
                <div className="modal-color-row">
                  {product.colorHex && (
                    <span
                      className="modal-color-dot"
                      style={{ background: product.colorHex }}
                    />
                  )}
                  <span className="modal-detail-value">{product.color.join(", ")}</span>
                </div>
              </div>
            )}

            {/* Estilo */}
            {product.style && (
              <div className="modal-detail-item">
                <span className="modal-detail-label">Estilo</span>
                <span className="modal-detail-value">{product.style}</span>
              </div>
            )}

            {/* Tallas */}
            {product.talla && product.talla.length > 0 && (
              <div className="modal-detail-item full-width">
                <span className="modal-detail-label">Tallas disponibles</span>
                <div className="modal-sizes">
                  {product.talla.map((t) => (
                    <span key={t} className="modal-size-chip">T{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* WhatsApp CTA */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-wa-btn"
            id={`modal-wa-${product.id}`}
          >
            <svg className="modal-wa-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12a11.9 11.9 0 0 0 1.6 6L0 24l6.19-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52ZM12 21.94a9.91 9.91 0 0 1-5.05-1.38l-.36-.22-3.68.96.99-3.6-.23-.37A9.93 9.93 0 1 1 12 21.94Zm5.44-7.42c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.57-.49-.5-.67-.5H6.5c-.2 0-.52.07-.8.38-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.27.49 1.7.63.71.22 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.19-.57-.34Z"/>
            </svg>
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
