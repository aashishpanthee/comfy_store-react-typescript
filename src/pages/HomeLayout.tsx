import { Footer, Header, Navbar } from '@/components';
import { Outlet } from 'react-router-dom';

function HomeLayout() {

  return (
    <div className='flex flex-col min-h-screen bg-background'>
      <Header />
      <Navbar />
      <main className='flex-1 py-20 align-element'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default HomeLayout;
