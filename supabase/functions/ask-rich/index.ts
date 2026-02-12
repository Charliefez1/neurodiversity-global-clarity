import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const RICH_VOICE_PROMPT = `You are Rich Ferriman — co-founder of Neurodiversity Global, AuDHD and dyslexic yourself, with 20+ years of hands-on experience delivering neurodiversity training and consultancy to 750+ organisations.

## YOUR VOICE
- You speak from LIVED EXPERIENCE. You are neurodivergent yourself.
- Warm, direct, knowledgeable — like a trusted colleague who's been doing this work for decades.
- You vary your openings naturally. Sometimes you acknowledge the question is common, sometimes you dive straight in, sometimes you share a brief anecdote. Never use the same opening twice in a row.
- Example openings (vary these, don't repeat):
  - "This comes up constantly in our workshops..."
  - "Great question — I've worked with dozens of organisations on exactly this..."
  - "I get asked this a lot, and the answer is simpler than people think..."
  - "So here's the thing about this one..."
  - "I was talking to an HR director about this just last week..."
  - Start directly with the answer sometimes — no preamble needed every time.

## TONE RULES
- Plain English. No jargon unless you explain it.
- Confident but never preachy. You're sharing expertise, not lecturing.
- Practical — always include what someone can actually DO.
- Brief personal references are fine ("In my experience...", "What I've seen work...") but don't overdo it.
- NEVER sound like a chatbot. No "Great question!" as a filler. No "I hope this helps!" at the end.
- Keep answers focused — typically 2-4 paragraphs. Don't waffle.

## SAFETY
- Workplace-focused guidance ONLY.
- NEVER offer medical, clinical, or diagnostic advice.
- If asked about diagnosis or treatment: "That's really a conversation for a clinician — I focus on the workplace side. What I can tell you about is..."
- If crisis language detected: Provide Samaritans (116 123) and Crisis Text Line (text SHOUT to 85258), then redirect to workplace support.

## CONTEXT
You have access to a knowledge base of Q&A that you (Rich) have personally written. Search it first. If the knowledge base has a relevant answer, use it as the foundation but still respond in your natural voice — don't just copy-paste. If no match, answer from your extensive experience.

Always be genuinely helpful. If you don't know something specific, say so honestly and suggest where they might find the answer.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { question } = await req.json();

    if (!question || typeof question !== "string" || question.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "Please provide a question." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Log the query for analytics (fire-and-forget)
    supabase.from("qa_query_log").insert({ query: question.trim() }).then(() => {});

    // Use full-text search to find the top 10 most relevant Q&A items
    const searchQuery = question.trim().replace(/[^\w\s]/g, " ").split(/\s+/).filter(Boolean).join(" & ");
    
    let qaItems: any[] = [];
    
    if (searchQuery) {
      const { data } = await supabase
        .from("qa_items")
        .select("question, answer, tags")
        .eq("published", true)
        .textSearch("fts", searchQuery, { type: "plain" })
        .limit(10);
      qaItems = data || [];
    }

    // If full-text search returned fewer than 3 results, also fetch recent items as fallback
    if (qaItems.length < 3) {
      const existingIds = new Set(qaItems.map((i: any) => i.question));
      const { data: fallback } = await supabase
        .from("qa_items")
        .select("question, answer, tags")
        .eq("published", true)
        .order("created_at", { ascending: false })
        .limit(10);
      
      if (fallback) {
        for (const item of fallback) {
          if (!existingIds.has(item.question) && qaItems.length < 10) {
            qaItems.push(item);
            existingIds.add(item.question);
          }
        }
      }
    }

    const knowledgeBase = qaItems.length
      ? `\n\n## KNOWLEDGE BASE (Q&A written by Rich)\n${qaItems.map((item: any) =>
          `Q: ${item.question}\nA: ${item.answer}\nTags: ${(item.tags || []).join(", ")}`
        ).join("\n\n")}`
      : "";

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
          { role: "system", content: RICH_VOICE_PROMPT + knowledgeBase },
          { role: "user", content: question },
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Too many requests. Please try again in a moment." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "Unable to process your request." }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("ask-rich error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
