# Cozy Tidy Finds - Handoff / Next Session TODO

**Last Updated:** 2026-05-15
**Status:** Site is LIVE at https://cozytidyfinds.com with real products, images, and working links
**Repo:** https://github.com/jonjenkins89-omega/cozytidyfinds.com

---

## What's Done

- Multi-page site with 13 HTML pages
- 26 real Amazon products with images across 5 categories
- Blog with 1,800-word starter post
- Operations manual for the owner at /manual/
- HTTPS enforced, DNS clean
- Link-in-bio page at /links/
- About page with disclosure and privacy
- SEO: sitemap, structured data, meta tags
- GA4 tracking code (placeholder ID)
- Kit newsletter forms (placeholder ID)
- Affiliate click event tracking in JS
- Research docs and Claudian playbook in docs/

---

## Still Needs to Be Done (Priority Order)

### 1. Amazon Associates Account (BLOCKER)
- [ ] Apply at https://affiliate-program.amazon.com with cozytidyfinds.com
- [ ] Once approved, get the real Associate tag
- [ ] Find-and-replace `cozytidyfinds-20` with the real tag across ALL HTML files
- [ ] Must make 3 qualifying sales within 180 days or account closes

### 2. Google Analytics Setup
- [ ] Create GA4 property at https://analytics.google.com
- [ ] Get the Measurement ID (format: G-XXXXXXXXXX)
- [ ] Replace `G-XXXXXXXXXX` in `js/main.js` line 4
- [ ] Verify tracking works by visiting site and checking Real-time in GA4

### 3. Email Service (Kit / ConvertKit)
- [ ] Create free account at https://kit.com
- [ ] Create an inline signup form ("Cozy Tidy Finds Weekly")
- [ ] Get the Form ID from Kit's embed code
- [ ] Replace `FORM_ID` in ALL pages that have the newsletter section (9 files):
  - index.html, kitchen/index.html, bathroom/index.html, organization/index.html,
  - bedroom/index.html, plants/index.html, about/index.html, blog/index.html,
  - blog/best-kitchen-organizers-2026/index.html

### 4. Email Forwarding
- [ ] Try Namecheap Redirect Email again (was broken on 5/13)
  - Domain tab > Redirect Email > Add: support -> the owner's personal inbox (address in current-projects/PRIVATE-NOTES.md, not published)
- [ ] If still broken: set up Zoho Mail free tier (zoho.com/mail)
  - Sign up, verify domain, add MX records to Namecheap DNS

### 5. Social Media Accounts
- [ ] Create Pinterest Business account as "Cozy Tidy Finds"
- [ ] Create Instagram account as @cozytidyfinds
- [ ] Create TikTok account as @cozytidyfinds
- [ ] Update social links in footer of ALL pages (currently href="#")
- [ ] Update social links in links/index.html
- [ ] Set link-in-bio URL to: https://cozytidyfinds.com/links/

### 6. Google Search Console
- [ ] Verify domain at https://search.google.com/search-console
- [ ] Submit sitemap: https://cozytidyfinds.com/sitemap.xml
- [ ] Can use DNS TXT record method for verification (add TXT record in Namecheap)

### 7. Product Images (Optional Upgrade)
- [ ] Current images are Amazon CDN hotlinks (work but not ideal long-term)
- [ ] Option A: Keep as-is for now (functional)
- [ ] Option B: Download images, optimize as WebP, serve from /images/ folder
- [ ] Option C: Wait for the owner to photograph products herself (best for authenticity)

### 8. Amazon Influencer Program
- [ ] Apply once social media has ~500+ engaged followers
- [ ] Gives a custom Amazon storefront (amazon.com/shop/cozytidyfinds)
- [ ] Enables video reviews on Amazon product pages (passive income from Amazon's own traffic)

### 9. Content Expansion
- [ ] Add 2-3 more blog posts (target: "best bathroom organizers", "best closet organization")
- [ ] Add seasonal content (gift guides, Prime Day prep)
- [ ] Expand plants page (only 3 products, could use more)
- [ ] Consider adding a "Deals" page for Prime Day / Black Friday

### 10. Namecheap SSL Certificate
- [ ] Request refund for the SSL cert you purchased (it's unused, GitHub provides free SSL)
- [ ] Or just let it expire if refund window has passed

---

## Quick Reference for Next Claude Session

**Start prompt:** "Working on cozytidyfinds.com. Read CLAUDE.md and docs/PLAYBOOK.md for context. Check SESSION_LOG.md for what's been done."

**Key files:**
- `CLAUDE.md` - Project overview and conventions
- `SESSION_LOG.md` - Full work history
- `docs/PLAYBOOK.md` - Compressed operational playbook (Claudian format)
- `manual/index.html` - the owner's operations manual
- This file (`HANDOFF.md`) - What still needs doing

**Associate tag placeholder:** `cozytidyfinds-20` (in all HTML files)
**GA4 placeholder:** `G-XXXXXXXXXX` (in js/main.js)
**Kit form placeholder:** `FORM_ID` (in 9 HTML files)
**Social link placeholders:** `href="#"` (in footer of all pages + links page)

---

## For the Owner (Show Her)

1. The live site: https://cozytidyfinds.com
2. Her manual: https://cozytidyfinds.com/manual/
3. The link-in-bio page for her social profiles: https://cozytidyfinds.com/links/
4. She needs to: create social media accounts, start posting, photograph products she owns
5. Everything else (Amazon Associates, analytics, email) Jon handles first
