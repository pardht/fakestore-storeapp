"use client";

import { useSearchParams } from 'next/navigation';

export type FilterParams = {
  category?: string;
  sort?: string;
  limit?: string;
  search?: string;
};

export function useFilterParams(): FilterParams {
  const searchParams = useSearchParams();
  return {
    category: searchParams.get('category') || undefined,
    sort: searchParams.get('sort') || undefined,
    limit: searchParams.get('limit') || undefined,
    search: searchParams.get('search') || undefined,
  };
}

export function updateFilterParams(currentParams: FilterParams, key: keyof FilterParams, value?: string): string {
  const newSearchParams = new URLSearchParams();

  for (const [paramKey, paramValue] of Object.entries(currentParams)) {
    if (paramValue && paramKey !== key) {
      if (paramKey === 'sort' && paramValue === 'asc') continue;
      if (paramKey === 'limit' && paramValue === 'all') continue;
      newSearchParams.set(paramKey, paramValue);
    }
  }

  if (value && !(key === 'sort' && value === 'asc') && !(key === 'limit' && value === 'all')) {
    newSearchParams.set(key, value);
  }

  return newSearchParams.toString() ? `/?${newSearchParams.toString()}` : '/';
}