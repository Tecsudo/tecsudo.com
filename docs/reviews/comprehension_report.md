# Comprehension Test: Tecsudo Site Audit Plan

**Stage 6 — EGM feature-spec review**  
**Target:** `tecsudo_site_audit_84462acb.plan.md`  
**FeatureRange:** full document | **DetailedRange:** N/A  
**Verdict:** **Concerns** (not pass, not full fail)

---

## Undefined or vague terms

| Severity | Term / scope | Gap |
|----------|--------------|-----|
| **Major** | **EGM**, **Stage 5 (Zoom Out)**, **Stages 5–8**, **checkpoint choices** | Internal review process is named but not defined. A new reader cannot tell what “plan approval” means or what they must do after this document. |
| **Major** | **Production URL** | Never stated (e.g. `https://tecsudo.com`). SEO work and smoke tests need a single canonical base URL. |
| **Major** | **Counsel** (P0 #3, Phase 3) | No role, contact, or deliverable specification. |
| **Major** | **Inbox** | Web3Forms is named; which mailbox receives submissions and how to confirm delivery is unstated. |
| **Major** | **OG preview** (“debugger or similar”) | No tool name or pass/fail criteria. |
| **Nit** | **EGM** vs repo path | Plan file lives under `.cursor/plans/`; links are repo-relative — repo root should be stated. |
| **Nit** | **a11y** | Used without expansion. |

**Mermaid diagram:** `Nav` appears in an edge but is not declared in the `routes` subgraph.

**Priority labels vs phases:** P0–P4 do not line up one-to-one with Phases 1–5.

---

## Ambiguous ownership / sequencing

| Severity | Scope | Issue |
|----------|--------|--------|
| **Blocker** | **Phase 1 vs Phase 2** | Canonical/sitemap need production host; Phase 1 is not tied to “deploy after” vs smoke on staging. |
| **Major** | **Who sets `VITE_WEB3FORMS_KEY`** | Implied Vercel access; no owner. |
| **Major** | **Hide vs remove placeholder socials** | Two options with no default implementation rule. |
| **Major** | **Phase 3 vs live legal pages** | Gate is only on edits, not whether shipping conflicting copy is acceptable meanwhile. |
| **Major** | **“After plan approval”** | No approver or definition of approval. |

---

## Steps that assume knowledge not in the doc

- No **Prerequisites** (Node, `npm install`, dev port).
- “Local `.env` exists” — not documented in plan (only `.env.example` in README).
- Cookie verification assumes DevTools knowledge without steps.
- Dead-code cleanup does not list full file set (`motion.js` `CARDS`, etc.).
- “Avoid spamming production” vs Phase 2 production contact submit conflicts without test conventions.

---

## Gaps that would block a cold implementer

1. No per-phase **Definition of Done** with checkboxes.
2. No production vs local matrix for each check.
3. SEO package incomplete (description copy, `og:image`, canonical string, absolute sitemap URLs).
4. Legal work is a decision stub without interim ship policy.
5. Social fix lacks code pointers (`App.jsx` footer map).
6. Web3Forms / Vercel setup not documented in plan.

---

## Top 5 fixes to the plan document

1. **Prerequisites & environment** — Node/npm, `.env`, dev URL, Vercel access, **canonical production URL**.
2. **Phase exit criteria** — Testable checks per phase (meta in view-source, OG tool, cookie DevTools steps).
3. **Phase 3 unblock** — Decision owner, counsel output, go-live policy before legal fix.
4. **Collapse EGM metadata** — One line: implementation authorized when user says “execute plan.”
5. **Socials + dead-code checklist** — Default: hide footer icons; explicit file list for hygiene.

---

*Stage 6 Comprehension Test — EGM review session*