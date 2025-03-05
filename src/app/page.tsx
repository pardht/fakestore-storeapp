import ProductsCarousel from "@/components/ui/ProductsCarousel";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="w-full h-auto flex flex-col gap-3">
        <ProductsCarousel  />
       <Link href="/product">
       <button>
        to product!!
       </button>
       </Link>
    </div>
  );
}
