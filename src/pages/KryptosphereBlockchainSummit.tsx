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

const KryptosphereBlockchainSummit: React.FC = () => {
    const { t, tRaw } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const dataSubtitle = tRaw('kbs.subtitle');

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
            <Navigation />
            {/* Hero Section */}
            <section className="pt-32 pb-8 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-900/50 md:backdrop-blur-lg border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm mb-6">
                        <Calendar className="w-4 h-4" />
                        {t('kbs.date') + ' · ' + t('kbs.location') || '2 avril 2026 · Cannes'}
                    </div>
                    <div className='my-3'>
                        <h1 className="relative inline-block text-3xl md:text-5xl font-bold mb-4">
                            {/* Glow layer */}
                            <span
                                aria-hidden="true"
                                className="
                                pointer-events-none absolute inset-0
                                bg-white
                                bg-clip-text text-transparent
                                blur-2xl opacity-100
                                "
                            >
                                {t("kbs.title") || "KRYPTOSPHERE BLOCKCHAIN SUMMIT"}
                            </span>

                            {/* Texte principal */}
                            <span
                                className="
                                relative
                                bg-gradient-to-r from-red-300 via-yellow-200 to-teal-200
                                bg-clip-text text-transparent
                                "
                            >
                                {t("kbs.title") || "KRYPTOSPHERE BLOCKCHAIN SUMMIT"}
                            </span>
                        </h1>
                    </div>
                    <div className="w-2/5 h-1 bg-gradient-to-r from-red-400 to-teal-500 mx-auto mb-8"></div>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
                        {Array.isArray(dataSubtitle) ? dataSubtitle.map((line, index) => (
                            <span key={index} className="block mb-2">
                                {line}
                            </span>
                        )) : dataSubtitle as string}
                    </p>
                </div>
            </section>
            {/* Teasing Section */}
            {/*<section className="py-8 px-6">
            </section>*/}
            {/* Format Section */}
            {/*<section className="py-8 px-6">
            </section>*/}
            {/* Schedule Section */}
            <section className="py-8 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-300 via-yellow-200 to-teal-200 bg-clip-text text-transparent">
                        {t('kbs.schedule.title')}
                    </p>
                    <div className="w-1/5 h-1 bg-gradient-to-r from-red-400 to-teal-500 mx-auto mb-8"></div>
                </div>
            </section>
            {/* Speakers/Guests Section */}
            <section className="py-8 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-300 via-yellow-200 to-teal-200 bg-clip-text text-transparent">
                        {t('kbs.speakers.title')}
                    </p>
                    <div className="w-1/5 h-1 bg-gradient-to-r from-red-400 to-teal-500 mx-auto mb-8"></div>
                </div>
            </section>
            {/* Sponsors Section */}
            <section className="py-8 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-300 via-yellow-200 to-teal-200 bg-clip-text text-transparent">
                        {t('kbs.sponsors.title')}
                    </p>
                    <div className="w-1/5 h-1 bg-gradient-to-r from-red-400 to-teal-500 mx-auto mb-8"></div>
                </div>
            </section>
            {/* Ticketing Section */}
            <section className="py-8 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-300 via-yellow-200 to-teal-200 bg-clip-text text-transparent">
                        {t('kbs.ticketing.title')}
                    </p>
                    <div className="w-1/5 h-1 bg-gradient-to-r from-red-400 to-teal-500 mx-auto mb-8"></div>
                    <iframe
                        src="https://se.ro/events/kryptosphere-blockchain-summit-2026-cannes-france-1pqusn"
                        style={{ width: "100%", height: "600px", border: "0", borderRadius: "16px" }}
                    >
                    </iframe>
                </div>
            </section>
            {/* Address & Map Section*/}
            <Footer />
        </div>
    );
}

export default KryptosphereBlockchainSummit;