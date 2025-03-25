import React from 'react';
import ProductCard from './ui/ProductCard';
import { getAllProductImproved } from '@/lib/fetch';
import { ProductType, } from '@/types/index';
import { FilterParams } from '@/types/index';
import NotFound from './ui/NotFound';

export default async function ProductPage({ category, sort, limit, search }: FilterParams) {
  const products: ProductType[] = await getAllProductImproved({ category, sort, limit, search });

  return (
      <div className="w-full h-full bg-white grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <NotFound prop={search}/>
        )}
      </div>
  );
}