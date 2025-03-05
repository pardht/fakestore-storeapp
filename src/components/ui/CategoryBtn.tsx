"use client";
import Link from 'next/link'
import { Option } from '@/types/index';
import { useFilterParams, updateFilterParams } from '@/lib/filterUtils';
import { MdRadioButtonUnchecked } from 'react-icons/md';
import { IoIosCloseCircle } from 'react-icons/io';

export default function CategoryBtn({ name, params }: Option) {
  const currentParams = useFilterParams();
  const isActive = currentParams.category === params;
  const href = updateFilterParams(currentParams, 'category', isActive ? undefined : params);

  return (
    <Link href={href} >
      <button className={`flex items-center gap-[5px] transition-all hover:tracking-tight`}>
        {isActive ? <IoIosCloseCircle size={25} className='fill-[#06D6A0]'/> : <MdRadioButtonUnchecked size={25} className='fill-[#06D6A0]'/>}
        {name}
      </button>
    </Link>
  )
}
