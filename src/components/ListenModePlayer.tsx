import { useState, useRef, useCallback, useEffect } from "react";
import { Volume2, Square, Pause, Play, SkipForward } from "lucide-react";
import { useExperienceMode } from "@/contexts/ExperienceModeContext";

const ListenModePlayer = () => {
  const { mode, setMode } = useExperienceMode();
  const [state, setState] = useState<"idle" | "playing" | "paused">("idle");
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (mode !== "listen") {
      window.speechSynthesis.cancel();
      setState("idle");
    }
  }, [mode]);

  const getPageText = useCallback(() => {
    const main = document.querySelector("main");
    if (!main) return "";
    const sections = main.querySelectorAll("h1, h2, h3, p, li");
    return Array.from(sections)
      .map((el) => el.textContent?.trim())
      .filter(Boolean)
      .join(". ");
  }, []);

  const handlePlay = useCallback(() => {
    if (state === "playing") {
      window.speechSynthesis.pause();
      setState("paused");
      return;
    }
    if (state === "paused") {
      window.speechSynthesis.resume();
      setState("playing");
      return;
    }

    const text = getPageText();
    if (!text) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.lang = "en-GB";

    const voices = window.speechSynthesis.getVoices();
    const ukVoice =
      voices.find((v) => v.lang === "en-GB" && v.name.includes("Google")) ||
      voices.find((v) => v.lang === "en-GB") ||
      voices.find((v) => v.lang.startsWith("en"));
    if (ukVoice) utterance.voice = ukVoice;

    utterance.onend = () => setState("idle");
    utterance.onerror = () => setState("idle");
    utteranceRef.current = utterance;

    window.speechSynthesis.speak(utterance);
    setState("playing");
  }, [state, getPageText]);

  const handleStop = useCallback(() => {
    window.speechSynthesis.cancel();
    setState("idle");
  }, []);

  if (mode !== "listen") return null;

  return (
    <div className="sticky top-16 z-40 bg-accent/10 border-b border-accent/20 backdrop-blur-sm">
      <div className="mx-auto max-w-wide px-6 lg:px-10 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Volume2 size={14} className="text-accent" />
          <span className="text-xs font-display font-semibold text-accent">
            Listen mode: read this page aloud
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePlay}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-accent text-accent-foreground text-xs font-display font-bold transition-colors hover:bg-accent/90"
          >
            {state === "playing" ? <Pause size={12} /> : <Play size={12} />}
            {state === "playing" ? "Pause" : state === "paused" ? "Resume" : "Play"}
          </button>
          {(state === "playing" || state === "paused") && (
            <button
              onClick={handleStop}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-destructive/10 text-destructive text-xs font-display font-bold transition-colors hover:bg-destructive/20"
            >
              <Square size={12} />
              Stop
            </button>
          )}
          <button
            onClick={() => setMode("read")}
            className="text-xs font-display font-semibold text-muted-foreground hover:text-foreground transition-colors ml-2"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListenModePlayer;
