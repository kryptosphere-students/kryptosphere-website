
import React from 'react';
import { Users, Lightbulb, Network, Trophy, Code, Rocket } from 'lucide-react';

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
    },
    {
      icon: Code,
      title: "Développement",
      description: "Formation pratique sur les smart contracts et DApps"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Incubation de projets blockchain étudiants"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Qui sommes-nous ?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            KRYPTOSPHERE est l'association étudiante de référence dans les nouvelles technologies, pionnière dans les crypto-actifs. 
            Nous formons un pont entre l'innovation technologique et la communauté étudiante.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-lg text-slate-300 mb-12 leading-relaxed">
              Notre mission : démocratiser l'accès à la connaissance blockchain, organiser des événements 
              enrichissants et construire un réseau solide de futurs experts.
            </p>
            
            {/* Mission points */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-slate-300">Former la prochaine génération d'experts blockchain</span>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-slate-300">Créer des connexions entre étudiants et professionnels</span>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-cyan-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-slate-300">Promouvoir l'innovation et l'entrepreneuriat</span>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-slate-300">Contribuer au développement de l'écosystème blockchain</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
              <h3 className="text-3xl font-bold mb-6 text-white">Notre Vision</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Devenir le hub européen de référence pour l'innovation blockchain étudiante, 
                en formant les leaders de demain et en accélérant l'adoption des technologies décentralisées.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Lancé en 2021</p>
                  <p className="text-slate-400 text-sm">3 ans d'innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-lg p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
