import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Linkedin, Twitter } from 'lucide-react';

const Bureau = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const { t, tRaw } = useLanguage();

  const bureauData = {
    '2025': [
      {
        name: t('board.member1.name'),
        role: t('board.member1.role'),
        description: t('board.member1.description'),
        image: "/bureau/rpautard.webp",
        school: t('board.member1.school'),
        linkedin: "https://fr.linkedin.com/in/rapha%C3%ABl-pautard-744013220", // ajout lien Linkedin
        twitter: "https://x.com/pautardr" // ajout lien X
      },
      {
        name: t('board.member2.name'),
        role: t('board.member2.role'),
        description: t('board.member2.description'),
        image: "/bureau/amanival.webp",
        school: t('board.member2.school'),
        linkedin: "https://fr.linkedin.com/in/antoinemanival", // ajout lien Linkedin
        twitter: "https://x.com/AntoineM_eth" // ajout lien X
      },
      {
        name: t('board.member3.name'),
        role: t('board.member3.role'),
        description: t('board.member3.description'),
        image: "/bureau/mlaruelle.webp",
        school: t('board.member3.school'),
        linkedin: "https://fr.linkedin.com/in/mathieu-laruelle", // ajout lien Linkedin
        twitter: "https://x.com/MathieuLRL" // ajout lien X
      },
      {
        name: t('board.member4.name'),
        role: t('board.member4.role'),
        description: t('board.member4.description'),
        image: "/bureau/lpiallat.webp",
        school: t('board.member4.school'),
        linkedin: "https://fr.linkedin.com/in/louispiallat/fr", // ajout lien Linkedin
      },
      {
        name: t('board.member27.name'),
        role: t('board.member27.role'),
        description: t('board.member27.description'),
        image: "/bureau/thibaultlanglois.webp",
        school: t('board.member27.school'),
        linkedin: "https://fr.linkedin.com/in/kryptosphere/en", // ajout lien Linkedin
        twitter: "https://twitter.com/docteurbtc" // ajout lien X
      },
    ],
    '2024': [
            {
        name: t('board.member24.name'),
        role: t('board.member24.role'),
        description: t('board.member24.description'),
        image: "/bureau/mathiasbouguon.webp",
        school: t('board.member24.school')
      },
                  {
        name: t('board.member25.name'),
        role: t('board.member25.role'),
        description: t('board.member25.description'),
        image: "/bureau/rayan.webp",
        school: t('board.member25.school')
      },
                        {
        name: t('board.member26.name'),
        role: t('board.member26.role'),
        description: t('board.member26.description'),
        image: "/bureau/gildas.webp",
        school: t('board.member26.school')
      },
                        {
        name: t('board.member30.name'),
        role: t('board.member30.role'),
        description: t('board.member30.description'),
        image: "/bureau/charles.webp",
        school: t('board.member30.school')
      },
      {
        name: t('board.member5.name'),
        role: t('board.member5.role'),
        description: t('board.member5.description'),
        image: "/bureau/thibaultlanglois.webp",
        school: t('board.member5.school')
      },
      {
        name: t('board.member32.name'),
        role: t('board.member32.role'),
        description: t('board.member32.description'),
        image: "/bureau/maksym.webp",
        school: t('board.member32.school')
      },
      {
        name: t('board.member38.name'),
        role: t('board.member38.role'),
        description: t('board.member38.description'),
        image: "/bureau/emile.webp",
        school: t('board.member38.school')
      },
            {
        name: t('board.member45.name'),
        role: t('board.member45.role'),
        description: t('board.member45.description'),
        image: "/bureau/nas.webp",
        school: t('board.member45.school')
      },
                  {
        name: t('board.member62.name'),
        role: t('board.member62.role'),
        description: t('board.member62.description'),
        image: "/bureau/mark.webp",
        school: t('board.member62.school')
      }
    ],
    '2023': [

            {
        name: t('board.member21.name'),
        role: t('board.member21.role'),
        description: t('board.member21.description'),
        image: "/bureau/maxime.webp",
        school: t('board.member21.school')
      },
            {
        name: t('board.member22.name'),
        role: t('board.member22.role'),
        description: t('board.member22.description'),
        image: "/bureau/leo.webp",
        school: t('board.member22.school')
      },
                  {
        name: t('board.member23.name'),
        role: t('board.member23.role'),
        description: t('board.member23.description'),
        image: "/bureau/louis.webp",
        school: t('board.member23.school')
      },
      {
        name: t('board.member5.name'),
        role: t('board.member5.role'),
        description: t('board.member5.description'),
        image: "/bureau/thibaultlanglois.webp",
        school: t('board.member5.school')
      },
      {
        name: t('board.member33.name'),
        role: t('board.member33.role'),
        description: t('board.member33.description'),
        image: "/bureau/maxence.webp",
        school: t('board.member33.school')
      },
       {
        name: t('board.member37.name'),
        role: t('board.member37.role'),
        description: t('board.member37.description'),
        image: "/bureau/preau.webp",
        school: t('board.member37.school')
      },
      {
        name: t('board.member46.name'),
        role: t('board.member46.role'),
        description: t('board.member46.description'),
        image: "/bureau/manonc.webp",
        school: t('board.member46.school')
      },
            {
        name: t('board.member47.name'),
        role: t('board.member47.role'),
        description: t('board.member47.description'),
        image: "/bureau/quentin.webp",
        school: t('board.member47.school')
      },
      {
        name: t('board.member51.name'),
        role: t('board.member51.role'),
        description: t('board.member51.description'),
        image: "/bureau/sara.webp",
        school: t('board.member51.school')
      },
      {
        name: t('board.member59.name'),
        role: t('board.member59.role'),
        description: t('board.member59.description'),
        image: "/bureau/lery.webp",
        school: t('board.member59.school')
      },
      {
        name: t('board.member60.name'),
        role: t('board.member60.role'),
        description: t('board.member60.description'),
        image: "/bureau/thib.webp",
        school: t('board.member60.school')
      },
                {
        name: t('board.member63.name'),
        role: t('board.member63.role'),
        description: t('board.member63.description'),
        image: "/bureau/salim.webp",
        school: t('board.member63.school')
      },
    ],
    '2022': [
      {
        name: t('board.member19.name'),
        role: t('board.member19.role'),
        description: t('board.member19.description'),
        image: "/bureau/mathias.webp",
        school: t('board.member19.school')
      },
            {
        name: t('board.member20.name'),
        role: t('board.member20.role'),
        description: t('board.member20.description'),
        image: "/bureau/gabriel.webp",
        school: t('board.member20.school')
      },
      {
        name: t('board.member5.name'),
        role: t('board.member5.role'),
        description: t('board.member5.description'),
        image: "/bureau/thibaultlanglois.webp",
        school: t('board.member5.school')
      },
      {
        name: t('board.member41.name'),
        role: t('board.member41.role'),
        description: t('board.member41.description'),
        image: "/bureau/louisd.webp",
        school: t('board.member41.school')
      },
      {
        name: t('board.member42.name'),
        role: t('board.member42.role'),
        description: t('board.member42.description'),
        image: "/bureau/nandy.webp",
        school: t('board.member42.school')
      },
       {
        name: t('board.member43.name'),
        role: t('board.member43.role'),
        description: t('board.member43.description'),
        image: "/bureau/nour.webp",
        school: t('board.member43.school')
      },
                 {
        name: t('board.member48.name'),
        role: t('board.member48.role'),
        description: t('board.member48.description'),
        image: "/bureau/pierrelouis.webp",
        school: t('board.member48.school')
      },
                 {
        name: t('board.member49.name'),
        role: t('board.member49.role'),
        description: t('board.member49.description'),
        image: "/bureau/lilyan.webp",
        school: t('board.member49.school')
      },
                       {
        name: t('board.member50.name'),
        role: t('board.member50.role'),
        description: t('board.member50.description'),
        image: "/bureau/pierref.webp",
        school: t('board.member50.school')
      }
    ],
    '2021': [
                               {
        name: t('board.member17.name'),
        role: t('board.member17.role'),
        description: t('board.member17.description'),
        image: "/bureau/karolina.webp",
        school: t('board.member17.school')
      },
      {
        name: t('board.member18.name'),
        role: t('board.member18.role'),
        description: t('board.member18.description'),
        image: "/bureau/pierrel.webp",
        school: t('board.member18.school')
      },
            {
        name: t('board.member5.name'),
        role: t('board.member5.role'),
        description: t('board.member5.description'),
        image: "/bureau/thibaultlanglois.webp",
        school: t('board.member5.school')
      }
      ,
            {
        name: t('board.member28.name'),
        role: t('board.member28.role'),
        description: t('board.member28.description'),
        image: "/bureau/choy.webp",
        school: t('board.member28.school')
      },
            {
        name: t('board.member34.name'),
        role: t('board.member34.role'),
        description: t('board.member34.description'),
        image: "/bureau/aymeric.webp",
        school: t('board.member34.school')
      },
            {
        name: t('board.member35.name'),
        role: t('board.member35.role'),
        description: t('board.member35.description'),
        image: "/bureau/Morgan.webp",
        school: t('board.member35.school')
      },
            {
        name: t('board.member39.name'),
        role: t('board.member39.role'),
        description: t('board.member39.description'),
        image: "/bureau/mathis.webp",
        school: t('board.member39.school')
      },
            {
        name: t('board.member40.name'),
        role: t('board.member40.role'),
        description: t('board.member40.description'),
        image: "/bureau/paul.webp",
        school: t('board.member40.school')
      },
            {
        name: t('board.member44.name'),
        role: t('board.member44.role'),
        description: t('board.member44.description'),
        image: "/bureau/andy.webp",
        school: t('board.member44.school')
      },
            {
        name: t('board.member52.name'),
        role: t('board.member52.role'),
        description: t('board.member52.description'),
        image: "/bureau/paulw.webp",
        school: t('board.member52.school')
      },
            {
        name: t('board.member53.name'),
        role: t('board.member53.role'),
        description: t('board.member53.description'),
        image: "/bureau/pierreantoine.webp",
        school: t('board.member53.school')
      },
      {
        name: t('board.member54.name'),
        role: t('board.member54.role'),
        description: t('board.member54.description'),
        image: "/bureau/imen.webp",
        school: t('board.member54.school')
      }
    ],
    '2020 - 2017': [
      
      {
        name: t('board.member5.name'),
        role: t('board.member5.role'),
        description: t('board.member5.description'),
        image: "/bureau/thibaultlanglois.webp",
        school: t('board.member5.school')
      },
                  {
        name: t('board.member8.name'),
        role: t('board.member8.role'),
        description: t('board.member8.description'),
        image: "/bureau/Guillaume.webp",
        school: t('board.member8.school')
      },
                        {
        name: t('board.member9.name'),
        role: t('board.member9.role'),
        description: t('board.member9.description'),
        image: "/bureau/othmane.webp",
        school: t('board.member9.school')
      },
                        {
        name: t('board.member10.name'),
        role: t('board.member10.role'),
        description: t('board.member10.description'),
        image: "/bureau/fanis.webp",
        school: t('board.member10.school')
      },
                              {
        name: t('board.member11.name'),
        role: t('board.member11.role'),
        description: t('board.member11.description'),
        image: "/bureau/titouan.webp",
        school: t('board.member11.school'),
        linkedin: t('board.member11.linkedin')
      },
                                    {
        name: t('board.member12.name'),
        role: t('board.member12.role'),
        description: t('board.member12.description'),
        image: "/bureau/julie.webp",
        school: t('board.member12.school')
      },
                                          {
        name: t('board.member13.name'),
        role: t('board.member13.role'),
        description: t('board.member13.description'),
        image: "/bureau/manon.webp",
        school: t('board.member13.school')
      },
                                                {
        name: t('board.member14.name'),
        role: t('board.member14.role'),
        description: t('board.member14.description'),
        image: "/bureau/harmonie.webp",
        school: t('board.member14.school')
      },
                                                      {
        name: t('board.member15.name'),
        role: t('board.member15.role'),
        description: t('board.member15.description'),
        image: "/bureau/marie.webp",
        school: t('board.member15.school')
      },
                                                            {
        name: t('board.member16.name'),
        role: t('board.member16.role'),
        description: t('board.member16.description'),
        image: "/bureau/aymane.webp",
        school: t('board.member16.school')
      },
                        {
        name: t('board.member6.name'),
        role: t('board.member6.role'),
        description: t('board.member6.description'),
        image: "/bureau/william.webp",
        school: t('board.member6.school')
      },
                        {
        name: t('board.member7.name'),
        role: t('board.member7.role'),
        description: t('board.member7.description'),
        image: "/bureau/serge.webp",
        school: t('board.member7.school')
      },
                        {
        name: t('board.member29.name'),
        role: t('board.member29.role'),
        description: t('board.member29.description'),
        image: "/bureau/brice.webp",
        school: t('board.member29.school')
      },
                        {
        name: t('board.member31.name'),
        role: t('board.member31.role'),
        description: t('board.member31.description'),
        image: "/bureau/jules.webp",
        school: t('board.member31.school')
      },
      {
        name: t('board.member36.name'),
        role: t('board.member36.role'),
        description: t('board.member36.description'),
        image: "/bureau/hadrien.webp",
        school: t('board.member36.school')
      },
      {
        name: t('board.member55.name'),
        role: t('board.member55.role'),
        description: t('board.member55.description'),
        image: "/bureau/thomas.webp",
        school: t('board.member55.school')
      },
      {
        name: t('board.member56.name'),
        role: t('board.member56.role'),
        description: t('board.member56.description'),
        image: "/bureau/clementb.webp",
        school: t('board.member56.school')
      },
      {
        name: t('board.member57.name'),
        role: t('board.member57.role'),
        description: t('board.member57.description'),
        image: "/bureau/jeremie.webp",
        school: t('board.member57.school')
      },
      {
        name: t('board.member61.name'),
        role: t('board.member61.role'),
        description: t('board.member61.description'),
        image: "/bureau/jb.webp",
        school: t('board.member61.school')
      },
      {
        name: t('board.member64.name'),
        role: t('board.member64.role'),
        description: t('board.member64.description'),
        image: "/bureau/maxl.webp",
        school: t('board.member64.school')
      },
      {
        name: t('board.member65.name'),
        role: t('board.member65.role'),
        description: t('board.member65.description'),
        image: "/bureau/manu.webp",
        school: t('board.member65.school')
      }
    ]

  };

  const polesData = {
    '2025': [
      {
        title: t('board.poles.partnership.title'),
        description: t('board.poles.partnership.description'),
        team: [
          {
            name: t('board.poles.partnership.team.member1.name'),
            role: t('board.poles.partnership.team.member1.role'),
            description: t('board.poles.partnership.team.member1.description'),
            image: '/bureau/jg.webp',
          },
          {
            name: t('board.poles.partnership.team.member2.name'),
            role: t('board.poles.partnership.team.member2.role'),
            description: t('board.poles.partnership.team.member2.description'),
            image: '/bureau/tevfik.webp',
          },
          {
            name: t('board.poles.partnership.team.member3.name'),
            role: t('board.poles.partnership.team.member3.role'),
            description: t('board.poles.partnership.team.member3.description'),
            image: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.webp',
          },
        ],
      },
      {
        title: t('board.poles.communication.title'),
        description: tRaw('board.poles.communication.description'),
        team: [
          {
            name: t('board.poles.communication.team.member1.name'),
            role: t('board.poles.communication.team.member1.role'),
            description: t('board.poles.communication.team.member1.description'),
            image: '/bureau/amangin.webp',
          },
          {
            name: t('board.poles.communication.team.member2.name'),
            role: t('board.poles.communication.team.member2.role'),
            description: t('board.poles.communication.team.member2.description'),
            image: '/bureau/alexandra.webp',
          },
        ],
      },
      {
        title: t('board.poles.aidefi.title'),
        description: t('board.poles.aidefi.description'),
        team: [
          {
            name: t('board.poles.aidefi.team.member1.name'),
            role: t('board.poles.aidefi.team.member1.role'),
            description: '',
            image: '/bureau/lpiallat.webp',
          },
          {
            name: t('board.poles.aidefi.team.member2.name'),
            role: t('board.poles.aidefi.team.member2.role'),
            description: '',
            image: '/bureau/mk.webp',
          },
        ],
      },
    ],
  };

  const years = ['2025', '2024', '2023', '2022', '2021', '2020 - 2017'];

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
          <div className="flex justify-center items-center mb-12 w-full">
            {/* Label + Buttons in a single flex row, stacked on mobile */}
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">{t('board.year')}</span>
              </span>
              <div className="flex gap-2 overflow-x-auto flex-nowrap w-full md:w-auto justify-start md:justify-center pb-2 md:pb-0 px-2 md:px-0">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-3 md:px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
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
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bureauData[selectedYear]?.map((member, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden w-full">
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
                  <div className="flex justify-center gap-2 mt-4">
  {member.linkedin && (
    <a
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-blue-700/80 hover:bg-blue-700 text-white p-2 transition-colors"
      title="LinkedIn"
    >
      <Linkedin className="w-5 h-5" />
    </a>
  )}
  {member.twitter && (
    <a
      href={member.twitter}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-blue-400/80 hover:bg-blue-400 text-white p-2 transition-colors"
      title="Twitter"
    >
      <Twitter className="w-5 h-5" />
    </a>
  )}
</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedYear === '2025' && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {t('board.polesTitle')}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </div>

            {(polesData[selectedYear] || []).map((pole, poleIndex) => (
              <div key={poleIndex} className="mb-20">
                <h3 className="text-3xl font-bold text-center mb-4 text-slate-100">{pole.title}</h3>
                <div className="max-w-4xl mx-auto text-center text-slate-300 leading-relaxed mb-10 space-y-4">
                  {Array.isArray(pole.description) ? (
                    (pole.description as string[]).map((p, i) => <p key={i}>{p}</p>)
                  ) : (
                    <p>{pole.description as string}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pole.team.map((member, memberIndex) => (
                    <div key={memberIndex} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden w-full">
                      <div className="p-8 text-center">
                        <div className="w-32 h-32 rounded-xl overflow-hidden mx-auto mb-6 border-2 border-blue-500/30 group-hover:border-blue-400 transition-all duration-300">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">{member.name}</h3>
                        <p className="text-blue-400 font-semibold mb-4 text-sm uppercase tracking-wide">{member.role}</p>
                        <p className="text-slate-400 text-sm leading-relaxed">{member.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Bureau;
