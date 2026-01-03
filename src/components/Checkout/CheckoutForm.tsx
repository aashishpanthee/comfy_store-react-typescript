import { axiosInstance } from '@/config';
import { toast } from '@/hooks/use-toast';
import { useFormValidation } from '@/hooks/useFormValidation';
import { clearCart } from '@/redux-store/cart/cartSlice';
import { ReduxStore } from '@/redux-store/store';
import { formatAsDollars, type Checkout } from '@/utils';
import { ActionFunction, Form, redirect } from 'react-router-dom';
import FormInput from '../common/FormInput';
import SubmitBtn from '../common/SubmitBtn';
export const action =
  (store: ReduxStore): ActionFunction =>
    async ({ request }) => {
      const formData = await request.formData();
      const name = formData.get('name') as string;
      const address = formData.get('address') as string;

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
  const { errors, touched, handleBlur, handleSubmit } = useFormValidation({
    name: (value: string) => (!value ? 'Required' : undefined),
    address: (value: string) => (!value ? 'Required' : undefined),
  });

  return (
    <Form method='POST' className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
      <h4 className='mb-4 text-xl font-medium'>Shipping Information</h4>
      <div>
        <FormInput label='first name' name='name' type='text' onBlur={handleBlur} />
        {touched.name && errors.name && (
          <p className='mt-1 text-sm text-red-500'>{errors.name}</p>
        )}
      </div>
      <div>
        <FormInput label='address' name='address' type='text' onBlur={handleBlur} />
        {touched.address && errors.address && (
          <p className='mt-1 text-sm text-red-500'>{errors.address}</p>
        )}
      </div>
      <div className='mt-4'>
        <SubmitBtn text='Place Your Order' />
      </div>
    </Form>
  );
}

export default CheckoutForm;
