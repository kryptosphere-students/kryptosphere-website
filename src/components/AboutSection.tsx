
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Qui sommes-nous ?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Kryptosphere est une association étudiante pionnière dans l'exploration des technologies blockchain. 
              Fondée par des passionnés, nous créons un pont entre l'innovation technologique et la communauté étudiante.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Notre mission est de démocratiser l'accès à la connaissance blockchain, d'organiser des événements 
              enrichissants et de construire un réseau solide de futurs experts en cryptomonnaies et technologies décentralisées.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-800 mb-2">Formation</h3>
                <p className="text-sm text-blue-700">Workshops, conférences et formations pratiques</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-purple-800 mb-2">Réseau</h3>
                <p className="text-sm text-purple-700">Connexions avec professionnels et experts</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-2">Innovation</h3>
                <p className="text-sm text-green-700">Projets étudiants et hackathons blockchain</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="font-semibold text-orange-800 mb-2">Communauté</h3>
                <p className="text-sm text-orange-700">Événements sociaux et networking</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Nos Valeurs</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Innovation et curiosité technologique</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Partage de connaissances inclusif</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Collaboration et esprit d'équipe</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Excellence et professionnalisme</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Impact positif sur l'écosystème</span>
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
