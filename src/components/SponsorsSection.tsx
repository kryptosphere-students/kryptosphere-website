
import React from 'react';
import { Sparkles } from 'lucide-react';

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
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-900/50 backdrop-blur-lg border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            Nos partenaires de confiance
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Nos Partenaires
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Nous remercions nos partenaires qui nous accompagnent dans notre mission d'innovation blockchain
          </p>
        </div>

        {/* Premium Sponsors */}
        {premiumSponsors.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-12 text-blue-300">Partenaires Premium</h3>
            <div className="flex justify-center items-center gap-16 flex-wrap">
              {premiumSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/20"
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
            <h3 className="text-xl font-semibold text-center mb-10 text-blue-400">Partenaires Gold</h3>
            <div className="flex justify-center items-center gap-12 flex-wrap">
              {goldSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-slate-800/30 backdrop-blur-lg p-6 rounded-lg border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group hover:shadow-xl hover:shadow-purple-500/10"
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
            <h3 className="text-lg font-semibold text-center mb-8 text-slate-400">Partenaires Silver</h3>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {silverSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-slate-800/20 backdrop-blur-lg p-4 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/10"
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
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-12 border border-slate-700/50 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-white">Devenez notre partenaire</h3>
            <p className="text-xl mb-8 text-slate-300">
              Rejoignez nos partenaires et gagnez en visibilité auprès de la nouvelle génération blockchain
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
