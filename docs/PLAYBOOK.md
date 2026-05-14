# CTF::PLAYBOOK v1.0
# Cozy Tidy Finds Operational Intelligence
# ENCODING: Claudian (machine-optimized, not human-readable)
# LAST_COMPILED: 2026-05-13
# SOURCE_DOCS: research-amazon-associates-fundamentals.md, research-social-media-strategy.md, research-website-optimization.md, research-product-strategy.md, research-asymmetric-playbook.md

---

## §0 ENTITY_MAP

```
BRAND: "Cozy Tidy Finds" | CTF
OPERATOR: Jon Jenkins (tech/backend)
FACE: Jon's wife (content creator, brand voice, social presence)
DOMAIN: cozytidyfinds.com
HOSTING: GitHub Pages (static HTML/CSS, no build tools)
REPO: github.com/jonjenkins89-omega/cozytidyfinds.com
BRANCH: main
MONETIZATION: Amazon Associates affiliate links
SECONDARY_INCOME: [Wayfair 5-7%, Etsy 4%/30d, Target 8%/7d, ShareASale DTC 10-30%, display ads post-25K monthly sessions]
NICHE: home organization + kitchen + cozy living + bathroom + bedroom + plants
AUDIENCE_DEMO: women 25-44, homeowners/renters, median HHI $75K+
```

## §1 COMMISSION_MATRIX

Priority ranking by commission-rate-to-niche-relevance:

| RANK | CATEGORY | RATE | STRATEGIC_WEIGHT |
|------|----------|------|------------------|
| 1 | Kitchen (utensils, organizers, gadgets, cookware, bakeware) | 4.50% | ALWAYS_PREFER |
| 2 | Physical Books (organization/home design books) | 4.50% | SUPPLEMENT |
| 3 | All Other Categories (catch-all, verify per product) | 4.00% | CHECK_FIRST |
| 4 | Handmade | 5.00% | FEATURE_WHEN_AVAILABLE |
| 5 | Home/Furniture/Home Improvement/Lawn & Garden | 3.00% | CORE_BUT_LOW |
| 6 | Beauty (standard) | 3.00% | ADJACENT |
| 7 | Luxury Beauty | 10.00% | EXPAND_LATER |

DECISION_RULE: When two products serve same function, always select Kitchen-categorized variant. $30 kitchen item = $1.35 commission vs $30 home item = $0.90. 50% premium, zero extra effort.

BOUNTY_STACK (per-action, additive to product commission):
- Audible Standard Trial: $20.00
- Audible Premium Plus Annual: $25.00
- Amazon Business signup: $15.00
- Prime Trial/Paid: $3.00
- Prime Video First Stream: $5.00

## §2 COOKIE_MECHANICS (critical decision driver)

```
STANDARD_SESSION: 24h from click
  TERMINATES_ON: [order_placed, 24h_elapsed, another_affiliate_click]
  
CART_EXTENSION: 89 days
  TRIGGER: visitor adds ANY item to cart within 24h session
  SCOPE: only items added during active session
  IMPLICATION: engineer all CTAs for "add to cart" behavior, not "buy now"
  
FULL_CART_ATTRIBUTION: commission on EVERYTHING purchased in session, not just linked product
  IMPLICATION: target audiences in "buying mode" (new apartment, nesting, seasonal refresh)

OVERRIDE: last-click wins. Browser extensions (Honey, Capital One Shopping) can steal attribution at checkout.
```

CTA_ENGINEERING (derived from cookie mechanics):
- "Add to cart to lock in this price" > "Buy now"
- "Add all three to your cart" > "Check out this product"
- Bundle suggestions ("grab the set") extend cart window to 89 days
- Target life-transition audiences (first apartment, new homeowner, nesting) for full-cart multiplier

## §3 PLATFORM_PRIORITY_STACK

