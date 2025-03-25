"use client"

import { useEffect, useState } from "react";
import ProductSlider from "./ui/ProductSlider";
import { RandomizedSliderProps } from "@/types";

export default function RandomizedSlider({initialProductsByCate}:RandomizedSliderProps) {
const [productsByCate, setProductsByCate] = useState(initialProductsByCate);
  useEffect(() => {
    const randomized = [...initialProductsByCate].sort(() => Math.random() - 0.5)
    setProductsByCate(randomized);
  },[initialProductsByCate])
  return (
      <div className="flex flex-col gap-4">
        {productsByCate.map((products, index) => (
          <div key={index} className=" rounded-[10px]">
            <ProductSlider products={products} />
          </div>
        ))}
      </div>
  
  )
}
