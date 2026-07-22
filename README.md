# BIG MO Burger Website

A responsive, frontend-only restaurant showcase website built with Next.js, TypeScript and Tailwind CSS.

## Included pages

- `/` — homepage composed from separate section components
- `/menu` — filterable menu page
- `/story` — full brand-story page
- `/reservations` — frontend reservation experience with a demo confirmation state

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Main files to edit

- Menu items: `data/menu.ts`
- Restaurant address, phone and Instagram: `components/Footer.tsx`
- Reservation details: `app/reservations/page.tsx`
- Homepage section order: `app/page.tsx`
- Global colors and visual effects: `app/globals.css` and `tailwind.config.ts`

## Important

The reservation form is intentionally frontend-only. It does not send data. Connect it later to an API route, email provider, database or booking platform.

The menu content and business details are sample placeholders because the official menu, prices, address, phone and hours were not provided.
# big_mo
