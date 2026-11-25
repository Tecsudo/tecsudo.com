# Critic Review: Tecsudo Site Audit Plan

**Stage 7 — EGM feature-spec review**  
**Reviewers:** design, structural, style  
**Target:** `tecsudo_site_audit_84462acb.plan.md`

---

## Design (architecture & ops)

| Severity | Finding |
|----------|---------|
| Blocker | Phase 1 ships OG/sitemap before counsel gate while legal copy is inconsistent (NY vs Pakistan). Split **conversion fixes** from **SEO/marketing deploy** or gate SEO on legal sign-off. |
| Blocker | SEO is home-centric; sitemap lists legal routes without per-route meta/prerender strategy. Add `og:image` to Phase 1 exit criteria or limit v1 sitemap to `/` only. |
| Major | Web3Forms key is build-time SPOF; no ongoing monitoring after one smoke. |
| Major | Production is the integration test bed; no preview-deploy step before canonical SEO. |
| Major | Soft-404 (200) + sitemap without `noindex` on client 404 view. |
| Major | Phase 4 CSS-only cleanup misses `App.jsx` REVEAL selectors and `motion.js` CARDS. |
| Major | Analytics: Cloudflare always-on vs consent copy must align in Phase 3. |

**Design patches:** reorder Phase 1; extend Phase 4 to JS selector graph; define sitemap vs legal-head strategy; name post-deploy smoke owner.

---

## Structural (document layout)

| Severity | Finding |
|----------|---------|
| Blocker | YAML todos invert P2/P3 vs body (`dead-code-cases` vs a11y). |
| Major | Mermaid uses undeclared `Nav`, `ContactForm`, `Analytics`. |
| Major | P0–P4 vs Phases 1–5 lack mapping table; P1 #7 orphan. |
| Major | `fix-trust-p0` bundles conversion + legal (different phases). |

**Structural patches:** align todos with phases; add P×Phase matrix; fix Mermaid; split todos.

---

## Style (clarity)

| Severity | Finding |
|----------|---------|
| Major | Business outcome leads with promotional adjectives before tests. |
| Major | Duplicate content: P0–P4 list vs Phases 1–5. |
| Major | Optional items lack pass/fail or threshold. |
| Nit | EGM jargon in main spine; tighten to implementer-facing language. |

---

*Consolidated from parallel Stage 7 Goldfish reviews — EGM session*