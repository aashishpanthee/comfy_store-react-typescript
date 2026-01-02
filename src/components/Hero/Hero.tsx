import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import HeroCarousel from './HeroCarousel';

function Hero() {
  return (
    <section className='grid items-center grid-cols-1 gap-24  lg:grid-cols-2'>
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl '>
          We’re changing the way people shop.
        </h1>
        <p className='max-w-xl mt-8 text-lg leading-8'>
          Discover thoughtfully crafted furniture, cozy textiles, and modern
          decor all in one place. From everyday essentials to statement pieces,
          we curate quality items that make your home feel welcoming, stylish,
          and uniquely yours.
        </p>
        <Button asChild size='lg' className='mt-10'>
          <Link to='/products'>Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}

export default Hero;
