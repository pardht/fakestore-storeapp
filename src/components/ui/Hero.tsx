"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { heroText } from "@/lib/data/heroText";

export default function Hero() {
  const [hero, setHero] = useState<string[]>()

  useEffect(() => {
    const randomized = heroText.sort(() => Math.random() - 0.5).slice(0, 1)
    setHero(randomized)
  }, [])

  return (
    <div className="w-full md:h-full p-4 md:p-6 md:px-8 brightness-[0.95] bg-white  rounded-[10px] ">
      <p className=" font-semibold md:font-black text-[1.5rem] line-clamp-2 md:text-[3rem]">
        {hero}
      </p>
      <p className=" font-semibold md:font-black text-[1.5rem] md:text-[3rem] text-[#6dcfb5]">
        <Link href="/product">
          Start browsing!
        </Link>
      </p>
    </div>
  )
}
