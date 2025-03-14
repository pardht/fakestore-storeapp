"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { EmblaCarouselType } from 'embla-carousel'
import React, { useCallback, useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { CarouselProps } from '@/types'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './CarouselArrowButtons'
import Link from 'next/link'


export default function ProductSlider({ products, label }: CarouselProps) {
    const [randomizedProducts, setRandomizedProducts] = useState(products)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        const resetOrStop =
            autoplay.options.stopOnInteraction === false
                ? autoplay.reset
                : autoplay.stop

        resetOrStop()
    }, [])
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi, onNavButtonClick)

    useEffect(() => {
        const randomized = products.sort(() => Math.random() - 0.5)
        setRandomizedProducts(randomized)
    }, [products])
    return (
        <div className='relative '>
            <div className='flex flex-col gap-2'>
                <div className='p-5 flex gap-2 bg-zinc-100 rounded-[10px]'>
                    <p className="md:text-2xl font-semibold ">{label}</p>
                    <Link href={`/product?category=${label.toLocaleLowerCase()}`}>
                        <p className="text-xs md:text-lg font-medium text-[#6dcfb5] transition-all hover:opacity-70 ">See More</p>
                    </Link>
                </div>
                <div ref={emblaRef} className='overflow-clip relative rounded-[10px]'>
                    <div className='flex relative'>
                        {randomizedProducts.map((product) => (
                            <div key={product.id} className='flex-[0_0_50%] md:flex-[0_0_25%] px-[4px] md:px-2'>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute right-0 top-0 flex gap-[4px] md:gap-3 p-4 transition-all ">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
        </div>
    )
}
