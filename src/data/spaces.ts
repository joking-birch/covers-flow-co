/* The six spaces. NighthawksHero.astro keeps its own copy of this data with
   hotspot geometry attached — if titles/blurbs/slugs change, update both. */
export interface Space {
  slug: string;
  n: string;
  title: string;
  blurb: string;
  /** Three-word nav-menu byline, so a visitor skimming the accordion knows
      what each space is about without opening it. */
  byline: string;
  tags: string[];
  /** <title> tag for this space's page — keyword-led, distinct from the
      on-page blurb above (which is written to read well, not to rank). */
  seoTitle: string;
  /** <meta description> for this space's page, same reasoning as seoTitle. */
  seoDescription: string;
}

export const spaces: Space[] = [
  {
    slug: 'brand-visibility', n: '01', title: 'Brand Visibility',
    blurb: 'The sign is what the street reads first. Own the name before anyone types a keyword.',
    byline: 'Getting you seen',
    tags: ['Branded SERP', 'AI answer engines', 'Entity & knowledge panel'],
    seoTitle: 'Brand Visibility SEO for Restaurants | CoversFlow',
    seoDescription: 'Own your branded search results, show up in AI answers like ChatGPT and AI Overviews, and get your Google Business Profile and knowledge panel right.',
  },
  {
    slug: 'competitive-gaps', n: '02', title: 'Competitive Gaps',
    blurb: 'The rooms across the street went dark. We map what they stopped ranking for, and take it.',
    byline: 'Claiming lost ground',
    tags: ['Keyword gap audit', 'Content teardown', 'Market share of search'],
    seoTitle: 'Competitor Keyword Gap Analysis for Restaurants | CoversFlow',
    seoDescription: "Find the keywords local competitors rank for and you don't, benchmark their content, and track your real share of local search, month over month.",
  },
  {
    slug: 'discovery', n: '03', title: 'Discovery',
    blurb: "The guest with his back turned hasn't found you yet. Everything upstream of the booking.",
    byline: 'Getting you found',
    tags: ['Near-me intent', 'Editorial & guides', 'Digital PR'],
    seoTitle: 'Local & Near-Me SEO Discovery for Restaurants | CoversFlow',
    seoDescription: 'Win near-me and voice searches, earn placements in local food guides and press, and build the backlinks that build lasting search authority.',
  },
  {
    slug: 'community', n: '04', title: 'Community',
    blurb: 'Two people at the same counter, a world apart. Closing that gulf is the work.',
    byline: 'Closing the distance',
    tags: ['Review conversations', 'Events & partnerships', 'Local link earning'],
    seoTitle: 'Reviews & Local Link Building for Restaurants | CoversFlow',
    seoDescription: 'Turn reviews into a ranking signal, structure events and partnerships for search, and earn the local citations and backlinks that build trust.',
  },
  {
    slug: 'front-of-house', n: '05', title: 'Front of House',
    blurb: 'The counterman is the whole service. Every surface a guest touches on the way in.',
    byline: 'Smoothing their arrival',
    tags: ['Google Business Profile', 'Booking flow', 'Location pages'],
    seoTitle: 'Google Business Profile & Booking Flow SEO | CoversFlow',
    seoDescription: 'Optimize your Google Business Profile, remove friction from your booking flow, and build location pages engineered to rank for every address you serve.',
  },
  {
    slug: 'back-of-house', n: '06', title: 'Back of House',
    blurb: 'Behind the door: the plumbing nobody sees and everything depends on.',
    byline: "Fixing what's unseen",
    tags: ['Menu & recipe schema', 'Site architecture', 'Core Web Vitals'],
    seoTitle: 'Menu Schema & Technical SEO for Restaurants | CoversFlow',
    seoDescription: 'Structured menu and recipe schema, clean crawlable site architecture, and Core Web Vitals performance that keeps search engines, and guests, happy.',
  },
];
