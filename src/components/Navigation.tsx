
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', path: '/', nameEn: 'Home' },
    { name: 'Bureau / Team', path: '/team', nameEn: 'Team' },
    { name: 'Association', path: '/association', nameEn: 'Association' },
    { name: 'Antennes', path: '/antennes', nameEn: 'Branches' },
    { name: 'Krypto-Tour Lyon', path: '/krypto-tour', nameEn: 'Krypto-Tour Lyon' },
    { name: 'Événements', path: '/events', nameEn: 'Events' }
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-white/20">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Kryptosphere
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 ml-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block py-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
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
