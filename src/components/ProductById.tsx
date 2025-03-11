import { getProductById, getSimilarProduct } from "@/lib/fetch";
import Image from "next/image";
import BackBtn from "./ui/BackBtn";
import { ProductByIdProps, ProductType } from "@/types/index";
import ProductCard from "./ui/ProductCard";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaStar } from "react-icons/fa";




export default async function ProductPage({ params }: ProductByIdProps) {
    const detail = await getProductById((await params).id);
    const similarProducts = await getSimilarProduct(detail.category)

    return (
        <>
            <div>
                <BackBtn />
            </div>
            <div className="w-full max-w-[1200px] h-auto mx-auto flex flex-col gap-4">
                <div className="md:flex md:gap-16">
                    <div className="w-full max-w-[500px] h-full max-h-[600px] flex justify-center p-10 md:p-20 rounded-[10px] brightness-[0.95] bg-white">
                        <Image src={detail.image} alt="ProductImage" width={200} height={300} layout="responsive"
                            className="max-w-[200px]" />
                    </div>
                    <div className="">
                        <div className="py-4 md:py-0 md:pb-8 flex flex-col gap-4 md:gap-8 border-b-2">
                            <div className="flex flex-col gap-[3px  ] md:gap-2">
                                <p className="font-medium text-lg md:text-2xl">{detail.title}</p>
                                <p className="flex items-center gap-[5px] text-sm md:text-base tracking-wide font-light">
                                    <FaStar size={15} className="md:w-5 md:h-5 text-amber-400" />
                                    {detail.rating.rate}
                                    <span>{`•`}</span>
                                    <span className="opacity-50">{`(${detail.rating.count} rate count)`}</span>
                                </p>
                            </div>
                            <p className="font-semibold text-xl md:text-3xl">${detail.price}</p>
                            <p className="text-sm md:text-base md:tracking-wider ">{detail.description}</p>
                            <p className="text-sm md:text-base opacity-70 tracking-wide">Category / {detail.category}</p>
                        </div>
                        <div className="py-8 flex gap-2">
                            <button className="px-4 md:px-6 py-3 flex items-center gap-[2px] text-sm md:text-base border-[1px] border-black rounded-full text-black font-medium transition-all hover:opacity-70">
                                Favourite
                                <IoMdHeartEmpty size={15} className="md:w-5 md:h-5" />
                            </button>
                            <button className="px-6 md:px-10 py-3 bg-[#6dcfb5] rounded-full text-sm md:text-base text-white font-medium transition-all hover:opacity-70">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full pt-5 md:pt-10">
                <p className="font-semibold md:text-2xl py-2 md:py-4">You might also like</p>
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-black">
                    {similarProducts.sort(() => Math.random() - 0.5).filter((product: ProductType) => product.id !== detail.id).slice(0, 4).map((product: ProductType) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
}