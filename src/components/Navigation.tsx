
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', path: '/', nameEn: 'Home' },
    { name: 'Bureau', path: '/team', nameEn: 'Team' },
    { name: 'Association', path: '/association', nameEn: 'Association' },
    { name: 'Antennes', path: '/antennes', nameEn: 'Branches' },
    { name: 'Krypto-Tour', path: '/krypto-tour', nameEn: 'Krypto-Tour' },
    { name: 'Événements', path: '/events', nameEn: 'Events' }
  ];

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-slate-800/80 backdrop-blur-lg rounded-2xl px-8 py-4 shadow-lg border border-slate-700/50">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Kryptosphere
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 ml-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-slate-300 hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-700 transition-colors text-slate-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-slate-800/95 backdrop-blur-lg rounded-2xl shadow-lg border border-slate-700/50 p-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block py-3 text-slate-300 hover:text-blue-400 transition-colors duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
