# Golden Wings: Stewardess to Sky Queen

Astro 5 static film site for **Golden Wings: Stewardess to Sky Queen** (GWINGZ STUDIO).

Domain: https://www.golden-wings-robyn.com/

## Stack

- Astro 5 + TypeScript
- `output: 'static'`
- Plain CSS tokens (`src/styles/tokens.css` — Midnight Runway)
- Content collections for Indie Doc Journey journal posts
- No CMS, no auth, no i18n, no Support page, no Gold Reels

## Run / build

```bash
cd site
npm install
npm run dev      # local preview
npm run build    # writes dist/
npm run preview  # serve dist/
```

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 20+
- Static redirects: `public/_redirects` (also listed below)

Optional: replace the contact form `mailto:` stub with Cloudflare Forms or a Worker.

## Redirect map

| From | To | Notes |
|---|---|---|
| `/home` | `/` | Fold old home |
| `/film` | `/watch` | Absorb film stub |
| `/blog` | `/indie-doc-journey` | Blog → Journal |
| `/goldreels` | `/` (or external URL) | **Jettison** — separate property |
| `/goldreels/*` | `/` (or external URL) | **Jettison** |

Prefer 301 to Gold Reels' own URL when that property is live; until then `_redirects` sends those paths home so they leave this IA.

## Routes

- `/` Home
- `/about-the-film`
- `/watch`
- `/press`
- `/contact`
- `/poster`
- `/privacy-policy`
- `/terms-of-use`
- `/indie-doc-journey`
- `/indie-doc-journey/[slug]`

Nav: Home · About · Watch · Press · Contact + secondary Journal.  
Footer: Poster · Privacy · Terms · GWINGZ STUDIO · press@gwingz.studio

## Stubbed items

- Trailer / archival video embeds on `/watch` (TODO placeholders; no fake YouTube IDs)
- Poster download asset on `/poster`
- Press stills / laurel pack links
- Contact form uses `mailto:press@gwingz.studio` (swap for Forms/Worker on Cloudflare)
- Journal post bodies are migration stubs (`draft: true`); full Squarespace bodies later
- Privacy / Terms are lightweight placeholders for the rebuild

## Design brief

See `.ui-craft/brief.md` (copied from build brief).

## Copy rules

- Title in chrome: **Stewardess to Sky Queen**
- No em dashes in outbound visible copy
- Say "synthetic media" not "AI-generated"
- Never spoil private emotional structure
- No donation / Support CTAs in this build
