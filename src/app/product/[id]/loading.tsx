import BackBtn from '@/components/ui/BackBtn'
import { LoadCard } from '@/components/ui/LoadProduct'
import React from 'react'
import { AiFillProduct } from 'react-icons/ai'

export default function loading() {
  return (
    <div className='w-full h-auto'>
      <div>
        <BackBtn />
      </div>
      <div className="w-full max-w-[1200px] h-auto mx-auto flex flex-col gap-4">
        <div className="md:flex md:gap-16">
          <div className="w-full max-w-[500px] h-full max-h-[600px] flex justify-center p-10 md:p-20 rounded-[10px] brightness-[0.95] bg-white">
            <AiFillProduct size={10} className='w-[170px] h-[170px] text-transparent' />
          </div>
          <div className="w-full">
            <div className="w-full py-4 md:py-0 md:pb-8 flex flex-col gap-4 md:gap-8 border-b-2">
              <div className="flex flex-col gap-[3px  ] md:gap-2">
                <p className="max-w-[500px] p-2 bg-zinc-100 rounded-[10px]"></p>
                <p className="max-w-[150px] p-2 bg-zinc-100 rounded-[10px]"></p>
              </div>
              <p className="max-w-[100px] p-2 bg-zinc-100 rounded-[10px]"></p>
              <div className='flex flex-col gap-2'>
                <p className="p-2 bg-zinc-100 rounded-[10px]"></p>
                <p className="p-2 bg-zinc-100 rounded-[10px]"></p>
                <p className="max-w-[400px] p-2 bg-zinc-100 rounded-[10px]"></p>
              </div>
              <p className="max-w-[150px] p-2 bg-zinc-100 rounded-[10px]"></p>
            </div>
            <div className="py-8 flex gap-2">
              <button className="px-4 md:px-6 py-3 flex items-center gap-[2px] text-sm md:text-base bg-zinc-100 rounded-full text-transparent select-none font-medium">
                Favouriteee
              </button>
              <button className="px-6 md:px-10 py-3 bg-zinc-100 rounded-full text-sm md:text-base text-transparent select-none font-medium">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-5 md:pt-10">
        <p className="font-semibold md:text-2xl py-2 md:py-4">You might also like</p>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-black">
          <LoadCard />
          <LoadCard />
          <LoadCard />
          <LoadCard />
        </div>
      </div>
    </div>
  )
}
