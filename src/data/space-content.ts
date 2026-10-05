/* Per-space page content, keyed by slug. [space].astro falls back to a plain
   placeholder for any slug not listed here — all six spaces now have an
   entry, so that fallback is currently unused. Keep claims general and
   defensible — no invented stats or results; the site has none yet.

   Voice: see docs/brand.md §3. "We" framing (deliberate — not the doc's own
   "I" recommendation, overridden per direction). 70% operator / 30%
   technical: every technical term earns its place by being cashed out in an
   operational consequence, not stacked for its own sake. No agency-speak. */
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
        body: "When someone searches your restaurant's name directly, we make sure it's your site, your hours, your reviews that show up, not a third-party listing guessing at your hours, or someone else's ad sitting above your name.",
        checklist: [
          'Your website ranks first for searches of your own name',
          'Hours, address, and phone match across every listing',
          'Reviews and menu appear where people look first, not buried',
        ],
      },
      {
        title: 'Show up in AI answers, not just search results',
        body: "A growing share of searches now happen inside tools like ChatGPT and Google's AI Overviews, where there's no page two, just an answer. We build for that the same way we build for ranking: clear structure, accurate facts, real authority. That's what gets a page cited instead of skipped.",
        checklist: [
          'Content structured so AI tools can read and cite it accurately',
          'Hours, menu, and location consistent enough to be trusted',
          'Present in the sources these tools actually draw from',
        ],
      },
      {
        title: 'Get the knowledge panel right',
        body: "The box next to your search results, hours, photos, menu link, review score, is often the first thing a hungry stranger actually looks at. We build it out, keep it current, and clean up every duplicate or conflicting listing so it never costs you a guest before they reach your site.",
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
        body: "The room down the street went dark on search long before anyone noticed the empty tables. We run the keyword gap audit that finds exactly which searches they still own, the broad terms and the long-tail ones that actually seat people, and build the plan to take them.",
        checklist: [
          'Every keyword the room down the street ranks for and you don’t, mapped and prioritized',
          'Long-tail, high-intent searches turned into pages worth building',
          'Their backlink and citation footprint sized up against yours',
        ],
      },
      {
        title: "Tear down what's actually working for them",
        body: "We don't guess why a competitor outranks you. We take their best page apart, structure, schema, how deep the content actually goes, and turn what's working for them into the blueprint for what we build for you.",
        checklist: [
          'A page-by-page teardown of what’s actually ranking for them',
          'Content gaps turned into new pages, menu writing, and location content',
          'Titles, headers, and internal links benchmarked against the field',
        ],
      },
      {
        title: 'Track market share of search, not just rankings',
        body: "One keyword ranking tells you less than how much of the whole local search results you actually own. We track share of search and local pack visibility every month, and report it the way it matters to you, in covers, not charts.",
        checklist: [
          'Monthly share-of-search tracking across your core local keywords',
          'Local pack and map rankings tracked against the competitors you actually compete with',
          'Reporting tied to covers and revenue, not vanity metrics',
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
        body: "A near-me search is someone five minutes away, already deciding, phone in hand. We build for that moment: local pages that match the intent, and a site fast enough that a hungry phone doesn't bounce to the next result before yours even loads.",
        checklist: [
          'Built and optimized for "near me" and voice search queries',
          'Local pages built around the exact intent of someone deciding right now',
          'Site speed fast enough to hold a hungry phone’s attention',
        ],
      },
      {
        title: 'Get named in the guides people actually read',
        body: "We pitch local food writers, neighborhood blogs, and the “best of” roundups people actually read, not for a passing mention, but for the kind of coverage that builds real authority and earns a link worth having.",
        checklist: [
          'Outreach to local food media and “best of” roundup writers',
          'Mentions that build authority, not just visibility',
          'Every placement tracked and reported, plainly',
        ],
      },
      {
        title: 'Build the backlinks that build authority',
        body: "We run digital PR the honest way, earning links through real coverage, not buying them. Every mention we land gets turned into an actual backlink, and we watch your domain authority climb as the leading sign that rankings are about to follow.",
        checklist: [
          'Digital PR built around real stories, not purchased links',
          'Mentions converted into indexable backlinks',
          'Authority tracked as the leading indicator it is',
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
        body: "A review isn't a chore to clear at the end of a shift, it's a ranking signal and a public conversation. We answer every one, in your voice, inside 48 hours, and turn a bad night into a story about how you made it right instead of a reason to pick someone else.",
        checklist: [
          'Every review answered, on brand, inside 48 hours',
          'Review velocity and rating treated as the ranking signal it is',
          'Rough nights turned into visible, public recoveries',
        ],
      },
      {
        title: "Turn what's already happening into search fuel",
        body: "The event you're already running, the collab already on the calendar, that's marketing you haven't cashed in yet. We mark it up so Google can read it, and build the local partnerships that carry what's happening in the room out into the neighborhood.",
        checklist: [
          'Events and collabs structured so search engines can read them',
          'Local partnerships turned into real cross-promotion',
          'A simple calendar that keeps the momentum going, not just the one post',
        ],
      },
      {
        title: 'Earn local links the way you earn regulars',
        body: "A local link gets earned the same slow way a regular becomes a regular: show up, be worth mentioning, do it again. We clean up every listing of your name, address, and phone number, and build the kind of neighborhood links that actually hold.",
        checklist: [
          'Citations cleaned up across the directories that matter',
          'Name, address, and phone number consistent everywhere you’re listed',
          'Links earned from real neighborhood sites, not bought in bulk',
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
        body: "Your Google Business Profile is the one page you don't control unless someone's actually tending it, and most restaurants leave it on autopilot. We keep it built out, current, and correct, hours, photos, menu link, the works, so the box next to your name never costs you a guest before they reach your site.",
        checklist: [
          'Categories, attributes, services, and posts kept fully built out',
          'Photos, menu links, and hours kept current the moment something changes',
          'Local pack ranking tracked and pushed forward, month over month',
        ],
      },
      {
        title: 'Remove every tap between search result and seated',
        body: "Every extra tap between a search result and a booked table is a guest who closes the tab instead of becoming a reservation, and eventually a turn. We walk the booking flow the way a guest actually would, on a phone, and strip out the friction until finding you and reserving a seat take about the same number of taps.",
        checklist: [
          'Booking flow walked and audited for friction and drop-off',
          'Mobile path from search result to reservation shortened',
          'Every call-to-action checked for what it actually costs a guest to use',
        ],
      },
      {
        title: 'Build location pages that are built to rank',
        body: "A shared template with the address swapped out doesn't rank for a neighborhood, it just exists there. We build a real page for each location, with the structured data and local facts that tell Google, and a guest, this is the one near them, not a copy of another one.",
        checklist: [
          'A dedicated, SEO-built page for every location, not a shared template',
          'Location data structured so search engines read it correctly',
          'Each page built around the neighborhood and guest it actually serves',
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
        body: "If your menu schema goes stale, the prix fixe you 86'd in March is still what Google shows in June. We structure your menu and recipes so search engines read them the way a guest would, the right dishes, the right prices, the right dietary tags, and keep it that way every time the kitchen changes something.",
        checklist: [
          'Menu and recipe data structured so Google reads every dish correctly',
          'Updated the moment a dish, price, or 86 changes',
          'Eligible for the richer search listings a plain link never gets',
        ],
      },
      {
        title: "Build a site architecture that's easy to crawl",
        body: "A site Google can't crawl properly is a dining room with half the tables roped off. We clean up the structure and the internal links so every page that matters actually gets found, and nothing important goes undiscovered because of a missing sitemap or a dead end in the menu.",
        checklist: [
          'Site structure cleaned up so the pages that matter actually get crawled',
          'Internal links pointed at your highest-value pages, not scattered',
          'Sitemap and crawl instructions configured so nothing important is missed',
        ],
      },
      {
        title: 'Make site speed a ranking advantage, not a liability',
        body: "A slow page loses a hungry phone before the menu even loads, and Google notices the same thing you would. We keep load speed and site performance in the green on the devices your guests actually use, and check it on a schedule, not just the day the site launched.",
        checklist: [
          'Site speed and performance monitored and kept in the green',
          'Built for the mobile connections your guests actually use',
          'Checked on a recurring schedule, not just once at launch',
        ],
      },
    ],
    ctaLine: "Want to know what's actually happening under the hood?",
    ctaLabel: 'Get my free audit',
  },
};
