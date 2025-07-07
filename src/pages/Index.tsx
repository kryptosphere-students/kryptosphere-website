import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import SponsorsSection from '../components/SponsorsSection';
import PublicationsSection from '../components/PublicationsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <Navigation />
      <Hero />
      <StatsSection />
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <SponsorsSection />
        <PublicationsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
