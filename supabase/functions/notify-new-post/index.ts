import { createClient } from "npm:@supabase/supabase-js@2";
import { Resend } from "npm:resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type NotifyPayload = {
  postId?: string;
  title?: string;
  excerpt?: string;
  slug?: string;
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    const accessToken = authHeader?.replace("Bearer ", "").trim();

    if (!accessToken) {
      return new Response(JSON.stringify({ error: "Missing access token" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const ownerEmail = (Deno.env.get("BLOG_ADMIN_EMAIL") || "").toLowerCase();
    const fromEmail = Deno.env.get("RESEND_FROM_EMAIL");
    const siteUrl = Deno.env.get("SITE_URL") || "http://localhost:5173";

    if (
      !supabaseUrl ||
      !supabaseServiceRoleKey ||
      !resendApiKey ||
      !ownerEmail ||
      !fromEmail
    ) {
      return new Response(
        JSON.stringify({
          error:
            "Missing function secrets. Required: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY, BLOG_ADMIN_EMAIL, RESEND_FROM_EMAIL",
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const body = (await req.json()) as NotifyPayload;
    const title = (body.title || "").trim();
    const excerpt = (body.excerpt || "").trim();
    const slug = (body.slug || "").trim();

    if (!title) {
      return new Response(JSON.stringify({ error: "Missing post title" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

    const { data: userData, error: userError } = await supabaseAdmin.auth.getUser(accessToken);

    if (userError || !userData.user) {
      return new Response(JSON.stringify({ error: "Invalid auth token" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if ((userData.user.email || "").toLowerCase() !== ownerEmail) {
      return new Response(JSON.stringify({ error: "Only owner can trigger notifications" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data: subscribers, error: subscribersError } = await supabaseAdmin
      .from("subscribers")
      .select("email")
      .eq("status", "active");

    if (subscribersError) {
      return new Response(
        JSON.stringify({ error: "Failed to load subscribers", details: subscribersError.message }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const recipientEmails = (subscribers || [])
      .map((s) => s.email?.trim())
      .filter((email): email is string => Boolean(email));

    if (!recipientEmails.length) {
      return new Response(
        JSON.stringify({ success: true, sent: 0, skipped: true, reason: "No subscribers" }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const resend = new Resend(resendApiKey);
    const postUrl = slug ? `${siteUrl}/#blogs` : `${siteUrl}/#blogs`;

    const sendResults = await Promise.allSettled(
      recipientEmails.map((email) =>
        resend.emails.send({
          from: fromEmail,
          to: email,
          subject: `New article: ${title}`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height:1.6; color:#111;">
              <h2 style="margin-bottom:8px;">New article published</h2>
              <p style="margin:0 0 12px;"><strong>${title}</strong></p>
              <p style="margin:0 0 14px; color:#333;">${excerpt || "A new article is now live on the blog."}</p>
              <a href="${postUrl}" style="display:inline-block; padding:10px 14px; background:#22e7d7; color:#0d151b; text-decoration:none; border-radius:8px;">
                Read on website
              </a>
            </div>
          `,
        }),
      ),
    );

    const sent = sendResults.filter((result) => result.status === "fulfilled").length;
    const failed = sendResults.length - sent;

    return new Response(
      JSON.stringify({
        success: true,
        sent,
        failed,
        total: recipientEmails.length,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Unexpected function failure",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});

