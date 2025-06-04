
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <h3 className="text-3xl font-bold mb-6 text-white">
              Kryptosphere
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-md">
              L'association étudiante de référence dans l'univers blockchain. 
              Rejoignez-nous pour explorer les technologies de demain.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </button>
              <button className="bg-slate-700 hover:bg-slate-600 p-3 rounded-lg transition-colors duration-200">
                <span className="sr-only">Discord</span>
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </button>
              <button className="bg-slate-700 hover:bg-slate-600 p-3 rounded-lg transition-colors duration-200">
                <span className="sr-only">GitHub</span>
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">Navigation</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/" className="hover:text-white transition-colors duration-200">Accueil</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors duration-200">Bureau</Link></li>
              <li><Link to="/association" className="hover:text-white transition-colors duration-200">Association</Link></li>
              <li><Link to="/antennes" className="hover:text-white transition-colors duration-200">Antennes</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors duration-200">Événements</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">Contact</h4>
            <ul className="space-y-3 text-slate-400">
              <li>contact@kryptosphere.org</li>
              <li>Lyon, France</li>
              <li>+33 (0)X XX XX XX XX</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Kryptosphere. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
