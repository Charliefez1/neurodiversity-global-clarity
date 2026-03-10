import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ExperienceModeProvider } from "@/contexts/ExperienceModeContext";
import { PageSectionsProvider } from "@/contexts/PageSectionsContext";
import { PortalAuthProvider } from "@/contexts/PortalAuthContext";
import useLanguageDirection from "@/hooks/useLanguageDirection";
import ScrollToTop from "./components/ScrollToTop";

// Only eagerly load the homepage — everything else is lazy
import Index from "./pages/Index";

// Lazy-loaded pages
const WhatWeDo = lazy(() => import("./pages/WhatWeDo"));
const About = lazy(() => import("./pages/About"));
const AboutTeam = lazy(() => import("./pages/AboutTeam"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const AccessibilityStatement = lazy(() => import("./pages/AccessibilityStatement"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const Workshops = lazy(() => import("./pages/Workshops"));
const Industries = lazy(() => import("./pages/Industries"));
const IndustryTemplate = lazy(() => import("./pages/IndustryTemplate"));
const IndustryHealthcareNHS = lazy(() => import("./pages/IndustryHealthcareNHS"));
const IndustryEducation = lazy(() => import("./pages/IndustryEducation"));
const IndustryPublicSector = lazy(() => import("./pages/IndustryPublicSector"));
const IndustryTechnology = lazy(() => import("./pages/IndustryTechnology"));
const IndustryEngineering = lazy(() => import("./pages/IndustryEngineering"));
const IndustryCorporate = lazy(() => import("./pages/IndustryCorporate"));
const IndustryCharity = lazy(() => import("./pages/IndustryCharity"));
const IndustryLegal = lazy(() => import("./pages/IndustryLegal"));
const IndustryEmergencyServices = lazy(() => import("./pages/IndustryEmergencyServices"));
const IndustryRail = lazy(() => import("./pages/IndustryRail"));
const IndustrySales = lazy(() => import("./pages/IndustrySales"));
const IndustryContactCentres = lazy(() => import("./pages/IndustryContactCentres"));
const IndustryDefence = lazy(() => import("./pages/IndustryDefence"));
const IndustryRetailHospitality = lazy(() => import("./pages/IndustryRetailHospitality"));
const KnowledgeBase = lazy(() => import("./pages/KnowledgeBase"));
const Clients = lazy(() => import("./pages/Clients"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const AskRich = lazy(() => import("./pages/AskRich"));
const QADetail = lazy(() => import("./pages/QADetail"));
const NeurodiversityTraining = lazy(() => import("./pages/NeurodiversityTraining"));
const NeurodiversityConsultancy = lazy(() => import("./pages/NeurodiversityConsultancy"));
const AdminQA = lazy(() => import("./pages/AdminQA"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const CommunityQuestions = lazy(() => import("./pages/CommunityQuestions"));
const Sources = lazy(() => import("./pages/Sources"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Feedback = lazy(() => import("./pages/Feedback"));
const ForEmployers = lazy(() => import("./pages/ForEmployers"));
const ForPublicSector = lazy(() => import("./pages/ForPublicSector"));
const ForParents = lazy(() => import("./pages/ForParents"));
const ParentPresentation = lazy(() => import("./pages/ParentPresentation"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ExperienceSelector = lazy(() => import("./components/ExperienceSelector"));
const ScanModeBanner = lazy(() => import("./components/ScanModeBanner"));
const ListenModePlayer = lazy(() => import("./components/ListenModePlayer"));

// Portal pages
const PortalLogin = lazy(() => import("./pages/portal/Login"));
const PortalDashboard = lazy(() => import("./pages/portal/Dashboard"));
const PortalRoute = lazy(() => import("./components/portal/PortalRoute"));
const PortalBookSession = lazy(() => import("./pages/portal/BookSession"));
const PortalMyBookings = lazy(() => import("./pages/portal/MyBookings"));
const PortalLearningLibrary = lazy(() => import("./pages/portal/LearningLibrary"));
const PortalAskAI = lazy(() => import("./pages/portal/AskAI"));
const PortalCertificates = lazy(() => import("./pages/portal/Certificates"));
const PortalSupport = lazy(() => import("./pages/portal/Support"));
const PortalResources = lazy(() => import("./pages/portal/Resources"));
const PortalCoaching = lazy(() => import("./pages/portal/Coaching"));
const PortalCognassist = lazy(() => import("./pages/portal/Cognassist"));
const PortalProgrammeCalendar = lazy(() => import("./pages/portal/ProgrammeCalendar"));
const PortalAdminDashboard = lazy(() => import("./pages/portal/admin/AdminDashboard"));
const PortalSessionManager = lazy(() => import("./pages/portal/admin/SessionManager"));
const PortalAttendance = lazy(() => import("./pages/portal/admin/Attendance"));
const PortalContentManager = lazy(() => import("./pages/portal/admin/ContentManager"));
const PortalReporting = lazy(() => import("./pages/portal/admin/Reporting"));
const PortalCoachingAdmin = lazy(() => import("./pages/portal/admin/CoachingAdmin"));
const PortalCognassistAdmin = lazy(() => import("./pages/portal/admin/CognassistAdmin"));

const queryClient = new QueryClient();

/** Minimal loading skeleton to prevent CLS */
const PageFallback = () => (
  <div className="min-h-screen bg-background" aria-busy="true" aria-label="Loading page">
    <div className="h-16 bg-primary" /> {/* navbar placeholder */}
  </div>
);

const AppContent = () => {
  useLanguageDirection();
  return (
    <>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={null}>
          <ExperienceSelector />
          <ScanModeBanner />
          <ListenModePlayer />
        </Suspense>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/team" element={<AboutTeam />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/financial-services" element={<IndustryTemplate />} />
            <Route path="/industries/healthcare-nhs" element={<IndustryHealthcareNHS />} />
            <Route path="/industries/education" element={<IndustryEducation />} />
            <Route path="/industries/public-sector" element={<IndustryPublicSector />} />
            <Route path="/industries/technology" element={<IndustryTechnology />} />
            <Route path="/industries/engineering" element={<IndustryEngineering />} />
            <Route path="/industries/corporate" element={<IndustryCorporate />} />
            <Route path="/industries/charity" element={<IndustryCharity />} />
            <Route path="/industries/legal" element={<IndustryLegal />} />
            <Route path="/industries/emergency-services" element={<IndustryEmergencyServices />} />
            <Route path="/industries/rail-transport" element={<IndustryRail />} />
            <Route path="/industries/sales" element={<IndustrySales />} />
            <Route path="/industries/contact-centres" element={<IndustryContactCentres />} />
            <Route path="/industries/defence" element={<IndustryDefence />} />
            <Route path="/industries/retail-hospitality" element={<IndustryRetailHospitality />} />
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
            <Route path="/for-employers" element={<ForEmployers />} />
            <Route path="/for-public-sector" element={<ForPublicSector />} />
            <Route path="/for-parents" element={<ForParents />} />
            <Route path="/for-parents/presentation" element={<ParentPresentation />} />
            <Route path="/admin" element={<AdminQA />} />
            {/* Portal routes */}
            <Route path="/portal" element={<PortalLogin />} />
            <Route path="/portal/login" element={<PortalLogin />} />
            <Route path="/portal/dashboard" element={<Suspense fallback={<PageFallback />}><PortalRoute><PortalDashboard /></PortalRoute></Suspense>} />
            <Route path="/portal/book-session" element={<Suspense fallback={<PageFallback />}><PortalRoute><PortalBookSession /></PortalRoute></Suspense>} />
            <Route path="/portal/my-bookings" element={<Suspense fallback={<PageFallback />}><PortalRoute><PortalMyBookings /></PortalRoute></Suspense>} />
            <Route path="/portal/learning-library" element={<Suspense fallback={<PageFallback />}><PortalRoute><PortalLearningLibrary /></PortalRoute></Suspense>} />
            <Route path="/portal/ask-ai" element={<Suspense fallback={<PageFallback />}><PortalRoute><PortalAskAI /></PortalRoute></Suspense>} />
            <Route path="/portal/certificates" element={<Suspense fallback={<PageFallback />}><PortalRoute><PortalCertificates /></PortalRoute></Suspense>} />
            <Route path="/portal/support" element={<Suspense fallback={<PageFallback />}><PortalRoute><PortalSupport /></PortalRoute></Suspense>} />
            <Route path="/portal/resources" element={<Suspense fallback={<PageFallback />}><PortalRoute><PortalResources /></PortalRoute></Suspense>} />
            <Route path="/portal/coaching" element={<Suspense fallback={<PageFallback />}><PortalRoute><PortalCoaching /></PortalRoute></Suspense>} />
            <Route path="/portal/cognassist" element={<Suspense fallback={<PageFallback />}><PortalRoute><PortalCognassist /></PortalRoute></Suspense>} />
            <Route path="/portal/programme-calendar" element={<Suspense fallback={<PageFallback />}><PortalRoute><PortalProgrammeCalendar /></PortalRoute></Suspense>} />
            {/* Portal admin routes */}
            <Route path="/portal/admin" element={<Suspense fallback={<PageFallback />}><PortalRoute><PortalAdminDashboard /></PortalRoute></Suspense>} />
            <Route path="/portal/admin/sessions" element={<Suspense fallback={<PageFallback />}><PortalRoute><PortalSessionManager /></PortalRoute></Suspense>} />
            <Route path="/portal/admin/attendance" element={<Suspense fallback={<PageFallback />}><PortalRoute><PortalAttendance /></PortalRoute></Suspense>} />
            <Route path="/portal/admin/content" element={<Suspense fallback={<PageFallback />}><PortalRoute><PortalContentManager /></PortalRoute></Suspense>} />
            <Route path="/portal/admin/reporting" element={<Suspense fallback={<PageFallback />}><PortalRoute><PortalReporting /></PortalRoute></Suspense>} />
            <Route path="/portal/admin/coaching" element={<Suspense fallback={<PageFallback />}><PortalRoute><PortalCoachingAdmin /></PortalRoute></Suspense>} />
            <Route path="/portal/admin/cognassist" element={<Suspense fallback={<PageFallback />}><PortalRoute><PortalCognassistAdmin /></PortalRoute></Suspense>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
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
