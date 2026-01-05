import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  type ProductsResponseWithParams,
  constructPrevorNextParams,
  constructUrlParam,
} from '@/utils';
import { useLoaderData, useLocation } from 'react-router-dom';

const PaginationContainer = () => {
  const { meta } = useLoaderData() as ProductsResponseWithParams;
  const { pageCount, page } = meta.pagination;
  const { search, pathname } = useLocation();
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  if (pageCount < 2) return null;

  /**
   * renderPagination
   * Transforms an array of page numbers into JSX elements for pagination links.
   * Each link highlights the currently active page and includes preserved URL parameters.
   * 
   * @returns {JSX.Element[]} An array of PaginationItem components, each containing a link to a specific page.
   *                          The current page is marked as active with styling.
   */
  const renderPagination = pages.map((pageNumber) => {
    const isActive = pageNumber === page;
    const url = constructUrlParam({ pageNumber, search, pathname });

    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink to={url} isActive={isActive}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  });

  const { prevUrl, nextUrl } = constructPrevorNextParams({
    currentPage: page,
    pageCount,
    search,
    pathname,
  });

  return (
    <Pagination className='mt-8'>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={prevUrl} />
        </PaginationItem>
        {renderPagination}
        <PaginationItem>
          <PaginationNext to={nextUrl} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationContainer;
