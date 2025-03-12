import { getAllProductImproved } from "@/lib/fetch";
import Link from "next/link";
import { categories } from "@/lib/data/categories";
import Carousel from "@/components/ui/Carousel";
import ProductSlider from "@/components/ui/ProductSlider";

export default async function Home() {
  const electronics = await getAllProductImproved({ category: "electronics", limit: "5" })
  const getFetch = await getAllProductImproved({ category: "" })
  const products = getFetch.filter((product) => product.rating.rate >= 4 && product.rating.count >= 400).sort(() => Math.random() - 0.5).slice(0, 3)
  return (
    <div className="w-full h-auto flex flex-col gap-5 md:gap-10">
      <div className="flex flex-col gap-2 md:gap-4">
        <div className="rounded-[10px] brightness-[0.95] bg-white flex">
          <Carousel products={products}/>
        </div>
        <div className="grid grid-cols-2 gap-2 md:flex md:gap-3">
          {categories.map((cate) => (
            <Link key={cate.name} href={`/product?category=${cate.params}`}>
              <div className={`pt-5 pb-2 px-3 md:pt-7 md:pl-4 md:pr-16 md:pb-2 rounded-[10px] hover:opacity-70 transition-all bg-gradient-to-br
              ${cate.params === "electronics" ? "from-green-300 to-teal-500" :
                  cate.params === "jewelery" ? "from-yellow-300 to-amber-500" :
                    cate.params === "men's clothing" ? "from-blue-300 to-sky-500" :
                      cate.params === "women's clothing" ? "from-red-300 to-pink-500" : ''
                }`}>
                <p className="text-white text-xs md:text-base font-medium md:tracking-wide">{cate.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 rounded-[10px] shadow-md bg-zinc-200">
       <ProductSlider products={electronics}/>
      </div>
    </div>
  );
}
