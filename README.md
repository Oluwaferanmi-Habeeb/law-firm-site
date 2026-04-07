# JOSEPH IDEMUDIA & CO. Website.

Professional law-firm website built with React + Vite



- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Set any `VITE_*` env vars in Vercel Project Settings (they are injected at build time).

### Optional: Server-Side Contact Form (`/api/contact`)

This repo includes a Vercel Serverless Function at `api/contact.js` that can send contact emails via Resend.

- Set`VITE_CONTACT_FORM_ENDPOINT=/api/contact`
- In Vercel, set: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`

## Environment Variables

Create a `.env` file (or configure in your host):

```bash
# Contact form endpoint (recommended: Formspree/custom API)
VITE_CONTACT_FORM_ENDPOINT=
VITE_CONTACT_FORM_METHOD=POST
VITE_CONTACT_RECIPIENT_EMAIL=josephidemudiaandco@yahoo.com

# Public site URL for canonical/OG metadata (no trailing slash)
VITE_SITE_URL=https://www.josephidemudiaandco.com

# Optional Google Analytics 4
VITE_GA_MEASUREMENT_ID

# Optional client error reporting endpoint
VITE_CLIENT_ERROR_ENDPOINT=
```

## Contact Form Behavior

- If `VITE_CONTACT_FORM_ENDPOINT` is set, the form posts JSON to that endpoint.
- `VITE_CONTACT_FORM_METHOD` is optional for providers requiring a custom method.
- If not set, form falls back to opening an email draft via `mailto:`.
- Basic anti-spam checks are included (honeypot + minimum time gate).

Note: do not put secrets in `VITE_*` values; if your provider needs a secret key, use a backend or serverless proxy.

## SEO / Production Assets

The project includes:

- `index.html` metadata + social tags
- `public/robots.txt`
- `public/sitemap.xml`
- `public/404.html` for static-host routing fallback
- `public/og-image.jpg`

## Notes

- Current navigation uses hash routes (`#/...`) for static hosting compatibility.
- Update `sitemap.xml` and canonical domain if your final production, domain differs.
