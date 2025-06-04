
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Kryptosphere
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-md">
              L'association étudiante de référence dans l'univers blockchain. 
              Rejoignez-nous pour explorer les technologies de demain.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors duration-200 group"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-slate-700 hover:bg-slate-600 p-3 rounded-lg transition-colors duration-200 group"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-slate-700 hover:bg-slate-600 p-3 rounded-lg transition-colors duration-200 group"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg text-white">Navigation</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/" className="hover:text-blue-400 transition-colors duration-200">Accueil</Link></li>
              <li><Link to="/team" className="hover:text-blue-400 transition-colors duration-200">Bureau</Link></li>
              <li><Link to="/association" className="hover:text-blue-400 transition-colors duration-200">Association</Link></li>
              <li><Link to="/antennes" className="hover:text-blue-400 transition-colors duration-200">Antennes</Link></li>
              <li><Link to="/events" className="hover:text-blue-400 transition-colors duration-200">Événements</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg text-white">Contact</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>contact@kryptosphere.org</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Lyon, France</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+33 (0)X XX XX XX XX</span>
              </li>
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
