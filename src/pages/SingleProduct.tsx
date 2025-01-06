import { useState } from 'react';
import { useLoaderData, Link, type LoaderFunction } from 'react-router-dom';
import {
  formatAsDollars,
  PRODUCTS_URL,
  type SingleProductResponse,
  type CartItem,
} from '@/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { axiosInstance } from '@/config';
import { SelectProductAmount, SelectProductColor } from '@/components';
import { Mode } from '@/components/common/SelectProductAmount';
import { useAppDispatch } from '@/redux-store/hooks';
import { addItems } from '@/redux-store/cart/cartSlice';

export const loader: LoaderFunction = async ({
  params,
}): Promise<SingleProductResponse> => {
  const { id } = params;
  const { data } = await axiosInstance.get<SingleProductResponse>(
    `${PRODUCTS_URL}/${id}`
  );
  return { ...data };
};

const SingleProduct = () => {
  const { data: product } = useLoaderData() as SingleProductResponse;
  const dispatch = useAppDispatch();
  const { image, company, description, price, title, colors } =
    product.attributes;
  const dollarsAmount = formatAsDollars(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const cartProduct: CartItem = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    amount,
    productColor,
    company,
  };

  const addToCart = () => {
    dispatch(addItems(cartProduct));
  };
  return (
    <section>
      <div className='flex items-center h-6 gap-x-2'>
        <Button asChild variant='link' size='sm'>
          <Link to='/'>Home</Link>
        </Button>
        <Separator orientation='vertical' />
        <Button asChild variant='link' size='sm'>
          <Link to='/products'>Products</Link>
        </Button>
      </div>
      {/* PRODUCT */}
      <div className='grid mt-6 gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        <img
          src={image}
          alt={title}
          className='object-cover rounded-lg w-96 h-96 lg:w-full'
        />
        <div>
          <h1 className='text-3xl font-bold capitalize'>{title}</h1>
          <h4 className='mt-2 text-xl'>{company}</h4>
          <p className='inline-block p-2 mt-3 rounded-md text-md bg-muted'>
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
