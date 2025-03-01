import React from 'react';
import ProductCard from './ui/ProductCard';
import { getAllProductImproved } from '@/lib/fetch';
import { ProductType, } from '@/types/index';
import { ProductProps } from '@/types/index';

export default async function Product({ category, sort, limit, search }: ProductProps) {
  const products: ProductType[] = await getAllProductImproved({category, sort, limit, search});

  return (
    <div className="w-full h-auto grid grid-cols-4 gap-4">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className='bg-sky-300 text-black'>gak nemu product gw </p> // Fallback UI
      )}
    </div>
  );
}