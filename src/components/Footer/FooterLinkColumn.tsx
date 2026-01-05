import { FooterNavLink } from '@/constants/footerLinks';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

type FooterLinkColumnProps = {
  title: string;
  links: FooterNavLink[];
  className?: string;
};

function FooterLinkColumn({ title, links, className }: FooterLinkColumnProps) {
  return (
    <div className={cn('space-y-4 text-center sm:text-left', className)}>
      <p className='text-sm font-semibold tracking-wide text-foreground'>{title}</p>
      <ul className='space-y-2 text-sm text-muted-foreground'>
        {links.map((link) => (
          <li key={link.label}>
            <Link className='transition hover:text-primary' to={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinkColumn;
