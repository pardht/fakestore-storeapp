"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
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

  useEffect (()=>{
    handleSearch()
  }, [query])

  console.log('insearch barr', query)
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="p-2 border text-black"
      />
    </div>
  );
}