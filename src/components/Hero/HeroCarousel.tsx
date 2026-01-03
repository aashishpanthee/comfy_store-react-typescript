import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { HERO1, HERO2, HERO3, HERO4 } from '@/constants/images';
import Autoplay from 'embla-carousel-autoplay';

const carouselImages = [HERO1, HERO2, HERO3, HERO4];

function HeroCarousel() {
  return (
    <div className='hidden lg:block'>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className='p-2'>
                  <img
                    src={image}
                    alt='hero'
                    className='w-full h-[24rem] rounded-md object-cover'
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
export default HeroCarousel;
