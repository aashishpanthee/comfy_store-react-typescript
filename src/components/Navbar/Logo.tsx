import { Armchair } from 'lucide-react';
import { Link } from 'react-router-dom';

type Props = {};

function Logo({ }: Props) {
  return (
    <Link
      to='/'
      className='hidden lg:flex items-center gap-2.5 bg-gradient-to-br from-primary to-primary/80 px-4 py-2.5 rounded-xl text-white shadow-md shadow-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 group'
    >
      <Armchair className='w-6 h-6 transition-transform duration-300 group-hover:rotate-12' />
      <div className='flex flex-col leading-none'>
        <span className='text-[10px] uppercase tracking-[0.2em] font-light opacity-90'>Comfy</span>
        <span className='text-lg font-bold tracking-tight'>Store</span>
      </div>
    </Link>
  );
}

export default Logo;
