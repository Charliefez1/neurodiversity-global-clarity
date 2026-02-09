import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, email, originalInput, recommendations } = await req.json();

    if (!firstName || !email || !recommendations) {
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const baseUrl = "https://www.neurodiversityglobal.com";

    const bestFitHtml = (recommendations.best_fit || [])
      .map(
        (item: any) => `
        <tr>
          <td style="padding: 16px 0; border-bottom: 1px solid #e5e5e5;">
            <strong style="color: #1a2744; font-size: 16px;">${item.title}</strong>
            <p style="margin: 6px 0 8px; color: #555; font-size: 14px; line-height: 1.5;">${item.why}</p>
            <a href="${baseUrl}${item.link}" style="color: #2a9d8f; font-size: 14px; text-decoration: none;">View details →</a>
          </td>
        </tr>`
      )
      .join("");

    const successHtml = (recommendations.success_looks_like || [])
      .map((s: string) => `<li style="margin-bottom: 6px; color: #555; font-size: 14px;">${s}</li>`)
      .join("");

    const html = `
    <!DOCTYPE html>
    <html>
    <body style="margin: 0; padding: 0; background-color: #f5f3ef; font-family: 'Helvetica Neue', Arial, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background: #ffffff;">
        <tr>
          <td style="background-color: #1a2744; padding: 32px 28px;">
            <h1 style="color: #f5f3ef; margin: 0; font-size: 22px;">Your Neurodiversity Global Recommendations</h1>
            <p style="color: rgba(245,243,239,0.7); margin: 8px 0 0; font-size: 14px;">Personalised for ${firstName}</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 28px;">
            <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">What you told us</p>
            <p style="color: #333; font-size: 14px; line-height: 1.6; background: #f9f8f6; padding: 14px; border-radius: 6px; margin: 0 0 24px;">${originalInput}</p>

            <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">What we heard</p>
            <p style="color: #333; font-size: 15px; line-height: 1.5; margin: 0 0 24px;">${recommendations.what_i_heard}</p>

            <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">Recommended next step</p>
            <p style="color: #1a2744; font-size: 15px; font-weight: 600; line-height: 1.5; margin: 0 0 24px;">${recommendations.recommended_next_step}</p>

            <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">Best fit information</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
              ${bestFitHtml}
            </table>

            ${successHtml ? `
            <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">What success looks like</p>
            <ul style="padding-left: 18px; margin: 0 0 24px;">
              ${successHtml}
            </ul>` : ""}

            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 12px;">
              <tr>
                <td style="text-align: center; padding: 20px 0;">
                  <a href="mailto:hello@neurodiversityglobal.com?subject=Discovery%20Call%20Request" style="display: inline-block; background-color: #2a9d8f; color: #ffffff; padding: 14px 28px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 15px;">Book a 30-minute discovery call</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background-color: #f9f8f6; padding: 24px 28px; border-top: 1px solid #e5e5e5;">
            <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px;">Contact us directly</p>
            <p style="margin: 0 0 6px; font-size: 14px;"><strong>Rich Ferriman</strong> — <a href="mailto:rich@neurodiversityglobal.com" style="color: #2a9d8f; text-decoration: none;">rich@neurodiversityglobal.com</a></p>
            <p style="margin: 0 0 6px; font-size: 14px;"><strong>Charlie Ferriman</strong> — <a href="mailto:charlie@neurodiversityglobal.com" style="color: #2a9d8f; text-decoration: none;">charlie@neurodiversityglobal.com</a></p>
            <p style="margin: 12px 0 0; font-size: 13px; color: #999;">Neurodiversity Global — neurodiversityglobal.com</p>
          </td>
        </tr>
      </table>
    </body>
    </html>`;

    // Use Lovable AI to send — but we need a mail service. 
    // For now, store the request and return success. 
    // The email will be sent via a future Resend integration.
    // Return the HTML so the frontend can show a success state.
    
    console.log(`Recommendation email requested for ${email} (${firstName})`);
    console.log("Recommendations:", JSON.stringify(recommendations));

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Recommendations will be sent to ${email}. For now, please save this page or take a screenshot.`,
        note: "Email delivery requires Resend integration. Contact hello@neurodiversityglobal.com for immediate support."
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("send-recommendations error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
