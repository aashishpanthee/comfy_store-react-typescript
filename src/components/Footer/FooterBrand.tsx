import { FooterSocialList } from "@/components";
import { brandContent } from '@/constants/footerContent';
import { FooterSocialLink } from '@/constants/footerLinks';
import { cn } from '@/lib/utils';
import { Armchair } from 'lucide-react';

type FooterBrandProps = {
  socialLinks: FooterSocialLink[];
  className?: string;
};

function FooterBrand({ socialLinks, className }: FooterBrandProps) {
  return (
    <div className={cn('space-y-6 text-center lg:text-left', className)}>
      <div className='flex items-center justify-center gap-3 lg:justify-start'>
        <div className='flex items-center justify-center shadow-sm w-11 h-11 rounded-xl bg-primary text-primary-foreground'>
          <Armchair className='w-6 h-6' />
        </div>
        <div className='text-left'>
          <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground'>{brandContent.badge}</p>
          <p className='text-xl font-semibold'>{brandContent.name}</p>
        </div>
      </div>
      <p className='max-w-md mx-auto text-sm text-muted-foreground lg:mx-0'>
        {brandContent.description}
      </p>
      <FooterSocialList socialLinks={socialLinks} />
    </div>
  );
}

export default FooterBrand;
