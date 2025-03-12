"use client"

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import Image from 'next/image';
import { CarouselProps } from '@/types';

export default function Carousel({ products }: CarouselProps) {
    const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false });
    const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay]);

    return (
        <div className=" overflow-clip rounded-[10px] fill-black/20">
            <div className="" ref={emblaRef}>
                <div className="flex ">
                    {products.map((product) => (
                        <div key={product.id} className='flex-[0_0_100%]'>
                            <Link href={`/product/${product.id}`}>
                                <div className='w-full h-auto  relative group transition-all flex flex-col items-center p-6'>
                                    <div className=' h-full flex gap-10'>
                                        <div className='flex items-center'>
                                            <Image src={product.image} alt='ProductImage' width={100} height={100} priority={true}
                                                className='w-20 md:w-[200px] md:max-h-[14rem] mx-auto scale-100 transition-all' />
                                        </div>
                                        <div className='w-full h-full flex  rounded-[10px]'>
                                            <div className='w-full flex flex-col md:gap-2'>
                                                <div className=''>
                                                    <div className=' p-2 flex md:gap-2'>
                                                        <p className={`w-24 md:w-40 text-[10px] md:text-sm font-medium px-[14px] md:px-[20px] shadow-sm shadow-pink-800 text-white bg-gradient-to-r from-pink-600/80 to-red-800 ${product.rating.count >= 400 ? 'block' : 'hidden'}`}>
                                                            Bestseller
                                                        </p>
                                                        <p className={`w-28 md:w-40 text-[10px] md:text-sm font-medium px-[14px] md:px-[20px] shadow-sm shadow-amber-600 text-white bg-gradient-to-r from-amber-400 to-amber-600/80 ${product.rating.rate >= 4 ? 'block' : 'hidden'}`}>
                                                            Top Rated
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className='max-w-[400px] truncate line-clamp-1 text-sm md:text-lg font-medium transition-all whitespace-normal'>
                                                    {product.title}
                                                </p>
                                                <p className='text-sm md:text-2xl font-bold flex items-start gap-[2px]'>
                                                    <span className='text-xs md:text-sm font-normal'>$</span>
                                                    {product.price}
                                                </p>
                                                <p className='max-w-[500px] text-sm md:text-lg font-[350] transition-all line-clamp-4  md:tracking-wide '>
                                                    {product.description}
                                                </p>
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

