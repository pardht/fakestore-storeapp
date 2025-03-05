import React from 'react'

type prop= {
    prop?: string
}

export default function NotFound({prop}:prop) {
    return (
        <div className='col-span-full w-full h-screen bg-white flex justify-center items-center p-5 text-center'>
            <p className='md:text-lg'>
                Sorry, we {`couldn't`} find a product that rhymes with {`"${prop}"`}
            </p>
        </div>
    )
}
