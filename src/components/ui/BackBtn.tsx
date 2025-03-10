"use client"
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { IoReturnUpBackOutline } from 'react-icons/io5';

export default function BackBtn() { 
    function goBack(){
        window.history.back();
    }
    return (
        <button onClick={goBack}>
            <div className='flex items-center justify-center gap-[4px] text-center md:p-4 text-black font-bold rounded-full transition-all group'>
                <p className='p-3 rounded-full group-hover:bg-zinc-500/10 transition-all'>
                <IoIosArrowBack  size={20} className=''/>
                </p>
                <p className='font-light group-hover:tracking-wide transition-all'>Back</p>
            </div>
        </button>
    )
}
