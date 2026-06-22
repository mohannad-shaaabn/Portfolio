import { supabase } from "../lib/supabaseClient";

const POSTS_TABLE = "posts";
const SUBSCRIBERS_TABLE = "subscribers";

export async function fetchPublishedPosts() {
  if (!supabase) return { data: null, error: new Error("Supabase not configured") };

  const { data, error } = await supabase
    .from(POSTS_TABLE)
    .select("id, slug, title, excerpt, content, tags, read_time, published_at, author_name")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  return { data, error };
}

export async function subscribeEmail(email) {
  if (!supabase) return { data: null, error: new Error("Supabase not configured") };

  const { error } = await supabase
    .from(SUBSCRIBERS_TABLE)
    .upsert([{ email, status: "active", subscribed_at: new Date().toISOString() }], {
      onConflict: "email",
      ignoreDuplicates: true,
    });

  return { data: null, error };
}

export async function getAuthUser() {
  if (!supabase) return { data: null, error: new Error("Supabase not configured") };
  return supabase.auth.getUser();
}

export async function signInAdmin({ email, password }) {
  if (!supabase) return { data: null, error: new Error("Supabase not configured") };
  return supabase.auth.signInWithPassword({ email, password });
}

export async function signOutAdmin() {
  if (!supabase) return { error: new Error("Supabase not configured") };
  return supabase.auth.signOut();
}

export async function publishPost(post) {
  if (!supabase) return { data: null, error: new Error("Supabase not configured") };

  const payload = {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    tags: post.tags,
    read_time: post.read_time,
    is_published: true,
    published_at: new Date().toISOString(),
    author_name: post.author_name,
  };

  const { data, error } = await supabase
    .from(POSTS_TABLE)
    .insert([payload])
    .select()
    .single();

  let notification = {
    attempted: false,
    success: false,
    status: null,
    details: "",
  };

  if (!error && import.meta.env.VITE_NOTIFY_NEW_POST_FUNCTION_URL) {
    notification.attempted = true;
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.access_token) {
        notification.details = "No active admin session token.";
        return { data, error, notification };
      }

      const response = await fetch(import.meta.env.VITE_NOTIFY_NEW_POST_FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          postId: data.id,
          title: data.title,
          excerpt: data.excerpt,
          slug: data.slug,
        }),
      });

      notification.status = response.status;

      if (response.ok) {
        notification.success = true;
      } else {
        const body = await response.text();
        notification.details = body || "Notification function failed.";
      }
    } catch {
      // Keep publishing successful even if notifications fail.
      notification.details = "Notification request failed.";
    }
  }

  return { data, error, notification };
}

export async function updatePost(postId, post) {
  if (!supabase) return { data: null, error: new Error("Supabase not configured") };

  const payload = {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    tags: post.tags,
    read_time: post.read_time,
    author_name: post.author_name,
  };

  const { data, error } = await supabase
    .from(POSTS_TABLE)
    .update(payload)
    .eq("id", postId)
    .select()
    .single();

  return { data, error };
}

export async function deletePost(postId) {
  if (!supabase) return { error: new Error("Supabase not configured") };

  const { error } = await supabase.from(POSTS_TABLE).delete().eq("id", postId);
  return { error };
}
