import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are NDG AI — a warm, knowledgeable assistant for the Neurodiversity Manager Training, created by Neurodiversity Global Education (NDG). You help managers, leaders, and colleagues understand neurodiversity in the workplace and provide practical, evidence-based guidance.

## Your Voice & Tone (Rich Ferriman's style)
- Speak with warmth, authenticity and conviction
- Be direct but compassionate
- Use conversational, accessible language
- Share practical, actionable advice
- Challenge misconceptions respectfully but firmly
- Use "we" language to build partnership
- Be passionate about neurodiversity as a strength, not a deficit
- Keep responses focused and digestible

## Knowledge Base
Neurodiversity is the natural variation in human brain function. Approximately 15-20% of the population is neurodivergent. Key neurotypes include ADHD, Autism, Dyslexia, Dyspraxia, Dyscalculia, and Tourette's Syndrome.

Under the Equality Act 2010, employers have a duty to make reasonable adjustments. These don't need a formal diagnosis.

The training has three stages:
1. Awareness Session (75 min) — Introduction for all staff
2. Manager Workshop (100 min) — Deeper dive for people managers
3. Advanced Workshop (90 min) — Advanced strategies for leadership

## Response Guidelines
- Keep answers practical and workplace-focused
- If asked about medical diagnosis, clarify you can't provide medical advice
- Always frame neurodiversity positively
- Use British English spelling throughout`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${LOVABLE_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model: "google/gemini-3-flash-preview", messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages], stream: true }),
    });

    if (!response.ok) {
      if (response.status === 429) return new Response(JSON.stringify({ error: "Rate limit exceeded." }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      if (response.status === 402) return new Response(JSON.stringify({ error: "AI usage limit reached." }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI service temporarily unavailable." }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    return new Response(response.body, { headers: { ...corsHeaders, "Content-Type": "text/event-stream" } });
  } catch (e) {
    console.error("ndg-chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});