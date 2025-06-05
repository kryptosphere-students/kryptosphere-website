
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Calendar } from 'lucide-react';

const Bureau = () => {
  const [selectedYear, setSelectedYear] = useState('2025');

  const bureauData = {
    '2025': [
      {
        name: "Prénom Nom",
        role: "Président",
        description: "Étudiant en informatique passionné par les technologies blockchain et l'innovation.",
        image: "/placeholder.svg",
        school: "École d'ingénieurs"
      },
      {
        name: "Prénom Nom",
        role: "Vice-Président",
        description: "Expert en cryptomonnaies et développement de smart contracts.",
        image: "/placeholder.svg",
        school: "École de commerce"
      },
      {
        name: "Prénom Nom",
        role: "Trésorier",
        description: "Spécialiste en finance décentralisée (DeFi) et gestion de projets.",
        image: "/placeholder.svg",
        school: "Université"
      },
      {
        name: "Prénom Nom",
        role: "Secrétaire",
        description: "Responsable communication et organisation d'événements.",
        image: "/placeholder.svg",
        school: "École d'informatique"
      },
      {
        name: "Prénom Nom",
        role: "Responsable Technique",
        description: "Développeur blockchain et architecte de solutions décentralisées.",
        image: "/placeholder.svg",
        school: "École d'ingénieurs"
      },
      {
        name: "Prénom Nom",
        role: "Responsable Partenariats",
        description: "Expert en relations entreprises et développement de partenariats.",
        image: "/placeholder.svg",
        school: "École de commerce"
      }
    ],
    '2024': [
      {
        name: "Ancien Président",
        role: "Président",
        description: "Ancien président qui a mené l'association vers de nouveaux horizons.",
        image: "/placeholder.svg",
        school: "École d'ingénieurs"
      }
    ],
    '2023': [
      {
        name: "Ancien Président 2023",
        role: "Président",
        description: "Leadership exceptionnel durant l'année 2023.",
        image: "/placeholder.svg",
        school: "Université"
      }
    ]
  };

  const years = ['2025', '2024', '2023'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-900/50 backdrop-blur-lg border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm mb-8">
            <Users className="w-4 h-4" />
            L'équipe qui fait vivre Kryptosphere
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Notre Bureau
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez les passionnés qui font vivre Kryptosphere au quotidien. 
            Une équipe diverse et motivée, unie par la vision d'un avenir blockchain.
          </p>
        </div>
      </section>

      {/* Year Selector */}
      <section className="pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-12">
            <Calendar className="w-5 h-5 text-blue-400" />
            <span className="text-slate-300 mr-4">Année :</span>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bureauData[selectedYear]?.map((member, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden">
                <div className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 overflow-hidden flex items-center justify-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
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
