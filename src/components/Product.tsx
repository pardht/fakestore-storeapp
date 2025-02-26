import React from 'react';
import ProductCard from './ui/ProductCard';
import { getAllProductImproved } from '@/lib/fetch';

type QueryProps = {
  category?: string;
};

type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default async function Product({ category }: QueryProps) {
  const products: ProductType[] = await getAllProductImproved(category);

  return (
    <div className="w-full h-auto grid grid-cols-4 gap-4">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products available</p> // Fallback UI
      )}
    </div>
  );
}