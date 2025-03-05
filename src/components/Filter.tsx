"use client"

import React, { Suspense, useState } from 'react'
import CategoryBtn from './ui/CategoryBtn';
import SortBtn from './ui/SortBtn';
import LimitBtn from './ui/LimitBtn';
import { sorts } from '../lib/sorts';
import { categories } from '../lib/categories';
import { limits } from '@/lib/limits';
import { useFilterParams } from '@/lib/filterUtils';
import { LuSettings2 } from 'react-icons/lu';
import ResetBtn from './ui/ResetBtn';


function filterLoading() {
    return (
        <div>
            Loading Categories...
        </div>
    )
}

export default function Filter() {
    const currentParams = useFilterParams();
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className='flex justify-between  p-5'>
                <button onClick={handleOpen} className='flex items-center gap-[4px] bg-white text-lg font-semibold'>
                    <p> Filter </p>
                    <LuSettings2 />
                </button>
                <ResetBtn />
            </div>
            <div className={`px-5 transition-all duration-1000 md:h-auto ${isOpen ? 'h-[600px] ' : 'h-0'}`}>
                <Suspense fallback={filterLoading()}>
                    <div className='pb-6 border-b'>
                        <p className='pb-5 font-medium'>Category {currentParams.category ? <span className='font-light text-zinc-400'>/ {currentParams.category}</span> : ''}</p>
                        <div className='space-y-3 flex flex-col'>
                            {categories.map((category) => (
                                <CategoryBtn key={category.params} params={category.params} name={category.name} />
                            ))}
                        </div>
                    </div>
                    <div className='py-6 border-b'>
                        <p className='pb-5 font-medium'>Sort by {currentParams.sort ? <span className='font-light text-zinc-400'>/ {currentParams.sort}</span> : <span className='font-light text-zinc-400'>/ asc</span>}</p>
                        <div className='space-y-3 flex flex-col'>
                            {sorts.map((sort) => (
                                <SortBtn key={sort.params} params={sort.params} name={sort.name} />
                            ))}
                        </div>
                    </div>
                    <div className='py-6 border-b'>
                        <p className='pb-5 font-medium'>Amount Product {currentParams.limit ? <span className='font-light text-zinc-400'>/ {currentParams.limit}</span> : <span className='font-light text-zinc-400'>/ all</span>}</p>
                        <div className='flex'>
                            {limits.map((limit) => (
                                <LimitBtn key={limit.params} params={limit.params} name={limit.name} />
                            ))}
                        </div>
                    </div>
                </Suspense>
            </div>
        </>
    );
}
