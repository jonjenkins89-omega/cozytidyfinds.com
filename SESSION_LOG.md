# Cozy Tidy Finds - Session Log

Running log of all work done on this project. Most recent entries at the bottom.

---

## 2026-05-13

- **Initial site created.** Built index.html with product cards (6 placeholder products across Kitchen, Home Org, Bedroom, Bath, Plants, Cozy Vibes categories), category browse section, "How It Works" explainer, newsletter signup placeholder, and footer with affiliate disclosure. CNAME file set to cozytidyfinds.com. Logo added to images/.

- **Fixed DNS configuration.** Domain was pointing to Namecheap parking IP (159.198.67.182). Updated A records to GitHub Pages IPs: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153.

- **HTTPS enforcement pending.** GitHub provisioning Let's Encrypt certificate after DNS propagation. Once cert is issued, HTTPS enforcement can be enabled in repo settings.

- **Namecheap SSL certificate purchased (unnecessary).** Purchased a Namecheap SSL cert before realizing GitHub Pages provides free SSL via Let's Encrypt automatically. The Namecheap cert is not needed and should not be installed.

- **Project initialized with CLAUDE.md and session log.** Created CLAUDE.md with project overview, tech stack, structure, business model, and conventions. Created this SESSION_LOG.md. Comprehensive affiliate marketing research documents added to docs/ folder.

- **DNS fully fixed.** Found duplicate A record for 185.199.108.153 (one with Namecheap HTTPS redirect ON, injecting proxy IP 159.198.67.182). Turned off HTTPS redirect toggle, removed duplicate. All 4 GitHub Pages A records now clean with HTTPS OFF. CNAME for www pointing to jonjenkins89-omega.github.io confirmed.

- **HTTPS enforced.** GitHub issued Let's Encrypt certificate after DNS cleanup. Enforce HTTPS checkbox enabled and checked in GitHub Pages settings. Site now serves over HTTPS at https://cozytidyfinds.com.

- **Contact email changed.** Footer email updated from hello@cozytidyfinds.com to support@cozytidyfinds.com.

- **Email forwarding NOT yet configured.** Namecheap's email forwarding UI was throwing 500 errors. Need to set up support@cozytidyfinds.com forwarding to the owner's personal inbox (address in current-projects/PRIVATE-NOTES.md, not published). Try again later or use Zoho Mail free tier.

- **Research completed.** 5 research docs + Claudian playbook written to docs/:
  - research-amazon-associates-fundamentals.md (commission rates, cookie mechanics, compliance rules)
  - research-social-media-strategy.md (platform priority, posting cadence, content templates, 90-day roadmap)
  - research-website-optimization.md (site must go multi-page, SEO strategy, conversion optimization)
  - research-product-strategy.md (25 curated products, 6-week rollout plan, content framework)
  - research-asymmetric-playbook.md (top 5 asymmetric plays, income timeline, failure modes)
  - PLAYBOOK.md (compressed operational intelligence for future Claude sessions)

- **All changes committed and pushed to GitHub.** Site live at https://cozytidyfinds.com.

## 2026-05-15

- **Full multi-page site build completed.** Converted from single-page to 13-page site with 26 products across 5 categories.

- **CSS extracted to shared stylesheet.** Moved 460 lines of inline CSS to `css/styles.css`. Added new rules for multi-page features (hamburger menu, disclosure bar, breadcrumbs, category heroes, blog article styles, manual styles, link-in-bio page).

- **Infrastructure files created.** `js/main.js` (GA4 + affiliate click tracking + mobile menu), `.nojekyll`, `robots.txt`, `404.html`.

- **Homepage rebuilt.** New shared nav with all category pages, mobile hamburger, affiliate disclosure bar, prices removed from product cards (Amazon TOS), placeholder affiliate links with tracking attributes, Kit newsletter form placeholder, updated footer.

- **5 category pages built with 26 products total.** Kitchen (7), Bathroom (4), Organization (6), Bedroom & Cozy (6), Plants (3 + tips section). All products have consumer-facing descriptions, badge labels, tracking attributes, and placeholder affiliate links.

- **About page created.** Brand story from the owner's perspective, product methodology, FTC-compliant affiliate disclosure (#disclosure), privacy policy (#privacy), contact info.

- **Link-in-bio page created.** Mobile-first standalone page at /links/ with buttons to all categories, blog, and newsletter. Noindexed.

