
import React from 'react';

const SponsorsSection = () => {
  const sponsors = [
    { name: 'Sponsor 1', logo: '/placeholder.svg', tier: 'premium' },
    { name: 'Sponsor 2', logo: '/placeholder.svg', tier: 'gold' },
    { name: 'Sponsor 3', logo: '/placeholder.svg', tier: 'premium' },
    { name: 'Sponsor 4', logo: '/placeholder.svg', tier: 'silver' },
    { name: 'Sponsor 5', logo: '/placeholder.svg', tier: 'gold' },
    { name: 'Sponsor 6', logo: '/placeholder.svg', tier: 'silver' },
  ];

  const premiumSponsors = sponsors.filter(s => s.tier === 'premium');
  const goldSponsors = sponsors.filter(s => s.tier === 'gold');
  const silverSponsors = sponsors.filter(s => s.tier === 'silver');

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Nos Partenaires & Sponsors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Merci à nos partenaires qui nous accompagnent dans notre mission d'innovation blockchain
          </p>
        </div>

        {/* Premium Sponsors */}
        {premiumSponsors.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">Partenaires Premium</h3>
            <div className="flex justify-center items-center gap-12 flex-wrap">
              {premiumSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-16 w-auto mx-auto opacity-80 hover:opacity-100 transition-opacity duration-200"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gold Sponsors */}
        {goldSponsors.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-700">Partenaires Gold</h3>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {goldSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-12 w-auto mx-auto opacity-70 hover:opacity-90 transition-opacity duration-200"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Silver Sponsors */}
        {silverSponsors.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-center mb-6 text-gray-600">Partenaires Silver</h3>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {silverSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-10 w-auto mx-auto opacity-60 hover:opacity-80 transition-opacity duration-200"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action for Sponsors */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Devenez notre partenaire</h3>
            <p className="text-lg mb-6 opacity-90">
              Rejoignez nos partenaires et gagnez en visibilité auprès de la nouvelle génération blockchain
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
