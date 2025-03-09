import React, { Suspense } from 'react'
import SearchBar from './ui/SearchBar'
import Link from 'next/link'
import { LuShoppingCart } from 'react-icons/lu'

export default function TopNavbar() {
  return (
    <div className='w-full'>
      <div className='w-full h-auto flex flex-col rounded-[10px] shadow-md bg-[#70d6bb]'>
        <div className='flex px-3 pt-2 rounded-t-[10px] justify-between items-center  bg-[#6dcfb5]'>
          <div>
            <Link href="/">
              <p className='text-xl font-semibold tracking-wide text-[#F8FFE5]'>RilStore.</p>
            </Link>
          </div>
          <div className='flex gap-4 md:gap-8'>
            <Link href="/product">
              <div className='flex items-center text-[#f8ffe5]/60 hover:text-[#F8FFE5] transition-all'>
                <p className='tracking-wide text-xs md:text-sm '>Products</p>
              </div>
            </Link>
            <Link href="/about">
              <div className='flex items-center text-[#f8ffe5]/60 hover:text-[#F8FFE5] transition-all'>
                <p className='tracking-wide text-xs md:text-sm '>About Rilstore.</p>
              </div>
            </Link>
          </div>
        </div>
        <div className='flex items-center justify-between gap-3 px-3 pt-2 pb-3'>
          <div className='w-full flex justify-center'>
            <Suspense fallback={<div>Loading...</div>}>
              <SearchBar />
            </Suspense>
          </div>
          <div className='px-2 md:px-5'>
            <button className='hover:opacity-70 transition-all'>
              <LuShoppingCart className='w-[25px] h-[25px] text-white' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
