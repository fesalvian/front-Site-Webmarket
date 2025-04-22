import React from 'react';

const options = ['mais vendidos', 'menor preço', 'maior preço', 'novidades'];
export default function SortSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <select value={value} onChange={e => onChange(e.target.value)}>
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  );
}