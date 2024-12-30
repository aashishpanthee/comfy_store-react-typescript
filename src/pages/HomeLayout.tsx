import { Header, Navbar } from '@/components';
import { Outlet } from 'react-router-dom';
type Props = {};

function HomeLayout({}: Props) {
  return (
    <>
      <Header />
      <Navbar />
      <div className='align-element py-20'>
        <Outlet />
      </div>
    </>
  );
}

export default HomeLayout;
