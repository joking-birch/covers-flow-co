---
title: "Why Your PDF Menu Is Hurting Your Google Ranking"
description: "Most restaurant menus online are a PDF, a photo, or an embedded image — invisible to Google no matter how good the food is. Here's what structured menu data actually looks like."
publishDate: 2026-09-24
space: back-of-house
---

Open most restaurant websites and the menu is one of three things: a PDF, a photo of the printed menu, or an image embedded in the page. All three look fine to a person. All three are close to invisible to Google, which can't read text inside an image and generally won't bother extracting and ranking content locked inside a PDF the way it ranks a real page.

That means the single most important page on your site, the one people are actually trying to find when they search your name plus "menu," is often the page doing the least work in search.

## What Google actually needs to see

Google doesn't need a prettier menu. It needs the same information structured as real, readable data: dish names, descriptions, prices, and dietary information, marked up in a format called schema.org, specifically the `Menu` and `MenuItem` types. This is the same category of structured data that lets a recipe show up with a star rating and cook time directly in search results, or lets a product show its price without anyone clicking through.

Done right, it means the kitchen's actual current offerings, including the dish that got 86'd this morning, are what Google is reading, not a PDF uploaded eight months ago that nobody's touched since.

## What it actually looks like

Here's a real, working example — a small menu with two sections, marked up the way Google can actually read it:

```json
{
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Dinner Menu",
  "hasMenuSection": [
    {
      "@type": "MenuSection",
      "name": "Starters",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Charred Octopus",
          "description": "Fingerling potatoes, smoked paprika, salsa verde.",
          "offers": {
            "@type": "Offer",
            "price": "18.00",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Roasted Beet Salad",
          "description": "Whipped goat cheese, candied walnuts, sherry vinaigrette.",
          "offers": {
            "@type": "Offer",
            "price": "14.00",
            "priceCurrency": "USD"
          },
          "suitableForDiet": "https://schema.org/VegetarianDiet"
        }
      ]
    },
    {
      "@type": "MenuSection",
      "name": "Mains",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Pan-Seared Branzino",
          "description": "Charred lemon, fennel, olive oil, market greens.",
          "offers": {
            "@type": "Offer",
            "price": "32.00",
            "priceCurrency": "USD"
          }
        }
      ]
    }
  ]
}
```

That block sits quietly in the page's code, invisible to a guest looking at your normal, nicely designed menu page, but fully readable to Google. Every dish is a named, priced, searchable piece of data instead of pixels in a photo. The `suitableForDiet` field is what lets your vegetarian, vegan, or gluten-free dishes actually surface for someone specifically searching for them, something no PDF can do no matter how clearly it's labeled on the page.

## Why it has to stay current, not just get built once

Structured data is only as good as the kitchen's actual state. A menu marked up once at launch and never touched again drifts the same way a stale PDF does; the difference is that it looks correct to Google even after it's wrong, because the format is right even when the content isn't. The real win isn't the markup itself, it's treating the menu as living data that updates the moment a dish, a price, or an 86 changes, the same day it changes everywhere it needs to.

## What this means for your own site

If your menu lives as a PDF or an image right now, this isn't a small tweak, it's rebuilding how the menu exists on your site: as real, structured content instead of a document pretending to be a webpage. It's also one of the highest-leverage changes available, precisely because almost nobody's done it, and it's the exact page most hungry searches are trying to reach.

---

We structure your menu and recipes so search engines read every dish the way a guest would, the right dishes, the right prices, the right dietary tags, and keep it that way every time the kitchen changes something. [Get my free audit](/#get-started).
