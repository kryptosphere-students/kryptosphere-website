
import React from 'react';
import { Users, Lightbulb, Network, Trophy } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Workshops et formations sur les dernières technologies blockchain"
    },
    {
      icon: Network,
      title: "Réseau",
      description: "Connexions avec l'écosystème blockchain professionnel"
    },
    {
      icon: Users,
      title: "Communauté",
      description: "Une communauté active de passionnés et d'experts"
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Projets étudiants et participation à des hackathons"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-8 text-slate-900 leading-tight">
              Qui sommes-nous ?
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
              Kryptosphere est l'association étudiante de référence dans l'exploration des technologies blockchain. 
              Nous créons un pont entre l'innovation technologique et la communauté étudiante.
            </p>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Notre mission : démocratiser l'accès à la connaissance blockchain, organiser des événements 
              enrichissants et construire un réseau solide de futurs experts.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <feature.icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-3xl font-bold mb-6">Notre Mission</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-slate-200">Former la prochaine génération d'experts blockchain</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-slate-200">Créer des connexions entre étudiants et professionnels</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-slate-200">Promouvoir l'innovation et l'entrepreneuriat</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-slate-200">Contribuer au développement de l'écosystème blockchain</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
