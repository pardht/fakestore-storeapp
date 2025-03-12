import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ProductCardProps } from '@/types/index';

export default function ProductCard({ product }: ProductCardProps) {
    return (
            <Link href={`/product/${product.id}`}>
                <div className='w-full h-full max-h-[23rem] pb-[7rem] relative bg-white rounded-[10px] shadow-xl shadow-[#456d62]/10 group transition-all brightness-[0.95]'>
                    <div className=' h-full flex'>
                        <div className='w-full pb-2 pt-6 md:py-10 flex items-center'>
                            <Image src={product.image} alt='ProductImage' width={100} height={100} priority={true}
                                className='w-20 md:w-40 md:max-h-[12rem] mx-auto scale-100 transition-all group-hover:scale-[1.03] overflow-visible' />
                        </div>
                        <div className='w-full h-full bottom-0  absolute flex flex-col justify-between rounded-[10px]'>
                            <div className='overflow-clip'>
                                <div className='pb-12 flex flex-col md:gap-2'>
                                    <p className={`w-24 md:w-40 text-[10px] md:text-sm font-medium px-[14px] md:px-[20px] ml-[-15px] md:ml-[-20px] -rotate-[35deg] text-white bg-gradient-to-r from-pink-600/80 to-red-800 ${product.rating.count >= 400 ? 'block' : 'hidden'}`}>
                                        Bestseller
                                    </p>
                                    <p className={`w-28 md:w-40 text-[10px] md:text-sm font-medium px-[14px] md:px-[20px] ml-[-15px] md:ml-[-20px] -rotate-[35deg] text-white bg-gradient-to-r from-amber-400 to-amber-600/80 ${product.rating.rate >= 4 ? 'block' : 'hidden'}`}>
                                        Top Rated
                                    </p>
                                </div>
                            </div>
                            <div className='p-3 md:p-5 flex flex-col md:gap-[4px]'>
                                <div className='text-sm md:text-xl font-bold flex items-start gap-[2px]'>
                                    <span className='text-xs md:text-sm font-normal'>$</span>
                                    {product.price}
                                </div>
                                <div className='text-sm md:text-lg font-base transition-all line-clamp-2   group-hover:whitespace-normal'>
                                    {product.title}
                                </div>
                                <div className='text-sm md:text-base font-light text-zinc-400'>
                                    {product.category}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
    )
}
