# Zoom-Out Review: Tecsudo Site Audit Plan

**Mode:** REVIEW (feature specification)  
**Target:** `tecsudo_site_audit_84462acb.plan.md`  
**Lens:** YAGNI, minimalism, business outcomes for a small BI agency marketing SPA (~39 modules, single Vite chunk)

---

## Summary

The plan correctly separates **trust/conversion** (broken socials, contact env, legal inconsistency) from **SEO hygiene** and **dead template CSS**. It is stronger as a technical audit than as a **product improvement spec**: it lacks explicit outcomes (leads, credibility, positioning) and treats maintenance (Playwright, checklist docs, EGM brainstorm) as co-equal with fixes that affect visitors today.

**Codebase reconciliation:** Hero `prefers-reduced-motion` is **already handled** (`styles.css` hides `.hero-video`). README still says edit “cases” in `data.js`, but **no `cases` data exists**—only orphaned `.cases`/`.research` styles in CSS/motion. No `robots.txt`, sitemap, or OG tags (plan accurate). No `.github` workflows; `package.json` is dev/build/preview only.

**Verdict:** Execute a **narrow “trust + SEO shell + delete dead CSS”** track. Defer Playwright, Phase E, analytics env refactor, SPA prerender discussion, and most of Phase A’s exhaustive manual matrix until there is a repeatability problem or a business decision to add net-new sections.

---

## Findings

### About the plan (not re-auditing every code issue)

| Severity | Affected scope | Simplicity rationale |
|----------|----------------|----------------------|
| 🔴 **Blocker** | P2 item #9 + Phase B “hero reduced-motion” | **Stale finding.** `@media (prefers-reduced-motion: reduce) { .hero-video { display: none } }` exists. Scheduling work here wastes a phase slot and erodes trust in the audit. |
| 🔴 **Blocker** | Missing “Outcomes” / success criteria (whole doc) | No definition of **done in business terms** (e.g. contact submits reach inbox, legal copy defensible, LinkedIn preview acceptable). Phases A–E become an unbounded chore list. |
| 🟡 **Major** | Phase A (verification) before Phase B | **Verification-first delays value.** For a site that already passed a browser audit, prioritize P0/P1 fixes, then **one** production smoke (form + legal + mobile contact). Full tab/FAQ/cookie matrix is QA theater unless regressions are frequent. |
| 🟡 **Major** | Phase D: Playwright smoke + todo `ci-smoke` (P3) | **Heavy tooling for a ~184 KB gzipped marketing SPA** with no tests today. `npm run build` on push (or Vercel’s build) catches most breaks. Playwright is justified only after real regressions or frequent non-dev edits. |
| 🟡 **Major** | P3 #12 “remove **or** implement” case studies + Phase E | **YAGNI fork.** `data.js` has no cases; README is stale. Default should be **delete dead CSS/motion hooks** and fix README—not open a brainstorm track for net-new product surface. |
| 🟡 **Major** | Artifacts: `docs/audit-checklist.md` | **Meta-deliverable** for a single-page site. If anything, add 5 lines to README (“pre-deploy: build, submit test form, check OG preview”). |
| 🟡 **Major** | P1 #7 SPA 404 HTTP 200 + prerender mention | Correct technically, but **speculative SEO engineering** for a tiny site. Accept rewrite behavior; do not let “optional prerender” creep into scope. |
| 🟡 **Major** | P0 social URLs “replace” | **Remove/hide until real URLs** is simpler and avoids sending users to generic platform homepages (worse for trust than no icons). |
| 🟢 **Nit** | P3 #14 analytics IDs → `import.meta.env` | Normal for client beacons; env split adds config without visitor benefit unless multi-tenant/staging analytics is required. |
| 🟢 **Nit** | P2 skip link, cookie z-index, industry `alt` | Valid a11y polish; low conversion impact vs P0 contact/legal/socials. Batch with B only if time-boxed. |
| 🟢 **Nit** | P4 hero WebM, code-split legal routes | Correctly optional; current bundle size does not warrant optimization work. |
| 🟢 **Nit** | Mermaid + long evidence tables | Useful for audit record; **not execution scope**—do not copy into implementation tickets verbatim. |

---

## Counter-arguments

