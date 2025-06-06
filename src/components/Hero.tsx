
import React from 'react';
import { ArrowRight, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

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
          {/* Logo Kryptosphere au-dessus du titre - agrandi */}
          <div className="mb-12 flex justify-center">
            <img 
              src="/lovable-uploads/ksLogo.png" 
              alt="Kryptosphere Logo"
              className="h-80 w-auto opacity-90" // Augmentation de la taille de 32px à 40px
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
            {t('hero.title')}<br />
            {t('hero.title2')} <span className="text-blue-400">{t('hero.title3')}</span> {t('hero.title4')}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center gap-2 group">
              {t('hero.join')}
            </button>
            <button className="text-white hover:text-blue-400 transition-colors duration-300 underline">
              {t('hero.branches')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