```
ALLOCATION:
  Pinterest:  40% effort | SEARCH_ENGINE | pins live 4-12 months | direct affiliate links allowed
  Instagram:  30% effort | COMMUNITY+SALES | Stories link sticker, Reels for growth
  TikTok:     20% effort | VIRAL_REACH | no caption links, DM/bio routing required
  YouTube:    10% effort | REPURPOSE_ONLY | long tail SEO value

POSTING_CADENCE:
  Pinterest:  10-15 pins/day (3-5 original + 5-10 repins) via Tailwind
  Instagram:  4-7 Reels/week + daily Stories (3-7 slides) + 2-3 carousels/week
  TikTok:     2-3/day (each video = independent algorithm test)
  YT Shorts:  3-7/week (repurposed from TikTok/Reels, remove watermarks)

TIMING (US Eastern/Central):
  Pinterest:  Sat-Sun peak, 8-11 PM (timing less critical, search-driven)
  Instagram:  Tue/Wed/Thu 6-9AM, 12-1PM, 7-9PM | Sun 7-9PM for home niche
  TikTok:     Tue/Thu/Fri 7-9AM, 12-3PM, 7-11PM | Sun evening, Sat morning
```

## §4 CONTENT_TEMPLATES

```
FORMAT_PRIORITY (by conversion rate):
  1. Before/After Transformation (15-30s video)
  2. "Amazon Find" Discovery ("This $XX changed my kitchen")
  3. Roundup Carousel ("5 finds under $25")
  4. ASMR/Satisfying (restock, decant, organize)
  5. Honest Review ("I bought the viral [X] so you don't have to")
  6. Routine Content ("My evening reset")

HOOK_BANK (first 1-2 seconds determine reach):
  "This $[price] Amazon find changed my [room]"
  "Things in my [home/apartment] that just make sense"
  "Run to Amazon before this sells out"
  "Wait for the before and after"
  "POV: Your home finally looks like Pinterest"
  "The $[price] product my followers keep asking about"
  "I'm literally obsessed with this Amazon find"
  "Stop scrolling if you love a cozy home"
  "Home upgrades you didn't know you needed"
  "The Amazon product I've bought [X] times"

CTA_HIERARCHY (by conversion):
  1. ManyChat DM automation: "Comment LINK" -> auto-DM (highest converting)
  2. Story link sticker with custom text: "Shop this find" (Instagram)
  3. Story highlight categories as browsable catalog
  4. Direct pin link (Pinterest, no CTA friction)
  5. "Link in bio" (fallback, highest friction)

CONTENT_RATIO: 80% value / 20% direct promotion
PRODUCT_DENSITY: 1-3 products per piece of content, never mass-link
```

## §5 PRODUCT_BATCH_v1 (25 items, 6-week rollout)

### PHASE 1 (Weeks 1-2): Foundation - 8 items

```
KITCHEN_4.5%:
  1. Under-Sink Sliding Organizer 2-Tier     | $20-30 | viral_confirmed | before/after
  2. Clear Pantry Container Set w/ Labels    | $25-40 | restock_ASMR   | buy_multiples:HIGH
  3. Bamboo Drawer Organizer Expandable      | $18-28 | universal_pain  | buy_multiples:HIGH  
  4. Lazy Susan Turntable Clear              | $12-20 | impulse_price   | buy_multiples:VERY_HIGH

HOME_3%:
  5. Under-Sink Drawers Stackable (bathroom) | $20-35 | viral_confirmed_wirecutter
  6. Cable Management Kit                    | $12-18 | reddit_top_post | desk_transform
  7. Over-the-Door Organizer                 | $12-20 | every_door      | buy_multiples:VERY_HIGH

COZY_3-4%:
  8. Sunset Projection Lamp                  | $15-25 | tiktok_native   | room_transform
```

### PHASE 2 (Weeks 3-4): Expand - 8 items
```
  9.  Spice Jar Set w/ Labels               | $25-40 | kitchen 4.5%
  10. Pot Lid Organizer Rack                 | $15-25 | kitchen 4.5% | comedy_hook
  11. Vacuum Storage Bags (large set)        | $20-30 | compression_reveal viral
  12. LED Flameless Candle Set               | $20-35 | room_transform
  13. Chunky Knit Throw Blanket             | $30-50 | pinterest_bait | gift_worthy
  14. Clear Stackable Shoe Boxes            | $25-40 | aspirational_wall
  15. Self-Watering Plant Pots              | $15-25 | plant_killer_audience
  16. Bamboo Bathtub Tray                   | $25-40 | self_care_crossover | gift_worthy
```

