import React, { Suspense } from 'react'
import { getAllCategory } from '@/lib/fetch';
import CategoryBtn from './ui/CategoryBtn';

function categoryLoading() {
    return (
        <div>
            Loading Categories...
        </div>
    )
}

export default async function Category() {
    const category: string[] = await getAllCategory();
    return (
        <div className='p-3 flex flex-col gap-3 '>
            Category :
            <Suspense fallback={categoryLoading()}>
                {category.map((category) => (
                    <CategoryBtn key={category} params={category} name={category} />
                ))}
            </Suspense>
        </div>
    );
}
