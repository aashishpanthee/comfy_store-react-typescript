import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

function OrdersPageSkeleton() {
  return (
    <>
      {/* Section Title Skeleton */}
      <div className='mb-8'>
        <Skeleton className='w-48 h-10' />
      </div>

      {/* Orders List Skeleton */}
      <div className='mt-16'>
        {/* Total Orders Text */}
        <Skeleton className='w-40 h-6 mb-4' />

        <Table>
          <TableCaption>
            <Skeleton className='w-64 h-4 mx-auto' />
          </TableCaption>
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
            {Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton className='w-24 h-5' />
                </TableCell>
                <TableCell>
                  <Skeleton className='w-40 h-5' />
                </TableCell>
                <TableCell className='text-center'>
                  <Skeleton className='w-8 h-5 mx-auto' />
                </TableCell>
                <TableCell>
                  <Skeleton className='w-16 h-5' />
                </TableCell>
                <TableCell>
                  <Skeleton className='w-32 h-5' />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Skeleton */}
      <Pagination className='mt-16'>
        <PaginationContent>
          <PaginationItem>
            <Skeleton className='w-24 h-10 rounded' />
          </PaginationItem>
          <PaginationItem>
            <Skeleton className='w-10 h-10 rounded' />
          </PaginationItem>
          <PaginationItem>
            <Skeleton className='w-10 h-10 rounded' />
          </PaginationItem>
          <PaginationItem>
            <Skeleton className='w-10 h-10 rounded' />
          </PaginationItem>
          <PaginationItem>
            <Skeleton className='w-24 h-10 rounded' />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

export default OrdersPageSkeleton;
