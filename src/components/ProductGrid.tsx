import React from 'react';
import { Product } from '../App';
import ProductCard from './ProductCard';

const ProductGrid: React.FC<{ products: Product[] }> = ({ products }) => (
  <div className="grid">
    {products.map(p => <ProductCard key={p.id} product={p} />)}
  </div>
);

export default ProductGrid;