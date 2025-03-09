import { getProductById, getSimilarProduct } from "@/lib/fetch";
import Image from "next/image";
import BackBtn from "./ui/BackBtn";
import { ProductByIdProps, ProductType } from "@/types/index";
import ProductCard from "./ui/ProductCard";


export default async function ProductPage({ params }: ProductByIdProps) {
    const detail = await getProductById((await params).id);
    const similarProducts = await getSimilarProduct(detail.category)
    console.log('higi', similarProducts)

    return (
        <div className="p-10 flex flex-col gap-4">
            <div>
                <BackBtn />
            </div>
            <div className="flex gap-4">
                <Image src={detail.image} alt="ProductImage" width={500} height={500} layout="responsive" />
                <div>
                    <h1>{detail.title}</h1>
                    <p>${detail.price}</p>
                    <p>Category: {detail.category}</p>
                </div>
            </div>
            <p className="font-semibold text-2xl">You might also like</p>
            <div className="flex gap-4 text-black">
                {similarProducts.sort(()=> Math.random() - 0.5 ).filter((product:ProductType ) => product.id !== detail.id).slice(0, 4).map((product:ProductType) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}