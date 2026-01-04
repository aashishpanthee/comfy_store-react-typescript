import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

function SingleProductSkeleton() {
  return (
    <section>
      {/* Breadcrumb Navigation Skeleton */}
      <div className='flex items-center h-6 gap-x-2'>
        <Skeleton className='h-4 w-12 rounded' />
        <Separator orientation='vertical' />
        <Skeleton className='h-4 w-16 rounded' />
      </div>

      {/* Product Content */}
      <div className='grid mt-6 gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        {/* Product Image Skeleton */}
        <Skeleton className='object-cover rounded-lg w-96 h-96 lg:w-full' />

        {/* Product Details Skeleton */}
        <div>
          {/* Product Title */}
          <Skeleton className='h-10 w-64' />

          {/* Company Name */}
          <Skeleton className='h-6 w-32 mt-2' />

          {/* Price */}
          <Skeleton className='h-8 w-24 mt-3 rounded-md' />

          {/* Description */}
          <div className='mt-6 space-y-2'>
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-3/4' />
          </div>

          {/* Color Selection */}
          <div className='mt-8'>
            <Skeleton className='h-5 w-32 mb-3' />
            <div className='flex gap-2'>
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} className='w-8 h-8 rounded-full' />
              ))}
            </div>
          </div>

          {/* Amount Selection */}
          <div className='mt-8'>
            <Skeleton className='h-5 w-24 mb-3' />
            <Skeleton className='h-10 w-32 rounded' />
          </div>

          {/* Add to Bag Button */}
          <Skeleton className='h-11 w-full mt-10 rounded' />
        </div>
      </div>
    </section>
  );
}

export default SingleProductSkeleton;
