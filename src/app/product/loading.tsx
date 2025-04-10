import LoadProduct from '@/components/ui/LoadProduct'
import React from 'react'
import { LuSettings2 } from 'react-icons/lu'
import { MdRadioButtonUnchecked } from 'react-icons/md'

export default function loading() {
  return (
    <div className="w-full h-auto flex flex-col gap-3">
      <div className="flex flex-col md:grid md:grid-cols-8 md:gap-4">
        <div className="w-full col-span-2 ">
          <div className='w-auto h-auto'>
            <div className='flex justify-between pb-5'>
              <button className='flex items-center gap-[4px] md:cursor-default bg-white text-lg font-semibold'>
                <p> Filter </p>
                <LuSettings2 />
              </button>
            </div>
            <div className={`transition-all duration-1000 md:h-auto hidden md:block`}>
              <div className='px-4 pb-6 border-b'>
                <p className='pb-5 font-medium'>Category</p>
                <div className='space-y-3 flex flex-col'>
                  <button className={`flex items-center transition-all hover:tracking-tight`}>
                    <div className='flex gap-2'>
                      <MdRadioButtonUnchecked size={25} className='fill-[#06D6A0]' />
                    </div>
                  </button>
                  <button className={`flex items-center transition-all hover:tracking-tight`}>
                    <div className='flex gap-2'>
                      <MdRadioButtonUnchecked size={25} className='fill-[#06D6A0]' />
                    </div>
                  </button>
                  <button className={`flex items-center transition-all hover:tracking-tight`}>
                    <div className='flex gap-2'>
                      <MdRadioButtonUnchecked size={25} className='fill-[#06D6A0]' />
                    </div>
                  </button>
                  <button className={`flex items-center transition-all hover:tracking-tight`}>
                    <div className='flex gap-2'>
                      <MdRadioButtonUnchecked size={25} className='fill-[#06D6A0]' />
                    </div>
                  </button>
                </div>
              </div>
              <div className='px-4 py-6 border-b'>
                <p className='pb-5 font-medium'>Sort by</p>
                <div className='space-y-3 flex flex-col'>
                  <div>
                    <button
                      className={`flex items-center gap-[5px] transition-all hover:tracking-tight`}>
                      <div className='flex gap-2'>
                        <MdRadioButtonUnchecked size={25} className='fill-[#06D6A0]' />
                      </div>
                    </button>
                  </div>
                  <div>
                    <button
                      className={`flex items-center gap-[5px] transition-all hover:tracking-tight`}>
                      <div className='flex gap-2'>
                        <MdRadioButtonUnchecked size={25} className='fill-[#06D6A0]' />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className='px-4 py-6 border-b'>
                <p className='pb-5 font-medium'>Amount Product </p>
                <div className='flex'>
                  <button className={`flex items-center gap-[5px] p-[5px]`}>
                    <MdRadioButtonUnchecked size={25} className='fill-[#06D6A0]' />
                  </button>
                  <button className={`flex items-center gap-[5px] p-[5px]`}>
                    <MdRadioButtonUnchecked size={25} className='fill-[#06D6A0]' />
                  </button>
                  <button className={`flex items-center gap-[5px] p-[5px]`}>
                    <MdRadioButtonUnchecked size={25} className='fill-[#06D6A0]' />
                  </button>
                  <button className={`flex items-center gap-[5px] p-[5px]`}>
                    <MdRadioButtonUnchecked size={25} className='fill-[#06D6A0]' />
                  </button>
                  <button className={`flex items-center gap-[5px] p-[5px]`}>
                    <MdRadioButtonUnchecked size={25} className='fill-[#06D6A0]' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <LoadProduct />
        </div>
      </div>
    </div>
  )
}
