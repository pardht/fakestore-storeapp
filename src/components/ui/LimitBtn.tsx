"use client"
import Link from 'next/link'
import React from 'react'
import { Option } from '@/types'
import { useSearchParams } from 'next/navigation';

export default function LimitBtn({ params, name }: Option) {
    const searchParams = useSearchParams();
    const cateInUrl = searchParams.get('category');
    const sortInUrl = searchParams.get('sort');
    const limitInUrl = searchParams.get('limit');

    const newSearchParams = new URLSearchParams();
    if (cateInUrl) newSearchParams.set('category', cateInUrl);
    if (sortInUrl) newSearchParams.set('sort', sortInUrl);
    if (params !== limitInUrl) newSearchParams.set('limit', params);
    const href = params === limitInUrl ? `/?${newSearchParams.toString()}` : `/?${newSearchParams.toString()}`;
    return (
        <div>
            <Link href={href}>
                <button className={`p-3 bg-amber-300 text-black ${params === limitInUrl ? 'bg-amber-800' : ''}`}>{name}</button>
            </Link>
        </div>
    )
}
