# JOSEPH IDEMUDIA & CO. Website

Professional law-firm website built with React + Vite.

## Run Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Environment Variables

Create a `.env` file (or configure in your host):

```bash
# Contact form endpoint (recommended: Formspree/custom API)
VITE_CONTACT_FORM_ENDPOINT=

# Optional Google Analytics 4
VITE_GA_MEASUREMENT_ID=

# Optional client error reporting endpoint
VITE_CLIENT_ERROR_ENDPOINT=
```

## Contact Form Behavior

- If `VITE_CONTACT_FORM_ENDPOINT` is set, the form posts JSON to that endpoint.
- If not set, form falls back to opening an email draft via `mailto:`.
- Basic anti-spam checks are included (honeypot + minimum time gate).

## SEO / Production Assets

The project includes:

- `index.html` metadata + social tags
- `public/robots.txt`
- `public/sitemap.xml`
- `public/404.html` for static-host routing fallback
- `public/og-image.jpg`

## Notes

- Current navigation uses hash routes (`#/...`) for static hosting compatibility.
- Update `sitemap.xml` and canonical domain if your final production domain differs.