### PHASE 3 (Weeks 5-6): Complete - 9 items
```
  17. Over-the-Sink Drying Rack             | $15-25 | kitchen 4.5% | space_saver
  18. Closet Shelf Dividers                 | $15-25 | sweater_stacks
  19. Bedside Caddy                         | $12-20 | hidden_storage
  20. Woodwick Scented Candle               | $20-35 | ASMR_crackling
  21. Plush Pillow Covers Set               | $15-25 | seasonal_refresh
  22. Shower Caddy Rust-Proof               | $15-30 | universal_frustration
  23. Acrylic Vanity Organizer              | $12-22 | vanity_top_aesthetic
  24. Macrame Plant Hanger Set              | $15-25 | boho_pinterest
  25. Desk Organizer Aesthetic              | $18-30 | WFH_audience
```

PRICE_DISTRIBUTION: 60% under $30, 30% $30-50, 10% $50-75
CONTENT_PER_PRODUCT: minimum 4 pieces (transformation video, styled pin, Stories sequence, roundup inclusion)

## §6 WEBSITE_ARCHITECTURE (MIGRATION REQUIRED)

```
CURRENT_STATE: single-page (index.html)
REQUIRED_STATE: multi-page
REASON: single-page cannot rank for multiple keywords, cannot support blog, risks Amazon Associates rejection for "insufficient content"

TARGET_STRUCTURE:
  /                     -> homepage (featured picks, hero, categories)
  /kitchen/             -> kitchen products + reviews
  /bedroom/             -> bedroom products + reviews
  /bathroom/            -> bathroom products + reviews
  /organization/        -> home org products + reviews
  /plants/              -> plants + garden
  /cozy-vibes/          -> blankets, candles, lighting, ambiance
  /blog/                -> SEO content hub
  /blog/best-X-for-Y/   -> roundup posts (35-45% of revenue)
  /gift-guides/         -> seasonal gift guides (10-20% of revenue)
  /deals/               -> Prime Day, Black Friday, current deals
  /about/               -> brand story, author bio (E-E-A-T signal)
  /links/               -> link-in-bio landing page for social traffic

TECH_REQUIREMENTS:
  - GA4 tracking + affiliate click events
  - Google Search Console verification
  - Product schema structured data
  - WebP images with lazy loading
  - LCP target: <2.5s
  - Affiliate disclosure: top of every page with links, plus footer
  - Email capture: header bar + in-content + exit-intent + footer
```

## §7 CONTENT_REVENUE_MODEL

```
BY_CONTENT_TYPE:
  "Best X for Y" roundups:     35-45% of total revenue | 3-5% CTR to Amazon
  Single product reviews:       15-20% of revenue      | 5-8% CTR
  Comparison posts (X vs Y):    10-15% of revenue      | 4-6% CTR
  How-to guides w/ products:    10-15% of revenue      | 1-3% CTR
  Gift guides (seasonal):       10-20% of revenue      | 3-5% CTR
  Deals/sales pages:            5-10% of revenue       | 6-10% CTR

CONTENT_PRIORITY:
  TIER_1 (build first):  "Best X for Y" roundups per category + gift guides + deals page
  TIER_2 (build next):   single product reviews + comparisons + how-to guides
  TIER_3 (ongoing):      seasonal content + trending products + room makeovers

BLOG_POST_TEMPLATE:
  1. Quick-pick summary table (top pick, best value, premium pick)
  2. Individual mini-reviews (200-400 words each, pros/cons, who-it's-for, CTA button)
  3. Buying guide section
  4. FAQ section (targets featured snippets)
  
PUBLISHING_CADENCE:
  Month 1-3: 2 "Best X for Y" + 1 how-to + 1 seasonal per month
  Month 4+:  4-8 posts/month + update 1 existing post
  
WORD_COUNT_TARGETS:
  Roundups: 1,500-2,500w | Reviews: 1,000-1,500w | Guides: 1,500-3,000w
```

## §8 ASYMMETRIC_PLAYS (ranked by leverage)

