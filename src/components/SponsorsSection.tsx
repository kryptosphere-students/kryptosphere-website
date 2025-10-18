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
    { name: 'BPI France',     logo: '/lovable-uploads/bpifrance.webp',      url: 'https://lehub.bpifrance.fr/lookup-du-hub-web-crypto-revolution-financiere/' },
    { name: 'Bybit',          logo: '/lovable-uploads/bybit.svg',           url: 'https://x.com/KRYPTOSPHERE_/status/1965671583592132946' },
    { name: 'Ledger',         logo: '/lovable-uploads/Ledger.svg',          url: 'https://x.com/KRYPTOSPHERE_/status/1892954418813046980' },
    { name: 'KPMG',           logo: '/lovable-uploads/KPMG.webp',           url: 'https://x.com/BlockchainPartn/status/1602257588934041603' },
    { name: 'DELUBAC',        logo: '/lovable-uploads/delubac.svg',         url: 'https://www.linkedin.com/posts/chaire-fintech-dauphine_etf-crypto-la-nouvelle-%C3%A8re-de-la-finance-activity-7309837600414941184-e144/?originalSubdomain=fr' },
    { name: 'XRP',            logo: '/lovable-uploads/xrp.webp',            url: 'https://www.esilv.fr/en/ripple-x-easya-hackathon-in-singapore-esilv-students-win-first-place-on-the-exploration-track/' },
    { name: 'Forvis Mazars',  logo: '/lovable-uploads/Forvis_Mazars.webp',  url: 'https://dauphine.psl.eu/dauphine/media-et-communication/article/hackindau-hackathon-blockchain-2024-de-la-chaire-fintech-et-kryptosphere' },
    { name: 'Avalanche',      logo: '/lovable-uploads/AVX.webp',            url: 'https://x.com/KRYPTOSPHERE_/status/1975093667661742431' },
    { name: 'Aléo',           logo: '/lovable-uploads/aleo.webp',           url: 'https://luma.com/i25xc35d?locale=fr' },
  ];

  const partners: LogoItem[] = [
    { name: 'Coinbase',            logo: '/lovable-uploads/Coinbase.svg.webp', url: 'https://www.coinbase.com/' },
    { name: 'Blockchain Addict',   logo: '/lovable-uploads/ba.webp',            url: 'https://blockchainaddict.fr/krypto-tour-lyon-2025/' },
    { name: 'BFG',                 logo: '/lovable-uploads/BFG.webp',           url: 'https://www.linkedin.com/posts/blockchain-for-good-fr_table-ronde-lidentit%C3%A9-d%C3%A9centralis%C3%A9e-activity-7022858702210674688-GrcY/' },
    { name: 'KPMG',                logo: '/lovable-uploads/KPMG.webp',          url: 'https://x.com/BlockchainPartn/status/1602257588934041603' },
    { name: 'ADAN',                logo: '/lovable-uploads/adan.svg',           url: 'https://bitcoin.fr/kryptosphere-stablecoins-et-bitcoin/' },
    { name: 'Paymium',             logo: '/lovable-uploads/paymium.png',       url: 'https://luma.com/d25vso23' },
    { name: 'Ledger',              logo: '/lovable-uploads/Ledger.svg',         url: 'https://www.linkedin.com/posts/kryptosphere_kryptosphere-x-ledger-nft-paris-side-activity-7294664424424960000-KD2-/?originalSubdomain=fr' },
    { name: 'VIVA TECH',           logo: '/lovable-uploads/viva.webp',          url: 'https://www.esilv.fr/viva-technology-2025-lesilv-au-coeur-des-grands-enjeux-technologiques/' },
    { name: 'Le Cercle du Coin',   logo: '/lovable-uploads/CDC.png',            url: 'https://lecercleducoin.fr/' },
  ];

  const universities: LogoItem[] = [
    { name: 'KRYPTOSPHERE IMTBS-TSP',       logo: '/lovable-uploads/imtbstsp.webp', url: 'https://bde-imtbs-tsp.fr/en/associative/bde/kryptosphere' }, // IMT-BS + Télécom SudParis (lien à préciser)
    { name: 'KRYPTOSPHERE Polytechnique',   logo: '/lovable-uploads/TSP.webp',      url: 'https://www.telecom-sudparis.eu/evenement/seminaire-blockchain-pragma/' },
    { name: 'KRYPTOSPHERE ESCP',            logo: '/lovable-uploads/ESCP.webp',     url: 'https://campuslife.escp.eu/club_signup?group_type=&search=kryptosphere&category_tags=&order=name_asc' },
    { name: 'KRYPTOSPHERE Sorbonne',        logo: '/lovable-uploads/Sorbonne.png',     url: 'https://sciences.sorbonne-universite.fr/associations/kryptosphere-jussieu' },
    { name: 'KRYPTOSPHERE HEH',             logo: '/lovable-uploads/HEH.webp',      url: 'https://www.instagram.com/ks_belgium/' },
    { name: 'KRYPTOSPHERE EMLV',            logo: '/lovable-uploads/emlv.webp',     url: 'https://www.emlv.fr/' },
    { name: 'KRYPTOSPHERE HULT London',     logo: '/lovable-uploads/hult.webp',     url: 'https://www.instagram.com/kryptospherelondon/' },
    { name: 'KRYPTOSPHERE NEOMA',           logo: '/lovable-uploads/NEOMA.webp',    url: 'https://www.instagram.com/kryptosphereneoma/' },
    { name: 'KRYPTOSPHERE ESILV',           logo: '/lovable-uploads/ESILV.webp',    url: 'https://www.devinci.fr/vie-etudiante/associations-etudiantes/kryptosphere-devinci/' },
    { name: 'KRYPTOSPHERE ESTIA',           logo: '/lovable-uploads/estia.webp',    url: 'https://www.estia.fr/en/campus-estia/estia-campus-associations/' },
    { name: 'KRYPTOSPHERE Albert School',   logo: '/lovable-uploads/albert.png',    url: 'https://www.linkedin.com/posts/kryptosphere_kryptosphere-d%C3%A9barque-%C3%A0-albert-school-et-activity-7371527985356492800-GfNU/?originalSubdomain=fr' },
    { name: 'KRYPTOSPHERE Paris Dauphine',  logo: '/lovable-uploads/dauphine.webp', url: 'https://dauphine.psl.eu/dauphine/media-et-communication/article/hackindau-hackathon-blockchain-2024-de-la-chaire-fintech-et-kryptosphere' },
    { name: 'KRYPTOSPHERE ESSEC',           logo: '/lovable-uploads/ESSEC.svg',     url: 'https://www.instagram.com/kryptospheressec/?hl=en' },
    { name: 'KRYPTOSPHERE ESGI',            logo: '/lovable-uploads/ESGI.jpg',      url: 'hhttps://www.instagram.com/kryptosphereesgi/' },
    { name: 'KRYPTOSPHERE IAE Lyon 3',      logo: '/lovable-uploads/IAE.png',      url: 'https://iae.univ-lyon3.fr/bitcoin-blockchain-et-criminalite-decryptage-avec-kryptosphere-iaelyon' },
    { name: 'KRYPTOSPHERE IMT Atlantique',  logo: '/lovable-uploads/ITMAtlantique.png',      url: 'https://cryptoast.fr/evenements-crypto-web3-blockchain-nft/bitcoin-tour-kryptosphere-16-01-2025/' },
    { name: 'KRYPTOSPHERE ENSIIE',  logo: '/lovable-uploads/ENSIIE.png',      url: 'https://www.instagram.com/kryptosphere_ensiie/' },
    { name: 'KRYPTOSPHERE EPITA',  logo: '/lovable-uploads/EPITA.png',      url: 'https://www.instagram.com/kryptosphere_epita/' },
    { name: 'KRYPTOSPHERE IESEG',  logo: '/lovable-uploads/IESEG.png',      url: 'https://www.instagram.com/kryptosphere_ieseg/' },
    { name: 'KRYPTOSPHERE GEMA',  logo: '/lovable-uploads/GEMA.png',      url: 'https://www.instagram.com/kryptosphere_gema/?__d=1%252F' },
    { name: 'KRYPTOSPHERE Sciences Politiques',  logo: '/lovable-uploads/SCPO.png',      url: 'https://www.instagram.com/kryptosphere.scpo/' },  
    { name: 'KRYPTOSPHERE INSA Lyon',  logo: '/lovable-uploads/INSA.png',      url: 'https://portail.asso-insa-lyon.fr/association/304/print/' },  
  ];

  const media: LogoItem[] = [
    { name: 'Le Monde',          logo: '/lovable-uploads/lemonde.svg',        url: 'https://www.lemonde.fr/' },
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
