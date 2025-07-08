import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  type NavItem = {
    name: string;
    path?: string;
    subItems?: { name: string; path: string }[];
  };

  const navItems: NavItem[] = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.board'), path: '/bureau' },
    { name: t('nav.association'), path: '/association' },
    { name: t('nav.branches'), path: '/antennes' },
    { name: t('nav.events'), path: '/events' },
    // {
    //   name: t('nav.events'),
    //   subItems: [
    //     { name: t('events.upcoming'), path: '/events' },
    //     { name: 'KryptoTour', path: '/events/krypto-tour' }
    //   ]
    // },
    { name: t('nav.publications'), path: '/publications' },
    { name: t('nav.donate'), path: '/donation' }
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
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/80080952-5c68-413c-a232-0e890c049b09.webp" 
              alt="Kryptosphere" 
              loading="lazy"
              className="h-8 w-auto"
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.subItems ? (
                <div key={item.name} className="relative group flex items-center">
                  <span
                    className="flex items-center text-slate-300 hover:text-white transition-colors duration-200 font-medium relative group cursor-default select-none"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors duration-200" />
                  </span>
                  <div className="absolute left-0 top-full w-48 bg-slate-900 border border-slate-700 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50 flex flex-col py-2"
                    onMouseEnter={e => e.currentTarget.classList.add('opacity-100','pointer-events-auto')}
                    onMouseLeave={e => e.currentTarget.classList.remove('opacity-100','pointer-events-auto')}
                  >
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block px-5 py-2 text-slate-300 hover:text-blue-400 hover:bg-slate-800 rounded-lg transition-colors duration-200 whitespace-nowrap"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-slate-300 hover:text-white transition-colors duration-200 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            ))}
            <Link
              to="/krypto-tour"
              className="ml-2 px-3 py-1.5 rounded-full font-bold text-sm bg-gradient-to-r from-red-500 via-red-600 to-yellow-400 text-white shadow-2xl transition-transform duration-200 border-2 border-transparent hover:scale-105 hover:brightness-125 hover:ring-4 hover:ring-red-300/60"
            >
              KRYPTO-TOUR
            </Link>
            
            {/* Language Switcher */}
            {/* <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-200 font-medium bg-slate-800/50 px-3 py-1 rounded-full"
            >
              <Globe size={16} />
              {language.toUpperCase()}
            </button> */}
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
              <React.Fragment key={item.name || item.path}>
                {!item.subItems ? (
                  <Link
                    to={item.path}
                    className="block py-3 text-slate-300 hover:text-white transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <span className="block py-3 text-slate-300 font-medium cursor-default select-none">{item.name}</span>
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block pl-8 py-2 text-slate-400 hover:text-white transition-colors duration-200 font-medium text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </>
                )}
              </React.Fragment>
            ))}
            <Link
              to="/krypto-tour"
              className="block mt-2 mb-4 px-3 py-1.5 rounded-full font-bold text-sm bg-gradient-to-r from-red-500 via-red-600 to-yellow-400 text-white shadow-2xl text-center border-2 border-transparent transition-transform duration-200 hover:scale-105 hover:brightness-125 hover:ring-4 hover:ring-red-300/60"
              onClick={() => setIsOpen(false)}
            >
              KRYPTO-TOUR
            </Link>
            {/* <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 py-3 text-slate-300 hover:text-white transition-colors duration-200 font-medium"
            >
              <Globe size={16} />
              {language === 'fr' ? 'English' : 'Français'}
            </button> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
