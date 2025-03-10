import Link from 'next/link'
import React from 'react'
import { useFilterParams } from '@/lib/filterUtils';
import { RiResetLeftFill } from 'react-icons/ri';

export default function ResetBtn() {
  const currentParams = useFilterParams()
  const hasFilter = currentParams.category || currentParams.sort || currentParams.limit

  const href = currentParams.search ? '?search=' + currentParams.search : '?'
  return (
    <Link href={href}>
      <button className='hover:scale-105 transition-all'>
        {hasFilter ? <RiResetLeftFill size={25} className='fill-[#06D6A0]' /> : null}
      </button>
    </Link>
  )
}
