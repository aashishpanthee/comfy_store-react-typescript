type ConstructUrlParam = {
  pageNumber: number;
  search: string;
  pathname: string;
};

export const constructUrlParam = ({
  pageNumber,
  search,
  pathname,
}: ConstructUrlParam): string => {
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
