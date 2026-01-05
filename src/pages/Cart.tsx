import { CartItemsList, CartTotals, SectionTitle, SEO } from '@/components';
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/redux-store/hooks';
import { Link } from 'react-router-dom';

const Cart = () => {
  const user = useAppSelector((store) => store.userState.user);

  const numItemsInCart = useAppSelector(
    (store) => store.cartState.numItemsInCart
  );

  if (numItemsInCart === 0) {
    return (
      <>
        <SEO
          title="Cart"
          description="Your shopping cart is empty"
        />
        <SectionTitle text='Empty cart ☹️' />
      </>
    );
  }
  return (
    <>
      <SEO
        title="Cart"
        description="Review your shopping cart and proceed to checkout"
      />
      <SectionTitle text='Shopping Cart' />
      <div className='grid gap-8 mt-8 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemsList />
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals />
          {user ? (
            <Button asChild className='w-full mt-8'>
              <Link to='/checkout'>Proceed to checkout</Link>
            </Button>
          ) : (
            <Button asChild className='w-full mt-8'>
              <Link to='/login'>Please Login</Link>
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
