"use client"
import React from 'react'

export default function BackBtn() { 
    function goBack(){
        window.history.back();
    }
    return (
        <button onClick={goBack}>
            <div className='max-w-[80px] text-center p-2 bg-green-600 text-white font-bold rounded-full'>
                Back
            </div>
        </button>
    )
}
