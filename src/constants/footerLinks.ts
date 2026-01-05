import { Instagram, Mail, Twitter, Youtube, type LucideIcon } from 'lucide-react';

export type FooterNavLink = {
  label: string;
  href: string;
};

export type FooterSocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const shopLinks: FooterNavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: 'products' },
  { label: 'About', href: 'about' },
];

export const supportLinks: FooterNavLink[] = [
  { label: 'Orders', href: 'orders' },
  { label: 'Checkout', href: 'checkout' },
  { label: 'Cart', href: 'cart' },
];

export const socialLinks: FooterSocialLink[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: Instagram },
  { label: 'Twitter', href: 'https://www.twitter.com/', icon: Twitter },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: Youtube },
  { label: 'Email', href: 'mailto:hello@comfystore.com', icon: Mail },
];
