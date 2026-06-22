# Supabase Blog Setup

This guide enables:
- Owner-only publishing
- Real subscriber storage
- Trigger-ready notification flow for new posts

## 1) Create tables

Run this SQL in Supabase SQL editor:

```sql
create extension if not exists "pgcrypto";

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text not null,
  content text not null,
  tags text[] not null default '{}',
  read_time text not null default '3 min',
  author_name text not null default 'Mohannad',
  is_published boolean not null default true,
  published_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  status text not null default 'active',
  subscribed_at timestamptz not null default now()
);
```

## 2) Enable Row Level Security

```sql
alter table public.posts enable row level security;
alter table public.subscribers enable row level security;
```

## 3) Policies

Replace `YOUR_OWNER_EMAIL` with your real admin email (same value as `VITE_BLOG_ADMIN_EMAIL`).

```sql
-- Anyone can read published posts
create policy "public can read published posts"
on public.posts
for select
using (is_published = true);

-- Only owner can insert posts
create policy "owner can insert posts"
on public.posts
for insert
to authenticated
with check (auth.jwt()->>'email' = 'YOUR_OWNER_EMAIL');

-- Only owner can update posts
create policy "owner can update posts"
on public.posts
for update
to authenticated
using (auth.jwt()->>'email' = 'YOUR_OWNER_EMAIL')
with check (auth.jwt()->>'email' = 'YOUR_OWNER_EMAIL');

-- Anyone can subscribe
create policy "public can subscribe"
on public.subscribers
for insert
to anon, authenticated
with check (true);

-- Owner can read subscribers
create policy "owner can read subscribers"
on public.subscribers
for select
to authenticated
using (auth.jwt()->>'email' = 'YOUR_OWNER_EMAIL');
```

## 4) Configure environment

Copy `.env.example` to `.env` and fill:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY` (legacy) or `VITE_SUPABASE_PUBLISHABLE_KEY` (new `sb_publishable_...`)
- `VITE_BLOG_ADMIN_EMAIL`
- `VITE_NOTIFY_NEW_POST_FUNCTION_URL` (optional now, required for auto-email)

## 5) Notification function (professional phase)

Edge Function source is included at:
- `supabase/functions/notify-new-post/index.ts`

This function:
1. receives `postId`, `title`, `excerpt`, `slug`
2. validates caller JWT and checks owner email
3. queries active subscribers from `subscribers`
4. sends email notifications via Resend

### Deploy steps

1. Install and login Supabase CLI.
2. Link your project:

```bash
supabase link --project-ref nukkgepyllfdwxmgygzw
```

3. Set required secrets:

```bash
supabase secrets set RESEND_API_KEY=YOUR_RESEND_API_KEY
supabase secrets set RESEND_FROM_EMAIL="Your Name <onboarding@resend.dev>"
supabase secrets set BLOG_ADMIN_EMAIL=mohannadshaaban2322005@gmail.com
supabase secrets set SITE_URL=https://your-portfolio-domain.com
```

4. Deploy the function:

```bash
supabase functions deploy notify-new-post
```

5. Add function URL to `.env`:

```env
VITE_NOTIFY_NEW_POST_FUNCTION_URL=https://nukkgepyllfdwxmgygzw.functions.supabase.co/notify-new-post
```

6. Restart app dev server.

After this, publishing a post from admin panel triggers real email notifications.
