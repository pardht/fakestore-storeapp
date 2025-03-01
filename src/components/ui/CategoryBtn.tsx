"use client";
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import { Option } from '@/types/index';

export default function CategoryBtn({ name, params }: Option) {
  const searchParams = useSearchParams();
  const cateInURL = searchParams.get('category');
  const sortInURL = searchParams.get('sort');
  const limitInUrl = searchParams.get('limit');
  const searchInUrl = searchParams.get('search');

  const newSearchParams = new URLSearchParams();
  if (sortInURL) newSearchParams.set('sort', sortInURL);
  if (limitInUrl) newSearchParams.set('limit', limitInUrl);
  if (searchInUrl) newSearchParams.set('search', searchInUrl);
  if (params !== cateInURL) newSearchParams.set('category', params);

  const href = params === cateInURL ? `/?${newSearchParams.toString()}` : `/?${newSearchParams.toString()}`;

  const XLogo = () => {
    return <span className='p-2 bg-red-500 rounded-full text-white'>x</span>
  }

  return (
    <Link href={href} >
      <button className={`rounded-[20px] p-3 bg-blue-200 text-black  hover:bg-blue-500 ${params === cateInURL ? "bg-blue-500" : ""}`}>
        {name}
        {params === cateInURL ? <XLogo /> : ""}
      </button>
    </Link>
  )
}
