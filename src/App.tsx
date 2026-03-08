import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ExperienceModeProvider } from "@/contexts/ExperienceModeContext";
import { PageSectionsProvider } from "@/contexts/PageSectionsContext";
import { PortalAuthProvider } from "@/contexts/PortalAuthContext";
import useLanguageDirection from "@/hooks/useLanguageDirection";
import Index from "./pages/Index";
import WhoWeWorkWith from "./pages/WhoWeWorkWith";
import WhatWeDo from "./pages/WhatWeDo";
import Workshops from "./pages/Workshops";
import IndustryTemplate from "./pages/IndustryTemplate";
import Industries from "./pages/Industries";
import IndustryHealthcareNHS from "./pages/IndustryHealthcareNHS";
import IndustryEducation from "./pages/IndustryEducation";
import IndustryPublicSector from "./pages/IndustryPublicSector";
import IndustryTechnology from "./pages/IndustryTechnology";
import KnowledgeBase from "./pages/KnowledgeBase";
import Clients from "./pages/Clients";
import Testimonials from "./pages/Testimonials";
import AskRich from "./pages/AskRich";
import QADetail from "./pages/QADetail";
import NeurodiversityTraining from "./pages/NeurodiversityTraining";
import NeurodiversityConsultancy from "./pages/NeurodiversityConsultancy";
import AdminQA from "./pages/AdminQA";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import CommunityQuestions from "./pages/CommunityQuestions";
import Sources from "./pages/Sources";
import CaseStudies from "./pages/CaseStudies";
import Feedback from "./pages/Feedback";
import Parents from "./pages/Parents";
import ForEmployers from "./pages/ForEmployers";
import ForPublicSector from "./pages/ForPublicSector";
import ForParents from "./pages/ForParents";
import ParentPresentation from "./pages/ParentPresentation";
import NotFound from "./pages/NotFound";
import ExperienceSelector from "./components/ExperienceSelector";
import ScanModeBanner from "./components/ScanModeBanner";
import ListenModePlayer from "./components/ListenModePlayer";
import ScrollToTop from "./components/ScrollToTop";

// Portal pages
import PortalLogin from "./pages/portal/Login";
import PortalDashboard from "./pages/portal/Dashboard";
import PortalBookSession from "./pages/portal/BookSession";
import PortalMyBookings from "./pages/portal/MyBookings";
import PortalLearningLibrary from "./pages/portal/LearningLibrary";
import PortalAskAI from "./pages/portal/AskAI";
import PortalCertificates from "./pages/portal/Certificates";
import PortalSupport from "./pages/portal/Support";
import PortalResources from "./pages/portal/Resources";
import PortalCoaching from "./pages/portal/Coaching";
import PortalCognassist from "./pages/portal/Cognassist";
import PortalProgrammeCalendar from "./pages/portal/ProgrammeCalendar";
// Portal admin pages
import PortalAdminDashboard from "./pages/portal/admin/AdminDashboard";
import PortalSessionManager from "./pages/portal/admin/SessionManager";
import PortalAttendance from "./pages/portal/admin/Attendance";
import PortalContentManager from "./pages/portal/admin/ContentManager";
import PortalReporting from "./pages/portal/admin/Reporting";
import PortalCoachingAdmin from "./pages/portal/admin/CoachingAdmin";
import PortalCognassistAdmin from "./pages/portal/admin/CognassistAdmin";

const queryClient = new QueryClient();

const AppContent = () => {
  useLanguageDirection();
  return (
    <>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ExperienceSelector />
        <ScanModeBanner />
        <ListenModePlayer />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/who-we-work-with" element={<WhoWeWorkWith />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/workshops" element={<Workshops />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/financial-services" element={<IndustryTemplate />} />
            <Route path="/industries/healthcare-nhs" element={<IndustryHealthcareNHS />} />
            <Route path="/industries/education" element={<IndustryEducation />} />
            <Route path="/industries/public-sector" element={<IndustryPublicSector />} />
            <Route path="/industries/technology" element={<IndustryTechnology />} />
            <Route path="/neurodiversity-training" element={<NeurodiversityTraining />} />
            <Route path="/neurodiversity-consultancy" element={<NeurodiversityConsultancy />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/ask-rich" element={<AskRich />} />
          <Route path="/ask-rich/:slug" element={<QADetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/community-questions" element={<CommunityQuestions />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/for-employers" element={<ForEmployers />} />
          <Route path="/for-public-sector" element={<ForPublicSector />} />
          <Route path="/for-parents" element={<ForParents />} />
          <Route path="/for-parents/presentation" element={<ParentPresentation />} />
          <Route path="/admin" element={<AdminQA />} />
          {/* Portal routes */}
          <Route path="/portal" element={<PortalLogin />} />
          <Route path="/portal/login" element={<PortalLogin />} />
          <Route path="/portal/dashboard" element={<PortalDashboard />} />
          <Route path="/portal/book-session" element={<PortalBookSession />} />
          <Route path="/portal/my-bookings" element={<PortalMyBookings />} />
          <Route path="/portal/learning-library" element={<PortalLearningLibrary />} />
          <Route path="/portal/ask-ai" element={<PortalAskAI />} />
          <Route path="/portal/certificates" element={<PortalCertificates />} />
          <Route path="/portal/support" element={<PortalSupport />} />
          <Route path="/portal/resources" element={<PortalResources />} />
          <Route path="/portal/coaching" element={<PortalCoaching />} />
          <Route path="/portal/cognassist" element={<PortalCognassist />} />
          <Route path="/portal/programme-calendar" element={<PortalProgrammeCalendar />} />
          {/* Portal admin routes */}
          <Route path="/portal/admin" element={<PortalAdminDashboard />} />
          <Route path="/portal/admin/sessions" element={<PortalSessionManager />} />
          <Route path="/portal/admin/attendance" element={<PortalAttendance />} />
          <Route path="/portal/admin/content" element={<PortalContentManager />} />
          <Route path="/portal/admin/reporting" element={<PortalReporting />} />
          <Route path="/portal/admin/coaching" element={<PortalCoachingAdmin />} />
          <Route path="/portal/admin/cognassist" element={<PortalCognassistAdmin />} />
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
          <PortalAuthProvider>
            <AppContent />
          </PortalAuthProvider>
        </PageSectionsProvider>
      </ExperienceModeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
