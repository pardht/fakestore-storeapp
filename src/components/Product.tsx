import React from 'react';
import ProductCard from './ui/ProductCard';
import { getAllProductImproved } from '@/lib/fetch';
import { ProductType, ProductProps } from '@/types/index';

export default async function Product({ category, sort }: ProductProps) {
  const products: ProductType[] = await getAllProductImproved(category, sort);

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