
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Users, Mail, Phone, ExternalLink } from 'lucide-react';

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

          {/* Interactive Map Placeholder */}
          <div className="relative bg-slate-800 rounded-2xl overflow-hidden mb-16 h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-slate-400">
                <MapPin size={48} className="mx-auto mb-4 text-blue-400" />
                <p className="text-lg">Carte interactive des antennes</p>
                <p className="text-sm">Cliquez sur une ville pour en savoir plus</p>
              </div>
            </div>
            
            {/* Map markers */}
            {antennes.map((antenne) => (
              <button
                key={antenne.id}
                className="absolute w-4 h-4 bg-blue-500 rounded-full border-2 border-white hover:scale-125 transition-transform cursor-pointer"
                style={{
                  left: `${(antenne.coordinates.lng + 10) * 8}%`,
                  top: `${(55 - antenne.coordinates.lat) * 1.8}%`
                }}
                onClick={() => setSelectedAntenne(antenne.id)}
                title={antenne.name}
              />
            ))}
            
            {selectedAntenne && (
              <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-sm rounded-lg p-4 text-white max-w-sm">
                {(() => {
                  const antenne = antennes.find(a => a.id === selectedAntenne);
                  return antenne ? (
                    <div>
                      <h3 className="font-bold text-lg text-blue-400">{antenne.name}</h3>
                      <p className="text-sm text-slate-300 mb-2">{antenne.school}</p>
                      <p className="text-sm">{antenne.description}</p>
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
