import ProductCard from "@/components/ui/ProductCard";
import { getAllProductImproved } from "@/lib/fetch";
import Link from "next/link";
import { categories } from "@/lib/categories";
import Image from "next/image";

export default async function Home() {
  const electronic = await getAllProductImproved({ category: "electronics", limit: "5" })
  const women = await getAllProductImproved({ category: "women's clothing", limit: "5" })
  return (
    <div className="w-full h-auto flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <div className="">
          <Image src="/assets/tokpedbanner.webp" alt="banner" width={1400} height={500} className="rounded-[10px]" />
        </div>
        <div className="flex gap-3">
          {categories.map((cate) => (
            <Link key={cate.name} href={`/product?category=${cate.params}`}>
              <div className={`pt-7 pl-4 pr-16 pb-2 rounded-[10px] hover:opacity-70 transition-all bg-gradient-to-br
              ${cate.params === "electronics" ? "from-green-300 to-teal-500" :
                cate.params === "jewelery" ? "from-yellow-300 to-amber-500" :
                cate.params === "men's clothing" ? "from-blue-300 to-sky-500" :
                cate.params === "women's clothing" ? "from-red-300 to-pink-500" : ''
                }`}>
                <p className="text-white font-medium tracking-wide">{cate.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Link href="/product?category=electronics">
          <div className="py-2 flex items-end gap-2">
            <p className="text-xl font-medium">Electronics</p>
            <p className="text-[#06D6A0] font-medium">See more</p>
          </div>
        </Link>
        <div className="flex gap-3">
          {electronic.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Link href="/product?category=electronics">
          <div className="py-2 flex items-end gap-2">
            <p className="text-xl font-medium">Women's Clothing</p>
            <p className="text-[#06D6A0] font-medium">See more</p>
          </div>
        </Link>
        <div className="flex gap-3">
          {women.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
