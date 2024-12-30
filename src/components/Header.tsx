import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { useState } from 'react';
type Props = {};

function Header({}: Props) {
  const [user, setUser] = useState<{ username: string } | null>({
    username: 'demo user',
  });
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };
  return (
    <header>
      <div className='align-element flex justify-center sm:justify-end'>
        {user ? (
          <div className='flex gap-x-2 sm:gap-x-8 items-center -mr-4'>
            <p className='text-xs sm:text-sm'> Hello, {user.username}</p>
            <Button variant='link' size='sm' onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className='flex gap-x-6 justify-center items-center '>
            <Button asChild variant='link' size='sm'>
              <Link to='/login'>Sign in / Guest</Link>
            </Button>
            <Button asChild variant='link' size='sm'>
              <Link to='/register'>Register</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
