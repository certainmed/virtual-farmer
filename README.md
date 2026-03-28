# Virtual Farmer v3

This repo contains the current browser version of Virtual Farmer: a progression-based farming clicker with cloud sync and leaderboard support.

## Current Website Status (March 14, 2026)

The website is currently in a playable and mostly stable state.

What is working right now:
- Core gameplay loop: farm, collect plants, and sell inventory for money.
- Progression systems: hoes, fertilizers, upgrades, XP, and prestige.
- Auto Farm mode: runs in the background at reduced yield and resumes after reload.
- Offline Auto Farm catch-up: applies missed gains after returning (capped at 24 hours).
- Authentication pages: email/password sign up and login with live password checks.
- Cloud save: game state syncs to Supabase when the user is signed in.
- Leaderboards: top players by total plants, balance, and XP.

Current page structure:
- `index.html`: promotional landing page for signed-out users
- `game.html`: main game interface
- `login.html`: sign-in page
- `signup.html`: account creation page

## Tech Stack

- Vanilla HTML, CSS, and JavaScript
- Supabase Auth + Postgres (via `@supabase/supabase-js` CDN)
- LocalStorage fallback/save layer

## Quick Start

1. Serve the project as a static website (recommended):
   - `python -m http.server 8080`
   - then open `http://localhost:8080`
2. Open `signup.html` to create an account, or `login.html` if you already have one.
3. After login, continue to `game.html` to play.

## Supabase Setup

Supabase is already wired in `supabase/config.js`.

Database setup checklist:
1. Open Supabase SQL Editor.
2. Run `supabase/001_progress_schema.sql`.
3. In Supabase Auth, enable Email sign-in.
4. If email confirmation is enabled, confirm the account before logging in.

## Save and Sync Behavior

- Local save key: `virtualFarmerSave`
- Auto Farm state key: `autoFarmState`
- Supabase config cache key: `virtualFarmerSupabaseConfig`
- Local save happens during gameplay actions and also every 30 seconds.
- Cloud saves are queued/debounced and flushed during important actions (for example sign-out).
- On load, the app compares local and cloud timestamps and keeps the newer state.

## Known Conditions and Notes

- If Supabase config is present and the user is not authenticated, `game.html` redirects to login.
- If Supabase config is present and the user is authenticated, `index.html` redirects to `game.html`.
- If Supabase config is missing, the game can still run in local-only mode.
- The app is frontend-only (no Node backend in this repo).
- Branding is currently mixed between "Farm Simulator" and "Virtual Farmer" in different pages.
- No automated test suite is included yet.

## File Map

- `data.js`: plant, hoe, fertilizer, upgrade, and achievement data
- `game.js`: gameplay logic, save/load, cloud sync, auto-farm, and prestige
- `ui.js`: rendering, navigation, event handlers, leaderboard UI
- `auth.js`: login/sign-up validation and auth flow
- `auth.css`, `styles.css`: page styling
- `supabase/client.js`: Supabase wrapper and cloud operations
- `supabase/001_progress_schema.sql`: schema, RLS policies, and leaderboard view
