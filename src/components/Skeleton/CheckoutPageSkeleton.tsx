import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

function CheckoutPageSkeleton() {
  return (
    <>
      {/* Section Title Skeleton */}
      <div className='mb-8'>
        <Skeleton className='w-64 h-10' />
      </div>

      <div className='grid items-start gap-8 mt-8 md:grid-cols-2'>
        {/* Checkout Form Skeleton */}
        <div className='flex flex-col gap-y-4'>
          {/* Form Title */}
          <Skeleton className='w-56 mb-4 h-7' />

          {/* First Name Field */}
          <div className='space-y-2'>
            <Skeleton className='w-20 h-4' />
            <Skeleton className='w-full h-10 rounded' />
          </div>

          {/* Address Field */}
          <div className='space-y-2'>
            <Skeleton className='w-16 h-4' />
            <Skeleton className='w-full h-10 rounded' />
          </div>

          {/* Submit Button */}
          <div className='mt-4'>
            <Skeleton className='w-full rounded h-11' />
          </div>
        </div>

        {/* Cart Totals Skeleton */}
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
      </div>
    </>
  );
}

export default CheckoutPageSkeleton;
