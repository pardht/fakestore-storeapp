import React, { Suspense } from 'react'
import { getAllCategory } from '@/lib/fetch';
import CategoryBtn from './ui/CategoryBtn';
import SortBtn from './ui/SortBtn';

function categoryLoading() {
    return (
        <div>
            Loading Categories...
        </div>
    )
}

export default async function Category() {
    const categories: string[] = await getAllCategory();
    const sorts = ['asc', 'desc'];
    return (
        <div className='p-3 flex flex-col gap-3 '>
            Category :
            <Suspense fallback={categoryLoading()}>
                {categories.map((category) => (
                    <CategoryBtn key={category} params={category} name={category} />
                ))}
                a
                {sorts.map((sort)=>(
                    <SortBtn key={sort} params={sort} name={sort}/>
                ))}
            </Suspense>
        </div>
    );
}
