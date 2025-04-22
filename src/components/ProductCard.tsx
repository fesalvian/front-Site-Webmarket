import React from 'react';
import { Product } from '../App';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="card">
    {product.tag}
    <img src={product.image} alt={product.name} />
    <div className="info">
      <div className="title">{product.name}</div>
      <div className="price">R$ {product.price.toFixed(2)}</div>
      {product.oldPrice && <div className="old-price">R$ {product.oldPrice.toFixed(2)}</div>}
      {product.installments && <div className="installments">{product.installments}</div>}
      <button className="button">Adicionar à sacola</button>
    </div>
  </div>
);

export default ProductCard;