import {
  ComplexPaginationContainer,
  OrdersList,
  SectionTitle,
  SEO,
} from '@/components';
import { axiosInstance } from '@/config/index';
import { toast } from '@/hooks/use-toast';
import { ReduxStore } from '@/redux-store/store';
import { type OrdersResponse } from '@/utils';
import { LoaderFunction, redirect, useLoaderData } from 'react-router-dom';

export const loader =
  (store: ReduxStore): LoaderFunction =>
    async ({ request }): Promise<OrdersResponse | null | Response> => {
      const user = store.getState().userState.user;
      if (!user) {
        toast({
          description: 'Please login to view your orders',
        }),
          redirect('/login');
      }
      const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
      ]);
      try {
        const response = await axiosInstance.get<OrdersResponse>('/orders', {
          params,
          headers: {
            Authorization: `Bearer ${user?.jwt}`,
          },
        });
        return { ...response.data };
      } catch (error) {
        console.log(error);
        toast({
          description: 'Failed to fetch orders',
        });
        return null;
      }
    };

function Orders() {
  const { meta } = useLoaderData() as OrdersResponse;
  if (meta.pagination.total < 1) {
    return (
      <>
        <SEO
          title="Orders"
          description="You have no orders yet"
        />
        <SectionTitle text='Please make an order' />
      </>
    );
  }
  return (
    <>
      <SEO
        title="Orders"
        description="View and track your orders"
      />
      <SectionTitle text='Your Orders' />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
}

export default Orders;
