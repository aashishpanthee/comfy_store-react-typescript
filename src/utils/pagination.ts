type ConstructUrlParam = {
  pageNumber: number;
  search: string;
  pathname: string;
};

/**
 * constructUrlParam
 *
 * Constructs a URL string with the specified page number while preserving existing
 * query parameters from the current search. Useful for pagination links that need to
 * maintain filters, sorts, and other search criteria while changing pages.
 *
 * @param {ConstructUrlParam} params - The parameters object
 * @param {number} params.pageNumber - The target page number to set in the URL
 * @param {string} params.search - The current query string (e.g., "?sort=name&filter=active")
 * @param {string} params.pathname - The current pathname (e.g., "/products")
 * @returns {string} A complete URL string with the new page parameter and all existing search params
 *                   Example: "/products?sort=name&filter=active&page=2"
 */
export const constructUrlParam = ({ pageNumber, search, pathname }: ConstructUrlParam): string => {
  const searchParams = new URLSearchParams(search);
  searchParams.set('page', pageNumber.toString());
  return `${pathname}?${searchParams.toString()}`;
};

type ConstructPrevorNextParams = {
  currentPage: number;
  pageCount: number;
  search: string;
  pathname: string;
};

/**
 * constructPrevorNextParams
 *
 * Generates URLs for previous and next pagination buttons with circular navigation.
 * When on the last page, the next button links to page 1. When on the first page,
 * the previous button links to the last page. This ensures continuous navigation
 * through paginated content.
 *
 * @param {ConstructPrevorNextParams} params - The parameters object
 * @param {number} params.currentPage - The currently active page number
 * @param {number} params.pageCount - The total number of pages available
 * @param {string} params.search - The current query string to preserve in URLs
 * @param {string} params.pathname - The current pathname
 * @returns {Object} An object containing:
 *                   - prevUrl: URL for the previous page (or last page if on page 1)
 *                   - nextUrl: URL for the next page (or page 1 if on last page)
 *                   Example: { prevUrl: "/products?page=1", nextUrl: "/products?page=3" }
 */
export const constructPrevorNextParams = ({
  currentPage,
  pageCount,
  search,
  pathname,
}: ConstructPrevorNextParams): { prevUrl: string; nextUrl: string } => {
  let prevPage = currentPage - 1;
  if (prevPage < 1) prevPage = pageCount;
  const prevUrl = constructUrlParam({ pageNumber: prevPage, search, pathname });

  let nextPage = currentPage + 1;
  if (nextPage > pageCount) nextPage = 1;
  const nextUrl = constructUrlParam({ pageNumber: nextPage, search, pathname });
  return { prevUrl, nextUrl };
};
