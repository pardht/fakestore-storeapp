"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import { updateFilterParams, useFilterParams } from '@/lib/filterUtils';

export default function SearchBar() {
  const { search } = useFilterParams();
  const currentParams = useFilterParams();
  const router = useRouter();
  const [query, setQuery] = useState(search || '');

  const handleSearch = () => {
    const newUrl = updateFilterParams(currentParams, 'search', query);
    router.push(newUrl);
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