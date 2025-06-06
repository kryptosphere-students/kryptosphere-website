
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
    'hero.title': 'La plus grande association',
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
    'board.title': 'Notre Bureau',
    'board.subtitle': 'Découvrez les passionnés qui font vivre Kryptosphere au quotidien. Une équipe diverse et motivée, unie par la vision d\'un avenir blockchain.',
    'board.teamTag': 'L\'équipe qui fait vivre Kryptosphere',
    'board.year': 'Année :',
    
    'association.title': 'L\'Association',
    'association.subtitle': 'Depuis 2017, Kryptosphere s\'impose comme la référence européenne dans l\'écosystème blockchain étudiant. Découvrez notre histoire, nos valeurs et notre vision pour l\'avenir.',
    'association.historyTag': 'Notre histoire et notre mission',
    'association.mission': 'Notre Mission',
    'association.missionText': 'Démocratiser l\'accès aux technologies blockchain et former la prochaine génération d\'innovateurs.',
    'association.values': 'Nos Valeurs',
    'association.valuesText': 'Innovation, partage de connaissances, collaboration et excellence académique au service de la communauté.',
    'association.vision': 'Notre Vision',
    'association.visionText': 'Être le pont entre l\'innovation blockchain et l\'enseignement supérieur en Europe.',
    'association.journey': 'Notre Parcours',
    
    'branches.title': 'Nos Antennes',
    'branches.subtitle': 'Découvrez nos antennes à travers l\'Europe et rejoignez la communauté Kryptosphere la plus proche de vous.',
    'branches.discover': 'Découvrir l\'antenne',
    'branches.localOffice': 'Bureau local',
    'branches.presenceTag': 'Notre présence en Europe',

    'events.title': 'Événements',
    'events.subtitle': 'Rejoignez nos événements exclusifs et plongez dans l\'univers blockchain. Workshops, conférences et networking avec les leaders de l\'écosystème crypto.',
    'events.agendaTag': 'Agenda des événements',
    'events.lumaButton': 'Voir tous nos événements sur Lu.ma',
    'events.upcoming': 'Événements à venir',
    'events.past': 'Événements passés',
    
    'publications.page.title': 'Publications',
    'publications.page.subtitle': 'Découvrez nos analyses, guides et rapports sur l\'écosystème blockchain. Des ressources créées par et pour la communauté étudiante.',
    'publications.resourcesTag': 'Ressources et contenus éducatifs',
    'publications.all': 'Toutes',
    'publications.kryptopaper': 'KryptoPaper',
    'publications.guides': 'Guides',
    'publications.reports': 'Rapports',
    'publications.studies': 'Études',
    'publications.read': 'Lire',
    'publications.pdf': 'PDF',
    'publications.newsletter.title': 'Restez informé',
    'publications.newsletter.subtitle': 'Recevez nos dernières publications directement dans votre boîte mail.',
    'publications.newsletter.placeholder': 'Votre email',
    'publications.newsletter.subscribe': 'S\'abonner',
    
    'donation.title': 'Faire une donation',
    'donation.subtitle': 'Votre soutien nous aide à démocratiser l\'accès aux technologies blockchain et à former la prochaine génération d\'innovateurs européens.',
    'donation.supportTag': 'Soutenez notre mission',
    'donation.impact': 'Votre impact',
    'donation.training': 'Formation des étudiants',
    'donation.trainingDesc': 'Financement de workshops, hackathons et formations blockchain',
    'donation.development': 'Développement des antennes',
    'donation.developmentDesc': 'Expansion vers de nouveaux établissements et pays',
    'donation.events': 'Événements communautaires',
    'donation.eventsDesc': 'Organisation de conférences et meetups gratuits',
    'donation.choose': 'Choisissez votre don',
    'donation.amount': 'Montant du don',
    'donation.customAmount': 'Montant personnalisé',
    'donation.paymentMethod': 'Méthode de paiement',
    'donation.card': 'Carte bancaire',
    'donation.crypto': 'Cryptomonnaie',
    'donation.summary': 'Récapitulatif',
    'donation.amountLabel': 'Montant du don:',
    'donation.info': 'Votre don sera utilisé pour soutenir nos activités éducatives et le développement de notre communauté.',
    'donation.finalize': 'Finaliser la donation',
    'donation.security': 'Vos dons sont sécurisés et utilisés exclusivement pour les activités de l\'association.',
    'donation.transparency': 'Transparence financière',
    'donation.transparencyText': 'Nous publions régulièrement nos rapports financiers pour assurer une transparence totale sur l\'utilisation de vos dons.',
    'donation.reports': 'Consulter nos rapports',

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
    'footer.description': 'L\'association étudiante de référence dans l\'univers blockchain. Rejoignez-nous pour explorer les technologies de demain.',
    'footer.navigation': 'Navigation',
    'footer.copyright': '2024 Kryptosphere. Tous droits réservés.',

    // Contact
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.address': 'Adresse',

    // Timeline years
    'timeline.2017.title': 'Création de Kryptosphere',
    'timeline.2017.description': 'Fondation de l\'association par des étudiants passionnés de blockchain',
    'timeline.2017.achievements': ['Première antenne à Lyon', '10 membres fondateurs'],
    
    'timeline.2018.title': 'Expansion nationale',
    'timeline.2018.description': 'Ouverture des premières antennes en région parisienne',
    'timeline.2018.achievements': ['3 antennes actives', '50+ membres', 'Premier hackathon blockchain'],
    
    'timeline.2019.title': 'Reconnaissance académique',
    'timeline.2019.description': 'Partenariats avec les grandes écoles et universités',
    'timeline.2019.achievements': ['10 antennes', '200+ membres', 'Premier KryptoPaper'],
    
    'timeline.2020.title': 'Transformation digitale',
    'timeline.2020.description': 'Adaptation aux nouveaux modes de communication',
    'timeline.2020.achievements': ['Événements virtuels', '15 antennes', '400+ membres'],
    
    'timeline.2021.title': 'Expansion européenne',
    'timeline.2021.description': 'Ouverture des premières antennes en Europe',
    'timeline.2021.achievements': ['Londres', 'Bruxelles', '600+ membres'],
    
    'timeline.2022.title': 'Innovation pédagogique',
    'timeline.2022.description': 'Lancement de programmes de formation avancés',
    'timeline.2022.achievements': ['Programmes certifiants', '20+ antennes', '700+ membres'],
    
    'timeline.2023.title': 'Leadership européen',
    'timeline.2023.description': 'Reconnaissance comme référence européenne',
    'timeline.2023.achievements': ['800+ membres', '22+ établissements', '3 pays'],
    
    'timeline.2024.title': 'Consolidation',
    'timeline.2024.description': 'Renforcement des partenariats et de l\'écosystème',
    'timeline.2024.achievements': ['Nouveaux sponsors', 'Expansion continue'],
    
    'timeline.2025.title': 'Nouveaux horizons',
    'timeline.2025.description': 'Vision futuriste et technologies émergentes',
    'timeline.2025.achievements': ['Intelligence Artificielle', 'Web3', 'Métaverse'],

    // Publication items
    'publication.kryptopaper25.title': 'KryptoPaper Edition 25',
    'publication.kryptopaper25.date': 'JANVIER 2025',
    'publication.kryptopaper25.description': 'Analyse des tendances blockchain 2025 et perspectives d\'avenir',
    'publication.kryptopaper25.readTime': '15 min',

    'publication.defi.title': 'Guide DeFi pour débutants',
    'publication.defi.date': 'DÉCEMBRE 2024',
    'publication.defi.description': 'Introduction complète à la finance décentralisée',
    'publication.defi.readTime': '20 min',

    'publication.report2024.title': 'Rapport annuel 2024',
    'publication.report2024.date': 'DÉCEMBRE 2024',
    'publication.report2024.description': 'Bilan des activités et accomplissements de l\'année',
    'publication.report2024.readTime': '30 min',

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
    'board.title': 'Our Board',
    'board.subtitle': 'Discover the passionate people who bring Kryptosphere to life every day. A diverse and motivated team, united by the vision of a blockchain future.',
    'board.teamTag': 'The team that brings Kryptosphere to life',
    'board.year': 'Year:',
    
    'association.title': 'The Association',
    'association.subtitle': 'Since 2017, Kryptosphere has established itself as the European reference in the student blockchain ecosystem. Discover our history, our values and our vision for the future.',
    'association.historyTag': 'Our history and our mission',
    'association.mission': 'Our Mission',
    'association.missionText': 'Democratize access to blockchain technologies and train the next generation of innovators.',
    'association.values': 'Our Values',
    'association.valuesText': 'Innovation, knowledge sharing, collaboration and academic excellence in service of the community.',
    'association.vision': 'Our Vision',
    'association.visionText': 'To be the bridge between blockchain innovation and higher education in Europe.',
    'association.journey': 'Our Journey',
    
    'branches.title': 'Our Branches',
    'branches.subtitle': 'Discover our branches across Europe and join the Kryptosphere community closest to you.',
    'branches.discover': 'Discover the branch',
    'branches.localOffice': 'Local office',
    'branches.presenceTag': 'Our presence in Europe',

    'events.title': 'Events',
    'events.subtitle': 'Join our exclusive events and dive into the blockchain universe. Workshops, conferences and networking with crypto ecosystem leaders.',
    'events.agendaTag': 'Event agenda',
    'events.lumaButton': 'See all our events on Lu.ma',
    'events.upcoming': 'Upcoming events',
    'events.past': 'Past events',
    
    'publications.page.title': 'Publications',
    'publications.page.subtitle': 'Discover our analyses, guides and reports on the blockchain ecosystem. Resources created by and for the student community.',
    'publications.resourcesTag': 'Resources and educational content',
    'publications.all': 'All',
    'publications.kryptopaper': 'KryptoPaper',
    'publications.guides': 'Guides',
    'publications.reports': 'Reports',
    'publications.studies': 'Studies',
    'publications.read': 'Read',
    'publications.pdf': 'PDF',
    'publications.newsletter.title': 'Stay informed',
    'publications.newsletter.subtitle': 'Receive our latest publications directly in your mailbox.',
    'publications.newsletter.placeholder': 'Your email',
    'publications.newsletter.subscribe': 'Subscribe',
    
    'donation.title': 'Make a donation',
    'donation.subtitle': 'Your support helps us democratize access to blockchain technologies and train the next generation of European innovators.',
    'donation.supportTag': 'Support our mission',
    'donation.impact': 'Your impact',
    'donation.training': 'Student training',
    'donation.trainingDesc': 'Funding workshops, hackathons and blockchain training',
    'donation.development': 'Branch development',
    'donation.developmentDesc': 'Expansion to new institutions and countries',
    'donation.events': 'Community events',
    'donation.eventsDesc': 'Organization of free conferences and meetups',
    'donation.choose': 'Choose your donation',
    'donation.amount': 'Donation amount',
    'donation.customAmount': 'Custom amount',
    'donation.paymentMethod': 'Payment method',
    'donation.card': 'Credit card',
    'donation.crypto': 'Cryptocurrency',
    'donation.summary': 'Summary',
    'donation.amountLabel': 'Donation amount:',
    'donation.info': 'Your donation will be used to support our educational activities and community development.',
    'donation.finalize': 'Finalize donation',
    'donation.security': 'Your donations are secure and used exclusively for association activities.',
    'donation.transparency': 'Financial transparency',
    'donation.transparencyText': 'We regularly publish our financial reports to ensure complete transparency on the use of your donations.',
    'donation.reports': 'View our reports',

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
    'footer.description': 'The reference student association in the blockchain universe. Join us to explore the technologies of tomorrow.',
    'footer.navigation': 'Navigation',
    'footer.copyright': '2024 Kryptosphere. All rights reserved.',

    // Contact
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',

    // Timeline years
    'timeline.2017.title': 'Creation of Kryptosphere',
    'timeline.2017.description': 'Foundation of the association by blockchain passionate students',
    'timeline.2017.achievements': ['First branch in Lyon', '10 founding members'],
    
    'timeline.2018.title': 'National expansion',
    'timeline.2018.description': 'Opening of the first branches in the Paris region',
    'timeline.2018.achievements': ['3 active branches', '50+ members', 'First blockchain hackathon'],
    
    'timeline.2019.title': 'Academic recognition',
    'timeline.2019.description': 'Partnerships with leading schools and universities',
    'timeline.2019.achievements': ['10 branches', '200+ members', 'First KryptoPaper'],
    
    'timeline.2020.title': 'Digital transformation',
    'timeline.2020.description': 'Adaptation to new communication modes',
    'timeline.2020.achievements': ['Virtual events', '15 branches', '400+ members'],
    
    'timeline.2021.title': 'European expansion',
    'timeline.2021.description': 'Opening of the first branches in Europe',
    'timeline.2021.achievements': ['London', 'Brussels', '600+ members'],
    
    'timeline.2022.title': 'Educational innovation',
    'timeline.2022.description': 'Launch of advanced training programs',
    'timeline.2022.achievements': ['Certification programs', '20+ branches', '700+ members'],
    
    'timeline.2023.title': 'European leadership',
    'timeline.2023.description': 'Recognition as European reference',
    'timeline.2023.achievements': ['800+ members', '22+ institutions', '3 countries'],
    
    'timeline.2024.title': 'Consolidation',
    'timeline.2024.description': 'Strengthening partnerships and ecosystem',
    'timeline.2024.achievements': ['New sponsors', 'Continued expansion'],
    
    'timeline.2025.title': 'New horizons',
    'timeline.2025.description': 'Futuristic vision and emerging technologies',
    'timeline.2025.achievements': ['Artificial Intelligence', 'Web3', 'Metaverse'],

    // Publication items
    'publication.kryptopaper25.title': 'KryptoPaper Edition 25',
    'publication.kryptopaper25.date': 'JANUARY 2025',
    'publication.kryptopaper25.description': 'Analysis of blockchain trends 2025 and future perspectives',
    'publication.kryptopaper25.readTime': '15 min',

    'publication.defi.title': 'DeFi Guide for Beginners',
    'publication.defi.date': 'DECEMBER 2024',
    'publication.defi.description': 'Complete introduction to decentralized finance',
    'publication.defi.readTime': '20 min',

    'publication.report2024.title': 'Annual Report 2024',
    'publication.report2024.date': 'DECEMBER 2024',
    'publication.report2024.description': 'Summary of activities and achievements of the year',
    'publication.report2024.readTime': '30 min',

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
