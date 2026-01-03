import { type ReactNode } from 'react';

export type AboutHighlightItem = {
  title: string;
  content: string;
  className?: string;
  icon?: ReactNode;
};

export const ABOUT_HIGHLIGHTS: AboutHighlightItem[] = [
  {
    title: 'Thoughtful Curation',
    content:
      'We hand-pick pieces that balance comfort and style, so everything you choose works together without feeling matchy-matchy.',
    className: 'bg-muted/40',
  },
  {
    title: 'Quality Materials',
    content:
      'From solid woods to cozy textiles, we focus on materials that age gracefully and feel good in everyday use.',
    className: 'bg-muted/40',
  },
  {
    title: 'Comfort-First Design',
    content:
      'Furniture should invite you in. We prioritize ergonomic shapes, plush seating, and tactile finishes that make home your favorite place to be.',
    className: 'bg-muted/40 sm:col-span-2 lg:col-span-1',
  },
];
