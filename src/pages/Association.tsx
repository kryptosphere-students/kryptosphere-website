
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, Target, Users, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Association = () => {
  const { t } = useLanguage();

  const timeline = [
    {
      year: '2017',
      title: t('timeline.2017.title'),
      description: t('timeline.2017.description'),
      achievements: t('timeline.2017.achievements')
    },
    {
      year: '2018',
      title: t('timeline.2018.title'),
      description: t('timeline.2018.description'),
      achievements: t('timeline.2018.achievements')
    },
    {
      year: '2019',
      title: t('timeline.2019.title'),
      description: t('timeline.2019.description'),
      achievements: t('timeline.2019.achievements')
    },
    {
      year: '2020',
      title: t('timeline.2020.title'),
      description: t('timeline.2020.description'),
      achievements: t('timeline.2020.achievements')
    },
    {
      year: '2021',
      title: t('timeline.2021.title'),
      description: t('timeline.2021.description'),
      achievements: t('timeline.2021.achievements')
    },
    {
      year: '2022',
      title: t('timeline.2022.title'),
      description: t('timeline.2022.description'),
      achievements: t('timeline.2022.achievements')
    },
    {
      year: '2023',
      title: t('timeline.2023.title'),
      description: t('timeline.2023.description'),
      achievements: t('timeline.2023.achievements')
    },
    {
      year: '2024',
      title: t('timeline.2024.title'),
      description: t('timeline.2024.description'),
      achievements: t('timeline.2024.achievements')
    },
    {
      year: '2025',
      title: t('timeline.2025.title'),
      description: t('timeline.2025.description'),
      achievements: t('timeline.2025.achievements')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-900/50 backdrop-blur-lg border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm mb-8">
            <Target className="w-4 h-4" />
            {t('association.historyTag')}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {t('association.title')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {t('association.subtitle')}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50">
              <Target className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{t('association.mission')}</h3>
              <p className="text-slate-300 leading-relaxed">
                {t('association.missionText')}
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50">
              <Users className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{t('association.values')}</h3>
              <p className="text-slate-300 leading-relaxed">
                {t('association.valuesText')}
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50">
              <Award className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{t('association.vision')}</h3>
              <p className="text-slate-300 leading-relaxed">
                {t('association.visionText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            {t('association.journey')}
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline marker */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <Calendar className="w-5 h-5 text-blue-400" />
                        <span className="text-2xl font-bold text-blue-400">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-300 mb-4 leading-relaxed">{item.description}</p>
                      <div className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-sm text-slate-400">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Association;
