# Supabase Setup (Virtual Farmer v3)

1. Create a Supabase project.
2. In Supabase SQL Editor, run [`supabase/001_progress_schema.sql`](./001_progress_schema.sql).
3. Open [`supabase/config.js`](./config.js) and set:
   - `url`: your project URL (`https://<project-ref>.supabase.co`)
   - `anonKey`: your project anon public key
4. In Supabase Auth, enable Email provider.
5. (Optional) Enable email confirmations; the sign-up page already handles confirmation-required flows.

## What Is Persisted

`player_progress.game_state` and `player_progress.stats_state` store full game state, including:
- Shop purchases and unlocked hoes
- Fertilizer stock
- Upgrades
- Inventory
- Stats
- Achievements
- Prestige values
- Auto-farm state (`auto_farm_state`)

The leaderboard is exposed through `public.leaderboard` and ranks players by:
- `total_plants`
- `balance`
- `xp`
