import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

async function getStoredRefreshToken(): Promise<string | null> {
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceRoleKey) return null;
  const adminClient = createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false, autoRefreshToken: false } });
  const { data, error } = await adminClient.from("google_oauth_tokens").select("refresh_token").eq("provider", "google").maybeSingle();
  if (error) { console.error("[google-gmail] Failed to read stored refresh token:", error); return null; }
  return data?.refresh_token ?? null;
}

async function getAccessToken(): Promise<string> {
  const clientId = Deno.env.get("GOOGLE_CLIENT_ID")!;
  const clientSecret = Deno.env.get("GOOGLE_CLIENT_SECRET")!;
  const refreshToken = (await getStoredRefreshToken()) || Deno.env.get("GOOGLE_REFRESH_TOKEN");
  if (!refreshToken) throw new Error("No Google refresh token configured.");
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ client_id: clientId, client_secret: clientSecret, refresh_token: refreshToken, grant_type: "refresh_token" }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Token refresh failed: ${JSON.stringify(data)}`);
  return data.access_token;
}

function createMimeMessage(to: string, subject: string, bodyHtml: string, from?: string): string {
  const fromAddress = from || "me";
  const boundary = "boundary_" + crypto.randomUUID().replace(/-/g, "");
  const messageParts = [`From: ${fromAddress}`, `To: ${to}`, `Subject: ${subject}`, `MIME-Version: 1.0`, `Content-Type: multipart/alternative; boundary="${boundary}"`, ``, `--${boundary}`, `Content-Type: text/plain; charset="UTF-8"`, ``, subject, ``, `--${boundary}`, `Content-Type: text/html; charset="UTF-8"`, ``, bodyHtml, ``, `--${boundary}--`];
  const rawMessage = messageParts.join("\r\n");
  const encoder = new TextEncoder();
  const bytes = encoder.encode(rawMessage);
  const base64 = btoa(String.fromCharCode(...bytes));
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    if (req.method !== "POST") return new Response(JSON.stringify({ error: "Only POST supported" }), { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } });

    const body = await req.json();
    const { to, subject, bodyHtml, from } = body;
    if (!to || !subject || !bodyHtml) return new Response(JSON.stringify({ error: "to, subject, bodyHtml required" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });

    const accessToken = await getAccessToken();
    const raw = createMimeMessage(to, subject, bodyHtml, from);
    const sendRes = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
      method: "POST",
      headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
      body: JSON.stringify({ raw }),
    });
    const sendData = await sendRes.json();
    if (!sendRes.ok) throw new Error(`Gmail API error: ${JSON.stringify(sendData)}`);

    return new Response(JSON.stringify({ success: true, messageId: sendData.id, threadId: sendData.threadId }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (error) {
    console.error("[google-gmail] Error:", error);
    return new Response(JSON.stringify({ error: String(error) }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});