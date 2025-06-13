
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const SponsorsSection = () => {
  const [activeCategory, setActiveCategory] = useState('sponsors');
  const { t } = useLanguage();

const sponsors = [
  {
    name: 'BPI France',
    logo: '/lovable-uploads/bpifrance.png'
  },
  {
    name: 'Ledger',
    logo: '/lovable-uploads/Ledger.svg'
  },
  {
    name: 'KPMG',
    logo: '/lovable-uploads/KPMG.png'
  },
  {
    name: 'DELUBAC',
    logo: '/lovable-uploads/delubac.png'
  },
  {
    name: 'XRP',
    logo: '/lovable-uploads/xrp.png'
  },
  {
    name: 'Forvis Mazars',
    logo: '/lovable-uploads/Forvis_Mazars.jpg'
  },
  {
    name: 'A COMPLETER',
    logo: '/lovable-uploads/logo-chainalysis.png'
  },
  {
    name: 'A COMPLETER',
    logo: '/lovable-uploads/logo-polygon.png'
  }
];


  const partners = Array(6).fill(null).map((_, index) => ({
    name: 'Kryptosphere',
    logo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png'
  }));

  const universities = Array(6).fill(null).map((_, index) => ({
    name: 'Kryptosphere',
    logo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png'
  }));

  const media = Array(10).fill(null).map((_, index) => ({
    name: 'Kryptosphere',
    logo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png'
  }));

  const categories = [
    { id: 'sponsors', name: t('sponsors.sponsors'), data: sponsors },
    { id: 'partners', name: t('sponsors.partners'), data: partners },
    { id: 'universities', name: t('sponsors.universities'), data: universities }
  ];

  return (
    <div className="bg-slate-900">
      {/* Sponsors Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-white text-3xl font-bold text-center mb-12">{t('sponsors.title')}</h3>
          
          {/* Category Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {categories.find(cat => cat.id === activeCategory)?.data.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-16 w-auto max-w-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-white text-3xl font-bold text-center mb-12">{t('sponsors.media')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {media.map((outlet, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
              >
                <img
                  src={outlet.logo}
                  alt={outlet.name}
                  className="h-12 w-auto max-w-full object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SponsorsSection;
