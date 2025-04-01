import ProductById from '@/components/ProductById'
import React from 'react'
import { ProductPageProps } from '@/types/index'

export default async function page({ params }: ProductPageProps) {
  const { id } = await params;
  return (
    <div className='w-full h-auto'>
      <ProductById params={{ id }} />
    </div>
  )
}
