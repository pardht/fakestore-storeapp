import React from 'react'
import Filter from './Filter'

export default function SideBar() {
  return (
    <div className='p-2  w-[400px]  h-auto'>
        <div className='  h-full  bg-pink-400'>this is SideBar
            <Filter/>
        </div>
    </div>
  )
}
