import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import React, { Suspense, lazy } from "react";

// Critical pages loaded immediately (homepage)
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Code splitting: pages loaded on demand
const Bureau = lazy(() => import("./pages/Bureau"));
const Association = lazy(() => import("./pages/Association"));
const Publications = lazy(() => import("./pages/Publications"));
const Donation = lazy(() => import("./pages/Donation"));
const Events = lazy(() => import("./pages/Events"));
const Antennes = lazy(() => import("./pages/Antennes"));
const AntenneDetail = lazy(() => import("./pages/AntenneDetail"));
// KryptoTour is the heaviest page, loaded only when needed
const KryptoTour = lazy(() => import('./pages/KryptoTour'));
const PitchathonEthCC = lazy(() => import('./pages/PitchathonEthCC'));

const queryClient = new QueryClient();

// Loading component for code splitting
const LoadingFallback = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mb-4"></div>
      <p className="text-slate-300">Loading...</p>
    </div>
  </div>
);

// Wrapper to set language context based on route
const AppWithLanguage = ({ lang }: { lang: 'fr' | 'en' }) => {
  const { setLanguage } = useLanguage();
  React.useEffect(() => {
    setLanguage(lang);
  }, [lang, setLanguage]);
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/bureau" element={<Bureau />} />
        <Route path="/association" element={<Association />} />
        <Route path="/antennes" element={<Antennes />} />
        <Route path="/antennes/:id" element={<AntenneDetail />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/events" element={<Events />} />
        <Route path="/krypto-tour" element={<KryptoTour />} />
        <Route path="/pitchathon-ethcc" element={<PitchathonEthCC />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

// Redirector to /fr or /en based on browser language
const LanguageRedirector = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    const lang = navigator.language.startsWith('fr') ? 'fr' : 'en';
    navigate(`/${lang}`, { replace: true });
  }, [navigate]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/fr/*" element={<AppWithLanguage lang="fr" />} />
            <Route path="/en/*" element={<AppWithLanguage lang="en" />} />
            <Route path="*" element={<LanguageRedirector />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
    <Analytics />
    <SpeedInsights />
  </QueryClientProvider>
);

export default App;
