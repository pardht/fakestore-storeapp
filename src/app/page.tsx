import { getAllProductImproved } from "@/lib/fetch";
import Link from "next/link";
import { categories } from "@/lib/data/categories";
import Carousel from "@/components/ui/Carousel";
import ProductSlider from "@/components/ui/ProductSlider";

export default async function Home() {
  const electronics = await getAllProductImproved({ category: "electronics", limit: "5" })
  const jewelery = await getAllProductImproved({ category: "jewelery", limit: "5" })
  const mens = await getAllProductImproved({ category: "men's clothing", limit: "5" })
  const womens = await getAllProductImproved({ category: "women's clothing", limit: "5" })
  const getFetch = await getAllProductImproved({ category: "" })
  const products = getFetch.filter((product) => product.rating.rate >= 4 && product.rating.count >= 400).sort(() => Math.random() - 0.5).slice(0, 3)
  return (
    <div className="w-full h-auto flex flex-col gap-5 md:gap-10">
      <div className="flex flex-col gap-2 md:gap-4">
        <div className=" rounded-[10px] bg-white flex gap-4">
          <div className="w-full h-full p-6 px-8 brightness-[0.95] bg-white  rounded-[10px] ">
            <p className="font-black text-[3rem] text-black">Welcome to the store {`that’s`} definitely not real</p>
            <p className="font-black text-[3rem] text-[#6dcfb5] underline underline-offset-4">
              <Link href="/product">
                Start browsing!
              </Link>
            </p>
          </div>
          <div className="  rounded-[10px]">
            <Carousel products={products} label="" />
          </div>
        </div>
        <div className="brightness-[0.95] bg-white rounded-[10px] p-4">
          <div className="grid grid-cols-2 gap-2 md:flex md:gap-3 md:justify-end">
            {categories.map((cate) => (
              <div key={cate.name} className={`flex-1 pt-5 pb-2 px-3 md:pt-7 md:pl-4 md:pr-20 md:pb-2 rounded-[10px] hover:opacity-70 transition-all bg-gradient-to-tr
              ${cate.params === "electronics" ? "from-green-500  via-teal-500 to-teal-200" :
                  cate.params === "jewelery" ? "from-yellow-500 via-amber-500 to-amber-200" :
                    cate.params === "men's clothing" ? "from-blue-500 via-sky-500 to-sky-200" :
                      cate.params === "women's clothing" ? "from-red-500 via-pink-500 to-pink-200" : ''
                }`}>
                <Link href={`/product?category=${cate.params}`}>
                  <p className="text-white text-xs md:text-base font-medium md:tracking-wide">{cate.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className=" rounded-[10px] bg-zinc-100">
            <ProductSlider products={mens} label="Men's Clothing" />
        </div>
        <div className=" rounded-[10px] bg-zinc-100">
            <ProductSlider products={womens} label="Women's Clothing" />
        </div>
        <div className=" rounded-[10px] bg-zinc-100">
            <ProductSlider products={electronics} label="Electronics" />
        </div>
        <div className=" rounded-[10px] bg-zinc-100">
            <ProductSlider products={jewelery} label="Jewelery" />
        </div>
      </div>
    </div>
  );
}
