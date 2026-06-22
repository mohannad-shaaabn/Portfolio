# Professional Blog Setup (Owner-only publishing + subscriber notifications)

This project now has a redesigned `Blogs` UI and a local in-app subscription signal.
For a production-grade system (owner-only publishing + real subscriber notifications), use this architecture:

## 1) Backend and database
- Use `Supabase` as backend.
- Create tables:
- `posts`:
  - `id (uuid)`
  - `title (text)`
  - `excerpt (text)`
  - `content (text)`
  - `tags (text[])`
  - `published_at (timestamp)`
  - `author_id (uuid)`
- `subscribers`:
  - `id (uuid)`
  - `email (text unique)`
  - `status (active/unsubscribed)`
  - `created_at (timestamp)`

## 2) Owner-only publishing
- Enable authentication.
- Create one admin user account (your account).
- Add Row Level Security policies:
  - Everyone can `SELECT` published posts.
  - Only admin user can `INSERT/UPDATE/DELETE` in `posts`.
  - Anyone can `INSERT` into `subscribers` (for subscribe form).
  - Only admin can `SELECT` subscribers list.

## 3) Notification flow
- Use an email provider (`Resend`, `SendGrid`, or `Postmark`).
- Create a backend function (edge/serverless) triggered when a new post is published:
  1. Read all active subscribers.
  2. Send email notification with title, excerpt, and link.
  3. Store delivery logs.

## 4) Frontend integration
- Replace local `blogPosts` with live fetch from backend.
- Subscribe form sends email to backend endpoint.
- Optional:
  - Add unsubscribe link.
  - Add double opt-in email confirmation.
  - Add analytics (open rate / click rate).

## 5) Security notes
- Never place admin keys in frontend.
- Keep notification sending logic only in backend.
- Validate all inputs and rate-limit subscription endpoint.
