import React, { useState, useEffect } from 'react';
import { Product } from '../App';
import { products as mockProducts } from '../db';
import './FilterSidebar.css';

interface Filters {
  tags: string[];
  minPrice: number;
  maxPrice: number;
  hasInstallments: boolean;
  search: string;
}

interface FilterSidebarProps {
  onApply: (filters: Filters) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ onApply }) => {
  // Extrai tags únicas do mock
  const tags = Array.from(
    new Set(mockProducts
      .map((p) => p.tag)
      .filter((tag): tag is string => Boolean(tag)))
  );

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(500);
  const [hasInstallments, setHasInstallments] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const applyFilters = () => {
    onApply({ tags: selectedTags, minPrice, maxPrice, hasInstallments, search });
  };

  // Reset filtros
  const clearFilters = () => {
    setSelectedTags([]);
    setMinPrice(0);
    setMaxPrice(500);
    setHasInstallments(false);
    setSearch('');
    onApply({ tags: [], minPrice: 0, maxPrice: 500, hasInstallments: false, search: '' });
  };

  return (
    <aside className="fs-container">
      <h2 className="fs-title">Filtrar Produtos</h2>

      <div className="fs-section">
        <label className="fs-label">Buscar</label>
        <input
          type="text"
          className="fs-input"
          placeholder="Nome do produto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="fs-section">
        <label className="fs-label">Tags</label>
        <div className="fs-tags">
          {tags.map((tag) => (
            <button
              key={tag}
              className={
                selectedTags.includes(tag) ? 'fs-tag fs-tag--active' : 'fs-tag'
              }
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="fs-section">
        <label className="fs-label">Preço (R$)</label>
        <div className="fs-range">
          <input
            type="number"
            className="fs-input fs-input--small"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            placeholder="Min"
          />
          <span className="fs-range-sep">–</span>
          <input
            type="number"
            className="fs-input fs-input--small"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            placeholder="Max"
          />
        </div>
      </div>

      <div className="fs-section">
        <label className="fs-checkbox">
          <input
            type="checkbox"
            checked={hasInstallments}
            onChange={() => setHasInstallments(!hasInstallments)}
          />
          Com parcelamento
        </label>
      </div>

      <div className="fs-actions">
        <button className="fs-btn fs-btn--apply" onClick={applyFilters}>
          Aplicar
        </button>
        <button className="fs-btn fs-btn--clear" onClick={clearFilters}>
          Limpar
        </button>
      </div>
    </aside>
  );
};

export default FilterSidebar;