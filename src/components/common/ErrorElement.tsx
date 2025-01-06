import { useRouteError } from 'react-router-dom';

function ErrorElement() {
  const error = useRouteError();
  return <div className='text-4xl font-bold'> There was an error....</div>;
}

export default ErrorElement;
