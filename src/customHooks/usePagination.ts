//inupts: total items, items perpage, initial page
//Output: currentPage, totalPages/items per page
//startindex, endIndex , items on current page, set page, next page, prev page, can next page, can prev page

import { useMemo, useState} from 'react';
import type { UsePagination, UsePaginationResults } from '../types';

// custom hook , destructuring, 
export function usePagination({
    // default values
    totalItems,
    itemsPerPage = 10,
    initialPage = 1,
  
}) : UsePagination ): UsePaginationResults {
    // setting inputs and outputs
    //how many pages we need and then redo if itemsPerPage or totalItems changes
    const totalPages = useMemo (() => {
        return Math.max(1, Math.ceil(totalItems/ itemsPerPage ));
},
        [totalItems, itemsPerPage]);
