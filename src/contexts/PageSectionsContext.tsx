import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export interface PageSection {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface PageSectionsContextType {
  sections: PageSection[];
  setSections: (sections: PageSection[]) => void;
}

const PageSectionsContext = createContext<PageSectionsContextType>({
  sections: [],
  setSections: () => {},
});

export const usePageSections = () => useContext(PageSectionsContext);

export const PageSectionsProvider = ({ children }: { children: ReactNode }) => {
  const [sections, setSections] = useState<PageSection[]>([]);
  return (
    <PageSectionsContext.Provider value={{ sections, setSections }}>
      {children}
    </PageSectionsContext.Provider>
  );
};

/** Drop this into any page to register its sections in the toolbar */
export const RegisterSections = ({ sections }: { sections: PageSection[] }) => {
  const { setSections } = usePageSections();
  useEffect(() => {
    setSections(sections);
    return () => setSections([]);
  }, []);
  return null;
};
