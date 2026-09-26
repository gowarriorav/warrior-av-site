# Warrior AV Website

Static, multi-page website for Warrior AV.

## Project structure

- `dist/index.html` — homepage
- `dist/styles.css` — site-wide styling
- `dist/script.js` — navigation, animation, and contact-form behavior
- `dist/assets/` — optimized site images and logo files
- `dist/partners/` — partner-specific pages
- `dist/warrior-property-technology-standard/` — Warrior Standard page

## Preview locally

Run this command from the repository root:

```bash
python3 -m http.server 8000 --directory dist
```

Then open `http://localhost:8000`.

## Deploy

This project has no build step. Configure the hosting provider's publish directory as `dist`.

The HTML currently uses root-relative URLs, which are ready for a custom domain or a domain-root deployment. If deploying under a repository subpath, configure the host to serve `dist` at the domain root or update the root-relative URLs for that base path.

