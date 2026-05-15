# Cozy Tidy Finds

## Overview

Amazon affiliate marketing website for Jon's wife Johnna. She is the face and brand; Jon handles all technical work. The business model: curate home/organization product recommendations, drive traffic from social media (Instagram, TikTok, Pinterest), and earn commissions through Amazon Associates affiliate links when visitors purchase through the site.

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
  manual/index.html      # Operations manual for Johnna (not linked from nav)
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
- Format: `https://www.amazon.com/dp/PLACEHOLDER_ASIN?tag=cozytidyfinds-20`
- Attributes: `class="btn-shop affiliate-link" data-product="slug" data-category="category" target="_blank" rel="noopener nofollow sponsored"`
- CTA text: "Check Price on Amazon"
- **NEVER display prices** (Amazon TOS violation without their API)

### Placeholders to Replace
- `PLACEHOLDER_ASIN` -> real Amazon ASINs (once products are finalized)
- `cozytidyfinds-20` -> real Amazon Associates tag (once account approved)
- `G-XXXXXXXXXX` -> real GA4 measurement ID
- `FORM_ID` -> real Kit (ConvertKit) form ID
- `.placeholder-card` divs -> real product images
- Social media `href="#"` -> real profile URLs

### Email
- support@cozytidyfinds.com (forwarding to johnna_917@yahoo.com, setup pending in Namecheap)
- Kit (ConvertKit) for newsletter signups (account setup pending)

## Key Documents

- `docs/PLAYBOOK.md` - Compressed operational playbook for Claude sessions
- `docs/research-*.md` - Comprehensive research on affiliate marketing strategy
- `manual/index.html` - Operations manual for Johnna (plain-language guide)
- `SESSION_LOG.md` - Running history of all work done

## Session Log

See `SESSION_LOG.md` for a running history of all work done on this project.
