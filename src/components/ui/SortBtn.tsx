"use client";

import Link from 'next/link';
import React from 'react';
import { Option } from '@/types/index';
import { updateFilterParams, useFilterParams } from '@/lib/filterUtils';


export default function SortBtn({ params, name }: Option) {
    const currentParams = useFilterParams()
    const isActive = currentParams.sort === params || (currentParams.sort === undefined && params === 'asc')
    const href = updateFilterParams(currentParams, 'sort', isActive ? params : params) || (name === 'all' ? '/' : '')

    return (
        <div>
            <Link href={href}>
                <button
                    className={`p-3 bg-violet-300 ${isActive ? 'bg-violet-600' : ''}`}
                >
                    {name}
                </button>
            </Link>
        </div>
    );
}