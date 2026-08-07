# Cozy Tidy Finds - Handoff / Next Session TODO

**Last Updated:** 2026-08-07 (overnight autonomous run)
**Status:** Site LIVE at https://cozytidyfinds.com. Monetization wired (tag `j91788-20` on every product). Subscribe WORKS (MailerLite). All images self-hosted. Bottleneck is unchanged: TRAFFIC. No social accounts exist yet.
**Repo:** https://github.com/jonjenkins89-omega/cozytidyfinds.com

---

## What changed 2026-08-07 (see SESSION_LOG for detail)

- Henckels 14-pc self-sharpening knife block added (homepage #1 + kitchen #1). Highest-ticket item on the site.
- Subscribe FIXED: 9 forms -> MailerLite "CTF Website Newsletter" form -> group "CTF - Website Subscribers". Live-tested, subscriber landed active. The test row (a plus-address, noted in `current-projects/PRIVATE-NOTES.md`) can be deleted from MailerLite whenever.
- All 31 product images self-hosted in `images/products/` (ad blockers were eating the Amazon hotlinks; that was the "photos missing" bug).
- Six Pinterest pins drafted: `docs/pin-queue-2026-08-07.md`. Pinterest NOT connected to IFTTT yet; connect URL is in that file.
- Research fleet ran; four new docs in `docs/` (psychology of conversion, how winners operate, next products shortlist, posting playbook).

## Still Needs to Be Done (Priority Order)

### 1. Amazon Associates account check (2 min, Jon) - MOST IMPORTANT, unchanged
- [ ] Verify cozytidyfinds.com is listed in the Associates account under "Websites and Mobile Apps" (if not, clicks may not credit)
- [ ] The 3 qualifying sales / 180 days rule makes traffic urgent

### 2. Pinterest (the traffic lever, now 15 min from live)
- [ ] Owner logs into (or creates) the CTF Pinterest account in the browser, then opens the IFTTT connect URL in `docs/pin-queue-2026-08-07.md`
- [ ] Tell Claude which account connected; it writes the pinterest skill `accounts.md`, then fires the queued pins on the gate, 2-3/day
- [ ] Branded 1000x1500 pin graphics via the ComfyUI pipeline = the upgrade after the first pins prove flow

### 3. GA4 (blocked in automation tab)
- [ ] analytics.google.com would not load for Claude's Chrome automation (likely extension site permissions). Either grant the extension that site, or Jon does the 2-min property creation; Claude then wires `G-XXXXXXXXXX` in js/main.js + every page's gtag script

### 4. Google Search Console
- [ ] Verify domain, submit sitemap.xml (can ride on GA4 verification once that exists)

### 5. Email forwarding (unchanged)
- [ ] support@cozytidyfinds.com -> owner's inbox (address in `current-projects/PRIVATE-NOTES.md`); Namecheap Redirect Email UI was broken, retry or Zoho free

### 6. Later
- [ ] MailerLite: if CTF ever SENDS a campaign, it needs its own CTF sender identity first (see `current-projects/PRIVATE-NOTES.md` for why). Capture-only is fine as-is.
- [ ] More blog posts; the new research docs contain the content plan
- [ ] Amazon Influencer Program at ~500+ followers

## Quick Reference

- Real Associates tag: `j91788-20` everywhere; never `cozytidyfinds-20`
- Product images: SELF-HOSTED ONLY in `/images/products/` (never hotlink m.media-amazon.com; ad blockers kill it)
- Newsletter: MailerLite form 195111725217875030, account 2176883, group "CTF - Website Subscribers" (195111687890667227), single opt-in, wired in js/main.js
- Curated links worksheet: `current-projects/6.26.26_ctf_current.md` (gitignored)
- HARD RULE: the owner's name never appears in any committed/published file
- Remaining placeholders: `G-XXXXXXXXXX` (GA4), social `href="#"` links
