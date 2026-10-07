/* Build plans shown in the homepage "What it costs" section
   (src/pages/index.astro), the Get Started flow's plan picker
   (src/components/QuickstartForm.astro), and each plan's own dedicated
   page (src/pages/plans/[plan].astro) — one source so pricing can't drift
   out of sync across any of the three. */
export interface Plan {
  id: string;
  slug: string;
  title: string;
  price: string;
  body: string;
  /** <title> / <meta description> for this plan's own page. */
  seoTitle: string;
  seoDescription: string;
  /** "What's included" list on the plan's own page. */
  included: string[];
}

export const plans: Plan[] = [
  {
    id: 'standard',
    slug: 'standard',
    title: 'Standard',
    price: '$899',
    body: '3 pages: Home, Menu, Contact.',
    seoTitle: 'Standard Website Package for Restaurants | CoversFlow',
    seoDescription: 'A clean, fast three-page restaurant website — Home, Menu, Contact — built to rank from day one, with a year of updates included.',
    included: [
      'Home, Menu, and Contact — built and launched, not just templated',
      "Mobile-first and fast, the same Core Web Vitals discipline we sell as an ongoing service",
      'Menu page structured with schema from day one, not bolted on later',
      'A year of updates included, up to two revisions a month',
    ],
  },
  {
    id: 'mid-tier',
    slug: 'mid-tier',
    title: 'Mid-tier',
    price: '$1,499',
    body: '4 pages: Standard, plus About, with bios for chefs, managers, and owners. Includes a menu-update service for restaurants with revolving menus.',
    seoTitle: 'Mid-Tier Website Package for Restaurants | CoversFlow',
    seoDescription: 'Everything in Standard, plus an About page built around the people running the room, and a menu-update service for kitchens that change often.',
    included: [
      'Everything in Standard — Home, Menu, Contact',
      'An About page built around the people actually running the room — bios for chefs, managers, owners',
      "A menu-update service: tell us what changed, we handle it everywhere it needs to show up",
      'A year of updates included, up to two revisions a month',
    ],
  },
  {
    id: 'custom',
    slug: 'custom',
    title: 'Custom',
    price: "Let's talk",
    body: 'Multi-location sites, online ordering, a full brand overhaul, scoped and quoted around what you actually need.',
    seoTitle: 'Custom Restaurant Website Design | CoversFlow',
    seoDescription: 'Multi-location sites, online ordering, and full brand overhauls — scoped and quoted around what your restaurant group actually needs.',
    included: [
      'Multi-location site architecture that scales with you, not against you',
      'Online ordering, integrated properly, not bolted on',
      'A full brand overhaul, when the whole thing needs rethinking, not just a new coat of paint',
      'Scoped and quoted around your actual situation — no fixed package to squeeze into',
    ],
  },
];

export const plansNote = 'Standard and Mid-tier both include a year of updates, up to 2 revisions a month.';
