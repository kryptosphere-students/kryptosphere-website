
import React from 'react';
import { ArrowRight, Zap, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-900/50 backdrop-blur-lg border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm mb-8">
            <Zap className="w-4 h-4" />
            L'avenir de la blockchain commence ici
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
            Kryptosphere
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          
          <p className="text-2xl md:text-3xl text-blue-300 font-light mb-6">
            Blockchain Club
          </p>
        </div>
        
        <p className="text-xl text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed">
          L'association étudiante de référence dans l'exploration des technologies blockchain. 
          Rejoignez notre communauté pour découvrir et construire l'avenir décentralisé.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-blue-500/25">
            Rejoindre l'association
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-slate-600 text-slate-300 px-8 py-4 rounded-lg font-medium hover:border-blue-500 hover:text-blue-300 transition-all duration-300">
            Nos événements
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-slate-700/50">
          <div className="text-center group">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">200+</div>
            <div className="text-slate-400 text-sm uppercase tracking-wide">Membres</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">50+</div>
            <div className="text-slate-400 text-sm uppercase tracking-wide">Événements</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">10+</div>
            <div className="text-slate-400 text-sm uppercase tracking-wide">Antennes</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">3</div>
            <div className="text-slate-400 text-sm uppercase tracking-wide">Ans</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
