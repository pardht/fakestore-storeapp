import Product from "@/components/Product";
import SideBar from "@/components/SideBar";
import LoadProduct from "@/components/ui/LoadProduct";
import ProductsCarousel from "@/components/ui/ProductsCarousel";
import SearchBar from "@/components/ui/SearchBar";
import { HomeProps } from "@/types";
import { Suspense } from "react";

export default async function Home({ searchParams }: HomeProps) {
  const categoryInUrl = (await searchParams).category
  const sortInUrl = (await searchParams).sort
  const limitInUrl = (await searchParams).limit
  const searchInUrl = (await searchParams).search
  console.log('in page', searchInUrl)
  return (
    <div className="w-full h-auto flex flex-col gap-3">
        <ProductsCarousel />
        <SearchBar/>
      <div className="flex flex-col md:flex-row">
        <SideBar/>
        <Suspense fallback={<LoadProduct />}>
          <Product category={categoryInUrl} sort={sortInUrl} limit={limitInUrl} search={searchInUrl} />
        </Suspense>
      </div>
    </div>
  );
}
