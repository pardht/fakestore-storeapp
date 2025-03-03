import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ProductCardProps } from '@/types/index';

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Link href={`product/${product.id}`}>
            <div className='w-full h-full pb-[7rem] relative bg-white rounded-[20px] shadow-lg group transition hover:brightness-110 hover:scale-[1.02]'>
                <div className='w-full h-[50%] bottom-0 p-5 absolute flex flex-col justify-end rounded-[20px] group-hover:bg-gradient-to-t from-black/20 to-black/0'>
                    <div className='font-light text-zinc-400'>
                        {product.category}
                    </div>
                    <div className='text-xl font-light transition truncate group-hover:line-clamp-2  group-hover:whitespace-normal'>
                        {product.title}
                    </div>
                    <div className='text-lg font-bold'>
                        ${product.price}
                    </div>
                </div>
                <div className='p-10'>
                    <Image src={product.image} alt='ProductImage' width={100} height={100} priority={true}
                        className='w-20 h-20 md:w-40 md:h-40 mx-auto ' />
                </div>
            </div>
        </Link>
    )
}
