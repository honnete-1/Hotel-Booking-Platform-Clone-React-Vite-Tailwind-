# Advanced Front-End Program
## Hotel Booking Platform Clone (React + Vite + Tailwind)

## 1. Project Overview

Students will build a hotel/accommodation booking web app **inspired by Booking.com's layout, UX flow, and visual language**, using React (via Vite) and Tailwind CSS, with multi-page navigation handled by React Router.

The goal is not to "memorize React theory" it's to get hands-on reps with the exact skills they'll use on real client/product work: turning a real, complex, production-grade interface into clean, reusable components, wiring up routing between pages, and making it actually work on a phone screen as well as a laptop.

**Important branding and assets:** Recreate Booking.com's structure, spacing system, color palette, and typography rhythm as closely as possible. Do **not** scrape or reuse Booking.com's actual logo, trademarked wordmark, or proprietary photography use your own project name/logo and royalty-free images (Unsplash, Pexels). This keeps the deployed project safe to publish and link in a portfolio, and it's standard practice for this type of clone exercise.

## 2. Learning Objectives

By the end of this project, students should be comfortable with:

- Breaking a complex real-world UI into reusable, well-named React components
- React Router: `<Routes>`, `<Route>`, `<Link>` / `<NavLink>`, dynamic route params (`/property/:id`), `useNavigate`
- Tailwind CSS: responsive utility classes, custom theme colors/fonts, hover/focus states
- Basic state management for UI interactions (search inputs, filters, mobile menu) with `useState` / `useContext`
- Working with local mock data (JSON) instead of a real backend
- Deploying a Vite + React app to production (Vercel or Netlify)

## 3. Required Tech Stack

| Tool | Purpose |
|---|---|
| Vite | Build tool / dev server |
| React 18+ | UI library |
| Tailwind CSS | Styling, responsive design |
| React Router DOM | Page navigation, dynamic routes |
| Context API (optional) | Sharing search/filter state across pages |

## 4. Pages & Routes

### `/` Home
- Sticky header: logo, nav links, sign-in/register buttons (UI only, no auth needed)
- Hero section with search card: destination input, check-in/check-out, guests — overlapping the hero banner
- Property-type tabs (Hotels / Apartments / Resorts / Villas)
- "Trending destinations" card grid
- Deals / offers carousel
- Footer with link columns

### `/search` Search Results
- Filter sidebar (price range, star rating, amenities) — collapses into a drawer/modal on mobile
- Sortable list of property cards (image, name, location, rating, price)
- Results count + sort dropdown
- Each card links to `/property/:id`

### `/property/:id` Property Details
- Image gallery (grid + lightbox or carousel)
- Title, location, star rating, review score
- Amenities list
- Room types table (name, capacity, price, "Reserve" button)
- Sticky booking widget on desktop, inline on mobile
- Reviews section

### Stretch goal (optional)
- `/login` and `/signup` UI only, form layout matching the reference style

## 5. Design & Responsiveness Requirements

- **Layout fidelity:** match the structural rhythm of the reference screenshots header height, hero/search card overlap, grid breakpoints, card spacing.
- **Color palette (starting point adjust for your own branding):** primary navy `#003580`, accent yellow `#febb02`, neutral grays for text and borders.
- **Typography:** clean sans-serif (Inter or Work Sans work well as a substitute), consistent heading hierarchy (h1–h4), readable line-height.
- **Breakpoints:**
  - Mobile: below 640px — hamburger nav, single-column cards, filters in a slide-over drawer
  - Tablet: 640–1024px — 2-column card grid
  - Desktop: above 1024px — full multi-column layout, sticky sidebar/booking widget
- **Interaction polish:** visible hover/focus states on buttons and cards, smooth transitions, accessible color contrast.

## 6. Data

Build a local `properties.json` with 8–12 sample listings. Suggested shape:

```json
{
  "id": "1",
  "name": "Example Hotel Kigali",
  "location": "Kigali, Rwanda",
  "pricePerNight": 85,
  "rating": 4.6,
  "amenities": ["Free WiFi", "Pool", "Breakfast included"],
  "images": ["url1", "url2", "url3"],
  "description": "Short property description...",
  "roomTypes": [
    { "name": "Standard Room", "capacity": 2, "price": 85 }
  ]
}
```

Source images from Unsplash or Pexels (free-to-use), not from booking.com directly.

## 7. Deliverables

1. GitHub repository — organized by feature/component, with a clear README (setup steps, scripts, folder structure)
2. Live deployed link (Vercel, Netlify, or GitHub Pages)
3. Short written summary: component list + a simple routing map

## 8. Suggested Timeline

A genuinely pixel-accurate, fully responsive clone with three full pages usually takes a stronger cohort 2–3 focused days. If today is a hard deadline, scope today to a deployable MVP and treat the rest as Day 2:

**Today — deploy by end of day:**
- Vite + Tailwind + React Router scaffold
- Home page fully built and responsive (header, hero search, trending grid, footer)
- Routing skeleton in place: Home → Search → Property Details (Search/Details pages can be placeholder/skeleton content)
- Deploy the MVP

**Day 2 (if the program continues):**
- Build out Search Results (filters, sortable cards) and Property Details (gallery, room types, booking widget)
- Wire up the local JSON data across pages
- Responsiveness polish, hover states, final QA on mobile + desktop
- Redeploy

## 9. Evaluation Rubric

| Criteria | Weight |
|---|---|
| Visual/structural fidelity to reference (layout, spacing, color, type) | 25% |
| Responsiveness across mobile/tablet/desktop | 20% |
| Routing & navigation correctness | 20% |
| Component structure, reusability, code cleanliness | 20% |
| Deployment + README quality | 15% |


## 10. Reference Screenshots

Use the Booking.com reference screenshots shared in the kickoff session as your structural guide for the Home, Search Results, and Property Details layouts match the layout patterns and spacing logic, not the literal brand assets.

## 11. Resources

- React Router docs: https://reactrouter.com
- Tailwind CSS docs: https://tailwindcss.com/docs
- Vite docs: https://vitejs.dev
- Unsplash (free images): https://unsplash.com
- Vercel deployment: https://vercel.com/docs
