import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const apiKey = Deno.env.get("GOOGLE_MAPS_API_KEY");
    if (!apiKey) throw new Error("GOOGLE_MAPS_API_KEY is not configured.");

    const url = new URL(req.url);
    const action = url.searchParams.get("action");

    if (action === "distance-matrix") {
      const origins = url.searchParams.get("origins");
      const destinations = url.searchParams.get("destinations");
      const mode = url.searchParams.get("mode") || "driving";
      if (!origins || !destinations) return new Response(JSON.stringify({ error: "origins and destinations required" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      const apiUrl = new URL("https://maps.googleapis.com/maps/api/distancematrix/json");
      apiUrl.searchParams.set("origins", origins); apiUrl.searchParams.set("destinations", destinations); apiUrl.searchParams.set("mode", mode); apiUrl.searchParams.set("key", apiKey);
      const res = await fetch(apiUrl.toString());
      const data = await res.json();
      return new Response(JSON.stringify(data), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    if (action === "geocode") {
      const address = url.searchParams.get("address");
      if (!address) return new Response(JSON.stringify({ error: "address required" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      const apiUrl = new URL("https://maps.googleapis.com/maps/api/geocode/json");
      apiUrl.searchParams.set("address", address); apiUrl.searchParams.set("key", apiKey);
      const res = await fetch(apiUrl.toString());
      const data = await res.json();
      return new Response(JSON.stringify(data), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    if (action === "directions") {
      const origin = url.searchParams.get("origin");
      const destination = url.searchParams.get("destination");
      const mode = url.searchParams.get("mode") || "driving";
      if (!origin || !destination) return new Response(JSON.stringify({ error: "origin and destination required" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      const apiUrl = new URL("https://maps.googleapis.com/maps/api/directions/json");
      apiUrl.searchParams.set("origin", origin); apiUrl.searchParams.set("destination", destination); apiUrl.searchParams.set("mode", mode); apiUrl.searchParams.set("key", apiKey);
      const res = await fetch(apiUrl.toString());
      const data = await res.json();
      return new Response(JSON.stringify(data), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    return new Response(JSON.stringify({ error: "Invalid action" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (error) {
    console.error("[google-maps] Error:", error);
    return new Response(JSON.stringify({ error: String(error) }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});