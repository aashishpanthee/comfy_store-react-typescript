import { Footer, Header, Navbar, ScrollToTop, ScrollToTopButton } from '@/components';
import { Outlet } from 'react-router-dom';

function HomeLayout() {

  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />
      <Navbar />
      <main className='py-20 align-element'>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default HomeLayout;
