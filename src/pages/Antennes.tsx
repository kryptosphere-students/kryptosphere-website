
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AntennesMap from '../components/AntennesMap';
import { Users, Mail, Phone, ExternalLink } from 'lucide-react';

const Antennes = () => {
  const [selectedAntenne, setSelectedAntenne] = useState<string | null>(null);

  const antennes = [
    {
      id: 'paris',
      name: 'Paris',
      city: 'Paris',
      country: 'France',
      coordinates: { lat: 48.8566, lng: 2.3522 },
      school: 'HEC Paris',
      description: 'Notre antenne parisienne, au cœur de l\'écosystème blockchain français.',
      image: '/placeholder.svg',
      contact: {
        email: 'paris@kryptosphere.org',
        phone: '+33 1 23 45 67 89'
      }
    },
    {
      id: 'nantes',
      name: 'Nantes',
      city: 'Nantes',
      country: 'France',
      coordinates: { lat: 47.2184, lng: -1.5536 },
      school: 'Audencia Business School',
      description: 'L\'antenne nantaise, dynamique et innovante dans l\'ouest de la France.',
      image: '/placeholder.svg',
      contact: {
        email: 'nantes@kryptosphere.org',
        phone: '+33 2 23 45 67 89'
      }
    },
    {
      id: 'lille',
      name: 'Lille',
      city: 'Lille',
      country: 'France',
      coordinates: { lat: 50.6292, lng: 3.0573 },
      school: 'EDHEC Business School',
      description: 'L\'antenne lilloise, proche de la frontière belge et très active.',
      image: '/placeholder.svg',
      contact: {
        email: 'lille@kryptosphere.org',
        phone: '+33 3 23 45 67 89'
      }
    },
    {
      id: 'londres',
      name: 'Londres',
      city: 'Londres',
      country: 'Royaume-Uni',
      coordinates: { lat: 51.5074, lng: -0.1278 },
      school: 'London Business School',
      description: 'Notre première antenne internationale, au cœur de la City londonienne.',
      image: '/placeholder.svg',
      contact: {
        email: 'london@kryptosphere.org',
        phone: '+44 20 1234 5678'
      }
    },
    {
      id: 'bruxelles',
      name: 'Bruxelles',
      city: 'Bruxelles',
      country: 'Belgique',
      coordinates: { lat: 50.8503, lng: 4.3517 },
      school: 'Solvay Brussels School',
      description: 'L\'antenne bruxelloise, au cœur des institutions européennes.',
      image: '/placeholder.svg',
      contact: {
        email: 'brussels@kryptosphere.org',
        phone: '+32 2 123 45 67'
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
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nos <span className="text-blue-400">Antennes</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Découvrez nos antennes à travers l'Europe et rejoignez la communauté Kryptosphere la plus proche de vous.
            </p>
          </div>

          {/* Interactive Map */}
          <div className="mb-16">
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
                        Découvrir l'antenne
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
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
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
                      <span>Bureau local</span>
                    </div>
                    <div className="text-blue-400 group-hover:text-blue-300 flex items-center gap-1">
                      <span>Découvrir</span>
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
