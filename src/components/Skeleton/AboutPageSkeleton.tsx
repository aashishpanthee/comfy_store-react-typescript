import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function AboutPageSkeleton() {
  return (
    <section>
      {/* Title Skeleton */}
      <div className='flex flex-wrap items-center justify-center gap-2 sm:gap-x-6'>
        <Skeleton className='h-12 w-32 sm:h-16 sm:w-40' />
        <Skeleton className='h-12 w-32 rounded-lg sm:h-16 sm:w-40' />
      </div>

      {/* Paragraph Skeleton */}
      <div className='mx-auto mt-6 space-y-2'>
        <Skeleton className='h-6 w-full' />
        <Skeleton className='h-6 w-full' />
        <Skeleton className='h-6 w-full' />
        <Skeleton className='h-6 w-3/4' />
      </div>

      {/* Highlight Cards Grid Skeleton */}
      <div className='grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3'>
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <Skeleton className='h-6 w-32' />
            </CardHeader>
            <CardContent>
              <Skeleton className='h-4 w-full mb-2' />
              <Skeleton className='h-4 w-full mb-2' />
              <Skeleton className='h-4 w-3/4' />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Button Skeleton */}
      <div className='flex justify-center mt-10'>
        <Skeleton className='h-11 w-56 rounded' />
      </div>
    </section>
  );
}

export default AboutPageSkeleton;
