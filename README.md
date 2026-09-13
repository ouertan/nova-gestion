# NOVA GESTION

Website converted from the supplied React prototype into a clean Vite project with separate files.

## Project structure

```text
novagestion-github/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── components/
    │   ├── ContactForm.jsx
    │   ├── ContactSection.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── Nav.jsx
    │   ├── ServiceCard.jsx
    │   ├── Services.jsx
    │   ├── StatCard.jsx
    │   ├── StatusPill.jsx
    │   └── Testimonials.jsx
    ├── data/
    │   └── seed.js
    ├── lib/
    │   └── storage.js
    └── pages/
        ├── AgencySpace.jsx
        └── ClientSpace.jsx
```

## Run locally

Install Node.js 20+.

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Build for production

```bash
npm run build
npm run preview
```

## Publish on GitHub Pages

1. Create a GitHub repository.
2. Put all files from this project in the repository.
3. Push to the `main` branch.
4. GitHub Actions will build and deploy the site automatically.
5. In GitHub, open **Settings → Pages** and make sure the source is **GitHub Actions**.

The workflow is already included in `.github/workflows/deploy.yml`.

## Demo accounts

Client:
- `DEMO-SHOP` / `1234`
- `DEMO-PERSO` / `1234`

Agency:
- `agence2026`

## Important limitation

The original prototype used `window.storage`, which is not a normal browser API and will not work on a plain GitHub Pages deployment. This version uses `localStorage` so the demo works as a static website.

That means client records and contact requests are stored only in the current browser. They are **not shared between visitors or devices**, and the agency password/client passwords are not secure for a real business.

For a real production system with multiple clients, real authentication, shared orders, contact-form delivery, and an agency dashboard, connect the frontend to a backend/database such as Supabase, Firebase, or a custom API.
