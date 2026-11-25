# Tecsudo site (React + Vite)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build in dist/
```

## Content and brand

- **Brand:** `src/brand.js` (name, email, address, social links)
- **Copy:** `src/data.js` (services, industries, tools, FAQ)
- **Colors:** `:root` tokens at the top of `src/styles.css`

## Contact form

Posts to Web3Forms via `src/contact.js`.

1. Copy `.env.example` → `.env`
2. Set `VITE_WEB3FORMS_KEY` from your [Web3Forms](https://web3forms.com) dashboard

## Production (Vercel)

1. Set **`VITE_WEB3FORMS_KEY`** in the Vercel project environment (Production)
2. Redeploy so the build embeds the key
3. After each production deploy, re-run smokes on `https://tecsudo.com`:
   - Contact form submit → success UI → inbox / Web3Forms
   - Cookie Decline / Accept → GA on/off (see plan Phase 2)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) for home OG tags

## Legal

Jurisdiction copy is counsel-gated. See [docs/legal-phase3-checklist.md](docs/legal-phase3-checklist.md).