- **Blog launched.** Blog listing page + first post: "7 Best Kitchen Organizers for 2026" (~1,800 words with product reviews, pros/cons, buyer's guide, FAQ section, Article schema).

- **SEO layer added.** XML sitemap with all 9 public URLs. All pages have unique title/description, canonical URLs, Open Graph tags, and JSON-LD structured data.

- **Newsletter forms updated.** All 9 pages have Kit (ConvertKit) form placeholder (FORM_ID to be replaced).

- **Operations manual for the owner completed.** 10-section guide at /manual/ covering: product management, nav/footer updates, blog posts, email, analytics, social media cheat sheet, compliance rules, seasonal calendar, and ready-to-copy product card template.

- **CLAUDE.md updated** to reflect new multi-page structure, conventions, and placeholder list.

### Pending
- Email forwarding: support@cozytidyfinds.com -> the owner's personal inbox (address in current-projects/PRIVATE-NOTES.md, not published) (Namecheap UI was broken)
- Replace PLACEHOLDER_ASIN with real ASINs across all pages
- Replace cozytidyfinds-20 with real Amazon Associates tag
- Replace G-XXXXXXXXXX with real GA4 measurement ID
- Replace FORM_ID with real Kit form ID
- Add real product images
- Create social media accounts and update placeholder links
- Apply for Amazon Associates

## 2026-07-04 — Real affiliate links live (the 13 curated picks)

- **All 13 of the owner's real Amazon Associates links (tag j91788-20) are now on the site**, sourced from `current-projects/6.26.26_ctf_current.md`. Kitchen page rebuilt with the 9 kitchen picks; organization page leads with the 3 org picks; bathroom leads with the Vtopmart drawers; homepage features 6 of the picks.
- **Every product image now matches its link** — pulled the real main image from each product's own Amazon listing.
- **Every remaining card without a verified link now points to an Amazon search with her tag** (CTA reads "Shop on Amazon"), so no click on the site is unmonetized or dead. Old placeholder tag cozytidyfinds-20 is fully gone.
- **Removed all fabricated star ratings / review counts** (Amazon TOS risk and not honest). Curated picks are badged "CTF Pick".
- **Polish:** product photos display uncropped on white with a soft hover zoom (new `.product-img img` CSS), all images lazy-load, sitemap lastmod bumped to 2026-07-04.
- Added .gitignore so `current-projects/` (link worksheets) never publishes to the live site.
- **Name scrub (Jon's hard rule, same session):** the owner's first name removed from EVERYTHING published: badges renamed "CTF Pick", About-page intro reworded, hidden /home-is-you/ greeting changed to "Hey you,", and name + personal email scrubbed from CLAUDE.md / HANDOFF.md / SESSION_LOG.md (all publicly served by GitHub Pages). Email now lives only in gitignored `current-projects/PRIVATE-NOTES.md`. Verified zero occurrences on every live page and served file. Name remains only in old git history; Jon declined a history rewrite.
- **Image fix:** the 14pc Clear Drawer Organizer card showed the listing's pink promo graphic; swapped to the listing's clear-bins-on-marble photo (71w2xsr8D5L) on homepage + organization page.
- **Decisions:** unverified products link to Amazon SEARCH with her tag rather than keeping invented ASINs (no dead clicks, everything monetized); fake ratings removed for Amazon TOS + honesty; verbatim link URLs kept (linkId tracking intact).
- **Next session (Jon's call, 2026-07-04):** Associates account check (site listed + 3-sales/180-day rule), GA4 + Kit wiring (Jon logs in, Claude drives), then the Pinterest launch kit. See HANDOFF.md.

### Pending (unchanged)
- GA4 ID, Kit FORM_ID, email forwarding, social links.

## 2026-08-07 — Henckels listing, subscribe FIXED, all images self-hosted (overnight autonomous run)

- **New product live: J.A. Henckels 14-pc Self-Sharpening Block Set** (ASIN B07FM9Y8VS, Jon's SiteStripe link, tag j91788-20 verified in the live href). First card on the homepage featured grid and the kitchen page, "New Find" badge, human blurb in site voice. Highest-ticket item on the site (~$220), so one sale outearns ~10 organizer sales.
- **Subscribe feature FIXED end to end** (it was dead; every form posted to the literal Kit placeholder `FORM_ID`). All 9 newsletter forms now post to a real MailerLite embedded form ("CTF Website Newsletter", form 195111725217875030, account 2176883) created tonight via API. Subscribers land in new group "CTF - Website Subscribers" (id 195111687890667227), fully separated from any other list in the account. Double opt-in turned OFF for this form in the dashboard (no off-brand confirmation email to CTF subscribers). `js/main.js` got a submit handler: inline "You're in!" success, validation errors, `newsletter_signup` GA event. **Live-tested on the deployed site: test subscriber landed in the group, status active, source webform.** Account specifics live in `current-projects/PRIVATE-NOTES.md` (gitignored).
- **All product images self-hosted** (Jon reported missing photos; cause: hotlinked `m.media-amazon.com` images get blocked by ad blockers / tracking protection for a slice of visitors, and CDN links rot). All 31 images downloaded to `images/products/` (`+` in Amazon filenames became `plus`), every page rewritten, zero Amazon hotlinks remain. Verified live: every image on the kitchen page serves 200 from cozytidyfinds.com.
- **Blog placeholder killed:** the "Article Photo" gray box on /blog/ now shows the pantry-container photo.
- **Pinterest prepped, nothing posted:** IFTTT create_pin checked, Pinterest NOT connected yet. Six pins drafted in `docs/pin-queue-2026-08-07.md` with live-verified image + landing URLs, plus the connect URL and instructions. Firing requires connecting the CTF Pinterest account and Jon's live confirmation per the pinterest skill gate.
- **GA4 attempt failed-fast:** analytics.google.com would not load in the automation tab (extension site permissions, most likely). Left on the handoff; everything else in the tab (MailerLite, the live site) worked.
- **Research fleet dispatched** (4 parallel agents): affiliate conversion psychology, how winning affiliates operate in 2026, next products shortlist, posting playbook. Results land as four new docs in docs/.
- **CLAUDE.md conventions rewritten** to current reality: real tag policy, self-hosted image rule, MailerLite endpoint details, remaining placeholders (GA4, social links).

## 2026-08-07 (daytime) — Five researched products shipped
- On Jon's go, the five twice-verified staged cards went LIVE: Overmont Dutch oven, Ninja DualZone air fryer, Fullstar chopper (kitchen); GODONLIF candle warmer, Twinkle Star curtain lights (bedroom's FIRST real products; both were top trend signals in the research). Two-sided blurbs (one honest drawback each) per the conversion-psychology research. All verified live, images self-hosted at 800px, constructed dp links with the real tag.
- Next content lever per research: replace the remaining ~15 search-link cards with real products (Plants still has zero), and the two-sided blurb pass on the older cards.
