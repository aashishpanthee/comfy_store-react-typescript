import { Card } from '@/components/ui/card';
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
      <div className='flex items-center justify-between mb-4 md:mb-6'>
        <h4 className='text-sm font-semibold capitalize sm:text-base md:text-lg'>
          Total Orders: <span className='text-primary'>{meta.pagination.total}</span>
        </h4>
      </div>

      <Card className='overflow-hidden overflow-x-auto'>
        <div className='min-h-[270px] md:min-h-[350px]'>
          <Table className='min-w-[700px]'>
            <TableCaption className='pb-4 text-xs sm:text-sm'>A list of your recent orders.</TableCaption>
            <TableHeader>
              <TableRow className='bg-muted/50 hover:bg-muted/50'>
                <TableHead className='text-xs font-semibold sm:text-sm'>Name</TableHead>
                <TableHead className='text-xs font-semibold sm:text-sm'>Address</TableHead>
                <TableHead className='w-[80px] sm:w-[100px] font-semibold text-xs sm:text-sm text-center'>Products</TableHead>
                <TableHead className='w-[100px] sm:w-[120px] font-semibold text-xs sm:text-sm'>Cost</TableHead>
                <TableHead className='w-[140px] sm:w-[160px] font-semibold text-xs sm:text-sm'>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => {
                const { name, address, numItemsInCart, orderTotal, createdAt } =
                  order.attributes;
                return (
                  <TableRow key={order.id} className='transition-colors hover:bg-muted/30'>
                    <TableCell className='text-xs font-medium sm:text-sm'>{name}</TableCell>
                    <TableCell className='text-xs text-muted-foreground sm:text-sm'>{address}</TableCell>
                    <TableCell className='text-center'>
                      <span className='inline-flex items-center justify-center w-6 h-6 text-xs font-semibold rounded-full sm:w-8 sm:h-8 bg-primary/10 text-primary sm:text-sm'>
                        {numItemsInCart}
                      </span>
                    </TableCell>
                    <TableCell className='text-xs font-semibold text-primary sm:text-sm'>{orderTotal}</TableCell>
                    <TableCell className='text-xs text-muted-foreground sm:text-sm'>
                      {new Date(createdAt).toDateString()}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
export default OrdersList;
