import React from 'react';
import ProductCard from './ui/ProductCard';
import { getAllProductImproved } from '@/lib/fetch';
import { ProductType, } from '@/types/index';
import { ProductProps } from '@/types/index';
import NotFound from './ui/NotFound';

export default async function Product({ category, sort, limit, search }: ProductProps) {
  const products: ProductType[] = await getAllProductImproved({ category, sort, limit, search });

  return (
      <div className="w-full h-auto px-2 bg-white grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <NotFound />
        )}
      </div>
  );
}