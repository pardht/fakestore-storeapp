// components/SearchBar.tsx
"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();
  
  const searchParams = useSearchParams();
  const cateInUrl = searchParams.get('category');
  const sortInUrl = searchParams.get('sort');
  const limitInUrl = searchParams.get('limit');

  const newSearchParams = new URLSearchParams();

  if(cateInUrl){
    newSearchParams.set('category', cateInUrl);
  }
  if(sortInUrl){
    newSearchParams.set('sort', sortInUrl);
  }
  if(limitInUrl){
    newSearchParams.set('limit', limitInUrl);
  }

  useEffect(() => {
    setQuery(searchParams.get('search') || '');
  }, []);


  const handleSearch = () => {
    router.push((newSearchParams.toString() !== '' ? `/?${newSearchParams.toString()}&search=${query}` : `/?search=${query}`));
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products (e.g., shirt)"
        className="p-2 border text-black"
      />
      <button onClick={handleSearch} className="p-2 bg-blue-500 text-white">
        Search
      </button>
    </div>
  );
}