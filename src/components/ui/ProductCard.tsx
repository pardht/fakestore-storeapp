import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ProductCardProps } from '@/types/index';



export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Link href={`product/${product.id}`}>
            <div className='w-full h-full bg-sky-600 rounded-[20px] '>
                <Image src={product.image} alt='ProductImage' width={300} height={100} priority={true}
                    className='w-full h-auto rounded-t-[20px]'
                />
                <div className='p-4'>
                    <div className='text-xl font-bold'>
                        {product.title}
                    </div>
                    <div className='text-lg font-semibold'>
                        ${product.price}
                    </div>
                </div>
            </div>
        </Link>
    )
}
