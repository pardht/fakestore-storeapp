"use client"

import { categories } from '@/lib/data/categories'
import { HomeFilterProps, ProductType } from '@/types'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'

export default function HomeFilter({ products }: HomeFilterProps) {
    const initial = products[0]
    const [searchValue, setSearchValue] = useState<ProductType>(initial)

    useEffect(() => {
        const randomized = [...products].sort(() => Math.random() - 0.5)[0]
        setSearchValue(randomized)
    }, [products])
    return (
        <div className="flex flex-col bg-[#70d6bb] p-4 rounded-[10px] md:flex-row gap-3">
            <div className="flex-1 flex items-center">
                <Link className="w-full group" href={`/product?search=${searchValue.title}`}>
                    <div className="w-full p-2 md:p-3 flex items-center bg-white shadow-black/10 shadow-sm rounded-[15px]">
                        <p className="w-full line-clamp-1 text-sm md:text-base md:font-medium group-hover:translate-x-[4px] transition-all">
                            {searchValue.title}
                        </p>
                        <p>
                            <CiSearch size={25} />
                        </p>
                    </div>
                </Link>
            </div>
            <div className="  grid grid-cols-2 gap-2 md:flex md:gap-3 md:justify-end">
                {categories.map((cate) => (
                    <Link className="flex" key={cate.name} href={`/product?category=${cate.params}`}>
                        <div className={`w-full md:w-auto p-3 md:px-10 group  md:hover:px-12 transition-all flex justify-center items-end rounded-[10px] bg-white
              ${cate.params === "electronics" ? "  text-teal-400" :
                                cate.params === "jewelery" ? " text-amber-400" :
                                    cate.params === "men's clothing" ? "text-sky-400" :
                                        cate.params === "women's clothing" ? " text-pink-400" : ''
                            }`}>
                            <p className=" transition-all text-xs md:text-base font-medium group-hover:tracking-wide">{cate.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
