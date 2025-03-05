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

  const handleClear = () => {
    setQuery('');
    router.push('/product');
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    const newUrl = newQuery 
      ? `/product${updateFilterParams(currentParams, 'search', newQuery)}` 
      : '/product';
    router.push(newUrl);
  };

  useEffect(() => {
    setQuery(currentParams.search || '');
  }, [currentParams.search]);

  return (
    <div className='w-full'>
      <div className='md:py-[5px] px-3 flex items-center bg-white shadow-black/10 shadow-sm rounded-[15px] '>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Looking for something specific?"
          className="w-full p-2 rounded-[10px] text-black outline-none placeholder:tracking-wide"
        />
        {query === '' ? <CiSearch size={25} /> : 
        <button onClick={handleClear}>
          <p className='font-medium hover:opacity-70'>Clear</p>
        </button>
       }

      </div>
    </div>
  );
}

