import { FeaturedProducts, Hero, SEO } from '@/components';
import { axiosInstance } from '@/config';
import { FEATURED_PRODUCTS_URL } from '@/constants/url';
import { type ProductsResponse } from '@/utils';
import { LoaderFunction } from 'react-router-dom';

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const featuredProductsResponse = await axiosInstance.get<ProductsResponse>(
    FEATURED_PRODUCTS_URL
  );
  return { ...featuredProductsResponse.data };
};

function Landing() {
  return (
    <>
      <SEO
        title="Home"
        description="Welcome to Comfy Store - Your one-stop shop for comfortable furniture"
      />
      <Hero />
      <FeaturedProducts />
    </>
  );
}

export default Landing;
