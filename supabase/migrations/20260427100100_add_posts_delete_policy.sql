drop policy if exists "owner can delete posts" on public.posts;

create policy "owner can delete posts"
on public.posts
for delete
to authenticated
using (auth.jwt()->>'email' = 'mohannadshaaban2322005@gmail.com');

