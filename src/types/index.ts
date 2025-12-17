
export interface UsePagination {
    items: number;
    itemsPerPage?: number;
    startPage?: number;
}

export interface UsePaginationResults{
    currentPage:number;
    totalPages: number;
    startIndex: number;
    endIndex: number;
    itemsOnCurrentPage: number;
    setPage: (pageNumber: number) => void;
    nextPage: () => void;
    prevPage: () => void;
    willNextPage: boolean;
    willPrevPagge: boolean;
}