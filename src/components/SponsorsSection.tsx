import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';

const SponsorsSection = () => {
  const { t } = useLanguage();

  const sponsors = [
    { name: 'BPI France', logo: '/lovable-uploads/bpifrance.webp' },
    { name: 'Ledger', logo: '/lovable-uploads/Ledger.svg' },
    { name: 'KPMG', logo: '/lovable-uploads/KPMG.webp' },
    { name: 'DELUBAC', logo: '/lovable-uploads/delubac.svg' },
    { name: 'XRP', logo: '/lovable-uploads/xrp.webp' },
    { name: 'Forvis Mazars', logo: '/lovable-uploads/Forvis_Mazars.webp' },
    { name: 'Avalanche', logo: '/lovable-uploads/AVX.webp' },
    { name: 'Aléo', logo: '/lovable-uploads/aleo.webp' },
  ];

  const partners = [
    { name: 'Coinbase', logo: '/lovable-uploads/Coinbase.svg.webp' },
    { name: 'Blockchain Addict', logo: '/lovable-uploads/ba.webp' },
    { name: 'BFG', logo: '/lovable-uploads/BFG.webp' },
    { name: 'KPMG', logo: '/lovable-uploads/KPMG.webp' },
    { name: 'ADAN', logo: '/lovable-uploads/adan.svg' },
    { name: 'Paymium', logo: '/lovable-uploads/paymium.webp' },
    { name: 'Ledger', logo: '/lovable-uploads/Ledger.svg' },
    { name: 'VIVA TECH', logo: '/lovable-uploads/viva.webp' },
  ];

  const universities = [
    { name: 'IMTBS-TSP', logo: '/lovable-uploads/imtbstsp.webp' },
    { name: 'Polytechnique', logo: '/lovable-uploads/TSP.webp' },
    { name: 'ESCP', logo: '/lovable-uploads/ESCP.webp' },
    { name: 'HEH', logo: '/lovable-uploads/HEH.webp' },
    { name: 'EMLV', logo: '/lovable-uploads/emlv.webp' },
    { name: 'HULT London', logo: '/lovable-uploads/hult.webp' },
    { name: 'NEOMA', logo: '/lovable-uploads/NEOMA.webp' },
    { name: 'ESILV', logo: '/lovable-uploads/ESILV.webp' },
    { name: 'ESTIA', logo: '/lovable-uploads/estia.webp' },
    { name: 'Albert School', logo: '/lovable-uploads/albert.webp' },
    { name: 'Paris Dauphine', logo: '/lovable-uploads/dauphine.webp' },
    { name: 'ESSEC', logo: '/lovable-uploads/ESSEC.svg' },
  ];

  const media = [
    { name: 'Le Monde', logo: '/lovable-uploads/lemonde.svg' },
    { name: 'RTL', logo: '/lovable-uploads/rtl.webp' },
    { name: 'Figaro', logo: '/lovable-uploads/figaro.webp' },
    { name: 'Journal Du Net', logo: '/lovable-uploads/JDN.webp' },
    { name: 'BFM Crypto', logo: '/lovable-uploads/bfm.jpg' },
    { name: 'Journal du Geek', logo: '/lovable-uploads/JDG.webp' },
    { name: '20 minutes', logo: '/lovable-uploads/20.webp' },
    { name: 'Journal du coin', logo: '/lovable-uploads/journalducoin.webp' },
    { name: 'Cryptoast', logo: '/lovable-uploads/cryptoast.webp' },
    { name: 'Bitcoin.fr', logo: '/lovable-uploads/bitcoinfr.webp' },
  ];

  // Helper to render a carousel for a given array
  const renderCarousel = (
    title: string,
    items: { name: string; logo: string }[],
    autoScrollSpeed: number
  ) => (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-white text-2xl md:text-3xl font-bold text-center mb-8">{title}</h3>
        <div className="relative">
          <Carousel opts={{ align: 'start', loop: true }} plugins={[AutoScroll({ speed: autoScrollSpeed, stopOnInteraction: false })]}>
            <CarouselContent>
              {items.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/4 basis-1/2">
                  <div className="flex items-center justify-center p-6 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-all duration-300 h-32">
                    <img
                      src={item.logo}
                      alt={item.name}
                      loading="lazy"
                      className="h-16 w-auto max-w-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );

  // Media carousel (autoplay)
  const renderMediaCarousel = (title: string, items: { name: string; logo: string }[], autoScrollSpeed: number) => (
    <section className="py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-white text-3xl font-bold text-center mb-12">{title}</h3>
        <div className="relative">
          <Carousel opts={{ align: 'start', loop: true }} plugins={[AutoScroll({ speed: autoScrollSpeed, stopOnInteraction: false })]}>
            <CarouselContent>
              {items.map((outlet, index) => (
                <CarouselItem key={index} className="md:basis-1/5 basis-1/2">
                  <div className="flex items-center justify-center p-6 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-all duration-300 h-32">
                    <img
                      src={outlet.logo}
                      alt={outlet.name}
                      loading="lazy"
                      className="h-16 w-auto max-w-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );

  return (
    <div className="overflow-x-hidden">
      {renderCarousel(t('sponsors.sponsors'), sponsors, 0.3)}
      {renderCarousel(t('sponsors.partners'), partners, 0.5)}
      {renderCarousel(t('sponsors.universities'), universities, 0.4)}
      {renderMediaCarousel(t('sponsors.media'), media, 0.6)}
    </div>
  );
};

export default SponsorsSection;
