export type SortOption = {
    name: string;
    params: string;
  };
  
  export const sorts: SortOption[] = [
    { name: 'Ascending', params: 'asc' },
    { name: 'Descending', params: 'desc' }
  ];