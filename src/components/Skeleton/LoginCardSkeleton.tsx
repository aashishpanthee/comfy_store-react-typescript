import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function LoginCardSkeleton() {
  return (
    <section className='grid h-screen place-items-center'>
      <Card className='w-96 bg-muted'>
        <CardHeader>
          <Skeleton className='h-8 w-24 mx-auto' />
        </CardHeader>
        <CardContent>
          <div className='space-y-6'>
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

            {/* Login Button Skeleton */}
            <Skeleton className='h-10 w-full rounded mt-4' />

            {/* Guest User Button Skeleton */}
            <Skeleton className='h-10 w-full rounded' />

            {/* Register Link Skeleton */}
            <div className='pt-2 space-y-2'>
              <Skeleton className='h-4 w-40 mx-auto' />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default LoginCardSkeleton;
