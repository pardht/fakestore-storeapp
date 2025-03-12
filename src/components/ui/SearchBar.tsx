"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { updateFilterParams, useFilterParams } from '@/lib/filterUtils';
import { CiSearch } from 'react-icons/ci';
import { IoIosCloseCircle } from 'react-icons/io';
import { placeholderValues } from '@/lib/data/placeholder';

export default function SearchBar() {
  const { search } = useFilterParams();
  const currentParams = useFilterParams();
  const router = useRouter();
  const [query, setQuery] = useState(search || '');
  const [placeholder, setPlaceholder] = useState('');

  const handleClear = () => {
    setQuery('');
    router.push(`${updateFilterParams(currentParams, 'search', undefined)}`);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    const newUrl = newQuery 
      ? `/product${updateFilterParams(currentParams, 'search', newQuery)}` 
      : `${updateFilterParams(currentParams, 'search', undefined)}` 
    router.push(newUrl);
  };

  useEffect(() => {
    setQuery(currentParams.search || '');
  }, [currentParams.search]);

  useEffect(()=> {
    const randomized = placeholderValues.sort(() => Math.random() - 0.5).slice(0, 1)[0]
    setPlaceholder(randomized)
  },[currentParams.search])
  console.log('wdajaw', placeholder)

  return (
    <div className='w-full'>
      <div className='md:py-[5px] pr-2 md:px-3 flex items-center bg-white shadow-black/10 shadow-sm rounded-[15px] '>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full p-2 rounded-[10px] text-black outline-none placeholder:tracking-wide placeholder:text-sm md:placeholder:text-base"
        />
        {query === '' ? <CiSearch size={25} /> : 
        <button onClick={handleClear}>
          <p className='hidden md:block font-medium hover:opacity-70'>Clear</p>
          <IoIosCloseCircle size={20} className='md:hidden text-zinc-500'/>
        </button>
       }

      </div>
    </div>
  );
}

