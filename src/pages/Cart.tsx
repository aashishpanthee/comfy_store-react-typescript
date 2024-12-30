import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type Props = {};

function Cart({}: Props) {
  return (
    <div>
      <h1 className='text-4xl'>Cart Page</h1>
      <Button asChild>
        <Link to='/'>Back to Home</Link>
      </Button>
    </div>
  );
}

export default Cart;
