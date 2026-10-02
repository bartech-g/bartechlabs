# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Bartech Labs portfolio site: a single-page Nuxt 4 site in English (`/`) and Hungarian (`/hu`), with a contact form that sends email.

## Commands

npm is the package manager (`package-lock.json`).

```bash
npm install          # also runs `nuxt prepare` (postinstall), which generates .nuxt/
npm run dev          # dev server at http://localhost:3000
npm run build        # production build -> .output/
npm run preview      # preview the production build
npm run lint         # eslint
npm run typecheck    # vue-tsc type check (nuxt typecheck)
```

There is no test suite.

## Architecture

- **Nuxt 4 layout**: app code is under `app/`. `content/`, `i18n/`, `server/` and `public/` are at the repo root, along with `content.config.ts`, `formkit.config.ts` and `tailwind.config.ts`.
- **Generated config**: `tsconfig.json` and `eslint.config.mjs` import from `.nuxt/`. If lint or types break, run `npx nuxt prepare`.

### Content and i18n (two separate sources of text)
- **Page copy** is in Nuxt Content data files: `content/en/home.yml` and `content/hu/home.yml`.
  - Each file is its own collection (`home_en`, `home_hu`) in `content.config.ts`. Both share one zod schema, so a new field has to be added to the schema and to both YAML files.
  - `app/pages/index.vue` picks the collection by the active locale and passes one slice of the document to each section component (`HeroSection`, `ProcessSection`, …).
  - Don't name a top-level content field `meta`. Nuxt Content reserves it, and the value silently comes back empty. SEO fields are under `seo` for this reason.
- **UI strings** are in `i18n/locales/{en,hu}.json`, used through `$t()`. These are nav labels, form labels, status messages and aria labels.
- `@nuxtjs/i18n` is set to `prefix_except_default` with `en` as the default. `app/layouts/default.vue` applies `useLocaleHead()`, which sets `lang` and hreflang links. It also calls FormKit's `changeLocale` so validation messages follow the active language.

### Contact form
- `app/components/ContactForm.vue` is a FormKit form. Field styling is in `app/assets/css/main.css`, using `@apply` on the `.formkit-*` classes. No FormKit theme package is used. Those rules have to stay outside `@layer`: the class names only exist at runtime, so Tailwind would purge them from a layer.
- The form POSTs to `server/api/contact.post.ts`. The handler:
  - rate-limits each IP (5 requests per 10 minutes, in memory) and returns 429 when exceeded
  - checks a honeypot field named `hp_field`; if it's filled, it returns a fake success without sending
  - validates the fields
  - sends with `useNodeMailer().sendMail` to `runtimeConfig.contactTo`, with reply-to set to the sender
- SMTP settings come from `NUXT_NODEMAILER_*` env vars (see `.env.example`). nuxt-nodemailer only applies env overrides for keys that already exist in the `nodemailer` block of `nuxt.config.ts`. That block defaults to a local unauthenticated SMTP server on `localhost:1025` (Mailpit or similar) for development.

### Styling and accessibility
- Design tokens (colors, fonts) are in `tailwind.config.ts`. `muted` is slightly darker than the original design value so it meets 4.5:1 contrast. The Archivo font (used for the logo) loads from Google Fonts via `app.head` in `nuxt.config.ts`.
- Layout is mobile-first, with a 16px gutter (`px-4 sm:px-8`). The two-column About and Contact sections stack below `md`.
- `AppHeader.vue` is sticky. It switches to a frosted `.glass` background after the page scrolls 8px, and below `md` it shows a menu toggle (`aria-expanded`, closes on Escape and on link click). `section[id]` has a `scroll-margin-top` sized to clear the header; update it if the header height changes.
- `html, body` use `overflow-x: clip` (not `hidden`, which would break the sticky header) because the corner markers stick out past the page edge.
- Accessibility conventions already in place:
  - a skip link and a focusable `<main id="main">`
  - each section is labelled by its heading through `aria-labelledby`
  - decorative markers and arrows have `aria-hidden`
  - the form status area is an `aria-live` region, and focus moves to the success message after sending
  - focus is visible through `:focus-visible`
- `@nuxt/a11y` shows issues in dev.
