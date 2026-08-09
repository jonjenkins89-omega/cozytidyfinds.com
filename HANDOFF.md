# Cozy Tidy Finds - Handoff / Next Session TODO

**Last Updated:** 2026-08-09
**Status:** Site LIVE at https://cozytidyfinds.com. TRAFFIC ENGINE RUNNING: Pinterest live (business account cozytidyfinds01 via IFTTT, 6 pins posted 08-07/08-08, first clicks landing), blog = 4 posts, homepage mission section live. All 50 Amazon links verified carrying `j91788-20`. Standing order (Jon 2026-08-09): up to 3 CTF pins/day pre-authorized IF amazon-guard-passed + Codex-cleared + branded graphic + site links only; log every publish in `docs/content-ledger.md`.
**Repo:** https://github.com/jonjenkins89-omega/cozytidyfinds.com

## What changed 2026-08-08/09 (detail in SESSION_LOG + content-ledger)
- Pinterest bridge live end to end: `pinterest` skill (IFTTT create_pin) + branded 1000x1500 pin graphics (`docs/make_pin.py`, template v1 Jon-approved) + `amazon-guard` skill (Amazon policy gate, live-policy-verified). Pins NEVER link to Amazon (Pinterest is not on Amazon's approved social list).
- Blog +3 posts: Henckels breakdown, Under-Sink Reset, Entryway Drop Zone. Homepage: "Why We Started / We Got Tired of Being Sold To" mission section + From the Blog strip.
- FTC CLEANUP (Codex-driven): ALL first-person testing/purchase claims converted to review-sourced framing sitewide, including meta/og/JSON-LD. Iron rules now in CLAUDE.md Content Claims section. Ledger: `docs/content-ledger.md` (gitignored).
- Old (2026-08-07) status lines below are historical.

---

## What changed 2026-08-07 (see SESSION_LOG for detail)

- Henckels 14-pc self-sharpening knife block added (homepage #1 + kitchen #1). Highest-ticket item on the site.
- Subscribe FIXED: 9 forms -> MailerLite "CTF Website Newsletter" form -> group "CTF - Website Subscribers". Live-tested, subscriber landed active. The test row (a plus-address, noted in `current-projects/PRIVATE-NOTES.md`) can be deleted from MailerLite whenever.
- All 31 product images self-hosted in `images/products/` (ad blockers were eating the Amazon hotlinks; that was the "photos missing" bug).
- Six Pinterest pins drafted: `docs/pin-queue-2026-08-07.md`. Pinterest NOT connected to IFTTT yet; connect URL is in that file.
- Research fleet ran; four new docs in `docs/` (psychology of conversion, how winners operate, next products shortlist, posting playbook).

## Codex red-team outcome (2026-08-07, full loop run before final push)
- CRITICAL caught pre-push: operator docs and account detail would have published on this PUBLIC repo. Fixed: all identity/account detail scrubbed from served files (verified 0 leaks live), operator docs (research, pin queue, staged cards) gitignored and 404 on the live site, git identity reset to the noreply account.
- Confirmed clean by both reviewers: affiliate links + tag, image sanitization mapping, JS handler (no XSS, no double-submit, safe on formless pages), HTML validity, no fabricated ratings/prices.
- Fixed from findings: no-JS newsletter fallback (hidden ml-submit/anticsrf fields on all 9 forms).
- OPEN, Jon's call: pushed commit e988277 has author "Jonathan Jenkins" + personal email in public GitHub metadata. Fix is a history rewrite + force push (one command, ready in PRIVATE-NOTES). Old commits also carry the name (Jon declined a rewrite before). Also Jon's-call: "Jonathan" signature on /home-is-you/ and "Tell Jon" in /manual/ remain live.

## Still Needs to Be Done (Priority Order)

### 1. Amazon Associates account check (2 min, Jon) - MOST IMPORTANT, unchanged
- [ ] Verify cozytidyfinds.com is listed in the Associates account under "Websites and Mobile Apps" (if not, clicks may not credit)
- [ ] The 3 qualifying sales / 180 days rule makes traffic urgent

### 1b. Product image policy decision (Jon, after reading research-how-winners-operate-2026.md)
- [ ] The 2026-08-07 self-hosting fix WORKS (and hotlinking was genuinely broken for ad-blocked visitors), but the winners research doc found Amazon's current policy only permits product imagery served via their API or approved links, so self-hosted copies carry ToS exposure (common practice, rarely enforced, still real). Options: keep as-is; or replace product shots with the owner's own photos over time (best: also required for Pinterest pins anyway, and immune to policy); or PA API images once the 3-sale gate is passed. Decide direction; do not revert to hotlinks.

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
