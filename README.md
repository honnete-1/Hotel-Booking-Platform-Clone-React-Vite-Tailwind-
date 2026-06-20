# stayRW — Hotel Booking Platform

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&labelColor=20232a) ![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwind-css&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)

stayRW is a Booking.com–inspired hotel and accommodation booking web app, recreating the structure, spacing system, and visual language of a real-world booking platform. Browse properties, filter and sort search results, view detailed property pages with galleries and room types, and book a stay — all from a clean, fully responsive interface.

**Live Demo:** [https://hotel-booking-platform-clone-react-inky.vercel.app/](https://hotel-booking-platform-clone-react-inky.vercel.app/)

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
│   │   ├── OffersBanner.jsx     # Getaway deals promo
│   │   ├── TopProperties.jsx    # "Stay at our top unique properties"
│   │   ├── PropertyTypeTabs.jsx
│   │   ├── TrendingDestinations.jsx
│   │   ├── DealsSection.jsx     # "Deals for the weekend"
│   │   └── HomesGuestsLove.jsx
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
| `/` | Home — hero, offers, top properties, browse by type, trending, deals, homes guests love |
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

## Deployment

Deployed on Vercel: **[hotel-booking-platform-clone-react-inky.vercel.app](https://hotel-booking-platform-clone-react-inky.vercel.app/)**

The repo includes a `vercel.json` rewrite rule so client-side routes (`/property/:id`, `/search`, etc.) resolve correctly on refresh:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```
Every push to `main` triggers an automatic redeploy.

## Tech Stack

Vite 6 · React 18 · Tailwind CSS 3 · React Router DOM 7

Images from [Unsplash](https://unsplash.com) (free to use).
