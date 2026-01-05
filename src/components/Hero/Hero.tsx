import { heroContent } from '@/constants/heroContent';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import HeroCarousel from './HeroCarousel';

function Hero() {
  return (
    <section className='grid items-center grid-cols-1 gap-24  lg:grid-cols-2'>
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl '>
          {heroContent.heading}
        </h1>
        <p className='max-w-xl mt-8 text-lg leading-8'>
          {heroContent.description}
        </p>
        <Button asChild size='lg' className='mt-10'>
          <Link to={heroContent.ctaHref}>{heroContent.ctaLabel}</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}

export default Hero;
