
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, Download, Eye, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Publications = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { t } = useLanguage();

  const publications = [
    {
      id: 1,
      title: t('publication.kryptopaper25.title'),
      date: t('publication.kryptopaper25.date'),
      category: "kryptopaper",
      description: t('publication.kryptopaper25.description'),
      image: "/placeholder.svg",
      downloadUrl: "#",
      readTime: t('publication.kryptopaper25.readTime')
    },
    {
      id: 2,
      title: t('publication.defi.title'),
      date: t('publication.defi.date'),
      category: "guide",
      description: t('publication.defi.description'),
      image: "/placeholder.svg",
      downloadUrl: "#",
      readTime: t('publication.defi.readTime')
    },
    {
      id: 3,
      title: t('publication.report2024.title'),
      date: t('publication.report2024.date'),
      category: "rapport",
      description: t('publication.report2024.description'),
      image: "/placeholder.svg",
      downloadUrl: "#",
      readTime: t('publication.report2024.readTime')
    },
    {
      id: 4,
      title: t('publication.kryptopaper24.title'),
      date: t('publication.kryptopaper24.date'),
      category: "kryptopaper",
      description: t('publication.kryptopaper24.description'),
      image: "/placeholder.svg",
      downloadUrl: "#",
      readTime: t('publication.kryptopaper24.readTime')
    },
    {
      id: 5,
      title: t('publication.research.title'),
      date: t('publication.research.date'),
      category: "etude",
      description: t('publication.research.description'),
      image: "/publications/images/researchThibault.png",
      downloadUrl: "/publications/LANGLOIS_BERTHELOT_Thibault_Doctorat_2023.pdf",
      readTime: t('publication.research.readTime')
    },
    {
      id: 6,
      title: t('publication.smartcontracts.title'),
      date: t('publication.smartcontracts.date'),
      category: "guide",
      description: t('publication.smartcontracts.description'),
      image: "/placeholder.svg",
      downloadUrl: "#",
      readTime: t('publication.smartcontracts.readTime')
    }
  ];

  const categories = [
    { id: 'all', name: t('publications.all'), count: publications.length },
    { id: 'kryptopaper', name: t('publications.kryptopaper'), count: publications.filter(p => p.category === 'kryptopaper').length },
    { id: 'guide', name: t('publications.guides'), count: publications.filter(p => p.category === 'guide').length },
    { id: 'rapport', name: t('publications.reports'), count: publications.filter(p => p.category === 'rapport').length },
    { id: 'etude', name: t('publications.studies'), count: publications.filter(p => p.category === 'etude').length }
  ];

  const filteredPublications = selectedCategory === 'all'
    ? publications
    : publications.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-900/50 backdrop-blur-lg border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm mb-8">
            <FileText className="w-4 h-4" />
            {t('publications.resourcesTag')}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {t('publications.page.title')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>

          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {t('publications.page.subtitle')}
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/50'
                  }`}
              >
                {category.name}
                <span className="text-xs bg-slate-700 px-2 py-1 rounded-full">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPublications.map((publication) => (
              <div
                key={publication.id}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
              >
                <div className="aspect-video bg-slate-700 relative overflow-hidden">
                  <img
                    src={publication.image}
                    alt={publication.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 px-3 py-1 rounded text-xs text-blue-400 font-medium uppercase">
                    {publication.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-slate-900/80 px-3 py-1 rounded text-xs text-slate-300 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {publication.date}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-slate-900/80 px-3 py-1 rounded text-xs text-slate-300 flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {publication.readTime}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {publication.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {publication.description}
                  </p>

                  <div className="flex gap-3">
                    <a
                      href={publication.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      {t('publications.read')}
                    </a>

                    <a
                      href={publication.downloadUrl}
                      download
                      className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      {t('publications.pdf')}
                    </a>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-6 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-12 border border-slate-700/50">
            <h2 className="text-4xl font-bold mb-6 text-white">{t('publications.newsletter.title')}</h2>
            <p className="text-xl mb-8 text-slate-300">
              {t('publications.newsletter.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('publications.newsletter.placeholder')}
                className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                {t('publications.newsletter.subscribe')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Publications;