```
PLAY_1: CART_COOKIE_EXPLOIT
  Mechanic: "add to cart" language extends 24h cookie to 89 days
  Implementation: all CTAs engineered for cart-add, not direct purchase
  Leverage: 89x attribution window from same link, zero extra effort

PLAY_2: AMAZON_INFLUENCER_DOUBLE_DIP
  Apply: Amazon Influencer Program (need social presence first)
  Mechanic: video reviews on Amazon product pages earn from Amazon's internal traffic
  Implementation: same review content uploaded to Amazon + blog + social
  Leverage: traffic you never generated, buyers already in purchase mode

PLAY_3: REVIEW_ARBITRAGE
  Find: products with high search volume + few quality reviews
  Method: Amazon Best Sellers > Google "[product] review" > check if top results are thin AI
  Moat: real photos in your actual home. AI cannot replicate.
  Window: Google HCU (2024-2026) penalized AI roundups, creating vacuum

PLAY_4: EMAIL_LIST_COMPOUNDING
  ROI: $36-45 per $1 spent (retail/ecommerce, Litmus 2025)
  Rule: Amazon prohibits affiliate links in emails. Link to blog posts containing affiliate links.
  Architecture: lead magnet -> welcome sequence (5 emails) -> weekly "Friday Finds" -> seasonal campaigns
  Tools: Kit (free to 10K subs) | Beehiiv | Mailchimp
  Moat: only platform-independent asset. Algorithm-proof.

PLAY_5: SEASONAL_FRONT_RUNNING (30/40 Rule)
  Data: 30-40% of annual affiliate income from Q4 + Prime Day
  Execution: publish seasonal content 6-8 weeks before event
  Calendar:
    May-Jun: publish Prime Day content
    Jul: Prime Day execution
    Aug: back-to-school org content
    Sep-Oct: publish holiday gift guides + Black Friday content
    Nov: BF/CM execution
    Dec: last-minute gifts + New Year prep
    Jan: "New Year New Space" declutter (highest org search volume)
    Mar: spring cleaning guides

PLAY_6: FULL_CART_ATTRIBUTION
  Target: life-transition audiences (first apartment, new homeowner, nesting, newlywed)
  Mechanic: they buy hundreds of dollars of products after one click
  Content: "Everything You Need for Your First Apartment" -> one click -> $500+ cart -> 3% of all of it

PLAY_7: PROGRAM_STACKING
  Rule: same content, highest-paying program per product
  Wayfair 5-7% > Amazon 3% for furniture/home
  Etsy 4% / 30-day cookie > Amazon 3% / 24h cookie for handmade
  DTC brands via ShareASale 10-30% > any marketplace program
  Amazon = default fallback when no better program exists

PLAY_8: PINTEREST_AS_SEARCH_ENGINE
  Mechanic: Pinterest is Google for visual shopping. Pins rank for months/years.
  Home/organization = Pinterest's #1 category
  Pipeline: Pin -> blog post -> Amazon affiliate link
  Each pin = permanent traffic asset that compounds
  Demographics: 85% female, 80% purchase from pins, 45% HHI $100K+
```

## §9 COMPLIANCE_GATES (violation = account termination)

```
HARD_RULES (zero tolerance):
  - NO affiliate links in emails/PDFs/offline materials
  - NO Amazon product prices displayed without API (prices change)
  - NO Amazon trademarks in paid search bids
  - NO link cloaking/redirecting
  - NO incentivized clicks ("buy through my link as a favor")
  - NO purchasing through own affiliate links
  - NO Amazon product images without API permission (use own photos)
  - MUST generate 3 qualifying sales within 180 days of approval

DISCLOSURE_REQUIREMENTS:
  Website: "As an Amazon Associate I earn from qualifying purchases" + plain-language disclosure at top of every page with affiliate links
  Social: #ad or #affiliate or #AmazonAssociate in EVERY post with affiliate links
  Video: verbal + visual disclosure WITHIN video, not just description
  FTC: disclosure must be clear, conspicuous, unavoidable, near affiliate links

DOUBLE_DIP_PROHIBITION (April 2026):
  Cannot claim commission from both Amazon Associates and another program using same traffic with manipulated/combined attribution links
```

## §10 FINANCIAL_MODEL

