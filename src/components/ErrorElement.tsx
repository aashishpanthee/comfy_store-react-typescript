import { useRouteError } from 'react-router-dom';
type Props = {};

function ErrorElement({}: Props) {
  const error = useRouteError();
  console.log(error, 'hehe');
  return <div className='font-bold text-4xl'> There was an error....</div>;
}

export default ErrorElement;
