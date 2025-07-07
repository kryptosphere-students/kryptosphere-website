import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Users, Video, Calendar, Star, Ticket, Image, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const KryptoTour = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.weezevent.com/weez.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Placeholder data
  const stats = [
    { label: 'Participants', value: '1000+' },
    { label: 'Speakers', value: '40+' },
    { label: 'Partenaires', value: '35+' },
    { label: 'Médias', value: '30' },
  ];
  const formatImages = Array(5).fill(0);
  const speakers = Array(8).fill({ name: 'NOM Prénom', role: 'Intervenant / CEO', img: '/images/placeholder.webp' });
  const sponsors = Array(8).fill({ name: 'Sponsor', img: '/images/placeholder.webp' });
  const mediaPartners = Array(8).fill({ name: 'Media', img: '/images/placeholder.webp' });

  // Coordinates for Lyon
  const lyonAntenne = {
    coordinates: { lat: 45.75, lng: 4.85 },
    name: 'Lyon',
    school: 'Lyon',
    city: 'Lyon',
    country: 'France',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-900/50 backdrop-blur-lg border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm mb-6">
            <Calendar className="w-4 h-4" />
            11 octobre 2025 · Lyon
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            KRYPTOTOUR LYON
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
            Lancé en 2022, le KRYPTOTOUR est l'événement phare de KRYPTOSPHERE® pour démocratiser la blockchain en France. Rendez-vous le 11 octobre 2025 à Lyon, la métropole innovante, pour une journée de conférences, tables rondes et expositions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">{stat.value}</div>
                <div className="text-slate-300 text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aftermovie/YouTube Section */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="border-2 border-slate-400/30 bg-slate-800/40 aspect-video overflow-hidden w-full">
            <iframe
              src="https://www.youtube.com/embed/Ai1VoWrEqrM?autoplay=1&loop=1&playlist=Ai1VoWrEqrM&mute=1"
              title="KryptoTour Lyon Aftermovie"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full max-w-full max-h-full aspect-video"
              style={{ minHeight: '200px' }}
            />
          </div>
        </div>
      </section>

      {/* Format Section */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-red-400">Le format</h2>
          <p className="text-slate-300 text-justify max-w-4xl mx-auto mb-8">
            Rejoignez la communauté blockchain française au KRYPTOTOUR, l'événement phare de KRYPTOSPHERE®, qui depuis 2022 a démocratisé les technologies Web3 au-delà de Paris. Après deux éditions à Marseille et une première lyonnaise ayant réuni plus de 500 participants, le KRYPTOTOUR revient à Lyon le 11 octobre 2025 pour une 4ᵉ édition encore plus ambitieuse.
          </p>
          <div className="flex justify-center gap-4 mb-6">
            {formatImages.map((_, i) => (
              <div key={i} className="rounded-xl border-2 border-slate-400/30 bg-slate-800/40 w-28 h-20 flex items-center justify-center text-slate-400">Image</div>
            ))}
          </div>
          <p className="text-slate-400 text-center max-w-4xl mx-auto mb-8 text-lg">
            Conférences, tables rondes, keynotes et stands : une journée pour connecter les mondes de la finance traditionnelle et du Web3, créer des synergies concrètes et comprendre les enjeux d'un secteur en pleine transformation. <em>Ne ratez pas l'événement où l'écosystème français se rencontre, débat et construit l'avenir de la blockchain.</em>
          </p>
        </div>
      </section>

      {/* Speakers/Guests Grid */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {speakers.map((sp, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-4 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-700 mb-3 flex items-center justify-center">
                  <Image className="w-12 h-12 text-slate-400" />
                </div>
                <div className="text-blue-400 font-bold text-center">{sp.name}</div>
                <div className="text-slate-400 text-xs text-center">{sp.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">Sponsors</h2>
          
          {/* Diamond Tier - Coming Soon */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-center mb-6 text-cyan-400 flex items-center justify-center gap-2">
              <Star className="w-5 h-5" />
              Diamond
            </h3>
            <div className="w-full">
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-600/10 rounded-2xl border-2 border-cyan-500/30 p-12 flex items-center justify-center">
                <div className="text-center">
                  <Star className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <div className="text-cyan-400 font-semibold text-lg">Coming Soon</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Gold Tier */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-center mb-6 text-yellow-400 flex items-center justify-center gap-2">
              <Star className="w-5 h-5" />
              Gold
            </h3>
            <div className="grid grid-cols-2 gap-8">
              {['/krypto-tour/sponsors/ajf.webp', '/krypto-tour/sponsors/fc.webp'].map((img, i) => (
                <div key={i} className="bg-gradient-to-br from-yellow-900/20 to-yellow-600/10 rounded-2xl border-2 border-yellow-500/30 p-8 flex items-center justify-center hover:border-yellow-400/50 transition-all duration-300">
                  <img src={img} alt="Gold Sponsor Logo" loading="lazy" className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Silver Tier */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-400 flex items-center justify-center gap-2">
              <Star className="w-5 h-5" />
              Silver
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['/krypto-tour/sponsors/6monks.webp', '/krypto-tour/sponsors/alyra.webp', '/krypto-tour/sponsors/commons.webp', '/krypto-tour/sponsors/veiga.webp'].map((img, i) => (
                <div key={i} className="bg-gradient-to-br from-gray-800/20 to-gray-600/10 rounded-xl border-2 border-gray-500/30 p-6 flex items-center justify-center hover:border-gray-400/50 transition-all duration-300">
                  <img src={img} alt="Silver Sponsor Logo" loading="lazy" className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Bronze Tier */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-6 text-orange-400 flex items-center justify-center gap-2">
              <Star className="w-5 h-5" />
              Bronze
            </h3>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-orange-900/20 to-orange-600/10 rounded-xl border-2 border-orange-500/30 p-6 flex items-center justify-center hover:border-orange-400/50 transition-all duration-300">
                <img src="/krypto-tour/sponsors/shelters.svg" alt="Bronze Sponsor Logo" loading="lazy" className="w-full h-full max-w-[4rem] max-h-[4rem] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticketing Widget */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">Billetterie</h2>
          <div className="bg-slate-800/40 border-2 border-blue-400/30 w-full">
            <a
              title="Logiciel billetterie en ligne"
              href="https://widget.weezevent.com/ticket/E1354323/?code=37637&locale=fr-FR&width_auto=1&color_primary=0032FA"
              className="weezevent-widget-integration"
              data-src="https://widget.weezevent.com/ticket/E1354323/?code=37637&locale=fr-FR&width_auto=1&color_primary=0032FA"
              data-id="1354323"
              data-resize="1"
              data-width_auto="1"
              data-noscroll="0"
              data-use-container="yes"
              data-type="neo"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', width: '100%' }}
            >
              Billetterie Weezevent
            </a>
          </div>
        </div>
      </section>

      {/* Media Partners */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-red-400">Partenaire média</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {mediaPartners.map((mp, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-4 flex items-center justify-center">
                <Image className="w-16 h-16 text-slate-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address & Map */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-400">Adresse & maps</h2>
          <div className="text-slate-300 mb-4">Lyon, France — 11 octobre 2025</div>
          <div className="h-96 w-full rounded-2xl overflow-hidden border-2 border-blue-400/30 bg-slate-800/40">
            <MapContainer
              center={[45.75, 4.85]}
              zoom={12}
              scrollWheelZoom={false}
              className="h-full w-full"
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              />
              <Marker position={[45.75, 4.85]}>
                <Popup>
                  <strong>Lyon, France</strong><br />KryptoTour 2025
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KryptoTour; 