```
EARNINGS_FORMULA:
  Monthly = clicks_to_amazon * conversion_rate * avg_order_value * commission_rate

SCENARIO_A (Kitchen focus, optimistic):
  AOV: $65 | Rate: 4.5% | Conv: 10% | Commission/conv: $2.93
  $500/mo = 171 conversions = 1,710 clicks = ~34,200 site visitors (5% CTR)

SCENARIO_B (Blended home/kitchen):
  AOV: $40 | Rate: 3.5% | Conv: 8% | Commission/conv: $1.40
  $500/mo = 357 conversions = 4,464 clicks = ~89,280 site visitors

EPC_BENCHMARK: $0.05-$0.11 per Amazon click (Voluum)

CART_MULTIPLIER: average Amazon order 2-3 items. Effective earnings 30-50% above single-product math.

TIMELINE:
  Month 1-3:   $0-50     | building content, getting indexed
  Month 4-6:   $50-300   | first organic traffic, first commissions
  Month 7-12:  $300-1000 | content library compounding
  Month 12-18: $1000-3000| authority established, seasonal bumps
  Month 18-24: $3000-5000+| flywheel spinning

PAYMENT: 60-day delay. January earnings paid ~April 1. Minimum $10 for direct deposit.

DIVERSIFICATION_TARGETS:
  Month 6: add Wayfair, Target, Etsy affiliate programs
  Month 12: add display ads (Mediavine at 25K sessions/month)
  Month 12: add sponsored posts ($100-500/post at 5K+ followers)
  Month 18: add digital products (organization guides, checklists)
```

## §11 TOOL_STACK

```
REQUIRED:
  Canva Pro              | $13/mo  | pins, carousels, Stories, brand templates
  Tailwind               | $15-25/mo | Pinterest scheduling (essential)
  CapCut                 | free    | video editing TikTok/Reels
  GA4                    | free    | analytics + affiliate click tracking
  Google Search Console  | free    | SEO monitoring
  Amazon SiteStripe      | free    | affiliate link generation

RECOMMENDED:
  Kit (ConvertKit)       | free<10K subs | email marketing
  ManyChat               | free<1K contacts | DM automation (highest-converting CTA method)
  Later                  | free tier | Instagram/TikTok scheduling

OPTIONAL:
  Stan Store             | $29/mo | link-in-bio with email capture
  Genius Link            | $5/mo  | international Amazon routing
```

## §12 90_DAY_LAUNCH_SEQUENCE

```
WEEK_1:
  [ ] Apply Amazon Associates with cozytidyfinds.com
  [ ] Set up Pinterest Business account
  [ ] Set up Instagram Creator account  
  [ ] Set up TikTok account
  [ ] Create Canva brand templates (pins, carousels, Stories)
  [ ] Build 10 Pinterest boards with keyword-rich titles
  [ ] Convert site to multi-page architecture (§6)
  [ ] Add GA4 + Search Console + affiliate click tracking
  [ ] Add About page with author bio
  [ ] Order/select Phase 1 products (8 items)

WEEK_2-4:
  [ ] Pinterest: 10+ pins/day via Tailwind
  [ ] Instagram: 1 Reel/day + daily Stories + 2 carousels/week
  [ ] TikTok: 1-2 videos/day
  [ ] Engage 20+ accounts/day (genuine comments)
  [ ] Set up email capture with lead magnet
  [ ] Publish first 2 "Best X for Y" blog posts
  [ ] Launch Phase 1 products on site + social

MONTH_2:
  [ ] Identify top-performing formats/products from analytics
  [ ] Set up ManyChat for comment-to-DM automation
  [ ] Start Phase 2 products (8 items)
  [ ] Publish 4+ blog posts
  [ ] Begin YouTube Shorts (repurpose best TikToks)
  [ ] Build evergreen content library
  [ ] Apply for Amazon Influencer Program

MONTH_3:
  [ ] Launch Phase 3 products (9 items)
  [ ] Refine batching: create 2 weeks of content in one session
  [ ] Build seasonal content calendar (3 months ahead)
  [ ] Evaluate conversion data: what products + formats + platforms convert
  [ ] Apply for Wayfair, Target, ShareASale programs
  [ ] Set monthly income targets from actual data
  [ ] Prep Prime Day content (if July)
```

## §13 BATCHING_PROTOCOL (weekly, ~4 hours)

```
HOUR_1: CAPTURE
  - Set up 3-5 products in styled vignettes
  - Shoot each from multiple angles (flat lay, in-use, close-up)
  - Record 5-7 videos (15-30s each)
  - Film 2-3 before/after transformation sequences
  - Capture material for 10-15 Pinterest pins

HOUR_2: EDIT
  - CapCut: text overlays, trending audio, transitions
  - Canva: Pinterest pin graphics, carousel slides
  - Export: 9:16 for Reels/TikTok/Stories/Shorts, 2:3 for Pinterest

HOUR_3: WRITE
  - All captions for the week
  - Hashtag sets (rotate 5-6 sets)
  - Pinterest pin titles + descriptions (keyword-rich)
  - Story sequences

HOUR_4: SCHEDULE
  - Tailwind: Pinterest pins 7-14 days out
  - Later/Meta Business Suite: Instagram posts
  - TikTok drafts queue
  - YouTube Shorts upload

WEEKLY_THEME_ROTATION:
  Week 1: Kitchen | Week 2: Bedroom/Cozy | Week 3: Bathroom | Week 4: Mixed/Seasonal

DAILY_MAINTENANCE (30-45 min):
  - Post scheduled content
  - Reply to ALL comments and DMs
  - Engage on 10-20 niche accounts
  - Check scheduled pins
```

