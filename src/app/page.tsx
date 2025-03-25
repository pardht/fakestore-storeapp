import RandomizedSlider from "@/components/RandomizedSlider";
import Carousel from "@/components/ui/Carousel";
import Hero from "@/components/ui/Hero";
import HomeFilter from "@/components/ui/HomeFilter";
import { categories } from "@/lib/data/categories";
import { getAllProductImproved } from "@/lib/fetch";
import { Suspense } from "react";

export default async function Home() {
  const productsByCate = await Promise.all(
    categories.map((category) => getAllProductImproved({ category: category.params.toString() }))
  );
  const products = await getAllProductImproved({ category: "" })
  const carouselProducts = products.filter((product) => product.rating.rate >= 4 && product.rating.count >= 400).slice(0, 3)
  return (
    <div className="w-full flex flex-col gap-2 md:gap-4">
      <div className=" rounded-[10px] bg-white flex flex-col md:flex-row gap-2 md:gap-4">
        <Suspense fallback={<p>Loading hero...</p>}>
          <Hero />
        </Suspense>
        <div className="  rounded-[10px]">
          <Carousel products={carouselProducts} />
        </div>
      </div>
      <HomeFilter products={products} />
      <RandomizedSlider initialProductsByCate={productsByCate} />
    </div>
  );
}
