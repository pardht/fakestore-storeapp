import React from 'react'
import { AiFillProduct } from 'react-icons/ai'

export default function LoadProduct() {
  return (
    <div className="w-full h-full bg-white grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
      <LoadCard />
      <LoadCard />
      <LoadCard />
      <LoadCard />
      <LoadCard />
      <LoadCard />
      <LoadCard />
      <LoadCard />
      <LoadCard />
      <LoadCard />
      <LoadCard />
      <LoadCard />
      <LoadCard />
      <LoadCard />
      <LoadCard />
      <LoadCard />
    </div>
  )
}

function LoadCard() {
  return (
    <div className='w-full h-[16rem] md:h-[23rem]  bg-white rounded-[10px] shadow-xl shadow-[#456d62]/10 brightness-[0.95]'>
      <div className='w-full h-full flex flex-col items-center justify-center space-y-10'>
        <AiFillProduct className='hidden md:block md:w-40 md:h-[13.5rem] fill-black/20' />
        <AiFillProduct size={100} className='md:hidden fill-black/20' />
        {/* <div className='w-40 h-60 rounded-[10px] bg-black/5 p-2'></div> */}
      <div className='w-full flex flex-col justify-start items-start px-3 md:p-5 space-y-2'>
        <div className='w-[160px] md:w-[200px] p-[5px] md:p-2 bg-black/15 rounded-[10px]'></div>
        <div className='w-[80px] md:w-[100px] p-[5px] md:p-2 bg-black/5 rounded-[10px]'></div>
        <div className='w-[50px] md:w-[80px] p-[5px] md:p-2 bg-black/20 rounded-[10px]'></div>
      </div>
      </div>
    </div>
  )
}
