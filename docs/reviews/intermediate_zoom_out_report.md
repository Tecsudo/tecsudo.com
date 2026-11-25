# Intermediate Zoom Out: Tecsudo Site Audit Plan

**Stage 8 — after Stages 5–7 remediation**

### Summary

The plan is actionable and narrow for a small Vite marketing SPA. YAGNI holds: no Playwright CI, static SEO in `index.html`, conversion-first phasing, counsel gate on 1b. **Feature-spec review: GO to conclude.**

### Residual risks

| Severity | Item |
|----------|------|
| Major | Phase 1a exit vs Phase 2 smokes overlap |
| Major | Phase 1b sitemap fork needs a v1 default |
| Major | Finding map tags P0 #3–4 under 1b incorrectly |
| Nit | P0–P4 evidence block vs execution spine |
| Nit | P3 #14 analytics env not marked deferred |

### Go / no-go

- **Feature-spec:** GO — conclude when user is satisfied with Stage 8 edits  
- **Code/deploy:** GO only after explicit “execute plan” + Vercel key + counsel path

### Recommended plan edits (applied in plan after this report)

1. 1a exit: redeploy only; contact smoke stays in Phase 2  
2. v1 sitemap = `/` only  
3. P0 #3–4 → Phase 3 only in map  
4. P3 #14 marked deferred  
5. Banner: do not ticket from audit evidence section

*Stage 8 — EGM session*