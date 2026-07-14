# Fernal Systems — Landing Page

One-page marketing site for Fernal Systems, built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before you go live — things to fill in

- `components/DemoVideo.tsx` — set `VIDEO_URL` to your recorded demo (Loom share link works well).
- `components/ContactCTA.tsx` — set `BOOKING_URL` to your Calendly link, and update `CONTACT_EMAIL`.
- `components/Proof.tsx` — swap the placeholder metrics and testimonial for your first pilot client's real numbers and quote.
- `app/layout.tsx` — update the metadata description if your positioning changes.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset auto-detects as Next.js — no config needed. Click Deploy.
