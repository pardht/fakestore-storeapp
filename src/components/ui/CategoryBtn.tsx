"use client";
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';


type CategoryBtnProps = {
  name: string;
  params: string;
}

export default function CategoryBtn({ name, params }: CategoryBtnProps) {
  const getCateInUrl = useSearchParams();
  const cate = getCateInUrl.get('category');
  const href = name === cate ? '/' : `/?category=${params}`;
  const XLogo = () => {
    return <span className='p-2 bg-red-500 rounded-full text-white'>x</span>
  }

  return (
    <Link href={href} >
      <button className={`rounded-[20px] p-3 bg-blue-200 text-black  hover:bg-blue-500 ${name === cate ? "bg-blue-500" : ""}`}>
        {name}
        {name === cate ? <XLogo /> : ""}
      </button>
    </Link>
  )
}
