# BetterHuman Astro

Astro version of BetterHuman.

## Why Astro

Astro is a strong fit for BetterHuman because this project is mostly:
- content pages
- landing pages
- SEO-oriented blog posts
- newsletter conversion
- static deployment

## Business model

The site is free.
The main goal is to convert readers into a **free weekly newsletter**.
Revenue can come from **ads/sponsorships inside the newsletter**.

So the site should do five things well:
1. push people to a dedicated signup page
2. keep signup prompts visible across the site
3. connect cleanly to a real newsletter platform later
4. show a sponsor/ad model inside the email, not across the site
5. publish SEO articles designed to convert readers into subscribers

## Added growth assets

- `/newsletter` — dedicated landing page for signup
- sticky signup bar across the site
- stronger CTA sections on homepage, blog, and articles
- sponsor/ad mockup section for newsletter monetization
- `/seo-ideas` — 10 article ideas designed to attract subscribers
- contact page notes for Beehiiv / ConvertKit / Buttondown

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Pages

- `/` homepage with aggressive newsletter CTA
- `/newsletter` dedicated signup page
- `/blog`
- `/categories`
- `/about`
- `/contact`
- `/posts/[slug]`
- `/seo-ideas`
- `/thanks`

## Deployment

Static Astro build. Good fit for Netlify or Vercel.
