# Tecsudo site (React + Vite)

    npm install
    npm run dev      # local preview
    npm run build    # production build in /dist

- Logo: copy your file to `public/logo.png` (or change `logoSrc` in `src/brand.js`). Until then the name shows as text.
- Colors: edit the `:root` tokens at the top of `src/styles.css`.
- Content: edit `src/data.js` (services, cases, FAQ, etc.) and `src/brand.js` (name, email, address).
- Contact form: `src/contact.js` posts to Web3Forms. Set `VITE_WEB3FORMS_KEY` in `.env` (see `.env.example`).
