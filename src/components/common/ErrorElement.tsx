import { Button } from '@/components/ui/button';
import { AlertCircle, Home, RotateCcw } from 'lucide-react';
import { isRouteErrorResponse, Link, useNavigate, useRouteError } from 'react-router-dom';

function ErrorElement() {
  const error = useRouteError();
  const navigate = useNavigate();

  const getErrorDetails = () => {
    if (isRouteErrorResponse(error)) {
      if (error.status === 404) {
        return {
          icon: AlertCircle,
          code: '404',
          title: 'Page Not Found',
          subtitle: 'Oops! The page you are looking for does not exist.',
          description:
            'It might have been moved or deleted. Let\'s get you back on track.',
        };
      }

      if (error.status === 500) {
        return {
          icon: AlertCircle,
          code: '500',
          title: 'Server Error',
          subtitle: 'Something went wrong on our end.',
          description:
            'Our team has been notified. Please try again later or contact support if the problem persists.',
        };
      }

      if (error.status === 403) {
        return {
          icon: AlertCircle,
          code: '403',
          title: 'Access Denied',
          subtitle: 'You do not have permission to access this resource.',
          description: 'Please log in with the correct credentials and try again.',
        };
      }

      return {
        icon: AlertCircle,
        code: error.status,
        title: error.statusText || 'An Error Occurred',
        subtitle: 'Something went wrong',
        description: error.data || 'Please try again or contact support if the issue persists.',
      };
    }

    // Handle thrown errors
    const errorMessage =
      error instanceof Error ? error.message : 'An unexpected error occurred';

    return {
      icon: AlertCircle,
      code: 'ERROR',
      title: 'Unexpected Error',
      subtitle: 'Something went wrong',
      description: errorMessage,
    };
  };

  const { icon: Icon, code, title, subtitle, description } = getErrorDetails();

  return (
    <main className='grid px-6 py-24 place-items-center sm:px-8 lg:px-10'>
      <div className='max-w-2xl mx-auto text-center'>
        {/* Error Icon */}
        <div className='flex justify-center mb-8'>
          <div className='flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10'>
            <Icon className='w-8 h-8 text-destructive' strokeWidth={1.5} />
          </div>
        </div>

        {/* Error Code */}
        <div className='mb-6'>
          <p className='text-sm font-semibold tracking-widest uppercase text-muted-foreground'>
            Error {code}
          </p>
        </div>

        {/* Title */}
        <h1 className='mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-foreground'>
          {title}
        </h1>

        {/* Subtitle */}
        <p className='mb-4 text-lg text-muted-foreground'>{subtitle}</p>

        {/* Description */}
        <p className='mb-12 text-base leading-relaxed text-muted-foreground/80'>
          {description}
        </p>

        {/* Action Buttons */}
        <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
          <Button asChild size='lg' className='gap-2'>
            <Link to='/'>
              <Home className='w-4 h-4' />
              Back to Home
            </Link>
          </Button>
          <Button
            variant='outline'
            size='lg'
            onClick={() => navigate(-1)}
            className='gap-2'
          >
            <RotateCcw className='w-4 h-4' />
            Go Back
          </Button>
        </div>

        {/* Footer Info */}
        <div className='pt-8 mt-12 border-t border-border'>
          <p className='text-sm text-muted-foreground'>
            Need help?{' '}
            <a
              href='mailto:support@comfy.com'
              className='font-medium text-primary hover:underline'
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default ErrorElement;
