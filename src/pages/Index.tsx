
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import SponsorsSection from '../components/SponsorsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      <Hero />
      <AboutSection />
      <SponsorsSection />
      <Footer />
    </div>
  );
};

export default Index;