### Why doing LESS might be correct

1. **The site already builds and loads**—the highest ROI is **production contact form + legal trust + link previews**, not automation or new sections.
2. **Dead CSS does not hurt users**—it hurts **maintainers**. Deleting selectors is a one-time hygiene pass, not a reason to **add case studies** to justify leftover template markup.
3. **SEO for a referral-led BI agency** is often LinkedIn, email, and calls—not Google long-tail. Meta + OG + a minimal `sitemap.xml` are enough; sitemap for three client routes is a small static file, not a content strategy.
4. **Playwright cookie/GA assertions** are fragile (third-party scripts, consent storage) and expensive to maintain for marginal gain vs a single manual pre-release check.
5. **Phase E (EGM brainstorm)** is appropriate only when the **business** commits to new proof (case studies, testimonials)—not because CSS class names exist.

### Why risky items may be ranked wrong

| Plan rank | Item | Suggested rank | Reason |
|-----------|------|----------------|--------|
| P0 | Placeholder socials | **P0** (but **remove**, don’t hunt URLs) | Active trust harm on every page load. |
| P0 | Web3Forms on Vercel | **P0 #1** | Direct conversion blocker; should be **first line** in execution, not bundled with copy tweaks. |
| P0 | Legal NY vs Pakistan | **P0** (owner: counsel, not dev) | Dev cannot “align” without decision; plan should gate Phase C on **one business/legal answer**. |
| P2 | Hero reduced-motion | **Drop** | Already implemented. |
| P3 | Playwright CI | **P5 / Never** unless policy requires it | Disproportionate to site complexity. |
| P3 | Dead CSS | **P2 hygiene** (delete only) | Reduces confusion; no visitor impact. |
| P2 | Industry `alt=""` | **P3** | Visible `<span>{n}</span>` may satisfy many screen-reader paths; `alt=""` + adjacent text is a valid pattern if tested once. |
| P1 | robots + sitemap | **P1** (keep) | Low cost, aligns with OG/meta batch in `index.html` / `public/`. |

---

## Recommended scope cuts

1. **Collapse phases to three:**  
   - **Ship (days):** Vercel `VITE_WEB3FORMS_KEY`, hide/fix socials, meta description + OG/Twitter + canonical, static `robots.txt` + `sitemap.xml`, legal date fix *after* counsel input on jurisdiction copy.  
   - **Hygiene (half day):** Remove `.cases`, `.research`, unused motion selectors; trim `motion.js` `CARDS` entries that target missing DOM; fix README (remove false “cases” promise).  
   - **Optional polish:** Skip link, industry alt policy, cookie mobile pass—only if a11y is a stated brand requirement.

2. **Delete from plan:** Phase E default path; Playwright workflow; `docs/audit-checklist.md` artifact; P2 hero video motion task; P4 perf unless Core Web Vitals fail on real mobile; analytics env migration.

3. **Shrink Phase A to three checks:** production contact submit → success UI + email; cookie Accept loads GA / Decline does not (one browser session); OG debugger preview for home URL.

4. **Resolve P0 #12 with a business question:** “Do we publish case studies in the next quarter?” **No → delete CSS only.** Yes → content brief first, **no** resurrecting template CSS as the design.

5. **Reuse existing patterns:** Legal metadata already flows through `LegalPage.jsx`; extend **one** approach for document title/description (static `index.html` for home, existing legal page pattern for subroutes—no new head-management library unless multiple share routes appear).

---

## Priority challenges

1. **Treat the plan as a fix list, not a product spec**—add a one-paragraph goal: *credible one-pager that reliably captures inbound leads and survives legal/social scrutiny.*

2. **Stop bundling unrelated P0s**—contact env and legal jurisdiction are different owners and different risk classes; sequence contact first.

3. **Don’t let dead template CSS drive feature scope**—the motion layer still references `.cases>article` and `.research` though JSX has no such sections; deletion is the minimal fix.

4. **Challenge P1 parity with P2 a11y**—for this business, broken footer links and a dead form hurt revenue more than skip links.

5. **Validate audit findings against repo before execution**—at least one scheduled item is already done, which argues for a short **plan patch** before implementation tickets.

---

*Stage 5 Initial Zoom Out — EGM review session*