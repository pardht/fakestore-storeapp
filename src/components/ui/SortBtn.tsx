"use client";

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { Option } from '@/types/index';


export default function SortBtn({ params, name }: Option) {
    const searchParams = useSearchParams();
    const sortInURL = searchParams.get('sort');
    const cateInURL = searchParams.get('category');
    const limitInUrl = searchParams.get('limit');
    const searchInUrl = searchParams.get('search');

    const isActive = sortInURL === params || (sortInURL === null && params === 'asc');

    const newSearchParams = new URLSearchParams();
    if (cateInURL) newSearchParams.set('category', cateInURL);
    if (limitInUrl) newSearchParams.set('limit', limitInUrl);
    if (searchInUrl) newSearchParams.set('search', searchInUrl);
    if (params === 'desc') newSearchParams.set('sort', params);
    const href = params === sortInURL ? `/?${newSearchParams.toString()}` : `/?${newSearchParams.toString()}`

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