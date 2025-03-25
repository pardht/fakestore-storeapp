"use client"

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import Image from 'next/image';
import { ProductsProps } from '@/types';

export default function Carousel({ products }: ProductsProps) {
    const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false });
    const [emblaRef] = useEmblaCarousel({ loop: true, axis: 'x' }, [autoplay]);

    return (
        <div className="md:w-[600px] overflow-clip rounded-[10px] brightness-[0.95] bg-white">
            <div className="" ref={emblaRef}>
                <div className="flex">
                    {products.map((product) => (
                        <div key={product.id} className='flex-[0_0_100%] '>
                            <Link href={`/product/${product.id}`}>
                                <div className='w-full h-full  relative group transition-all flex flex-col items-center p-4 md:p-6'>
                                    <div className=' h-full flex gap-5'>
                                        <div className='flex items-center justify-center'>
                                            <Image src={product.image} alt='ProductImage' width={100} height={100} priority={true}
                                                className=' md:w-[300px] md:max-h-[15rem] mx-auto scale-100 transition-all' />
                                        </div>
                                        <div className='w-full h-full flex  rounded-[10px]'>
                                            <div className='w-full flex flex-col justify-between p-2 md:gap-2'>
                                                <div className=''>
                                                    <div className=' flex gap-[4px] md:gap-2'>
                                                        <p className={` md:w-40 text-[10px] md:text-sm font-medium px-[14px] md:px-[20px] shadow-sm shadow-pink-800 text-white bg-gradient-to-r from-pink-600/80 to-red-800 ${product.rating.count >= 400 ? 'block' : 'hidden'}`}>
                                                            Bestseller
                                                        </p>
                                                        <p className={` md:w-40 text-[10px] md:text-sm font-medium px-[14px] md:px-[20px] shadow-sm shadow-amber-600 text-white bg-gradient-to-r from-amber-400 to-amber-600/80 ${product.rating.rate >= 4 ? 'block' : 'hidden'}`}>
                                                            Top Rated
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className='text-sm md:text-2xl font-bold flex items-start gap-[2px]'>
                                                        <span className='text-xs md:text-sm font-normal'>$</span>
                                                        {product.price}
                                                    </p>
                                                </div>
                                                <div className=' flex flex-col md:gap-4'>
                                                    <p className='max-w-[400px] truncate line-clamp-1 text-sm md:text-lg font-medium transition-all whitespace-normal'>
                                                        {product.title}
                                                    </p>
                                                    <p className='max-w-[500px] text-sm md:text-base font-[350] transition-all line-clamp-1 md:line-clamp-3  md:tracking-wide '>
                                                        {product.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

