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
  if (error) { console.error("[google-calendar] Failed to read stored refresh token:", error); return null; }
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

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const url = new URL(req.url);
    const action = url.searchParams.get("action");

    if (req.method === "GET" && action === "availability") {
      const calendarId = url.searchParams.get("calendarId") || "primary";
      const timeMin = url.searchParams.get("timeMin");
      const timeMax = url.searchParams.get("timeMax");
      if (!timeMin || !timeMax) return new Response(JSON.stringify({ error: "timeMin and timeMax required" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });

      const accessToken = await getAccessToken();
      const freeBusyRes = await fetch("https://www.googleapis.com/calendar/v3/freeBusy", {
        method: "POST",
        headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
        body: JSON.stringify({ timeMin, timeMax, items: [{ id: calendarId }] }),
      });
      const freeBusyData = await freeBusyRes.json();
      if (!freeBusyRes.ok) throw new Error(`Calendar API error: ${JSON.stringify(freeBusyData)}`);
      return new Response(JSON.stringify(freeBusyData), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    if (req.method === "POST" && action === "create-event") {
      const body = await req.json();
      const { calendarId = "primary", summary, description, start, end, location, attendees } = body;
      if (!summary || !start || !end) return new Response(JSON.stringify({ error: "summary, start, end required" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });

      const accessToken = await getAccessToken();
      const event: Record<string, unknown> = { summary, description, start: { dateTime: start, timeZone: "Europe/London" }, end: { dateTime: end, timeZone: "Europe/London" } };
      if (location) event.location = location;
      if (attendees) event.attendees = attendees.map((email: string) => ({ email }));

      const createRes = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?sendUpdates=all`, {
        method: "POST",
        headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
        body: JSON.stringify(event),
      });
      const eventData = await createRes.json();
      if (!createRes.ok) throw new Error(`Calendar create error: ${JSON.stringify(eventData)}`);
      return new Response(JSON.stringify(eventData), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    return new Response(JSON.stringify({ error: "Invalid action" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (error) {
    console.error("[google-calendar] Error:", error);
    return new Response(JSON.stringify({ error: String(error) }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});