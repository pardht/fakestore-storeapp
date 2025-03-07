import ProductCard from "@/components/ui/ProductCard";
import { getAllProductImproved } from "@/lib/fetch";
import Link from "next/link";
import { categories } from "@/lib/categories";
import Image from "next/image";

export default async function Home() {
  const electronic = await getAllProductImproved({ category: "electronics", limit: "5" })
  const women = await getAllProductImproved({ category: "women's clothing", limit: "5" })
  return (
    <div className="w-full h-auto flex flex-col gap-5 md:gap-10">
      <div className="flex flex-col gap-2 md:gap-4">
        <div className="">
          <Image src="/assets/tokpedbanner.webp" alt="banner" width={1400} height={500} className="rounded-[10px]" />
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
      <div className="flex flex-col gap-2 p-5 rounded-[10px] shadow-md bg-zinc-200">
        <Link href="/product?category=electronics">
          <div className="py-2 flex items-end gap-2">
            <p className="text-lg md:text-xl font-medium">Electronics</p>
            <p className="text-[#06D6A0] font-medium">See more</p>
          </div>
        </Link>
        <div className="flex gap-3 overflow-x-scroll">
          {electronic.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 p-5 rounded-[10px] shadow-md bg-zinc-200">
        <Link href="/product?category=electronics">
          <div className="py-2 flex items-end gap-2">
            <p className="text-lg md:text-xl font-medium">{`Women's`} Clothing</p>
            <p className="text-[#06D6A0] font-medium">See more</p>
          </div>
        </Link>
        <div className="flex gap-3 overflow-x-scroll">
          {women.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
