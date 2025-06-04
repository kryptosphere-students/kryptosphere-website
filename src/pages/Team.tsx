
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-8 text-slate-900 leading-tight">
            Notre Bureau
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Découvrez les passionnés qui font vivre Kryptosphere au quotidien. 
            Une équipe diverse et motivée, unie par la vision d'un avenir blockchain.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 overflow-hidden group">
                <div className="p-8 text-center">
                  <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wide">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-slate-900 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Rejoignez notre équipe</h2>
            <p className="text-xl mb-8 text-slate-300 font-light">
              Vous êtes passionné par la blockchain et souhaitez contribuer à notre mission ? 
              Rejoignez-nous et participez à la révolution technologique !
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200">
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
