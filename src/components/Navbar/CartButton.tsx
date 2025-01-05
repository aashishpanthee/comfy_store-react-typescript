import { Button } from '../ui/button';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/redux-store/hooks';

type Props = {};

function CartButton({}: Props) {
  const { numItemsInCart } = useAppSelector((store) => store.cartState);

  return (
    <Button
      asChild
      variant='outline'
      size='icon'
      className='relative flex items-center justify-center'
    >
      <Link to='/cart'>
        <ShoppingCart />
        <span className='absolute flex items-center justify-center w-6 h-6 text-xs text-white rounded-full -top-3 -right-3 bg-primary'>
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}
export default CartButton;
