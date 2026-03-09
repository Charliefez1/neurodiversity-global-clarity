import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

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
    const { query, posts } = await req.json();

    if (!query || !posts || !Array.isArray(posts)) {
      return new Response(
        JSON.stringify({ error: "Missing query or posts" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Build a compact catalogue for the model
    const catalogue = posts.map((p: { slug: string; title: string; excerpt: string; category: string }) =>
      `- slug: "${p.slug}" | title: "${p.title}" | category: "${p.category}" | excerpt: "${p.excerpt}"`
    ).join("\n");

    const systemPrompt = `You are a blog recommendation engine for Neurodiversity Global. Given a user's question or topic, identify the 3 most relevant blog posts from the catalogue below. Return ONLY the slugs of the 3 best matches, ordered by relevance.

CATALOGUE:
${catalogue}`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-lite",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: query },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "recommend_posts",
              description: "Return the 3 most relevant blog post slugs for the user query.",
              parameters: {
                type: "object",
                properties: {
                  slugs: {
                    type: "array",
                    items: { type: "string" },
                    description: "Array of exactly 3 blog post slugs, ordered by relevance",
                  },
                },
                required: ["slugs"],
                additionalProperties: false,
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "recommend_posts" } },
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "We're experiencing high demand. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const text = await response.text();
      console.error("AI gateway error:", response.status, text);
      throw new Error("AI gateway error");
    }

    const data = await response.json();

    // Extract tool call result
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) {
      throw new Error("No tool call returned from model");
    }

    const args = JSON.parse(toolCall.function.arguments);
    const slugs: string[] = args.slugs || [];

    return new Response(JSON.stringify({ slugs: slugs.slice(0, 3) }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("blog-search error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
