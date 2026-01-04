import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { type OrdersResponse } from '@/utils';
import { useLoaderData } from 'react-router-dom';

function OrdersList() {
  const { data: orders, meta } = useLoaderData() as OrdersResponse;

  return (
    <div className='mt-8'>
      <h4 className='mb-4 capitalize'>
        total orders : {meta.pagination.total}
      </h4>
      <div className='min-h-[270px] md:min-h-[350px]'>
        <Table>
          <TableCaption>A list of your recent orders.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Address</TableHead>
              <TableHead className='w-[100px]'>Products</TableHead>
              <TableHead className='w-[100px]'>Cost</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => {
              const { name, address, numItemsInCart, orderTotal, createdAt } =
                order.attributes;
              return (
                <TableRow key={order.id}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{address}</TableCell>
                  <TableCell className='text-center'>{numItemsInCart}</TableCell>
                  <TableCell>{orderTotal}</TableCell>
                  <TableCell>{new Date(createdAt).toDateString()}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
export default OrdersList;
