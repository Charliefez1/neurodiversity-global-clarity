import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ExperienceModeProvider } from "@/contexts/ExperienceModeContext";
import Index from "./pages/Index";
import WhoWeWorkWith from "./pages/WhoWeWorkWith";
import WhatWeDo from "./pages/WhatWeDo";
import Workshops from "./pages/Workshops";
import IndustryTemplate from "./pages/IndustryTemplate";
import KnowledgeBase from "./pages/KnowledgeBase";
import Clients from "./pages/Clients";
import Testimonials from "./pages/Testimonials";
import AskRich from "./pages/AskRich";
import AdminQA from "./pages/AdminQA";
import NotFound from "./pages/NotFound";
import ExperienceSelector from "./components/ExperienceSelector";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ExperienceModeProvider>
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
            <Route path="/knowledge-base" element={<KnowledgeBase />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/ask-rich" element={<AskRich />} />
            <Route path="/admin" element={<AdminQA />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          
        </BrowserRouter>
      </ExperienceModeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
