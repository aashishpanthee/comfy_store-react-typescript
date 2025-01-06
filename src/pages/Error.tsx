import { useRouteError, Link, isRouteErrorResponse } from 'react-router-dom';
import { Button } from '@/components/ui/button';

type Props = {};

function Error({}: Props) {
  const error = useRouteError();
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <main className='grid min-h-[100vh] place-items-center px-8'>
        <div className='text-center'>
          <p className='font-semibold text-9xl text-primary'>404</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl '>
            Page not found
          </h1>
          <p className='mt-6 text-lg leading-7'>
            Sorry, we couldn't find the page you are looking for.
          </p>
        </div>
        <div className='mt-10'>
          <Button asChild variant='secondary' size='lg'>
            <Link to='/'>Go back home</Link>
          </Button>
        </div>
      </main>
    );
  }
  return (
    <main className='grid min-h-[100vh] place-items-center px-8'>
      <h1 className='text-4xl font-bold text-center'>There was an error....</h1>
    </main>
  );
}

export default Error;
