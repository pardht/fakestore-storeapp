import React from 'react'
import { getAllCategory } from '@/lib/fetch';
import CategoryBtn from './ui/CategoryBtn';

export default async function Category( ) {
    const category: string[] = await getAllCategory();
   
    // const category = ['electronics', 'jewelery',"men's clothing","women's clothing"]
    return (
        <div className='p-3 flex flex-col gap-3 '>
            Category :
                {category.map((category) => (
                    <CategoryBtn key={category} params={category} name={category}  />
                ))}
        </div>
    );
}
