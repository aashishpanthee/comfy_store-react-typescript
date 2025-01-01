import { Filters, PaginationContainer, ProductsContainer } from '@/components';
import { axiosInstance } from '@/config';
import { PRODUCTS_URL, ProductsResponse } from '@/utils';
import { LoaderFunction } from 'react-router-dom';

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const productsResponse = await axiosInstance.get<ProductsResponse>(
    PRODUCTS_URL
  );
  return { ...productsResponse.data };
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
