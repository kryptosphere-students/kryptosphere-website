
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Bureau = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const { t } = useLanguage();

  const bureauData = {
    '2025': [
      {
        name: t('board.member1.name'),
        role: t('board.member1.role'),
        description: t('board.member1.description'),
        image: "/bureau/rpautard.png",
        school: t('board.member1.school')
      },
      {
        name: t('board.member2.name'),
        role: t('board.member2.role'),
        description: t('board.member2.description'),
        image: "/bureau/amanival.png",
        school: t('board.member2.school')
      },
      {
        name: t('board.member3.name'),
        role: t('board.member3.role'),
        description: t('board.member3.description'),
        image: "/bureau/mlaruelle.png",
        school: t('board.member3.school')
      },
      {
        name: t('board.member4.name'),
        role: t('board.member4.role'),
        description: t('board.member4.description'),
        image: "/bureau/lpiallat.png",
        school: t('board.member4.school')
      },
      {
        name: t('board.member5.name'),
        role: t('board.member5.role'),
        description: t('board.member5.description'),
        image: "/bureau/thibault.jpg",
        school: t('board.member5.school')
      },
    ],
    '2024': [
      {
        name: t('board.former.president'),
        role: t('board.member1.role'),
        description: t('board.former.description'),
        image: "/placeholder.svg",
        school: t('board.member1.school')
      },
      {
        name: t('board.member5.name'),
        role: t('board.member5.role'),
        description: t('board.member5.description'),
        image: "/bureau/thibault.jpg",
        school: t('board.member5.school')
      },
    ],
    '2023': [
      {
        name: t('board.former.president') + " 2023",
        role: t('board.member1.role'),
        description: t('board.former.description2023'),
        image: "/placeholder.svg",
        school: t('board.member3.school')
      },
      {
        name: t('board.member5.name'),
        role: t('board.member5.role'),
        description: t('board.member5.description'),
        image: "/bureau/thibault.jpg",
        school: t('board.member5.school')
      },
    ],
    '2022': [
      {
        name: t('board.former.president') + " 2023",
        role: t('board.member1.role'),
        description: t('board.former.description2023'),
        image: "/placeholder.svg",
        school: t('board.member3.school')
      },
      {
        name: t('board.member5.name'),
        role: t('board.member5.role'),
        description: t('board.member5.description'),
        image: "/bureau/thibault.jpg",
        school: t('board.member5.school')
      },
    ],
    '2021': [
      {
        name: t('board.former.president') + " 2023",
        role: t('board.member1.role'),
        description: t('board.former.description2023'),
        image: "/placeholder.svg",
        school: t('board.member3.school')
      },
      {
        name: t('board.member5.name'),
        role: t('board.member5.role'),
        description: t('board.member5.description'),
        image: "/bureau/thibault.jpg",
        school: t('board.member5.school')
      },
    ],
    '2020': [
      {
        name: t('board.former.president') + " 2023",
        role: t('board.member1.role'),
        description: t('board.former.description2023'),
        image: "/placeholder.svg",
        school: t('board.member3.school')
      },
      {
        name: t('board.member5.name'),
        role: t('board.member5.role'),
        description: t('board.member5.description'),
        image: "/bureau/thibault.jpg",
        school: t('board.member5.school')
      },
    ],
    '2019 - 2017': [
      
      {
        name: t('board.member5.name'),
        role: t('board.member5.role'),
        description: t('board.member5.description'),
        image: "/bureau/thibault.jpg",
        school: t('board.member5.school')
      },
                  {
        name: t('board.member8.name'),
        role: t('board.member8.role'),
        description: t('board.member8.description'),
        image: "/bureau/Guillaume.jpeg",
        school: t('board.member8.school')
      },
                        {
        name: t('board.member9.name'),
        role: t('board.member9.role'),
        description: t('board.member9.description'),
        image: "/bureau/othmane.jpeg",
        school: t('board.member9.school')
      },
                  {
        name: t('board.member7.name'),
        role: t('board.member7.role'),
        description: t('board.member7.description'),
        image: "/bureau/serge.jpg",
        school: t('board.member7.school')
      },
                  {
        name: t('board.member6.name'),
        role: t('board.member6.role'),
        description: t('board.member6.description'),
        image: "/bureau/william.jpeg",
        school: t('board.member6.school')
      },
                        {
        name: t('board.member10.name'),
        role: t('board.member10.role'),
        description: t('board.member10.description'),
        image: "/bureau/fanis.jpeg",
        school: t('board.member10.school')
      },
                              {
        name: t('board.member11.name'),
        role: t('board.member11.role'),
        description: t('board.member11.description'),
        image: "/bureau/titouan.webp",
        school: t('board.member11.school')
      },
                                    {
        name: t('board.member12.name'),
        role: t('board.member12.role'),
        description: t('board.member12.description'),
        image: "/bureau/julie.jpeg",
        school: t('board.member12.school')
      },
                                          {
        name: t('board.member13.name'),
        role: t('board.member13.role'),
        description: t('board.member13.description'),
        image: "/bureau/manon.jpeg",
        school: t('board.member13.school')
      },
                                                {
        name: t('board.member14.name'),
        role: t('board.member14.role'),
        description: t('board.member14.description'),
        image: "/bureau/harmonie.jpeg",
        school: t('board.member14.school')
      },
                                                      {
        name: t('board.member15.name'),
        role: t('board.member15.role'),
        description: t('board.member15.description'),
        image: "/bureau/aymane.jpeg",
        school: t('board.member15.school')
      },
    ]

  };

  const years = ['2025', '2024', '2023', '2022', '2021', '2020', '2019 - 2017'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-900/50 backdrop-blur-lg border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm mb-8">
            <Users className="w-4 h-4" />
            {t('board.teamTag')}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {t('board.title')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t('board.subtitle')}
          </p>
        </div>
      </section>

      {/* Year Selector */}
      <section className="pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-12">
            <Calendar className="w-5 h-5 text-blue-400" />
            <span className="text-slate-300 mr-4">{t('board.year')}</span>
            <div className="flex gap-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedYear === year
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {bureauData[selectedYear]?.map((member, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden">
                <div className="p-8 text-center">
                  <div className="w-32 h-32 rounded-xl overflow-hidden mx-auto mb-6 border-2 border-blue-500/30 group-hover:border-blue-400 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">{member.name}</h3>
                  <p className="text-blue-400 font-semibold mb-2 text-sm uppercase tracking-wide">{member.role}</p>
                  <p className="text-purple-300 text-xs mb-4 opacity-75">{member.school}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bureau;
