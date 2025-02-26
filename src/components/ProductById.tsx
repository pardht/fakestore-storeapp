import { getProductById } from "@/lib/fetch";
import Image from "next/image";
import BackBtn from "./ui/BackBtn";

type QueryProps = {
    params: {
        id?: string
    };
};

export default async function ProductPage({ params } : QueryProps) {
    const detail = await getProductById((await params).id);

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
        </div>
    );
}