import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FilterSidebar from './components/FilterSidebar';
import ProductGrid from './components/ProductGrid';
import SortSelect from './components/SortSelect';
import Pagination from './components/Pagination';   
import { products as mockProducts } from './db'; 


export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  installments?: string;
  tag?: string;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('mais vendidos');
  const [items, setItems] = useState<Product[]>([]);


  useEffect(() => {
    console.log('Mock:', mockProducts);
    setProducts(mockProducts);
  }, []);

  return (
    <div>
      <Header />
      <div className="container main">
      <FilterSidebar onApply={(filters) => {
  // aqui você faz o filtro: products.filter(p => ...)
}}/>
        <div className="content">
          <div className="toolbar">
            <SortSelect value={sortBy} onChange={setSortBy} />
            <Pagination current={page} total={5} onPageChange={setPage} />
          </div>
          <ProductGrid products={products} />
          <div className="pagination">
            <Pagination current={page} total={5} onPageChange={setPage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;