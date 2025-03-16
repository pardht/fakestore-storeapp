import { getAllProductImproved } from "@/lib/fetch";
import Link from "next/link";
import { categories } from "@/lib/data/categories";
import { heroText } from "@/lib/data/heroText";
import Carousel from "@/components/ui/Carousel";
import ProductSlider from "@/components/ui/ProductSlider";
import { CiSearch } from "react-icons/ci";

async function HomeComponent() {
  const hero = heroText.sort(() => Math.random() - 0.5).slice(0, 1)
  const productsByCate = await Promise.all(
    categories.sort(() => Math.random() - 0.5).map((category) => getAllProductImproved({ category: category.params.toString() }))
  );
  const products = await getAllProductImproved({ category: "" })
  const carouselProducts = products.filter((product) => product.rating.rate >= 4 && product.rating.count >= 400).sort(() => Math.random() - 0.5).slice(0, 3)
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <div className=" rounded-[10px] bg-white flex flex-col md:flex-row gap-2 md:gap-4">
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
        <div className="  rounded-[10px]">
          <Carousel products={carouselProducts} />
        </div>
      </div>
      <div className="flex flex-col bg-[#70d6bb] p-4 rounded-[10px] md:flex-row gap-3">
        <div className="flex-1  flex items-center">
          {products.sort(() => Math.random() - 0.5).slice(0, 1).map((product) => (
            <Link className="w-full  group" key={product.id} href={`/product?search=${product.title}`}>
              <div className='w-full p-2 md:p-3 flex items-center bg-white shadow-black/10 shadow-sm rounded-[15px] '>
                <p className="w-full line-clamp-1 text-sm md:text-base md:font-medium group-hover:translate-x-[4px] transition-all">{product.title}</p>
                <p>
                  <CiSearch size={25} />
                </p>
              </div>
            </Link>
          ))}
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

export default function Home() {
  return (
    <div className="w-full h-auto flex flex-col gap-5 md:gap-10">
      <HomeComponent />
    </div >
  );
}
