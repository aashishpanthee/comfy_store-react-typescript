import { ActionFunction, Form, redirect } from 'react-router-dom';
import FormInput from '../common/FormInput';
import SubmitBtn from '../common/SubmitBtn';
import { formatAsDollars, type Checkout } from '@/utils';
import { axiosInstance } from '@/config';
import { toast } from '@/hooks/use-toast';
import { clearCart } from '@/redux-store/cart/cartSlice';
import { ReduxStore } from '@/redux-store/store';
export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const address = formData.get('address') as string;

    if (!name || !address) {
      toast({ description: 'please fill out all fields' });
      return null;
    }

    const user = store.getState().userState.user;
    if (!user) {
      toast({ description: 'please login to place an order' });
      return redirect('/login');
    }
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info: Checkout = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatAsDollars(orderTotal),
      cartItems,
      numItemsInCart,
    };
    try {
      await axiosInstance.post(
        '/orders',
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      );

      store.dispatch(clearCart());
      toast({ description: 'order placed' });
      return redirect('/orders');
    } catch (error) {
      toast({ description: 'order failed' });
      return null;
    }
  };
function CheckoutForm() {
  return (
    <Form method='POST' className='flex flex-col gap-y-4'>
      <h4 className='mb-4 text-xl font-medium'>Shipping Information</h4>
      <FormInput label='first name' name='name' type='text' />
      <FormInput label='address' name='address' type='text' />
      <div className='mt-4'>
        <SubmitBtn text='Place Your Order' />
      </div>
    </Form>
  );
}

export default CheckoutForm;
