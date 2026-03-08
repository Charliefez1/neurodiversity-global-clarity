import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });

  try {
    const { name, email } = await req.json();
    console.log(`[NEW SIGNUP] Name: ${name}, Email: ${email}, Time: ${new Date().toISOString()}`);

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY is not configured");

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: "NDG Training <onboarding@resend.dev>",
        to: "charlie@neurodiversityglobal.com",
        subject: `New Training Sign-up: ${name}`,
        html: `<div style="font-family:system-ui;max-width:500px;margin:0 auto;padding:24px;"><h2 style="color:#0057B8;">New Account Created</h2><p>A new user has registered on the Neurodiversity Manager Training platform.</p><table style="width:100%;border-collapse:collapse;margin:16px 0;"><tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold;">Name</td><td style="padding:8px 12px;background:#f5f5f5;">${name}</td></tr><tr><td style="padding:8px 12px;font-weight:bold;">Email</td><td style="padding:8px 12px;">${email}</td></tr><tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold;">Time</td><td style="padding:8px 12px;background:#f5f5f5;">${new Date().toISOString()}</td></tr></table></div>`,
      }),
    });

    if (!emailResponse.ok) {
      const errBody = await emailResponse.text();
      console.error(`[NOTIFY] Email send failed [${emailResponse.status}]: ${errBody}`);
    } else {
      console.log("[NOTIFY] Notification email sent successfully");
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (error) {
    console.error("[NOTIFY] Error:", error);
    return new Response(JSON.stringify({ success: false, error: String(error) }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});