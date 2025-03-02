"use client"
import Link from 'next/link'
import React from 'react'
import { Option } from '@/types'
import { updateFilterParams, useFilterParams } from '@/lib/filterUtils';

export default function LimitBtn({ params, name }: Option) {
    const currentParams = useFilterParams()
    const isActive = currentParams.limit === name || (currentParams.limit === undefined && name === 'all')
    const href = updateFilterParams(currentParams, 'limit', params)

    return (
        <div>
            <Link href={href}>
                <button className={`p-3 bg-amber-300 text-black ${isActive ? 'bg-amber-800' : ''}`}>{name}</button>
            </Link>
        </div>
    )
}
