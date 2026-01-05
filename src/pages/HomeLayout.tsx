import { Footer, Header, Navbar, ScrollToTop, ScrollToTopButton } from '@/components';
import { Outlet } from 'react-router-dom';

function HomeLayout() {

  return (
    <div className='flex flex-col min-h-screen bg-background'>
      <ScrollToTop />
      <Header />
      <Navbar />
      <main className='flex-1 py-20 align-element'>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default HomeLayout;
