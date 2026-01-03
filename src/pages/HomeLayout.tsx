import { Header, Navbar } from '@/components';
import { Outlet } from 'react-router-dom';

function HomeLayout() {

  return (
    <>
      <Header />
      <Navbar />
      <div className='py-20 align-element'>
        <Outlet />
      </div>
    </>
  );
}

export default HomeLayout;
