"use client"

import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import React from 'react'

type SortBtnProps = {
    params: string;
    name: string;
}

export default function SortBtn({ params, name }: SortBtnProps) {
    const searchParams = useSearchParams();
    const sort = searchParams.get('sort');
    const href = sort === name ? '/' : `/?sort=${params}`;
    return (
        <div>
            <Link href={href}>
                <button className='bg-violet-500 text-black'>{name}</button>
            </Link>
        </div>
    )
}
