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

alter table public.posts enable row level security;
alter table public.subscribers enable row level security;

drop policy if exists "public can read published posts" on public.posts;
create policy "public can read published posts"
on public.posts
for select
using (is_published = true);

drop policy if exists "owner can insert posts" on public.posts;
create policy "owner can insert posts"
on public.posts
for insert
to authenticated
with check (auth.jwt()->>'email' = 'mohannadshaaban2322005@gmail.com');

drop policy if exists "owner can update posts" on public.posts;
create policy "owner can update posts"
on public.posts
for update
to authenticated
using (auth.jwt()->>'email' = 'mohannadshaaban2322005@gmail.com')
with check (auth.jwt()->>'email' = 'mohannadshaaban2322005@gmail.com');

drop policy if exists "public can subscribe" on public.subscribers;
create policy "public can subscribe"
on public.subscribers
for insert
to anon, authenticated
with check (true);

drop policy if exists "owner can read subscribers" on public.subscribers;
create policy "owner can read subscribers"
on public.subscribers
for select
to authenticated
using (auth.jwt()->>'email' = 'mohannadshaaban2322005@gmail.com');
