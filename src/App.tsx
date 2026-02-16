import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ExperienceModeProvider } from "@/contexts/ExperienceModeContext";
import { PageSectionsProvider } from "@/contexts/PageSectionsContext";
import useLanguageDirection from "@/hooks/useLanguageDirection";
import Index from "./pages/Index";
import WhoWeWorkWith from "./pages/WhoWeWorkWith";
import WhatWeDo from "./pages/WhatWeDo";
import Workshops from "./pages/Workshops";
import IndustryTemplate from "./pages/IndustryTemplate";
import KnowledgeBase from "./pages/KnowledgeBase";
import Clients from "./pages/Clients";
import Testimonials from "./pages/Testimonials";
import AskRich from "./pages/AskRich";
import QADetail from "./pages/QADetail";
import NeurodiversityTraining from "./pages/NeurodiversityTraining";
import NeurodiversityConsultancy from "./pages/NeurodiversityConsultancy";
import AdminQA from "./pages/AdminQA";
import NotFound from "./pages/NotFound";
import ExperienceSelector from "./components/ExperienceSelector";

const queryClient = new QueryClient();

const AppContent = () => {
  useLanguageDirection();
  return (
    <>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ExperienceSelector />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/who-we-work-with" element={<WhoWeWorkWith />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/workshops" element={<Workshops />} />
            <Route path="/industries/financial-services" element={<IndustryTemplate />} />
            <Route path="/neurodiversity-training" element={<NeurodiversityTraining />} />
            <Route path="/neurodiversity-consultancy" element={<NeurodiversityConsultancy />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/ask-rich" element={<AskRich />} />
          <Route path="/ask-rich/:slug" element={<QADetail />} />
          <Route path="/admin" element={<AdminQA />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ExperienceModeProvider>
        <PageSectionsProvider>
          <AppContent />
        </PageSectionsProvider>
      </ExperienceModeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
