/* The six pillars. NighthawksHero.astro keeps its own copy of this data with
   hotspot geometry attached — if titles/blurbs/slugs change, update both. */
export interface Pillar {
  slug: string;
  n: string;
  title: string;
  blurb: string;
  tags: string[];
}

export const pillars: Pillar[] = [
  {
    slug: 'brand-visibility', n: '01', title: 'Brand Visibility',
    blurb: 'The sign is what the street reads first. Own the name before anyone types a keyword.',
    tags: ['Branded SERP', 'AI answer engines', 'Entity & knowledge panel'],
  },
  {
    slug: 'competitive-gaps', n: '02', title: 'Competitive Gaps',
    blurb: 'The rooms across the street went dark. We map what they stopped ranking for, and take it.',
    tags: ['Keyword gap audit', 'Content teardown', 'Market share of search'],
  },
  {
    slug: 'discovery', n: '03', title: 'Discovery',
    blurb: "The guest with his back turned hasn't found you yet. Everything upstream of the booking.",
    tags: ['Near-me intent', 'Editorial & guides', 'Digital PR'],
  },
  {
    slug: 'community', n: '04', title: 'Community',
    blurb: 'Two people at the same counter, a world apart. Closing that gulf is the work.',
    tags: ['Review conversations', 'Events & partnerships', 'Local link earning'],
  },
  {
    slug: 'front-of-house', n: '05', title: 'Front of House',
    blurb: 'The counterman is the whole service. Every surface a guest touches on the way in.',
    tags: ['Google Business Profile', 'Booking flow', 'Location pages'],
  },
  {
    slug: 'back-of-house', n: '06', title: 'Back of House',
    blurb: 'Behind the door: the plumbing nobody sees and everything depends on.',
    tags: ['Menu & recipe schema', 'Site architecture', 'Core Web Vitals'],
  },
];
