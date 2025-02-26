"use client";
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';


type CategoryBtnProps = {
  name: string;
  params: string;
}

export default function CategoryBtn({ name, params }: CategoryBtnProps) {
  const searchParams = useSearchParams();
  const cateInURL = searchParams.get('category');
  const sortInURL = searchParams.get('sort');

  const newSearchParams = new URLSearchParams();
  if (sortInURL) newSearchParams.set('sort', sortInURL);
  if (name !== cateInURL) newSearchParams.set('category', params);

  const href = name === cateInURL ? `/?${newSearchParams.toString()}` : `/?${newSearchParams.toString()}`;

  const XLogo = () => {
    return <span className='p-2 bg-red-500 rounded-full text-white'>x</span>
  }

  return (
    <Link href={href} >
      <button className={`rounded-[20px] p-3 bg-blue-200 text-black  hover:bg-blue-500 ${name === cateInURL ? "bg-blue-500" : ""}`}>
        {name}
        {name === cateInURL ? <XLogo /> : ""}
      </button>
    </Link>
  )
}
