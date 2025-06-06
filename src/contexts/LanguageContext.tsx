
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.board': 'Bureau',
    'nav.association': 'Association',
    'nav.branches': 'Antennes',
    'nav.events': 'Événements',
    'nav.publications': 'Publications',
    'nav.donate': 'Faire une donation',

    // Hero
    'hero.title': 'Plus grande association',
    'hero.title2': 'étudiante',
    'hero.title3': 'blockchain',
    'hero.title4': "d'Europe",
    'hero.subtitle': 'Promouvoir les nouvelles technologies auprès des étudiants depuis 2017',
    'hero.join': "Rejoindre l'association",
    'hero.branches': 'Voir nos antennes',

    // Stats
    'stats.students': 'Étudiants',
    'stats.universities': 'Universités',
    'stats.events': 'Événements',
    'stats.branches': 'Antennes',

    // Sponsors
    'sponsors.title': 'Ils nous soutiennent',
    'sponsors.sponsors': 'Sponsors',
    'sponsors.partners': 'Partenaires',
    'sponsors.universities': 'Universités',
    'sponsors.media': 'Ils parlent de nous',

    // Publications
    'publications.title': 'Nos Publications',
    'publications.subtitle': 'Découvrez nos dernières analyses et recherches sur la blockchain',
    'publications.readMore': 'Lire la suite',

    // Pages
    'board.title': 'Bureau',
    'association.title': 'Association',
    'branches.title': 'Nos Antennes',
    'branches.subtitle': 'Découvrez nos antennes à travers l\'Europe et rejoignez la communauté Kryptosphere la plus proche de vous.',
    'branches.discover': 'Découvrir l\'antenne',
    'branches.localOffice': 'Bureau local',
    'publications.page.title': 'Publications',
    'donation.title': 'Faire une donation',

    // Antenne Details
    'antenne.team': 'Équipe',
    'antenne.president': 'Président',
    'antenne.vicePresident': 'Vice-Président',
    'antenne.secretary': 'Secrétaire',
    'antenne.treasurer': 'Trésorier',
    'antenne.contact': 'Contact',
    'antenne.gallery': 'Galerie',
    'antenne.location': 'Localisation',

    // Footer Legal
    'footer.legal.disclaimer': 'Avertissement',
    'footer.legal.privacy': 'Politique de confidentialité',
    'footer.legal.terms': 'Conditions générales d\'utilisation (CGU)',
    'footer.legal.cookies': 'Politique de cookies',
    'footer.legal.legal': 'Mentions légales',

    // Contact
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.address': 'Adresse',

    // General
    'language': 'fr'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.board': 'Board',
    'nav.association': 'Association',
    'nav.branches': 'Branches',
    'nav.events': 'Events',
    'nav.publications': 'Publications',
    'nav.donate': 'Donate',

    // Hero
    'hero.title': 'Largest student',
    'hero.title2': 'blockchain',
    'hero.title3': 'association',
    'hero.title4': 'in Europe',
    'hero.subtitle': 'Promoting new technologies among students since 2017',
    'hero.join': 'Join the association',
    'hero.branches': 'See our branches',

    // Stats
    'stats.students': 'Students',
    'stats.universities': 'Universities',
    'stats.events': 'Events',
    'stats.branches': 'Branches',

    // Sponsors
    'sponsors.title': 'They support us',
    'sponsors.sponsors': 'Sponsors',
    'sponsors.partners': 'Partners',
    'sponsors.universities': 'Universities',
    'sponsors.media': 'They talk about us',

    // Publications
    'publications.title': 'Our Publications',
    'publications.subtitle': 'Discover our latest blockchain analyses and research',
    'publications.readMore': 'Read more',

    // Pages
    'board.title': 'Board',
    'association.title': 'Association',
    'branches.title': 'Our Branches',
    'branches.subtitle': 'Discover our branches across Europe and join the Kryptosphere community closest to you.',
    'branches.discover': 'Discover the branch',
    'branches.localOffice': 'Local office',
    'publications.page.title': 'Publications',
    'donation.title': 'Make a donation',

    // Antenne Details
    'antenne.team': 'Team',
    'antenne.president': 'President',
    'antenne.vicePresident': 'Vice-President',
    'antenne.secretary': 'Secretary',
    'antenne.treasurer': 'Treasurer',
    'antenne.contact': 'Contact',
    'antenne.gallery': 'Gallery',
    'antenne.location': 'Location',

    // Footer Legal
    'footer.legal.disclaimer': 'Disclaimer',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.terms': 'Terms of Use',
    'footer.legal.cookies': 'Cookie Policy',
    'footer.legal.legal': 'Legal Notice',

    // Contact
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',

    // General
    'language': 'en'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
