# Phase 3 — Legal (counsel-owned)

Record counsel’s decision in email or a signed doc before changing governing-law copy.

## Open decision

- **Address on site:** Schenectady, New York (see `src/brand.js`)
- **Governing law in terms:** Pakistan / Islamabad courts (see `src/brand.js`, `src/legal.js`)
- **Action:** Pick single jurisdiction narrative **or** dual-entity wording; then update `src/legal.js` and `src/brand.js`.

## Data-processing inventory (for privacy/cookies copy)

| Visitor choice | Loads |
|----------------|--------|
| Decline | Cloudflare Web Analytics beacon (cookieless) |
| Accept | Cloudflare beacon + Google Analytics (GA4) |
| Contact form | Web3Forms POST to `api.web3forms.com` |

Align wording on `/privacy` and `/cookies` with the above after counsel review.

## Dates

Legal pages use `updated` in `src/legal.js`. Set to the date copy is approved (not a placeholder future date).