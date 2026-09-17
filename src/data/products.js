/**
 * products.js – Adaptador del catálogo de productos de Sarim Gift
 * Lee los datos desde products.json (base de datos local)
 * y los expone con compatibilidad para el frontend.
 */

import rawProducts from './products.json';

/**
 * Mapea los campos del JSON al formato que usa el frontend.
 * - descripcion  → name
 * - precio       → price (string con formato "S/ XX.XX")
 * - color        → array de colores
 * - talla        → array numérico de tallas
 * - cantidad     → cantidad disponible en stock
 */
export const products = rawProducts.map((p) => ({
  ...p,
  name: p.descripcion,
  price: p.precio,
  stock: p.cantidad,
  sizes: (p.talla || []).join(' – '),
}));

export const featuredProducts = products.slice(0, 6);

