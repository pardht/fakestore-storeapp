import React from 'react'
import SearchBar from './ui/SearchBar'
import Link from 'next/link'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { LuShoppingCart } from 'react-icons/lu'

export default function TopNavbar() {
  return (
    <div className='w-full'>
      <div className='w-full h-auto flex flex-col rounded-[10px] shadow-md bg-[#70d6bb]'>
        <div className='flex px-3 pt-2 rounded-t-[10px] justify-between items-center  bg-[#6dcfb5]'>
          <Link href="/">
            <p className='text-xl font-semibold tracking-wide text-[#F8FFE5]'>RilStore.</p>
          </Link>
          <Link href="/about">
            <div className='flex items-center text-[#f8ffe5]/60 hover:text-[#F8FFE5] transition-all'>
              <p className='tracking-wide text-sm '>About Rilstore.</p>
              <IoMdInformationCircleOutline className='w-[20px] h-[20px] ' />
            </div>
          </Link>
        </div>
        <div className='flex items-center justify-between gap-3 px-3 pt-2 pb-3'>
          <div className='w-full flex justify-center'>
            <SearchBar />
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
