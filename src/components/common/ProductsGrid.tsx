import { Card, CardContent } from '@/components/ui/card';
import { formatAsDollars, ProductsResponse } from '@/utils';
import { Link, useLoaderData } from 'react-router-dom';
const ProductsGrid = () => {
  const { data: products } = useLoaderData() as ProductsResponse;

  return (
    <div className='grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3 '>
      {products.map((product, index) => {
        const { title, price, image } = product.attributes;
        const dollarsAmount = formatAsDollars(price);

        return (
          <Link to={`/products/${product.id}`} key={product.id}>
            <Card>
              <CardContent className='p-4'>
                <img
                  src={image}
                  alt={title}
                  width={400}
                  height={256}
                  className='object-cover w-full h-64 rounded-md md:h-48'
                  loading={index < 3 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <div className='mt-4 text-center'>
                  <h2 className='text-xl font-semibold capitalize'>{title}</h2>
                  <p className='mt-2 font-light text-primary'>
                    {dollarsAmount}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
