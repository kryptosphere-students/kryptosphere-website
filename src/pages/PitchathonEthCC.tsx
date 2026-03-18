import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, Star, Linkedin, Twitter, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { SpeakerCard } from "../components/kbs/SpeakerCard";
import { SponsorCard } from "../components/kbs/SponsorCard";
import  sponsorData  from "@/mocks/kbs/sponsorsData";
import { speakersData } from '@/mocks/kbs/speakersData';
import  {partnersData, communityPartnersData}  from '@/mocks/kbs/partnersData';
import { PartnerCard } from '@/components/kbs/PartnerCard';
import Carousel3D from '@/components/kbs/carouselTeasing';
import { carouselSlides } from '@/mocks/kbs/slidesCarouselDatas';
import { SeroEmbed } from '@/components/kbs/seroEmbed';

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const PitchathonEthCC: React.FC = () => {
    const { t, tRaw } = useLanguage();
    const programPath = t('pitchathon.pathProgram');
    const whyJoinList = [
        { title: t('pitchathon.whyJoin.point1.title'), content: t('pitchathon.whyJoin.point1.content') },
        { title: t('pitchathon.whyJoin.point2.title'), content: t('pitchathon.whyJoin.point2.content') }
    ];
    const speakers = speakersData;
    const sponsorsGold = sponsorData.filter(s => s.tier === 'gold');
    const sponsorsSilver = sponsorData.filter(s => s.tier === 'silver');
    const sponsorsBronze = sponsorData.filter(s => s.tier === 'bronze');
    const communityPartners = communityPartnersData;
    const partners = partnersData;
    const slides = carouselSlides;
    const seroContent = {
        warning: t('pitchathon.ticketing.seroWarning'),
        btn: t('pitchathon.ticketing.seroBtn'),
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Progressive reveal for heavy grids (speakers, sponsors)
        useEffect(() => {
            const elements = Array.from(document.querySelectorAll('.reveal-on-scroll')) as HTMLElement[];
            if (elements.length === 0) return;
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const el = entry.target as HTMLElement;
                            el.classList.remove('opacity-0', 'translate-y-2');
                            el.classList.add('opacity-100', 'translate-y-0');
                            observer.unobserve(el);
                        }
                    });
                },
                { rootMargin: '100px 0px', threshold: 0.05 }
            );
            elements.forEach((el) => observer.observe(el));
            return () => observer.disconnect();
        }, []);

    const dataSubtitle = tRaw('pitchathon.subtitle');

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white w-full" onContextMenu={(e) => e.preventDefault()}>
            <Navigation />
            {/* Hero Section */}
            <section className="pt-32 pb-4 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-900/50 md:backdrop-blur-lg border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm mb-6">
                        <Calendar className="w-4 h-4" />
                        {t('pitchathon.date') + ' · ' + t('pitchathon.location') || '2 avril 2026 · Cannes'}
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
                                {t("pitchathon.title") || "'KBS x EthCC[9] : Tomorrow is on-chain'"}
                            </span>

                            {/* Texte principal */}
                            <span
                                className="
                                relative
                                bg-gradient-to-r from-red-300 via-yellow-200 to-teal-200
                                bg-clip-text text-transparent
                                "
                            >
                                {t("pitchathon.title") || "'KBS x EthCC[9] : Tomorrow is on-chain'"}
                            </span>
                        </h1>
                    </div>
                    <div className="w-2/5 h-1 bg-gradient-to-r from-red-400 to-teal-500 mx-auto mb-8"></div>
                    <div className="flex justify-center items-center">
                        <img
                            src="/kbs/ksLogo.png"
                            alt="Kryptosphere logo"
                            className="h-[160px] md:h-[240px] w-auto mx-6 md:mx-14"
                        />
                        <div className="flex flex-col items-center mx-6 md:mx-14">
                            <img
                                src="/kbs/ethereum_logo_transparent_notrail_160w_15fps.apng"
                                alt="Ethereum logo"
                                className="h-[120px] md:h-[180px] w-auto "
                            />
                            <p className="text-4xl font-bold my-4 bg-gradient-to-r from-blue-500 via-blue-300 to-red-500 bg-clip-text text-transparent">
                                EthCC[9]
                            </p>
                        </div>
                    </div>
                    <p className="text-xl md:text-2xl font-bold my-4 bg-gradient-to-r from-red-300 via-yellow-200 to-teal-200 bg-clip-text text-transparent">
                        {t('pitchathon.tagline')}
                    </p>
                    <p className="text-lg text-slate-300 mx-auto w-full max-w-5xl leading-relaxed my-6">
                        {Array.isArray(dataSubtitle) ? dataSubtitle.map((line, index) => (
                            <span key={index} className="block mb-2">
                                {line}
                            </span>
                        )) : dataSubtitle as string}
                    </p>
                </div>
            </section>
            {/* Teasing Section */}
            <section className="py-3 px-6 md:block hidden" style={{ contentVisibility: 'auto', containIntrinsicSize: '600px' }}>
                <div className="max-w-7xl mx-auto text-center">
                     <Carousel3D items={slides} />
                </div>
            </section>
            {/* Schedule Section */}
            <section className="py-8 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-300 via-yellow-200 to-teal-200 bg-clip-text text-transparent">
                        {t('pitchathon.schedule.title')}
                    </p>
                    <div className="w-1/5 h-1 bg-gradient-to-r from-red-400 to-teal-500 mx-auto mb-8"></div>
                    <div className="bg-slate-800/80 md:backdrop-blur-lg rounded-2xl p-6 mb-8 border border-slate-600/40 reveal-on-scroll opacity-0 translate-y-2 transition-all duration-1000 will-change-transform" style={{ contain: 'paint' }}>
                        <div className="flex justify-center">
                            <img 
                                src={programPath} 
                                alt="KRYPTOSPHERE BLOCKCHAIN SUMMIT Planning" 
                                className="max-w-full h-auto rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 md:cursor-default md:hover:scale-100"
                                loading="lazy"
                                decoding="async"
                                width="1920"
                                height="1080"
                                sizes="100vw"
                                onClick={(e) => {
                                    if (window.innerWidth < 768) {
                                        e.preventDefault();
                                        const img = e.target as HTMLImageElement;
                                        const overlay = document.createElement('div');
                                        overlay.className = 'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50';
                                        
                                        const zoomedImg = document.createElement('img');
                                        zoomedImg.src = img.src;
                                        zoomedImg.alt = img.alt;
                                        zoomedImg.className = 'max-w-[95vw] max-h-[95vh] object-contain';
                                        
                                        overlay.appendChild(zoomedImg);
                                        document.body.appendChild(overlay);
                                        
                                        const closeZoom = () => {
                                            document.body.removeChild(overlay);
                                        };
                                        
                                        overlay.addEventListener('click', closeZoom);
                                        overlay.addEventListener('touchstart', closeZoom);
                                    }
                                }}
                                style={{ touchAction: 'manipulation' }}
                            />
                        </div>
                        <div className="text-center mt-2 text-sm text-slate-400 md:hidden">
                            Tap image to zoom
                        </div>
                    </div>
                </div>
            </section>
            {/* Ticketing Section */}
            <section className="py-8 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-300 via-yellow-200 to-teal-200 bg-clip-text text-transparent">
                        {t('pitchathon.ticketing.title')}
                    </p>
                    <div className="w-1/5 h-1 bg-gradient-to-r from-red-400 to-teal-500 mx-auto mb-8"></div>
                    <div className="mt-4 flex items-start text-lg md:text-xl font-bold text-red-400">
                        <div
                            className="
                            mt-[1px] shrink-0
                            w-10 aspect-square rounded-full
                            bg-red-400/15 ring-1 ring-red-400/75
                            grid place-items-center
                            animate-pulse
                            "
                            aria-hidden="true"
                        >
                            <AlertTriangle className="w-5 h-5 text-red-400" strokeWidth={2.2} />
                        </div>
                        <p className='mr-3'>{t('pitchathon.ticketing.warning')}</p>
                    </div>
                    <a
                        href="https://ethcc.io/tickets"
                        target="_blank"
                        rel="noreferrer"
                        className="
                            inline-flex items-center gap-3
                            rounded-xl bg-white px-4 py-2.5
                            my-5
                            font-semibold text-slate-900
                            ring-1 ring-black/10 shadow-sm
                            transition
                            hover:shadow-md hover:ring-black/20
                            active:scale-[0.98]
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70
                        "
                        aria-label={t('pitchathon.ticketing.btnOfficial')}
                        >
                        <img
                            src={"/kbs/ethcc9.png"}
                            alt="EthCC[9]"
                            className="h-6 w-6 object-contain"
                            draggable={false}
                        />
                        <span>{t('pitchathon.ticketing.btnOfficial')}</span>
                        </a>
                    <SeroEmbed content={seroContent} />
                </div>
            </section>
            {/* Pitchathon Registration Section */}
            <section className="py-8 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-300 via-yellow-200 to-teal-200 bg-clip-text text-transparent">
                        {t('pitchathon.registration.title')}
                    </p>
                    <div className="w-1/5 h-1 bg-gradient-to-r from-red-400 to-teal-500 mx-auto mb-8"></div>
                    <div className="flex justify-center">
                        <iframe
                            src="https://luma.com/embed/event/evt-75ByfVzjHfe44c1/simple"
                            width="600"
                            height="820"
                            frameBorder="0"
                            style={{ borderRadius: '4px', width: '100%', maxWidth: '600px', minHeight: '600px' }}
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex={0}
                            title="Billetterie Luma"
                        />
                    </div> 
                </div>
            </section>
            {/* Speakers/Guests Section */}
            <section className="py-8 px-6" style={{ contentVisibility: 'auto', containIntrinsicSize: '1400px' }}>
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-300 via-yellow-200 to-teal-200 bg-clip-text text-transparent">
                        {t('pitchathon.speakers.title')}
                    </p>
                    <div className="w-1/5 h-1 bg-gradient-to-r from-red-400 to-teal-500 mx-auto mb-8"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8 max-w-max mx-auto">
                        {speakers.map((sp, i) => (
                            <SpeakerCard
                                key={i}
                                photo={sp.img}
                                firstName={sp.name.split(' ')[0]}
                                lastName={sp.name.split(' ').slice(1).join(' ')}
                                role={sp.role}
                                linkedinUrl={sp.linkedin ? sp.linkedin : undefined}
                                xUrl={sp.twitter ? sp.twitter : undefined}
                            />
                        ))}
                    </div>
                </div>
            </section>
            {/* Sponsors Section */}
            <section className="py-8 px-6" style={{ contentVisibility: 'auto', containIntrinsicSize: '1200px' }}>
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-300 via-yellow-200 to-teal-200 bg-clip-text text-transparent">
                        {t('pitchathon.sponsors.title')}
                    </p>
                    <div className="w-1/5 h-1 bg-gradient-to-r from-red-400 to-teal-500 mx-auto mb-8"></div>
                </div>
                {/* Gold Tier */}
                <div className="max-w-7xl mb-12 mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                        {sponsorsGold.map((sponsor, i) => (
                            <SponsorCard key={i} {...sponsor}/>
                        ))}
                    </div>
                </div>
            </section>
            {/* Partners Section */}
            <section className="py-8 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-300 via-yellow-200 to-teal-200 bg-clip-text text-transparent">
                        {t('pitchathon.partners.title')}
                    </p>
                    <div className="w-1/5 h-1 bg-gradient-to-r from-red-400 to-teal-500 mx-auto mb-8"></div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8 max-w-max mx-auto">
                        {partners.map((partner, i) => (
                            <PartnerCard key={i} {...partner} />
                        ))}
                    </div>
                </div>
            </section>
             {/* Community Partners Section */}
            <section className="py-8 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-300 via-yellow-200 to-teal-200 bg-clip-text text-transparent">
                        {t('pitchathon.communityPartners.title')}
                    </p>
                    <div className="w-1/5 h-1 bg-gradient-to-r from-red-400 to-teal-500 mx-auto mb-8"></div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8 max-w-max mx-auto">
                        {communityPartners.map((partner, i) => (
                            <PartnerCard key={i} {...partner} />
                        ))}
                    </div>
                </div>
            </section>
            {/* Address & Map Section*/}
            <Footer />
        </div>
    );
}

export default PitchathonEthCC;