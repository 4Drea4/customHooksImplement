//inupts: total items, items perpage, initial page
//Output: currentPage, totalPages/items per page
//startindex, endIndex , items on current page, set page, next page, prev page, can next page, can prev page

import { useState} from 'react';
import type { UsePagination, UsePaginationResults } from '../types';

export function UsePagination({
    items,
    itemsPerPage = 10,
    initialPage = 1,
}) : UsePagination ): UsePaginationResults {
    const totalPages = useMemo (
        () => Math.max(1, Math.ceil(items/ itemsPerPage )),
        [items, itemsPerPage]
    );
}