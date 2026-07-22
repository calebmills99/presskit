# Golden Wings: Fifty Year Flight Path — Press Kit

Static press kit site for **Golden Wings: Fifty Year Flight Path** (working title also appears as *Golden Wings: Stewardess to Sky Queen*), a documentary by Caleb Mills Stewart / Get Booked Studio.

**Audience:** festival programmers, journalists, grant reviewers.

---

## Quick start (local preview)

The site is plain HTML/CSS/JS. You need a local static server because the JavaScript loads JSON files with `fetch()`, which requires HTTP (not `file://`).

```bash
# Option 1 — Python (built-in)
python3 -m http.server 8080
# then open http://localhost:8080

# Option 2 — Node (if installed)
npx serve .
# then open http://localhost:3000

# Option 3 — VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

---

## How to edit content facts

All copyable facts live in the `/content/` directory as JSON files. Edit the relevant file and save — no build step required.

| File | What it controls |
|---|---|
| `content/film.json` | Title, logline, year, runtime, status |
| `content/synopsis.json` | Short synopsis and long synopsis |
| `content/filmmaker.json` | Director bio, photo path, previous work |
| `content/credits.json` | Key subjects (Robyn Stewart et al.) and crew list |
| `content/laurels.json` | Festival selections and awards |
| `content/press.json` | Stills, poster, trailer URL, EPK path |

### Replacing `[PLACEHOLDER]` values

Search all JSON files for `[` to find every placeholder. Each is clearly labelled with what it expects (e.g. `[CONTACT_EMAIL]`, `[YEAR]`, `[FESTIVAL NAME]`). Replace with the real value and save.

Also search `index.html` for `<!-- TODO` comments — those mark spots where asset paths or links need to be updated.

---

## How to add a festival laurel

Open `content/laurels.json` and append a new object to the `"laurels"` array:

```json
{
  "festival": "Tribeca Film Festival",
  "location": "New York, NY, USA",
  "selection": "Official Selection",
  "award": null,
  "year": "2025"
}
```

If the film won an award, set `"award"` to the award name:

```json
{
  "festival": "Full Frame Documentary Film Festival",
  "location": "Durham, NC, USA",
  "selection": "Official Selection",
  "award": "Jury Award for Best Feature Documentary",
  "year": "2025"
}
```

Save the file. The site re-renders laurels on every page load — no rebuild.

---

## How to add production stills

1. Place the image files in `assets/images/stills/`.  
   Recommended format: JPEG, 1920 px wide minimum for display quality.
2. Open `content/press.json`.
3. Find the entry in the `"stills"` array for the still you're adding (or add a new entry).
4. Set `"available": true` and update `"path"` to the correct relative path:

```json
{
  "id": "still-01",
  "filename": "still-01.jpg",
  "path": "assets/images/stills/still-01.jpg",
  "caption": "Robyn Stewart in the cockpit of a Boeing 737, 1998.",
  "credit": "© Get Booked Studio",
  "available": true
}
```

---

## How to add the poster

1. Place the poster image at `assets/images/golden-wings-poster.jpg` (display resolution).
2. Place the hi-res version for download at `assets/press/golden-wings-poster-hires.jpg`.
3. In `content/press.json`, update the `"poster"` block:

```json
"poster": {
  "filename": "golden-wings-poster.jpg",
  "path": "assets/images/golden-wings-poster.jpg",
  "downloadPath": "assets/press/golden-wings-poster-hires.jpg",
  "available": true
}
```

---

## How to add the trailer

1. Upload your trailer to YouTube or Vimeo.
2. Copy the embed URL (e.g. `https://www.youtube.com/embed/VIDEO_ID`).
3. In `content/press.json`, update the `"trailer"` block:

```json
"trailer": {
  "url": "https://www.youtube.com/watch?v=VIDEO_ID",
  "embedUrl": "https://www.youtube.com/embed/VIDEO_ID",
  "available": true
}
```

---

## How to add the EPK PDF

1. Place the PDF at `assets/press/golden-wings-epk.pdf`.
2. In `content/press.json`, update the `"epk"` block:

```json
"epk": {
  "filename": "golden-wings-epk.pdf",
  "path": "assets/press/golden-wings-epk.pdf",
  "available": true
}
```

3. Also update the `download` button href in `index.html` (search for `[EPK_FILENAME]`).

---

## How to update the hero still

The hero background is a CSS gradient placeholder. To replace it with a real production still:

1. Place the image at `assets/images/hero-still.jpg`.  
   Recommended: landscape, 2400–3600 px wide, high contrast (text overlays it).
2. Open `assets/css/style.css`.
3. Find the comment `/* TODO: replace this placeholder … */` near the `.hero-bg-art` rule.
4. Add a `background-image` declaration to `.hero-bg-art`:

```css
.hero-bg-art {
  background-image: url('../images/hero-still.jpg');
  background-size: cover;
  background-position: center 40%;
  /* keep the gradient overlays below this line */
}
```

---

## File structure

```
presskit/
├── index.html                 ← Main HTML (all sections)
├── assets/
│   ├── css/
│   │   └── style.css          ← All styles
│   ├── js/
│   │   └── main.js            ← Loads JSON, renders dynamic sections
│   ├── images/
│   │   ├── hero-still.jpg     ← TODO: add real still here
│   │   ├── golden-wings-poster.jpg  ← TODO: add poster here
│   │   ├── filmmaker-photo.jpg      ← TODO: add filmmaker photo here
│   │   └── stills/            ← TODO: add production stills here
│   └── press/
│       ├── golden-wings-epk.pdf     ← TODO: add EPK here
│       └── golden-wings-poster-hires.jpg  ← TODO: add hi-res poster here
├── content/
│   ├── film.json              ← Title, logline, year, runtime, status
│   ├── synopsis.json          ← Short + long synopsis
│   ├── filmmaker.json         ← Director bio, photo, previous work
│   ├── credits.json           ← Key subjects + crew
│   ├── laurels.json           ← Festival selections and awards
│   └── press.json             ← Asset paths and availability flags
└── README.md
```

---

## Deploy to GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Choose `main` branch, `/ (root)` folder.
5. Click **Save**.
6. The site publishes at `https://<your-username>.github.io/<repo-name>/`.

> **Note:** Because `main.js` uses `fetch()` to load JSON files, the site must be served over HTTP — GitHub Pages handles this automatically.

---

## Deploy to Cloudflare Pages

1. Push the repository to GitHub (or GitLab).
2. Log in to [Cloudflare Pages](https://pages.cloudflare.com/).
3. Click **Create a project → Connect to Git**.
4. Select your repository.
5. Framework preset: **None** (this is a plain static site).
6. Build command: *(leave blank)*
7. Build output directory: `/` (root, or `.`)
8. Click **Save and Deploy**.

The site publishes at `https://<project-name>.pages.dev`. You can attach a custom domain in the Cloudflare Pages dashboard.

---

## Notes on voice and tone

- Write in the **present tense** about the film and its subjects.
- Be **specific**: names, places, years, aircraft types — concrete details over generalities.
- Avoid résumé language ("proven track record", "leveraged", "dynamic").
- Avoid "AI-powered" framing; if any synthetic media reconstruction workflow is part of the film, use "synthetic media" only in that specific context.
- Placeholders are written as `[ALL CAPS IN BRACKETS]` — replace every one before festival submission.

---

*Press materials are provided for editorial use only. All images and video are copyright Get Booked Studio unless otherwise noted.*
