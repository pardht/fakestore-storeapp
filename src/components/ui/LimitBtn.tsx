"use client"
import Link from 'next/link'
import React from 'react'
import { Option } from '@/types'
import { updateFilterParams, useFilterParams } from '@/lib/filterUtils';
import { MdRadioButtonChecked, MdRadioButtonUnchecked, } from 'react-icons/md';

export default function LimitBtn({ params, name }: Option) {
    const currentParams = useFilterParams()
    const isActive = currentParams.limit === name || (currentParams.limit === undefined && name === 'all')
    const href = updateFilterParams(currentParams, 'limit', params)

    return (
        <div>
            <Link href={href}>
                <button className={`flex items-center gap-[5px] p-[5px]`}>
                    {isActive ? <MdRadioButtonChecked size={25} className='fill-[#06D6A0]' /> : <MdRadioButtonUnchecked size={25} className='fill-[#06D6A0]' />}
                    {name}
                </button>
            </Link>
        </div>
    )
}
