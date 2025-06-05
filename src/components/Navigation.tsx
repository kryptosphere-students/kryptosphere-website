
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Antennes', path: '/antennes' },
    { name: 'Association', path: '/association' },
    { name: 'Faire une donation', path: '/donation' },
    { name: 'Publications', path: '/publications' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-lg border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-white">
            Kryptosphere
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
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
          <div className="md:hidden border-t border-slate-700/50 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-3 text-slate-300 hover:text-white transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
