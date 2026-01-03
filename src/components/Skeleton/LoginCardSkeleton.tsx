import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function LoginCardSkeleton() {
  return (
    <section className='grid h-screen place-items-center'>
      <Card className='w-96 bg-muted'>
        <CardHeader>
          <Skeleton className='w-24 h-8 mx-auto' />
        </CardHeader>
        <CardContent>
          <div className='space-y-6'>
            {/* Email Input Skeleton */}
            <div className='space-y-2'>
              <Skeleton className='w-12 h-4' />
              <Skeleton className='w-full h-10 rounded' />
            </div>

            {/* Password Input Skeleton */}
            <div className='space-y-2'>
              <Skeleton className='w-20 h-4' />
              <Skeleton className='w-full h-10 rounded' />
            </div>

            {/* Login Button Skeleton */}
            <Skeleton className='w-full h-10 mt-4 rounded' />

            {/* Register Link Skeleton */}
            <div className='pt-2 space-y-2'>
              <Skeleton className='w-40 h-4 mx-auto' />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default LoginCardSkeleton;
