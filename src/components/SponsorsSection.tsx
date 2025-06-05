
import React from 'react';

const SponsorsSection = () => {
  const sponsors = [
    { name: 'KPMG', logo: '/placeholder.svg' },
    { name: 'BPI France', logo: '/placeholder.svg' },
    { name: 'Commons', logo: '/placeholder.svg' },
    { name: 'Banque Delubac & Cie', logo: '/placeholder.svg' }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6">
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
  );
};

export default SponsorsSection;
