# Bartech Labs website

Portfolio site for Bartech Labs, built with Nuxt 4, Nuxt Content, @nuxtjs/i18n (English and Hungarian), Tailwind CSS, FormKit and nodemailer.

## Setup

```bash
npm install
cp .env.example .env   # fill in SMTP credentials for the contact form
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

Without a `.env` file, the contact form sends to an SMTP server on `localhost:1025`, such as [Mailpit](https://mailpit.axllent.org/).

## Editing content

- Page copy is in `content/en/home.yml` and `content/hu/home.yml`.
- UI strings (labels, buttons, messages) are in `i18n/locales/en.json` and `i18n/locales/hu.json`.

## Production

```bash
npm run build
npm run preview
```
