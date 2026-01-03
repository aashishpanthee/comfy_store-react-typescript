import { Skeleton } from '../ui/skeleton';

function Loading() {
  return (
    <div className='grid gap-8 pt-12 md:grid-cols-2 lg:grid-cols-3 '>
      {Array.from({ length: 9 }).map((_, index) => {
        return (
          <div key={index} className='flex flex-col space-y-4'>
            <Skeleton className='h-[125px] w-full rounded-xl' />
            <div className='space-y-2'>
              <Skeleton className='h-4 mx-auto w-[250px]' />
              <Skeleton className='h-4 mx-auto w-[200px]' />
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Loading;
