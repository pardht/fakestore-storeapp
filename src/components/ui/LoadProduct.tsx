import React from 'react'
import { CgSpinner } from 'react-icons/cg'

export default function LoadProduct() {
  return (
    <>
      <div className="w-full h-full bg-white md:hidden grid grid-cols-2 gap-3">
        <LoadCard />
        <LoadCard />
        <LoadCard />
        <LoadCard />
        <LoadCard />
        <LoadCard />
        <LoadCard />
        <LoadCard />
      </div>
      <div className="w-full h-full bg-white hidden md:grid gap-5 grid-cols-3 ">
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
    </>
  )
}

export function LoadCard() {
  return (
    <div className='w-full h-[16rem] md:h-[23rem]  bg-white rounded-[10px] shadow-xl shadow-[#456d62]/10 brightness-[0.95]'>
      <div className='w-full h-full flex flex-col items-center justify-center space-y-10'>
        <CgSpinner className='animate-spin hidden md:block md:w-40 md:h-[13.5rem] text-black/20' />
        <CgSpinner size={100} className='animate-spin md:hidden text-black/20' />
        <div className='w-full flex flex-col justify-start items-start px-3 md:p-5 space-y-2'>
          <div className='w-[50px] p-[5px] md:p-2 bg-zinc-100 rounded-[10px]'></div>
          <div className='w-full max-w-[160px] md:max-w-[300px] p-[5px] md:p-2 bg-zinc-100 rounded-[10px]'></div>
          <div className='w-full max-w-[160px] md:max-w-[250px] p-[5px] md:p-2 bg-zinc-100 rounded-[10px]'></div>
          <div className='w-[80px] md:w-[130px] p-[5px] md:p-2 bg-zinc-100 rounded-[10px]'></div>
        </div>
      </div>
    </div>
  )
}

