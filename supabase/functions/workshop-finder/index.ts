import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const WORKSHOP_CATALOGUE = `You are a neurodiversity training advisor for Neurodiversity Global. Your job is to recommend the most relevant workshop(s) from the catalogue below based on what the user describes.

RULES:
- Return ONLY a JSON array of workshop IDs (e.g. ["awareness","adhd","line-manager"])
- Choose 1-5 most relevant workshops
- If nothing matches well, return ["awareness"] as default
- Do NOT include any explanation, just the JSON array

CATALOGUE:
Core: awareness (60min), champions (3hr), advocate (3hr), line-manager (3hr), manager-dev (3hr), people-leader (3hr), exec-briefing (3hr), hr-training (3hr), erg (3hr), parent (3hr)
Themed: generations (60min), role-modelling (60min), disclosure (90min), mental-health (90min), friction (60min), performance (60min), react (120min)
Condition: adhd (90min), autism (90min), dyslexia (60min)
Role/Function: hr-function (2hr), sales (2hr), call-centres (2hr), factory (2hr), engineering-function (2hr), tech-function (2hr)
Lived Experience: ask-away (90min, Rich Ferriman AuDHD/dyslexic), gen-z (90min, Charlie Ferriman), ask-away-gen-z (90min, Charlie Ferriman)
Strategy: board-strategy (2hr), mergers (2hr), service-design (2hr)
Sector: nhs (3hr), fire-rescue (3hr), police (3hr), education (3hr), legal (3hr), financial (3hr), engineering-sector (3hr), technology-sector (3hr), manufacturing (3hr), retail (3hr), hospitality (3hr)
Customer-facing: supporting-customers (2hr), interaction-design (2hr), retail-hospitality-facing (2hr)`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query } = await req.json();
    if (!query || typeof query !== "string") {
      return new Response(JSON.stringify({ error: "query is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: WORKSHOP_CATALOGUE },
          { role: "user", content: query },
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded, please try again shortly." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content ?? "[]";

    // Extract JSON array from response
    const match = content.match(/\[[\s\S]*?\]/);
    const ids = match ? JSON.parse(match[0]) : ["awareness"];

    return new Response(JSON.stringify({ workshopIds: ids }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("workshop-finder error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
