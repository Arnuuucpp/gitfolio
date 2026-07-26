# GitFolio

A GitHub profile analyzer built with React — search any GitHub username and instantly see their profile, contribution activity, pinned repos, top languages, and full repo list.

**Live demo:** [https://gitfolio-taupe.vercel.app]

---

## Features

- 🔍 Search any GitHub username and fetch live profile + repo data
- 🖤 Neubrutalist UI — thick borders, flat colors, offset shadows
- 📊 Contribution heatmap (via `react-github-calendar`)
- 📌 Pinned repos section with language, stars, forks, and last push date
- 📈 Top languages bar chart, aggregated across all repos
- 🔗 "All Repos" page with full repo grid, routed by username (`/:username/repos`)
- 🕓 Recent search history (localStorage-backed, deduplicated, capped at 5, hover dropdown)
- 🔗 Share profile button (copies link to clipboard)
- ⚠️ Error handling for invalid usernames / API failures (SweetAlert2)

---

## Tech Stack

**Core**
- React (Vite)
- React Router DOM — nested routing with `Layout` / `Outlet` pattern
- Tailwind CSS

**Libraries**
- Axios — GitHub REST API requests
- Recharts — top languages bar chart
- react-github-calendar — contribution heatmap
- SweetAlert2 — error/alert modals
- Remix Icon — icon set
- Fontsource (Space Grotesk, Archivo Black) — custom fonts

**Deployment**
- Vercel

---

## What I actually learned building this

This wasn't a tutorial-follow — every feature here came from debugging real errors, one at a time. A few things I got real hands-on practice with:

- **State + API fetching** — `useState`/`useEffect`, understanding *why* `useEffect` fires on every render without a dependency array (and why that's wrong for a button-triggered search, but correct for a URL-param-driven fetch on `AllRepos`)
- **Conditional rendering** — guarding against `null` state before a component tries to read properties off it
- **`.map()` in JSX** — including the classic "map runs but nothing renders" bug (missing `return` on curly-brace arrow functions)
- **React Router** — nested routes, the `Layout`/`Outlet` pattern, dynamic route params (`useParams`), and programmatic navigation (`useNavigate`)
- **localStorage** — read → modify → write cycle, `JSON.stringify`/`JSON.parse`, deduplicating and capping an array, syncing localStorage with React state so the UI updates without a refresh
- **Debugging layout bugs** — `z-index`/stacking contexts, `position: absolute` needing a `relative` ancestor, `h-screen` stacking issues causing scrollbars, flex vs grid width conflicts

---

## Topics to revisit / go deeper on

- **localStorage — read/modify/write pattern.** This tripped me up the most. Revisit: why `getItem` always returns a string, why you need to parse before treating it as an array, and the full dedupe-and-cap-at-N pattern from scratch, without hints.
- **React Router — the full picture.** Nested routes with `Outlet`, `useParams`, `useNavigate`, and *why* state doesn't automatically share between sibling routes (and the two ways to solve that: URL params vs lifting state / context).
- **JSX vs HTML syntax gotchas.** `class` vs `className`, arrow function implicit vs explicit `return`, `for` vs `htmlFor` — small things that still catch me.
- **useEffect dependency arrays.** Revisit the three cases (no array, empty array, array with values) until choosing the right one is automatic, not a guess.
- **CSS positioning fundamentals.** `absolute`/`relative`/stacking contexts — I fixed these by trial and error this time; worth understanding *why* each fix worked, not just that it worked.

---

## Upcoming Features

- **Compare** — side-by-side comparison of two GitHub profiles (stats, languages, activity)
- **Liked** — ability to "like" a searched profile, with a dedicated `/liked` route showing all liked profiles (localStorage or backend-based, TBD)
- **Light/Dark theme toggle** — using ContextAPI to manage theme state globally, Tailwind `dark:` variant for styling
- **Custom cursor** — planned as a small polish/UX experiment

---

## Getting Started

```bash
git clone https://github.com/YOUR_USERNAME/gitfolio.git
cd gitfolio
npm install
npm run dev
```

---

Built by Arnav.
