
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('fr');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: language === 'fr' ? 'Accueil' : 'Home', path: '/' },
    { name: language === 'fr' ? 'Bureau' : 'Board', path: '/bureau' },
    { name: 'Association', path: '/association' },
    { name: language === 'fr' ? 'Antennes' : 'Branches', path: '/antennes' },
    { name: language === 'fr' ? 'Événements' : 'Events', path: '/events' },
    { name: 'Publications', path: '/publications' },
    { name: language === 'fr' ? 'Faire une donation' : 'Donate', path: '/donation' }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const navClasses = isHomePage 
    ? "fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm"
    : "fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50";

  return (
    <nav className={navClasses}>
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
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-200 font-medium bg-slate-800/50 px-3 py-1 rounded-full"
            >
              <Globe size={16} />
              {language.toUpperCase()}
            </button>
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
          <div className="md:hidden border-t border-slate-700/50 py-4 bg-slate-900/95 backdrop-blur-lg">
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
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 py-3 text-slate-300 hover:text-white transition-colors duration-200 font-medium"
            >
              <Globe size={16} />
              {language === 'fr' ? 'English' : 'Français'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
