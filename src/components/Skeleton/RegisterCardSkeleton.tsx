import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function RegisterCardSkeleton() {
  return (
    <section className='grid h-screen place-items-center'>
      <Card className='w-96 bg-muted'>
        <CardHeader>
          <Skeleton className='h-8 w-28 mx-auto' />
        </CardHeader>
        <CardContent>
          <div className='space-y-6'>
            {/* Username Input Skeleton */}
            <div className='space-y-2'>
              <Skeleton className='h-4 w-16' />
              <Skeleton className='h-10 w-full rounded' />
            </div>

            {/* Email Input Skeleton */}
            <div className='space-y-2'>
              <Skeleton className='h-4 w-12' />
              <Skeleton className='h-10 w-full rounded' />
            </div>

            {/* Password Input Skeleton */}
            <div className='space-y-2'>
              <Skeleton className='h-4 w-20' />
              <Skeleton className='h-10 w-full rounded' />
            </div>

            {/* Register Button Skeleton */}
            <Skeleton className='h-10 w-full rounded mt-4' />

            {/* Login Link Skeleton */}
            <div className='pt-2 space-y-2'>
              <Skeleton className='h-4 w-44 mx-auto' />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default RegisterCardSkeleton;
