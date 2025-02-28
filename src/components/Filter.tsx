import React, { Suspense } from 'react'
import CategoryBtn from './ui/CategoryBtn';
import SortBtn from './ui/SortBtn';
import { sorts } from '../lib/sorts';
import { categories } from '../lib/categories';
import { limits } from '@/lib/limits';
import LimitBtn from './ui/LimitBtn';

function filterLoading() {
    return (
        <div>
            Loading Categories...
        </div>
    )
}

export default async function Filter() {
    return (
        <div className='p-3 flex flex-col gap-3 '>
            <Suspense fallback={filterLoading()}>
                Category :
                {categories.map((category) => (
                    <CategoryBtn key={category.params} params={category.params} name={category.name} />
                ))}
                Sort :
                {sorts.map((sort) => (
                    <SortBtn key={sort.params} params={sort.params} name={sort.name} />
                ))}
                Limit :
                <div className='flex gap-2'>
                {limits.map((limit)=> (
                    <LimitBtn key={limit.params} params={limit.params} name={limit.name} />
                ))}
                </div>
            </Suspense>
        </div>
    );
}