## §14 METRICS_DASHBOARD

```
WEEKLY_CHECK:
  Impressions/Reach: all platforms
  Engagement Rate: Instagram 3-6% (under 10K), TikTok varies
  Pin Clicks: Pinterest (direct traffic measure)
  Link Clicks: via link-in-bio analytics
  Amazon Clicks: Associates dashboard
  Amazon Orders + Conversion Rate: target 5-10%
  Commission Earned: the number

BENCHMARKS:
  CTR to Amazon:        <2% bad | 2-4% avg | 4-6% good | 6%+ excellent
  Amazon conversion:    <4% bad | 4-7% avg | 7-10% good | 10%+ excellent
  Revenue per 1K visits: <$5 bad | $5-15 avg | $15-30 good | $30+ excellent
  Email signup rate:    <1% bad | 1-2% avg | 2-4% good | 4%+ excellent

MONTHLY_REVIEW:
  Top products by clicks vs purchases (identify conversion gaps)
  Top pages by revenue
  Platform attribution (which social drives actual sales)
  Cart multiplier effect (shipped items revenue vs direct qualifying revenue)
  Email list growth + open/click rates
```

## §15 FAILURE_MODES (pattern recognition)

```
FATAL:
  Quitting before month 4 (content needs 3-6 months to rank)
  Amazon TOS violation (see §9)
  No email list (algorithm-dependent = fragile)
  
REVENUE_KILLING:
  Promoting low-commission low-price products (1% on $10 = $0.10)
  Informational keywords without buyer intent ("what is a humidifier" vs "best humidifier under $50")
  Displaying prices without API
  Spreading across too many categories (topical authority > breadth)
  Ignoring mobile experience (60%+ traffic)
  Generic AI-style content (Google HCU penalty)
  
GROWTH_KILLING:
  Inconsistency (posting daily for 2 weeks then disappearing)
  Trying all platforms at once (master one, then expand)
  Leading with sale instead of value
  Copying other creators exactly
  Buying followers (fake followers don't buy products)
  Ignoring analytics (post blindly = iterate slowly)
  Not updating old content (stale reviews with discontinued products)
```

## §16 DECISION_TREES

```
PRODUCT_SELECTION:
  IF product in Kitchen category -> STRONG_YES (4.5% commission)
  IF product has before/after transformation potential -> STRONG_YES
  IF price $12-30 -> YES (impulse buy zone for social traffic)
  IF buy-multiples potential -> YES (cart multiplier)
  IF 10K+ reviews and 4.5+ stars -> YES (social proof in listing)
  IF solves universal pain point -> YES (everyone has that messy drawer)
  IF looks aesthetic in photos -> YES (visual content potential)
  IF Health & Personal Care category -> AVOID (1% commission)
  IF price >$75 -> NEEDS_SEO_CONTENT (not social impulse)

PLATFORM_SELECTION per product:
  IF satisfying transformation -> TikTok + Instagram Reels
  IF aesthetic/aspirational -> Pinterest + Instagram
  IF requires explanation -> Instagram Carousel + Blog post
  IF ASMR/sensory appeal -> TikTok + YouTube Shorts
  IF gift-worthy -> Pinterest (gift guide boards)

CONTENT_FORMAT per goal:
  IF goal=viral_reach -> Before/After transformation video
  IF goal=direct_sales -> Instagram Stories with link sticker
  IF goal=SEO_traffic -> Blog "Best X for Y" roundup
  IF goal=engagement -> "Comment LINK" + ManyChat DM
  IF goal=evergreen_traffic -> Pinterest pin -> blog post -> affiliate link
  IF goal=trust_building -> Honest review with pros/cons
```

---

# END PLAYBOOK
# NEXT_SESSION_PROTOCOL: read this file first, then check SESSION_LOG.md for latest state, then execute from current phase in §12
