import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

function CartPageSkeleton() {
  return (
    <>
      {/* Section Title Skeleton */}
      <div className='mb-8'>
        <Skeleton className='w-64 h-10' />
      </div>

      <div className='grid gap-8 mt-8 lg:grid-cols-12'>
        {/* Cart Items List Skeleton */}
        <div className='lg:col-span-8'>
          {Array.from({ length: 3 }).map((_, index) => (
            <Card
              key={index}
              className='flex flex-col flex-wrap p-6 mb-8 gap-y-4 sm:flex-row'
            >
              {/* First Column - Image */}
              <div className='sm:w-32'>
                <Skeleton className='object-cover w-full h-24 rounded sm:h-32' />
              </div>

              {/* Second Column - Product Info */}
              <div className='sm:ml-4 sm:w-48'>
                <Skeleton className='w-32 h-6 mb-2' />
                <Skeleton className='w-24 h-4 mb-2' />
                <Skeleton className='w-16 h-6 rounded-full' />
              </div>

              {/* Third Column - Amount */}
              <div className='sm:ml-auto sm:w-24'>
                <Skeleton className='w-16 h-4 mb-2' />
                <Skeleton className='w-full h-10 rounded' />
              </div>

              {/* Fourth Column - Price */}
              <div className='sm:ml-4 sm:w-20'>
                <Skeleton className='w-full h-6' />
              </div>
            </Card>
          ))}
        </div>

        {/* Cart Totals Skeleton */}
        <div className='lg:col-span-4 lg:pl-4'>
          <Card className='p-8 bg-muted'>
            {/* Subtotal */}
            <div className='flex justify-between mb-2'>
              <Skeleton className='w-16 h-5' />
              <Skeleton className='w-20 h-5' />
            </div>
            <Separator className='my-2' />

            {/* Shipping */}
            <div className='flex justify-between mb-2'>
              <Skeleton className='w-16 h-5' />
              <Skeleton className='w-20 h-5' />
            </div>
            <Separator className='my-2' />

            {/* Tax */}
            <div className='flex justify-between mb-2'>
              <Skeleton className='w-16 h-5' />
              <Skeleton className='w-20 h-5' />
            </div>

            {/* Order Total */}
            <div className='flex justify-between mt-8'>
              <Skeleton className='w-24 h-6' />
              <Skeleton className='w-24 h-6' />
            </div>
          </Card>

          {/* Checkout Button Skeleton */}
          <Skeleton className='w-full mt-8 rounded h-11' />
        </div>
      </div>
    </>
  );
}

export default CartPageSkeleton;
