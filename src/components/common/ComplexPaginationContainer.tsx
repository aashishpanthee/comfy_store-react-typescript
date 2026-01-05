import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  constructPrevorNextParams,
  constructUrlParam,
  type OrdersResponse,
} from '@/utils';
import { useLoaderData, useLocation } from 'react-router-dom';

/**
 * A sophisticated pagination component that displays page numbers with ellipsis for large page counts.
 * Automatically hides when there's only one page or less.
 * Features:
 * - Shows first page, current page, and last page
 * - Displays ellipsis (...) to indicate skipped pages
 * - Includes Previous and Next navigation buttons
 * - Preserves URL query parameters during navigation
 */
function ComplexPaginationContainer() {
  const { meta } = useLoaderData() as OrdersResponse;
  const { pageCount, page } = meta.pagination;
  const { search, pathname } = useLocation();

  if (pageCount < 2) return null;

  /**
   * Constructs a pagination button/link for a specific page number
   */
  const constructButton = ({
    pageNumber,
    isActive,
  }: {
    pageNumber: number;
    isActive: boolean;
  }): React.ReactNode => {
    const url = constructUrlParam({ pageNumber, search, pathname });
    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink to={url} isActive={isActive}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  };

  /**
   * Constructs an ellipsis (...) element for the pagination
   * Used to indicate skipped page numbers in the pagination sequence
   */
  const constructEllipsis = (key: string): React.ReactNode => {
    return (
      <PaginationItem key={key}>
        <PaginationEllipsis />
      </PaginationItem>
    );
  };

  /**
   * Renders the pagination sequence with smart ellipsis placement
   * Logic:
   * 1. Always shows the first page
   * 2. Shows ellipsis if current page is more than 2 pages away from first
   * 3. Shows current page if it's not the first or last page
   * 4. Shows ellipsis if current page is more than 1 page away from last
   * 5. Always shows the last page
   */
  const renderPagination = () => {
    let pages: React.ReactNode[] = [];
    // first page
    pages.push(constructButton({ pageNumber: 1, isActive: page === 1 }));
    // ellipsis
    if (page > 2) {
      pages.push(constructEllipsis('dots-1'));
    }
    // active page
    if (page !== 1 && page !== pageCount) {
      pages.push(constructButton({ pageNumber: page, isActive: true }));
    }
    // ellipsis
    if (page < pageCount - 1) {
      pages.push(constructEllipsis('dots-2'));
    }
    // last page
    pages.push(
      constructButton({ pageNumber: pageCount, isActive: page === pageCount })
    );
    return pages;
  };
  const { prevUrl, nextUrl } = constructPrevorNextParams({
    currentPage: page,
    pageCount,
    search,
    pathname,
  });
  return (
    <Pagination className='mt-16'>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={prevUrl} />
        </PaginationItem>
        {renderPagination()}
        <PaginationItem>
          <PaginationNext to={nextUrl} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
export default ComplexPaginationContainer;
