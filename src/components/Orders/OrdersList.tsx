import DataTable, { type ColumnDef } from '@/components/common/DataTable';
import { type Order, type OrdersResponse } from '@/utils';
import { useLoaderData } from 'react-router-dom';

function OrdersList() {
  const { data: orders, meta } = useLoaderData() as OrdersResponse;

  const columns: ColumnDef<Order>[] = [
    {
      key: 'name',
      header: 'Name',
      render: (order) => (
        <span className='font-medium'>{order.attributes.name}</span>
      ),
    },
    {
      key: 'address',
      header: 'Address',
      className: 'text-muted-foreground',
      render: (order) => order.attributes.address,
    },
    {
      key: 'products',
      header: 'Products',
      width: 'w-[80px] sm:w-[100px]',
      align: 'center',
      render: (order) => (
        <span className='inline-flex items-center justify-center w-6 h-6 text-xs font-semibold rounded-full sm:w-8 sm:h-8 bg-primary/10 text-primary sm:text-sm'>
          {order.attributes.numItemsInCart}
        </span>
      ),
    },
    {
      key: 'cost',
      header: 'Cost',
      width: 'w-[100px] sm:w-[120px]',
      className: 'font-semibold text-primary',
      render: (order) => order.attributes.orderTotal,
    },
    {
      key: 'date',
      header: 'Date',
      width: 'w-[140px] sm:w-[160px]',
      className: 'text-muted-foreground',
      render: (order) => new Date(order.attributes.createdAt).toDateString(),
    },
  ];

  return (
    <DataTable
      data={orders}
      columns={columns}
      caption='A list of your recent orders.'
      title='Total Orders:'
      totalCount={meta.pagination.total}
      getRowKey={(order) => order.id}
    />
  );
}
export default OrdersList;
