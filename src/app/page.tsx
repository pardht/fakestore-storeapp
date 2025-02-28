import Product from "@/components/Product";
import SideBar from "@/components/SideBar";
import LoadProduct from "@/components/ui/LoadProduct";
import ProductsCarousel from "@/components/ui/ProductsCarousel";
import { HomeProps } from "@/types";
import { Suspense } from "react";

export default async function Home({ searchParams }: HomeProps) {
  const categoryInUrl = (await searchParams).category
  const sortInUrl = (await searchParams).sort
  const limitInUrl = (await searchParams).limit
  return (
    <div className="flex flex-col gap-3">
        <ProductsCarousel />
      <div className="flex ">
        <SideBar />
        <Suspense fallback={<LoadProduct />}>
          <Product category={categoryInUrl} sort={sortInUrl} limit={limitInUrl} />
        </Suspense>
      </div>
    </div>
  );
}
