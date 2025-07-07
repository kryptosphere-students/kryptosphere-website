import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, MessageCircle, Mail, MapPin, Phone, Twitter, Youtube, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const legalLinks = [
    { key: 'footer.legal.disclaimer', href: '/documents/avertissement.pdf' },
    { key: 'footer.legal.privacy', href: '/documents/politique-confidentialite.pdf' },
    { key: 'footer.legal.terms', href: '/documents/cgu.pdf' },
    { key: 'footer.legal.cookies', href: '/documents/politique-cookies.pdf' },
    { key: 'footer.legal.legal', href: '/documents/mentions-legales.pdf' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/80080952-5c68-413c-a232-0e890c049b09.webp" 
                alt="Kryptosphere" 
                loading="lazy"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/kryptosphere/"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors duration-200 group"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://twitter.com/kryptosphere_?lang=en"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors duration-200 group"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
                            <a
                href="https://www.youtube.com/@kryptosphere"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors duration-200 group"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
              {/* <a
                href="https://www.instagram.com/explore/search/keyword/?q=%23kryptosphere"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors duration-200 group"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a> */}
              <a
                href="https://www.facebook.com/kryptosphereofficial"
                className="bg-slate-700 hover:bg-slate-600 p-3 rounded-lg transition-colors duration-200 group"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg text-white">{t('footer.navigation')}</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/" className="hover:text-blue-400 transition-colors duration-200">{t('nav.home')}</Link></li>
              <li><Link to="/bureau" className="hover:text-blue-400 transition-colors duration-200">{t('nav.board')}</Link></li>
              <li><Link to="/association" className="hover:text-blue-400 transition-colors duration-200">{t('nav.association')}</Link></li>
              <li><Link to="/antennes" className="hover:text-blue-400 transition-colors duration-200">{t('nav.branches')}</Link></li>
              <li><Link to="/events" className="hover:text-blue-400 transition-colors duration-200">{t('nav.events')}</Link></li>
              <li>
                <a href="/publications" className="hover:text-blue-400 transition-colors">
                  {t('nav.publications')}
                </a>
              </li>
              <li>
                <a href="/donation" className="hover:text-blue-400 transition-colors">
                  {t('nav.donate')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg text-white">{t('antenne.contact')}</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>contact@kryptosphere.org</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>France, UK & Belgium</span>
              </li>
              {/* <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+33 (0)X XX XX XX XX</span>
              </li> */}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            {legalLinks.map((link, index) => (
              <React.Fragment key={link.key}>
                <a 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {t(link.key)}
                </a>
                {index < legalLinks.length - 1 && (
                  <span className="text-slate-600">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        <div className="text-center text-slate-400">
          <p>&copy; {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
