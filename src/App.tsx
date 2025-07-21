import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Bureau from "./pages/Bureau";
import Association from "./pages/Association";
import Publications from "./pages/Publications";
import Donation from "./pages/Donation";
import Events from "./pages/Events";
import Antennes from "./pages/Antennes";
import AntenneDetail from "./pages/AntenneDetail";
import NotFound from "./pages/NotFound";
import KryptoTour from './pages/KryptoTour';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import React from "react";

const queryClient = new QueryClient();

// Wrapper to set language context based on route
const AppWithLanguage = ({ lang }: { lang: 'fr' | 'en' }) => {
  const { setLanguage } = useLanguage();
  React.useEffect(() => {
    setLanguage(lang);
  }, [lang, setLanguage]);
  return (
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
      <Route path="*" element={<NotFound />} />
    </Routes>
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
