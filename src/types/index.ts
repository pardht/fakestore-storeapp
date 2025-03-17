export type HomeProps = {
  searchParams: Promise<FilterParams>;
};

export type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export interface FilterParams {
  category?: string;
  sort?: string;
  limit?: string;
  search?: string;
}
export interface ProductProps {
  category?: string;
  sort?: string;
  limit?: string;
  search?: string;
}

export interface Option {
  name: string;
  params: string;
}

export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductCardProps {
  product: ProductType;
}

export interface CarouselProps {
  products: ProductType[];
}

export interface HomeFilterProps {
  products: ProductType[];
}

export interface ProductByIdProps {
  params: { id: string };
}
