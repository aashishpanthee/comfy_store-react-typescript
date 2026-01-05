import { useAppSelector } from '@/redux-store/hooks';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

type Props = {};

function CartButton({ }: Props) {
  const { numItemsInCart } = useAppSelector((store) => store.cartState);

  return (
    <Button
      asChild
      variant='outline'
      size='icon'
      className='relative flex items-center justify-center transition-all duration-200 hover:scale-105 border-border/60 hover:border-primary/50 hover:shadow-sm'
    >
      <Link to='/cart'>
        <ShoppingCart className='transition-transform duration-200 hover:scale-110' />
        {numItemsInCart > 0 && (
          <span className='absolute flex items-center justify-center w-5 h-5 text-[10px] font-semibold text-white rounded-full -top-2 -right-2 bg-gradient-to-br from-primary to-primary/80 shadow-md animate-in fade-in zoom-in duration-200'>
            {numItemsInCart}
          </span>
        )}
      </Link>
    </Button>
  );
}
export default CartButton;
