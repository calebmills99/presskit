# Environment

Durable Cloud Agent worker environment for Golden Wings / Gwingz press + film work.
This is a worker box (Node/npm/git ready), **not** a live web host.

## Repo

- **Name:** `presskit`
- **Remote:** `github.com/calebmills99/presskit`
- **Contents:** Static documentary press kit (plain HTML/CSS/JS). No build step today; `assets/js/main.js` loads `content/*.json` at runtime via `fetch()`.

> This environment is attached to `presskit`. It does **not** host the Astro film site. If the Astro film site needs its own worker/host, that is a separate environment for `nobbydoo80/unity-wings` (or its GitHub mirror). No remotes were switched here.

## Toolchain

Provided by the base image and asserted by the `install` script (`git --version && node -v && npm -v`):

- Node `20+` (currently v22)
- npm (currently 10.x)
- git (currently 2.43.x)
- python3 (available for local static preview: `python3 -m http.server 8080`)

## Start behavior

No long-running server. The environment is idle by default — no `start` command and no `terminals`. The static press kit is JS/`fetch()`-driven, so for a *local* preview only, serve it over HTTP:

```bash
python3 -m http.server 8080   # then open http://localhost:8080
```

## Secrets (names only)

Injected as environment variables. Values are managed in the Cloud Agent Secrets panel — **not** stored in this repo, never printed or rotated here.

| Name | Group |
|---|---|
| `AZFOUNDRY_API_KEY` | Azure Foundry |
| `AZFOUNDRY_OPENAI_ENDPOINT` | Azure Foundry |
| `AZFOUNDRY_PROJECT_ENDPOINT` | Azure Foundry |
| `AWS_ACCESS_KEY` | AWS |
| `AWS_SECRET_ACCESS_KEY` | AWS |
| `AWS_REGION` | AWS |
| `C99_API_KEY` | Misc |
| `CF_ACCESS_CLIENT` | Cloudflare |
| `CF_ACCESS_CLIENT_SECRET` | Cloudflare |
| `CF_TOKEN` | Cloudflare |
| `CLAUDE_API_KEY` | Anthropic |
| `GH_TOKEN` | GitHub |

## Future: running an Astro static build

If/when an Astro project lands in this repo (a `package.json` with an Astro `build` script), build the static site with:

```bash
npm i
npm run build
```

Astro emits static output (default `dist/`) suitable for static hosting. There is no Astro project in this repo yet, so `npm run build` is the documented future path, not a current step.
