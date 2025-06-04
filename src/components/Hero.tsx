
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
        backgroundSize: '24px 24px'
      }}></div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-slate-900 tracking-tight">
            Kryptosphere
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl text-slate-600 font-light mb-8">
            Blockchain Club
          </p>
        </div>
        
        <p className="text-xl text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          L'association étudiante de référence dans l'exploration des technologies blockchain. 
          Rejoignez notre communauté pour découvrir et construire l'avenir décentralisé.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 group">
            Rejoindre l'association
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
            Nos événements
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-slate-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-900 mb-2">200+</div>
            <div className="text-slate-600 text-sm uppercase tracking-wide">Membres</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-900 mb-2">50+</div>
            <div className="text-slate-600 text-sm uppercase tracking-wide">Événements</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-900 mb-2">10+</div>
            <div className="text-slate-600 text-sm uppercase tracking-wide">Antennes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-900 mb-2">3</div>
            <div className="text-slate-600 text-sm uppercase tracking-wide">Ans</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
