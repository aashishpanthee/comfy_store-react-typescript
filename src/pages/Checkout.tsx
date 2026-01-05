import { CartTotals, CheckoutForm, SectionTitle, SEO } from '@/components';
import { toast } from '@/hooks/use-toast';
import { useAppSelector } from '@/redux-store/hooks';
import { type ReduxStore } from '@/redux-store/store';
import { LoaderFunction, redirect } from 'react-router-dom';

export const loader =
  (store: ReduxStore): LoaderFunction =>
    async (): Promise<Response | null> => {
      const user = store.getState().userState.user;
      if (!user) {
        toast({ description: 'Please login to continue' });
        return redirect('/login');
      }
      return null;
    };

const Checkout = () => {
  const cartTotal = useAppSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return (
      <>
        <SEO
          title="Checkout"
          description="Your cart is empty"
        />
        <SectionTitle text='Your cart is empty ☹️' />
      </>
    );
  }
  return (
    <>
      <SEO
        title="Checkout"
        description="Complete your order and checkout securely"
      />
      <SectionTitle text='Place your order' />
      <div className='grid items-start gap-8 mt-8 md:grid-cols-2'>
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;
