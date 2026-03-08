import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

async function getGraphAccessToken(): Promise<string> {
  const tenantId = Deno.env.get("MICROSOFT_TENANT_ID");
  const clientId = Deno.env.get("MICROSOFT_CLIENT_ID");
  const clientSecret = Deno.env.get("MICROSOFT_CLIENT_SECRET");
  if (!tenantId || !clientId || !clientSecret) throw new Error("Microsoft Teams credentials not configured.");

  const tokenRes = await fetch(`https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ client_id: clientId, client_secret: clientSecret, scope: "https://graph.microsoft.com/.default", grant_type: "client_credentials" }),
  });
  const tokenData = await tokenRes.json();
  if (!tokenRes.ok) throw new Error(`Microsoft token error: ${JSON.stringify(tokenData)}`);
  return tokenData.access_token;
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { action, ...params } = await req.json();

    if (action === "create-meeting") {
      const { subject, startDateTime, endDateTime, organizerEmail, attendees } = params;
      if (!subject || !startDateTime || !endDateTime) return new Response(JSON.stringify({ error: "subject, startDateTime, endDateTime required" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });

      const accessToken = await getGraphAccessToken();
      const organizer = organizerEmail || Deno.env.get("MICROSOFT_ORGANIZER_EMAIL") || "rich@neurodiversityglobal.com";
      const meetingBody: Record<string, unknown> = { subject, start: { dateTime: startDateTime, timeZone: "Europe/London" }, end: { dateTime: endDateTime, timeZone: "Europe/London" }, isOnlineMeeting: true, onlineMeetingProvider: "teamsForBusiness" };
      if (attendees && Array.isArray(attendees)) meetingBody.attendees = attendees.map((email: string) => ({ emailAddress: { address: email }, type: "required" }));

      const createRes = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(organizer)}/events`, {
        method: "POST",
        headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
        body: JSON.stringify(meetingBody),
      });
      const eventData = await createRes.json();
      if (!createRes.ok) throw new Error(`Graph API error [${createRes.status}]: ${JSON.stringify(eventData)}`);

      return new Response(JSON.stringify({ meetingId: eventData.id, joinUrl: eventData.onlineMeeting?.joinUrl || eventData.webLink, subject: eventData.subject, start: eventData.start, end: eventData.end }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    return new Response(JSON.stringify({ error: "Invalid action" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (error) {
    console.error("[microsoft-teams] Error:", error);
    return new Response(JSON.stringify({ error: String(error) }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});