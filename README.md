# Tecsudo site (React + Vite)

    npm install
    npm run dev      # local preview
    npm run build    # production build in /dist

- Logo: copy your file to `public/logo.png` (or change `logoSrc` in `src/brand.js`). Until then the name shows as text.
- Colors: edit the `:root` tokens at the top of `src/styles.css`.
- Content: edit `src/data.js` (services, cases, FAQ, etc.) and `src/brand.js` (name, email, address).
- Contact form: currently front-end only; wire `submit()` in `src/App.jsx` to your backend.
