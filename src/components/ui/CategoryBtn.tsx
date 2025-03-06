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
    <button className={`flex items-center transition-all hover:tracking-tight`}>
      <Link href={href} >
      <div className='flex gap-2'>
        {isActive ? <IoIosCloseCircle size={25} className='fill-[#06D6A0]' /> : <MdRadioButtonUnchecked size={25} className='fill-[#06D6A0]' />}
        {name}
      </div>
      </Link>
    </button>
  )
}
