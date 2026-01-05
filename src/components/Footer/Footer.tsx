import { FooterLinkColumn, FooterNewsletter } from "@/components";
import { footerBottomContent, linkSections } from '@/constants/footerContent';
import { shopLinks, socialLinks, supportLinks } from '@/constants/footerLinks';
import FooterBrand from './FooterBrand';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='mt-16 border-t border-border/70 bg-gradient-to-b from-background via-muted/60 to-muted/80 dark:via-slate-900 dark:to-slate-950'>
      <div className='relative py-12 align-element lg:py-16'>
        <div className='grid gap-12 justify-items-center lg:grid-cols-12 lg:justify-items-start'>
          <FooterBrand className='lg:col-span-4' socialLinks={socialLinks} />

          <div className='grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-2'>
            <FooterLinkColumn title={linkSections.shop.title} links={shopLinks} />
            <FooterLinkColumn title={linkSections.support.title} links={supportLinks} />
          </div>

          <FooterNewsletter className='lg:col-span-3' />
        </div>

        <div className='flex flex-col gap-3 pt-6 mt-10 text-xs border-t border-border/70 text-muted-foreground sm:flex-row sm:items-center sm:justify-between'>
          <div className='flex items-center justify-center gap-2 text-foreground sm:justify-start'>
            <div className='h-[1px] w-6 bg-primary/60' />
            <p className='font-medium tracking-wide'>{footerBottomContent.tagline}</p>
          </div>
          <p className='text-center sm:text-left'>
            {footerBottomContent.copyright(year)}
          </p>
        </div>
      </div>
    </footer >
  );
}

export default Footer;
