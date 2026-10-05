/* Per-space page content, keyed by slug. [space].astro falls back to a plain
   placeholder for any slug not listed here — all six spaces now have an
   entry, so that fallback is currently unused. Keep claims general and
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
  'competitive-gaps': {
    sectionHeading: 'Where the competition is already losing ground',
    signals: [
      {
        title: "Find the keywords they're winning and you're not",
        body: 'A full keyword gap audit maps every search term your closest local competitors rank for and you don\'t, from broad category terms down to the long-tail, high-intent searches that actually convert. Share of voice in local search is finite; every term they own is a term you can take.',
        checklist: [
          'Full keyword gap audit against your top local competitors',
          "Long-tail, high-intent search terms mapped to pages that don't exist yet",
          'Competitor backlink and citation profile benchmarked against yours',
        ],
      },
      {
        title: "Tear down what's actually working for them",
        body: "A page-by-page content teardown shows exactly which on-page SEO signals, structured data, and content depth are earning a competitor their rankings, not guesswork. E-E-A-T, internal linking, and dwell time all get reverse-engineered into a plan for your own pages.",
        checklist: [
          'Page-by-page teardown of competitor content, structure, and schema',
          'Content gaps mapped to new pages, menu descriptions, and location content',
          'On-page SEO fundamentals (titles, headers, internal links) benchmarked against the field',
        ],
      },
      {
        title: 'Track market share of search, not just rankings',
        body: "Rankings for a handful of keywords tell you less than share of search across your whole category. Monthly tracking of impression share, local pack visibility, and click-through rate turns search performance into a number tied to covers and revenue, not vanity metrics.",
        checklist: [
          'Monthly share-of-search reporting across your core local keywords',
          'Local pack and map rankings tracked against named competitors',
          'Clear, plain-language reporting tied to covers and revenue, not vanity metrics',
        ],
      },
    ],
    ctaLine: "Curious how much of the local search results you're actually losing?",
    ctaLabel: 'Get my free audit',
  },
  'discovery': {
    sectionHeading: 'Everything upstream of the reservation',
    signals: [
      {
        title: 'Win the near-me, hungry-right-now search',
        body: "Near-me searches and voice queries are high-intent and mobile-first: someone five minutes away, already deciding. Local landing pages built around that intent, backed by Core Web Vitals fast enough to hold a hungry phone's attention, are what turn that search into a seated guest.",
        checklist: [
          'Optimized for "near me" and mobile voice search queries',
          'Local landing pages built around high-intent, bottom-of-funnel search terms',
          "Core Web Vitals tuned so a hungry phone doesn't bounce to a competitor",
        ],
      },
      {
        title: 'Get named in the guides people actually read',
        body: 'Outreach to local food media, neighborhood blogs, and "best of" roundups builds the kind of topical authority and earned mentions that algorithms and AI answer engines both weigh heavily, well beyond what on-site optimization alone can deliver.',
        checklist: [
          'Outreach to local food media, bloggers, and "best of" roundup writers',
          'Earned mentions that build topical authority and real backlinks',
          'Press and guide placements tracked and reported monthly',
        ],
      },
      {
        title: 'Build the backlinks that build authority',
        body: "Digital PR campaigns designed around real stories, not link farms, convert brand mentions into indexable backlinks and steadily build domain authority. That authority compounds: it's the leading indicator that predicts where rankings go next.",
        checklist: [
          'Digital PR campaigns designed to earn links, not buy them',
          'Brand mentions converted into real, indexable backlinks',
          'Domain authority tracked as a leading indicator, not a vanity number',
        ],
      },
    ],
    ctaLine: 'Want to know what a guest sees before they ever find your front door?',
    ctaLabel: 'Get my free audit',
  },
  'community': {
    sectionHeading: 'The loyalty loop, built in public',
    signals: [
      {
        title: 'Turn reviews into a conversation, not a chore',
        body: "Review velocity and star rating are a core local ranking signal, not just reputation management. Responding on brand, inside 48 hours, every time, turns an everyday chore into a visible signal of care, and turns a bad night into a public recovery story instead of a lost guest.",
        checklist: [
          'Every review responded to, on brand, inside 48 hours',
          'Review velocity and star rating treated as a core local ranking signal',
          'Negative reviews turned into visible, public recovery stories',
        ],
      },
      {
        title: "Turn what's already happening into search fuel",
        body: "Events, pop-ups, and partnerships already happening in the room are an underused source of structured data and co-marketing reach. Event schema markup and a simple content calendar turn the regulars and collabs you already have into ongoing local search and link fuel.",
        checklist: [
          'Events, pop-ups, and collabs structured with event schema markup',
          'Local partnerships turned into co-marketing and cross-promotion',
          'A content calendar that turns the regulars into your best marketing',
        ],
      },
      {
        title: 'Earn local links the way you earn regulars',
        body: "Local link building and citation consistency are slow, compounding work, the same way a regular becomes a regular. Clean NAP data across every directory and backlinks earned from genuine neighborhood sites outperform anything bought from a link farm, and they last.",
        checklist: [
          'Local citation building across the directories that actually matter',
          'NAP (name, address, phone) consistency audited and corrected everywhere',
          'Backlinks earned from neighborhood sites, not bought from link farms',
        ],
      },
    ],
    ctaLine: 'Want to see how your community presence stacks up online?',
    ctaLabel: 'Get my free audit',
  },
  'front-of-house': {
    sectionHeading: 'Every surface a guest touches on the way in',
    signals: [
      {
        title: 'Make your Google Business Profile do the heavy lifting',
        body: "Google Business Profile is the single highest-leverage page you don't control unless someone's actively tending it. Categories, attributes, posts, and Q&A kept current are what keep the knowledge panel and local pack working for you instead of against you.",
        checklist: [
          'Google Business Profile fully optimized: categories, attributes, services, and posts',
          'Photos, menu links, and Q&A kept current so the knowledge panel never misleads',
          'Local pack ranking tracked and improved month over month',
        ],
      },
      {
        title: 'Remove every tap between search result and seated',
        body: "Conversion rate optimization applied to the booking flow finds exactly where mobile guests drop off between a search result and a seated table. A shorter, mobile-first path from tap to table turns search visibility you've already earned into covers you'd otherwise lose.",
        checklist: [
          'Reservation and booking flow audited for friction and drop-off',
          'Mobile-first design so the path from tap to table is as short as possible',
          'Conversion rate optimization applied to every call-to-action on the site',
        ],
      },
      {
        title: 'Build location pages that are built to rank',
        body: "Multi-location sites that share one templated page per address leave rankings on the table. A dedicated page per location, built with LocalBusiness schema and accurate NAP data, targets the specific neighborhood and intent each location actually serves.",
        checklist: [
          'A dedicated, SEO-built page for every location, not a shared template',
          'Location pages structured with LocalBusiness schema and accurate NAP data',
          'Each location page targeting the specific neighborhood and intent it serves',
        ],
      },
    ],
    ctaLine: 'Want a plain read on what a guest sees first?',
    ctaLabel: 'Get my free audit',
  },
  'back-of-house': {
    sectionHeading: 'The plumbing nobody sees and everything depends on',
    signals: [
      {
        title: 'Structure your menu so Google actually understands it',
        body: "Menu and recipe schema markup is structured data that tells Google exactly what you serve, down to the dish, price, and dietary tag, making your menu eligible for rich results instead of a plain link. Kept in sync the moment a dish or price changes, it never goes stale.",
        checklist: [
          'Menu and recipe schema markup implemented so Google reads every dish',
          'Structured data kept in sync the moment a dish or price changes',
          'Rich results (prices, dietary tags, ratings) eligible in search, not just a link',
        ],
      },
      {
        title: "Build a site architecture that's easy to crawl",
        body: "Clean site architecture and internal linking keep crawl budget focused on the pages that matter, instead of wasted on indexation bloat. A correctly configured XML sitemap and robots.txt make sure nothing important goes undiscovered by search engines.",
        checklist: [
          'Clean, flat site architecture that keeps crawl budget focused on what matters',
          'Internal linking structured to pass authority to your highest-value pages',
          'XML sitemap and robots.txt configured so nothing important goes unindexed',
        ],
      },
      {
        title: 'Make Core Web Vitals a ranking advantage, not a liability',
        body: "Core Web Vitals (LCP, CLS, INP) are a confirmed ranking factor and a direct line to conversion rate: a slow mobile page loses hungry guests before they ever see the menu. Ongoing technical SEO monitoring keeps page speed and performance in the green, not just on launch day.",
        checklist: [
          'Core Web Vitals (LCP, CLS, INP) monitored and kept in the green',
          'Page speed optimized for the mobile connections your guests actually use',
          'Technical SEO health checked on a recurring schedule, not just once',
        ],
      },
    ],
    ctaLine: "Want to know what's actually happening under the hood?",
    ctaLabel: 'Get my free audit',
  },
};
