import React, { Suspense } from 'react'
import CategoryBtn from './ui/CategoryBtn';
import SortBtn from './ui/SortBtn';
import { sorts } from '../lib/sorts';
import { categories } from '../lib/categories';

function categoryLoading() {
    return (
        <div>
            Loading Categories...
        </div>
    )
}

export default async function Category() {

    return (
        <div className='p-3 flex flex-col gap-3 '>
            <Suspense fallback={categoryLoading()}>
                Category :
                {categories.map((category) => (
                    <CategoryBtn key={category.params} params={category.params} name={category.name} />
                ))}
                Sort :
                {sorts.map((sort) => (
                    <SortBtn key={sort.params} params={sort.params} name={sort.name} />
                ))}
            </Suspense>
        </div>
    );
}
