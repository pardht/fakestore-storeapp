import ProductPage from "@/components/ProductPage";
import SideBar from "@/components/SideBar";
import LoadProduct from "@/components/ui/LoadProduct";
import { HomeProps } from "@/types";
import { Suspense } from "react";

export default async function page({ searchParams }: HomeProps) {
    const categoryInUrl = (await searchParams).category
    const sortInUrl = (await searchParams).sort
    const limitInUrl = (await searchParams).limit
    const searchInUrl = (await searchParams).search
    
    return (
        <div className="w-full h-auto flex flex-col gap-3">
            <div className="flex flex-col md:grid md:grid-cols-8 md:gap-4">
                <div className="w-full col-span-2">
                    <SideBar />
                </div>
                <div className="col-span-6">
                    <Suspense fallback={<LoadProduct />}>
                        <ProductPage category={categoryInUrl} sort={sortInUrl} limit={limitInUrl} search={searchInUrl} />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
