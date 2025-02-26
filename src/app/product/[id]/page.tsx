import ProductById from '@/components/ProductById'
import React from 'react'

type Params = {
  id? : string
}

type QueryProps = {
  params: Promise<Params>
}

export default async function page({ params }: QueryProps) {
  const {id} = await params;
  return (
    <div>
      <ProductById params={{id}} />
    </div>
  )
}
