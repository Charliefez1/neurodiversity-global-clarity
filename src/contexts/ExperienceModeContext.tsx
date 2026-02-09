import { createContext, useContext, useState, type ReactNode } from "react";

export type ExperienceMode = "read" | "scan" | "listen";

interface ExperienceModeContextType {
  mode: ExperienceMode;
  setMode: (mode: ExperienceMode) => void;
}

const ExperienceModeContext = createContext<ExperienceModeContextType>({
  mode: "read",
  setMode: () => {},
});

export const useExperienceMode = () => useContext(ExperienceModeContext);

export const ExperienceModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ExperienceMode>("read");
  return (
    <ExperienceModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ExperienceModeContext.Provider>
  );
};
