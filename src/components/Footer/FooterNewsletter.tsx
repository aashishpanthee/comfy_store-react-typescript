import { newsletterContent } from '@/constants/footerContent';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

type FooterNewsletterProps = {
  className?: string;
};

function FooterNewsletter({ className }: FooterNewsletterProps) {
  return (
    <div className={cn('space-y-4 text-center lg:text-left', className)}>
      <p className='text-sm font-semibold tracking-wide text-foreground'>{newsletterContent.title}</p>
      <p className='max-w-lg mx-auto text-sm text-muted-foreground lg:mx-0'>
        {newsletterContent.description}
      </p>
      <form
        className='flex flex-col gap-3 sm:flex-row'
        onSubmit={(event) => event.preventDefault()}
      >
        <Input
          type='email'
          placeholder={newsletterContent.placeholder}
          required
          className='h-11 bg-background/80'
        />
        <Button type='submit' className='w-full h-11 sm:w-auto'>
          {newsletterContent.ctaLabel}
        </Button>
      </form>
      <p className='text-xs text-muted-foreground'>{newsletterContent.privacyNote}</p>
    </div>
  );
}

export default FooterNewsletter;
