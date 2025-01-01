import { LoaderFunction } from 'react-router-dom';
import { Filters, PaginationContainer, ProductsContainer } from '@/components';
import { axiosInstance } from '@/config';
import {
  PRODUCTS_URL,
  type ProductsResponse,
  type ProductsResponseWithParams,
} from '@/utils';

export const loader: LoaderFunction = async ({
  request,
}): Promise<ProductsResponseWithParams> => {
  // get search params
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const productsResponse = await axiosInstance.get<ProductsResponse>(
    PRODUCTS_URL,
    { params }
  );
  return { ...productsResponse.data, params };
};

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}

export default Products;
