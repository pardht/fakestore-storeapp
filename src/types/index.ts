export type HomeProps = {
  searchParams: Promise<{ category?: string }> & Promise<{ sort?: string }> & Promise<{ limit?: string }> & Promise<{ search?: string }>
};

export type Option = {
  name: string;
  params: string;
}

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type ProductProps = {
  category?: string;
  sort?: string;
  limit?: string;
  search?: string;
};

export type ProductCardProps = {
  product: ProductType
};

export type ProductByIdProps = {
  params: { id: string }
};

export type ProductPageProps = {
  params: Promise<{ id: string }>
}

export type FilterParams = {
  category?: string;
  sort?: string;
  limit?: string;
  search?: string;
};