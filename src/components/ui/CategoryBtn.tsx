"use client";
import Link from 'next/link'
import { Option } from '@/types/index';
import { useFilterParams, updateFilterParams } from '@/lib/filterUtils';

export default function CategoryBtn({ name, params }: Option) {
  const currentParams = useFilterParams();
  const isActive = currentParams.category === name;
  const href = updateFilterParams(currentParams, 'category', isActive ? undefined : params);

  const XLogo = () => {
    return <span className='p-2 bg-red-500 rounded-full text-white'>x</span>
  }

  return (
    <Link href={href} >
      <button className={`rounded-[20px] p-3 bg-blue-200 text-black  hover:bg-blue-500 ${params === currentParams.category ? "bg-blue-500" : ""}`}>
        {name}
        {params === currentParams.category ? <XLogo /> : ""}
      </button>
    </Link>
  )
}
