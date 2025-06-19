
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Award, Target } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Prénom Nom",
      role: "Président",
      description: "Étudiant en informatique passionné par les technologies blockchain et l'innovation.",
      image: "/placeholder.svg"
    },
    {
      name: "Prénom Nom",
      role: "Vice-Président",
      description: "Expert en cryptomonnaies et développement de smart contracts.",
      image: "/placeholder.svg"
    },
    {
      name: "Prénom Nom",
      role: "Trésorier",
      description: "Spécialiste en finance décentralisée (DeFi) et gestion de projets.",
      image: "/placeholder.svg"
    },
    {
      name: "Prénom Nom",
      role: "Secrétaire",
      description: "Responsable communication et organisation d'événements.",
      image: "/placeholder.svg"
    },
    {
      name: "Prénom Nom",
      role: "Responsable Technique",
      description: "Développeur blockchain et architecte de solutions décentralisées.",
      image: "/placeholder.svg"
    },
    {
      name: "Prénom Nom",
      role: "Responsable Partenariats",
      description: "Expert en relations entreprises et développement de partenariats.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-900/50 backdrop-blur-lg border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm mb-8">
            <Users className="w-4 h-4" />
            L'équipe qui fait vivre KRYPTOSPHERE®
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Notre Bureau
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez les passionnés qui font vivre KRYPTOSPHERE® au quotidien. 
            Une équipe diversifiée et motivée, unie par la vision d'un avenir technologique et financier compris de tous.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
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
                  <p className="text-blue-400 font-semibold mb-4 text-sm uppercase tracking-wide">{member.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 px-6 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-12 border border-slate-700/50">
            <div className="inline-flex items-center gap-2 bg-purple-900/50 backdrop-blur-lg border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm mb-8">
              <Award className="w-4 h-4" />
              Rejoignez l'aventure
            </div>
            
            <h2 className="text-4xl font-bold mb-6 text-white">Rejoignez notre équipe</h2>
            <p className="text-xl mb-8 text-slate-300">
              Vous êtes passionné par une nouvelle technologie et souhaitez contribuer à notre mission ? 
              Rejoignez-nous et participez à la révolution du numérique !
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
              Postuler maintenant
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
