# Cozy Tidy Finds - Handoff / Next Session TODO

**Last Updated:** 2026-07-04
**Status:** Site is LIVE at https://cozytidyfinds.com with the owner's REAL affiliate links (tag `j91788-20`) on every product. Monetization is wired; the bottleneck is now traffic + the setup items below.
**Repo:** https://github.com/jonjenkins89-omega/cozytidyfinds.com

---

## What's Done

- Multi-page site, live, HTTPS, SEO (sitemap, structured data, meta tags)
- **2026-07-04: all 13 of the owner's real Amazon Associates links are live** (from `current-projects/6.26.26_ctf_current.md`, a local-only folder that git never publishes). Kitchen page = her 9 kitchen picks; organization leads with her 3 picks; bathroom leads with the Vtopmart drawers; homepage features 6.
- Every product photo pulled from its own Amazon listing, so image always matches link
- Cards without a verified pick link to an Amazon **search** with her tag (CTA "Shop on Amazon"), so every click on the site is monetized; the old placeholder tag `cozytidyfinds-20` is fully gone
- Fabricated star ratings/review counts removed site-wide (Amazon TOS risk); curated picks badged "CTF Pick"
- **No personal names anywhere on the published site or served files** (Jon's hard rule, 2026-07-04). Owner's email lives only in `current-projects/PRIVATE-NOTES.md` (gitignored). Name still exists in old git history; Jon declined a history rewrite - fine.
- Blog, /manual/, /links/, About w/ disclosure + privacy, affiliate click tracking in JS
- Full detail: SESSION_LOG.md entry 2026-07-04

## Still Needs to Be Done (Priority Order)

### 1. Amazon Associates account check (2 min, Jon) - MOST IMPORTANT
- [ ] Verify cozytidyfinds.com is listed in her Associates account under "Websites and Mobile Apps" (if not, clicks may not credit)
- [ ] Remember: 3 qualifying sales within 180 days of account creation or Amazon closes it -> traffic is urgent

### 2. Google Analytics (GA4)
- [ ] Jon logs into analytics.google.com in Chrome; Claude can drive browser, create the property, and wire the ID
- [ ] Replace `G-XXXXXXXXXX` in `js/main.js` AND the gtag `<script>` tag in every HTML page

### 3. Kit (ConvertKit) newsletter
- [ ] Free account at kit.com, one inline form; replace `FORM_ID` in the 9 pages with newsletter sections

### 4. Social accounts + traffic (the actual lever)
- [ ] Owner creates Pinterest Business / Instagram / TikTok as "cozytidyfinds" (needs her phone/email)
- [ ] Then Claude builds the Pinterest launch kit (branded pin graphics via the free local ComfyUI cover pipeline, captions, 10-min/day posting schedule) - offered 2026-07-04, Jon deferred to next session
- [ ] Update footer social links (`href="#"`) + /links/ page

### 5. Email forwarding
- [ ] Namecheap Redirect Email: support@ -> owner's inbox (address in `current-projects/PRIVATE-NOTES.md`); UI was broken 5/13, retry or use Zoho free tier

### 6. Google Search Console
- [ ] Verify domain, submit sitemap.xml

### 7. Later / optional
- [ ] More blog posts, seasonal content, plants page expansion
- [ ] Amazon Influencer Program at ~500+ followers
- [ ] Self-hosted WebP product images (current Amazon CDN hotlinks work)
- [ ] Namecheap SSL refund (unused; GitHub provides SSL)

---

## Quick Reference for Next Claude Session

**Start prompt:** "Working on cozytidyfinds.com. Read CLAUDE.md and HANDOFF.md, then SESSION_LOG.md for history."

**Key facts:**
- Real Associates tag: `j91788-20` - already live in every product link; never reintroduce `cozytidyfinds-20`
- Her curated links list: `current-projects/6.26.26_ctf_current.md` (gitignored, local only)
- Remaining placeholders: `G-XXXXXXXXXX` (GA4, js/main.js + every page's gtag script), `FORM_ID` (Kit, 9 pages), social `href="#"`
- HARD RULE: the owner's name never appears in any committed/published file (badges say "CTF Pick"). Her email only in `current-projects/PRIVATE-NOTES.md`.
- NOTE: CLAUDE.md's "Conventions > Affiliate Links / Placeholders to Replace" sections still describe the old placeholder-tag era; this HANDOFF is current. (Flagged 2026-07-04; update CLAUDE.md next session with Jon's OK.)

## For the Owner (Show Her)

1. The live site: https://cozytidyfinds.com
2. Her manual: https://cozytidyfinds.com/manual/
3. Link-in-bio page: https://cozytidyfinds.com/links/
4. She needs to: create social accounts, start posting (Pinterest first)
5. Jon handles: Associates account check, analytics, Kit, email forwarding
