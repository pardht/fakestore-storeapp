"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { updateFilterParams, useFilterParams } from '@/lib/filterUtils';
import { CiSearch } from 'react-icons/ci';

export default function SearchBar() {
  const { search } = useFilterParams();
  const currentParams = useFilterParams();
  const router = useRouter();
  const [query, setQuery] = useState(search || '');

  const handleSearch = () => {
    const newUrl = query ? '/product' + updateFilterParams(currentParams, 'search', query) : '/product'
    router.push(newUrl);
  };

  useEffect(() => {
      handleSearch()
  }, [query])
  
  return (
    <div className='md:w-[300px] '>
        <div className='py-[5px] px-3 flex items-center shadow-black/10 shadow-md rounded-[15px] '>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="w-full p-2 rounded-[10px] text-black outline-none"
        />
        <CiSearch size={25} />
      </div>
    </div>
  );
}