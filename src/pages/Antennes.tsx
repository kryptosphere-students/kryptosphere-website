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
      id: 'devinci',
      name: t('cities.paris'),
      city: t('cities.paris'),
      country: t('countries.france'),
      coordinates: { lat: 48.89591598510742, lng: 2.2204883098602295 },
      school: 'DeVinci',
      description: t('antennes.devinci.littleDescription'),
      image: 'https://www.devinci.fr/wordpress/wp-content/uploads/2019/07/campus-pole-leonard-de-vinci.jpg',
    },
    {
      id: 'essec',
      name: t('cities.paris'),
      city: t('cities.paris'),
      country: t('countries.france'),
      coordinates: { lat: 49.0334698, lng: 2.076515 },
      school: 'ESSEC Business School',
      description: t('antennes.essec.littleDescription'),
      image: '/antennes/EssecBig.webp'
    },
    {
      id: 'dauphine',
      name: t('cities.paris'),
      city: t('cities.paris'),
      country: t('countries.france'),
      coordinates: { lat: 48.870086669921875, lng: 2.273621082305908 },
      school: 'Paris Dauphine-PSL',
      description: t('antennes.dauphine.littleDescription'),
      image: '/antennes/dauphine/dauphine-2.webp',
    },
    {
      id: 'lyon',
      name: t('cities.lyon'),
      city: t('cities.lyon'),
      country: t('countries.france'),
      coordinates: { lat: 45.74861, lng: 4.86000 },
      school: 'IAE LYON',
      description: t('antennes.lyon.littleDescription'),
      image: 'https://pbs.twimg.com/media/E_PmcY2WUAE4C6j.jpg:large',
    },
    {
      id: 'telecom',
      name: t('cities.paris'),
      city: t('cities.paris'),
      country: t('countries.france'),
      coordinates: { lat: 48.624853, lng: 2.444104 },
      school: 'IMTBS - TSP',
      description: t('antennes.telecom.littleDescription'),
      image: '/lovable-uploads/imtbs_tsp.webp',
    },
        {
      id: 'ieseg',
      name: t('cities.paris'),
      city: t('cities.paris'),
      country: t('countries.france'),
      coordinates: { lat: 48.892372131347656, lng: 2.235696315765381 },
      school: 'IESEG Business School',
      description: t('antennes.ieseg.littleDescription'),
      image: 'https://www.parisladefense.com/sites/default/files/styles/responsive_2_1_s/public/import/image/ie-useg-pld-08-2022-augustin-detienne-004_9.jpg.webp',
    },
    {
      id: 'imtatlantique',
      name: t('cities.nantes'),
      city: t('cities.nantes'),
      country: t('countries.france'),
      coordinates: { lat: 47.281455993652344, lng: -1.5201970338821411 },
      school: 'IMT Atlantique',
      description: t('antennes.imtatlantique.littleDescription'),
      image: 'https://i.ytimg.com/vi/mF_yJHWc9S0/maxresdefault.jpg',
    },
    {
      id: '#',
      name: t('cities.paris'),
      city: t('cities.paris'),
      country: t('countries.france'),
      coordinates: { lat: 50.6292, lng: 3.0573 },
      school: 'ESCP Business School',
      description: t('antennes.escp.littleDescription'),
      image: 'https://escp.eu/sites/default/files/inline-images/Paris/real-estate-project/ESCP-Paris-Campus-Real-Estate-Project-002.jpg',
    },
    {
      id: '#',
      name: t('cities.london'),
      city: t('cities.london'),
      country: t('countries.uk'),
      coordinates: { lat: 51.5074, lng: -0.1278 },
      school: 'Hult Business School',
      description: t('antennes.hult.littleDescription'),
      image: 'https://img2.storyblok.com/f/45434/1200x800/4c78f7cd11/hult-london-postgraduate-virtual-tour.jpg',
    },
    {
      id: 'mons',
      name: t('cities.mons'),
      city: t('cities.mons'),
      country: t('countries.belgium'),
      coordinates: { lat: 50.45413, lng: 3.95229 },
      school: 'Haute École en Hainaut',
      description: t('antennes.mons.littleDescription'),
      image: 'https://ds.static.rtbf.be/article/image/1248x702/7/f/9/02561fa1a900cabe15c228f10a34a382-1391700643.jpg',
    },
          {
      id: 'neoma',
      name: t('cities.reims'),
      city: t('cities.reims'),
      country: t('countries.france'),
      coordinates: { lat: 49.238939, lng: 4.002990 },
      school: 'NEOMA',
      description: t('antennes.neoma.littleDescription'),
      image: 'https://www.fondation-neoma.fr/sites/fondation/files/styles/w2000/public/2023-11/NEOMA_Front.png?h=fb205de0&itok=sDaXH5eq',
    },
    {
      id: 'aes',
      name: t('cities.paris'),
      city: t('cities.paris'),
      country: t('countries.france'),
      coordinates: { lat: 48.87514877319336, lng: 2.351832389831543 },
      school: 'Albert Eugenia School',
      description: t('antennes.aes.littleDescription'),
      image: '/antennes/aes/aesImage.webp',
    },
    {
      id: 'inseecparis',
      name: t('cities.paris'),
      city: t('cities.paris'),
      country: t('countries.france'),
      coordinates: { lat: 48.88954544067383, lng: 2.2442686557769775 },
      school: 'INSEEC Paris',
      description: t('antennes.inseecparis.littleDescription'),
      image: '/antennes/inseec/inseec.webp', 
    },
    {
      id: 'ensiie',
      name: t('cities.paris'),
      city: t('cities.paris'),
      country: t('countries.france'),
      coordinates: { lat: 48.62651443481445, lng: 2.432352066040039 },
      school: 'ensIIE',
      description: t('antennes.ensiie.littleDescription'),
      image: '/antennes/ensiie/ensiie.webp', 
    },
    {
      id: 'epita',
      name: t('cities.paris'),
      city: t('cities.paris'),
      country: t('countries.france'),
      coordinates: { lat: 48.81573486328125, lng: 2.3623597621917725 },
      school: 'EPITA',
      description: t('antennes.epita.littleDescription'),
      image: '/antennes/epita/epita.webp', 
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
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-slate-700/50 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="aspect-video relative rounded-xl overflow-hidden">
                  <img
                    src={antenne.image}
                    alt={antenne.name}
                    loading="lazy"
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

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h4 className="text-xl font-semibold text-white mb-2">{antenne.school}</h4>
                    <p className="text-slate-300 text-sm mb-4">{antenne.description}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-auto">
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
