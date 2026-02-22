import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Calendar1, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLanguage, getLangFromPath } from '../contexts/LanguageContext';
import { describe } from 'node:test';
import { link } from 'fs';

const Events = () => {
  const { t } = useLanguage();
  const lang = getLangFromPath(location.pathname);
  const langPrefix = `/${lang}`;

  useEffect(() => {
    // Charge le script Lu.ma une seule fois
    const script = document.createElement('script');
    script.src = 'https://embed.lu.ma/loader.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const pastEvents = [
    {
      id: 1,
      name: t('kryptotour.title'),
      date: t('kryptotour.date'),
      subtitle: t('kryptotour.subtitle'),
      country: "France",
      city: "Lyon",
      image: '/antennes/lyon/iaelyonGallery6.webp',
      link: '/krypto-tour',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="py-8 px-6">
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
          <div className="mb-6">
            <a
              href="https://lu.ma/user/KRYPTOSPHERE"
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
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">{t('events.upcoming')}</h2>

          <div className="w-full h-[700px] rounded-2xl overflow-hidden border border-slate-700 bg-[#212325]">
            <iframe
              src="https://lu.ma/embed/calendar/cal-098AwKOPKgqH6Mw/events?lt=dark"
              width="100%"
              height="100%"
              loading="lazy"
              style={{
                border: 'none',
                borderRadius: '1rem',

              }}
              title="Événements à venir Kryptosphere"
            ></iframe>
          </div>
        </div>
      </section>
      {/* Events passés */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            {t('events.past')}
          </h2>
        </div>
        { /* Past Events Grid */ }
          <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
            {pastEvents.map((event) => (
              <Link
                key={event.id}
                to={`${langPrefix}/${event.link}`}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-slate-700/50 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="aspect-video relative rounded-xl overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white z-10">
                      <h3 className="text-2xl font-bold">{event.name}</h3>
                      <p className="text-blue-200">{event.country}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h4 className="text-xl font-semibold text-white mb-2">{event.name}</h4>
                    <p className="text-slate-300 text-sm mb-4">{event.subtitle}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-auto">
                    <div className="text-blue-400 group-hover:text-blue-300 flex items-center gap-1">
                      <span>{t('events.discover')}</span>
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
      </section>
      <Footer />
    </div>
  );
};

export default Events;
