
import React from 'react';
import { Users, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const StatsSection = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Users,
      value: '800+',
      label: t('stats.students')
    },
    {
      icon: GraduationCap,
      value: '22+',
      label: t('stats.universities')
    },
    {
      icon: Calendar,
      value: '50+',
      label: t('stats.events')
    },
    {
      icon: MapPin,
      value: '3',
      label: t('stats.branches')
    }
  ];

  return (
    <section className="py-24 relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-900 pointer-events-none"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          {t('stats.title')}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 text-center hover:border-blue-500/50 transition-colors group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900/30 rounded-full mb-6 group-hover:bg-blue-900/50 transition-colors">
                <stat.icon className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
