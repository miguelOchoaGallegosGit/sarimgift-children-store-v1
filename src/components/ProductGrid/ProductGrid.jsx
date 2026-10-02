import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ProductCard from '../ProductCard/ProductCard';
import ProductModal from '../ProductModal/ProductModal';
import { products } from '../../data/products';
import './ProductGrid.css';

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);


  return (
    <>
      <section className="product-grid-section section-padding" id="favoritos" aria-label="Favoritos del momento">
        {/* Section header */}
        <div className="grid-header">
          <h2 className="grid-title">Favoritos del momento</h2>
        </div>

        {/* Grid – catálogo de productos */}
        <div className="products-grid">
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              onOpenModal={setSelectedProduct}
            />
          ))}
        </div>
      </section>

      {/* Modal portal */}
      {selectedProduct &&
        createPortal(
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />,
          document.body
        )
      }
    </>
  );
};

export default ProductGrid;
