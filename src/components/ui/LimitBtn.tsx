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
    const searchInUrl = searchParams.get('search');

    const isActive = params === limitInUrl || (limitInUrl === null && params === 'all');

    const newSearchParams = new URLSearchParams();
    if (cateInUrl) newSearchParams.set('category', cateInUrl);
    if (sortInUrl) newSearchParams.set('sort', sortInUrl);
    if (searchInUrl) newSearchParams.set('search', searchInUrl);
    if (params !== 'all') newSearchParams.set('limit', params);
    if (params === 'all') newSearchParams.delete('limit');

    const href = params === limitInUrl ? `/?${newSearchParams.toString()}` : `/?${newSearchParams.toString()}`;
    return (
        <div>
            <Link href={href}>
                <button className={`p-3 bg-amber-300 text-black ${isActive ? 'bg-amber-800' : ''}`}>{name}</button>
            </Link>
        </div>
    )
}
