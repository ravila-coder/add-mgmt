# Addem Capital Management System (ACMS)

Virtual Data Room landing for current and prospective investors of Addem Capital.

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript
- TailwindCSS · shadcn/ui-style primitives (`components/ui`)
- Framer Motion · Lucide Icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production / deploy

```bash
npm run build   # verify a clean build
git init && git add -A && git commit -m "ACMS landing"
vercel          # or push to GitHub and import in Vercel
```

## Structure

```
app/            layout, page, globals, favicon (símbolo)
components/     navbar, hero, kpi-section, quick-links, footer
components/ui/  button, card (shadcn-style primitives)
lib/            utils (cn), site (links + KPI content)
public/logos/   official Addem brand assets
```

## Brand notes

- Palette from the AC brandboard: Verde Oscuro `#0D473D`, Verde Acento `#B0EBC2`
  (single accent), Carbón, Gris, Off-White. Dark mode by default.
- Type: Inter Tight (Light/SemiBold) for display and UI; IBM Plex Mono for
  data, eyebrows and captions.
- KPI figures are the public numbers from addemcapital.mx (as of Sep 30, 2025);
  update them in `lib/site.ts`.
