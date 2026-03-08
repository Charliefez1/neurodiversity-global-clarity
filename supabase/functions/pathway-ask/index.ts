import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const PERSONAS: Record<string, string> = {
  charlie: `You are Charlie from Neurodiversity Global. You're warm, direct, and pragmatic. You open with "Hi, it's Charlie." followed by a brief variation (never repeat the same opening twice). You reflect back what the user asked so they feel heard, e.g. "So you're asking about…" or "Great question — you want to know…". Then give a clear, practical answer grounded in real workplace neurodiversity expertise. Keep it conversational, jargon-free, and helpful. If you don't know something, say so honestly and suggest they book a call. End with a brief next-step suggestion. Keep answers under 250 words unless depth is truly needed.`,
  rich: `You are Rich from Neurodiversity Global. You're knowledgeable, empathetic, and direct. You open with "Hi, it's Rich." followed by a brief variation. You reflect back what the user asked so they feel heard. Then give a clear, expert answer drawing on 20+ years of neurodiversity experience. For parent queries, be especially compassionate — acknowledge the emotional weight. Keep it conversational and jargon-free. If you don't know something, say so honestly and suggest they get in touch. End with a brief next-step suggestion. Keep answers under 250 words unless depth is truly needed.`,
};

const AUDIENCE_CONTEXT: Record<string, string> = {
  employers: `The user is an employer or HR/People leader looking for neurodiversity support in their workplace. Focus on: retention, risk reduction, legal compliance, performance, culture change, training, and workplace adjustments. Neurodiversity Global offers training (awareness to strategic), consultancy, and coaching. Reference real workplace scenarios.`,
  "public-sector": `The user is from the public sector (government, NHS, local authority, education). Focus on: legal duties, Equality Act compliance, service redesign for neurodivergent citizens, staff support, reasonable adjustments, and inclusive policy. Neurodiversity Global has extensive NHS and public sector experience.`,
  parents: `The user is a parent or carer of a neurodivergent child. Focus on: navigating SEND systems, understanding rights, school support, emotional wellbeing, advocacy, and practical strategies. Be compassionate — parents are often exhausted and frustrated by systems. Neurodiversity Global offers parent workshops, a SEND Navigator tool, and expert guidance.`,
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { question, audience } = await req.json();

    if (!question || typeof question !== "string" || question.trim().length < 3) {
      return new Response(JSON.stringify({ error: "Please ask a question." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!audience || !AUDIENCE_CONTEXT[audience]) {
      return new Response(JSON.stringify({ error: "Invalid audience." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Pick persona
    const persona = audience === "parents" ? "rich" : "charlie";

    // Search knowledge base for relevant Q&A
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const sb = createClient(supabaseUrl, supabaseKey);

    const { data: kbItems } = await sb
      .from("qa_items")
      .select("question, answer")
      .eq("published", true)
      .textSearch("fts", question.split(" ").slice(0, 5).join(" & "), { type: "websearch" })
      .limit(5);

    let kbContext = "";
    if (kbItems && kbItems.length > 0) {
      kbContext = "\n\nRelevant knowledge base entries (use these to inform your answer, but respond naturally — don't list them):\n" +
        kbItems.map((item) => `Q: ${item.question}\nA: ${item.answer}`).join("\n---\n");
    }

    const systemPrompt = `${PERSONAS[persona]}\n\nAudience context: ${AUDIENCE_CONTEXT[audience]}${kbContext}\n\nIMPORTANT SAFETY RULES:\n- Never provide medical, legal, or diagnostic advice.\n- Never claim to diagnose or assess.\n- Always suggest professional support for clinical matters.\n- Stay within neurodiversity-in-work / neurodiversity-in-education expertise.\n- If the question is off-topic, politely redirect.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: question },
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "We're experiencing high demand. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "Something went wrong. Please try again." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("pathway-ask error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
