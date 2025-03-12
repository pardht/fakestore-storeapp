"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { EmblaCarouselType } from 'embla-carousel'
import React, { useCallback } from 'react'
import ProductCard from './ProductCard'
import { CarouselProps } from '@/types'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './CarouselArrowButtons'


export default function ProductSlider({ products }: CarouselProps) {
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
    return (
        <div className='py-4 px-4'>
            <div ref={emblaRef} className='overflow-clip relative rounded-[10px]'>
                <div className='flex relative'>
                    {products.map((product) => (
                        <div key={product.id} className='flex-[0_0_25%] px-2'>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

            </div>
            <div className="flex justify-between p-5 transition-all ">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
        </div>
    )
}
