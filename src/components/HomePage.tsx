import { categories } from "@/lib/data/categories";
import { getAllProductImproved } from "@/lib/fetch";
import ProductSlider from "./ui/ProductSlider";
import Carousel from "./ui/Carousel";
import Hero from "./ui/Hero";
import { Suspense } from "react";
import HomeFilter from "./ui/HomeFilter";

export default async function HomePage() {
  const productsByCate = await Promise.all(
    categories.sort(() => Math.random() - 0.5).map((category) => getAllProductImproved({ category: category.params.toString() }))
  );
  const products = await getAllProductImproved({ category: "" })
  const carouselProducts = products.filter((product) => product.rating.rate >= 4 && product.rating.count >= 400).sort(() => Math.random() - 0.5).slice(0, 3)
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <div className=" rounded-[10px] bg-white flex flex-col md:flex-row gap-2 md:gap-4">
      <Suspense fallback={<p>Loading hero...</p>}>
        <Hero/>
      </Suspense>
        <div className="  rounded-[10px]">
          <Carousel products={carouselProducts} />
        </div>
      </div>
     <HomeFilter products={products} />
      <div className="flex flex-col gap-4">
        {productsByCate.map((products, index) => (
          <div key={index} className=" rounded-[10px]">
            <ProductSlider products={products} />
          </div>
        ))}
      </div>
    </div>
  )
}
