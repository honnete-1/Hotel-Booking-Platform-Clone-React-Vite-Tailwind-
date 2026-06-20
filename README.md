# stayRW — Hotel Booking Platform

A Booking.com–inspired hotel/accommodation booking web app built with **React + Vite + Tailwind CSS + React Router**. Properties are all located in Rwanda, using royalty-free images and an original brand ("stayRW").

## Quick Start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build
```

## Folder Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Sticky nav with mobile hamburger
│   │   └── Footer.jsx          # 4-column link footer
│   ├── home/
│   │   ├── Hero.jsx            # Hero banner + search bar
│   │   ├── PropertyTypeTabs.jsx
│   │   ├── TrendingDestinations.jsx
│   │   └── DealsSection.jsx
│   └── common/
│       ├── SearchBar.jsx       # Full + compact variants
│       └── PropertyCard.jsx    # Vertical + horizontal layouts
├── pages/
│   ├── HomePage.jsx            # /
│   ├── SearchPage.jsx          # /search  (filters + sort)
│   ├── PropertyPage.jsx        # /property/:id
│   ├── LoginPage.jsx           # /login
│   └── SignupPage.jsx          # /signup
└── data/
    └── properties.json         # 10 mock Rwanda listings
```

## Routing Map

| Path | Page |
|------|------|
| `/` | Home — hero, tabs, trending grid, deals |
| `/search` | Search results — filters, sort, mobile drawer |
| `/property/:id` | Property detail — gallery, rooms, booking widget |
| `/login` | Sign in (UI only) |
| `/signup` | Register (UI only) |

## Design Tokens

- Primary navy: `#003580`
- Accent yellow: `#febb02`
- Blue CTA: `#0071c2`
- Font: **Inter**

## Breakpoints

- Mobile `<640px` — single column, hamburger, filter drawer
- Tablet `640–1024px` — 2-col card grid
- Desktop `>1024px` — multi-col, sticky sidebar

## Deploy to Vercel

1. Push to GitHub
2. Import at vercel.com
3. Add `vercel.json`:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

## Tech Stack

Vite 6 · React 18 · Tailwind CSS 3 · React Router DOM 7

Images from [Unsplash](https://unsplash.com) (free to use).
