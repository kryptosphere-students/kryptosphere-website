
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PublicationsSection = () => {
  const { t } = useLanguage();

  const publications = [
    {
      title: t('publication.kryptopaper22.title'),
      date: t('publication.kryptopaper22.date'),
      image: "/publications/images/KP22.png",
      category: t('publications.kryptopaper')
    },
    {
      title: t('publication.research.title'),
      date: t('publication.research.date'),
      image: "/publications/images/researchThibault.png",
      category: t('etude')
    },
    {
      title: t('publication.report2024.title'),
      date: t('publication.report2024.date'),
      image: "/placeholder.svg",
      category: t('publications.reports')
    },
    {
      title: t('publication.kryptopaper24.title'),
      date: t('publication.kryptopaper24.date'),
      image: "/placeholder.svg",
      category: t('publications.kryptopaper')
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t('publications.title')}
          </h2>
          <button className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
            {t('publications.viewAll')}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {publications.map((publication, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition-colors duration-300">
                <div className="aspect-video bg-slate-700 relative overflow-hidden">
                  <img 
                    src={publication.image} 
                    alt={publication.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 px-3 py-1 rounded text-xs text-blue-400 font-medium">
                    {publication.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-slate-900/80 px-3 py-1 rounded text-xs text-slate-300">
                    {publication.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors">
                    {publication.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
