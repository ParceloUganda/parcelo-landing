# Parcelo

Personal shopping concierge landing page — lets Ugandans order anything from abroad (US, UK, UAE, China) and get it delivered to their doorstep in Kampala via WhatsApp.

## Run & Operate

- `pnpm --filter @workspace/parcelo run dev` — run the Parcelo frontend (Vite dev server)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port auto-assigned)
- `pnpm run typecheck` — full typecheck across all packages
- No product secrets required for the frontend (purely static landing page)
- `PORT` and `BASE_PATH` — required at dev/build time, automatically provided by the Replit workflow
- `VITE_LOGO_DEV_KEY` — optional, used by the Brands section for logo images

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19 + Vite 7 + Tailwind CSS v4
- API: Express 5 (scaffold only, not used by Parcelo landing page)
- DB: PostgreSQL + Drizzle ORM (scaffold only, not used)
- Fonts: Manrope (Google Fonts)
- Routing: wouter (single-page, no client-side routing needed for landing)

## Where things live

- `artifacts/parcelo/` — the main landing page artifact
- `artifacts/parcelo/src/App.tsx` — root component, wires all sections
- `artifacts/parcelo/src/components/` — all landing page sections (Nav, Hero, VSL, Marquee, Problem, HowItWorks, Testimonials, Pricing, Brands, FAQ, BottomCTA, Footer)
- `artifacts/parcelo/src/parcelo.css` — brand CSS custom properties (colors, animations, responsive breakpoints)
- `artifacts/parcelo/public/` — static assets (parcelo-logo.png, opengraph.jpg, favicon.svg)
- `artifacts/api-server/` — Express API scaffold (unused by landing page)
- `lib/api-spec/openapi.yaml` — API spec (scaffold only)

## Architecture decisions

- **Frontend-only landing page** — no backend or database needed; all sections are static React components
- **CSS custom properties** for theming (`--bg`, `--gold`, `--text`, `--surface`, etc.) via `parcelo.css` — dark mode by default, light mode via `body.light` class
- **IntersectionObserver** for scroll-triggered `fade-up` animations (in App.tsx `useEffect`)
- **WhatsApp deep links** (`wa.me/256792170962`) are the primary CTA throughout the page
- **Logo.dev API** used in Brands section for brand logos, with Google favicon fallback

## Product

A dark-themed, gold-accented landing page for Parcelo — a Kampala-based personal shopping service. Sections: sticky nav, hero with social proof, VSL video placeholder, company marquee, problem statement, 3-step how-it-works, testimonials grid, pricing cards, interactive brand browser (80+ stores across 12 categories), FAQ accordion, bottom CTA, footer.

## User preferences

- Migrated from Vercel/v0; preserve the original design exactly
- Brand colors: dark `#0A0A0B`, gold `#FBCA0C`; font: Manrope

## Gotchas

- The Brands section uses `VITE_LOGO_DEV_KEY` for logo.dev API; logos fall back to Google favicons if the key is missing
- parcelo.css defines the core design system — do not replace with Tailwind utilities
- `body.light` class (not `.dark`) toggles light mode (inverted from shadcn convention)

## Pointers

- See the `pnpm-workspace` skill for workspace structure
- See the `react-vite` skill for frontend build patterns
