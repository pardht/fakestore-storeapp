import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ProductCardProps } from '@/types/index';

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div>
            <Link href={`product/${product.id}`}>
                <div className='w-full h-full max-h-[23rem] pb-[7rem] relative bg-white rounded-[10px] shadow-xl shadow-[#456d62]/10 group transition-all brightness-[0.95]'>
                    <div className='w-full h-[50%] bottom-0 p-3 md:p-5 absolute flex flex-col justify-end rounded-[10px]'>
                        <div className='md:text-xl font-light transition line-clamp-2 md:line-clamp-none md:truncate md:group-hover:line-clamp-2  group-hover:whitespace-normal'>
                            {product.title}
                        </div>
                        <div className='text-sm md:text-base font-light text-zinc-400'>
                            {product.category}
                        </div>
                        <div className='text-sm md:text-lg font-bold'>
                            ${product.price}
                        </div>
                    </div>
                    <div className='p-6 md:p-10 h-full flex items-center'>
                        <Image src={product.image} alt='ProductImage' width={100} height={100} priority={true}
                            className='w-20 md:w-40 md:max-h-[12rem] mx-auto scale-100 transition-all group-hover:scale-[1.03] overflow-visible' />
                    </div>
                </div>
            </Link>
        </div>
    )
}
