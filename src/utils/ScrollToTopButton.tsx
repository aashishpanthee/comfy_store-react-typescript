import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 240);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-6 right-4 sm:right-6 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
    >
      <Button
        size='icon'
        onClick={handleClick}
        className='rounded-full shadow-lg h-11 w-11 bg-primary text-primary-foreground shadow-primary/20 backdrop-blur hover:bg-primary/90'
        aria-label='Scroll to top'
      >
        <ArrowUp className='w-5 h-5' />
      </Button>
    </div>
  );
}

export default ScrollToTopButton;
