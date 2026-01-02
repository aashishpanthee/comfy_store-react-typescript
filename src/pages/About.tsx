import AboutHighlight from '@/components/About/AboutHighlight';
import { Button } from '@/components/ui/button';
import { ABOUT_HIGHLIGHTS } from '@/data/aboutHighlights';
import { Link } from 'react-router-dom';

type Props = {};

function About({ }: Props) {
  return (
    <section>
      <h1 className='flex flex-wrap items-center justify-center gap-2 text-4xl font-bold leading-none tracking-tight sm:gap-x-6 sm:text-6xl '>
        We love
        <span className='px-4 py-2 tracking-widest text-white rounded-lg bg-primary'>
          comfy
        </span>
      </h1>

      <p className='mx-auto mt-6 text-lg leading-8 tracking-wide'>
        Comfy is a small team of design lovers curating furniture, textiles,
        and decor that feel as good as they look. We prioritize quality
        materials, cozy textures, and timeless forms so your home stays
        welcoming for years. Every piece is chosen to mix-and-match easily,
        making it simple to create rooms you love living in.
      </p>

      <div className='grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3'>
        {ABOUT_HIGHLIGHTS.map((item) => (
          <AboutHighlight
            key={item.title}
            title={item.title}
            content={item.content}
            className={item.className}
          />
        ))}
      </div>

      <div className='flex justify-center mt-10'>
        <Button asChild size='lg'>
          <Link to='/products'>Explore the collection</Link>
        </Button>
      </div>
    </section>
  );
}

export default About;
