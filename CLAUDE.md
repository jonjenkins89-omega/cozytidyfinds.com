# Cozy Tidy Finds

## Overview

Amazon affiliate marketing website. The owner is the face and brand; her husband handles all technical work. The business model: curate home/organization product recommendations, drive traffic from social media (Instagram, TikTok, Pinterest), and earn commissions through Amazon Associates affiliate links when visitors purchase through the site.

## Domain & Hosting

- **Domain:** cozytidyfinds.com (registered via Namecheap)
- **Hosting:** GitHub Pages (static site, free hosting)
- **Repo:** github.com/jonjenkins89-omega/cozytidyfinds.com
- **GitHub org:** jonjenkins89-omega
- **SSL:** Let's Encrypt via GitHub Pages (free, auto-provisioned, HTTPS enforced)

## Tech Stack

- Static HTML/CSS/JS, multi-page site
- No build tools, no JavaScript frameworks, no bundlers
- Shared CSS: `css/styles.css` (extracted from inline, linked from all pages)
- Shared JS: `js/main.js` (GA4 tracking, affiliate click events, mobile menu)
- Google Fonts: Playfair Display (serif headings), Nunito (body sans-serif)
- CSS custom properties for consistent theming (sage green, cream, navy palette)
- Fully responsive (breakpoints at 768px and 480px)

## Project Structure

```
cozytidyfinds.com/
  .nojekyll              # Prevents Jekyll processing
  CNAME                  # Custom domain for GitHub Pages
  CLAUDE.md              # This file
  SESSION_LOG.md         # Running log of all work
  robots.txt             # Search engine directives
  sitemap.xml            # XML sitemap for Google
  404.html               # Custom error page
  index.html             # Homepage (featured picks, category grid)
  css/styles.css         # Shared stylesheet (all pages link to this)
  js/main.js             # GA4 + affiliate tracking + mobile menu
  images/logo.png        # Brand logo
  kitchen/index.html     # Kitchen category (7 products)
  bathroom/index.html    # Bathroom category (4 products)
  organization/index.html # Organization category (6 products)
  bedroom/index.html     # Bedroom & Cozy (6 products)
  plants/index.html      # Plants category (3 products + tips)
  about/index.html       # Brand story, disclosure, privacy
  links/index.html       # Link-in-bio page for social media
  blog/index.html        # Blog listing page
  blog/best-kitchen-organizers-2026/index.html  # First blog post
  manual/index.html      # Operations manual for the owner (not linked from nav)
  docs/                  # Research documents and operational playbook
```

## Conventions

### Shared Blocks
Nav, disclosure bar, newsletter, and footer are duplicated across all pages, marked with HTML comments:
- `<!-- SHARED:NAV -->` / `<!-- /SHARED:NAV -->`
- `<!-- SHARED:DISCLOSURE -->` / `<!-- /SHARED:DISCLOSURE -->`
- `<!-- SHARED:FOOTER -->` / `<!-- /SHARED:FOOTER -->`

When changing any shared block, update ALL HTML files that contain it.

### Affiliate Links
- The LIVE Associates tag is `j91788-20` (the owner's real tag; never reintroduce `cozytidyfinds-20`)
- Links are pasted exactly as generated from the owner's Associates account (SiteStripe/GetLink full URLs or amzn.to short links); never strip their parameters
- Attributes: `class="btn-shop affiliate-link" data-product="slug" data-category="category" target="_blank" rel="noopener nofollow sponsored"`
- CTA text: "Check Price on Amazon"
- **NEVER display prices** (Amazon TOS violation without their API)

### Product Images (changed 2026-08-07)
- ALL product images are SELF-HOSTED in `images/products/`, filename = Amazon image basename with `+` replaced by `plus`
- Never hotlink `m.media-amazon.com` in a page: ad blockers and tracking protection silently kill hotlinked Amazon images for a chunk of visitors (this was Jon's "photos are not there" bug)
- To add a product: download its Amazon image, save to `images/products/`, reference `/images/products/<name>`

### Newsletter (changed 2026-08-07: LIVE via MailerLite, Kit is gone)
- All 9 newsletter forms post to the MailerLite embedded form "CTF Website Newsletter" (form id `195111725217875030`, account `2176883`), endpoint `https://assets.mailerlite.com/jsonp/2176883/forms/195111725217875030/subscribe`
- Subscribers land in MailerLite group "CTF - Website Subscribers" (id `195111687890667227`), single opt-in (double opt-in OFF, set in the dashboard 2026-08-07 so no off-brand confirmation email goes out)
- The MailerLite account details and separation rules live in `current-projects/PRIVATE-NOTES.md` (gitignored). Capture-only is safe; a CTF campaign SEND needs a CTF sender identity first
- `js/main.js` handles submit inline (fetch POST, success message, GA event `newsletter_signup`)

### Remaining Placeholders
- `G-XXXXXXXXXX` -> real GA4 measurement ID
- Social media `href="#"` -> real profile URLs

### Email
- support@cozytidyfinds.com (forwarding to the owner's personal inbox (address in current-projects/PRIVATE-NOTES.md, not published), setup pending in Namecheap)

## Key Documents

- `docs/PLAYBOOK.md` - Compressed operational playbook for Claude sessions
- `docs/research-*.md` - Comprehensive research on affiliate marketing strategy
- `manual/index.html` - Operations manual for the owner (plain-language guide)
- `SESSION_LOG.md` - Running history of all work done

## Session Log

See `SESSION_LOG.md` for a running history of all work done on this project.
