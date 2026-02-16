import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const PERPLEXITY_API_KEY = Deno.env.get("PERPLEXITY_API_KEY");
  if (!PERPLEXITY_API_KEY) {
    return new Response(JSON.stringify({ error: "PERPLEXITY_API_KEY not configured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    const searchQuery =
      "Latest UK neurodiversity workplace news, ADHD workplace accommodations, dyslexia employment law, neuroinclusion policy updates this week";

    const response = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PERPLEXITY_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "sonar",
        messages: [
          {
            role: "system",
            content: `You are a news aggregator. Return exactly 6 recent UK neurodiversity workplace news items as a JSON array. Each item must have: title (string), url (string, full URL), source_name (string), source_domain (string), topic (one of: policy, workplace, research, education, legal, general), summary (one sentence). Only return valid JSON, no markdown.`,
          },
          { role: "user", content: searchQuery },
        ],
        temperature: 0.1,
        search_recency_filter: "week",
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Perplexity API error [${response.status}]: ${errText}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "";

    // Extract JSON from response
    const jsonMatch = content.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      throw new Error("No JSON array found in Perplexity response");
    }

    const newsItems = JSON.parse(jsonMatch[0]);

    // Upsert news items
    let inserted = 0;
    for (const item of newsItems) {
      if (!item.title || !item.url) continue;

      // Check for duplicate by URL
      const { data: existing } = await supabase
        .from("news_items")
        .select("id")
        .eq("url", item.url)
        .maybeSingle();

      if (!existing) {
        const { error: insertError } = await supabase.from("news_items").insert({
          title: item.title,
          url: item.url,
          source_name: item.source_name || "Unknown",
          source_domain: item.source_domain || null,
          topic: item.topic || "general",
          summary: item.summary || null,
          status: "published",
          published_at: new Date().toISOString(),
        });
        if (!insertError) inserted++;
      }
    }

    return new Response(
      JSON.stringify({ success: true, inserted, total: newsItems.length }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("News tracker error:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
