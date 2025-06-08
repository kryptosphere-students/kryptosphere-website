import React from 'react';
import { Users, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const StatsSection = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Users,
      value: '800+',
      label: t('stats.students')
    },
    {
      icon: GraduationCap,
      value: '22+',
      label: t('stats.universities')
    },
    {
      icon: Calendar,
      value: '500+',
      label: t('stats.events')
    },
    {
      icon: MapPin,
      value: '5',
      label: t('stats.branches')
    }
  ];

  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            {t('stats.title')}
          </h2>
          <div className="flex items-center justify-center gap-2 text-xl text-slate-700">
            <span>{t('stats.subtitle')}</span>
            <div className="flex gap-1">
              <div className="w-6 h-4 bg-blue-600 rounded-sm"></div>
              <div className="w-6 h-4 bg-white border border-blue-600 rounded-sm"></div>
              <div className="w-6 h-4 bg-red-600 rounded-sm"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
export const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.board': 'Gouvernance',
    'nav.association': 'Association',
    'nav.branches': 'Antennes',
    'nav.events': 'Événements',
    'nav.publications': 'Publications',
    'nav.donate': 'Nous soutenir',

    // Hero
    'hero.title': "La première association",
    'hero.title2': 'étudiante',
    'hero.title3': 'et Tech',
    'hero.title4': "d'Europe",
    'hero.subtitle': "Démocratiser les crypto-actifs, l'IA et la cybersécurité depuis 2017",
    'hero.join': "Rejoindre l'association",
    'hero.branches': 'Voir nos antennes',

    // Stats
    'stats.title': 'KRYPTOSPHERE EN QUELQUES CHIFFRES',
    'stats.subtitle': "Le réseau étudiant de la Tech",
    'stats.students': 'Étudiants',
    'stats.universities': 'Universités',
    'stats.events': 'Événements',
    'stats.branches': 'Villes',

    // Sponsors
    'sponsors.title': 'Ils nous soutiennent',
    'sponsors.sponsors': 'Sponsors',
    'sponsors.partners': 'Partenaires',
    'sponsors.universities': 'Universités',
    'sponsors.media': 'Ils parlent de nous',

    // Publications
    'publications.title': 'Nos dernières publications',
    'publications.subtitle': 'Découvrez nos dernières analyses et recherches sur les blockchains et les crypto-actifs',
    'publications.readMore': 'Lire la suite',
    'publications.viewAll': 'Tout voir',

    // Pages
    'board.title': 'Notre Bureau',
    'board.subtitle': "Découvrez les passionnés qui font vivre KRYPTOSPHERE® au quotidien. Des équipes diversifiées, complémentaires et motivées, unie par leur passion des cryptomonnaies.",
    'board.teamTag': 'L\'équipe qui fait vivre et administre KRYPTOSPHERE®',
    'board.year': 'Année :',
    'board.member1.name': 'Raphaël PAUTARD',
    'board.member1.role': 'Président délégué',
    'board.member1.description': 'Étudiant en informatique passionné par les technologies blockchain et l\'innovation.',
    'board.member1.school': 'IAE Lyon',
    'board.member2.name': 'Antoine MANIVAL',
    'board.member2.role': 'Vice-Président délégué',
    'board.member2.description': 'Expert en cryptomonnaies et développement de smart contracts.',
    'board.member2.school': 'INSEEC',
    'board.member3.name': 'Mathieu LARUELLE',
    'board.member3.role': 'Trésorier délégué',
    'board.member3.description': 'Spécialiste en finance décentralisée (DeFi) et gestion de projets.',
    'board.member3.school': 'ESILV',
    'board.member4.name': 'Louis PIALLAT',
    'board.member4.role': 'Secrétaire délégué',
    'board.member4.description': 'Responsable communication et organisation d\'événements.',
    'board.member4.school': 'ESSEC',
    'board.member5.name': 'Thibault LANGLOIS-BERTHELOT',
    'board.member5.role': 'Président Fondateur',
    'board.member5.description': 'Docteur en droit et élève avocat passionné de Bitcoin.',
    'board.member5.school': 'KEDGE Marseille',
    'board.former.president': 'Ancien Président(e)',
    'board.former.description': "Ancien président(e) qui a mené(e) notre réseau d'associations vers de nouveaux horizons.",
    'board.former.description2023': 'Leadership exceptionnel durant l\'année 2023.',

    'association.title': 'L\'Association',
    'association.subtitle': 'Depuis 2017, KRYPTOSPHERE® s\'impose comme la référence européenne dans l\'écosystème crypto étudiant. Découvrez notre histoire, nos valeurs et notre vision pour l\'avenir.',
    'association.historyTag': 'Notre histoire et notre mission',
    'association.mission': 'Notre Mission',
    'association.missionText': 'Démocratiser l\'accès aux crypto-actifs et former la prochaine génération de cet écosystème.',
    'association.values': 'Nos Valeurs',
    'association.valuesText': 'Confiance, partage de connaissances, collaboration et excellence académique au service de notre réseau de bénévoles.',
    'association.vision': 'Notre Vision',
    'association.visionText': 'Faire le pont entre l\'innovation blockchain et l\'enseignement supérieur en Europe.',
    'association.journey': 'Notre Histoire',

    'branches.title': 'Nos Antennes',
    'branches.subtitle': 'Découvrez nos antennes en Europe et rejoignez la communauté KRYPTOSPHERE® la plus proche de vous.',
    'branches.discover': 'Découvrir l\'antenne',
    'branches.localOffice': 'Bureau local',
    'branches.presenceTag': 'Notre présence en Europe',
    'branches.parisDescription': 'Nos antennes parisiennes, au cœur de l\'écosystème crypto français.',
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
    'cities.test': 'Test',

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
    'footer.copyright': '2017 - 2025 KRYPTOSPHERE®. Tous droits réservés.',

    // Contact
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.address': 'Adresse',

    // Timeline years
    'timeline.2017.title': 'Lancement de KRYPTOSPHERE®',
    'timeline.2017.description': 'Fondation de notre réseau par 4 étudiants passionnés par Bitcoin',
    'timeline.2017.achievements': ['Première antenne à KEDGE Marseille', '10 membres fondateurs du réseau', 'Premiers articles sur Bitcoin'],

    'timeline.2018.title': 'Expansion nationale',
    'timeline.2018.description': 'Ouverture des premières antennes en région parisienne et partenariats avec plusieurs grandes écoles et universités',
    'timeline.2018.achievements': ['4 antennes actives', '50+ membres', 'Premier hackathon blockchain'],

    'timeline.2019.title': "Diversification sur l'IA et structuration de notre gouvernance",
    'timeline.2019.description': "Création de KRYPTOSPHERE® FRANCE pour accompagner le développement de notre réseau et diversification sur l'IA",
    'timeline.2019.achievements': ['6 antennes actives', '100+ membres', 'Premier KryptoPaper'],

    'timeline.2020.title': 'Déploiement de notre stratégie de communication',
    'timeline.2020.description': 'Adaptation aux nouveaux modes de communication',
    'timeline.2020.achievements': ['Événements virtuels', '10+ antennes actives', '200+ membres'],

    'timeline.2021.title': 'Diversification sur la cybersécurité',
    'timeline.2021.description': "Ouverture des premières antennes au sein de plusieurs écoles d'informatique",
    'timeline.2021.achievements': ['Nouveaux sponsors', 'Expansion continue', '300+ membres'],

    'timeline.2022.title': 'Innovation pédagogique',
    'timeline.2022.description': 'Lancement de programmes de formation avancés sur les crypto-actifs',
    'timeline.2022.achievements': ['Formations internes labellisées', '15+ antennes', '400+ membres'],

    'timeline.2023.title': 'Consolidation du réseau',
    'timeline.2023.description': "Reconnaissance comme référence en France dans l'enseignement supérieur",
    'timeline.2023.achievements': ['500+ membres', '20+ antennes', '3 pays'],

    'timeline.2024.title': 'Internationalisation à Londres et à Mons',
    'timeline.2024.description': 'Création de deux associations KRYPTOSPHERE® à Londres et en Belgique',
    'timeline.2024.achievements': ['Londres', 'Belgique', '700+ membres'],

    'timeline.2025.title': 'Nouveaux horizons',
    'timeline.2025.description': "Cibler d'autres technologies émergentes",
    'timeline.2025.achievements': ['Intelligence Artificielle', 'Ordinateurs quantiques', 'Cybersécurité', '800+ membres'],

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

    'publication.research.title': 'Recherche académique',
    'publication.research.date': 'AOUT 2023',
    'publication.research.description': 'La blockchain au regard du droit et de l’identité',
    'publication.research.readTime': '60+ min',

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
    'board.member1.name': 'Raphaël PAUTARD',
    'board.member1.role': 'President',
    'board.member1.description': 'Computer science student passionate about blockchain technologies and innovation.',
    'board.member1.school': 'IAE Lyon',
    'board.member2.name': 'Antoine MANIVAL',
    'board.member2.role': 'Vice-President',
    'board.member2.description': 'Expert in cryptocurrencies and smart contract development.',
    'board.member2.school': 'INSEEC',
    'board.member3.name': 'Mathieu LARUELLE',
    'board.member3.role': 'Treasurer',
    'board.member3.description': 'Specialist in decentralized finance (DeFi) and project management.',
    'board.member3.school': 'ESILV',
    'board.member4.name': 'Louis PIALLAT',
    'board.member4.role': 'Secretary',
    'board.member4.description': 'Communication manager and event organizer.',
    'board.member4.school': 'ESSEC',
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

    'publication.research.title': 'Academic Research',
    'publication.research.date': 'AUGUST 2023',
    'publication.research.description': 'Blockchain in the context of law and identity',
    'publication.research.readTime': '60+ min',

    'publication.smartcontracts.title': 'Smart Contracts Guide',
    'publication.smartcontracts.date': 'AUGUST 2024',
    'publication.smartcontracts.description': 'Development and deployment of smart contracts',
    'publication.smartcontracts.readTime': '35 min',

    // General
    'language': 'en'
  }
};
