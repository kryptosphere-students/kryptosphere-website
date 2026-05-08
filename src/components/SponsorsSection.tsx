import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from './ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';

type LogoItem = { name: string; logo: string; url?: string };

const SponsorsSection = () => {
  const { t } = useLanguage();

  const sponsors: LogoItem[] = [
    { name: 'BPI France',     logo: '/lovable-uploads/bpifrance.webp',      url: 'https://www.bpifrance.fr/' },
    { name: 'Bybit',          logo: '/lovable-uploads/bybit.svg',           url: 'https://www.bybit.eu/en-EU/' },
    { name: 'Ledger',         logo: '/lovable-uploads/Ledger.svg',          url: 'https://www.ledger.com/' },
    { name: 'KPMG',           logo: '/lovable-uploads/KPMG.webp',           url: 'https://kpmg.com/fr/fr.html' },
    { name: 'DELUBAC',        logo: '/lovable-uploads/delubac.svg',         url: 'https://www.delubac.com/' },
    { name: 'XRP',            logo: '/lovable-uploads/xrp.webp',            url: 'https://xrpl.org/' },
    { name: 'Forvis Mazars',  logo: '/lovable-uploads/Forvis_Mazars.webp',  url: 'https://www.forvismazars.com/group/en' },
    { name: 'Avalanche',      logo: '/lovable-uploads/AVX.webp',            url: 'https://www.avax.network/' },
    { name: 'Aléo',           logo: '/lovable-uploads/aleo.webp',           url: 'https://aleo.org/' },
  ];

  const partners: LogoItem[] = [
    { name: 'Coinbase',            logo: '/lovable-uploads/Coinbase.svg.webp',  url: 'https://www.coinbase.com/' },
    { name: 'BFG',                 logo: '/lovable-uploads/BFG.webp',           url: 'https://blockchainforgood.fr/' },
    { name: 'KPMG',                logo: '/lovable-uploads/KPMG.webp',          url: 'https://kpmg.com/fr/fr.html' },
    { name: 'ADAN',                logo: '/lovable-uploads/adan.svg',           url: 'https://www.adan.eu/' },
    { name: 'Paymium',             logo: '/lovable-uploads/paymium.png',        url: 'https://www.paymium.com/' },
    { name: 'Ledger',              logo: '/lovable-uploads/Ledger.svg',         url: 'https://www.ledger.com/' },
    { name: 'VIVA TECH',           logo: '/lovable-uploads/viva.webp',          url: 'https://vivatech.com/' },
    { name: 'Le Cercle du Coin',   logo: '/lovable-uploads/CDC.png',            url: 'https://lecercleducoin.fr/' },
    { name: 'BC Diploma',          logo: '/lovable-uploads/BCdiploma.png',      url: 'https://www.bcdiploma.com/fr' },
    { name: 'Ethereum France',     logo: '/lovable-uploads/ethFr.png',          url: 'https://www.ethereum-france.com/' },
    { name: 'Nordic Blockchain Association', logo: '/logos/partners/NBA-Logo-black.webp', url: 'https://www.nordicblockchain.com' },
  ];

  const universities: LogoItem[] = [
    { name: 'KRYPTOSPHERE IMTBS-TSP',       logo: '/lovable-uploads/imtbstsp.webp', url: 'https://www.imt-bs.eu/' },
    { name: 'KRYPTOSPHERE Polytechnique',   logo: '/lovable-uploads/TSP.webp',      url: 'https://www.polytechnique.edu/' },
    { name: 'KRYPTOSPHERE ESCP',            logo: '/lovable-uploads/ESCP.webp',     url: 'https://escp.eu/' },
    { name: 'KRYPTOSPHERE Sorbonne',        logo: '/lovable-uploads/Sorbonne.png',  url: 'https://www.sorbonne-universite.fr/' },
    { name: 'KRYPTOSPHERE IAE Lyon 3',        logo: '/lovable-uploads/IAE.png',     url: 'https://iae.univ-lyon3.fr/' },
    { name: 'KRYPTOSPHERE HEH',             logo: '/lovable-uploads/HEH.webp',      url: 'https://www.heh.be/' },
    { name: 'KRYPTOSPHERE HULT London',     logo: '/lovable-uploads/hult.webp',     url: 'https://www.hult.edu/' },
    { name: 'KRYPTOSPHERE NEOMA',           logo: '/lovable-uploads/NEOMA.webp',    url: 'https://neoma-bs.com/' },

    { name: 'KRYPTOSPHERE ESTIA',           logo: '/lovable-uploads/estia.webp',    url: 'https://www.estia.fr/' },
    { name: 'KRYPTOSPHERE Albert School',   logo: '/lovable-uploads/albert.png',    url: 'https://www.albertschool.com/' },
    { name: 'KRYPTOSPHERE Paris Dauphine',  logo: '/lovable-uploads/dauphine.webp', url: 'https://dauphine.psl.eu/' },
    { name: 'KRYPTOSPHERE ESSEC',           logo: '/lovable-uploads/ESSEC.svg',     url: 'https://www.essec.edu/' },
    { name: 'KRYPTOSPHERE ESGI',            logo: '/lovable-uploads/ESGI.jpg',      url: 'https://www.esgi.fr/' },
    { name: 'KRYPTOSPHERE IMT Atlantique',  logo: '/lovable-uploads/ITMAtlantique.png',      url: 'https://www.imt-atlantique.fr/' },
    { name: 'KRYPTOSPHERE ENSIIE',  logo: '/lovable-uploads/ENSIIE.png',      url: 'https://www.ensiie.fr/' },
    { name: 'KRYPTOSPHERE EPITA',  logo: '/lovable-uploads/EPITA.png',      url: 'https://www.epita.fr/' },
    { name: 'KRYPTOSPHERE IESEG',  logo: '/lovable-uploads/IESEG.png',      url: 'https://www.ieseg.fr/' },
    { name: 'KRYPTOSPHERE GEMA',  logo: '/lovable-uploads/GEMA.png',      url: 'https://www.gema-business-school.fr/' },
    { name: 'KRYPTOSPHERE Sciences Politiques',  logo: '/lovable-uploads/SCPO.png',      url: 'https://www.sciencespo.fr/' },
    { name: 'KRYPTOSPHERE INSA Lyon',  logo: '/lovable-uploads/INSA.png',      url: 'https://www.insa-lyon.fr/' },
  ];

  const media: LogoItem[] = [
    { name: 'Le Monde',          logo: '/lovable-uploads/lemonde.svg',        url: 'http://archive.today/cjoUp' },
    { name: 'RTL',               logo: '/lovable-uploads/rtl.webp',           url: 'https://www.dailymotion.com/video/x80m1r5?start=615' },
    { name: 'Figaro',            logo: '/lovable-uploads/figaro.webp',        url: 'https://www.facebook.com/KryptosphereOfficial/posts/kryptosphere-dans-le-figaro-sur-le-myst%C3%A8re-de-satoshi-/930906535739344/' },
    { name: 'Journal Du Net',    logo: '/lovable-uploads/JDN.webp',           url: 'https://www.journaldunet.com/web3/crypto/1539797-donald-trump-et-les-cryptos-une-reserve-strategique-qui-souleve-des-soupcons/' },
    { name: 'BFM Crypto',        logo: '/lovable-uploads/bfm.jpg',            url: 'https://www.bfmtv.com/economie/replay-emissions/bfm-crypto-le-club/bfm-crypto-le-club-ethereum-a-l-honneur-a-cannes-02-07_EN-202507020520.html' },
    { name: 'Journal du Geek',   logo: '/lovable-uploads/JDG.webp',           url: 'https://www.journaldugeek.com/dossier/enfants-etudieront-cryptomonnaies-ecole/' },
    { name: '20 minutes',        logo: '/lovable-uploads/20.webp',            url: 'https://www.20minutes.fr/20-mint/4029027-20230322-kryptosphere-asso-etudiante-regne-web3' },
    { name: 'Journal du coin',   logo: '/lovable-uploads/journalducoin.webp', url: 'https://journalducoin.com/actualites/crypto-en-france-le-krypto-tour-revient-a-lyon-pour-sa-quatrieme-edition/' },
    { name: 'Cryptoast',         logo: '/lovable-uploads/cryptoast.webp',     url: 'https://cryptoast.fr/author/kryptosphere/' },
    { name: 'Bitcoin.fr',        logo: '/lovable-uploads/bitcoinfr.webp',     url: 'https://bitcoin.fr/le-reseau-dassociations-kryptosphere-sinternationalise/' },
    { name: 'ADN',                logo: '/lovable-uploads/ladn.png',          url: 'https://www.ladn.eu/entreprises-innovantes/crypto-quand-les-technologies-blockchain-shybrident-avec-la-finance/' },
    { name: 'Monde des Grandes Ecoles',                logo: '/lovable-uploads/MGEU.webp',                  url: 'https://www.mondedesgrandesecoles.fr/kryptosphere-lassociation-etudiante-pionniere-de-la-frenchtech/' },

  ];

  // Carte logo : cliquable si `url` existe, sinon simple bloc
  const LogoCard = ({ name, logo, url }: LogoItem) => {
    const content = (
      <div className="flex items-center justify-center p-6 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-all duration-300 h-32">
        <img
          src={logo}
          alt={name}
          loading="lazy"
          decoding="async"
          width={256}
          height={64}
          className="h-16 w-auto max-w-full object-contain"
        />
      </div>
    );

    return url ? (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visiter le site de ${name}`}
        title={name}
        className="block"
      >
        {content}
      </a>
    ) : (
      <div className="block" title={name} aria-label={name}>
        {content}
      </div>
    );
  };

  // Helper générique pour un carrousel
  const renderCarousel = (
    title: string,
    items: LogoItem[],
    autoScrollSpeed: number
  ) => (
    <section className="py-12" style={{ contentVisibility: 'auto', containIntrinsicSize: '800px' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-white text-2xl md:text-3xl font-bold text-center mb-8">{title}</h3>
        <div className="relative">
          <Carousel
            opts={{ align: 'start', loop: true }}
            plugins={[AutoScroll({ speed: autoScrollSpeed, stopOnInteraction: false })]}
          >
            <CarouselContent>
              {items.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/4 basis-1/2">
                  <LogoCard {...item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );

  // Carrousel médias (légèrement différent en largeur des items)
  const renderMediaCarousel = (
    title: string,
    items: LogoItem[],
    autoScrollSpeed: number
  ) => (
    <section className="py-16 border-t border-slate-800" style={{ contentVisibility: 'auto', containIntrinsicSize: '700px' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-white text-3xl font-bold text-center mb-12">{title}</h3>
        <div className="relative">
          <Carousel
            opts={{ align: 'start', loop: true }}
            plugins={[AutoScroll({ speed: autoScrollSpeed, stopOnInteraction: false })]}
          >
            <CarouselContent>
              {items.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/5 basis-1/2">
                  <LogoCard {...item} />
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
