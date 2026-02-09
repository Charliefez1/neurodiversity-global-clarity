import { useState, useRef, useCallback } from "react";
import { Volume2, Square, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface SectionAudioProps {
  sectionText: string;
  label?: string;
}

const SectionAudio = ({ sectionText, label = "Listen to this section" }: SectionAudioProps) => {
  const [state, setState] = useState<"idle" | "loading" | "playing">("idle");
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const handlePlay = useCallback(async () => {
    if (state === "playing") {
      window.speechSynthesis.cancel();
      setState("idle");
      return;
    }

    setState("loading");
    try {
      // Get AI-generated summary
      const { data, error } = await supabase.functions.invoke("text-to-speech", {
        body: { text: sectionText },
      });

      if (error) throw error;

      const summary = data?.summary || sectionText.slice(0, 300);

      // Use Web Speech API for audio playback
      if (!window.speechSynthesis) {
        throw new Error("Speech synthesis not supported");
      }

      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(summary);
      utterance.rate = 0.95;
      utterance.pitch = 1;
      utterance.lang = "en-GB";

      // Try to find a good UK voice
      const voices = window.speechSynthesis.getVoices();
      const ukVoice = voices.find(v => v.lang === "en-GB" && v.name.includes("Google")) 
        || voices.find(v => v.lang === "en-GB")
        || voices.find(v => v.lang.startsWith("en"));
      if (ukVoice) utterance.voice = ukVoice;

      utterance.onend = () => setState("idle");
      utterance.onerror = () => setState("idle");
      utteranceRef.current = utterance;

      window.speechSynthesis.speak(utterance);
      setState("playing");
    } catch (e) {
      console.error("Audio error:", e);
      setState("idle");
    }
  }, [sectionText, state]);

  return (
    <button
      onClick={handlePlay}
      disabled={state === "loading"}
      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent/10 border border-accent/20 text-accent font-display font-semibold text-sm hover:bg-accent/15 transition-colors disabled:opacity-50"
      aria-label={state === "playing" ? "Stop audio" : label}
    >
      {state === "loading" && <Loader2 size={15} className="animate-spin" />}
      {state === "playing" && <Square size={15} />}
      {state === "idle" && <Volume2 size={15} />}
      {state === "playing" ? "Stop" : state === "loading" ? "Loading…" : label}
    </button>
  );
};

export default SectionAudio;
