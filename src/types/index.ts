export type HomeProps = {
  searchParams: Promise<FilterParams>;
};

export interface FilterParams {
  category?: string;
  sort?: string;
  limit?: string;
  search?: string;
};

export type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export interface Option {
  name: string;
  params: string;
};

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
};

export interface ProductCardProps {
  product: ProductType;
};

export interface ProductsProps {
  products: ProductType[];
};

export interface RandomizedSliderProps {
  initialProductsByCate: ProductType[][];
};



export interface ProductByIdProps {
  params: { id: string };
};
