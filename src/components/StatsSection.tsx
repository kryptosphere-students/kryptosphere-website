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
      value: '20+',
      label: t('stats.universities')
    },
    {
      icon: Calendar,
      value: '500+',
      label: t('stats.events')
    },
    {
      icon: MapPin,
      value: '7',
      label: t('stats.branches')
    }
  ];

  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            {t('stats.title')}
          </h2>
          <div className="flex items-center justify-center gap-2 text-xl text-slate-700">
            <span>{t('stats.subtitle')}</span>
            <div className="flex gap-1">
              <div className="w-6 h-4 bg-blue-600 rounded-sm"></div>
              <div className="w-6 h-4 bg-white border border-blue-600 rounded-sm"></div>
              <div className="w-6 h-4 bg-red-600 rounded-sm"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
