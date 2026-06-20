# stayRW — Hotel Booking Platform

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&labelColor=20232a) ![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwind-css&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)

stayRW is a Booking.com–inspired hotel and accommodation booking web app, recreating the structure, spacing system, and visual language of a real-world booking platform. Browse properties, filter and sort search results, view detailed property pages with galleries and room types, and book a stay — all from a clean, fully responsive interface.

**Live Demo:** [https://hotel-booking-platform-clone-react-inky.vercel.app/](https://hotel-booking-platform-clone-react-inky.vercel.app/)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Routing Map](#routing-map)
- [Local Setup](#local-setup)
- [Design System](#design-system)
- [Responsiveness](#responsiveness)
- [Mock Data](#mock-data)
- [Deployment](#deployment)
- [Known Limitations](#known-limitations)
- [Credits](#credits)

## Features

**Home page**
- Sticky header with service-tab navigation, currency/help controls, and Sign in / Register actions
- Hero section with a search bar (destination, check-in/check-out, guests) that submits straight into Search Results
- Promotional "Getaway Deals" banner
- "Stay at our top unique properties" carousel-style row
- "Browse by property type" photo cards (Hotels, Apartments, Resorts, Villas)
- "Trending destinations" image grid
- "Deals for the weekend" and "Homes guests love" property rows
- Wishlist heart on every property card — toggles to a filled red heart on click and back on a second click, using local component state (no backend persistence)

**Search Results (`/search`)**
- Filter sidebar: property type, max price (range), minimum rating — collapses into a slide-over drawer on mobile
- Sort by recommended, price (low→high / high→low), or rating
- Live result count and an empty state when no properties match
- Sidebar is sticky on desktop scroll

**Property Details (`/property/:id`)**
- Image gallery with a large preview and clickable thumbnail strip
- Title, location, star rating, and review score
- Amenities list
- Room types table (name, capacity, price) with a "Reserve" action per room
- Booking widget that's sticky on desktop and inline on mobile, with a live nights/price calculation
- Guest reviews section

**Auth pages (`/login`, `/signup`)**
- Form layout matching the reference style — UI only, no real authentication

## Tech Stack

| Layer | Choice |
|---|---|
| Build tool | Vite 6 |
| UI library | React 18 |
| Styling | Tailwind CSS 3 |
| Routing | React Router DOM 7 |
| Data | Local JSON (`properties.json`) — no backend |
| Images | [Unsplash](https://unsplash.com) (free to use) |
| Deployment | Vercel |

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx           # Sticky nav, service tabs, mobile hamburger menu
│   │   └── Footer.jsx           # 4-column link footer
│   ├── home/
│   │   ├── Hero.jsx             # Hero banner + search bar
│   │   ├── OffersBanner.jsx     # Getaway deals promo
│   │   ├── TopProperties.jsx    # "Stay at our top unique properties"
│   │   ├── PropertyTypeTabs.jsx # Browse by property type (photo cards)
│   │   ├── TrendingDestinations.jsx
│   │   ├── DealsSection.jsx     # "Deals for the weekend"
│   │   └── HomesGuestsLove.jsx
│   └── common/
│       ├── SearchBar.jsx        # Full + compact variants
│       └── PropertyCard.jsx     # Vertical + horizontal layouts, wishlist heart
├── pages/
│   ├── HomePage.jsx             # /
│   ├── SearchPage.jsx           # /search   — filters, sort, mobile drawer
│   ├── PropertyPage.jsx         # /property/:id — gallery, rooms, booking widget
│   ├── LoginPage.jsx            # /login
│   └── SignupPage.jsx           # /signup
└── data/
    └── properties.json          # 10 mock Rwanda listings
```

## Routing Map

| Path | Page | Notes |
|---|---|---|
| `/` | Home | Hero, offers, top properties, browse by type, trending, deals, homes guests love |
| `/search` | Search results | Filters (type/price/rating), sort, responsive drawer |
| `/property/:id` | Property detail | Gallery, amenities, room types, booking widget, reviews |
| `/login` | Sign in | UI only |
| `/signup` | Register | UI only |

## Local Setup

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd hotel-booking
npm install
npm run dev       # starts the dev server at http://localhost:5173
```

Other scripts:

```bash
npm run build      # production build into dist/
npm run preview    # preview the production build locally
npm run lint        # run ESLint
```

No environment variables or API keys are required — all property data is local, in `src/data/properties.json`.

## Design System

**Colors**
- Primary navy: `#003580`
- Primary light (CTA blue): `#0071c2`
- Accent yellow: `#febb02`
- Neutral grays for text, borders, and backgrounds

**Typography**
- Font: **Inter**
- Consistent heading hierarchy (h1–h4) with a readable line-height throughout

## Responsiveness

| Breakpoint | Range | Behavior |
|---|---|---|
| Mobile | `< 640px` | Single-column cards, hamburger nav, filters in a slide-over drawer |
| Tablet | `640–1024px` | 2-column card grid |
| Desktop | `> 1024px` | Full multi-column layout, sticky sidebar / booking widget |

## Mock Data

`src/data/properties.json` contains 10 sample listings shaped like:

```json
{
  "id": "1",
  "name": "Kigali Serena Hotel",
  "location": "Kigali, Rwanda",
  "city": "Kigali",
  "type": "Hotels",
  "pricePerNight": 185,
  "rating": 4.8,
  "reviewCount": 312,
  "reviewLabel": "Exceptional",
  "stars": 5,
  "amenities": ["Free WiFi", "Pool", "Breakfast included"],
  "images": ["url1", "url2"],
  "roomTypes": [{ "name": "Standard Room", "capacity": 2, "price": 185 }],
  "genius": true,
  "originalPrice": 218
}
```

`genius` and `originalPrice` are optional — they drive the blue "Genius" badge and the strikethrough discounted price shown on some cards.

## Deployment

Deployed on Vercel: **[hotel-booking-platform-clone-react-inky.vercel.app](https://hotel-booking-platform-clone-react-inky.vercel.app/)**

The repo includes a `vercel.json` rewrite rule so client-side routes (`/property/:id`, `/search`, etc.) resolve correctly on a hard refresh, instead of 404ing:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

Vercel auto-detects this as a Vite project (build command `vite build`, output directory `dist`). Every push to `main` triggers an automatic redeploy; other branches get their own preview URL.

## Known Limitations

- No real backend — all data is local JSON, so search/filter/sort happen client-side and nothing persists across reloads
- Login/Signup are UI-only with no real authentication
- Wishlist hearts are per-card local state and reset on page reload
