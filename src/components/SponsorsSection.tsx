
import React from 'react';

const SponsorsSection = () => {
  const sponsors = [
    { name: 'KPMG', logo: '/placeholder.svg' },
    { name: 'BPI France', logo: '/placeholder.svg' },
    { name: 'Commons', logo: '/placeholder.svg' },
    { name: 'Banque Delubac & Cie', logo: '/placeholder.svg' }
  ];

  const media = [
    { name: 'Les Échos', logo: '/placeholder.svg' },
    { name: 'BFM Business', logo: '/placeholder.svg' },
    { name: 'CoinDesk', logo: '/placeholder.svg' },
    { name: 'Finyear', logo: '/placeholder.svg' }
  ];

  return (
    <div className="bg-black">
      {/* Sponsors Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-white text-2xl font-bold text-center mb-12">Ils nous soutiennent</h3>
          <div className="flex justify-center items-center gap-16 flex-wrap">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-12 w-auto filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-white text-2xl font-bold text-center mb-12">Ils parlent de nous</h3>
          <div className="flex justify-center items-center gap-16 flex-wrap">
            {media.map((outlet, index) => (
              <div
                key={index}
                className="opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={outlet.logo}
                  alt={outlet.name}
                  className="h-10 w-auto filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SponsorsSection;
