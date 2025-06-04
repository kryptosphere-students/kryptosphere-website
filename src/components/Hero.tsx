
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Kryptosphere
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
          Blockchain Club
        </p>
        
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          L'association étudiante dédiée à l'exploration et à l'innovation dans l'univers blockchain. 
          Rejoignez notre communauté passionnée pour découvrir les technologies de demain.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
            Rejoindre l'association
          </button>
          <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
            Découvrir nos événements
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
            <div className="text-gray-600">Membres</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Événements</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600">Antennes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
            <div className="text-gray-600">Ans d'existence</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
