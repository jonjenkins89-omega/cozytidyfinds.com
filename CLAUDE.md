# Cozy Tidy Finds

## Overview

Amazon affiliate marketing website for Jon's wife. She is the face and brand; Jon handles all technical work. The business model: curate home/organization product recommendations, drive traffic from social media (Instagram, TikTok, Pinterest), and earn commissions through Amazon Associates affiliate links when visitors purchase through the site.

## Domain & Hosting

- **Domain:** cozytidyfinds.com (registered via Namecheap)
- **Hosting:** GitHub Pages (static site, free hosting)
- **Repo:** github.com/jonjenkins89-omega/cozy-tidy-finds
- **GitHub org:** jonjenkins89-omega
- **SSL:** Let's Encrypt via GitHub Pages (free, auto-provisioned)

## Tech Stack

- Static HTML/CSS, single page (index.html)
- No build tools, no JavaScript frameworks, no bundlers
- Google Fonts: Playfair Display (serif headings), Nunito (body sans-serif)
- CSS custom properties for consistent theming (sage green, cream, navy palette)
- Fully responsive (mobile-first breakpoints at 768px and 480px)

## Project Structure

```
cozy-tidy-finds/
  CLAUDE.md          # This file - project instructions
  SESSION_LOG.md     # Running log of all work done
  index.html         # The entire site - product cards, categories, newsletter signup
  CNAME              # Custom domain config for GitHub Pages
  images/
    logo.png         # Brand logo (circular, used in hero section)
  docs/              # Research documents (affiliate marketing strategy, etc.)
```

## Business Model

1. Wife posts product recommendations on Instagram, TikTok, Pinterest
2. Social media bios and posts link to cozytidyfinds.com
3. Site displays curated product cards with "Shop on Amazon" buttons
4. Buttons are Amazon Associates affiliate links (tagged with associate ID)
5. Commission earned on qualifying purchases made through those links

## Key Details

- Product cards currently use placeholder Amazon URLs - these need to be replaced with actual affiliate-tagged links once the Amazon Associates account is approved
- Newsletter signup is a placeholder (shows alert on click) - needs a real email service integration later
- Social media links in footer are placeholder `#` hrefs - need real profile URLs
- Categories section links are placeholder - will become filtered views or separate pages as catalog grows

## Conventions

- No build tools. Edit index.html directly. Keep it simple.
- Single-page site for now. May expand to multi-page as product catalog grows.
- All product images currently use emoji placeholders. Real product images will be added as products are finalized.
- Research and strategy documents go in `docs/` folder.
- Session work is logged in SESSION_LOG.md at the project root.
- CSS is inline in index.html `<style>` block. No external stylesheet (keeps deployment simple for GitHub Pages).

## Session Log

See `SESSION_LOG.md` for a running history of all work done on this project.
