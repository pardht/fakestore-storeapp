export type HomeProps = {
    searchParams: Promise<{category?: string}> & Promise<{sort?: string}>
  };


export type Option = {
    name : string;
    params : string;
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
  };

export type ProductCardProps = {
    product: ProductType
};

export type ProductByIdProps = {
    params: {id: string}
};

export type ProductPageProps = {
    params: Promise<{id: string}>
  }