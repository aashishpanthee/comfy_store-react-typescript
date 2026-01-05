import { Filters, PaginationContainer, ProductsContainer, SEO } from '@/components';
import { axiosInstance } from '@/config';
import { SEO_CONTENT } from '@/constants/seoContent';
import { PRODUCTS_URL } from '@/constants/url';
import {
  type ProductsResponse,
  type ProductsResponseWithParams,
} from '@/utils';
import { LoaderFunction } from 'react-router-dom';

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
      <SEO
        title={SEO_CONTENT.products.title}
        description={SEO_CONTENT.products.description}
      />
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}

export default Products;
