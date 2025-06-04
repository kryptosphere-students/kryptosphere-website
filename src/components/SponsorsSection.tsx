
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-slate-900">
            Nos Partenaires
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Nous remercions nos partenaires qui nous accompagnent dans notre mission d'innovation blockchain
          </p>
        </div>

        {/* Premium Sponsors */}
        {premiumSponsors.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-12 text-slate-800">Partenaires Premium</h3>
            <div className="flex justify-center items-center gap-16 flex-wrap">
              {premiumSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 group"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-16 w-auto mx-auto opacity-60 group-hover:opacity-100 transition-opacity duration-200"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gold Sponsors */}
        {goldSponsors.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-center mb-10 text-slate-700">Partenaires Gold</h3>
            <div className="flex justify-center items-center gap-12 flex-wrap">
              {goldSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 group"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-12 w-auto mx-auto opacity-50 group-hover:opacity-80 transition-opacity duration-200"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Silver Sponsors */}
        {silverSponsors.length > 0 && (
          <div className="mb-16">
            <h3 className="text-lg font-semibold text-center mb-8 text-slate-600">Partenaires Silver</h3>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {silverSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 group"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-10 w-auto mx-auto opacity-40 group-hover:opacity-70 transition-opacity duration-200"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action for Sponsors */}
        <div className="mt-20 text-center">
          <div className="bg-slate-900 rounded-2xl p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Devenez notre partenaire</h3>
            <p className="text-xl mb-8 text-slate-300 font-light">
              Rejoignez nos partenaires et gagnez en visibilité auprès de la nouvelle génération blockchain
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200">
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
