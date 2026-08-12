/* Per-space page content, keyed by slug. Only spaces with an entry here get
   the full interactive breakdown on their page ([space].astro falls back to
   its plain placeholder for any slug not listed). Keep claims general and
   defensible — no invented stats or results; the site has none yet. */
export interface SpaceSignal {
  title: string;
  body: string;
  checklist: string[];
}

export interface SpaceContentEntry {
  sectionHeading: string;
  signals: SpaceSignal[];
  ctaLine: string;
  ctaLabel: string;
}

export const spaceContent: Record<string, SpaceContentEntry> = {
  'brand-visibility': {
    sectionHeading: 'Where this shows up',
    signals: [
      {
        title: 'Own the branded search',
        body: "When someone searches your restaurant's name directly, your own site, hours, and reviews should be what shows up, not a third-party listing guessing at your hours, or someone else's ad sitting above your name.",
        checklist: [
          'Your website ranks first for searches of your own name',
          'Hours, address, and phone match across every listing',
          'Reviews and menu appear where people look first, not buried',
        ],
      },
      {
        title: 'Show up in AI answers, not just search results',
        body: "A growing share of searches now happen inside tools like ChatGPT and Google's AI Overviews, where there's no page two, just an answer. Getting cited there rests on the same fundamentals as ranking: clear structure, accurate facts, real authority.",
        checklist: [
          'Content structured so AI tools can read and cite it accurately',
          'Hours, menu, and location consistent enough to be trusted',
          'Present in the sources these tools actually draw from',
        ],
      },
      {
        title: 'Get the knowledge panel right',
        body: "The box that shows up next to your search results, hours, photos, menu link, review score, is often the first thing a hungry stranger actually looks at. If it's wrong or incomplete, it costs you before they ever reach your site.",
        checklist: [
          'Google Business Profile fully built out and verified',
          'Photos, categories, and details accurate and current',
          'Duplicate or conflicting listings cleaned up',
        ],
      },
    ],
    ctaLine: 'Want a plain read on where you stand right now?',
    ctaLabel: 'Get my free audit',
  },
};
