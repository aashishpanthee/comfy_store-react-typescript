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
    <header>
      <div className='flex justify-center py-2 align-element sm:justify-end'>
        {/* USER */}
        {user ? (
          <div className='flex items-center gap-x-2 sm:gap-x-8'>
            <p className='text-xs sm:text-sm'>Hello, {user.username}</p>
            <Button variant='link' size='sm' onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className='flex items-center justify-center -mr-4 gap-x-6'>
            <Button asChild variant='link' size='sm'>
              <Link to='/register'>Sign up</Link>
            </Button>
            <Button asChild variant='link' size='sm'>
              <Link to='/login'>Login</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
