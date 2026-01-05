import { useToast } from '@/hooks/use-toast';
import { clearCart } from '@/redux-store/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux-store/hooks';
import { logoutUser } from '@/redux-store/user/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

type Props = {};

function Header({ }: Props) {
  const user = useAppSelector((store) => store.userState.user);
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearCart());
    dispatch(logoutUser());
    toast({
      description: 'Logout successful',
    });
    navigate('/');
  };

  return (
    <header className='border-b border-border/60 bg-gradient-to-r from-muted/60 via-background to-muted/60 backdrop-blur'>
      <div className='flex items-center justify-center py-2 text-xs sm:text-sm align-element sm:justify-end'>
        {user ? (
          <div className='flex items-center gap-2 sm:gap-4'>
            <span className='hidden rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary sm:inline'>
              Welcome back
            </span>
            <p className='text-muted-foreground'>Hi, {user.username}</p>
            <Button
              variant='outline'
              size='sm'
              className='h-8 px-3 text-xs font-semibold border-border/70 bg-background/80 hover:border-primary/60 hover:text-primary'
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className='flex items-center justify-center gap-2 sm:gap-3'>
            <Button
              asChild
              variant='outline'
              size='sm'
              className='h-8 px-3 text-xs font-semibold border-border/70 bg-background/80 hover:border-primary/60 hover:text-primary'
            >
              <Link to='/register'>Sign up</Link>
            </Button>
            <Button
              asChild
              size='sm'
              className='h-8 px-3 text-xs font-semibold shadow-sm bg-primary/90 text-primary-foreground hover:bg-primary'
            >
              <Link to='/login'>Login</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
