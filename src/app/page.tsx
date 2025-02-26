import Product from "@/components/Product";

type QueryProps = {
  searchParams: Promise<{category?: string}> & Promise<{sort?: string}>
};

export default async function Home({ searchParams }: QueryProps) {
  const categoryInUrl = (await searchParams).category
  const sortInUrl = (await searchParams).sort
  return (
    <div className="flex gap-3">
      <Product category={categoryInUrl} sort={sortInUrl}/>
    </div>
  );
}
