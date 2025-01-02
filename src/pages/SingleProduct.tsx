import { useState } from 'react';
import { useLoaderData, Link, type LoaderFunction } from 'react-router-dom';
import {
  formatAsDollars,
  PRODUCTS_URL,
  type SingleProductResponse,
} from '@/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { axiosInstance } from '@/config';
import { SelectProductAmount, SelectProductColor } from '@/components';
import { Mode } from '@/components/Single_Product/SelectProductAmount';

export const loader: LoaderFunction = async ({
  params,
}): Promise<SingleProductResponse> => {
  console.log(params);
  const { id } = params;
  const { data } = await axiosInstance.get<SingleProductResponse>(
    `${PRODUCTS_URL}/${id}`
  );
  return { ...data };
};

const SingleProduct = () => {
  const { data: product } = useLoaderData() as SingleProductResponse;
  const {
    image,
    category,
    company,
    description,
    featured,
    price,
    shipping,
    title,
    colors,
  } = product.attributes;
  const dollarsAmount = formatAsDollars(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const addToCart = () => {
    console.log('add to cart');
  };
  return (
    <section>
      <div className='flex gap-x-2 h-6 items-center'>
        <Button asChild variant='link' size='sm'>
          <Link to='/'>Home</Link>
        </Button>
        <Separator orientation='vertical' />
        <Button asChild variant='link' size='sm'>
          <Link to='/products'>Products</Link>
        </Button>
      </div>
      {/* PRODUCT */}
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16'>
        <img
          src={image}
          alt={title}
          className='w-96 h-96 object-cover rounded-lg lg:w-full'
        />
        <div>
          <h1 className='capitalize text-3xl font-bold'>{title}</h1>
          <h4 className='text-xl mt-2'>{company}</h4>
          <p className='mt-3 text-md bg-muted inline-block p-2 rounded-md'>
            {dollarsAmount}
          </p>
          <p className='mt-6 leading-8'>{description}</p>
          <SelectProductColor
            productColor={productColor}
            setProductColor={setProductColor}
            colors={colors}
          />
          <SelectProductAmount
            mode={Mode.SingleProduct}
            amount={amount}
            setAmount={setAmount}
          />
          <Button size='lg' className='mt-10' onClick={addToCart}>
            Add to bag
          </Button>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
