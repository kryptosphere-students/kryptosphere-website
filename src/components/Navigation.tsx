
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
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-white/95 backdrop-blur-lg rounded-2xl px-8 py-4 shadow-lg border border-slate-200/50">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-slate-900">
          Kryptosphere
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 ml-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg border border-slate-200/50 p-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block py-3 text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium"
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
