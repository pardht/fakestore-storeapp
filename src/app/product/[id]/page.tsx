import ProductById from '@/components/ProductById'
import React from 'react'

type QueryProps = {
  params: {
    id?: string
  };
}

export default function page({ params }: QueryProps) {
  return (
    <div>
      <ProductById params={params} />
    </div>
  )
}
