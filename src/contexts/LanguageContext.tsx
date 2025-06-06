
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
    'stats.title': 'KRYPTOSPHERE EN QUELQUES CHIFFRES',
    'stats.subtitle': "Le réseau étudiant de la Tech",
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
    'publications.title': 'Nos dernières publications',
    'publications.subtitle': 'Découvrez nos dernières analyses et recherches sur la blockchain',
    'publications.readMore': 'Lire la suite',
    'publications.viewAll': 'Tout voir',

    // Pages
    'board.title': 'Notre Bureau',
    'board.subtitle': 'Découvrez les passionnés qui font vivre Kryptosphere au quotidien. Une équipe diverse et motivée, unie par la vision d\'un avenir blockchain.',
    'board.teamTag': 'L\'équipe qui fait vivre Kryptosphere',
    'board.year': 'Année :',
    'board.member1.name': 'Prénom Nom',
    'board.member1.role': 'Président',
    'board.member1.description': 'Étudiant en informatique passionné par les technologies blockchain et l\'innovation.',
    'board.member1.school': 'École d\'ingénieurs',
    'board.member2.name': 'Prénom Nom',
    'board.member2.role': 'Vice-Président',
    'board.member2.description': 'Expert en cryptomonnaies et développement de smart contracts.',
    'board.member2.school': 'École de commerce',
    'board.member3.name': 'Prénom Nom',
    'board.member3.role': 'Trésorier',
    'board.member3.description': 'Spécialiste en finance décentralisée (DeFi) et gestion de projets.',
    'board.member3.school': 'Université',
    'board.member4.name': 'Prénom Nom',
    'board.member4.role': 'Secrétaire',
    'board.member4.description': 'Responsable communication et organisation d\'événements.',
    'board.member4.school': 'École d\'informatique',
    'board.member5.name': 'Prénom Nom',
    'board.member5.role': 'Responsable Technique',
    'board.member5.description': 'Développeur blockchain et architecte de solutions décentralisées.',
    'board.member5.school': 'École d\'ingénieurs',
    'board.member6.name': 'Prénom Nom',
    'board.member6.role': 'Responsable Partenariats',
    'board.member6.description': 'Expert en relations entreprises et développement de partenariats.',
    'board.member6.school': 'École de commerce',
    'board.former.president': 'Ancien Président',
    'board.former.description': 'Ancien président qui a mené l\'association vers de nouveaux horizons.',
    'board.former.description2023': 'Leadership exceptionnel durant l\'année 2023.',
    
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
    'branches.parisDescription': 'Notre antenne parisienne, au cœur de l\'écosystème blockchain français.',
    'branches.nantesDescription': 'L\'antenne nantaise, dynamique et innovante dans l\'ouest de la France.',
    'branches.lilleDescription': 'L\'antenne lilloise, proche de la frontière belge et très active.',
    'branches.londonDescription': 'Notre première antenne internationale, au cœur de la City londonienne.',
    'branches.brusselsDescription': 'L\'antenne bruxelloise, au cœur des institutions européennes.',
    'branches.backToList': 'Retour aux antennes',
    'branches.bureauYear': 'Bureau {city} 2025',
    'branches.contact': 'Nous contacter',
    'branches.gallery': 'Galerie',
    'branches.location': 'Localisation',
    'branches.locationMap': 'Carte de localisation',

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
    'antenne.email': 'Email',
    'antenne.phone': 'Téléphone',
    'antenne.address': 'Adresse',
    'antenne.notFound': 'Antenne non trouvée',

    // Countries
    'countries.france': 'France',
    'countries.uk': 'Royaume-Uni',
    'countries.belgium': 'Belgique',

    // Cities
    'cities.paris': 'Paris',
    'cities.nantes': 'Nantes',
    'cities.lille': 'Lille',
    'cities.london': 'Londres',
    'cities.brussels': 'Bruxelles',

    // Team roles
    'roles.president': 'Président',
    'roles.vicePresident': 'Vice-Président',
    'roles.secretary': 'Secrétaire',
    'roles.treasurer': 'Trésorier',
    'roles.presidente': 'Présidente',
    'roles.vicePresidente': 'Vice-Présidente',
    'roles.tresoriere': 'Trésorière',

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

    'publication.kryptopaper24.title': 'KryptoPaper Edition 24',
    'publication.kryptopaper24.date': 'OCTOBRE 2024',
    'publication.kryptopaper24.description': 'Spécial NFTs et métaverse',
    'publication.kryptopaper24.readTime': '18 min',

    'publication.blockchain.title': 'Étude: Blockchain dans l\'éducation',
    'publication.blockchain.date': 'SEPTEMBRE 2024',
    'publication.blockchain.description': 'Impact des technologies blockchain sur l\'enseignement supérieur',
    'publication.blockchain.readTime': '25 min',

    'publication.smartcontracts.title': 'Guide Smart Contracts',
    'publication.smartcontracts.date': 'AOÛT 2024',
    'publication.smartcontracts.description': 'Développement et déploiement de smart contracts',
    'publication.smartcontracts.readTime': '35 min',

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
    'stats.title': 'KRYPTOSPHERE IN NUMBERS',
    'stats.subtitle': "The student network of Tech",
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
    'publications.title': 'Our latest publications',
    'publications.subtitle': 'Discover our latest blockchain analyses and research',
    'publications.readMore': 'Read more',
    'publications.viewAll': 'View all',

    // Pages
    'board.title': 'Our Board',
    'board.subtitle': 'Discover the passionate people who bring Kryptosphere to life every day. A diverse and motivated team, united by the vision of a blockchain future.',
    'board.teamTag': 'The team that brings Kryptosphere to life',
    'board.year': 'Year:',
    'board.member1.name': 'First Name Last Name',
    'board.member1.role': 'President',
    'board.member1.description': 'Computer science student passionate about blockchain technologies and innovation.',
    'board.member1.school': 'Engineering School',
    'board.member2.name': 'First Name Last Name',
    'board.member2.role': 'Vice-President',
    'board.member2.description': 'Expert in cryptocurrencies and smart contract development.',
    'board.member2.school': 'Business School',
    'board.member3.name': 'First Name Last Name',
    'board.member3.role': 'Treasurer',
    'board.member3.description': 'Specialist in decentralized finance (DeFi) and project management.',
    'board.member3.school': 'University',
    'board.member4.name': 'First Name Last Name',
    'board.member4.role': 'Secretary',
    'board.member4.description': 'Communication manager and event organizer.',
    'board.member4.school': 'Computer Science School',
    'board.member5.name': 'First Name Last Name',
    'board.member5.role': 'Technical Lead',
    'board.member5.description': 'Blockchain developer and decentralized solutions architect.',
    'board.member5.school': 'Engineering School',
    'board.member6.name': 'First Name Last Name',
    'board.member6.role': 'Partnership Manager',
    'board.member6.description': 'Expert in business relations and partnership development.',
    'board.member6.school': 'Business School',
    'board.former.president': 'Former President',
    'board.former.description': 'Former president who led the association to new horizons.',
    'board.former.description2023': 'Exceptional leadership during 2023.',
    
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
    'branches.parisDescription': 'Our Parisian branch, at the heart of the French blockchain ecosystem.',
    'branches.nantesDescription': 'The Nantes branch, dynamic and innovative in western France.',
    'branches.lilleDescription': 'The Lille branch, close to the Belgian border and very active.',
    'branches.londonDescription': 'Our first international branch, in the heart of London\'s City.',
    'branches.brusselsDescription': 'The Brussels branch, at the heart of European institutions.',
    'branches.backToList': 'Back to branches',
    'branches.bureauYear': '{city} Office 2025',
    'branches.contact': 'Contact us',
    'branches.gallery': 'Gallery',
    'branches.location': 'Location',
    'branches.locationMap': 'Location map',

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
    'antenne.email': 'Email',
    'antenne.phone': 'Phone',
    'antenne.address': 'Address',
    'antenne.notFound': 'Branch not found',

    // Countries
    'countries.france': 'France',
    'countries.uk': 'United Kingdom',
    'countries.belgium': 'Belgium',

    // Cities
    'cities.paris': 'Paris',
    'cities.nantes': 'Nantes',
    'cities.lille': 'Lille',
    'cities.london': 'London',
    'cities.brussels': 'Brussels',

    // Team roles
    'roles.president': 'President',
    'roles.vicePresident': 'Vice-President',
    'roles.secretary': 'Secretary',
    'roles.treasurer': 'Treasurer',
    'roles.presidente': 'President',
    'roles.vicePresidente': 'Vice-President',
    'roles.tresoriere': 'Treasurer',

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

    'publication.kryptopaper24.title': 'KryptoPaper Edition 24',
    'publication.kryptopaper24.date': 'OCTOBER 2024',
    'publication.kryptopaper24.description': 'Special NFTs and metaverse',
    'publication.kryptopaper24.readTime': '18 min',

    'publication.blockchain.title': 'Study: Blockchain in Education',
    'publication.blockchain.date': 'SEPTEMBER 2024',
    'publication.blockchain.description': 'Impact of blockchain technologies on higher education',
    'publication.blockchain.readTime': '25 min',

    'publication.smartcontracts.title': 'Smart Contracts Guide',
    'publication.smartcontracts.date': 'AUGUST 2024',
    'publication.smartcontracts.description': 'Development and deployment of smart contracts',
    'publication.smartcontracts.readTime': '35 min',

    // General
    'language': 'en'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    const value = translations[language][key as keyof typeof translations[typeof language]];
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    return value || key;
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
