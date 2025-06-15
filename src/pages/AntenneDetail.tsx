
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Mail, Phone, ArrowLeft, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import AntenneMapSingle from '@/components/AntenneMapSingle';

const AntenneDetail = () => {
  const { id } = useParams();
  const { t } = useLanguage();

  const antennesData = {
    paris: {
      name: t('cities.paris'),
      city: t('cities.paris'),
      coordinates: { lat: 48.8566, lng: 2.3522 },
      country: t('countries.france'),
      school: 'ESSEC Paris',
      schoolLogo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png',
      description: t('branches.parisDescription'),
      descriptionEn: t('branches.parisDescription'),
      heroImage: '/antennes/EssecFont.png',
      contact: {
        email: 'contact@kryptosphere.org',
        phone: '+33 X XX XX XX XX',
        address: '1 Rue de la Libération, 78350 Jouy-en-Josas'
      },
      bureau: [
        { name: 'Marie Dubois', role: t('roles.presidente'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'Pierre Martin', role: t('roles.vicePresident'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'Sophie Laurent', role: t('roles.tresoriere'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'Thomas Bernard', role: t('roles.secretary'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' }
      ]
    },
    nantes: {
      name: t('cities.nantes'),
      city: t('cities.nantes'),
      coordinates: { lat: 47.2184, lng: -1.5536 },
      country: t('countries.france'),
      school: 'IMT Atlantique',
      schoolLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/IMT_Atlantique.svg/1200px-IMT_Atlantique.svg.png',
      description: t('branches.nantesDescription'),
      descriptionEn: t('branches.nantesDescription'),
      heroImage: 'https://cdn.pixabay.com/photo/2017/07/26/20/12/nantes-2542973_1280.jpg',
      contact: {
        email: 'contact@kryptosphere.org',
        phone: '+33 x xx xx xx xx',
        address: '4 Rue Alfred Kastler, 44300 Nantes'
      },
      bureau: [
        { name: 'Julie Moreau', role: t('roles.presidente'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'Lucas Petit', role: t('roles.vicePresident'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'Emma Roux', role: t('roles.tresoriere'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' }
      ]
    },
    paris4: {
      name: t('cities.paris4'),
      city: t('cities.paris4'),
      coordinates: { lat: 48.858636, lng: 2.375139 },
      country: t('countries.france'),
      school: 'ESCP Business School',
      schoolLogo: 'https://www.cfa-sciences.fr/sites/default/files/inline-images/1200px-ESCP_LOGO_CMJN.png',
      description: t('branches.parisDescription4'),
      descriptionEn: t('branches.parisDescription4'),
      heroImage: 'https://escp.eu/sites/default/files/inline-images/Paris/Champerret-Campus/ESCP-Campus-Champerret-016-square-hotel-de-ville.jpg',
      contact: {
        email: 'contact@kryptosphere.org',
        phone: '+X XX XX XX XX XX',
        address: '79 Avenue de la République 75011 Paris'
      },
      bureau: [
        { name: 'Antoine Leroy', role: t('roles.president'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'Camille Dupont', role: t('roles.vicePresidente'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'Hugo Blanc', role: t('roles.treasurer'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' }
      ]
    },
    londres: {
      name: t('cities.london'),
      city: t('cities.london'),
      coordinates: { lat: 51.5074, lng: -0.1278 },
      country: t('countries.uk'),
      school: 'Hult Business School',
      schoolLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/HULT_IBS_Logo_Outline_Black_%28cropped%29.png/640px-HULT_IBS_Logo_Outline_Black_%28cropped%29.png',
      description: t('branches.londonDescription'),
      descriptionEn: t('branches.londonDescription'),
      heroImage: 'https://img2.storyblok.com/f/45434/1200x800/4c78f7cd11/hult-london-postgraduate-virtual-tour.jpg',
      contact: {
        email: 'contact@kryptosphere.org',
        phone: '+XX XX XX XX XX',
        address: '37–38 John Street London WC1N 2AT United Kingdom'
      },
      bureau: [
        { name: 'James Wilson', role: t('roles.president'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'Sarah Johnson', role: t('roles.vicePresident'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'David Brown', role: t('roles.treasurer'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' }
      ]
    },
    mons: {
      name: t('cities.mons'),
      city: t('cities.mons'),
      coordinates: { lat: 50.8503, lng: 4.3517 },
      country: t('countries.belgium'),
      school: 'HEH',
      schoolLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9VjgnAtJ9fDWMfxpQvZhDoQghuizHlb9RIQ&s',
      description: t('branches.monsDescription'),
      descriptionEn: t('branches.monsDescription'),
      heroImage: 'https://images.unsplash.com/photo-1559113122-3f2b707ba3c6?q=80&w=2000',
      contact: {
        email: 'contact@kryptosphere.org',
        phone: '+X XX XX XX XX',
        address: '8 Avenue Victor Maistriau, 7000, Mons'
      },
      bureau: [
        { name: 'William HUBAUX', role: t('roles.presidente'), photo: '/public/antennes/William.webp' },
        { name: "Yassine N'CIRI", role: t('roles.vicePresident'), photo: '/public/antennes/Yassine.webp' },
        { name: 'Romain MOREAU', role: t('roles.tresoriere'), photo: '/public/antennes/Romain.webp' }
      ]
    },
    paris2: {
      name: t('cities.paris'),
      city: t('cities.paris'),
      country: t('countries.france'),
      coordinates: { lat: 48.8965, lng: 2.2339 },
      school: 'Léonard De Vinci',
      schoolLogo: '/lovable-uploads/devinci.png',
      description: t('branches.parisDescription2'),
      descriptionEn: t('branches.parisDescription2'),
      heroImage: 'https://images.pexels.com/photos/2389273/pexels-photo-2389273.jpeg?_gl=1*1trpnet*_ga*MTgxNTM4ODkzNi4xNzQ5OTMwMzY2*_ga_8JE65Q40S6*czE3NDk5MzAzNjYkbzEkZzEkdDE3NDk5MzAzODYkajQwJGwwJGgw',
      contact: {
        email: 'contact@kryptosphere.org',
        phone: '+XX XX XX XX XX',
        address: '12 Avenue Léonard De Vinci, 92400, Courbevoie'
      },
      bureau: [
        { name: 'James Wilson', role: t('roles.president'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'Sarah Johnson', role: t('roles.vicePresident'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'David Brown', role: t('roles.treasurer'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' }
      ]
    },
        paris3: {
      name: t('cities.paris'),
      city: t('cities.paris'),
      country: t('countries.france'),
      coordinates: { lat: 48.624853, lng: 2.444104 },
      school: 'IMTBS-TSP',
      schoolLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTANx3tURfMi9hQsmtiSi7DN_MRoNFasI4JZw&s',
      description: t('branches.parisDescription3'),
      descriptionEn: t('branches.parisDescription3'),
      heroImage: 'https://images.pexels.com/photos/2389273/pexels-photo-2389273.jpeg?_gl=1*1trpnet*_ga*MTgxNTM4ODkzNi4xNzQ5OTMwMzY2*_ga_8JE65Q40S6*czE3NDk5MzAzNjYkbzEkZzEkdDE3NDk5MzAzODYkajQwJGwwJGgw',
      contact: {
        email: 'contact@kryptosphere.org',
        phone: '+XX XX XX XX XX',
        address: '9 Rue Charles Fourier, 91000 Évry-Courcouronnes'
      },
      bureau: [
        { name: 'James Wilson', role: t('roles.president'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'Sarah Johnson', role: t('roles.vicePresident'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'David Brown', role: t('roles.treasurer'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' }
      ]
    },
    lyon: {
      name: t('cities.lyon'),
      city: t('cities.lyon'),
      country: t('countries.france'),
      coordinates: { lat: 48.624853, lng: 2.444104 },
      school: 'IAE Lyon',
      schoolLogo: 'https://www.eduopinions.com/wp-content/uploads/2018/02/iae_lyon.png',
      description: t('branches.lyonDescription'),
      descriptionEn: t('branches.lyonDescription'),
      heroImage: 'https://cdn.pixabay.com/photo/2022/04/07/13/33/lyon-7117498_1280.jpg',
      contact: {
        email: 'contact@kryptosphere.org',
        phone: '+XX XX XX XX XX',
        address: '1C, avenue des Frères Lumière, 69372, Lyon CEDEX 08'
      },
      bureau: [
        { name: 'James Wilson', role: t('roles.president'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'Sarah Johnson', role: t('roles.vicePresident'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'David Brown', role: t('roles.treasurer'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' }
      ]
    }
  };

  const antenne = antennesData[id as keyof typeof antennesData];

  if (!antenne) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <Navigation />
        <div className="pt-24 text-center text-white">
          <h1 className="text-4xl font-bold">{t('antenne.notFound')}</h1>
          <Link to="/antennes" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
            {t('branches.backToList')}
          </Link>
        </div>
      </div>
    );
  }

  const gallery = [
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800',
    'https://images.unsplash.com/photo-1515169067868-5387ec70266d?q=80&w=800',
    'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?q=80&w=800',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${antenne.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <Link
              to="/antennes"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              {t('branches.backToList')}
            </Link>

            <div className="max-w-4xl">
              <div className="flex items-center gap-6 mb-6">
                <img
                  src={antenne.schoolLogo}
                  alt={antenne.school}
                  className="w-16 h-16 bg-white rounded-lg p-2"
                />
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-2">
                    KRYPTOSPHERE <span className="text-blue-400">{antenne.name}</span>
                  </h1>
                  <p className="text-xl text-slate-300">{antenne.school}</p>
                </div>
              </div>

              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
                {t('language') === 'fr' ? antenne.description : antenne.descriptionEn}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Bureau Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            {t('branches.bureauYear').replace('{city}', antenne.name)}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {antenne.bureau.map((member, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
              >
                <div className="p-8 text-center">
                  <div className="w-32 h-32 rounded-xl overflow-hidden mx-auto mb-6 border-2 border-blue-500/30 group-hover:border-blue-400 transition-all duration-300">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-2 text-sm uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact & Map Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">{t('branches.contact')}</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-300">
                  <Mail className="text-blue-400" size={24} />
                  <div>
                    <p className="font-medium">{t('antenne.email')}</p>
                    <a href={`mailto:${antenne.contact.email}`} className="text-blue-400 hover:text-blue-300">
                      {antenne.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-300">
                  <Phone className="text-blue-400" size={24} />
                  <div>
                    <p className="font-medium">{t('antenne.phone')}</p>
                    <a href={`tel:${antenne.contact.phone}`} className="text-blue-400 hover:text-blue-300">
                      {antenne.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-300">
                  <MapPin className="text-blue-400" size={24} />
                  <div>
                    <p className="font-medium">{t('antenne.address')}</p>
                    <p>{antenne.contact.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-slate-800 rounded-xl overflow-hidden">
              {/* Map fills full width */}
              <div className="h-80 w-full">
                <AntenneMapSingle antenne={antenne} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">{t('branches.gallery')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div key={index} className="aspect-video rounded-xl overflow-hidden bg-slate-800">
                <img
                  src={image}
                  alt={`${t('branches.gallery')} ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AntenneDetail;
