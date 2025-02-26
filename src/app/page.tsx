import Product from "@/components/Product";

type QueryProps = {
  searchParams: Promise<{category?: string}>;
};

export default async function Home({ searchParams }: QueryProps) {
  const categoryInUrl = (await searchParams).category
  return (
    <div className="flex gap-3">
      <Product category={categoryInUrl} />
    </div>
  );
}
