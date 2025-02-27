import Product from "@/components/Product";
import { HomeProps } from "@/types";

export default async function Home({ searchParams }: HomeProps) {
  const categoryInUrl = (await searchParams).category
  const sortInUrl = (await searchParams).sort
  const limitInUrl = (await searchParams).limit
  return (
    <div className="flex gap-3">
      <Product category={categoryInUrl} sort={sortInUrl} limit={limitInUrl}/>
    </div>
  );
}
