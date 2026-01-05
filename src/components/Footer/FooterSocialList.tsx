import { FooterSocialLink } from '@/constants/footerLinks';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

type FooterSocialListProps = {
  socialLinks: FooterSocialLink[];
  className?: string;
};

function FooterSocialList({ socialLinks, className }: FooterSocialListProps) {
  return (
    <div className={cn('flex flex-wrap items-center justify-center gap-3 lg:justify-start', className)}>
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <Button
          key={label}
          variant='outline'
          size='icon'
          asChild
          className='border-border/80 bg-background/80 shadow-sm backdrop-blur transition hover:-translate-y-0.5'
        >
          <a
            href={href}
            aria-label={label}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
          >
            <Icon className='w-5 h-5' />
          </a>
        </Button>
      ))}
    </div>
  );
}

export default FooterSocialList;
