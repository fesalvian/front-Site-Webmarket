import React from 'react';
import './Pagination.css';

export default function Pagination({ current, total, onPageChange }: { current: number; total: number; onPageChange: (n: number) => void; }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div className="pagination">
      {pages.map(n => (
        <button
          key={n}
          className={n === current ? 'active' : ''}
          onClick={() => onPageChange(n)}
        >{n}</button>
      ))}
    </div>
  );
}
