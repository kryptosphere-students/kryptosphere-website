
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
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Notre Équipe
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les passionnés qui font vivre Kryptosphere au quotidien. 
            Une équipe diverse et motivée, unie par la vision d'un avenir blockchain.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 font-semibold text-center mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm text-center leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Rejoignez notre équipe</h2>
            <p className="text-lg mb-6 opacity-90">
              Vous êtes passionné par la blockchain et souhaitez contribuer à notre mission ? 
              Rejoignez-nous et participez à la révolution technologique !
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
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
