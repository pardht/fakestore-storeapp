"use client";

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

type SortBtnProps = {
    params: string;
    name: string;
};

export default function SortBtn({ params, name }: SortBtnProps) {
    const searchParams = useSearchParams();
    const sortInURL = searchParams.get('sort');
    const cateInURL = searchParams.get('category');

    const isActive = sortInURL === name || (sortInURL === null && name === 'asc');

    const newSearchParams = new URLSearchParams();
    if (cateInURL) newSearchParams.set('category', cateInURL);
    if (name === 'desc') newSearchParams.set('sort', params);
    const href = name === 'asc' ? `/?${newSearchParams.toString()}` : name === 'desc' ? `/?${newSearchParams.toString()}` : ''

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