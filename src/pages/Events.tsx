import React, { useEffect } from 'react';
import { Calendar, Calendar1, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const Events = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // Charge le script Lu.ma une seule fois
    const script = document.createElement('script');
    script.src = 'https://embed.lu.ma/loader.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-900/50 backdrop-blur-lg border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm mb-8">
            <Calendar1 className="w-4 h-4 text-blue-400" />
            {t('events.agendaTag')}
          </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {t('events.title')}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
     
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('events.subtitle')}
          </p>

          {/* Button Lu.ma */}
          <div className="mb-16">
            <a
              href="https://lu.ma/kryptosphere"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 group"
            >
              <Calendar className="w-5 h-5" />
              {t('events.lumaButton')}
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Events à venir */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">{t('events.upcoming')}</h2>

          <div className="w-full h-[1000px] rounded-2xl overflow-hidden border border-slate-700">
            <iframe
              src="https://lu.ma/embed/calendar/kryptosphere?type=grid&future=true"
              width="100%"
              height="100%"
              loading="lazy"
              style={{
                border: 'none',
                borderRadius: '1rem'
              }}
              title="Événements à venir Kryptosphere"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Événements passés */}
      <section className="py-16 px-6 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">{t('events.past')}</h2>

          <div className="w-full h-[1000px] rounded-2xl overflow-hidden border border-slate-700">
            <iframe
              src="https://lu.ma/embed/calendar/kryptosphere?type=grid&past=true"
              width="100%"
              height="100%"
              loading="lazy"
              style={{
                border: 'none',
                borderRadius: '1rem'
              }}
              title="Événements passés Kryptosphere"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
