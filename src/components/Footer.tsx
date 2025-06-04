
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Kryptosphere
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              L'association étudiante de référence dans l'univers blockchain. 
              Rejoignez-nous pour explorer les technologies de demain.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 p-2 rounded-full transition-colors duration-200">
                <span className="sr-only">Discord</span>
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 p-2 rounded-full transition-colors duration-200">
                <span className="sr-only">GitHub</span>
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Accueil</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Bureau / Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Association</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Antennes</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Événements</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contact@kryptosphere.org</li>
              <li>Lyon, France</li>
              <li>+33 (0)X XX XX XX XX</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Kryptosphere. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
