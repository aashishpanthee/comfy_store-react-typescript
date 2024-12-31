import { Hero, FeaturedProducts } from '@/components';
import { LoaderFunction } from 'react-router-dom';
import { axiosInstance } from '@/config';
import { FEATURED_PRODUCTS_URL, type ProductsResponse } from '@/utils';

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const featuredProductsResponse = await axiosInstance.get<ProductsResponse>(
    FEATURED_PRODUCTS_URL
  );
  return { ...featuredProductsResponse.data };
};

function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}

export default Landing;
