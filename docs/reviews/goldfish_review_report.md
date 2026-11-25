# Stage 7 resolution log

**Action:** User chose *Resolve findings with agent*  
**Target:** `tecsudo_site_audit_84462acb.plan.md`

## Applied (PROPOSE FIX → applied)

| Finding | Resolution |
|---------|------------|
| YAML todo / phase mismatch | Split `fix-trust-p0` → `ship-conversion`, `ship-seo`, `legal-counsel`; aligned `dead-code-cases` / `a11y-optional`; removed duplicate `seo-meta-sitemap` todo |
| Phase 1 SEO before legal | Split **Phase 1a** (conversion) vs **Phase 1b** (link previews) with counsel gate on 1b |
| SEO home-only / sitemap | 1b notes v1 sitemap may be `/` only; og:image in exit criteria |
| Phase 4 CSS-only | Exit criteria include `App.jsx` REVEAL + `motion.js` CARDS |
| Mermaid invalid | Added `shell` subgraph with `Nav`, `ContactForm`, `Analytics` |
| Duplicate audit vs phases | Renamed section to *audit evidence*; added finding→phase table; Phase 2 owns production verification |
| P1 #7 soft 404 | Optional `noindex` on NotFound in Phase 1b |
| Vague Phase 3 marketing hold | Explicit: no paid/outbound citing jurisdiction; 1b gated on counsel |
| Smoke ownership | Phase 2 names product owner + re-run after each prod deploy |
| Analytics policy drift | Phase 3 data-processing inventory bullet |
| Promotional outcome line | Replaced with testable *Done when* bullets (prior pass) |

## Contested / deferred (not applied in plan)

| Finding | Reason |
|---------|--------|
| Ongoing Web3Forms synthetic monitoring | Ops choice; manual Phase 2 owner sufficient for v1 |
| Preview deploy before canonical SEO | Documented as production smokes; add Vercel preview if team grows |
| Delete entire P0–P4 section | Kept as evidence with pointer to phases |

## Stage 8 resolution (second pass)

| Edit | Applied |
|------|---------|
| 1a vs Phase 2 smokes | 1a exit no longer requires contact smoke |
| v1 sitemap | Only `/` in Phase 1b default |
| Finding map | P0 #3–4 → Phase 3 only |
| P3 #14 | Marked deferred in findings list |
| Evidence section | “Do not ticket from this section” banner |
| EGM metadata | Stages 5–8 marked complete in plan |

## Next step

Feature-spec review **complete.** Say **“go ahead and implement”** to run Phases 1a–4 in the repo.