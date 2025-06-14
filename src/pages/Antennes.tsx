
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AntennesMap from '../components/AntennesMap';
import { Users, Mail, Phone, ExternalLink, Target, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Antennes = () => {
  const [selectedAntenne, setSelectedAntenne] = useState<string | null>(null);
  const { t } = useLanguage();

  const antennes = [
    {
      id: 'paris',
      name: t('cities.paris'),
      city: t('cities.paris'),
      country: t('countries.france'),
      coordinates: { lat: 48.8566, lng: 2.3522 },
      school: 'ESSEC Paris',
      description: t('branches.parisDescription'),
      image: '/antennes/EssecBig.png',
      contact: {
        email: 'paris@kryptosphere.org',
        phone: '+33 1 23 45 67 89'
      }
    },
    {
      id: 'nantes',
      name: t('cities.nantes'),
      city: t('cities.nantes'),
      country: t('countries.france'),
      coordinates: { lat: 47.2184, lng: -1.5536 },
      school: 'Audencia Business School',
      description: t('branches.nantesDescription'),
      image: '/placeholder.svg',
      contact: {
        email: 'nantes@kryptosphere.org',
        phone: '+33 2 23 45 67 89'
      }
    },
    {
      id: 'lille',
      name: t('cities.lille'),
      city: t('cities.lille'),
      country: t('countries.france'),
      coordinates: { lat: 50.6292, lng: 3.0573 },
      school: 'EDHEC Business School',
      description: t('branches.lilleDescription'),
      image: '/placeholder.svg',
      contact: {
        email: 'lille@kryptosphere.org',
        phone: '+33 3 23 45 67 89'
      }
    },
    {
      id: 'londres',
      name: t('cities.london'),
      city: t('cities.london'),
      country: t('countries.uk'),
      coordinates: { lat: 51.5074, lng: -0.1278 },
      school: 'London Business School',
      description: t('branches.londonDescription'),
      image: '/placeholder.svg',
      contact: {
        email: 'london@kryptosphere.org',
        phone: '+44 20 1234 5678'
      }
    },
    {
      id: 'mons',
      name: t('cities.mons'),
      city: t('cities.mons'),
      country: t('countries.belgium'),
      coordinates: { lat: 50.45413, lng: 3.95229 },
      school: 'HEH',
      description: t('branches.monsDescription'),
      image: 'https://st4.depositphotos.com/38198886/39435/i/1600/depositphotos_394351038-stock-photo-main-square-city-hall-mons.jpg',
      contact: {
        email: 'contact@kryptosphere.org',
        phone: '+X XX XX XX XX'
      }
    },
    {
      id: 'paris2',
      name: t('cities.paris'),
      city: t('cities.paris'),
      country: t('countries.france'),
      coordinates: { lat: 48.8965, lng: 2.2339 },
      school: 'DEVINCI',
      description: t('branches.parisDescription2'),
      image: '/antennes/devinci.webp',
      contact: {
        email: 'contact@kryptosphere.org',
        phone: '+X XX XX XX XX'
      }
    },
       {
      id: 'paris3',
      name: t('cities.paris'),
      city: t('cities.paris'),
      country: t('countries.france'),
      coordinates: { lat: 48.624853, lng: 2.444104 },
      school: 'IMTBS-TSP',
      description: t('branches.parisDescription3'),
      image: '/lovable-uploads/imtbs_tsp.jpg',
      contact: {
        email: 'contact@kryptosphere.org',
        phone: '+X XX XX XX XX'
      }
    }
  ];

  const handleAntenneSelect = (antenneId: string) => {
    setSelectedAntenne(antenneId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <Navigation />

      {/* Hero Section with Map */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-900/50 backdrop-blur-lg border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm mb-8">
            <MapPin className="w-4 h-4 text-blue-400" />
            {t('branches.presenceTag')}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {t('branches.title')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('branches.subtitle')}
          </p>

          {/* Interactive Map */}
          <div className="mt-20 mb-16">
            <AntennesMap
              antennes={antennes}
              onAntenneSelect={handleAntenneSelect}
            />

            {selectedAntenne && (
              <div className="mt-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-6 text-white max-w-md mx-auto">
                {(() => {
                  const antenne = antennes.find(a => a.id === selectedAntenne);
                  return antenne ? (
                    <div className="text-center">
                      <h3 className="font-bold text-xl text-blue-400 mb-2">{antenne.name}</h3>
                      <p className="text-slate-300 mb-2">{antenne.school}</p>
                      <p className="text-sm text-slate-400">{antenne.description}</p>
                      <Link
                        to={`/antennes/${antenne.id}`}
                        className="inline-block mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                      >
                        {t('branches.discover')}
                      </Link>
                    </div>
                  ) : null;
                })()}
              </div>
            )}
          </div>

          {/* Antennes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {antennes.map((antenne) => (
              <Link
                key={antenne.id}
                to={`/antennes/${antenne.id}`}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-slate-700/50 transition-all duration-300 group"
              >
                <div className="aspect-video relative rounded-xl overflow-hidden">
                  <img
                    src={antenne.image}
                    alt={antenne.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white z-10">
                      <h3 className="text-2xl font-bold">{antenne.name}</h3>
                      <p className="text-blue-200">{antenne.country}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-2">{antenne.school}</h4>
                  <p className="text-slate-300 text-sm mb-4">{antenne.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Users size={16} />
                      <span>{t('branches.localOffice')}</span>
                    </div>
                    <div className="text-blue-400 group-hover:text-blue-300 flex items-center gap-1">
                      <span>{t('branches.discover')}</span>
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Antennes;
