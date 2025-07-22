import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Users, Video, Calendar, Star, Ticket, Image, Globe, Linkedin, Twitter } from 'lucide-react';
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
        { label: t('kryptotour.stats.participants') || 'Participants', value: '1000+' },
        { label: t('kryptotour.stats.speakers') || 'Speakers', value: '40+' },
        { label: t('kryptotour.stats.partners') || 'Partenaires', value: '35+' },
        { label: t('kryptotour.stats.booths') || 'Stands', value: '30' },
    ];
    const formatImages = Array(5).fill(0);
    const speakers = [
        {
            name: "Owen Simonin (Hasheur)",
            role: "Fondateur & CEO at Meria",
            img: "/krypto-tour/speakers/osimonin.webp",
            linkedin: "https://www.linkedin.com/in/owensimonin/",
            twitter: "https://x.com/powerhasheur",
        },
        {
            name: "Quentin Werle",
            role: "Head of Portfolio Management at 6Monks",
            img: "/krypto-tour/speakers/qwerle.webp",
            linkedin: "https://www.linkedin.com/in/quentin-werle/",
            twitter: "https://x.com/quentin_werle",
        },
        {
            name: "David Bchiri",
            role: "President at XRPL Commons",
            img: "/krypto-tour/speakers/dbchiri.webp",
            linkedin: "https://www.linkedin.com/in/davidbchiri/",
            twitter: "",
        },
        {
            name: "Laurent Ovion",
            role: "Head of Innovation & Crypto chez DLPK, vice president ADAN",
            img: "/krypto-tour/speakers/lovion.webp",
            linkedin: "https://www.linkedin.com/in/laurentovion/",
            twitter: "",
        },
        {
            name: "Claire Balva",
            role: "VP Stratégie Deblock",
            img: "/krypto-tour/speakers/cbalva.webp",
            linkedin: "https://www.linkedin.com/in/clairebalva/",
            twitter: "https://x.com/clairebalva",
        },
        {
            name: "Thibaut Boutrou",
            role: "COO et Co-Fondateur de Meria",
            img: "/krypto-tour/speakers/tboutrou.webp",
            linkedin: "https://www.linkedin.com/in/thibaut-boutrou/",
            twitter: "https://x.com/thibaut_boutrou",
        },
        {
            name: "Maxime Gay",
            role: "CEO & Co-Founder - SiBorg Labs",
            img: "/krypto-tour/speakers/mgay.webp",
            linkedin: "https://www.linkedin.com/in/maxime-gay-world/",
            twitter: "https://x.com/MaxMartelo",
        },
        {
            name: "Florent Trepo",
            role: "co-fondateur AJF Gestion privée",
            img: "/krypto-tour/speakers/ftrepo.webp",
            linkedin: "https://www.linkedin.com/in/trepoflorent/",
            twitter: "https://x.com/florenttrepo",
        },
        {
            name: "Adli Takkal Bataille",
            role: "Usual, DEO",
            img: "/krypto-tour/speakers/adli.webp",
            linkedin: "https://www.linkedin.com/in/adlitb/",
            twitter: "https://x.com/AdliTB",
        },
        {
            name: "Pudgy",
            role: "Pudgy Penguins",
            img: "/krypto-tour/speakers/pudgy.webp",
            linkedin: "https://www.linkedin.com/company/pudgy-penguins/posts/?feedView=all",
            twitter: "https://x.com/pudgypenguins",
        },
        {
            name: "Addy",
            role: "Web3 Developer",
            img: "/krypto-tour/speakers/addy.webp",
            linkedin: "",
            twitter: "https://x.com/Addy_8x",
        },
        {
            name: "Plus d'intervenants à venir",
            role: ". . .",
            img: "/krypto-tour/speakers/placeholder.webp",
            linkedin: "",
            twitter: "",
        },
    ];
    const sponsors = Array(8).fill({ name: 'Sponsor', img: '/images/placeholder.webp' });
    const mediaPartners = [
        { name: 'BFM Business', img: '/krypto-tour/medias/bfm.svg', url: 'https://www.bfmtv.com/economie/' },
        { name: 'BFM Crypto', img: '/krypto-tour/medias/bfmcrypto.webp', url: 'https://www.bfmtv.com/crypto/' },
        { name: 'Cryptoast', img: '/krypto-tour/medias/Cryptoast.webp', url: 'https://cryptoast.fr/' },
        { name: 'Journal Du Coin', img: '/krypto-tour/medias/jdc.webp', url: 'https://journalducoin.com/' },
        { name: 'Crypto Daily', img: '/krypto-tour/medias/cryptodaily.webp', url: 'https://x.com/LeCryptoDaily' },
        { name: 'France Cryptos', img: '/krypto-tour/medias/francecryptos.webp', url: 'https://francecryptos.fr/' },
        { name: 'Blockchain Addict', img: '/krypto-tour/medias/ba.webp', url: 'https://blockchainaddict.fr/' },
        { name: 'Bein crypto', img: '/krypto-tour/medias/beincrypto.webp', url: 'https://fr.beincrypto.com/' },
        { name: 'Coin Telegraph', img: '/krypto-tour/medias/cointelegraph.svg', url: 'https://cointelegraph.com/' },
        { name: 'GRM Web3', img: '/krypto-tour/medias/grm.webp', url: 'https://x.com/GRM_Web3?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' },
    ];

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
                        {t('kryptotour.date') || '11 octobre 2025 · Lyon'}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-red-500 via-red-400 to-yellow-400 bg-clip-text text-transparent">
                        {t('kryptotour.title') || 'KRYPTO-TOUR LYON'}
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
                        {t('kryptotour.subtitle') || 'Lancé en 2022, le KRYPTO-TOUR est l\'événement phare de KRYPTOSPHERE® pour démocratiser la blockchain en France. Rendez-vous le 11 octobre 2025 à Lyon, pour une journée de conférences, tables rondes et expositions.'}
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
                            title="KRYPTO-TOUR Lyon Aftermovie"
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
                    <h2 className="text-3xl font-bold text-center mb-6 text-red-400">{t('kryptotour.format.title') || 'Le format'}</h2>
                    <p className="text-slate-300 text-center max-w-4xl mx-auto mb-8">
                        {t('kryptotour.format.description') || 'Rejoignez la communauté blockchain française au KRYPTO-TOUR, l\'événement phare de KRYPTOSPHERE®, qui depuis 2022 a démocratisé les technologies Web3 au-delà de Paris. Après deux éditions à Marseille et une première lyonnaise ayant réuni plus de 500 participants, le KRYPTO-TOUR revient à Lyon le 11 octobre 2025 pour une 4ᵉ édition encore plus ambitieuse.'}
                    </p>
                    {/* Lyon Gallery Section */}
                    <section className="py-8 px-6">
                        <div className="max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    '/antennes/lyon/iaelyonGallery2.webp',
                                    '/antennes/lyon/iaelyonGallery6.webp',
                                    'https://www.univ-lyon3.fr/medias/photo/kryptotour_1732016056202-jpg',
                                ].map((img, i) => (
                                    <div key={i} className="rounded-2xl overflow-hidden shadow-lg">
                                        <img
                                            src={img}
                                            alt={`Lyon gallery ${i + 1}`}
                                            className="w-full h-64 object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <p className="text-slate-400 text-center max-w-4xl mx-auto mb-8 text-lg">
                        {t('kryptotour.format.description2') || 'Conférences, tables rondes, keynotes et stands : une journée pour connecter les mondes de la finance traditionnelle et du Web3, créer des synergies concrètes et comprendre les enjeux d\'un secteur en pleine transformation. Ne ratez pas l\'événement où l\'écosystème français se rencontre, débat et construit l\'avenir de la blockchain.'}
                    </p>
                </div>
            </section>

            {/* Speakers/Guests Grid */}
            <section className="py-8 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-red-500 via-red-400 to-yellow-400 bg-clip-text text-transparent">{t('kryptotour.speakers.title') || 'Speakers'}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                        {speakers.map((sp, i) => (
                            <div key={i} className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-4 flex flex-col items-center h-full">
                                <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-700 mb-3 flex items-center justify-center">
                                    <img
                                        src={sp.img}
                                        alt={sp.name}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-blue-400 font-bold text-center">{sp.name}</div>
                                <div className="text-slate-400 text-xs text-center mb-2">{sp.role}</div>
                                <div className="flex-1" />
                                <div className="flex justify-center gap-2 mt-auto pt-2">
                                    {sp.linkedin && (
                                        <a href={sp.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full bg-blue-700/80 hover:bg-blue-700 text-white p-2 transition-colors" title="LinkedIn">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    )}
                                    {sp.twitter && (
                                        <a href={sp.twitter} target="_blank" rel="noopener noreferrer" className="rounded-full bg-blue-400/80 hover:bg-blue-400 text-white p-2 transition-colors" title="Twitter">
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* More coming soon card centered below the grid */}
                    {/* <div className="flex justify-center mt-6">
                        <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 flex flex-col items-center justify-center w-64 h-64 shadow-lg">
                            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-400/80 to-purple-400/80 mb-4 flex items-center justify-center mx-auto">
                                <span className="text-5xl text-white font-bold">...</span>
                            </div>
                            <div className="text-white font-extrabold text-center text-xl italic mt-2 w-full drop-shadow-lg">
                                Plus d'intervenants à venir
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>

            {/* Sponsors Section */}
            <section className="py-8 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-red-500 via-red-400 to-yellow-400 bg-clip-text text-transparent">{t('kryptotour.sponsors.title') || 'Sponsors'}</h2>

                    {/* Diamond Tier - Coming Soon */}
                    <div className="mb-12">
                        <h3 className="text-xl font-semibold text-center mb-6 text-cyan-400 flex items-center justify-center gap-2">
                            <Star className="w-5 h-5" />
                            {t('kryptotour.sponsors.diamond') || 'Diamond'}
                        </h3>
                        <div className="w-full">
                            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-600/10 rounded-2xl border-2 border-cyan-500/30 p-12 flex items-center justify-center">
                                <div className="text-center">
                                    <Star className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                                    <div className="text-cyan-400 font-semibold text-lg">{t('kryptotour.sponsors.comingSoon') || 'Coming Soon'}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gold Tier */}
                    <div className="mb-12">
                        <h3 className="text-xl font-semibold text-center mb-6 text-yellow-400 flex items-center justify-center gap-2">
                            <Star className="w-5 h-5" />
                            {t('kryptotour.sponsors.gold') || 'Gold'}
                        </h3>
                        <div className="grid grid-cols-3 gap-8">
                            {[
                                { img: '/krypto-tour/sponsors/ajf.webp', url: 'https://ajf-gp.com/', name: 'AJF Gestion Privée' },
                                { img: '/krypto-tour/sponsors/avalanche.webp', url: 'https://www.avax.network/', name: 'Avalanche' },
                                { img: '/krypto-tour/sponsors/fc.webp', url: 'https://x.com/FranceCryptos', name: 'France Cryptos' }
                            ].map((sponsor, i) => (
                                <a
                                    key={i}
                                    href={sponsor.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gradient-to-br from-yellow-900/20 to-yellow-600/10 rounded-2xl border-2 border-yellow-500/30 p-8 flex items-center justify-center hover:border-yellow-400/50 transition-all duration-300 h-40 md:h-48 group"
                                    title={sponsor.name}
                                >
                                    <img src={sponsor.img} alt={`${sponsor.name} Logo`} loading="lazy" className="w-full h-full max-h-24 md:max-h-28 object-contain group-hover:scale-105 transition-transform duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Silver Tier */}
                    <div className="mb-12">
                        <h3 className="text-xl font-semibold text-center mb-6 text-gray-400 flex items-center justify-center gap-2">
                            <Star className="w-5 h-5" />
                            {t('kryptotour.sponsors.silver') || 'Silver'}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { img: '/krypto-tour/sponsors/6monks.webp', url: 'https://6m.lu/', name: '6Monks' },
                                { img: '/krypto-tour/sponsors/alyra.webp', url: 'https://www.alyra.fr/', name: 'ALYRA' },
                                { img: '/krypto-tour/sponsors/commons.webp', url: 'https://www.xrpl-commons.org/', name: 'XRPL Commons' },
                                { img: '/krypto-tour/sponsors/veiga.webp', url: 'https://www.veiga-management.com/', name: 'Veiga Management' },
                                { img: '/krypto-tour/sponsors/meria.webp', url: 'https://www.meria.com/?__cf_chl_rt_tk=coMMdm.WTYsaW2Dj2W8xZj8P6oJlrmuCvZtOSnj90bc-1753186731-1.0.1.1-.ye_2PS1SIQgS2dm6swqleXNXN86_6p1qfe4QSu6Lbg', name: 'Meria' },
                                { img: '/krypto-tour/sponsors/tabo.webp', url: 'https://x.com/cryptotaboo_xyz', name: 'Crypto Taboo' },
                                { img: '/krypto-tour/sponsors/pudgy.webp', url: 'https://pudgypenguins.com/', name: 'Pudgy Penguins' }
                            ].map((sponsor, i) => (
                                <a
                                    key={i}
                                    href={sponsor.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gradient-to-br from-gray-800/20 to-gray-600/10 rounded-xl border-2 border-gray-500/30 p-6 flex items-center justify-center hover:border-gray-400/50 transition-all duration-300 h-32 md:h-36 group"
                                    title={sponsor.name}
                                >
                                    <img src={sponsor.img} alt={`${sponsor.name} Logo`} loading="lazy" className="w-full h-full max-h-20 md:max-h-24 object-contain group-hover:scale-105 transition-transform duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Bronze Tier */}
                    <div>
                        <h3 className="text-xl font-semibold text-center mb-6 text-orange-400 flex items-center justify-center gap-2">
                            <Star className="w-5 h-5" />
                            {t('kryptotour.sponsors.bronze') || 'Bronze'}
                        </h3>
                        <div className="grid grid-cols-3 gap-6">
                            {[
                                { img: '/krypto-tour/sponsors/shelters.svg', url: 'https://www.shelters.finance/fr/', name: 'Shelters' },
                                { img: '/krypto-tour/sponsors/lima.webp', url: 'https://limaprotection.com/fr', name: 'Lima Protection' },
                                { img: '/krypto-tour/sponsors/venalabs.webp', url: 'https://www.venalabs.com/fr', name: 'VenaLabs' }
                            ].map((sponsor, i) => (
                                <a
                                    key={i}
                                    href={sponsor.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gradient-to-br from-orange-900/20 to-orange-600/10 rounded-xl border-2 border-orange-500/30 p-4 flex items-center justify-center hover:border-orange-400/50 transition-all duration-300 h-28 md:h-32 group"
                                    title={sponsor.name}
                                >
                                    <img src={sponsor.img} alt={`${sponsor.name} Logo`} loading="lazy" className="w-full h-full max-h-16 md:max-h-20 object-contain group-hover:scale-105 transition-transform duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Ticketing Widget */}
            <section className="py-8 px-6">
                <div className="max-w-5xl mx-auto w-full">
                    <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-red-500 via-red-400 to-yellow-400 bg-clip-text text-transparent">{t('kryptotour.ticketing.title') || 'Billetterie'}</h2>
                    <div className="flex justify-center">
                        <iframe
                            src="https://lu.ma/embed/event/evt-HB4S4mFe3qOj5eE/simple"
                            width="600"
                            height="1150"
                            frameBorder="0"
                            style={{ border: '1px solid #bfcbda88', borderRadius: '4px', width: '100%', maxWidth: '600px', minHeight: '700px' }}
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex={0}
                            title="Billetterie Luma"
                        />
                    </div>
                </div>
            </section>

            {/* Community Partners */}
            <section className="py-8 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-6 text-red-400">{t('kryptotour.communityPartners.title') || 'Partenaires communautaires'}</h2>
                    <div className="bg-slate-700/80 backdrop-blur-lg rounded-2xl p-4 mb-8 border border-slate-600/40">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { img: '/krypto-tour/community-partner/tum.webp', url: 'https://www.tum-blockchain.com/', name: 'TUM Blockchain' },
                                { img: '/krypto-tour/community-partner/stAndrews.webp', url: 'https://www.linkedin.com/company/uni-st-andrews-blockchain-society/posts/?feedView=all', name: 'St Andrews Blockchain Society' },
                                { img: '/krypto-tour/community-partner/poc.webp', url: 'https://www.linkedin.com/company/pocinnovation/posts/?feedView=all', name: 'POC Innovation' },
                                { img: '/krypto-tour/community-partner/dev3pack.webp', url: 'https://dev3pack.xyz/', name: 'DEV3Pack' },
                                { img: '/krypto-tour/community-partner/bsa.webp', url: 'https://www.epfl.ch/fr/', name: 'EPFL' },
                                { img: '/krypto-tour/community-partner/b@b.webp', url: 'https://blockchain.studentorg.berkeley.edu/', name: 'Blockchain at Berkeley' }
                            ].map((partner, i) => (
                                <a
                                    key={i}
                                    href={partner.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full h-full p-4 hover:bg-slate-600/20 rounded-lg transition-colors duration-300"
                                    title={partner.name}
                                >
                                    <img
                                        src={partner.img}
                                        alt={`${partner.name} Logo`}
                                        loading="lazy"
                                        className="max-h-20 w-auto object-contain mx-auto"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Media Partners */}
            <section className="py-8 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-6 text-red-400">{t('kryptotour.mediaPartners.title') || 'Partenaire média'}</h2>
                    <div className="bg-slate-700/80 backdrop-blur-lg rounded-2xl p-4 mb-8 border border-slate-600/40">
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                            {mediaPartners.map((mp, i) => (
                                <a
                                    key={i}
                                    href={mp.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full h-full p-2 hover:bg-slate-600/20 rounded-lg transition-colors duration-300"
                                    title={mp.name}
                                >
                                    <img
                                        src={mp.img}
                                        alt={mp.name}
                                        loading="lazy"
                                        className="max-h-24 w-auto object-contain mx-auto"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Address & Map */}
            <section className="py-8 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4 text-red-400">{t('kryptotour.address.title') || 'Adresse'}</h2>
                    <div className="text-slate-300 mb-4">{t('kryptotour.address.location') || '70 Quai Perrache, 69002 Lyon, France'}</div>
                    <div className="h-96 w-full rounded-2xl overflow-hidden border-2 border-blue-400/30 bg-slate-800/40">
                        <MapContainer
                            center={[45.742649, 4.82525]}
                            zoom={12}
                            scrollWheelZoom={false}
                            className="h-full w-full"
                            style={{ height: '100%', width: '100%' }}
                        >
                            <TileLayer
                                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                            />
                            <Marker position={[45.742649, 4.82525]}>
                                <Popup>
                                    <strong>Lyon, France</strong><br />KRYPTO-TOUR 2025
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