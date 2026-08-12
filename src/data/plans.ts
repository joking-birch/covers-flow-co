/* Build plans shown both in the homepage "What it costs" section
   (src/pages/index.astro) and the Get Started flow's plan picker
   (src/components/QuickstartForm.astro) — one source so pricing can't
   drift out of sync between the two. */
export interface Plan {
  id: string;
  title: string;
  price: string;
  body: string;
}

export const plans: Plan[] = [
  {
    id: 'standard',
    title: 'Standard',
    price: '$899',
    body: '3 pages: Home, Menu, Contact.',
  },
  {
    id: 'mid-tier',
    title: 'Mid-tier',
    price: '$1,499',
    body: '4 pages: Standard, plus About, with bios for chefs, managers, and owners. Includes a menu-update service for restaurants with revolving menus.',
  },
  {
    id: 'custom',
    title: 'Custom',
    price: "Let's talk",
    body: 'Multi-location sites, online ordering, a full brand overhaul, scoped and quoted around what you actually need.',
  },
];

export const plansNote = 'Standard and Mid-tier both include a year of updates, up to 2 revisions a month.';
