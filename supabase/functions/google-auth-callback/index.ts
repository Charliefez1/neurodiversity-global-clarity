import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

function createAdminClient() {
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceRoleKey) throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  return createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false, autoRefreshToken: false } });
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const action = url.searchParams.get("action");
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;

    if (action === "consent-url") {
      const clientId = Deno.env.get("GOOGLE_CLIENT_ID")!;
      const redirectUri = `${supabaseUrl}/functions/v1/google-auth-callback?action=callback`;
      const consentUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
      consentUrl.searchParams.set("client_id", clientId);
      consentUrl.searchParams.set("redirect_uri", redirectUri);
      consentUrl.searchParams.set("response_type", "code");
      consentUrl.searchParams.set("scope", ["https://www.googleapis.com/auth/calendar", "https://www.googleapis.com/auth/gmail.send"].join(" "));
      consentUrl.searchParams.set("access_type", "offline");
      consentUrl.searchParams.set("prompt", "consent");

      return new Response(JSON.stringify({ consentUrl: consentUrl.toString(), redirectUri }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "callback") {
      const code = url.searchParams.get("code");
      const error = url.searchParams.get("error");
      if (error) return new Response(`<html><body><h1>OAuth Error</h1><p>${error}</p></body></html>`, { headers: { "Content-Type": "text/html" } });
      if (!code) return new Response(`<html><body><h1>Error</h1><p>No authorization code received.</p></body></html>`, { headers: { "Content-Type": "text/html" } });

      const clientId = Deno.env.get("GOOGLE_CLIENT_ID")!;
      const clientSecret = Deno.env.get("GOOGLE_CLIENT_SECRET")!;
      const redirectUri = `${supabaseUrl}/functions/v1/google-auth-callback?action=callback`;

      const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ code, client_id: clientId, client_secret: clientSecret, redirect_uri: redirectUri, grant_type: "authorization_code" }),
      });
      const tokenData = await tokenRes.json();
      if (!tokenRes.ok) return new Response(`<html><body><h1>Token Exchange Failed</h1><pre>${JSON.stringify(tokenData, null, 2)}</pre></body></html>`, { headers: { "Content-Type": "text/html" } });

      const refreshToken = tokenData.refresh_token as string | undefined;
      if (refreshToken) {
        const adminClient = createAdminClient();
        const { error: upsertError } = await adminClient.from("google_oauth_tokens").upsert({ provider: "google", refresh_token: refreshToken, scope: tokenData.scope ?? null, token_type: tokenData.token_type ?? null }, { onConflict: "provider" });
        if (upsertError) {
          console.error("[google-auth-callback] Failed to store refresh token:", upsertError);
          return new Response(`<html><body><h1>OAuth partially successful but token storage failed</h1></body></html>`, { status: 500, headers: { "Content-Type": "text/html" } });
        }
      }

      return new Response(`<html><body style="font-family:system-ui;max-width:640px;margin:40px auto;padding:20px;"><h1 style="color:#16a34a;">✅ OAuth Authorization Successful</h1><p>${refreshToken ? "Refresh token saved securely." : "No refresh token returned."}</p><p>You can close this window.</p></body></html>`, { headers: { "Content-Type": "text/html" } });
    }

    return new Response(JSON.stringify({ error: "Use ?action=consent-url or ?action=callback" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (err) {
    console.error("[google-auth-callback] Error:", err);
    return new Response(JSON.stringify({ error: String(err) }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});