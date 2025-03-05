"use client";

import Link from 'next/link';
import React from 'react';
import { Option } from '@/types/index';
import { updateFilterParams, useFilterParams } from '@/lib/filterUtils';
import { MdRadioButtonChecked, MdRadioButtonUnchecked,  } from 'react-icons/md';

export default function SortBtn({ params, name }: Option) {
    const currentParams = useFilterParams()
    const isActive = currentParams.sort === params || (currentParams.sort === undefined && params === 'asc')
    const href = updateFilterParams(currentParams, 'sort', isActive ? params : params)

    return (
        <div>
            <Link href={href}>
                <button
                    className={`flex items-center gap-[5px] transition-all hover:tracking-tight`}>
                    {isActive ? <MdRadioButtonChecked size={25} className='fill-[#06D6A0]' /> : <MdRadioButtonUnchecked size={25} className='fill-[#06D6A0]' />}
                    {name}
                </button>
            </Link>
        </div>
    );
}