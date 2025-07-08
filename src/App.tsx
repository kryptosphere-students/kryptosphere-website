import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
    <Analytics />
    <SpeedInsights />
  </QueryClientProvider>
);

export default App;
