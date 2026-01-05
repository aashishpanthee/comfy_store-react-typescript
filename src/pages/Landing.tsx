import { FeaturedProducts, Hero, SEO } from '@/components';
import { axiosInstance } from '@/config';
import { SEO_CONTENT } from '@/constants/seoContent';
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
        title={SEO_CONTENT.home.title}
        description={SEO_CONTENT.home.description}
      />
      <Hero />
      <FeaturedProducts />
    </>
  );
}

export default Landing;
