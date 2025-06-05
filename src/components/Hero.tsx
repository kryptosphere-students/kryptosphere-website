
import React from 'react';
import { ArrowRight, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image avec overlay sombre */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/e930801d-6056-4451-a96a-ff4fad677d1e.png')`,
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="h-full w-full" 
          style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* Navigation spacing */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 pt-20">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
            Plus grande association<br />
            étudiante <span className="text-blue-400">blockchain</span> d'Europe
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Promouvoir les nouvelles technologies auprès des étudiants depuis 2017
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center gap-2 group">
              Rejoindre l'association
            </button>
            <button className="text-white hover:text-blue-400 transition-colors duration-300 underline">
              Voir nos antennes
            </button>
          </div>
        </div>
      </div>

      {/* Bottom section avec sponsors preview */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <h3 className="text-white text-lg font-medium">Ils nous soutiennent</h3>
            <div className="flex items-center gap-2 text-slate-400">
              <span>Sponsors</span>
              <span>•</span>
              <span>Partenaires</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
