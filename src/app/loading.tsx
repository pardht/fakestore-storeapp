import { LoadCard } from '@/components/ui/LoadProduct'
import React from 'react'
import { AiFillProduct } from 'react-icons/ai'

export default function loading() {
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <div className=" rounded-[10px] bg-white flex flex-col md:flex-row gap-2 md:gap-4">
        <div className="w-full md:h-full p-4 md:p-6 md:px-8 brightness-[0.95] bg-white  rounded-[10px] select-none">
          <p className=" font-semibold md:font-black text-[1.5rem] line-clamp-2 md:text-[3rem] text-transparent ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className=" font-semibold md:font-black text-[1.5rem] md:text-[3rem] text-[#6dcfb5] text-transparent">
            Start browsing!
          </p>
        </div>
        <div className="  rounded-[10px]">
          <div className="md:w-[600px] overflow-clip rounded-[10px] brightness-[0.95] bg-white">
            <div className="">
              <div className="flex">
                <div className='flex-[0_0_100%] '>
                  <div className='w-full h-full  relative group transition-all flex flex-col items-center p-4 md:p-6'>
                    <div className=' h-full flex gap-5'>
                      <div className='flex items-center justify-center h-[15rem]'>
                        <AiFillProduct size={10} className='w-[170px] h-[170px] text-transparent' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#70d6bb] p-4 rounded-[10px] md:flex-row gap-3 ">
        <div className="flex-1 flex items-center">
          <div className="w-full p-2 md:p-6 flex items-center rounded-[15px]">
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className=" rounded-[10px]">
          <div className='relative '>
            <div className='flex flex-col gap-2'>
              <div className='p-5 flex gap-2 bg-zinc-100 rounded-[10px] select-none'>
                <p className="md:text-2xl font-semibold text-transparent">categori</p>
                <p className="text-xs md:text-lg font-medium text-[#6dcfb5] transition-all hover:opacity-70 text-transparent">See More</p>
              </div>
              <div className='overflow-clip relative rounded-[10px]'>
                <div className='md:flex hidden relative'>
                  <div className='flex-[0_0_50%] md:flex-[0_0_25%] px-[4px] md:px-2'>
                    <LoadCard />
                  </div>
                  <div className='flex-[0_0_50%] md:flex-[0_0_25%] px-[4px] md:px-2'>
                    <LoadCard />
                  </div>
                  <div className='flex-[0_0_50%] md:flex-[0_0_25%] px-[4px] md:px-2'>
                    <LoadCard />
                  </div>
                  <div className='flex-[0_0_50%] md:flex-[0_0_25%] px-[4px] md:px-2'>
                    <LoadCard />
                  </div>
                </div>
                <div className='md:hidden flex relative'>
                  <div className='flex-[0_0_50%] md:flex-[0_0_25%] px-[4px] md:px-2'>
                    <LoadCard />
                  </div>
                  <div className='flex-[0_0_50%] md:flex-[0_0_25%] px-[4px] md:px-2'>
                    <LoadCard />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-0 flex gap-[4px] md:gap-3 p-4 transition-all ">
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className=" rounded-[10px]">
          <div className='relative '>
            <div className='flex flex-col gap-2'>
              <div className='p-5 flex gap-2 bg-zinc-100 rounded-[10px] select-none'>
                <p className="md:text-2xl font-semibold text-transparent">categori</p>
                <p className="text-xs md:text-lg font-medium text-[#6dcfb5] transition-all hover:opacity-70 text-transparent">See More</p>
              </div>
              <div className='overflow-clip relative rounded-[10px]'>
                <div className='md:flex hidden relative'>
                  <div className='flex-[0_0_50%] md:flex-[0_0_25%] px-[4px] md:px-2'>
                    <LoadCard />
                  </div>
                  <div className='flex-[0_0_50%] md:flex-[0_0_25%] px-[4px] md:px-2'>
                    <LoadCard />
                  </div>
                  <div className='flex-[0_0_50%] md:flex-[0_0_25%] px-[4px] md:px-2'>
                    <LoadCard />
                  </div>
                  <div className='flex-[0_0_50%] md:flex-[0_0_25%] px-[4px] md:px-2'>
                    <LoadCard />
                  </div>
                </div>
                <div className='md:hidden flex relative'>
                  <div className='flex-[0_0_50%] md:flex-[0_0_25%] px-[4px] md:px-2'>
                    <LoadCard />
                  </div>
                  <div className='flex-[0_0_50%] md:flex-[0_0_25%] px-[4px] md:px-2'>
                    <LoadCard />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-0 flex gap-[4px] md:gap-3 p-4 transition-all ">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
