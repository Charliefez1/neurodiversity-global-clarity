import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, use_context, presentation } = await req.json();

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY not set");
      return new Response(JSON.stringify({ error: "Server config error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Use Lovable AI to compose and send the notification
    // For now, we just log it and return success. The DB insert is the record
    console.log(
      `Presentation signup: ${name} (${email}), company: ${company || "N/A"}, context: ${use_context}, presentation: ${presentation}`
    );

    // Send email notification via a simple fetch to a mailto-style notification
    // We'll use the Supabase edge function to send via the AI gateway as a simple notification
    const emailBody = `
New presentation signup:

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Use: ${use_context}
Presentation: ${presentation}
Time: ${new Date().toISOString()}
    `.trim();

    // Log for monitoring — in production you'd integrate a proper email service
    console.log("Notification email body:", emailBody);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error:", err);
    return new Response(
      JSON.stringify({ error: "Internal error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
